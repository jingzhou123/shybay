import {
  getArray, getSelectedItems, getSelectedKeys, getPickedIndex, getPickedItem
} from '..'

describe('selectors', () => {
  it('getPickedItem', () => {
    const state = {
      arrayInput: {
        table: {
          pickedItem: 'item'
        }
      }
    }
    const state1 = {
      arrayInput: {
        table: {}
      }
    }
    expect(getPickedItem(state, 'table')).toEqual('item')
    expect(getPickedItem(state1, 'table')).toBe(undefined)
  })
  it('getPickedIndex', () => {
    const state = {
      arrayInput: {
        table: {
          pickedIndex: 0
        }
      }
    }
    const state1 = {
      arrayInput: {
        table: {}
      }
    }
    expect(getPickedIndex(state, 'table')).toEqual(0)
    expect(getPickedIndex(state1, 'table')).toBe(undefined)
  })
  it('getSelectedKeys', () => {
    const state = {
      arrayInput: {
        table: {
          selectedKeys: [0]
        }
      }
    }
    const state1 = {
      arrayInput: {
        table: {}
      }
    }
    expect(getSelectedKeys(state, 'table')).toEqual([0])
    expect(getSelectedKeys(state1, 'table')).toEqual([])
  })
  it('getSelectedItems', () => {
    const state = {
      arrayInput: {
        table: {
          selectedItems: ['item']
        }
      }
    }
    const state1 = {
      arrayInput: {
        table: {}
      }
    }
    expect(getSelectedItems(state, 'table')).toEqual(['item'])
    expect(getSelectedItems(state1, 'table')).toEqual([])
  })
  it('getArray', () => {
    const state = {
      arrayInput: {
        table: {
          list: ['item']
        }
      }
    }
    const state1 = {
      arrayInput: {
        table: {}
      }
    }
    expect(getArray(state, 'table')).toEqual(['item'])
    expect(getArray(state1, 'table')).toEqual([])
  })
})
