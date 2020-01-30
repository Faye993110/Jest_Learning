import timer from './timer'
beforeEach(() => {
    jest.useFakeTimers();
})


// test('timer 测试', (done) => {
//     timer( () => {
//         expect(1).toBe(1);
//         done();
//     })
// })

test('timer 测试', () => {
    const fn = jest.fn();
    timer(fn);
    //jest.runAllTimers();
    //jest.runOnlyPendingTimers();//当前处于队列中的timer
    jest.advanceTimersByTime(3000); //让时间快进3秒
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
})

//useFakeTimers 和 runAllTimers 配对执行