import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CharacterInfo = () => { 

  const { id } = useParams() 

  const [ characters, setCharacter ] = useState(null)
  const [ errors, setErrors ] = useState(false)

  useEffect(() => { 
    const getCharacters = async () => { 
      try {
        const { data } = await axios.get(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
        setCharacter(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getCharacters()
  }, [id])

  return ( 
    <Container className='mt-4'>
      <Row>
        { characters ?
          <>
            <Col xs='12'><h1>{characters.name}</h1><hr /></Col>
            <Col md='5'>
              <img src={characters.image} alt={characters.name} />
            </Col>
            <Col md='5'>
              <h3><span>💪🏼</span>Occupation</h3>
              <p>{characters.occupation}</p>
              <hr />
              <h3><span>🫣</span>Looks</h3>
              <p>Hair Color:{characters.hairColor}</p>
              <hr />
              <h3><span>👀</span>First Episode</h3>
              <p>{characters.firstEpisode}</p>
              <hr />
              <h3><span>🗣</span>Voice By</h3>
              <p>{characters.voicedBy}</p>
              <hr />
              <Link className='btn btn-danger' to='/animes'>Back to List</Link>
              <a className="btn btn-dark ml-3 mr-2" href={characters.wikiUrl} target="_blank" rel="noreferrer">Wiki</a>
            </Col>
          </>
          :
          <h1 className='text-center'>
            {errors ? 'No Burgers Here :(' : 'Fetching Burgers...' }
          </h1>
        }
      </Row>
    </Container>
  )

}

export default CharacterInfo