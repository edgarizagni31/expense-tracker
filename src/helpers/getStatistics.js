export const getStatistics = ( transactions ) => {
    let totalIcome = 0;
    let totalExpense = 0;
    let balance = 0;

    transactions.forEach( ( transaction ) => {
        let { amount } = transaction;

        if (amount >= 0) {
            totalIcome += parseFloat(amount);
            
        }else {
            totalExpense += parseFloat(amount);
        }

        balance += parseFloat(amount);
    } ) 
    

    return {
        totalIcome,
        totalExpense,
        balance
    }
}