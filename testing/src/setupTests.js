//NOTE: GOOGLE: install enzyme-adapter-react-16 and enzyme
//NOTE: setupTests.js the file naming here has to be exactly the same
//NOTE: this set up here will run before all the tests start
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
