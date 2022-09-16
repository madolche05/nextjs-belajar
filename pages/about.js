import Swr from "swr"
export default function about() {
    const fetcher = url => fetch(url).then(r => r.json())
    const {data, error } = Swr('https://jsonplaceholder.typicode.com/users', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            {
                data.map((item)=>
                <p key={item.id}>{item.username}</p>
                )
            }
        </div>
    )

}