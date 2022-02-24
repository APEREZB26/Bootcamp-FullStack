import axios from "axios";

export const getAllCountry = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            const {data} = res;
            return data
        })
}