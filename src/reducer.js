import { setIn, getIn } from './util';
import { ARRAY_INIT, ARRAY_PICK, ARRAY_PUSH, ARRAY_REMOVE, ARRAY_SELECT } from './constants'

const ARRAY_PROP_NAME = 'list';

/**
 * { list: [] }
 */
function arrayReducer(state = {}, action) {
  switch (action.type) {
    case ARRAY_REMOVE: {
      const array = state[ARRAY_PROP_NAME] || [];
      array.splice(action.payload.index, 1);
      return setIn(state, ARRAY_PROP_NAME, [...array]);
    }
    case ARRAY_PUSH: {
      const array = state[ARRAY_PROP_NAME] || [];
      array.push(action.payload.item);
      return setIn(state, ARRAY_PROP_NAME, [...array]);
    }
    case ARRAY_INIT: {
      let resultState = setIn(state, ARRAY_PROP_NAME, action.payload.items ? action.payload.items : []);
      resultState = {
        ...resultState,
        ...action.payload.options
      };
      return resultState;
    }
    case ARRAY_PICK: {
      let resultState = state;
      resultState = setIn(resultState, 'pickedIndex', action.payload.index);
      resultState = setIn(resultState, 'pickedItem', action.payload.item);
      return resultState;
    }
    case ARRAY_SELECT: {
      let resultState = state;
      resultState = setIn(resultState, 'selectedItems', action.payload.items);
      resultState = setIn(resultState, 'selectedKeys', action.payload.keys);
      return resultState;
    }
    default:
      return state;
  }
}

/**
 * { some: { items: [] } }
 */
export default function arrayReducerWrapper(state = {}, action) {
  switch (action.type) {
    case ARRAY_INIT:
    case ARRAY_PUSH:
    case ARRAY_REMOVE:
    case ARRAY_PICK:
    case ARRAY_SELECT: {
      let dataMap = getIn(state, action.meta.name) || {};
      dataMap = arrayReducer(dataMap, action);
      return setIn(state, action.meta.name, dataMap);
    }
    default:
      return state;
  }
}
