import style from './Button.module.css';

function Button(props) {
  const { children } = props;
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
