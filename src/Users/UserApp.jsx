import React, { createContext, useState } from 'react';
import UsersLayout from './UsersLayout';

export const UsersContext = createContext({
    users: [],
    lastId: 0
});

export default function UserApp() {
    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);

    const addUser = (data) => {
        setUsers(prev => [...prev, data.payload]);
        setLastId(prev => prev + 1);
    };

    return (
        <UsersContext.Provider value={{ users, lastId, addUser }}>
            <UsersLayout />
        </UsersContext.Provider>
    );
}
