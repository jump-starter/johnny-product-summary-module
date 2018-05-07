import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      gridRow: '4 / span 1',
      gridColumn: '2 / span 2',
      justifySelf: 'stretch',
      alignSelf: 'stretch',
      overflow: 'hidden',
    };

    return (
      <div className="MainImage" style={style}>
        <img src={this.props.data.mainDisplay.img} alt="Sorry, image seems to be broken" />
      </div>
    );
  }
}

export default MainImage;
