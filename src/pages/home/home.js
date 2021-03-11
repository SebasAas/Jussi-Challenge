import React from 'react'

// Template
import Header from '../../templates/Header/header'
import OurClients from '../../templates/Clients/Clients'
import Solutions from '../../templates/Solutions/Solutions'

// Components
import Banner from '../../components/banner/Banner'
import DescriptionSection from '../../components/banner/DescriptionBanner'
import ProductBannerC3 from '../../components/banner/ProductBanner'

// Images
import ImageJuddi from '../../assets/images/image-jussi.png';

// Templates
import BannerComercial from '../../templates/Comercial/BannerComercial'
import Newsletter from '../../templates/Newsletter/Newsletter'

function Home() {

    const description_destaque = {
        title: "Criamos lojas que vendem mais.",
        desc: "A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?",
        btn: "Veja nossas soluções"
    }

    const description_us = {
        title: "Olá, somos a Jüssi",
        desc: "A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.",
        btn: "Conheça a Jüssi"
    }

    return (
        <>
            <Header />
            <section className="banner-top">
                <div className="container">
                    <Banner>
                        {/* First Child */}
                        <DescriptionSection description={description_destaque} icon={true} />
                        {/* Second Child */}
                        <ProductBannerC3 />
                    </Banner>
                </div>
            </section>
            <section className="clients">
                <div className="container">
                    <OurClients />
                </div>
            </section>

            <section className="solution">
                <div className="container">
                    <Solutions />
                </div>
            </section>

            <section className="banner-middle">
                <div className="container">
                    <Banner columnsLeft="3" columnsRight="9">
                        {/* First Child */}
                        <DescriptionSection description={description_us} icon={false} classList={['banner-middle-container']} />
                        {/* Second Child */}
                        <div className="banner-middle-image">
                            <img src={ImageJuddi} loading="lazy" alt="Juddi Logo" />
                        </div>
                    </Banner>
                </div>
            </section>

            <section className="banner-comercial">
                <div className="container">
                    <BannerComercial />
                </div>
            </section>

            <section className="newsletter">
                <div className="container">
                    <Newsletter />
                </div>
            </section>

        </>
    )
}

export default Home
