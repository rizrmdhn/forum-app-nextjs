import { describe, it, expect } from 'vitest'
import { setFilterThreadByCategoryActionCreator } from './action'

describe('setFilterThreadByCategoryActionCreator thunk', () => {
  it('should return action with type SET_FILTER_THREAD_BY_CATEGORY and payload filterThreadByCategory', () => {
    const filterThreadByCategory = 'filterThreadByCategory'
    const expectedAction = {
      type: 'SET_FILTER_THREAD_BY_CATEGORY',
      payload: {
        filterThreadByCategory,
      },
    }

    const action = setFilterThreadByCategoryActionCreator(filterThreadByCategory)

    expect(action).toEqual(expectedAction)
  })
})
