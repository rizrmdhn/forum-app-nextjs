/**
 *
 * test scenario for thread action
 *
 * - thread action
 *  - receiveThreadActionCreator
 *    - should return action with type RECEIVE_THREAD and payload thread
 *  - asyncCreateThread thunk
 *   - should return action with type CREATE_THREAD and payload thread
 *   - should return error message if theres a error
 *  - asyncUpVoteThread thunk
 *    - should return error when user not login
 *    - should return action with type UP_VOTE_THREAD and payload threadId and userId
 *    - should return error message if theres a error
 *  - asyncDownVoteThread thunk
 *    - should return error when user not login
 *    - should return action with type UP_VOTE_THREAD and payload threadId and userId
 *    - should return error message if theres a error
 *  - asyncNeturalVoteThread thunk
 *    - should return error when user not login
 *    - should return action with type UP_VOTE_THREAD and payload threadId and userId
 *    - should return error message if theres a error
 *
 */

import { describe, it, vi, expect } from 'vitest'
import api from '@/utils/api'
import { IThread } from '@/types'
import {
  asyncCreateThread,
  asyncDownVoteThread,
  asyncNeturalVoteThread,
  asyncUpVoteThread,
  createThreadActionCreator,
  downVoteThreadActionCreator,
  neturalVoteThreadActionCreator,
  receiveThreadActionCreator,
  upVoteThreadActionCreator,
} from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import myToast from '@/components/myToast'

const createThread = {
  id: '1',
  body: 'test',
  category: 'test',
  createdAt: 'test',
  downVotesBy: [],
  upVotesBy: [],
  ownerId: 'test',
  totalComments: 0,
  title: 'test',
} as IThread

describe('receiveThreadActionCreator', () => {
  it('should return action with type RECEIVE_THREAD and payload thread', () => {
    // action
    const action = receiveThreadActionCreator([])

    // assertion
    expect(action).toEqual(receiveThreadActionCreator([]))
  })
})

describe('asyncCreateThread thunk', () => {
  it('should return action with type CREATE_THREAD and payload thread', async () => {
    api.createThread = () => Promise.resolve(createThread)

    const dispatch = vi.fn()

    // action
    await asyncCreateThread({
      body: 'test',
      category: 'test',
      title: 'test',
      textThreadCreated: 'test',
      textErrorCreateThread: 'test',
    })(dispatch)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(createThreadActionCreator(createThread))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message if theres a error', async () => {
    api.createThread = () => Promise.reject(new Error('error'))

    const dispatch = vi.fn()

    // action
    // @ts-ignore
    await asyncCreateThread({
      body: '',
      category: '',
      title: '',
      textThreadCreated: 'test',
      textErrorCreateThread: 'test',
    })(dispatch)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncUpVoteThread thunk', () => {
  it('should return error when user not login', async () => {
    api.upVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncUpVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should return action with type UP_VOTE_THREAD and payload threadId and userId', async () => {
    api.upVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    await asyncUpVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message if theres a error', async () => {
    api.upVoteThread = () => Promise.reject(new Error('error'))

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    // @ts-ignore
    await asyncUpVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncDownVoteThread thunk', () => {
  it('should return error when user not login', async () => {
    api.downVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncDownVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should return action with type UP_VOTE_THREAD and payload threadId and userId', async () => {
    api.downVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    await asyncDownVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message if theres a error', async () => {
    api.downVoteThread = () => Promise.reject(new Error('error'))

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    // @ts-ignore
    await asyncDownVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncNeturalVoteThread thunk', () => {
  it('should return error when user not login', async () => {
    api.neturalVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncNeturalVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should return action with type UP_VOTE_THREAD and payload threadId and userId', async () => {
    api.neturalVoteThread = () => Promise.resolve()
    myToast.fire = () =>
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true,
        value: {
          icon: 'error',
          title: 'Please login first',
        },
      })

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    await asyncNeturalVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(neturalVoteThreadActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message if theres a error', async () => {
    api.neturalVoteThread = () => Promise.reject(new Error('error'))

    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
      },
    })

    // action
    // @ts-ignore
    await asyncNeturalVoteThread('1', 'login', 'success', 'error')(dispatch, getState)

    // assertion
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
