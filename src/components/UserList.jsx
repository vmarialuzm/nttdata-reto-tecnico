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
        <table className="min-w-full border-collapse border border-blue-500">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Nombre</th>
                    <th className="border border-gray-300 px-4 py-2">Género</th>
                    <th className="border border-gray-300 px-4 py-2">Ubicación</th>
                    <th className="border border-gray-300 px-4 py-2">Correo electrónico</th>
                    <th className="border border-gray-300 px-4 py-2">Fecha de Nacimiento</th>
                    <th className="border border-gray-300 px-4 py-2">Fotografía</th>
                </tr>
            </thead>
            <tbody>
                {users.results.map((user, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{user.name.first} {user.name.last}</td>
                        <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
                        <td className="border border-gray-300 px-4 py-2">{user.location.city}</td>
                        <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{new Date(user.dob.date).toLocaleDateString()}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                            <img 
                                className="rounded-full h-12 w-12 mx-auto"
                                src={user.picture.medium} 
                                alt={user.name.first} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserList;