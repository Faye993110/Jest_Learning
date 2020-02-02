import React from 'react';
//import ReactDOM from 'react-dom';
import Enzyme, {shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter() });

it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//  // ReactDOM.unmountComponentAtNode(div);
//  const container = div.getElementsByClassName('App');
//  expect(container.length).toBe(1);
const wrapper = shallow(<App/>);
expect(wrapper.find('[data-test="container"]').length).toBe(1);
expect(wrapper.find('[data-test="container"]').prop('title')).toBe('Faye');
expect(wrapper.find('[data-test="container"]')).toExist();
});
