import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imageurl, newsurl} = this.props;
        return (
            <div>
                <div className="card" style={{ width: "25rem" }}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body my-5">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} target="_blank" className="btn btn-primary btn-sm">Read MOre</a>
                    </div>
                </div>
            </div>
        )
    }
}
