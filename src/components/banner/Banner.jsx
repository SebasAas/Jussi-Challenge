import React from 'react'
import PropTypes from 'prop-types';

function Banner({ children, columnsLeft, columnsRight }) {
    return (
        <section className='banner banner-container'>
            <div className="row">
                <div className={`col-12 col-lg-${columnsLeft}`}>
                    {/* Children 1 */}
                    {children[0]}
                </div>
                <div className={`col-12 col-lg-${columnsRight}`}>
                    {/* Children 2 */}
                    {children[1]}
                </div>
            </div>
        </section>
    )
}

Banner.propTypes = {
    children: PropTypes.node,
    columnsLeft: PropTypes.string,
    columnsRight: PropTypes.string,
}

Banner.defaultProps = {
    columnsLeft: "6",
    columnsRight: "6"
}

export default Banner
