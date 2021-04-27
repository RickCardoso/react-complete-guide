import { ExpenseItem } from './ExpenseItem';

export const ExpenseItemList = ({ expenseItems }) => {
  const expenseItemComponents = expenseItems.map((expense) => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />);

  return (
    <>
      {expenseItemComponents}
    </>
  );
}