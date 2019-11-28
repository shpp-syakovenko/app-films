import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.png';
import DropMenu from './components/DropMenu';
import FormSearch from './components/FormSearch';

const HeaderView = ({toggleDropMenu, menu, submitSearch}) => {

  return (
    <div className="header">
        <div className="logo">
          <a href="/#">
            <img src={logo} alt="logo" />
            <span>App-films</span>
          </a>
        </div>
      <div className="menu">
        <ul>
          {
            menu.map((item) => {
              return <li key={item.id}>
                <a onClick={event => toggleDropMenu(event, item.id)} href={item.url}>{item.name}
                  <span className="caret"/>
                </a>
                  {item.isOpen ? <DropMenu /> : null}
              </li>
            })
          }
        </ul>
      </div>
      <div className="search">
        <FormSearch onSubmit={submitSearch}/>
      </div>
      <div className="auth">
        <button>Войти</button>
      </div>

    </div>
  );
};

HeaderView.propTypes = {
  toggleDropMenu: PropTypes.func,
  menu: PropTypes.arrayOf(PropTypes.object),
  submitSearch: PropTypes.func
};

HeaderView.defaultProps = {
  toggleDropMenu: undefined,
  menu: [],
  submitSearch: undefined
};

export default HeaderView;
