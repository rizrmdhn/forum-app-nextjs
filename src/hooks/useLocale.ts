import localeData from "@/utils/localeData";
import useSelect from "./useSelect";

function useLocale() {
    const locale: string = useSelect('locale');

    return localeData[locale];
}

export default useLocale;