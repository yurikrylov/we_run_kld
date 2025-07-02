import React from 'react'
import Filters from '../../components/Filters'
import Header from '../../components/Header'
import RouteCard from '../../components/RouteCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { routes as data } from '../../data/rroutes';
import { useState, useEffect } from 'react';


const Home = () => {
  const [filters, setFilters] = useState({ district: null, trafficLights: null, attraction: null })
  const [cardsData, setCarsdDAta] = useState([])

  useEffect(() => {
    const arr = data.filter((item )=> { if (filters.district==null){return true} else {return item.districts.includes(filters.district) }})
    setCarsdDAta(arr)

  }, [filters])

  return (
    <Container maxWidth="lg">
      <Header />
      <Filters filters={filters} setFilters={setFilters} />
      <Grid container spacing={2}>
        {cardsData.map((route) => {
          return <Grid size={4} key={route.id}><RouteCard route={route} /></Grid>
        }
        )}
      </Grid>
    </Container>
  )
}

export default Home