import { getIn } from './util';

export function getArray(state, name) {
  return getIn(state, `arrayInput.${name}.list`) || []
}

export function getPickedItem(state, name) {
  return getIn(state, `arrayInput.${name}.pickedItem`)
}

export function getPickedIndex(state, name) {
  return getIn(state, `arrayInput.${name}.pickedIndex`)
}

export function getSelectedItems(state, name) {
  return getIn(state, `arrayInput.${name}.selectedItems`) || []
}

export function getSelectedKeys(state, name) {
  return getIn(state, `arrayInput.${name}.selectedKeys`) || []
}
