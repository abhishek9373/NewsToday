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
      page:1
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=998420351e134dc2b80ea565ff227431"
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({ articles: parsedata.articles })
  }
  handlenextclick = ()=>{

  }
  handleprevclick=()=>{
    
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
      </div>
    );
  }
}

export default News;
