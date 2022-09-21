import Swr from "swr"
class Api {
    constructor() {

    }
    getData(api) {
        const fetcher = url => fetch(url).then(r => r.json())
        const { data, error } = Swr(api, fetcher)
        return {
            result: data,
            isloading: !error & !data,
            iserror: error
        }
    }
    async postData(api, dataBody) {
        const res = await fetch(api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody),
        })
        const data = await res.json()
    return {data}
    }


}
export default Api