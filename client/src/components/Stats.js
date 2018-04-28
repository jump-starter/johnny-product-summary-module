import React from 'react';
/************************************************************************/
class Stats extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      gridRow: '4 / span 1',
      gridColumn: '4 / span 2',
      justifySelf: 'start',
      margin: '0 0 0 36px',
      color: 'rgb(101, 105, 105)',
      after: {
        margin: '0 0 18px 0',
      },
      pledged: {
        color: 'rgb(0, 116, 96)',
        fontSize: '24px',
      },
      nums: {
        color: 'rgb(40, 40, 40)',
        fontSize: '24px',
      },
      backButton: {
        width: '345px',
        height: '48px',
        backgroundColor: 'rgb(0, 157, 116)',
        color: 'rgb(255, 255, 255)',
        fontSize: '16px',
        margin: '0 0 18px 0',
      },
      remindButton: {
        backgroundColor: 'rgb(255, 255, 255)',
        width: '200px',
        height: '48px',
        fontFamily: "Karla, Helvetica Neue, Helvetica, Arial, sans-serif",
        borderWidth: '1px',
        borderColor: '#80809E',
        // borderColor: 'rgb(40, 40, 40)',
        margin: '0 0 18px 0',
      },
      heartText: {
        justifySelf: 'center',
        alignSelf: 'center',
        padding: '0 0 5px 0',

      },
      allOrN: {
        textDecoration: 'underline',
        color: 'rgb(40, 40, 40)',
        fontSize: '12px',
      },
      afterAllOrN: {
        color: 'rgb(40, 40, 40)',
        fontSize: '12px',
      },
    }

    return (
      <div className="Stats" style={style}>
        <div style={style.progressbar}>
          <div></div>
        </div>

        <div id="pledge" style={style.after}>
          <div style={style.pledged}>
            ${this.props.data.product.amtPledged}
          </div>
          <div>pledged of {this.props.data.target.amt} goal</div>
        </div>

        <div id="backers" style={style.after}>
          <div style={style.nums}>{this.props.data.product.numBackers}</div>
          <div>backers</div>
        </div>

        <div style={style.after}>
          <div style={style.nums}>{parseInt(Math.random() * 10)}</div>
          <div>days to go</div>
        </div>


        <div>
          <button id="backButton" type="button" style={style.backButton}>Back this project</button>
        </div>
        <div>
          <button type="button" style={style.remindButton}>
            <img src="https://s17.postimg.cc/hs9wcy6gv/heart-icon.png" alt="" height="16" width="16">
            </img> Remind me
          </button>
        </div>
        <div id="allOrN"style={style.afterAllOrN}><a href="" style={style.allOrN}>All or nothing.</a> This project will only be funded if it reaches its goal by</div>
      </div>
    )
  }


}
/************************************************************************/

export default Stats;





// progressbar: {
//   backgroundColor: '#FBFBFA',
//   borderRadius: '13px', /* (height of inner div) / 2 + padding */
//   padding: '3px',
// }
// #progressbar > div {
//    background-color: orange;
//    width: 40%; /* Adjust with JavaScript */
//    height: 20px;
//    border-radius: 10px;
// }
