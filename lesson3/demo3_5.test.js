import addDivToBody from './demo3_5';

import $ from 'jquery';

test('测试 addDivToBody', () => {
    addDivToBody();
    expect($('body').find('div').length).toBe(1);
   // console.log($('body').find('div').length)
})

// node 不具备 node
// jest 在node 环境下自己模拟了一套api,jsDom