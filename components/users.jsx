import Getpost from "../libs/Api";
export default function Users() {
const data=new Getpost
const {result,isloading,iserror}=data.getAll()
if(iserror) return <div>Error..</div>
if(isloading) return <div>Loading..</div>
return (
    <>
        {result.map((item)=>
        <div key={item.id}> {item.username}</div>
        )}
    </>
)

}