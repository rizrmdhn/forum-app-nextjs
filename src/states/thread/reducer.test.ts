/**
 *
 * test scenario for thread reducer
 *
 * - threadReducer reducer function
 *  - should return the initial state
 *  - should handle RECEIVE_THREAD
 *    - should handle RECEIVE_THREAD
 *  - should handle CREATE_THREAD
 *    - should handle CREATE_THREAD
 *  - should handle UP_VOTE_THREAD
 *    - should handle UP_VOTE_THREAD
 *    - should handle UP_VOTE_THREAD when thread is already upvoted (remove upvote)
 *    - should return thread if no id match
 *  - should handle DOWN_VOTE_THREAD
 *    - should handle DOWN_VOTE_THREAD
 *    - should handle DOWN_VOTE_THREAD when thread is already downvoted (remove downvote)
 *    - should return thread if no id match
 *  - should handle NETURAL_VOTE_THREAD
 *    - should handle NETURAL_VOTE_THREAD
 *    - should return thread if no id match
 *
 */

import { describe, expect, it } from 'vitest'
import threadReducer, { IThread } from './reducer'

describe('threadReducer', () => {
  it('should return the initial state', () => {
    const initialState = [] as IThread[]
    const action = { type: 'UNKNOWN' }

    expect(threadReducer(undefined, action)).toEqual(initialState)
  })

  describe('RECEIVE_THREAD action', () => {
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
  })

  describe('CREATE_THREAD action', () => {
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
  })

  describe('UP_VOTE_THREAD action', () => {
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

    it('should handle UP_VOTE_THREAD when thread is already upvoted', () => {
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
          upVotesBy: [],
          ownerId: 'test',
          totalComments: 0,
          title: 'test',
        },
      ]

      expect(threadReducer(initialState, action)).toEqual(expectedState)
    })

    it('should return thread if no id match', () => {
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
          threadId: '2',
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

  describe('DOWN_VOTE_THREAD action', () => {
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

    it('should handle DOWN_VOTE_THREAD when thread is already downvoted', () => {
      const initialState = [
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
          downVotesBy: [],
          upVotesBy: [],
          ownerId: 'test',
          totalComments: 0,
          title: 'test',
        },
      ]

      expect(threadReducer(initialState, action)).toEqual(expectedState)
    })

    it('should return thread if no id match', () => {
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
          threadId: '2',
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

  describe('NETURAL_VOTE_THREAD action', () => {
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

    it('should return thread if no id match', () => {
      const initialState = [
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
      ] as IThread[]
      const action = {
        type: 'NETURAL_VOTE_THREAD',
        payload: {
          threadId: '2',
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
  })
})
