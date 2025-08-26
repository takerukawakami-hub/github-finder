//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import HomePage from './pages/HomePage/HomePage'; // 仮のページ
import AboutPage from './pages/AboutPage/AboutPage'; // 仮のページ
// UserDetailPage なども後で追加
import UserDetailPage from './pages/UserDetailPage/UserDetailPage';

function App() {
  // 各ページのコンポーネントが作成されるまで、仮の要素を置きます
  // const HomePage = () => <div>ホームページ</div>;
  // const AboutPage = () => <div>Aboutページ</div>;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* 例: <Route path="/user/:username" element={<UserDetailPage />} /> */}
          <Route path="/user/:login" element={<UserDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;