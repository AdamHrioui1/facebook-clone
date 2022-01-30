import React from 'react';

function CreateRoomFriend({ img }) {
  return <div className='friend__container__green__dot'>
        <div className='friend__container'>
        <img src={img} alt='friend'/>
        </div>
    </div>
}

export default CreateRoomFriend;
