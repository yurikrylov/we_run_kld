import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { routes as data } from '../../data/rroutes'
import { useState } from 'react';

var regions = []
data.map((item) => {
  regions = new Set([...regions, ...item.districts])
})

var trafficLights = []
data.map((item) => {
  trafficLights.push(item.trafficlight)
})
const uniqTL = [...new Set([...trafficLights])]

const Filters = ({ filters, setFilters }) => {
  const [district, setDistrict] = useState('');
  const [trafficLights, setTrafficLights] = useState('');
  const [attractions, setAttractions] = useState('');

  const handleSelectChange = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'district') {
      setDistrict(e.target.value)
      setFilters({ ...filters, district: e.target.value })
    } else if (e.target.name === 'trafficLight') {
      setTrafficLights(e.target.value)
      setFilters({ ...filters, trafficLights: e.target.value })

    }
    else if (e.target.name === 'attraction') {
      setAttractions(e.target.value)
      setFilters({ ...filters, attraction: e.target.value })
    }
  };



  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="district-label">Район</InputLabel>
          <Select
            labelId="district-label"
            id="district-label"
            name='district'
            value={district}
            label="Район"
            onChange={handleSelectChange}
          >
            {[...regions].map((region, index) => {
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
            name='trafficLight'
            value={trafficLights}
            label="Сколько светофоров"
            onChange={handleSelectChange}
          >
            {uniqTL.map((item, index) => {
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
            value={attractions}
            label="Что посмотреть"
            name='attraction'
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