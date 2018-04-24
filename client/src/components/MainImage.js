import React from 'react';

/************************************************************************/
class MainImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      gridRow: '4 / span 1',
      gridColumn: '2 / span 1',
      justifySelf: 'stretch',
      alignSelf: 'stretch',
      overflow: 'hidden',
    }
    console.log(this.props.data[2].mainDisplay.img);
    return (
      <div className="MainImage" style={style}>
        <img src={this.props.data[0].mainDisplay.img} alt="Sorry, image seems to be broken" ></img>
      </div>
    )
  }


}
/************************************************************************/

export default MainImage;
