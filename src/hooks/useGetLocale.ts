import { useDispatch } from "react-redux";
import { setLocaleActionCreator } from "@/states/locale/action";

function useGetLocale(): [
    () => void
] {
    const dispatch = useDispatch();

    const setLocaleData = () => {
    const locale = localStorage.getItem('locale')
    if (locale) {
        dispatch(setLocaleActionCreator(locale))
      } else {
        dispatch(setLocaleActionCreator('id'))
      }
  
     };

  return [setLocaleData];
}

export default useGetLocale;