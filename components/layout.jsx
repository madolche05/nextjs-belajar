import Navbar from "./navbar"
export default function layout({children}) {
    return(
        <>
        <div className="container m-auto">
        <Navbar /> 
        <main>{children}</main>
        </div>
        </>
        
        )
}