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
      borderColor: 'red',
    }
    
    return (
      <div className="Title">
        <h1 style ={style}>title</h1>
      </div>
    )
  }


}
/************************************************************************/

export default Title;
