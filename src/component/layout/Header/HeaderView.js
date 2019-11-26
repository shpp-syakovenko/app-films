import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/i.jpg';

const HeaderView = () => {
  return (
    <div className="header">
      <div className="topHeader">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

HeaderView.propTypes = {

};

export default HeaderView;
