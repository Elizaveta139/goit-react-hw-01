import css from "../css/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.row}>
              <td className={css.data}>{type}</td>
              <td className={css.data}>{amount}</td>
              <td className={css.data}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
