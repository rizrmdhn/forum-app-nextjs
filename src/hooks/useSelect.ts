import { useSelector } from 'react-redux'

function useSelect(state: any) {
    const showMenu = useSelector<any, any>((state: any) => state.showMenu)
    const showCategory = useSelector<any, any>((state: any) => state.showCategory)
    const authUser = useSelector<any, any>((state: any) => state.authUser)
    const thread = useSelector<any, any>((state: any) => state.thread)
    const user = useSelector<any, any>((state: any) => state.user)
    const category = useSelector<any, any>((state: any) => state.category)
    const threadTitle = useSelector<any, any>((state: any) => state.threadTitle)
    const threadDetail = useSelector<any, any>((state: any) => state.threadDetail)
    const leaderboard = useSelector<any, any>((state: any) => state.leaderboard)
    const isLoading = useSelector<any, any>((state: any) => state.isLoading)
    const isPreload = useSelector<any, any>((state: any) => state.isPreload)
    const openModal = useSelector<any, any>((state: any) => state.openModal)
    const locale = useSelector<any, any>((state: any) => state.locale)
    
    switch (state) {
        case 'showMenu':
            return showMenu
        case 'showCategory':
            return showCategory
        case 'authUser':
            return authUser
        case 'thread':
            return thread
        case 'user':
            return user
        case 'category':
            return category
        case 'threadTitle':
            return threadTitle
        case 'threadDetail':
            return threadDetail
        case 'leaderboard':
            return leaderboard
        case 'isLoading':
            return isLoading
        case 'isPreload':
            return isPreload
        case 'openModal':
            return openModal
        case 'locale':
            return locale
    }
    
}

export default useSelect