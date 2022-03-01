import axios from "axios";

export const getAllCountry = () => {
    return axios.get('https://fast-refuge-52881.herokuapp.com/api/country')
        .then((res)=>{
            const {data} = res;
            return data
        })
}