import { isNull } from 'lodash';
import { Map } from 'immutable';
import actionTrio from 'utils/actionTrio';

const LOAD = actionTrio('raining-in-belgrade/raining/LOAD');
const QUOTE_CHOSEN = 'raining-in-belgrade/raining/QUOTE_CHOSEN';

const initialState = {
  isRaining: null,
  quote: null
};

function choose(inList) {
  return inList[Math.floor(Math.random() * inList.length)];
}

export default function reducer(stateObj = initialState, action = {}) {
  const state = new Map(stateObj);
  switch (action.type) {
    case LOAD.SUCCESS:
      return state.set('isRaining', action.result.isRaining);
    case QUOTE_CHOSEN:
      return state.set('quote', action.payload);
    default:
      return state;
  }
}

export function isLoaded(state) {
  return !isNull(state.raining.get('isRaining'));
}

export function load() {
  return {
    types: LOAD.trio,
    promise: client => client.get('/raining')
  };
}

const QUOTES = [
  "One shouldn't be afraid of the humans. Well, I am not afraid of the humans, but of what is inhuman in them.",
  'If people would know how little brain is ruling the world, they would die of fear.',
  "What doesn't hurt - is not life; what doesn't pass - is not happiness.",
  'Forgetfulness heals everything and song is the most beautiful manner of forgetting, for in song man feels only what he loves.',
  'What does your sorrow do while you sleep? -It’s awake and waiting. And when it loses patience, it wakes me up.',
  'Lands of great discoveries are also lands of great injustices.',
  'beautiful soul weeps deep',
  'I do not fear invisible worlds.',
];

export function chooseQuote() {
  return {
    type: QUOTE_CHOSEN,
    payload: choose(QUOTES)
  };
}
