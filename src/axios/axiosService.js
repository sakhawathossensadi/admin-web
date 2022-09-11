import axios from "axios";
const grant_type =  'password';
const client_id = 2;
const client_secret = 'dfAuvgguMDS7U7MovyArA7QXyL97U7dG2UzEW9NH';
const scope = '*';

export const axiosService = async (url, data, reqType)=> {
    console.log('data', data);

    // const datad = data;

    const AuthToken = localStorage.getItem('access_token');
    // console.log('token',AuthToken);

    let page = data.page;

    if(data.page){
        url = url+'?page='+page;
    }

    if(reqType === 'GET') {
      const res = await axios.get(url,{
        headers : {
            Authorization: 'Bearer ' + AuthToken,
            Accept: 'application/json'
        }
      });

     return  res.data;
    } else if(reqType === 'POST') {
        const res = await axios.post(url, {
            ...data,
            grant_type,
            client_id,
            client_secret,
            scope
        }, {
            headers : {
                Authorization: 'Bearer ' + AuthToken,
                Accept: 'application/json'
            }
        })
        
        return res;
    }
}