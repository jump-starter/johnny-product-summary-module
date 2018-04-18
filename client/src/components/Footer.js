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
      borderColor: 'red',
    }
    
    return (
      <div className="Footer">
        <h1 style={style}>footer</h1>
      </div>
    )
  }


}
/************************************************************************/

export default Footer;
