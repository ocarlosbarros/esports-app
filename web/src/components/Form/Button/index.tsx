import { IconProps } from "phosphor-react"

interface ButtonProps{
    text: string
    value: string
    children?: JSX.Element
}
function Button({ text, value, children }: ButtonProps){
    return(
        <button 
        className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3"
        value={ value }>
            { children }
            { text }
        </button>
    )
}

export default Button;