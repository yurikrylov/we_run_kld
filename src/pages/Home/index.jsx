import React from 'react'
import Filters from '../../components/Filters'
import Header from '../../components/Header'
import RouteCard from '../../components/RouteCard';
import Container from '@mui/material/Container';
import  Grid  from '@mui/material/Grid';


const Home = () => {
    return (
        <Container maxWidth="lg">
            <Header />
            <Filters />
            <Grid container spacing={2}>
                <Grid size={4}><RouteCard /></Grid>
                <Grid size={4}><RouteCard /></Grid>
                <Grid size={4}><RouteCard /></Grid>
                <Grid size={4}><RouteCard /></Grid>

            </Grid>
        </Container>
    )
}

export default Home