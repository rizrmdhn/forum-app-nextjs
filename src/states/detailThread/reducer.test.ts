import { describe, expect, it } from 'vitest'
import threadDetailReducer from './reducer'
import { IThreadComment, IThreadDetail } from './action'

describe('threadDetailReducer', () => {
  it('should return null if state is null', () => {
    const initialState = null
    const action = { type: 'UNKNOWN' }

    const actual = threadDetailReducer(initialState, action)
    expect(actual).toEqual(initialState)
  })

  it('should return state when given by RECEIVE_THREADS_DETAIL action', () => {
    const state = null
    const action = {
      type: 'RECEIVE_THREADS_DETAIL',
      payload: {
        threadDetail: {
          id: '1',
          body: 'body',
          category: 'category',
          createdAt: 'createdAt',
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
          title: 'title',
          content: 'content',
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
        } as IThreadDetail,
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by UP_VOTE_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    } as IThreadDetail

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: ['1'],
      downVotesBy: [],
      comments: [],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    } as IThreadDetail

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by NEUTRAL_VOTE_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [],
    } as IThreadDetail

    const action = {
      type: 'NEUTRAL_VOTE_THREAD_DETAIL',
      payload: {
        userId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by CREATE_COMMENT_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [],
    } as IThreadDetail

    const action = {
      type: 'CREATE_COMMENT_THREAD_DETAIL',
      payload: {
        comment: {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        } as IThreadComment,
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by UP_VOTE_COMMENT_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const action = {
      type: 'UP_VOTE_COMMENT_THREAD_DETAIL',
      payload: {
        userId: '1',
        commentId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: ['1'],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by DOWN_VOTE_COMMENT_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const action = {
      type: 'DOWN_VOTE_COMMENT_THREAD_DETAIL',
      payload: {
        userId: '1',
        commentId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: ['1'],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })

  it('should return state when given by NEUTRAL_VOTE_COMMENT_THREAD_DETAIL action', () => {
    const state = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: ['1'],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const action = {
      type: 'NEUTRAL_VOTE_COMMENT_THREAD_DETAIL',
      payload: {
        userId: '1',
        commentId: '1',
      },
    }
    const expected = {
      id: '1',
      body: 'body',
      category: 'category',
      createdAt: 'createdAt',
      owner: {
        id: '1',
        name: 'name',
        avatar: 'avatar',
      },
      title: 'title',
      content: 'content',
      upVotesBy: [],
      downVotesBy: ['1'],
      comments: [
        {
          id: '1',
          content: 'content',
          createdAt: 'createdAt',
          downVotesBy: [],
          upVotesBy: [],
          owner: {
            id: '1',
            name: 'name',
            avatar: 'avatar',
          },
        },
      ],
    } as IThreadDetail

    const actual = threadDetailReducer(state, action)
    expect(actual).toEqual(expected)
  })
})
