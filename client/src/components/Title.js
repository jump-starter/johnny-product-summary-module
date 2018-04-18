import React from 'react';
/************************************************************************/
class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      borderStyle:'solid',
      borderWidth: '1px',
      borderColor: 'purple',

    }

    return (
      <div className="Title" style={style}>
        <p><b>Title:{this.props.data[0].mainDisplay.title}</b></p>
        <p><b>Description:{this.props.data[0].mainDisplay.description}</b></p>
        <div>
          <img src={this.props.data[0].creator.avatarImg}></img>
          <p><b>Creator:{this.props.data[0].creator.name}</b></p>
          <p><b>Number of projects:  {this.props.data[0].creator.numberProducts}</b></p>
        </div>
      </div>
    )
  }


}
/************************************************************************/

export default Title;
