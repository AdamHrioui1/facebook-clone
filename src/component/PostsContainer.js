import React from 'react';
import "./PostsContainer.css";
import Post from './Post';
;


function PostsContainer() {
  return <div className='posts__container'>
    <Post 
        avatarImg='https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/cp0/c22.0.50.50a/p50x50/159499669_322274685896531_7653875356535546050_n.jpg?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=70495d&amp;_nc_eui2=AeH3hHP2kipSid5ma5VbdFRa_AKyZO4Ey038ArJk7gTLTXAeXKStL7ctoGlpgnJkwWvi1aOFSg9x8J-yeknmDYI-&amp;_nc_ohc=JFz-UuRELCYAX_eij7r&amp;_nc_ht=scontent-lga3-1.xx&amp;oh=00_AT-cacbsKOnzxyzV23hdAmjxfm0RaWUGikU8IU7iX3kU-Q&amp;oe=621E14B6'
        isRadius={false}
        personAvatarImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/cp0/p40x40/271926898_472800894366170_858649939688059672_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHEmOJszW03h6uyUGYAOwdNZxa8ePvyih1nFrx4-_KKHWAsOvor-G9eBTtmn2U-i58fSYSsbEcWf1fUp8I7cjho&_nc_ohc=3RLcOjAmoUkAX9LpUhN&_nc_ht=scontent-lga3-1.xx&oh=00_AT-A5fLCnd0Ld4_hSm771G1152K2dJaFboqJ17jKBhcq0Q&oe=61FAA6F2'
        username='1,000,000 معلومـــــة وقصص مفيــــــدة'
        date='27 janvier, 18:30  · '
        content='♦نجم المنتخب المغربي أشرف حكيمي: "لا أخجل من الحديث عن ماضي أسرتي، والدي كان بائعاً متجولاً، ووالدتي كانت تعمل خادمة، لقد تعذبا من أجلي و كانا يضحيان لكي أتدرب وأمارس كرة القدم'
        postImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/s640x640/272982660_481936936785899_6551359789200219631_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeEaXmJHoE0-DRIfEQd6QxGyAKq5Cl2PvuMAqrkKXY--49Ki60d7GrhJDmklSs_BX3PyZngYLzCmzL4Xg_m8MCFI&_nc_ohc=DQdHomWBBUQAX-UhSEo&_nc_ht=scontent-lga3-1.xx&oh=00_AT_MnzSSz5aSpH49Jz3SReIX2tcmXKap2NbIy7GVBp9UkA&oe=61FB39D9'
        likesCounter='1,6 K'
        commentsCounter='89'
        shareCounter='12'
    />
    <Post 
        avatarImg='https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-1/cp0/p40x40/13321962_10154281346589201_9003079724669851144_n.png?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeFZ4hdZH3ubwnDBVMofhXbJskXMIPQ-Z-GyRcwg9D5n4dkeW7iYIyXh7TSo91bctiYsLYW-Ue_Icj2Gj_fYTFNi&_nc_ohc=-0dQKJ9irZ4AX-BJYAr&_nc_oc=AQmdu0Ib1Y2yFRZr1w-7nW2I3Lch3hBDdSUWhLWk2XxUNfEHNdbsHakwpt1D1xiOst8&_nc_ht=scontent-lga3-1.xx&oh=00_AT_7F6nKevIDHDbC2ySZ_D1kspzo4mZ5iqmlTPmxhJnZ7Q&oe=621B576D'
        isRadius={true}
        personAvatarImg=''
        username='مدونة المحترف للمعلوميات'
        date='27 janvier, 18:30  · '
        content='العملات المشفرة هذه الايام😅'
        postImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/p526x296/272795893_10160049827059201_1310968470160753099_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFSTZPvegfIRLPP467Z6l0NiYBpJhJZK2KJgGkmElkrYgsWgliontUAtBAuFALCKTMS0JT6r7Y3P1Rlwvs5qU8D&_nc_ohc=abNKLrWUcggAX9bpNvX&_nc_ht=scontent-lga3-1.xx&oh=00_AT8OOz0T6vNXDMgkIaCzPl2bOzJSqbaQlaeGtKrut66D3Q&oe=61FBB2B3'
        likesCounter='4,4 K'
        commentsCounter='497'
        shareCounter='117'
    />
    
    <Post 
        avatarImg='https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-1/cp0/p40x40/13321962_10154281346589201_9003079724669851144_n.png?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeFZ4hdZH3ubwnDBVMofhXbJskXMIPQ-Z-GyRcwg9D5n4dkeW7iYIyXh7TSo91bctiYsLYW-Ue_Icj2Gj_fYTFNi&_nc_ohc=-0dQKJ9irZ4AX-BJYAr&_nc_oc=AQmdu0Ib1Y2yFRZr1w-7nW2I3Lch3hBDdSUWhLWk2XxUNfEHNdbsHakwpt1D1xiOst8&_nc_ht=scontent-lga3-1.xx&oh=00_AT_7F6nKevIDHDbC2ySZ_D1kspzo4mZ5iqmlTPmxhJnZ7Q&oe=621B576D'
        isRadius={true}
        personAvatarImg=''
        username='مدونة المحترف للمعلوميات'
        date='27 janvier, 13:10 · '
        content='إمارة أندورا ، وهي دولة صغيرة تقع على جبال البيرينيه على الحدود بين فرنسا وإسبانيا ولديها مشغل شبكة إنترنت واحد فقط.  تعرضت هذه الامارة الى سلسلة من الهجمات الإلكترونية لحجب الخدمة التي عطلت الوصول إلى الإنترنت في جميع أنحاء البلاد. 
وكان سبب هذا الهجوم هو لمنع اللاعبين المحليين من المشاركة في بطولة SquidCraft  المستوحات من المسلسل الكوري Squid Game. وقد نجح الهجوم في منع العديد من اللاعبين من المشاركة في هذه البطولة التي قدمت جائزة ضخمة قدرها 100 ألف دولار للفائز وكانت مفتوحة فقط للمستخدمين الناطقين بالإسبانية من أوروبا وأمريكا اللاتينية .'
        postImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/p180x540/272299287_10160049683249201_834639970073803750_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFGns0P_4-aBRo6P3Eled9wzw3RYN8dha3PDdFg3x2Frbv03g-UKD-KoDrvbVhasXWrW9XW4xcRjnvDEGJaIAox&_nc_ohc=mJ6MA_8BOQ8AX8jB533&_nc_ht=scontent-lga3-1.xx&oh=00_AT-31DfwEeSzSyx9cLSoTHAw50mWaU3-mt2eXgoEFWN3nQ&oe=61FB5F70'
        likesCounter='936'
        commentsCounter='12'
        shareCounter='5'
    />
  </div>;
}

export default PostsContainer;
