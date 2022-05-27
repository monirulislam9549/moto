import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../Firebase.init';

const Purchase = () => {
    const navigator = useNavigate();

    const [user] = useAuthState(auth);
    console.log(user);
    const { id } = useParams();
    console.log(id);
    const [purchase, setPurchase] = useState({});
    const {
        _id,
        name,
        img,
        price,
        description,
        Aquantity,
        Mquantity,
    } = purchase;


    const [updateQuantity, setUpdateQuantity] = useState(0);

    const handlePurchaseProduct = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        if (quantity < Mquantity) {
            return alert('Give a valu more then a 50')
        }
        if (quantity > Aquantity) {
            return alert('Sorry We have not enough much quantity')
        }
        const updatedQuantity = Aquantity - quantity;

        const update = { updatedQuantity };
        fetch(/update/${ id }, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(update),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setUpdateQuantity(updateQuantity + 1);
                }
            });

        const purchasedInfo = {
            productId: _id,
            productName: name,
            price,
            quantity: e.target.quantity.value,
            userEmail: user.email,
            userName: user.displayName,
            userPhone: e.target.phone.value,
            userAddress: e.target.address.value,
        };

        fetch("/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(purchasedInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                navigator('/');
            })
    };


    useEffect(() => {
        fetch(/service/${ id })
            .then((res) => res.json())
            .then((data) => setPurchase(data));
    }, []);
    return (
        <div className="my-5">
            <h2 className="text-4xl font-bold text-center text-primary py-3 uppercase">
                Purchase
            </h2>
            <div className="flex h-1 justify-center my-3 ">
                <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
                <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
                <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
            </div>

            <div className=" lg:flex lg:justify-between bg-base-100 ">
                <div className="w-1/3">
                    <img src={img} alt="Album" />
                </div>
                <div className="card-body w-2/3">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <small className="font-bold">
                        Price :{" "}
                        <span className="text-yellow-500 font-bold text-xl">${price}</span>{" "}
                    </small>
                    <p className="font-semibold">
                        Available Quantity :{" "}
                        <span className="text-xl">{Aquantity}</span> pcs
                    </p>
                    <p className="font-semibold">
                        Min Order Quantity :{" "}
                        <span className="text-xl">{Mquantity}</span> pcs
                    </p>
                    <p>{description}</p>
                </div>
            </div>
            <div className=" w-1/3 mx-auto">
                <form
                    onSubmit={handlePurchaseProduct}
                    className="grid grid-cols-1 gap-4 justify-items-center w-full"
                >
                    <input
                        type="text"
                        name="name"
                        disabled
                        value={user?.displayName || "Hero Alom"}
                        className="input input-bordered w-full "
                    />
                    <input
                        type="email"
                        name="email"
                        disabled
                        value={user?.email || ""}
                        className="input input-bordered w-full "
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Your address here"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter phone here"
                        className="input input-bordered w-full "
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Add Quantity (pcs)"
                        className="input input-bordered w-full "
                    />
                    <input
                        type="submit"
                        value="Purchase Now"
                        className="btn btn-accent w-full "
                    />
                </form>
            </div>
        </div>
    );
};


export default Purchase;