import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `TOYOU | ${title}`;
    }, [title])
}


export default useTitle;