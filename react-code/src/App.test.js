import React from 'react';
//import ReactDOM from 'react-dom';
import Enzyme, {shallow, mount}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter() });

it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//  // ReactDOM.unmountComponentAtNode(div);
//  const container = div.getElementsByClassName('App');
//  expect(container.length).toBe(1);


// const wrapper = shallow(<App/>);
// const container = wrapper.find('[data-test="container"]');
// expect(container.length).toBe(1);
// expect(container.prop('title')).toBe('Faye');
// expect(container).toExist();
// expect(container).toHaveProp('title', 'Faye');

const wrapper = mount(<App/>);
expect(wrapper).toMatchSnapshot();
});
