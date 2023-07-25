import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <div className="w-full">
      <table className="w-[650px] border-2 table-fixed">
        <thead className="">
          <tr>
            <th className="border-2 border-slate-700 text-center">
              Description
            </th>
            <th className="border-2 border-slate-700 text-center">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td className="border-2 border-slate-700 text-center">
                  {item.desc}
                </td>
                <td className="border-2 border-slate-700 text-center">
                  {item.amount}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  data: PropTypes.array,
};
export default Table;
