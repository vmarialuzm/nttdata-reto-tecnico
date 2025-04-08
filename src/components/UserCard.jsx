const UserCard = ({user}) => {
    return (
        <div className="p-4 hover:bg-gray-300 rounded-xl transition-colors">
            <h1 className="font-bold text-xl">{user.name.first} {user.name.last}</h1>
            <p className="mt-1">{user.gender}</p>
            <p className="mt-1">{user.location.city}</p>
            <p className="mt-1">{user.email}</p>
            <p className="mt-1">{user.dob.date}</p>
            <img className="mt-1 rounded-2xl" src={user.picture.medium} alt={user.name.first} />
        </div>
    );
};

export default UserCard;