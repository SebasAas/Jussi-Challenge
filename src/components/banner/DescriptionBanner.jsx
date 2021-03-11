import React from 'react'
import PropTypes from 'prop-types';

function DescriptionSection({ classList, icon, description: { title, desc, btn } }) {
    return (
        <div className={`banner-description ${[...classList].join(' ')}`}>
            {icon ?
                <div className="banner-description-icon">
                    <h1>//</h1>
                </div>
                :
                <div></div>
            }

            <div className="banner-description-content">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>{btn}</button>
            </div>

        </div>
    )
}

DescriptionSection.propTypes = {
    classList: PropTypes.array,
    icon: PropTypes.bool,
    description: PropTypes.object,
}

DescriptionSection.defaultProps = {
    classList: ["default"]
}

export default DescriptionSection
