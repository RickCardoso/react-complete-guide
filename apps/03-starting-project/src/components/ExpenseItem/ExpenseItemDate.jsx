import classes from './ExpenseItemDate.module.scss';

export const ExpenseItemDate = ({ date }) => {
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: 'numeric' });
  return (
    <div className={classes.expenseDate}>
      <div className={classes.expenseDateYear}>{year}</div>
      <div className={classes.expenseDateMonth}>{month}</div>
      <div className={classes.expenseDateDay}>{day}</div>
    </div>
  );
};