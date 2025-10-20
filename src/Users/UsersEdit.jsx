import React, { useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UsersContext } from "./UserApp";
import { useParams } from "react-router-dom";


export default function UsersTable({ onAddUser }) {
    const context = useContext(UsersContext)
    const fullname = useRef(null)
    const country = useRef(null)
    const params = useParams();
   
    // Id to edite:
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const { id } = params;

        const user = context.users.find(user => user.id === parseInt(id));
        if (user) {
            setCurrentUser(user);
        } else {
            console.log("error");
        }


    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();

        context.updateUser({
            payload: {
                fullname: fullname.current.value,
                country: country.current.value,
                id: parseInt(params.id),
            }

        })
        fullname.current.value = '';
        country.current.value = '';
    };

    return (
        <div className="container mt-5">
            <div className=" container card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            className="card-img"
                            alt="profile"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                <strong>FullName: </strong>{currentUser ? currentUser.fullname : ''}
                            </h5>
                            <p className="card-text">
                                Your FullName is: {currentUser ? currentUser.fullname : ''}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Your selected country is {currentUser ? currentUser.country : ''}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mb-4 text-center">Edit {currentUser ? currentUser.fullname : ''}</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            id="id"
                            defaultValue={currentUser ? currentUser.id : ''}


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
                            defaultValue={currentUser ? currentUser.fullname : ''}

                        />
                    </div>

                    <div className="col-md-5">
                        <select
                            className="form-select"
                            ref={country}
                            id="country"
                            name="country"

                            defaultValue={currentUser ? currentUser.country : ''}>
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
                            Edit
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}
