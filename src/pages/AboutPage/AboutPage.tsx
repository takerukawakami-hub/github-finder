import './AboutPage.css';
// import myAvatar from '../assets/my-avatar.png'; // 例: アバター画像をassetsフォルダに置く場合

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Profile</h1>
      
      {/* <img src={myAvatar} alt="My Avatar" className="avatar" /> */}
      <img  className ='img-icon'src="../../public/profile-icon.jpg" alt="profile-img" />

      <h2 className="my-name">Takeru Kawakami</h2>
      
      <div className="about-content">
        <p>
          Thank you for visiting my website.I'm Takeru.
          <br />I am currently studying HTML, CSS, JavaScript, TypeScript, and its library, React.
        </p>
        <p>
          This application was created using AI as an internship training project. 
          The user search functionality is implemented using the GitHub API.
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