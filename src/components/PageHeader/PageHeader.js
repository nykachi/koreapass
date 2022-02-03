import classes from './PageHeader.module.css';

const PageHeader = (props) => {
  return (
    <div className={classes.Container}>
      <hr />
      <h3>{props.title}</h3>
    </div>
  );
};

export default PageHeader;
