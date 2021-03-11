import React from 'react'
import PropTypes from 'prop-types';

function Card({ image, name, desc, features }) {

    return (
        <div className="card-jussi">
            <div className="card-jussi-head">
                <div className="image-roundered">
                    <h1>{image}</h1>
                </div>
            </div>
            <div className="card-jussi-body">
                <p className="card-jussi-body-title">{name}</p>
                <p className="card-jussi-body-desc">{desc}</p>
                <ul className="card-jussi-body-list">
                    {
                        features.map(feature => (
                            <li>{feature}</li>
                        ))
                    }
                </ul>
                <button className="card-jussi-body-button">Ver Solução</button>
            </div>
            <div className="card-jussi-footer"></div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    feature: PropTypes.array
}

Card.defaultProps = {
    image: "P1",
    name: "Nome do Produto ",
    desc: "Descrição do produto ",
    features: ["Feature 1", "Feature 2", "Feature 3"]
}

export default Card
