import categories from "../Categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z.string().trim().min(2, { message: "Description: Enter at least 2 characters" }),
  amount: z.number().int().min(1, { message: "Amount must be a number and at least 0" }),
  category: z.string().nonempty({ message: "Category: Please select a category" }),
});

type FormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="description">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="validationText">{errors.description.message}</p>
          )}
        </div>
        <div className="amount">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register('amount', {valueAsNumber: true})} 
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && <p className="validationText">{errors.amount.message}</p>}
        </div>
        <div className="category">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select {...register("category")} id="category" className="form-control">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} className="filterForm">
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="validationText">{errors.category.message}</p>}
          <button className="btn btn-outline" id="submitButton">
          Add Expense
        </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
