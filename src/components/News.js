import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
  ];
  constructor() {
    super();
    console.log("hello i am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=998420351e134dc2b80ea565ff227431&page=1&pagesize=20"
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults })
  }
  handlenextclick = async () => {
    console.log("next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=998420351e134dc2b80ea565ff227431&page=${this.state.page + 1}&pagesize=20`
      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles
      })
    }
  }
  handleprevclick = async () => {
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=998420351e134dc2b80ea565ff227431&page=${this.state.page - 1}&pagesize=20`
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles
    })


  }
  render() {
    return (
      <div className="container my-4">
        <h2 className="my-5">News Today:Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handleprevclick}> &larr; Previous</button>
          <button className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
