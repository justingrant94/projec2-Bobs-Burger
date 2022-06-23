import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CharacterList = () => {

  const [animes, setAnimes] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [genders, setGenders] = useState([])
  const [filters, setFilters] = useState({
    gender: 'All',
    searchTerm: '',
  })

  useEffect(() => {
    const getCharacterList = async () => {

      try {
        const { data } = await axios.get('https://bobsburgers-api.herokuapp.com/characters/')
        console.log(data)
        setAnimes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacterList()
  }, [])

  const handleChange = (e) => {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value,
    }
    setFilters(newObj)
  }

  useEffect(() => {
    if (animes.length) {
      const genderList = []
      animes.forEach(character => genderList.includes(character.gender) ? '' : genderList.push(character.gender))
      setGenders(genderList)
    }
  }, [animes])

  useEffect(() => {
    if (animes.length) {
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      const filtered = animes.filter(character => {
        return regexSearch.test(character.name) && (character.gender === filters.gender || filters.gender === 'All')
      })
      console.log(filtered)
      setFilteredCharacters(filtered)
    }
  }, [filters, animes])

  return (
    <Container className='character-list'>
      <div className="col-xs-2 mb-5 mt-4">
        <select className='form-select mb-1 mw-2' aria-label='Default select example' name='gender' value={filters.gender} onChange={handleChange}>
          <option value='All'>All</option>
          {genders.map(gender => <option className='dropdown-item' key={gender} value={gender}>{gender}</option>)}
        </select>
        <input className='form-control' id='ex-2' type='text' name='searchTerm' placeholder='🍔Burger Name...' value={filters.searchTerm} onChange={handleChange} />
      </div>
      <Row>
        {(filteredCharacters.length ? filteredCharacters : animes).map(anime => {
          const { id, name, image } = anime
          return (
            <Col key={id} md='6' lg='4' className='character mb-4'>
              <Link to={`/animes/${id}`}>
                <Card>
                  <Card.Img variant='top' src={image} />
                  <Card.Body className='bd-light'>
                    <Card.Title className='text-center mb-0'>
                      {name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CharacterList