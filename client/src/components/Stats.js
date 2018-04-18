import React from 'react';
/************************************************************************/
class Stats extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'red',
    }

    return (
      <div className="Stats" style={style}>
        <ul>
          <li>
            amtPledged: {this.props.data[0].product.amtPledged}
          </li>
          <li>
            targetAmt: {this.props.data[0].target.amt}
          </li>
          <li>
            numBackers: {this.props.data[0].product.numBackers}
          </li>
          <li>
            Days to go: today -  {this.props.data[0].target.endDate}
          </li>
          <li>
            <button type="button">Back this project</button>
          </li>
        </ul>
      </div>
    )
  }


}
/************************************************************************/

export default Stats;
