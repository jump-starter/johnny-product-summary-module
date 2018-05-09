import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const style = {
  gridRow: '4 / span 1',
  gridColumn: '4 / span 2',
  justifySelf: 'start',
  margin: '0 0 0 36px',
  color: 'rgb(101, 105, 105)',
  after: {
    margin: '0 0 18px 0',
  },
  pledged: {
    color: 'rgb(0, 116, 96)',
    fontSize: '24px',
  },
  nums: {
    color: 'rgb(40, 40, 40)',
    fontSize: '24px',
  },
  backButton: {
    width: '345px',
    height: '48px',
    backgroundColor: 'rgb(0, 157, 116)',
    color: 'rgb(255, 255, 255)',
    fontSize: '16px',
    margin: '0 0 18px 0',
  },
  remindButton: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '200px',
    height: '48px',
    fontFamily: 'Karla, Helvetica Neue, Helvetica, Arial, sans-serif',
    borderWidth: '1px',
    borderColor: '#80809E',
    // borderColor: 'rgb(40, 40, 40)',
    margin: '0 0 18px 0',
  },
  heartText: {
    justifySelf: 'center',
    alignSelf: 'center',
    padding: '0 0 5px 0',

  },
  allOrNothing: {
    textDecoration: 'underline',
    color: 'rgb(40, 40, 40)',
    fontSize: '12px',
  },
  afterAllOrNothing: {
    color: 'rgb(40, 40, 40)',
    fontSize: '12px',
  },
};

const Stats = ({ data }) => (
  <div className="Stats" style={style}>
    <div style={style.progressbar}>
      <div />
    </div>

    <div id="pledge" style={style.after}>
      <div style={style.pledged}>
        ${data.totalPledgeAmt}
      </div>
      <div>pledged of ${data.goalAmt} goal</div>
    </div>

    <div id="backers" style={style.after}>
      <div style={style.nums}>{data.pledgesCount}</div>
      <div>backers</div>
    </div>

    <div style={style.after}>
      <div style={style.nums}>
        {moment.duration(moment(data.endDate).diff(moment(data.createdAt))).days()}
      </div>
      <div>days to go</div>
    </div>

    <div>
      <button id="backButton" type="button" style={style.backButton}>Back this project</button>
    </div>
    <div>
      <button type="button" style={style.remindButton}>
        <img src="https://s17.postimg.cc/hs9wcy6gv/heart-icon.png" alt="" height="16" width="16" /> Remind me
      </button>
    </div>
    {data.allOrNothing &&
      <div id="allOrNothing"style={style.afterAllOrNothing}>
        <a href="#" style={style.allOrNothing}>All or nothing.</a>
        <span> This project will only be funded if it reaches its goal by</span>
        <div>{moment(data.endDate).format('MMMM D YYYY, h:mm A')} PST</div>
      </div>
    }
  </div>
);

export default Stats;

Stats.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

// progressbar: {
//   backgroundColor: '#FBFBFA',
//   borderRadius: '13px', /* (height of inner div) / 2 + padding */
//   padding: '3px',
// }
// #progressbar > div {
//    background-color: orange;
//    width: 40%; /* Adjust with JavaScript */
//    height: 20px;
//    border-radius: 10px;
// }
