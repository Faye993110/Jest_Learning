import Counter from './Counter';


let counter = null;

//jest 的钩子函数
beforeAll(() => {
    console.log("BeforeAll")
   // counter = new Counter();
})

afterAll(() => {
    console.log('AfterAll')
})

beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter();
})

afterEach( () => {
    console.log('AfterEach')
})

//分组 describe()
describe('测试增加相关的代码', () => {
    test('测试 Counter 中的 addOne 方法', () => {
        console.log('测试 Counter 中的 addOne 方法')
        counter.addOne();
        expect(counter.number).toBe(1);
    })
    test('测试 Counter 中的 addTwo 方法', () => {
        console.log('测试 Counter 中的 addTwo 方法')
        counter.addTwo();
        expect(counter.number).toBe(2);
    })
})

describe('测试减少相关的代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
        console.log('测试 Counter 中的 minusOne 方法')
        counter.minusOne();
        expect(counter.number).toBe(-1);
    })
    
    test('测试 Counter 中的 minusTwo 方法', () => {
        console.log('测试 Counter 中的 minusTwo 方法')
        counter.minusTwo();
        expect(counter.number).toBe(-2);
    })
})
