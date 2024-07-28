import { useEffect, useState } from "react"

const screenSize = () => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);
    const [heightSize, setHeightSize] = useState(window.innerHeight);
    
    const handleResize = () => {
        setWidthSize(window.innerWidth)
        setHeightSize(window.innerHeight)
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return {widthSize, heightSize}
}

export default screenSize