import { useState } from "react"
import Api from "../../libs/Api"
export default function testing() {

    // const getpost= new Getpost
    // const {result,isloading,iserror}=getpost.getAll('https://jsonplaceholder.typicode.com/users/1')
    // if(iserror) return <div>error</div>
    // if(isloading) return <div>loading</div>
    // console.log(result)
    // const [show, setshow] = useState(false)
    const tampil =  () => {
        // { !show ? setshow(true) : setshow(false) }
        const api= new Api
        const data={nama:'riyan',kelas:'rpl'}
        const hasil= api.getData('https://developzero.000webhostapp.com/api/api',data)
        
        console.log(hasil)

    }
    return (
        <>
        <div className="container m-auto">
            <button onClick={tampil}>Tampilkan</button>
            <ul>
                <li>akjdksa</li>
                <li>akjdksa</li>
                <li>akjdksa</li>
                <li>akjdksa</li>

            </ul>
            </div>
        </>
    )
}

