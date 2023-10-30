import { describe, it, expect } from 'vitest'
import { setFilterThreadByTitleActionCreator } from './action'

describe('setFilterThreadByTitleActionCreator thunk', () => {
  it('should return action with type SET_FILTER_THREAD_BY_TITLE and payload filterThreadByTitle', () => {
    const filterThreadByTitle = 'filterThreadByTitle'
    const expectedAction = {
      type: 'SET_FILTER_THREAD_BY_TITLE',
      payload: {
        filterThreadByTitle,
      },
    }

    const action = setFilterThreadByTitleActionCreator(filterThreadByTitle)

    expect(action).toEqual(expectedAction)
  })
})
