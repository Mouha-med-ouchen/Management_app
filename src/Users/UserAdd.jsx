import React, { useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UsersContext } from "./UserApp";

export default function UsersTable() {
    const context = useContext(UsersContext)
    const fullname = useRef(null)
    const country = useRef(null)

    useEffect(() => {
        console.log(context)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        context.AddUser({
            payload: {
                fullname: fullname.current.value,
                country: country.current.value,
                id: context.lastId + 1
            }

        })
        fullname.current.value = '';
        country.current.value = '';
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Add Users</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            id="id"
                            value={context.lastId}
                        />
                    </div>
                    <div className="col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            ref={fullname}
                            id="fullname"
                            name="fullname"
                        />
                    </div>

                    <div className="col-md-5">
                        <select
                            className="form-select"
                            ref={country}
                            id="country"
                            name="country"
                        >
                            <option value="">Select Country</option>
                            <option value="Morocco">Morocco</option>
                            <option value="USA">USA</option>
                            <option value="France">France</option>
                            <option value="Spain">Spain</option>
                            <option value="Germany">Germany</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                            <option value="Italy">Italy</option>
                        </select>
                    </div>
                    <div className="col-md-2 d-grid">
                        <button className="btn btn-primary" type="submit">
                            Add User
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}
