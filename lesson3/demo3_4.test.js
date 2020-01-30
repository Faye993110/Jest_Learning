jest.mock('./util'); 
//自动化模拟
//jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成jest.fn 
import Util from './util';
import demoFunction from './demo3_4';

test('测试 demoFunction', () => {
    demoFunction();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
})