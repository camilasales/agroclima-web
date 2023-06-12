import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";

export const  Home = () => {

    const [weather, setWeather] = useState(false);

    let apiWeather  = async (latitude, longitude) => {
        const headers = {
            'Authorization': "bearer " + localStorage.getItem("TOKEN")
        }
        const api = axios.create({
            baseURL: 'https://agroclima-api.onrender.com',
            headers: headers
        })
        let res = await api.post('/clima-tempo/clima-atual', { latitude, longitude});
        setWeather(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        apiWeather("-46.663537", "-23.4876505")
    }, [])

        return (
            <Fragment>
                <h3>Clima atual:</h3>
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
