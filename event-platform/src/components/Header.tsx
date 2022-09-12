import { Logo } from "./logo";

export function Header(){
    return(
        <header className="w-full py-5 flex items-center justify-center bg-gray-800 border-b border-gray-700">
            <Logo/>
        </header>
    )
}