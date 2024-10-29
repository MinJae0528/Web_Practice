import React from 'react';
import './Instagram.css';

const Instagram = () => {
  return (
    <div className="instagram">
      <aside className="sidebar">
        <img src="/instagram-logo.png" alt="Instagram Logo" className="logo" />
        <ul>
          <li><img src="/Home-icon.png" alt="Home" className="icon" /> 홈</li>
          <li><img src="/Search-icon.png" alt="Search" className="icon" /> 검색</li>
          <li><img src="/Tab-icon.png" alt="Explore Tab" className="icon" /> 탐색 탭</li>
          <li><img src="/Reels-icon.png" alt="Reels" className="icon" /> 릴스</li>
          <li><img src="/Message-icon.png" alt="Messages" className="icon" /> 메시지</li>
          <li><img src="/Heart-icon.png" alt="Notifications" className="icon" /> 알림</li>
          <li><img src="/Create-icon.png" alt="Create" className="icon" /> 만들기</li>
          <li><img src="/User-icon.png" alt="Profile" className="icon" /> 프로필</li>
          <li><img src="/Threads-icon.png" alt="Threads" className="icon" /> Threads</li>
          <li><img src="/Menu-icon.png" alt="More" className="icon" /> 더 보기</li>
        </ul>
      </aside>
      
      <main className="feed">
        <div className="story-bar">
          {Array(3).fill().map((_, index) => (
            <div className="story" key={index}>
              <div className="story-circle">
                <img src="/User-icon.png" alt="Story Icon" className="story-icon" />
              </div>
              <p className="story-username">YangMinJae</p>
            </div>
          ))}
        </div>
        
        <div className="post">
          <div className="post-header">
            <img src="/User-icon.png" alt="User Icon" className="user-circle-icon" />
            <strong>YangMinJae</strong>
            <span>1시간</span>
          </div>
          <img src="/instagram-logo.png" alt="Post Content" className="post-image" />
          <div className="post-icons">
            <img src="/Heart-icon.png" alt="Like" className="post-icon" />
            <img src="/Bookmark-icon.png" alt="Bookmark" className="post-icon" />
          </div>
          <p className="post-text">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </main>
      
      <aside className="recommendations">
        <p>회원님을 위한 추천</p>
        <ul>
          {["HongGilDong", "YangMinJae1", "YangMinJae2", "YangMinJae3", "YangMinJae4"].map((name, index) => (
            <li key={index}>
              {name} <button>팔로우</button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Instagram;
