import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let {title,description,imageurl,newsurl,author,date} = this.props;
        let ne=new Date();
        let ol=new Date(date);
        let days=ne.getDay()-ol.getDay();
        let hrs=ne.getHours()-ol.getHours();
        let min=ne.getMinutes()-ol.getMinutes();
        return (
            <div>
                <div className="card" >
                    <img src={!imageurl ? "https://static.tweaktown.com/news/8/4/84078_525_nvidia-adds-gpu-system-processor-support-gsp-on-ampere-turing-gpus_full.jpg" : imageurl} className="card-img-top" alt="" />
                    <div className="card-body my-5">
                        <h5 className="card-title">{title}....</h5>
                        <h6><span className="badge bg-secondary">{days<1?"New":''}</span></h6>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-muted">By {!author?"NewsToday":author} On {new Date(date).toUTCString()}</small></p>
                        <p className="card-text"><small className="text-muted">{(days===0)?hrs + "hr-" + Math.abs(min) + "min" :days + "day"} Ago</small></p>
                        <br />
                        <a href={newsurl} target="_blank" className="btn btn-dark btn-sm">Read MOre</a>
                    </div>
                </div>
            </div>
        )
    }
}
