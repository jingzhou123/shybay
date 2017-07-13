import { reducer, arrayInit, arrayPush, arrayRemove, arrayPick, arraySelect } from '..'

describe('reducer', () => {
  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })
  it('reducer arraySelect', () => {
    expect(reducer({
      table: {
        list: ['item', 'item1']
      }
    }, arraySelect('table', [0], ['item']))).toEqual({
      table: {
        list: ['item', 'item1'],
        selectedKeys: [0],
        selectedItems: ['item']
      }
    })
  })
  it('reducer arrayPick', () => {
    expect(reducer({
      table: {
        list: ['item']
      }
    }, arrayPick('table', 'item', 0))).toEqual({
      table: {
        list: ['item'],
        pickedIndex: 0,
        pickedItem: 'item'
      }
    })
  })
  it('reducer arrayRemove', () => {
    expect(reducer({
      table: {
        list: ['item']
      }
    }, arrayRemove('table', 0))).toEqual({
      table: {
        list: []
      }
    })
    expect(reducer({
      table: {
        list: ['item']
      }
    }, arrayPush('table', 'item1'))).toEqual({
      table: {
        list: ['item', 'item1']
      }
    })
  })
  it('reducer arrayPush', () => {
    expect(reducer(undefined, arrayPush('table', 'item'))).toEqual({
      table: {
        list: ['item']
      }
    })
    expect(reducer({
      table: {
        list: ['item']
      }
    }, arrayPush('table', 'item1'))).toEqual({
      table: {
        list: ['item', 'item1']
      }
    })
  })
  it('reduce arrayInit', () => {
    expect(reducer(undefined, arrayInit('table', ['item']))).toEqual({
      table: {
        list: ['item']
      }
    })
    expect(reducer(undefined, arrayInit('table', [{
      id: 1
    }], {
      selectedItems: [{
        id: 1
      }],
      selectedKeys: [1],
      pickedItem: {
        id: 1
      },
      pickedIndex: [0]
    })
    )).toEqual({
      table: {
        list: [{
          id: 1
        }],
        selectedItems: [{
          id: 1
        }],
        selectedKeys: [1],
        pickedItem: {
          id: 1
        },
        pickedIndex: [0]
      }
    })
  })
})
