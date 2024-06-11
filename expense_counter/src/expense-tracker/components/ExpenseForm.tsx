import categories from "../Categories";

const ExpenseForm = () => {
  return (
    <>
    
      <form action="">
      <div className="mb-2">
        <label htmlFor="description" className="form-label">Description</label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="category" className="form-label">Category</label>
        <select id="category" className="form-control">
        <option value=""></option>
        {categories.map(category => <option key={category}>{category}</option>)}


        </select>
      
      </div>
      <button className="btn btn-outline" id="submitButton">Add Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;
