import React from 'react';
import './Story.css'
import StoryItem from './StoryItem';

function Story() {
  return <div className='story'>
    <div className='add__story'>
      <div className='add__story__img__container'>
        <div className='add__story__filter'></div>
        <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/c73.0.160.160a/p160x160/272298909_3231971627031179_6410520637699308460_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFOjL60rkOdf6BPIEsOYC3dxcLY5dLpeOnFwtjl0ul46ZBeCx0zPHg0_wfQ7JFYJsPcrPGnnL5CgXCYmDTmJhbG&_nc_ohc=p47gHMPla1MAX9J4V2o&_nc_ht=scontent-lga3-1.xx&oh=00_AT88k075gLuKCckEY6txjh-oDWu0_vQ3Pyd8HZqIps_D0g&oe=61FBA481' alt='naruto story image'/>
      </div>

      <div className='add__story__content'>
        <div className='icon__container'>
            <svg viewBox="0 0 20 20" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 p361ku9c jnigpg78 odw8uiq3"><g fillRule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
        </div>
        <p>Créer une story</p>
      </div>
    </div>

    <StoryItem 
        storyImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/c73.0.160.160a/p160x160/272298909_3231971627031179_6410520637699308460_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFOjL60rkOdf6BPIEsOYC3dxcLY5dLpeOnFwtjl0ul46ZBeCx0zPHg0_wfQ7JFYJsPcrPGnnL5CgXCYmDTmJhbG&_nc_ohc=p47gHMPla1MAX9J4V2o&_nc_ht=scontent-lga3-1.xx&oh=00_AT88k075gLuKCckEY6txjh-oDWu0_vQ3Pyd8HZqIps_D0g&oe=61FBA481' 
        profileImg='https://scontent-lga3-1.xx.fbcdn.net/v/t15.5256-10/s280x280/272986205_992556548013104_227957405658714028_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ad6a45&_nc_eui2=AeEBcdSa-5eCDxmzfmlQxUI2WqkcdRkIzDNaqRx1GQjMMz_aMWBSPW3vnR9hBJQMYeF-Hjwp12CrRtm82TtxyerN&_nc_ohc=2eLfoSv2nr4AX9cjg6x&_nc_ht=scontent-lga3-1.xx&oh=00_AT9tEbndkIVxQBf9bI0J0z_DO7oGs_Q0FOwzqIqXF9pgCw&oe=61FBA4C6'
        profileUserName='Ayoub Houmaid'
    />
    <StoryItem 
        storyImg='https://scontent-lga3-1.xx.fbcdn.net/v/t51.36329-10/s280x280/272883430_971434773464801_7031892351369084925_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ad6a45&_nc_eui2=AeFj7P_x2XDz9zZ5U6_F_tkiFl89ONIEKpkWXz040gQqmQl-rEpU0_BiyaiMoM8yR2Egvdq1F6U3tYm0E8D87908&_nc_ohc=gWOj6w0E1W0AX9Bi_uR&_nc_ht=scontent-lga3-1.xx&oh=00_AT9dFwSF-yzaUby08_KMrR1QEhSEgFCN2whs_j_zmok1Ag&oe=61FA683A'
        profileImg='https://scontent-lga3-1.xx.fbcdn.net/v/t51.36329-10/s280x280/272883430_971434773464801_7031892351369084925_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ad6a45&_nc_eui2=AeFj7P_x2XDz9zZ5U6_F_tkiFl89ONIEKpkWXz040gQqmQl-rEpU0_BiyaiMoM8yR2Egvdq1F6U3tYm0E8D87908&_nc_ohc=gWOj6w0E1W0AX9Bi_uR&_nc_ht=scontent-lga3-1.xx&oh=00_AT9dFwSF-yzaUby08_KMrR1QEhSEgFCN2whs_j_zmok1Ag&oe=61FA683A'
        profileUserName='Youness El Mouden'
    />
    <StoryItem 
        storyImg="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/s280x280/273042024_5410795368953248_3178322090038022459_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=535e6e&_nc_eui2=AeGW-3wywtmwgkpvLrExXLMDyWKysFqbHMnJYrKwWpscyYdFwpl5BZX5sV3MpJgF4zE2Yf5DhAZPUNrzzpSK0V6m&_nc_ohc=deTrfFEB6osAX-d9pl2&_nc_ht=scontent-lga3-1.xx&oh=00_AT9Il4n8hBL3x6UsM-BP5Wv2QA392gU8-2Qqu78By8imDA&oe=61FA4DA0" 
        profileImg="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/s280x280/273042024_5410795368953248_3178322090038022459_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=535e6e&_nc_eui2=AeGW-3wywtmwgkpvLrExXLMDyWKysFqbHMnJYrKwWpscyYdFwpl5BZX5sV3MpJgF4zE2Yf5DhAZPUNrzzpSK0V6m&_nc_ohc=deTrfFEB6osAX-d9pl2&_nc_ht=scontent-lga3-1.xx&oh=00_AT9Il4n8hBL3x6UsM-BP5Wv2QA392gU8-2Qqu78By8imDA&oe=61FA4DA0"
        profileUserName='OPPO'
    />
    <StoryItem 
        storyImg='https://scontent-lga3-1.xx.fbcdn.net/v/t51.36329-10/s280x280/272916382_1778982748958124_7974909074364881556_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=ad6a45&_nc_eui2=AeGarMWxzFqO8T9Z9MAsFemifMyvN2JYcet8zK83Ylhx68SF3c2nMQS-aiS1DgEJkUG7WJTIFM35i18haG5P9Pg3&_nc_ohc=fhGaH0ZOQ9wAX_IngbZ&_nc_ht=scontent-lga3-1.xx&oh=00_AT8qykchxq5XaxuQ5eJVXPYAkrDf0I_UsSIM3-Gzn56tmw&oe=61FA47D1' alt='naruto story image'
        profileImg='https://scontent-lga3-1.xx.fbcdn.net/v/t51.36329-10/s280x280/272916382_1778982748958124_7974909074364881556_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=ad6a45&_nc_eui2=AeGarMWxzFqO8T9Z9MAsFemifMyvN2JYcet8zK83Ylhx68SF3c2nMQS-aiS1DgEJkUG7WJTIFM35i18haG5P9Pg3&_nc_ohc=fhGaH0ZOQ9wAX_IngbZ&_nc_ht=scontent-lga3-1.xx&oh=00_AT8qykchxq5XaxuQ5eJVXPYAkrDf0I_UsSIM3-Gzn56tmw&oe=61FA47D1'
        profileUserName='Rabii Skalli'
    />
    
    <StoryItem 
        storyImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/s280x280/272762112_3095705147345956_2282500707890459639_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=535e6e&_nc_eui2=AeGQHjpx18NUtdvKgm4RHD8BdNy7TwIkOX103LtPAiQ5fXXtHrMA5PtGoag22-rCV6UpenZjFCwIiRDOsqftLur3&_nc_ohc=HJ4_i6cw7dkAX-5bJmr&_nc_ht=scontent-lga3-1.xx&oh=00_AT_fsfI_Ef0OPT9vtb6ZL1_prGuRmB5WX1l_X9gllRugZw&oe=61FA5875' alt='naruto story image'
        profileImg='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/s280x280/272762112_3095705147345956_2282500707890459639_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=535e6e&_nc_eui2=AeGQHjpx18NUtdvKgm4RHD8BdNy7TwIkOX103LtPAiQ5fXXtHrMA5PtGoag22-rCV6UpenZjFCwIiRDOsqftLur3&_nc_ohc=HJ4_i6cw7dkAX-5bJmr&_nc_ht=scontent-lga3-1.xx&oh=00_AT_fsfI_Ef0OPT9vtb6ZL1_prGuRmB5WX1l_X9gllRugZw&oe=61FA5875'
        profileUserName='كازاخستان'
    />
    
  </div>;
}

export default Story;
