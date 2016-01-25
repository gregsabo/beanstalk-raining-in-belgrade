import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import connectData from 'helpers/connectData';
import { isLoaded, load, chooseQuote } from 'redux/modules/raining';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';

function fetchData(getState, dispatch) {
  return dispatch(chooseQuote());
}

function fetchDataDeferred(getState, dispatch) {
  if (!isLoaded(getState())) {
    return dispatch(load());
  }
}

function renderRaining(isRaining) {
  let glyph = null;
  let text = null;

  if (isRaining) {
    glyph = 'tint';
    text = 'It is raining in Belgrade.';
  } else {
    glyph = 'picture';
    text = 'The skies are clear in Belgrade.';
  }
  return (<div>
    <h1>
      <Glyphicon glyph={glyph} />
    </h1>
    <h1>{text}</h1>
  </div>);
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
