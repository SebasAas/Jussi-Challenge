import React from 'react'
import { motion } from "framer-motion";

// Images
import Batedera from '../../assets/images/batedera.png';
import Geladeira from '../../assets/images/geladeira.png';
import Wiskey from '../../assets/images/Wiskey.png';

function ProductBannerC3() {

    const animate = {
        opacity: 1,
        boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
        scale: 1,
        y: 40
    }

    const initial = {
        opacity: 0,
        scale: 0.6
    };

    return (
        <div className="banner-destaque-images">
            <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 0.2, }}
                className="product product-1">
                <img src={Geladeira} alt="Geladeira" />
                <button className="btn product-btn">Mais Detalhe</button>
            </motion.div>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 0.4 }}
                className="product product-2" >
                <img src={Wiskey} alt="Wiskey" />
                <button className="btn product-btn">Adicionar á sacola</button>
            </motion.div>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 0.6 }}
                className="product product-3" >
                <img src={Batedera} alt="Batedera" />
                <button className="btn product-btn">Comprar en 12x</button>
            </motion.div>
        </div>
    )
}

export default ProductBannerC3
