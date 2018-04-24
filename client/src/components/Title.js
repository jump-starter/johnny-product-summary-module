import React from 'react';
/************************************************************************/
class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
        gridRow: '2 / span 1',
        gridColumn: '3 / span 2',
        title: {
          fontSize: '38px',
          marginBottom: '18px',
        },
        description: {
          fontSize: '18px',
        },
    }

    return (
      <div style={style}>
        <div
          style={style.title}>{this.props.data[0].mainDisplay.title}
        </div>
        <div style={style.description}>{this.props.data[0].mainDisplay.description}
        </div>
      </div>
    )
  }
}
    /************************************************************************/

    export default Title;
