import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { routes } from '../../data/rroutes'

var regions = []
routes.map((item) => {
  regions = ([...regions, ...item.districts])
})
const uniqRegions = new Set([...regions])

var trafficLights = []
routes.map((item) => {
  trafficLights.push(item.trafficlight)
})
const uniqTL = new Set([...trafficLights])


const Filters = ({filters, setFilters}) => {
  const handleSelectChange = (event) => {
    const key = event.target.id
      return  setFilters({...filters, [key]: event.target.textContext})      
  };



  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="district-label">Район</InputLabel>
          <Select
            labelId="district-label"
            id="district-label"
            value={filters.district}
            label="Район"
            onChange={handleSelectChange}
          >
            {[...uniqRegions].map((region, index) => {
              return <MenuItem key={index} id={"district"} value={region}>{region}</MenuItem>

            })}

          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>

        <FormControl fullWidth>
          <InputLabel id="trafficLight-label">Сколько светофоров</InputLabel>
          <Select
            labelId="trafficLight-label"
            id="trafficLight"
            value={filters.trafficLight}
            label="Сколько светофоров"
            onChange={handleSelectChange}
          >
            {[...uniqTL].map((item, index) => {
              return <MenuItem key={index} value={item}>{item}</MenuItem>

            })}

          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>

        <FormControl fullWidth>
          <InputLabel id="attraction-label">Что увидеть</InputLabel>
          <Select
            labelId="attraction-label"
            id="attraction"
            value={filters.attraction}
            label="Что посмотреть"
            onChange={handleSelectChange}
          >
            <MenuItem value={"Хомлины"}>Хомлины</MenuItem>
            <MenuItem value={"Ворота"}>Ворота</MenuItem>
            <MenuItem value={"Пруд"}>Пруд</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Filters