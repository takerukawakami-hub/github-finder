import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

interface User  {
  id: number;
  login: string;
  avatar_url: string;
};

interface UserListProps  {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list-grid">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;