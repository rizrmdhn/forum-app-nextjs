import { describe, expect, it } from 'vitest'
import filterThreadByTitleReducer from './reducer'

describe('filterThreadByTitleReducer', () => {
  it('should return the initial state', () => {
    const initialState = ''
    const action = { type: 'UNKNOWN' }

    expect(filterThreadByTitleReducer(undefined, action)).toEqual(initialState)
  })

  it('should handle SET_FILTER_THREAD_BY_TITLE', () => {
    const initialState = ''
    const action = { type: 'SET_FILTER_THREAD_BY_TITLE', payload: { filterThreadByTitle: 'foo' } }

    expect(filterThreadByTitleReducer(initialState, action)).toEqual('foo')
  })
})
