import React, { createContext, useState } from 'react';
import UsersLayout from './UsersLayout';

export const UsersContext = createContext({
    users: [],
    lastId: 0,
    AddUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
});

export default function UserApp() {
    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);

    const addUser = (data) => {
        setUsers(prev => [...prev, data.payload]);
        setLastId(prev => prev + 1);
    };

    const deleteUser = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id));
        window.history.back();
    };


    const updateUser = (data) => {
        const { id, ...rest } = data.payload;
        setUsers(prev =>
            prev.map(user =>
                user.id === id ? { ...user, ...rest } : user
            )
        );
        window.history.back()
    };

    return (
        <UsersContext.Provider value={{
            users,
            lastId,
            AddUser: addUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        }}>
            <UsersLayout />
        </UsersContext.Provider>
    );
}
