import React from 'react'

// Template
import Header from '../../templates/Header/Header'
import Footer from '../../templates/Footer/Footer'
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

// Json Info
import description from '../../../data/description.json'

function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="banner-top">
                    <div className="container">
                        <Banner>
                            {/* First Child */}
                            <DescriptionSection description={description.destaque} icon={true} />
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
                            <DescriptionSection description={description.us} icon={false} classList={['banner-middle-container']} />
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
            </main>
            <Footer />
        </>
    )
}

export default Home
