import React from 'react';
import './home.css'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const Home = ()=>{
  return(
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="logo ecologic"/>
        </header>
        <main>
          <h1>Seu Marketplace de coletas de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente </p>
        
          <Link to="/createPoint">
            <span>
              <FiLogIn/>
            </span>
            <strong>
              cadastre um ponto de coleta
            </strong>
          </Link>
        </main>
        

      </div>
    </div>
  );
}

export default Home;