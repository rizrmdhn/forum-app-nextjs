import { describe, expect, it } from 'vitest'
import filterThreadByCategoryReducer from './reducer'

describe('filterThreadByCategoryReducer', () => {
  it('should return the initial state', () => {
    const initialState = ''
    const action = { type: 'UNKNOWN' }

    expect(filterThreadByCategoryReducer(undefined, action)).toEqual(initialState)
  })

  it('should handle SET_FILTER_THREAD_BY_CATEGORY', () => {
    const initialState = ''
    const action = { type: 'SET_FILTER_THREAD_BY_CATEGORY', payload: { filterThreadByCategory: 'foo' } }

    expect(filterThreadByCategoryReducer(initialState, action)).toEqual('foo')
  })
})
