import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "../styles/Countries.css";
import Country from "./Country"
import Form from "./CountryInput";

import { City }  from 'country-state-city';

function convertUnixTime(unix) {
    let a = new Date(unix * 1000),
        year = a.getFullYear(),
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        month = months[a.getMonth()],
        date = a.getDate(),
        hour = a.getHours(),
        min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
        sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`;
  }

function Countries() {
    const [value, setValue] = useState('Moscow');
    const [wether, setWether] = useState([]);
    
    let arr = City.getAllCities().filter(e => (e.name).toUpperCase().includes(value.length > 2 ? value.toUpperCase() : '#') & e.countryCode == "RU");

    let somefunct = (a, b, c, d) => {
        setValue(d)
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + a  + "&lon=" + b + "&exclude=current&units=metric&appid=9f677bb07475d4cd07a0b35281c4b20a").then(res =>
        {console.log(res.data[c]);
        console.log(c)
        setWether(res.data[c])})
    };


    return(
        <div>
            <Form 
                type="text" 
                placeholder="INSERT NAME TRANSLIT"
                value = {value}
                onChange = {event => setValue(event.target.value)}
            />
            <Table striped bordered hover className={"countries"}>
                <thead><th>COUNTY</th><th>NAME</th><th>ACTION</th></thead>
                <tbody>
                
                {arr.map(city => 
                    <Country key={city.isoCode}
                        name={city.name}
                        capital={city.countryCode}
                        someFunction={somefunct}
                        lat={city.latitude}
                        lon={city.longitude}                      
                    /> 
                )}

                </tbody>
            </Table>
            <Table striped bordered hover className={"countries"}>
            <thead>
                <th>DATE</th>
                <th>TEMP</th>
                <th>WIND SPEED</th>
                <th>PRESSURE</th>
                </thead>
            <tbody>

                {wether.map(elem => <tr key={elem.dt}>
                    <td>{convertUnixTime(elem.dt)}</td>
                    <td>{elem.temp["day"] ? elem.temp["day"] : elem.temp} </td>
                    <td>{elem.wind_speed} </td>
                    <td>{elem.pressure} </td>
                    </tr>)}

            </tbody>
                    


            </Table>
        </div>
    );
}

export default Countries;