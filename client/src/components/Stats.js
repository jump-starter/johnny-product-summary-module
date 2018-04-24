import React from 'react';
/************************************************************************/
class Stats extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      gridRow: '4 / span 1',
      gridColumn: '3 / span 2',
      justifySelf: 'start',

    }

    return (
      <div className="Stats" style={style}>
        <ul>
          <li style={style}>
            amtPledged: {this.props.data[0].product.amtPledged}
          </li>
          <li style={style}>
            targetAmt: {this.props.data[0].target.amt}
          </li>
          <li style={style}>
            numBackers: {this.props.data[0].product.numBackers}
          </li>
          <li style={style}>
            Days to go: today -  {this.props.data[0].target.endDate}
          </li>
          <li style={style}>
            <button type="button">Back this project</button>
          </li>
          <li style={style}>
            <button type="button">
              <img src="https://s17.postimg.cc/hs9wcy6gv/heart-icon.png" alt="" height="16" width="16">
            </img> Remind me
            </button>
          </li>
        </ul>
      </div>
    )
  }


}
/************************************************************************/

export default Stats;
