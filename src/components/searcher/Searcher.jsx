import React, { useState } from 'react';
import { motion } from "framer-motion";

// Hooks
import useFetch from '../../../hooks/useFetch'

// Components
import LoaderDots from '../loader/LoaderDots'

// Icons
import SearchLogo from '../../assets/svg/search.svg';

function Searcher() {
  const [rotate, setRotate] = useState(false);
  const [typing, setTyping] = useState("");
  const [openResult, setOpenResult] = useState(false)
  const [data, setUrl] = useFetch("");

  const { response, isLoading, error } = data;

  const variants = {
    scale: [1, 1.2, 1],
  }

  const animateState = () => {
    if (rotate) {
      return variants
    }
    return null
  }

  const handleHoverOn = () => setRotate(true);

  const handleHoverOff = () => {
    setRotate(false);
    // setOpenResult(false)
  }

  const handleClick = () => {
    setOpenResult(true)
  }

  console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://www.omdbapi.com/?s=${typing}&apikey=a7624ac4`)
  }

  const closeModal = () => {
    setOpenResult(false)
  }

  return (
    <div className="searcher" onSubmit={handleSubmit}>
      <form className="searcher-container">
        <input type="text" name="input-search"
          onMouseEnter={() => handleHoverOn()}
          onMouseLeave={() => handleHoverOff()}
          onChange={(e) => { setTyping(e.target.value) }}
          placeholder="Buscar"
        />
        <motion.button animate={animateState()} className="searcher-icon" onClick={() => handleClick()}>
          <img src={SearchLogo} alt="Search Logo" />
        </motion.button>
      </form>
      {
        openResult ?
          <div className="searcher-result">
            {
              isLoading ?
                <div className="searcher-loaderdots">
                  <LoaderDots />
                </div>
                :
                <div className="searcher-result-form">

                  {response !== null && !response.Error ?
                    <>
                      <div className="searcher-form-header">
                        <p>Resultados: {response.Search.length}</p>
                        <span onClick={() => closeModal()}>X</span>
                      </div>
                      <div className="searcher-form-body">
                        <div className="form-body-col">
                          <span>Imagem</span>
                          <span>Titulo</span>
                          <span>Ano</span>
                        </div>
                        {response.Search.map(item => (
                          <div>
                            <img src={item.Poster} alt="img" />
                            <p>{item.Title}</p>
                            <span>{item.Year}</span>
                          </div>
                        ))}
                      </div>
                      <div className="searcher-form-footer">
                        <a href="#">Mais Produtos</a>
                      </div>
                    </>
                    :
                    <div>
                      <h1 style={{ width: '100%', textAlign: "center" }}>{response?.Error}</h1>
                    </div>
                  }
                </div>
            }
          </div>
          :
          null
      }
    </div >

  )
}

export default Searcher
