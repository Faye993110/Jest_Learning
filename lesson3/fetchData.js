import axios from 'axios';

export const fetchData = (fn) => 
{
    axios.get('http://www.dell-lee.com/react/api/demo.json').then((res) => {
        fn(res.data)
    })
}


export const fetchData1 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
}

export const fetchData2 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo2.json');
}

export const fetchData3 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
}

export const fetchData4 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo1.json');
}