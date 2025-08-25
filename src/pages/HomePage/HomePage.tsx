import  { useState } from  'react';
import './HomePage.css';

const HomePage = () => {
  // 検索キーワードを管理するための状態
  const [searchWord, setSearchWord] = useState('');

  // フォームが送信されたときの処理
  const handleSearch = () => {
    //e.preventDefault(); // ページの再読み込みを防ぐ
    if (searchWord) {
      console.log(`Searching for: ${searchWord}`);
      // ここにGitHub APIを呼び出すロジックを後で追加します
    }
  };

  // クリアボタンが押されたときの処理
  const handleClear = () => {
    setSearchWord('');
    // ここに検索結果をクリアするロジックを後で追加します
  };

  return (
    <div className="homepage-container">
      <h1 className="title">GitHub Finder</h1>
      <p className="subtitle">Search for users and their repositories</p>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Enter a GitHub username..."
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      
      <button onClick={handleClear} className="clear-btn">Clear</button>

      {/* 検索結果はここに表示されます */}
      <div className="results-container">
        {/* （例：UserListコンポーネントをここに配置） */}
      </div>
    </div>
  );
};

export default HomePage;