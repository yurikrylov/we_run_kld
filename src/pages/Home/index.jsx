import React from 'react'
import Filters from '../../components/Filters'
import Header from '../../components/Header'
import RouteCard from '../../components/RouteCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { routes as data } from '../../data/rroutes';
import { useState } from 'react';


const Home = () => {
  const [filters, setFilters] = useState({ district: null, trafficLights: null, attraction: null })

  console.log(filters)

  // const arr = data.filter(item => item.)

  return (
    <Container maxWidth="lg">
      <Header />
      <Filters filters={filters} setFilters={setFilters} />
      <Grid container spacing={2}>
        {data.map((route) => {
          return <Grid size={4} key={route.id}><RouteCard route={route} /></Grid>
        }
        )}
      </Grid>
    </Container>
  )
}

export default Home