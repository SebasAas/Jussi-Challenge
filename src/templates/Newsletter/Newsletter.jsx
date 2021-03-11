import React from 'react'

function Newsletter() {
    return (
        <div className="newsletter-container">
            <div className="newsletter-container-text">
                <h2>//</h2>
                <h1>receba novidades da nossa área de produtos digitais.</h1>
            </div>
            <div className="newsletter-container-input">
                <form action="">
                    <input placeholder="Digite seu email" type="email" />
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
