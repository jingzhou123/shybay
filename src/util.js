import { toPath } from 'lodash';

export function reduceReducers(...reducers) {
  return function finalReducer(state, action) {
    reducers.forEach((reducer) => {
      state = reducer(state, action);
    });

    return state;
  };
}

export function createReducer(initState, actionTypeToReducerMap) {
  return function reducerFn(state = initState, action) {
    if (actionTypeToReducerMap && action.type) {
      const reducer = actionTypeToReducerMap[action.type];
      state = typeof reducer === 'function' ? reducer(state, action) : state;
    }

    return state;
  };
}

const setInWithPath = (state, value, path, pathIndex) => {
  if (pathIndex >= path.length) {
    return value;
  }

  const first = path[pathIndex];
  const next = setInWithPath(state && state[first], value, path, pathIndex + 1);

  if (!state) {
    const initialized = isNaN(first) ? {} : [];
    initialized[first] = next;
    return initialized;
  }

  if (Array.isArray(state)) {
    const copy = [].concat(state);
    copy[first] = next;
    return copy;
  }

  return {
    ...state,
    [first]: next
  };
};

export const setIn = (state, field, value) => setInWithPath(state, value, toPath(field), 0);

export const getIn = (state, field) => {
  if (!state) {
    return state;
  }

  const path = toPath(field);
  const length = path.length;
  if (!length) {
    return undefined;
  }

  let result = state;
  for (let i = 0; i < length && !!result; ++i) { // eslint-disable-line no-plusplus
    result = result[path[i]];
  }

  return result;
};
