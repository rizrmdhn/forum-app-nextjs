import axios from "axios"

const api = (() => {
    const baseUrl = 'https://forum-api.dicoding.dev/v1'

    async function _fetchWithAuth(url: string, options: any) {
        return axios(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    function putAccessToken(token: string) {
        localStorage.setItem('accessToken', token)
    }

    function getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    async function register({name, email, password}: {
        name: string,
        email: string,
        password: string
    }) {
        const response = await axios.post(`${baseUrl}/register`, {
            name,
            email,
            password
        })

        const {status, message} = response.data

        if (status !== 'success') {
            throw new Error(message)
        }

        const {data: {user}} = response.data

        return user
    }

    async function login({email, password}: {
        email: string,
        password: string}) {
        const response = await axios.post(`${baseUrl}/login`, {
            email,
            password
        })

        const {status, message} = response.data

        if (status !== 'success') {
            throw new Error(message)
        }

        const {data: {token}} = response.data

        return token
        }

        async function getOwnProfile() {
            const response = await _fetchWithAuth(`${baseUrl}/profile`, {
                method: 'GET'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {user}} = response.data

            return user
        }

        async function getAllUsers() {
            const response = await axios(`${baseUrl}/users`)

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {users}} = response.data

            return users
        }

        async function getAllThreads() {
            const response = await axios(`${baseUrl}/threads`)

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {threads}} = response.data

            return threads
        }

        async function getThreadById(threadId: string) {
            const response = await axios(`${baseUrl}/threads/${threadId}`)

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {detailThread}} = response.data

            return detailThread
        }

        async function createThread({title, body, category = ''}: {
            title: string,
            body: string,
            category?: string
        }) {
            const response = await _fetchWithAuth(`${baseUrl}/threads`, {
                method: 'POST',
                body:{
                    title,
                    body,
                    category
                }
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data : {thread}} = response.data

            return thread
        }

        async function createComment({threadId, content}: {
            threadId: string,
            content: string
        }) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments`, {
                method: 'POST',
                body: {
                    content
                }
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {comment}} = response.data

            return comment
        }

        async function upVoteThread(threadId: string) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/up-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

        }

        async function downVoteThread(threadId: string) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/down-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }
        }

        async function neturalVoteThread(threadId: string) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/neutral-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

        }

        async function upVoteComment({threadId, commentId}: {
            threadId: string,
            commentId: string
        }) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }
        }

        async function downVoteComment({threadId, commentId}: {
            threadId: string,
            commentId: string
        }) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/down-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }
        }

        async function neutralVoteComment({threadId, commentId}: {
            threadId: string,
            commentId: string
        }) {
            const response = await _fetchWithAuth(`${baseUrl}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
                method: 'POST'
            })

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }
        }

        async function getLeaderboards() {
            const response = await axios(`${baseUrl}/leaderboards`)

            const {status, message} = response.data

            if (status !== 'success') {
                throw new Error(message)
            }

            const {data: {leaderboards}} = response.data

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
            getLeaderboards
        }
})();

export default api