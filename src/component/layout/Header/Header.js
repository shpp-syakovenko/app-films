import React from 'react';
import '../../../scss/layout/header.scss';
import HeaderView from './HeaderView';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {id: 0, name: 'Фильмы', url: '/films', isOpen: false},
        {id: 1, name: 'Сериалы', url: '/serial', isOpen: false}
      ]
    };
  }

  toggleDropMenu = (event, id) => {
    event.preventDefault();
    const{ menu } = this.state;

    const newMenu = menu.map((item) => {
      if(id !== item.id){
        return {...item, isOpen: false}
      }else{
        return {...item, isOpen: !item.isOpen}
      }
    });
    this.setState({
      menu: newMenu
    })
  };

  closeMenu = () => {

  };

  componentDidMount() {
    document.addEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu);
  }

  render() {
    const {dropMenu, menu} = this.state;
    return (
      <HeaderView dropMenu={dropMenu}
                  toggleDropMenu={this.toggleDropMenu}
                  menu={menu}
      />
    );
  }
}


export default Header;
