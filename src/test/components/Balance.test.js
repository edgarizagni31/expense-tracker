import { shallow } from 'enzyme';
import { Balance } from '../../components/Balance';
import { getStatistics } from '../../helpers/getStatistics';

jest.mock('../../helpers/getStatistics');

describe('test to  <Balance />', () => {

    const transactions = [];

    test('should show correctly', () => {
        getStatistics.mockReturnValue({
            totalIcome: 0,
            totalExpense: 0,
            balance: 0
        })
        const wrapper = shallow(<Balance transactions = {transactions} />);
        expect(wrapper).toMatchSnapshot();
    })
    

    test('should show the calculations correctly', () => {
        const totalIcome = 1200;
        const totalExpense = 500;
        const balance = 700;

        getStatistics.mockReturnValue({
            totalIcome,
            totalExpense,
            balance
        });

        const wrapper = shallow(<Balance transactions = {transactions} />);

        expect( wrapper.find('.fw-bold').text() ).toBe( 'S/ ' + balance);        
        expect( wrapper.find('.text-success').text() ).toBe( 'S/ ' + totalIcome);        
        expect( wrapper.find('.text-danger').text() ).toBe( 'S/ ' + totalExpense );        
         
    })
    
})
