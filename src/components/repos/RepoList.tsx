import React from 'react';
import RepoItem from './RepoItem';

interface Repo  {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

interface RepoListProps  {
  repos: Repo[];
};

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <h2>Latest Repositories</h2>
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;