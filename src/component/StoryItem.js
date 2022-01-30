import React from 'react';
import "./Story.css";

function StoryItem({ storyImg, profileImg, profileUserName }) {
  return <div className='story__item'>
    <div className='story__item__avatar'>
      <img src={storyImg} />
    </div>
    <img src={profileImg}  alt='naruto story image' />
    <div className='story__item__filter'></div>
    <p>{profileUserName}</p>
  </div>
}

export default StoryItem;
