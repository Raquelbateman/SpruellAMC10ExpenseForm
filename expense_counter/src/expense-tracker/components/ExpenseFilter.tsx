interface FilterProps{
    onSelectCategory: (category: string) => void;

    }


const ExpenseFilter = ({onSelectCategory}:FilterProps) => {
  return (
    <>

    <div className="mainContainer">
    <select className="form-select" id="" onChange={(e) => onSelectCategory(e.target.value)}>
  <option value="">All Categories</option>
  <option value="Groceries">Groceries</option>
  <option value="Utilities">Utilities</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Food">Food</option>
  <option value="Shopping">Shopping</option>
</select>
    </div>
    </>
  )
}

export default ExpenseFilter