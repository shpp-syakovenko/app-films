import React from 'react';

const withSubscribe = (WrapperComponent) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        nameSecond: 'Sergey'
      };
    }

    render() {
      const { nameSecond } = this.state;
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrapperComponent nameSecond={nameSecond} {...this.props} />;
    }
  }

  return Wrapper;
};

export default withSubscribe;
