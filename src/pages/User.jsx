import UserList from "../components/UserList";

const User = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center font-bold">Lista de usuarios</h1>
            <UserList />
        </div>
    );
};

export default User;