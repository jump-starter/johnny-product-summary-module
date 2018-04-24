import React from 'react';
import ReactDOM from 'react-dom';
import sampleData from '../../db/sampleData';
import Creator from './components/Creator.js'
import Title from './components/Title.js';
import MainImage from './components/MainImage.js';
import Footer from './components/Footer.js';
import Stats from './components/Stats.js';
/***********************************************************************/
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
      display: "grid",
      gridTemplateColumns: "180px 200px 620px 235px 235px 180px",
      gridTemplateRows: "54px 130px 36px 450px 60px auto",
      justifyContent: "stretch",
      lineHeight: "21px",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Karla, Helvetica Neue, Helvetica, Arial, sans-serif",
      backgroundColor: "#FBFBFA",
      color: "rgb(40, 40, 40)",
      gridAutoFlow: 'row',
      gridAutoFlow: 'column',
    }

    return (
      <div className="App" style={style}>
        <Creator data={this.state.data}/>
        <Title data={this.state.data}/>
        <MainImage data={this.state.data}/>
        <Footer data={this.state.data}/>
        <Stats data={this.state.data}/>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('Summary'));
