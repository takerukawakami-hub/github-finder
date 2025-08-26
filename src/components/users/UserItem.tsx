import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';

// ユーザー情報の型を定義
export interface User  {
  id : number;
  login: string;
  avatar_url: string;
};

interface UserItemProps  {
  user: User;
};
//↓typescriptにおいて、コンポーネントの型定義ができるよっていう話らしい
const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h3>{user.login}</h3>
      <div>
        {/* クリックすると詳細ページに遷移するリンク */}
        <Link to={`/user/${user.login}`} className="btn">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
