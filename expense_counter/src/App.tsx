import ExpenseList from "./expense-tracker/components/ExpenseList"


const App = () => {
  return (
    <>
      <h1 className="text-center">Expense Tracker</h1>
    <ExpenseList onDelete={(id) => console.log ('Delete', id)}/>
    </>
  )
}

export default App