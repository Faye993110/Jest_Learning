import { runCallback, createObject, getData} from './demo';
import axios from 'axios';
jest.mock('axios');

//mock 函数， 1、捕获函数的调用和返回结果，以及this和调用顺序
//2、它可以让我们自由的设置返回值
//3、改变函数的内部实现


test('测试 runCallback', () => {
    // const func = () => {
    //     return 'hello';
    // }
   // expect(runCallback(func)).toBe('hello')
   const func = jest.fn(); 
   //func.mockReturnValue("Dell");//2、它可以让我们自由的设置返回值
   func.mockImplementation(() => {
       return 'dell'
   })
   runCallback(func);
   runCallback(func);
   runCallback(func);
   expect(func).toBeCalled();
   expect(func.mock.calls.length).toBe(3);
   expect(func.mock.calls[0]).toEqual(['abc']);
   console.log(func.mock)
})

test('测试 createObject', () => {
    const func = jest.fn();
    createObject(func);
   
    console.log(func.mock)
})

test('测试 getData', async () => {
    //mock, 第三个用处是改变函数的内部实现
    axios.get.mockResolvedValue({data: 'hello'})
    await getData().then((data) => {
        expect(data).toBe('hello')
    })
})

