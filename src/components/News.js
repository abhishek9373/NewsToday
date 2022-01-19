import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Afghanistan twin quakes kill at least 22 in poorest areas",
          description:
            "Officials say the death toll could rise from two earthquakes which hit the north-west of the nation.",
          url: "http://www.bbc.co.uk/news/world-asia-60034010",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/3B01/production/_122750151_404745d1-0dcf-4af2-8b3d-c69a254883bf.jpg",
          publishedAt: "2022-01-18T04:52:22.0649285Z",
          content:
            "Image source, BAKHTAR NEWS AGENCY\r\nImage caption, The earthquakes brought down several homes\r\nAt least 22 people have been killed so far after back-to-back earthquakes struck the west of Afghanistan … [+1489 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Tonga runway ash blocks New Zealand air relief",
          description:
            "After the tsunami New Zealand promises aid, but ash on Tonga's runway is hindering relief efforts.",
          url: "http://www.bbc.co.uk/news/world-asia-60034170",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/1349C/production/_122740097_fjwl-x3aqaaxgrp.jpg",
          publishedAt: "2022-01-18T04:22:23.0317028Z",
          content:
            "Image source, New Zealand Defence Force\r\nImage caption, A photo released by the New Zealand Defence Force showed a part of Tonga blanketed in ash\r\nNew Zealand is sending aid to disaster-struck Tonga,… [+2967 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Hong Kong police charge two former aircrew over Covid rules",
          description:
            "If convicted, the two former flight attendants could face up to six months in prison.",
          url: "http://www.bbc.co.uk/news/business-60034140",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/16372/production/_122749909_gettyimages-1235388544.jpg",
          publishedAt: "2022-01-18T04:07:23.9984712Z",
          content:
            "Image source, Getty Images\r\nHong Kong police say two former flight attendants have been arrested and charged for allegedly breaking the city's coronavirus restrictions.\r\nPolice said the two had \"cond… [+1913 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Dean Verberckmoes: Police find body of Belgian four-year old",
          description:
            "Dean Verberckmoes disappeared last week, sparking a major search in Belgium and the Netherlands.",
          url: "http://www.bbc.co.uk/news/world-europe-60033917",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/93A2/production/_122749773_4b09b25b-0dd5-486a-bbd9-3fe24b45121a.jpg",
          publishedAt: "2022-01-18T02:37:19.5580916Z",
          content:
            "Image source, Getty Images\r\nImage caption, Dutch police discovered Dean Verberckmoes' body on Neeltje Jans, an artificial island popular with tourists in Zeeland province\r\nThe remains of a four-year-… [+1663 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "'If I find a body, I recover a piece of my son'",
          description:
            "With nearly 100,000 disappeared people in Mexico, families have taken on the search themselves.",
          url: "http://www.bbc.co.uk/news/world-latin-america-59944126",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/EB7C/production/_122748206_p0bhr9nw.jpg",
          publishedAt: "2022-01-18T00:07:22.4216554Z",
          content:
            "There are now almost 100,000 people missing in Mexico, according to figures released by the National Search Commission. \r\nThe majority have disappeared amid the drug war violence of the past decade a… [+305 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title:
            "Russia-Ukraine crisis: UK sending weapons to defend Ukraine, says defence secretary",
          description:
            "The defence secretary says he is sending short-range anti-tank missiles amid Russian invasion fears.",
          url: "http://www.bbc.co.uk/news/uk-60033012",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/289A/production/_122749301_hi072708564.jpg",
          publishedAt: "2022-01-17T22:37:21.03748Z",
          content:
            "By Joseph LeeBBC News\r\nImage caption, Ukrainian army reservists took part in exercises in December as tensions with Russia mounted\r\nBritain is supplying Ukraine with short-range anti-tank missiles fo… [+2535 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title:
            "Tonga eruption: How its impact spread so widely and violently",
          description:
            "The impact of a massive eruption in Pacific has been felt around the world.",
          url: "http://www.bbc.co.uk/news/world-australia-60027360",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/63C8/production/_122744552_hi073112301_epa.jpg",
          publishedAt: "2022-01-17T19:37:26.432138Z",
          content:
            "By The Visual Journalism Team BBC News\r\nA massive volcanic eruption in Tonga, on Saturday, triggered a tsunami that spread across the Pacific in a matter of hours.\r\nWaves hit Australia, New Zealand a… [+3041 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Timed Teaser: Who was Britney’s public row with?",
          description:
            "Test your knowledge of the news these last few days - 10 questions, 10 seconds each. Go!",
          url: "http://www.bbc.co.uk/news/world-us-canada-60024348",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/B832/production/_122745174_indexpicbritney.jpg",
          publishedAt: "2022-01-17T19:37:21.9644994Z",
          content:
            "Test your news knowledge against the clock. Can you outscore your friends?\r\nIf you cannot see the quiz, follow this link.\r\nWant more of the same? Try last week's teaser. Or take Friday's quiz of the … [+75 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Texas synagogue siege: Rabbi describes escape from gunman",
          description:
            "British citizen Malik Faisal Akram died in the standoff with police after taking four hostages.",
          url: "http://www.bbc.co.uk/news/world-us-canada-60027351",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/593C/production/_122744822_de27.jpg",
          publishedAt: "2022-01-17T15:37:21.3616405Z",
          content:
            "Media caption, Watch as Rabbi Charlie Cytron-Walker tells CBS Mornings about being held hostage - and how he escaped\r\nThe rabbi of a Texas synagogue who was taken hostage on Saturday has described ho… [+2309 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "BBC News",
          title: "Anne Frank betrayal suspect identified after 77 years",
          description:
            "A new investigation identifies a suspect who may have told the Nazis about the Jewish diarist's hideout.",
          url: "http://www.bbc.co.uk/news/world-europe-60024228",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4608/production/_101582971_31957984331_703c595c9b_o.jpg",
          publishedAt: "2022-01-17T11:22:18.2434547Z",
          content:
            "Image source, Ann Frank Museum\r\nImage caption, Anne Frank's diary, written in hiding from the Nazis, is widely read more than 70 years after her death\r\nA new investigation has identified a suspect wh… [+2207 chars]",
        },
  ];
  constructor() {
    super();
    console.log("hello i am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
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
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,90)}
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
