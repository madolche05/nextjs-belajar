import Getpost from "../libs/Api";
export default function Users() {
const data=new Getpost
const {result,isloading,iserror}=data.getData('https://developzero.000webhostapp.com/api/api')
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