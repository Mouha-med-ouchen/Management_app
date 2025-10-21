import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UsersContext } from "./UserApp";
import { useParams } from "react-router-dom";

export default function UserDelete() {
    const { deleteUser } = useContext(UsersContext);
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteUser(id); // ✅ مرر فقط الـ id
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center text-danger">Delete User</h2>
            <div className="col-md-2 d-grid mx-auto">
                <button onClick={handleSubmit} className="btn btn-danger">
                    Delete !!
                </button>
            </div>
        </div>
    );
}
