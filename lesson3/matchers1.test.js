const throwNewErrorFunc = () => {
    throw new Error('this is a new error');
}

//测试能够抛出异常

test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow();
})