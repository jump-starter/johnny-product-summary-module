import React from 'react';
/************************************************************************/
class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {

      gridRow: '2 / span 1',
      gridColumn: '2 / span 3',

      avatarImg: {
        borderRadius: '50%',
        height: '42px',
        alignSelf: 'end',
      },
      creator: {
        textDecoration: 'none',
        color: 'rgb(40, 40, 40)',
      },
      title: {
        fontSize: '38px',

      },
      description: {

        fontSize: '18px',
      },
      productCount: {
        color: 'rgb(149, 149, 158)',
      },
    }

    return (
      <div className="Title" style={style}>
        <div>
          <img
            src={this.props.data[0].creator.avatarImg}
            style={style.avatarImg}>
          </img>
          <span>
            <a href="" style={style.creator}>By {" "} {this.props.data[0].creator.name}</a>
          </span>
          <div id="numProducts" style={style.productCount}>
            First created
          </div>
          <div style={style.title}>{this.props.data[0].mainDisplay.title}</div>
          <div style={style.description}>{this.props.data[0].mainDisplay.description}</div>

        </div>
      </div>
    )
  }


}
/************************************************************************/

export default Title;
