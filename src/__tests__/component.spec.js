import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import TestUtils from 'react-dom/test-utils'
import Shybay, { reducer } from '..'

const makeStore = (initial = {}) => {
  const reducers = { arrayInput: reducer }
  return createStore(combineReducers(reducers), { arrayInput: initial })
}
describe('component', () => {
  it('props', () => {
    const store = makeStore()
    class Table extends React.Component {
      render() {
        return (<div>table</div>)
      }
    }
    const dom = TestUtils.renderIntoDocument(<Provider store={store}>
      <Shybay component={Table} name='table' />
    </Provider>)
    const table = TestUtils.findRenderedComponentWithType(dom, Table)
    const props = table.props
    expect(props.items).toEqual([]);
    expect(props.selectedItems).toEqual([]);
    expect(props.selectedKeys).toEqual([]);
    expect(props.pickedItem).toEqual(undefined)
    expect(props.pickedIndex).toEqual(undefined);
    expect(props.name).toEqual('table');
    expect(props).toIncludeKeys(['arrayInit', 'arrayPush', 'arrayRemove', 'arraySelect', 'arrayPush'])
  })
})
