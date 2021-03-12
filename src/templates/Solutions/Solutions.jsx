import React from 'react'
import PropTypes from 'prop-types';

// Components
import Card from '../../components/card/Card'

// Json Data
import listSolutions from '../../../data/solutions.json'

function Solutions({ title }) {
  return (
    <>
      <h1 className="solution-title"> <span>//</span> {title}</h1>
      <div className="solution-list">
        {listSolutions ?
          listSolutions.map(solution => (
            <Card key={solution.id} image={solution.image} name={solution.name} desc={solution.desc} features={solution.features} />
          ))
          :
          <Card />
        }
      </div>
    </>
  )
}

Solutions.propTypes = {
  title: PropTypes.string
}

Solutions.defaultProps = {
  title: "Nossos Serviços"
}

export default Solutions
