import categories from "../Categories";
interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: FilterProps) => {
  return (
    <>
      <div id="mainFilter">
        <select
          className="form-select"
          id="pullDown"
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          <option value="" id="pullDown">
            All Categories
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
