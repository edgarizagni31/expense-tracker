import { shallow } from 'enzyme';
import { getStatistics } from '../../helpers/getStatistics';

describe('test to getStatistics()', () => {
    test('should return an object with the balance', () => {
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
        const { totalIcome, totalExpense, balance } = getStatistics(transactions);

        expect(totalExpense).toBe(-200);
        expect(totalIcome).toBe(1200);
        expect(balance).toBe(1000);
    })
    
    test('should return an object with values to 0 ', () => {
        const transactions = [];
        const { totalIcome, totalExpense, balance } = getStatistics(transactions);

        expect(totalExpense).toBe(0);
        expect(totalIcome).toBe(0);
        expect(balance).toBe(0);
    })
    
})