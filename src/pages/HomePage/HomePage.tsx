import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserList from '../../components/users/UserList';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // APIからユーザーを検索する非同期関数
  const searchUsers = async (text: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${text}`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setUsers(data.items);
    } catch (err: any) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  
  // ページ読み込み時にURLにクエリがあれば検索を実行
  useEffect(() => {
    if (initialQuery) {
      searchUsers(initialQuery);
    }
  }, []); // 空の配列を渡すことで、初回レンダリング時のみ実行

  // フォーム送信時の処理
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchParams({ q: searchTerm });
      searchUsers(searchTerm);
    }
  };

  // クリアボタンの処理
  const handleClear = () => {
    setSearchTerm('');
    setUsers([]);
    setError(null);
    setSearchParams({});
  };

  return (
    <div className="homepage-container">
      <h1 className="title">GitHub Finder</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a GitHub username..."
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      
      {users.length > 0 && (
        <button onClick={handleClear} className="clear-btn">Clear</button>
      )}

      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!isLoading && !error && <UserList users={users} />}
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import './HomePage.css';
// import UserList from '../../components/users/UserList';

// const HomePage: React.FC = () => {
//   // searchParams: URLのクエリを読むためのオブジェクト
//   // setSearchParams: URLのクエリを書き換えるための関数
//   const [searchParams, setSearchParams] = useSearchParams();

//   // 3. URLの 'q' パラメータから初期値を取得。なければ空文字''
//   const initialQuery = searchParams.get('q') || '';

//   // 4. useStateの初期値として、URLから取得したinitialQueryを使用
//   const [searchTerm, setSearchTerm] = React.useState(initialQuery);

//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//  // APIからユーザーを検索する非同期関数
//   const searchUsers = async (text: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`https://api.github.com/search/users?q=${text}`);
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }
//       const data = await response.json();
//       setUsers(data.items);
//     } catch (err: any) {
//       setError(err.message);
//     }
//     setIsLoading(false);
//   };
  
//   // ページ読み込み時にURLにクエリがあれば検索を実行
//   useEffect(() => {
//     if (initialQuery) {
//       searchUsers(initialQuery);
//     }
//   }, []); // 空の配列を渡すことで、初回レンダリング時のみ実行
  
//   // フォームが送信されたときの処理
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm) {
//       console.log(`Searching for: ${searchTerm}`);
//       // 5. 検索実行時にURLを更新する
//       setSearchParams({ q: searchTerm });
//     }
//   };

//   // クリアボタンが押されたときの処理
//   const handleClear = () => {
//     setSearchTerm('');
//     // 6. クリア時にURLからクエリパラメータを削除する
//     setSearchParams({});
//   };

//   return (
//     <div className="homepage-container">
//       <h1 className="title">GitHub Finder</h1>
//       <p className="subtitle">Search for users and their repositories</p>
      
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter a GitHub username..."
//           className="search-input"
//         />
//         <button type="submit" className="search-btn">Search</button>
//       </form>

//       {users.length > 0 && (
//         <button onClick={handleClear} className="clear-btn">Clear</button>
//       )}

//       {isLoading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {!isLoading && !error && <UserList users={users} />}

//       {/* searchTermが空でない場合のみClearボタンを表示すると、より親切です */}
//       {searchTerm && (
//         <button onClick={handleClear} className="clear-btn">
//           Clear
//         </button>
//       )}

//       {/* 検索結果はここに表示されます */}
//       <div className="results-container">
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;