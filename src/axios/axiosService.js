import axios from "axios";
const grant_type =  'password';
const client_id = 2;
const client_secret = 'dfAuvgguMDS7U7MovyArA7QXyL97U7dG2UzEW9NH';
const scope = '*';

export const axiosService = async (url, data, reqType)=> {
    // console.log('data', data);

    // const $userdata = {};

    const AuthToken = localStorage.getItem('access_token');
    // console.log('token',AuthToken);
    // console.log('url', url)

    if(reqType === 'GET') {
        console.log("inside");
      const res = await axios.get(url,{
        ...data,
        headers : {
            Authorization: 'Bearer ' + AuthToken,
            Accept: 'application/json'
        }
      });

     return  res.data;
    } else if(reqType == 'POST') {
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

        // console.log(res.data);
        return res;
    }
}