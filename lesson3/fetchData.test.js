import {fetchData, fetchData1, fetchData2, fetchData3, fetchData4} from './fetchData';


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

test('(使用await)fetchData1 返回结果为{ success: true }', async () => {
    const res = await fetchData1();
    expect(res.data).toEqual({
        success: true
    })  
 })

//测试返回404的接口
test('fetchData2 返回结果为 404', () => {
    //至少执行一个expect的语法
    expect.assertions(1);
    return fetchData2().catch((e) => {
        //console.log(e.toString())
         expect(e.toString().indexOf('404') > -1).toBe(true)
     })
 })

 //
 test('(使用await)fetchData2 返回结果为 404', async () => {
    expect.assertions(1);
    try{
        await fetchData2();
    }catch(e){
        expect(e.toString()).toEqual('Error: Request failed with status code 404')
    }
 })


 //测试另外的一种写法
 test('fetchData3 返回结果为 { success : true}', () => {
     return expect(fetchData3()).resolves.toMatchObject({
         data: {
             success : true
         }
     })
 })

 //使用await
 test('(使用await)fetchData3 返回结果为 { success : true} ', async () => {
    await expect(fetchData3()).resolves.toMatchObject({
        data: {
            success : true
        }
    })
})

 //测试接口失败的情况
test('fetchData4 返回404', () => {
    return expect(fetchData4()).rejects.toThrow();
})

