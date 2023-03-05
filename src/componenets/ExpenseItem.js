import './ExpenseItem.css'


function ExpenseItem(props) {
    const expensedate = new Date(2022,2, 30);
    const expensetitle='Car Insurance';
    const expenseamount=290;
    const LocationOfExpenditure ='Pathankot'
    return (
        <div  className="expense-item">

           
            <div >{props.expense.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2  >{props.expense.title}</h2>
                <h2  >{LocationOfExpenditure}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </div>
        
    );
}

export default ExpenseItem