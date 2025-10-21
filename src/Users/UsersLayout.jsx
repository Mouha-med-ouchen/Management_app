import React from 'react';
import { Link, Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import UserTable from './UserTable';
import UserAdd from './UserAdd';
import UsersEdit from './UsersEdit';
import UserDelete from './UserDelete';

export default function UsersLayout() {
    return (
        <div className="container mt-4">
            <BrowserRouter>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Users List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/create" className="nav-link">Add User</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route index element={<UserTable />} />
                    <Route path="/user/create" element={<UserAdd />} />
                    <Route path="/user/:id/edit" element={<UsersEdit />} />
                    <Route path="/user/:id/delete" element={<UserDelete />} />
                </Routes>
            </BrowserRouter>
            <Outlet></Outlet>
        </div>
    );
}
