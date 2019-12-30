test ('测试10与10相匹配', () => {
    // toBe 就是一个匹配器  object.is; ===
    
    expect(10).toBe(10);
})

test('测试对象内容相等', () => {
    const a = { one : 1};
    expect(a).toEqual({one : 1});
})

//真假匹配器
test('toBeNull匹配器', () => {
    const a = null;
    expect(a).toBeNull();
})

test('toBeUndefined匹配器', () => {
    const a = undefined;
    expect(a).toBeUndefined();
})

test('toBeDefined匹配器', () => {
    const a = '';
    expect(a).toBeDefined();
})

test('toBeTruthy 匹配器', () => {
    const a = 1;
    expect(a).toBeTruthy();
})

test('toBeFalsy 匹配器', () => {
    const a = null;
    expect(a).toBeFalsy();
})

test('not 匹配器', () => {
    const a = 1;
    expect(a).not.toBeFalsy();
})
//匹配器很多，不用全部记，记得常用的，熟悉的就可以

//数字相关的匹配器
test('toBeGreaterThan' , () => {
   const count = 10;
   expect(count).toBeGreaterThan(9);
})

test('toBeLessThan', () => {
    const count = 10;
    expect(count).toBeLessThan(11);
})

test('toBeGreaterThanOrEqual' , () => {
    const count = 10;
    expect(count).toBeGreaterThanOrEqual(10);
 })

 test('toBeLessThanOrEqual' , () => {
    const count = 10;
    expect(count).toBeLessThanOrEqual(11);
 })

 test('toBeCloseTo' , () => {
    const firstNum = 0.1;
    const secondNum = 0.2;
    expect(firstNum + secondNum).toBeCloseTo(0.3);
 })


 //和string 相关的匹配器

 test('toMatch', () => {
     const str = 'http://www.dell-lee.com';
     expect(str).toMatch('dell');
 })

 //Array, Set

 test('toContain' ,() => {
     const arr = ['dell', 'lee', 'imooc'];
     expect(arr).toContain('dell');
 })

 test('toContain' ,() => {
    const arr = ['dell', 'lee', 'imooc'];
    const data = new Set(arr);
    expect(data).toContain('dell');
})

//处理异常的匹配器

const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}

//测试能够抛出异常

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow();
})

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('this is a new error');
})
