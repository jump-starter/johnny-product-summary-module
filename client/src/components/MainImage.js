import React from 'react';

/************************************************************************/
class MainImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'red',
    }
    console.log(this.props.data[2].mainDisplay.img);
    return (
      <div className="MainImage">
        <img src={this.props.data[0].mainDisplay.img} alt="Sorry, image seems to be broken"></img>
      </div>
    )
  }


}
/************************************************************************/

export default MainImage;
