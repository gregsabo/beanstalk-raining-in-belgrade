import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import connectData from 'helpers/connectData';
import { isLoaded, load, chooseQuote } from 'redux/modules/raining';
import { connect } from 'react-redux';

function fetchData(getState, dispatch) {
  return dispatch(chooseQuote());
}

function fetchDataDeferred(getState, dispatch) {
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

@connectData(fetchData, fetchDataDeferred)
@connect(state => ({
  isRaining: state.raining.get('isRaining'),
  quote: state.raining.get('quote')
}))
export default class Home extends Component {
  static propTypes = {
    isRaining: PropTypes.bool,
    quote: PropTypes.string
  }
  render() {
    return (
      <div>
        <Helmet title="Home"/>
        {renderRaining(this.props.isRaining)}
        <blockquote>
          {this.props.quote}
        </blockquote>
      </div>
    );
  }
}
