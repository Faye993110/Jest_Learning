import React from 'react';
import {findTestWrapper} from '../../../../utils/testUtils'
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('Header 渲染正常', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})

it('header 组件包含一个 input 框', () => {
const wrapper = shallow(<Header/>);
const inputElem = findTestWrapper(wrapper, 'input');
expect(inputElem.length).toBe(1);
});

it('header 组件 input 框内容，初始化应该为空', () => {
    const wrapper = shallow(<Header/>);
    const inputElem = findTestWrapper(wrapper, 'input')
    expect(inputElem.prop('value')).toEqual('');
});

it('header 组件 input 框内容，当用户输入时，会跟随变化', () => {
    const wrapper = shallow(<Header/>);
    const inputElem = findTestWrapper(wrapper, 'input');
    const userInput = '今天要学习 Jest';
    inputElem.simulate( 'change', {
        target: { value: userInput}
    });
    expect(wrapper.state('value')).toEqual(userInput);

    // const newInputElem = wrapper.find('[data-test="input"]');
    // expect(newInputElem.prop('value')).toBe(userInput)
});

it('Header 组件 input 框输入回车时，如果input无内容，无操作', ()=>{
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem = {fn}/>);
    const inputElem = findTestWrapper(wrapper, 'input');
    wrapper.setState({ value : ''});
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
})

it('Header 组件 input 框输入回车时，如果input有内容，函数应该被调用', ()=>{
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem = {fn}/>);
    const inputElem = findTestWrapper(wrapper, 'input')
    wrapper.setState({ value : '学习 react'});
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith('学习 react');
})

it('Header 组件 input 框输入回车时，如果input有内容，回车之后应该清楚掉', ()=>{
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem = {fn}/>);
    const inputElem = findTestWrapper(wrapper, 'input')
    wrapper.setState({ value : '学习 react'});
    inputElem.simulate('keyUp', {
        keyCode: 13
    });
    const newInputElem = findTestWrapper(wrapper, 'input')
   expect(newInputElem.prop('value')).toBe('');
})



