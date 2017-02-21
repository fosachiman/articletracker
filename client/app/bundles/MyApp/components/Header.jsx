import React from 'react';

export default class Header extends React.Component {



  render() {
    return (
      <div>
        <h1>Learn Something</h1>
        <h2><a href="/form">Submit Something</a></h2>
        <h3>Articles Read: {this.props.articlesRead}</h3>
      </div>
    );
  }
}
