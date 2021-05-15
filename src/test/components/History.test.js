import { shallow } from 'enzyme'
import { History } from '../../components/History';


describe('test to <History />', () => {
    const setTransaction = jest.fn();

    test('should show correctly', () => {
        const transactions = [];
        const wrapper = shallow(<History  transactions = { transactions } setTransactions = {setTransaction}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show error message when transactions are empty', () => {
        const transactions = [];
        const wrapper = shallow(<History  transactions = { transactions } setTransactions = {setTransaction}/>);
        const errorTag = wrapper.find('p').at(0);

        expect( errorTag.text() ).toBe('No se ha registrado transacciónes');
    })
    
    test('should show transactions', () => {
        const transactions = [
            {
                desc: 'sueldo',
                amount: '1200',
                id: parseInt( Math.random() * 100 )
            },
            {
                desc: 'comida',
                amount: '-200',
                id: parseInt( Math.random() * 100 )
            }
        ];
        const wrapper = shallow(<History  transactions = { transactions } setTransactions = {setTransaction}/>);
        const divTransanctions = wrapper.find('.border-end');

        expect(divTransanctions.length).toBe(transactions.length);
    })
})
