import categories from "../Categories";

const ExpenseForm = () => {
  return (
    <>
      <form id="formEdit">
      <div className="mb-2">
        <label htmlFor="descriptionInput" className="form-label" >Description</label>
        <input id="descriptionInput" type="text" placeholder="" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="amountInput" className="form-label">Amount</label>
        <input id="amountInput" type="number" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="categorySelect" className="form-label">Category</label>
        <select id="categorySelect" className="form-control">
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
