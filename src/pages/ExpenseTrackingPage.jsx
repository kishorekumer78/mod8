import { useState } from "react";
import Table from "../components/Table.jsx";
import TopNav from "../components/TopNav.jsx";

const ExpenseTrackingPage = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [formData, setFormData] = useState({ desc: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseList((prevList) => [...prevList, formData]);
    setFormData({ desc: "", amount: "" });
  };
  const inputOnChange = (property, value) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [property]: value,
      };
    });
  };
  return (
    <>
      <TopNav />
      <div className="flex justify-center gap-[50px]">
        <div className="w-3/10 bg-gray-200">
          <h2>Expense</h2>
          <form onSubmit={handleSubmit} className="p-2 space-y-2">
            Description
            <input
              className="w-80 bg-gray-400 border-gray-700 rounded-lg py-2 px-2 block"
              type="text"
              required
              value={formData.desc}
              onChange={(e) => inputOnChange("desc", e.target.value)}
            />
            Amount
            <input
              className="w-80 bg-gray-400 border-gray-700 rounded-lg py-2 px-2 block"
              type="number"
              required
              value={formData.amount}
              onChange={(e) => inputOnChange("amount", e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-700 text-white cursor-pointer w-80 py-2 px-4"
            >
              Add
            </button>
          </form>
        </div>
        <div className="w-7/10 bg-gray-200">
          <Table data={expenseList} />
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackingPage;
