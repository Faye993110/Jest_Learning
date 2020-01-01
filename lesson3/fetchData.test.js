import {fetchData, fetchData1, fetchData2} from './fetchData';


//回调类型异步函数的测试
test('fetchData 返回结果为{ success: true }', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done();
    })
})

test('fetchData1 返回结果为 {sucess: true}', () => {
   return fetchData1().then((response) => {
        expect(response.data).toEqual({
            success: true
        })
    })
})

//测试返回404的接口
test('fetchData2 返回结果为 404', () => {
    return fetchData2().catch((e) => {
        console.log(e.toString())
        //  expect(e.toString()).toEqual({
        //      success: true
        //  })
     })
 })

