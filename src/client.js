import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render(){
    return (
    <h2>Hello World From Class</h2>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);