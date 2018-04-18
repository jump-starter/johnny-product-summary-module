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
    
    return (
      <div className="MainImage">
        <h1 style={style}>mainImage</h1>
      </div>
    )
  }


}
/************************************************************************/

export default MainImage;
