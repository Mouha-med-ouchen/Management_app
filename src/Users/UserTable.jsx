import React, { useContext } from 'react';
import { UsersContext } from './UserApp';

export default function UserTable() {
    const { users } = useContext(UsersContext);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Users</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Fullname</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((user, key) => (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.country}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center text-bg-danger">
                                No Users!!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
