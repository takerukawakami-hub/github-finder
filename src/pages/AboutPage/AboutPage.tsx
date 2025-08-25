import './AboutPage.css';
// import myAvatar from '../assets/my-avatar.png'; // 例: アバター画像をassetsフォルダに置く場合

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      
      {/* <img src={myAvatar} alt="My Avatar" className="avatar" /> */}
      
      <h2 className="my-name">[Takeru Kawakami]</h2>
      
      <div className="about-content">
        <p>
          Hello, I'm TAKERU. Nice to meet you :))
        </p>
        <p>
          Now, I learning about data science :)
        </p>
      </div>

      <hr className="divider" />

      <h2 className="about-app-title">About This Application</h2>
      <p>
        I created this application as a training assignment for my internship.
        User search function is implemented using GitHub API.
      </p>
      <p><strong>technology used:</strong> React, TypeScript, Vite</p>
    </div>
  );
};

export default AboutPage;