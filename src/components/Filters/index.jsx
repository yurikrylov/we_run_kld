import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import {routes }from '../../data/rroutes'

const regions = []
routes.map((item)=>{
  regions.push(item.district)
})
const Filters = () => {
  const [district, setDistrict] = React.useState('');
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  const [trafficLight, setTrafficLight] = React.useState('');
  const handleTrafficLightChange = (event) => {
    setTrafficLight(event.target.value);
  };
  const [attraction, setAttraction] = React.useState('');
  const handleAttractionChange = (event) => {
    setAttraction(event.target.value);
  };
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Район</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={district}
            label="Район"
            onChange={handleDistrictChange}
          >
            <MenuItem value={"Балтрайон"}>Балтрайон</MenuItem>
            <MenuItem value={"Московский"}>Московский</MenuItem>
            <MenuItem value={"Центральный"}>Центральный</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Сколько светофоров</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={trafficLight}
            label="Сколько светофоров"
            onChange={handleTrafficLightChange}
          >
            <MenuItem value={"Много"}>Много</MenuItem>
            <MenuItem value={"Меньше"}>Меньше</MenuItem>
            <MenuItem value={"Мало"}>Мало</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Что увидеть</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={attraction}
            label="Что посмотреть"
            onChange={handleAttractionChange}
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