import React from 'react';
import './LeftSidebar.css'

function LeftSidebar() {
  return <div className='left__sidebar'>
      <div className='left__sidebar__up'>
        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon avatar'>
            <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-1/cp0/c18.0.40.40a/p40x40/272298909_3231971627031179_6410520637699308460_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_eui2=AeFOjL60rkOdf6BPIEsOYC3dxcLY5dLpeOnFwtjl0ul46ZBeCx0zPHg0_wfQ7JFYJsPcrPGnnL5CgXCYmDTmJhbG&_nc_ohc=p47gHMPla1MAX9J4V2o&_nc_ht=scontent-lga3-1.xx&oh=00_AT8mQ7PSnXkxoFDzDYCqO6n2vMfmugR2eZYBJ4lt7DAZ3g&oe=61FB18FE' alt='avatar' />
          </div>
          <span>Adam Hrioui</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeHz3wY0-H7-db_Ct2KpwAeFGpLuRymxhR8aku5HKbGFH0zcRirsOJ6om69LjMHH_wP-VJobxSLSs5pTB6Rx50nE' alt='friends icon'/>
          </div>
          <span>Amis</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeGQKtJDocThb5Eho0DiGAMqnx7hpL1dI8WfHuGkvV0jxUtb6PMCfi3nVDcfcQI4a_urTi1WRK59KPfQtyjFqOjs' alt='friends icon'/>
          </div>
          <span>Watch</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeFkLD_LbM7x4JckSLNJetwQTcwq9_8HWZBNzCr3_wdZkEIapOR72FjNYW0LFl0-ackpUfjnX-c1s2-d5jyUIImR' alt='friends icon'/>
          </div>
          <span>Groupes</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeEViWhKyLQ2nJJzaub-ZPgXyXl61KMasVHJeXrUoxqxUWhft4JJMNhGsjni-I-3nHN8JWXNkWvU2qLhu5AE6Q-y' alt='friends icon'/>
          </div>
          <span>Marketplace</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeHizd0yM8_s-aIFZ61IlUN63hPcvs_L437eE9y-z8vjfhG1edSQ95g6jEeaEDaeBK-SRuAmlPuiEhe1dFxvANuX' alt='friends icon'/>
          </div>
          <span>Souvenirs</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon'>
            <img src='https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeFIXgjUPre0pEqaUJgNQQ5RAAtpqSJeaM4AC2mpIl5oziM4GTB7JYaHhZ7e55ZVYKuc4ctp-8bRozHyDVr9KRjH' alt='friends icon'/>
          </div>
          <span>Enregistrements</span>
        </div>

        <div className='left__sidebar__icon__container'>
          <div className='left__sidebar__icon plus'>
            <svg viewBox="0 0 16 16" width="1em" height="1em" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
          </div>
          <span>Voir plus</span>
        </div>
      </div>

      <div className='left__sidebar__down'>
        <div className='border'></div>
        <h5>Vos raccourcis</h5>
      </div>

      <footer>
        <small>
        Confidentialité  · Conditions générales  · Publicités  · Choix publicitaires   · Cookies  ·  Plus · Meta © 2022
        </small>
      </footer>
  </div>;
}

export default LeftSidebar;
