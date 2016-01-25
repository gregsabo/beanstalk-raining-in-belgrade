import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import connectData from 'helpers/connectData';
import { isLoaded, load } from 'redux/modules/raining';
import { connect } from 'react-redux';

function fetchData(getState, dispatch) {
  if (!isLoaded(getState())) {
    return dispatch(load());
  }
}

function renderRaining(isRaining) {
  if (isRaining) {
    return <h1>It is raining in Belgrade.</h1>;
  }
  return <h1>The skies are clear in Belgrade.</h1>;
}

@connectData(null, fetchData)
@connect(state => ({
  isRaining: state.raining.get('isRaining')
}))
export default class Home extends Component {
  static propTypes = {
    isRaining: PropTypes.bool
  }
  render() {
    return (
      <div>
        <Helmet title="Home"/>
        {renderRaining(this.props.isRaining)}
      </div>
    );
  }
}
