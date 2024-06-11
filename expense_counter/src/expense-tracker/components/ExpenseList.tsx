

interface Expense{
    id:number,
    description: string,
    amount: number,
    category: string;
}

interface ExpenseProps{
    expenses: Expense [],
    onDelete: (id:number) => void
}


const ExpenseList = ({expenses,onDelete}: ExpenseProps) => {
  return (
    <>
 

  <table className="table table-bordered border" id="mainList">
  <thead>
    <tr>
    <th scope="col" className="tableHeadFooter">Description</th>
      <th scope="col" className="tableHeadFooter">Amount</th>
      <th scope="col" className="tableHeadFooter">Category </th>
      <th scope="col" className="tableHeadFooter"></th>
    </tr>
  </thead>
  <tbody>
    {expenses.map(expense => <tr key = {expense.id}>
        <td id="categoryFont">{expense.description}</td>
        <td id="categoryFont">{expense.amount}</td>
        <td id="categoryFont">{expense.category}</td>
        <td>
            <button className="btn btn-outline" id="button" onClick={() => onDelete(expense.id)}>Delete</button>
        </td>



    </tr>)}



  </tbody>
  <tfoot>
    <tr>
        <td className="tableHeadFooter">Total</td>
        <td>{expenses.reduce((acc,expense) => expense.amount + acc,0).toFixed(2)}</td>
        <td></td>
        <td></td>
    </tr>
  </tfoot>
</table>
   
  
    </>
  )
}

export default ExpenseList