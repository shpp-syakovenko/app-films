import React from 'react';
import '../../../scss/layout/header.scss';
import HeaderView from './HeaderView';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  render() {
    return (
      <HeaderView />
    );
  }
}


export default Header;
