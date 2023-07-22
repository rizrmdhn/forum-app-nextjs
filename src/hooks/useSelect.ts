import { useSelector } from 'react-redux'

function useSelect(state: any) {
    const showMenu = useSelector<any, any>((state: any) => state.showMenu)
    const authUser = useSelector<any, any>((state: any) => state.authUser)
    const thread = useSelector<any, any>((state: any) => state.thread)
    const user = useSelector<any, any>((state: any) => state.user)
    const threadDetail = useSelector<any, any>((state: any) => state.threadDetail)
    const leaderboard = useSelector<any, any>((state: any) => state.leaderboard)
    const isLoading = useSelector<any, any>((state: any) => state.isLoading)

    switch (state) {
        case 'showMenu':
            return showMenu
        case 'authUser':
            return authUser
        case 'thread':
            return thread
        case 'user':
            return user
        case 'threadDetail':
            return threadDetail
        case 'leaderboard':
            return leaderboard
        case 'isLoading':
            return isLoading
    }
    
}

export default useSelect