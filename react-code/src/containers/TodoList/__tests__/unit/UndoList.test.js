import React from 'react';
import {findTestWrapper} from '../../../../utils/testUtils'
import { shallow } from 'enzyme';
import UndoList from '../../components/UndoList';



it('未完成列表 当数据为空数组时， count 数目为 0， 列表无内容', () => {
const wrapper = shallow(<UndoList list = {[]}/>);
const countElem = findTestWrapper(wrapper,  "count");
const listItem = findTestWrapper(wrapper,  "list-item");
expect(countElem.text()).toEqual('0');
expect(listItem.length).toBe(0);
});

it('未完成列表 当数据为有内容时， count 数目显示数据长度， 列表有内容', () => {
    const listData = ['learn Jest', 'Learn TDD', '学习单元测试']
    const wrapper = shallow(<UndoList list = {listData}/>);
    const countElem = findTestWrapper(wrapper,  "count");
    const listItem = findTestWrapper(wrapper,  "list-item");
    expect(countElem.text()).toEqual('3');
    expect(listItem.length).toBe(3);
})

it('未完成列表 当数据为有内容时，要存在删除按钮', () => {
    const listData = ['learn Jest', 'Learn TDD', '学习单元测试'];
    const wrapper = shallow(<UndoList list = {listData}/>);
    const deleteElem = findTestWrapper(wrapper,  "delete-item");
    expect(deleteElem.length).toBe(3);
})

it('未完成列表 当数据为有内容时，点击某个删除按钮， 会调用删除方法', () => {
    const listData = ['learn Jest', 'Learn TDD', '学习单元测试'];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList deleteItem = {fn} list = {listData}/>);
    const deleteElems = findTestWrapper(wrapper,  "delete-item");
    console.log(deleteElems.at(1))

    deleteElems.at(index).simulate('click')
    expect(fn).toHaveBeenLastCalledWith(index);
})










