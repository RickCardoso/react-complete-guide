import classes from './ExpenseItem.module.scss';
import { ExpenseItemDate } from './ExpenseItemDate';
import { Card } from '../Card/Card';

export const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card>
      <ExpenseItemDate date={date} />
      <div className={classes.expenseItemDescription}>
        <h2>{title}</h2>
        <div className={classes.expenseItemPrice}>${amount}</div>
      </div>
    </Card>
  );
};