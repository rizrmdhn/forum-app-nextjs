import { changeThemeActionCreator } from "@/states/theme/action";
import { useDispatch } from "react-redux";
import useSelect from "./useSelect";

function useGetLocalTheme(): [
    () => void
] {
    const theme = useSelect('theme')

    const dispatch = useDispatch();

   
    const colorTheme = theme === 'light' ? 'dark' : 'light'

    const setLocalTheme = () => {
    const theme = localStorage.getItem('theme')
    const root = window.document.documentElement
    if (theme) {
        dispatch(changeThemeActionCreator(theme))
        root.classList.remove(colorTheme)
        root.classList.add(theme)
      } else {
        dispatch(changeThemeActionCreator('light'))
        root.classList.add('light')
      }
     };

  return [setLocalTheme];
}

export default useGetLocalTheme;