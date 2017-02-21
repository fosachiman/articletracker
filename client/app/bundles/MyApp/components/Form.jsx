import React from 'react';

export default class Form extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <form name="article" method="post" action='/articles'>
          <label>Title</label>
          <input name="title" type="text" />
          <label>Description</label>
          <textarea name="description"></textarea>
          <label>URL</label>
          <input type="text" name="url" placeholder="copy full url"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
