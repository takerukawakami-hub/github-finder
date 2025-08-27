import React, { useEffect, useState } from 'react';
// 1. Link に加えて useNavigate をインポートします
import { useParams, useNavigate } from 'react-router-dom';
import RepoList from '../../components/repos/RepoList';
import './UserDetailPage.css';

const UserDetailPage: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  // 2. useNavigateフックを呼び出して、navigate関数を取得します
  const navigate = useNavigate();
  
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
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
  }, [login]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-detail-container">
      {/* 3. <Link>タグを<button>タグに変更し、onClickイベントを追加します */}
      <button onClick={() => navigate(-1)} className="back-btn">
        Back to Search
      </button>
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