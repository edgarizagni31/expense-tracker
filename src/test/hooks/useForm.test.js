import  { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('test to hook useForm()',  () => {
    test('should return initial state', () => {
        const  {result} =  renderHook( () => useForm( { desc: '', amount: ''} ) );
        const [ data, ] = result.current;
        
        expect(data.desc).toBe('');
        expect(data.amount).toBe('')
    })
   
    test('should return data from the form',  () => {
        const  { result } =  renderHook( () => useForm( { desc: '', amount: ''} ) );
        const [ , handleInputChange ] = result.current;

        act(() => handleInputChange({ target: { name: 'desc', value: 'sueldo' } }));
        const [ { desc },  ] = result.current;

        act(() => handleInputChange({ target: { name: 'amount', value: '1200' } }));
        const [ { amount },  ] = result.current;
        
        expect( desc ).toBe('sueldo'); 
        expect(amount).toBe('1200')
    })

    test('should initialize the data again', () => {
        const initialState = { desc: '', amount: '' };
        const { result } = renderHook( () => useForm( initialState ) );
        const [ , handleInputChange, resetData ] = result.current;

        act(() => handleInputChange({ target: { name: 'desc', value: 'sueldo' } }));
        act(() => handleInputChange({ target: { name: 'amount', value: '1200' } }));
        act(() => resetData() );

        const [ data, ] = result.current;

        expect(data).toEqual(initialState);
    })
})