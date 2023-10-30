import { describe, expect, it } from 'vitest'
import threadReducer, { IThread } from './reducer'

describe('threadReducer', () => {
  it('should return the initial state', () => {
    const initialState = [] as IThread[]
    const action = { type: 'UNKNOWN' }

    expect(threadReducer(undefined, action)).toEqual(initialState)
  })

  it('should handle RECEIVE_THREAD', () => {
    const initialState = [] as IThread[]
    const action = {
      type: 'RECEIVE_THREAD',
      payload: {
        threads: [
          {
            id: '1',
            body: 'test',
            category: 'test',
            createdAt: 'test',
            downVotesBy: [],
            upVotesBy: [],
            ownerId: 'test',
            totalComments: 0,
            title: 'test',
          },
        ] as IThread[],
      },
    }

    const expectedState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ]

    expect(threadReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle CREATE_THREAD', () => {
    const initialState = [] as IThread[]
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        threads: {
          id: '1',
          body: 'test',
          category: 'test',
          createdAt: 'test',
          downVotesBy: [],
          upVotesBy: [],
          ownerId: 'test',
          totalComments: 0,
          title: 'test',
        } as IThread,
      },
    }

    const expectedState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ]

    expect(threadReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle UP_VOTE_THREAD', () => {
    const initialState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ] as IThread[]
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: '1',
        userId: '1',
      },
    }

    const expectedState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: ['1'],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ]

    expect(threadReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle DOWN_VOTE_THREAD', () => {
    const initialState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ] as IThread[]
    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: '1',
        userId: '1',
      },
    }

    const expectedState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: ['1'],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ]

    expect(threadReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle NETURAL_VOTE_THREAD', () => {
    const initialState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: ['1'],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ] as IThread[]
    const action = {
      type: 'NETURAL_VOTE_THREAD',
      payload: {
        threadId: '1',
        userId: '1',
      },
    }

    const expectedState = [
      {
        id: '1',
        body: 'test',
        category: 'test',
        createdAt: 'test',
        downVotesBy: [],
        upVotesBy: [],
        ownerId: 'test',
        totalComments: 0,
        title: 'test',
      },
    ]

    expect(threadReducer(initialState, action)).toEqual(expectedState)
  })
})
