import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { getIn } from './util';
import { arrayInit, arrayPick, arrayPush, arrayRemove, arraySelect } from './actions'

const arrayWrapperConnector = connect((state) => {
  const { arrayInput } = state;

  return {
    arrayInput
  };
}, {
  arrayInit, arrayPush, arrayRemove, arrayPick, arraySelect
});

class ArrayWrapper extends React.Component {
  constructor(props) {
    super(props);
    const { name, arrayInit, arrayPush, arrayRemove, arrayPick,arraySelect } = props; // eslint-disable-line

    this.actions = {
      arrayPush: item => arrayPush(name, item),
      arrayInit: items => arrayInit(name, items),
      arrayRemove: index => arrayRemove(name, index),
      arrayPick: (item, index) => arrayPick(name, item, index),
      arraySelect: (keys, items) => arraySelect(name, keys, items)
    };
  }
  componentWillMount() {
    this.initIfNeeded();
  }
  initIfNeeded() {
    if ('initItems' in this.props) {
      this.actions.arrayInit(this.props.initItems);
    }
  }
  render() {
    const { Component, component, name, arrayInput,
      arrayPush, arrayInit, arrayRemove, arrayPick, arraySelect, ...rest } = this.props; // eslint-disable-line
    const dataMap = getIn(arrayInput, name) || {};
    const items = dataMap.list || [];
    const pickedIndex = dataMap.pickedIndex;
    const pickedItem = dataMap.pickedItem;
    const selectedKeys = dataMap.selectedKeys || [];
    const selectedItems = dataMap.selectedItems || [];

    return createElement(Component || component, {
      ...this.actions, name, items, pickedIndex, pickedItem, selectedKeys, selectedItems, ...rest
    });
  }
}

export const ConnectedArrayWrapper = arrayWrapperConnector(ArrayWrapper);

