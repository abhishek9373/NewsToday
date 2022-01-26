import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {


  static defaultProps = {
    country: 'in',
    pagesize: 12,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,

  }



  articles = [
  ];

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props) {
    super(props);
    console.log("hello i am a constructor");
    this.state = {
      articles: [],
      Loading: false,
      page: 1,
      hello: "Good Morning!"
    }
    document.title=this.capitalizeFirstLetter((this.props.category==="general")?"Home-NewsToday":this.props.category + "-NewsToday")
    const settime = () => {
      let time = new Date();
      let hr = time.getHours();
      let min = time.getMinutes();
      if (hr >= 12 && hr < 18) {

        this.setState({ hello: "Good Afternoon!" })

      }
      else if (hr >= 1 && hr < 12) {
        this.setState({ hello: "Good Morning!" })
      }
      else {
        this.setState({ hello: "Good Evening!" })
      }
    }
    window.setInterval(settime, 1000)

  }



  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7452b62b4cb84a1e979930061f497942&pagesize=${this.props.pagesize}`
    this.setState({ Loading: true })
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      Loading: false
    })
  }


  handlenextclick = async () => {
    console.log("next")
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7452b62b4cb84a1e979930061f497942&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
      this.setState({ Loading: true })
      let data = await fetch(url)
      let parsedata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        Loading: false
      })
      window.scrollTo(0, 0)
      
    }
  }


  handleprevclick = async () => {
    console.log("prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7452b62b4cb84a1e979930061f497942&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({ Loading: true })
    let data = await fetch(url)
    let parsedata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      Loading: false
    })
    window.scrollTo(0, 0)
  }



  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{ color: "green" }}>{this.state.hello}</h1>
        <h2 className="my-5 text-center" style={{ fontFamily: "verdana" }}>News Today:Top headlines</h2>
        {this.state.Loading && <Spinner />}
        <div className="row">
          {!(this.state.Loading) && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 80) : ""}
                  description={element.description ? element.description.slice(0, 200) : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button className="btn btn-dark my-3" disabled={this.state.page <= 1} onClick={this.handleprevclick}> &larr; Previous</button>
          <button className="btn btn-dark my-3" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} onClick={this.handlenextclick}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}

export default News;
