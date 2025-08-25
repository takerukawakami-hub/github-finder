import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RepoList from '../../components/repos/RepoList';
import './UserDetailPage.css';

const UserDetailPage: React.FC = () => {
  // 1. URLから :login パラメータ(ユーザー名)を取得
  const { login } = useParams<{ login: string }>();

  // 2. 必要な状態を定義
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. コンポーネントが表示された時にデータを取得
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      // ユーザー情報とリポジトリ情報を同時に取得
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${login}`),
        fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`)
      ]);
      const userData = await userRes.json();
      const reposData = await reposRes.json();

      setUser(userData);
      setRepos(reposData);
      setIsLoading(false);
    };

    if (login) {
      getUserData();
    }
  }, [login]); // loginの値が変わったら再実行

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 4. 取得したデータを表示
  return (
    <div className="user-detail-container">
      <Link to="/" className="back-btn">
        Back to Search
      </Link>
      <div className="profile-grid">
        <div className="profile-header">
          <img src={user.avatar_url} alt={user.name} className="profile-avatar" />
          <h1>{user.name}</h1>
          <p>Username: {user.login}</p>
        </div>
        <div className="profile-body">
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="github-btn">
            Show Github Profile
          </a>
          <div className="stats">
            <div className="stat">Followers: {user.followers}</div>
            <div className="stat">Following: {user.following}</div>
            <div className="stat">Public Repos: {user.public_repos}</div>
            <div className="stat">Public Gists: {user.public_gists}</div>
          </div>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
};

export default UserDetailPage;