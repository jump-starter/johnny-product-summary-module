import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
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
    };

    return (
      <div id="title" style={style}>
        <div
          style={style.title}
        >{this.props.data.title}
        </div>
        <div style={style.description}>{this.props.data.description}
        </div>
      </div>
    );
  }
}

export default Title;
