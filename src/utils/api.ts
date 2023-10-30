import axios from 'axios'
import { IComment, IThread, IUser } from '../types'
import { IThreadDetail } from '@/states/detailThread/action'

const api = (() => {
  const baseUrl = 'https://forum-api.dicoding.dev/v1'

  async function _fetchWithAuth(url: string, options: any) {
    return axios(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  }

  function putAccessToken(token: string) {
    localStorage.setItem('accessToken', token)
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken')
  }

  async function register({ name, email, password }: { name: string; email: string; password: string }) {
    await axios
      .post(`${baseUrl}/register`, {
        name,
        email,
        password,
      })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data

          throw new Error(message)
        }
      })
      .then((response) => {
        const { data }: any = response

        const { status, message } = data

        return {
          status,
          message,
        }
      })
  }

  async function login({ email, password }: { email: string; password: string }) {
    await axios
      .post(`${baseUrl}/login`, {
        email,
        password,
      })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data

          throw new Error(message)
        }
      })
      .then((response) => {
        const { data }: any = response

        const { token } = data.data

        return putAccessToken(token)
      })
  }

  async function getOwnProfile(): Promise<IUser> {
    let users = {} as IUser
    await _fetchWithAuth(`${baseUrl}/users/me`, {
      method: 'GET',
    })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data

          throw new Error(message)
        }
      })
      .then((response) => {
        const { data }: any = response

        const {
          data: { user },
        } = data

        users = user
      })

    return users
  }

  async function getAllUsers(): Promise<IUser[]> {
    const response = await axios(`${baseUrl}/users`)

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { users },
    } = response.data

    return users
  }

  async function getAllThreads(): Promise<IThread[]> {
    const response = await axios(`${baseUrl}/threads`)

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { threads },
    } = response.data

    return threads
  }

  async function getThreadById(threadId: string): Promise<IThreadDetail> {
    const response = await axios(`${baseUrl}/threads/${threadId}`)

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { detailThread },
    } = response.data

    return detailThread
  }

  async function createThread({
    title,
    body,
    category = '',
  }: {
    title: string
    body: string
    category?: string
  }): Promise<IThread> {
    let createThread = {} as IThread
    await _fetchWithAuth(`${baseUrl}/threads`, {
      method: 'POST',
      data: {
        title,
        body,
        category,
      },
    })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data

          throw new Error(message)
        }
      })
      .then((response) => {
        const { data }: any = response

        const {
          data: { thread },
        } = data

        createThread = thread
      })

    return createThread
  }

  async function createComment({ threadId, content }: { threadId: string; content: string }): Promise<IComment> {
    let createComment = {} as IComment
    await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments`, {
      method: 'POST',
      data: {
        content,
      },
    })
      .catch((error) => {
        if (error.response) {
          const { message } = error.response.data

          throw new Error(message)
        }
      })
      .then((response) => {
        const { data }: any = response

        const {
          data: { comment },
        } = data

        createComment = comment
      })

    return createComment
  }

  async function upVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/up-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function downVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/down-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function neturalVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function upVoteComment({ threadId, commentId }: { threadId: string; commentId: string }) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function downVoteComment({ threadId, commentId }: { threadId: string; commentId: string }) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function neutralVoteComment({ threadId, commentId }: { threadId: string; commentId: string }) {
    const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
    })

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }
  }

  async function getLeaderboards() {
    const response = await axios(`${baseUrl}/leaderboards`)

    const { status, message } = response.data

    if (status !== 'success') {
      throw new Error(message)
    }

    const {
      data: { leaderboards },
    } = response.data

    return leaderboards
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadById,
    createThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neturalVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderboards,
  }
})()

export default api
