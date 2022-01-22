import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imageurl, newsurl } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageurl ? "https://static.tweaktown.com/news/8/4/84078_525_nvidia-adds-gpu-system-processor-support-gsp-on-ampere-turing-gpus_full.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body my-5">
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}....</p>
                        <a href={newsurl} target="_blank" className="btn btn-dark btn-sm">Read MOre</a>
                    </div>
                </div>
            </div>
        )
    }
}
