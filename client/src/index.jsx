import React from 'react';
import ReactDOM from 'react-dom';
import sampleData from '../../db/sampleData'

class App extends React.Component {
  render() {
    console.log(sampleData[0].mainDisplay)
    return (
        <h1>{sampleData[0].mainDisplay.title}</h1>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
