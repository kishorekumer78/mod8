import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-gray-400 py-4 px-10">
      <Link
        className="px-4 py-2 bg-slate-900 text-white rounded-md mr-5"
        to="/expense"
      >
        Expense
      </Link>
      <Link
        className="px-4 py-2 bg-slate-900 text-white rounded-md mr-5"
        to="/income"
      >
        Income
      </Link>
    </div>
  );
};

export default TopNav;
