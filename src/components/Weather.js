import React, { Component } from 'react';

export default class Weather extends Component {
    componentDidMount() {
        fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=pune", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "6c1f62e736msh924569f22e12da8p1ccf3ajsnc9afe8ce35a7"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }
    render() {
        return <div className='p-5' style={{backgroundColor:"#6867AC"}}>
            <h2 className='text-center' style={{marginTop:"-20px"}}>Today's Weather : </h2><br />
            <div className="container bg-dark " style={{ height: "450px", width: "450px", borderRadius: "7px" }}>
            </div>
        </div>;
    }
}
