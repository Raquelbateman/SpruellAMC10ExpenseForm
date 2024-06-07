import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"


const App = () => {

  //Create a useState to help us handle out selections
  const [selectedCategory, setSelectedCategory] = useState("")

  const [dummyExpensesArray, setDummyExpensesArray] = useState([
    {id: 1, description: 'aaa', amount:10, category:'Utilities'},
    {id: 2, description: 'bbb', amount:15, category:'Entertainment'},
    {id: 3, description: 'ccc', amount:20, category:'Shopping'},
    {id: 4, description: 'ddd', amount:25, category:'Food'},
    {id: 5, description: 'eee', amount:16, category:'Groceries'}
  ])

  const handleDelete = (id:number) =>{
    setDummyExpensesArray(dummyExpensesArray.filter(expense => expense.id !== id));

    
  }
  //create a variable with a turnary operator
  //we are going to use our selected category as a boolean filter through our dummyExpensesArray
  const visibleExpense = selectedCategory ? dummyExpensesArray.filter(e => e.category === selectedCategory): dummyExpensesArray;
  
  return (
    <>
      <h1 className="text-center mb-5">Expense Tracker</h1>
      <div className="mb-5">
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <div className="mb-5">
    <ExpenseList expenses={dummyExpensesArray} onDelete={handleDelete}/>
    </div>
  
    </>
  )
}

export default App