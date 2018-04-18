import React from 'react';
/************************************************************************/
class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'blue',
      links: {
        textDecoration: 'none',
      }
    }

    return (
      <div className="Footer" style={style}>
        <img id="compass-icon" src="https://s17.postimg.cc/xhlg90027/compass_icon.png" alt="Sorry, image seems to be broken"></img>
        <a href="">{this.props.data[0].product.category}</a>
        <img id="map-pin" style={style.links} src="https://s17.postimg.cc/sp71jrxzz/map-pin.png" alt="Sorry, image seems to be broken"></img>
        <a>Location:{this.props.data[0].creator.location}</a>
      </div>
    )
  }


}
/************************************************************************/

export default Footer;
