export const getStatistics = ( transactions ) => {
    let totalIcome = 0;
    let totalExpense = 0;
    let balance = 0;

    for(let transaction of transactions ) {
        let { amount } = transaction;

        if (amount >= 0) {
            totalIcome += parseInt(amount);
        }else {
            totalExpense += parseInt(amount);
        }

        balance += parseInt(amount);
    }

    return {
        totalIcome,
        totalExpense,
        balance
    }
}