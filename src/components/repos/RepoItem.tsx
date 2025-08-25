import React from 'react';
import './RepoItem.css';

// リポジトリ情報の型を定義
type Repo = {
  name: string;
  html_url: string;
  description: string;
};

interface RepoItemProps  {
  repo: Repo;
};

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoItem;