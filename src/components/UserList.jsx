import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=10");
                if (!response.ok) {
                    throw new Error("Error fetching users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="grid grid-cols-2 gap-2 rounded-xl ">
                {users.results.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
        </div>
    );
};

export default UserList;