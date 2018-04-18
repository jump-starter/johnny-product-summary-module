import React from 'react';
import ReactDOM from 'react-dom';
import sampleData from '../../db/sampleData';
import Title from './components/Title.js';
import MainImage from './components/MainImage.js';
import Footer from './components/Footer.js';
import Stats from './components/Stats.js';
/************************************************************************/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: sampleData,
    }
  }

  render() {
    console.log(this.state.data)
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'pink',
    }
    return (
      <div className="App" style={style}>
        <Title data={this.state.data}/>
        <MainImage data={this.state.data}/>
        <Footer data={this.state.data}/>
        <Stats data={this.state.data}/>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));
