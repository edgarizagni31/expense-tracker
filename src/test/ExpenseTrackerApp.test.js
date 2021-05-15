import { shallow } from 'enzyme';
import { ExpenseTrackerApp } from '../ExpenseTrackerApp';

describe('test to <ExpenseTrackerApp />', () => {
    const wrapper = shallow(<ExpenseTrackerApp />);

    test('should show correctly', () => {
        expect(wrapper.find('Balance').exists() ).toBeTruthy();
        expect(wrapper.find('History').exists() ).toBeTruthy();
        expect(wrapper.find('AddTransaction').exists() ).toBeTruthy();
        expect(wrapper).toMatchSnapshot();        
    })
    
})