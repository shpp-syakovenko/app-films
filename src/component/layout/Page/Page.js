import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/layout/page.scss';
import PageView from './PageView';

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return <PageView page={children} />;
  }
}

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
