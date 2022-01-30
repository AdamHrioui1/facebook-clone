import React from 'react';
import './CreateRoom.css'
import CreateRoomFriend from './CreateRoomFriend';

function CreateRoom() {
  return <div className='create__room__container'>
      <div className='create__room_btn__container'>
        <div className='create__room__img'></div>
        <button>Créer une salon</button>
      </div>
      <div className='create__room__container__friends'>
        <CreateRoomFriend img='https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-1/cp0/p50x50/26114165_593108301035243_4612532090287992096_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGh-mgNHTHubNDYeAqWy7T-45AysbtKtdPjkDKxu0q10yGky7st6w4VmgBPqRIRMkWSs7a9Fzi5a-TTx9cfE5VS&_nc_ohc=LgSDSMiKIHoAX9WW-a5&tn=3cBlQes_ArbTb6KJ&_nc_ht=scontent-lga3-1.xx&oh=00_AT9Dhrn3jMxiv7-rQ1koFTDTKPUm2Lp4e5V9zJ8rQiitMg&oe=621C219C' />
        <CreateRoomFriend img='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/cp0/p50x50/235989692_3226929147535479_6464154964094752465_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFLBgWkvYl7qojkSpzpp2_O7varfrN3cpfu9qt-s3dylwE8xvIB0EiGMCB-t8-jsPcup0yuOf8M-cwV6UL8x63y&_nc_ohc=MqU2-vDyMtMAX8UqscA&_nc_ht=scontent-lga3-1.xx&oh=00_AT8QxVeYoJ2lnNlGEgI1EcbWbEOAaKE0wqn1ykDTLyVZPQ&oe=61FC0730'  />
        <CreateRoomFriend img='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/cp0/p50x50/272291687_5479109245449910_4489871778859004171_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeF-ANelOAQn_tr4Xw8Y45GEryeYh4zqqp2vJ5iHjOqqnTlVm41GjYP-JV_1oKRJH53urFjxqKynrGptWeCSd8Dx&_nc_ohc=v6G9smYtL3QAX9Pz2Rv&_nc_ht=scontent-lga3-1.xx&oh=00_AT_07mL3T51gizegZeEhSq_zzhvFQ6oM4ym4r_IQ_xwMyg&oe=61FAE79A' />
        <CreateRoomFriend img='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/cp0/p50x50/262241533_1066822900818894_8236400531511401585_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHYeym-GYIqXubnsrkcw8g387cVqShK1CfztxWpKErUJzdF28SP6WbSQdJQa8QNj6LbAEk3DsXiOmK5GIK7_9JZ&_nc_ohc=foYU9Yikh90AX_bL9XS&_nc_ht=scontent-lga3-1.xx&oh=00_AT_Fn-RsZ5iG6TwFzjpJM8wgFxoCV2MM9nEgRpxIRJqvdw&oe=61FB398D' />
      </div>
  </div>;
}

export default CreateRoom;
