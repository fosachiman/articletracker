import React from 'react';
import Header from './Header';

export default class Articles extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      read: 0
    }
    this.getArticleList = this.getArticleList.bind(this);
    this.updateRead = this.updateRead.bind(this);
  }

  updateRead() {
    let articlesRead = this.state.read;
    articlesRead = articlesRead + 1;
    console.log(articlesRead);
    this.setState({
      read: articlesRead,
    })
  }

  getArticleList() {
    let articleArr = [];
    this.props.articles.forEach(function(article,index) {
      if (article.title && article.url.includes("http"))
       articleArr.push(
          <div className="article" key={index}>
            <a href={article.url} target="_blank" ><h3>{article.title}</h3></a>
            <p>{article.description}</p>
          </div>
        )
    });
    return articleArr;
  }

  render() {
    return (
      <div>
        <Header articlesRead={this.state.read}/>
        <div onClick={() => this.updateRead()}>{this.getArticleList()}</div>
      </div>
    );
  }
}
