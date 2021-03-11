import React from 'react'

// Components
import Card from '../../components/card/Card'

function Solutions({ title = "Nossos Serviços" }) {

    const listSolutions = [
        {
            id: 1,
            image: "P1",
            name: "Nome do Produto #1",
            desc: "Descrição do produto ",
            features: ["Feature 1", "Feature 2", "Feature 3"]
        },
        {
            id: 2,
            image: "P2",
            name: "Nome do Produto #2",
            desc: "Descrição do produto ",
            features: ["Feature 1", "Feature 2", "Feature 3"]
        },
        {
            id: 3,
            image: "P3",
            name: "Nome do Produto #3",
            desc: "Descrição do produto ",
            features: ["Feature 1", "Feature 2", "Feature 3"]
        },
        {
            id: 4,
            image: "P4",
            name: "Nome do Produto #4",
            desc: "Descrição do produto ",
            features: ["Feature 1", "Feature 2", "Feature 3"]
        }
    ]

    return (
        <>
            <h1 className="solution-title">{title}</h1>
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

export default Solutions
