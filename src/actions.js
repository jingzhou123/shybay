import { ARRAY_INIT, ARRAY_PICK, ARRAY_PUSH, ARRAY_REMOVE, ARRAY_SELECT } from './constants'

export function arrayPush(name, item) {
  return { type: ARRAY_PUSH, payload: { item }, meta: { name } };
}

/**
 * options: { pickedItem, pickedId, selectedItems, selectedIds }
 */
export function arrayInit(name, items, options = {}) {
  return { type: ARRAY_INIT, payload: { items, options }, meta: { name } };
}

export function arrayRemove(name, index) {
  return { type: ARRAY_REMOVE, payload: { index }, meta: { name } };
}

export function arrayPick(name, item, index) {
  return { type: ARRAY_PICK, payload: { index, item }, meta: { name } };
}

export function arraySelect(name, keys = [], items = []) {
  return { type: ARRAY_SELECT, payload: { keys, items }, meta: { name } };
}
