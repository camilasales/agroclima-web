import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContextType";
import axios from "axios";

export const  Home = () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt_br',
                units: 'metric'
            }
        })
        setWeather(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude)
            setLocation(true)
            })
    }, [])

    if(location == false) {
        return(
            <Fragment>
                Você precisa habilitar a localização do browser!
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h3>Clima nas suas coordenadas</h3>
                <hr/>
                <ul>
                    <li>Temperatura atual:</li>
                    <li>Temperatura máxima: xº</li>
                    <li>Temperatura mínima: xº</li>
                    <li>Pressão: x hpa</li>
                    <li>Umidade: x%</li>
                </ul>
            </Fragment>
        )
    }
}
