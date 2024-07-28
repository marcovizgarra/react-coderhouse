import { createContext } from "react"

const ThemeContext = createContext(true)

const ContextoConsumer = () => {
    return(
        <ThemeContext.Consumer>
            {(variable) => (
                <h1>{variable ? "si" : "no"}</h1>
            )}
        </ThemeContext.Consumer>        
    )
}

export default ContextoConsumer