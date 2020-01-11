jest.mock('./mockdemo');
import { fetchData } from './mockdemo';
const { getNumber } = jest.requireActual('./mockdemo')

//import axios from 'axios';

// jest.mock('axios');

// test('fetchData 测试', () => {
//     axios.get.mockResolvedValue({
//         data: "(function(){return '123'})()"
//     })
//     return fetchData().then(data => {
//         expect(eval(data)).toEqual('123');
//     })
// })



test('fetchData 测试', () => {
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123')
    })
})

test('getNumber 测试', () => {
    expect(getNumber()).toEqual(123);
})

//测试fetchData这样的异步函数，
//采用测试文件mock文件夹里的内容
//同步函数就直接测试