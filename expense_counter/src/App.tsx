import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"



//
const App = () => {

  //Create a useState to help us handle out selections
  const [selectedCategory, setSelectedCategory] = useState("")
  const [dummyExpensesArray, setDummyExpensesArray] = useState([
    {id: 1, description: 'Water', amount:10, category:'Utilities'},
    {id: 2, description: 'Concerts', amount:15, category:'Entertainment'},
    {id: 3, description: 'Sneakers', amount:20, category:'Shopping'},
    {id: 4, description: 'Sushi', amount:25, category:'Food'},
    {id: 5, description: 'Seafood', amount:16, category:'Groceries'}
  ])

  const handleDelete = (id:number) =>{
    setDummyExpensesArray(dummyExpensesArray.filter(expense => expense.id !== id));

    
  }
  //create a variable with a turnary operator
  //we are going to use our selected category as a boolean filter through our dummyExpensesArray
  const visibleExpense = selectedCategory ? dummyExpensesArray.filter(e => e.category === selectedCategory): dummyExpensesArray;
  
  return (
    <>
      <div className="text-center mb-2" id="trackerTitle">Expense Tracker</div>
    <div className="m-2" id="DAC-category">
      <div id="mainContainer">
    <ExpenseForm/>
    </div>
    </div>
    <div id="">
    <ExpenseList expenses={visibleExpense} onDelete={handleDelete}/>
  
    </div>
   
      <div className="">
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
  
    
  
    </>
  )
}

export default App