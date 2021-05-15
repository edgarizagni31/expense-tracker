import { shallow } from 'enzyme';
import { renderHook,act } from '@testing-library/react-hooks';
import { AddTransaction } from '../../components/AddTransaction';
import { useForm } from '../../hooks/useForm';

const setTransactions = jest.fn();

describe('test to <AddTransaction />', () => {
    const wrapper = shallow( <AddTransaction setTransactions = {setTransactions} /> );
    test('should show  correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have two <FormItem />', () => {
        expect(wrapper.find('FormItem').length ).toBe(2);
    })

    test('should no run setTransaction()', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setTransactions).not.toHaveBeenCalled();
    })

    /*   
    test('should run setTransaction()', () => {
        const  { result } =  renderHook( () => useForm( { desc: '', amount: ''} ) );
        const [ , handleInputChange ] = result.current;

        act(() => handleInputChange({ target: { name: 'desc', value: 'sueldo' } }));
        const [ { desc },  ] = result.current;

        act(() => handleInputChange({ target: { name: 'amount', value: '1200' } }));
        const [ { amount },  ] = result.current;
        
        const transaction = {
            desc,
            amount
        }

        const wrapper = shallow( <AddTransaction setTransactions = {setTransactions} initialState = {transaction}/> );
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setTransactions).toHaveBeenCalled();
    })
    */
})