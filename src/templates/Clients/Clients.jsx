import React from 'react'

import LogoBrastemp from '../../assets/images/logo-brastemp.png';
import LogoConsul from '../../assets/images/logo-consul.png';
import LogoCompracerta from '../../assets/images/logo-compracerta.png';
import LogoThebar from '../../assets/images/logo-thebar.png';

function Clients() {
    return (
        <div className="clients-container">
            <div className="clients-container-desc">
                <p>Nuestras principales lojas VTEX</p>
                <div>➝</div>
            </div>
            <div className="clients-container-images">
                <img src={LogoBrastemp} loading="lazy" alt="Logo Brastemp" />
                <img src={LogoConsul} loading="lazy" alt="Logo Consul" />
                <img src={LogoCompracerta} loading="lazy" alt="Logo Compracerta" />
                <img src={LogoThebar} loading="lazy" alt="Logo The Bar" />
            </div>
        </div>
    )
}

export default Clients
