import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Episodes = () => {

  const [ episodes, setEpisodes ] = useState([])
  const [ filteredStores, setFilteredStores ] = useState([])
  const [ seasons, setSeasons ] = useState([])
  const [ filters, setFilters ] = useState({
    season: 'All',
  })

  useEffect(() => {

    const getEpisodes = async () => {
      try {
        const { data } = await axios.get('https://bobsburgers-api.herokuapp.com/storeNextDoor/')
        // console.log(data)
        setEpisodes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getEpisodes()
  }, [])

  const handleChange = (e) => {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value,
    }
    console.log(newObj)
    setFilters(newObj)
  }

  useEffect(() => {
    if (episodes.length) {
      const seasonsList = []
      episodes.forEach(store => seasonsList.includes(store.season) ? '' : seasonsList.push(store.season))
      console.log(seasonsList)
      setSeasons(seasonsList)
    }
  }, [episodes])


  useEffect(() => {
    if (episodes.length) {
      console.log(episodes)
      const filtered = episodes.filter(store => {
        return store.season === parseFloat(filters.season) || filters.season === 'all'
      })
      setFilteredStores(filtered)
    }
  }, [filters, episodes])

  return (
    <Container className='store-nextdoor'>
      <div className='col-xs-2  mt-4'>
        <select className='form-select bg-light' aria-label='Default select example' name='season' value={filters.season} onChange={handleChange}>
          <option value='All'>All Seasons</option>
          {seasons.map(season => <option className='dropdown-item' key={season} value={season}>{season}</option>)}
        </select>
      </div>
      <Row>
        {(filteredStores.length ? filteredStores : episodes).map(stores => {
          const { id, name, season, image, episode } = stores
          return (
            <Col key={id} md='4' lg='4' className='episodes mt-5'>
              <a href='https://www.hulu.com/series/bobs-burgers-fdeb1018-4472-442f-ba94-fb087cdea069' target='_blank' rel='noreferrer'>
                <Card>
                  <Card.Img variant='top' src={image} />
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-center mb-0'>{name} - <span>Season</span>{season} <span>Episode</span>{episode}</Card.Title>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Episodes