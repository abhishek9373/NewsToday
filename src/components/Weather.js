import React, { useState } from 'react';

export default function Weather() {

    let tim= new Date();
    let tims=tim.toUTCString();

    function scrol() {
        window.scrollTo(0, 59)
    }
    scrol();

    const [place, setplace] = useState("")

    const [city, setcity] = useState({ name: "Sangamner", region: "Maharashtra", country: "India", temp: "25", humidity: "2.5%", winds: "34 Kmph",icon:"//cdn.weatherapi.com/weather/64x64/night/113.png",time:`${tims}`,climate:"Clear"})

    async function componentDidMount() {
        let url = `https://api.weatherapi.com/v1/current.json?key=b07f58d869344925997141701222901&q=${place}&aqi=no`
        let data = await fetch(url)
        let parsedata = await data.json();
        console.log(parsedata);
        setcity({ name: parsedata.location.name, region: parsedata.location.region, country: parsedata.location.country, temp: parsedata.current.temp_c, humidity: parsedata.current.humidity, winds: parsedata.current.wind_kph, icon: parsedata.current.condition.icon,time:parsedata.location.localtime ,climate:parsedata.current.condition.text})
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showlocation);
        }
    }
    function showlocation(position) {
        let ltg = position.coords.latitude + "," + position.coords.longitude;
        async function componentDidMount1() {
            let url = `https://api.weatherapi.com/v1/current.json?key=b07f58d869344925997141701222901&q=${ltg}&aqi=no`
            let data = await fetch(url)
            let parsedata = await data.json();
            console.log(parsedata);
            setcity({ name: parsedata.location.name, region: parsedata.location.region, country: parsedata.location.country, temp: parsedata.current.temp_c, humidity: parsedata.current.humidity, winds: parsedata.current.wind_kph, icon: parsedata.current.condition.icon,time:parsedata.location.localtime ,climate:parsedata.current.condition.text})
        }
        componentDidMount1();
    }


    function getlocation() {

        let acc = window.alert("NewsToday Reqiures Permission To access Your Location")
        if (!acc) {
            getLocation();
        }
        else {

        }
    }



    return <>
        <p className='text-center' style={{ fontSize: "4vw", fontFamily: "cursive" }}><strong>Today's Weather :</strong>  </p><br />
        <div className="container bg-dark mb-3 text-light text-center" style={{ height: "500px", width: "47vw", borderRadius: "7px", marginTop: "-20px" }}>
            <input type="text" className='container mt-4 bg-dark text-light' style={{ border: "1px solid grey", height: "45px", width: "60%", borderRadius: "8px" }} placeholder='Search For Location' value={place} onChange={(e) => setplace(e.target.value)} />
            <button onClick={componentDidMount} className='btn-primary mt-4 text-light my-3' style={{ border: "none", height: "47px", width: "20%", borderRadius: "8px" }}>Search</button>
            <button onClick={getlocation} className="btn btn-primary text-light" style={{ border: "1px solid grey", height: "45px", width: "30%", borderRadius: "8px" }}>Get location</button>
            <h1 className='mt-2'>{city.name}</h1>
            <h6 className='my-4'>{city.region},{city.country}.</h6>
            <h6 className='my-4'>{new Date(city.time).toDateString()}</h6>
            <h1 className='my-3'>{city.temp} <sup>o</sup>C   {city.climate}</h1>
            <img src={city.icon} alt="" />
            <h5 className='my-4'>humidity : {city.humidity}% ,Winds : {city.winds} kmph</h5>
        </div>
    </>
}
