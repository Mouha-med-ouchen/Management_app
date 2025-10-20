import React, { useContext } from 'react';
import { UsersContext } from './UserApp';
import { Link } from 'react-router-dom';

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
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((user, key) => (
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.country}</td>
                                <td>
                                    <Link className="btn btn-dark mx-2" to={`/user/${user.id}/edit`}>
                                        Update
                                    </Link>
                                    <Link className="btn btn-danger" to={`/user/${user.id}/delete`}>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center text-bg-danger">
                                No Users!!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
