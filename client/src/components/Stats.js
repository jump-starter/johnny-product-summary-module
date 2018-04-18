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
      <div className="Stats">
        <h1 style={style}>stats</h1>
      </div>
    )
  }


}
/************************************************************************/

export default Stats;
