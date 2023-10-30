import { describe, it, vi, expect } from 'vitest'
import api from '@/utils/api'
import {
  IThreadDetail,
  asyncCreateCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
  asyncDownVoteThreadDetail,
  asyncGetThreadsDetail,
  asyncNeutralVoteCommentThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncUpVoteThreadDetail,
  downVoteCommentThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralVoteCommentThreadDetailActionCreator,
  neutralVoteThreadDetailActionCreator,
  receiveThreadsDetailActionCreator,
  upVoteCommentThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
} from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { setIsLoadingActionCreator, unsetIsLoadingActionCreator } from '../isLoading/action'
import myToast from '@/components/myToast'
import { IComment } from '../../types'

const fakeThreadDetail = {
  id: '1',
  body: 'test',
  category: 'test',
  createdAt: 'test',
  downVotesBy: [],
  upVotesBy: [],
  ownerId: 'test',
  totalComments: 0,
  title: 'test',
  comments: [],
  owner: {
    id: '1',
    name: 'test',
    email: 'test',
    avatar: 'test',
  },
} as IThreadDetail

const fakeComment = {
  id: '1',
  content: 'test',
  createdAt: 'test',
  downVotesBy: [],
  upVotesBy: [],
  owner: {
    id: '1',
    name: 'test',
    email: 'test',
    avatar: 'test',
  },
} as IComment

const fakeThreadWithComments = {
  id: '1',
  body: 'test',
  category: 'test',
  createdAt: 'test',
  downVotesBy: [],
  upVotesBy: [],
  ownerId: 'test',
  totalComments: 0,
  title: 'test',
  comments: [
    {
      id: '1',
      content: 'test',
      createdAt: 'test',
      downVotesBy: [],
      upVotesBy: [],
      owner: {
        id: '1',
        name: 'test',
        avatar: 'test',
      },
    },
  ],
  owner: {
    id: '1',
    name: 'test',
    email: 'test',
    avatar: 'test',
  },
} as IThreadDetail

describe('asyncGetThreadsDetail thunk', () => {
  it('should return thread detail', async () => {
    // arrange
    // stub api.getThreadById
    api.getThreadById = () => Promise.resolve(fakeThreadDetail)

    // mock dispatch
    const dispatch = vi.fn()

    // action
    await asyncGetThreadsDetail('1')(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setIsLoadingActionCreator())
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsDetailActionCreator(fakeThreadDetail))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    // vitest will wait for 1 second before executing the next line
    expect(dispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.getThreadById
    api.getThreadById = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()

    // action
    await asyncGetThreadsDetail('1')(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setIsLoadingActionCreator())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator())
    }, 1000)
  })
})

describe('asyncUpVoteThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.upVoteThread
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncUpVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote thread detail', async () => {
    // arrange
    // stub api.upVoteThread
    api.upVoteThread = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncUpVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadDetailActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.upVoteThread
    api.upVoteThread = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncUpVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncDownVoteThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.downVoteThread
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncDownVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote thread detail', async () => {
    // arrange
    // stub api.downVoteThread
    api.downVoteThread = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncDownVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadDetailActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.downVoteThread
    api.downVoteThread = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncDownVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncNeutralVoteThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.neturalVoteThread
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncNeutralVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote thread detail', async () => {
    // arrange
    // stub api.neturalVoteThread
    api.neturalVoteThread = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncNeutralVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(neutralVoteThreadDetailActionCreator('1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.neturalVoteThread
    api.neturalVoteThread = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncNeutralVoteThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncCreateCommentThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.createCommentThread
    api.createComment = () => Promise.resolve(fakeComment)
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncCreateCommentThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should create comment thread detail', async () => {
    // arrange
    // stub api.createCommentThread
    api.getThreadById = () => Promise.resolve(fakeThreadWithComments)
    api.createComment = () => Promise.resolve(fakeComment)

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncCreateCommentThreadDetail('1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsDetailActionCreator(fakeThreadWithComments))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncUpVoteCommentThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.upVoteCommentThread
    api.upVoteComment = () => Promise.resolve()
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncUpVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote comment thread detail', async () => {
    // arrange
    // stub api.upVoteCommentThread
    api.upVoteComment = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncUpVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(upVoteCommentThreadDetailActionCreator('1', '1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.upVoteCommentThread
    api.upVoteComment = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncUpVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncDownVoteCommentThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.downVoteCommentThread
    api.downVoteComment = () => Promise.resolve()
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncDownVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote comment thread detail', async () => {
    // arrange
    // stub api.downVoteCommentThread
    api.downVoteComment = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncDownVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(downVoteCommentThreadDetailActionCreator('1', '1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.downVoteCommentThread
    api.downVoteComment = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncDownVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('asyncNeutralVoteCommentThreadDetail thunk', () => {
  it('should return error when user not login', async () => {
    // arrange
    // stub api.neutralVoteComment
    api.neutralVoteComment = () => Promise.resolve()
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

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: null,
    })

    // action
    await asyncNeutralVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
  })

  it('should upvote comment thread detail', async () => {
    // arrange
    // stub api.neutralVoteComment
    api.neutralVoteComment = () => Promise.resolve()

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncNeutralVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(neutralVoteCommentThreadDetailActionCreator('1', '1', '1'))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should return error message', async () => {
    // arrange
    // stub api.neutralVoteComment
    api.neutralVoteComment = () => Promise.reject(new Error('error'))

    // mock dispatch
    const dispatch = vi.fn()
    const getState = () => ({
      authUser: {
        id: '1',
        name: 'login',
        email: 'login',
        avatar: 'login',
      },
    })
    // action
    await asyncNeutralVoteCommentThreadDetail('1', '1', 'login', 'success', 'error')(dispatch, getState)

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
