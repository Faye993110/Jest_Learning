import {generateConfig, generateAnotherConfig} from './snapdemo';


//snapShot 用来测试配置文件好用
test('测试 generateConfig 函数', () => {
    expect(generateConfig()).toMatchSnapshot();
})

test('测试 generateAnotherConfig 函数', () => {
    expect(generateAnotherConfig()).toMatchSnapshot();
})