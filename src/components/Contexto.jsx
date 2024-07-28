

// import { useState } from "react"

import { createContext, useContext } from "react";
import { useState } from "react";

// const CompA1 = ({isDarkMode}) => {
//     return(
//         <CompA2 isDarkMode={isDarkMode} />
//     )
// }

// const CompA2 = ({isDarkMode}) => {
//     return (
//     <>
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <p>Es modo oscuro? <b>{isDarkMode ? "Dark mode" : "Light mode"}</b></p>
//                 </div>
//             </div>
//         </div>
//     </>
//     )
// }

// const Contexto = () => {
//     const [isDarkMode, setIsDarkMode] = useState(true);

//     return (
//         <>
//             <CompA1 isDarkMode={isDarkMode}/>
//         </>
//     )
// }

// export default Contexto

const ThemeContext = createContext();

const CompA1 = () => {
    return(
        <CompA2 />
    )
}

const CompA2 = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Es modo oscuro? <b>{isDarkMode ? "Dark mode" : "Light mode"}</b></p>
                </div>
            </div>
        </div>
    </>
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <>
            <ThemeContext.Provider value={{isDarkMode}}>
                <CompA1 />
            </ThemeContext.Provider>
        </>
    )
}

export default Contexto