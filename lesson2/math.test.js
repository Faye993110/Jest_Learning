
const math = require('./math');
const {add} = math;




test ('测试加法3+7', () => {
    expect(add(3,7)).toBe(10);
})
