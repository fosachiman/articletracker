import React, { PropTypes } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Articles from './Articles';
import Form from './Form';

export default class Index extends React.Component {
  static propTypes = {
    name: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
      return (
    <Router>
      <div>
        <Route exact path="/" component={() => <Articles articles={this.state.name} /> }/>
        <Route path="/form" component={Form}/>
      </div>
    </Router>
      );
  }
}
