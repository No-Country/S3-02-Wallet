import styles from "../styles/input.module.scss";

const Input = ({
  method,
  type,
  id,
  label,
  autocomplete,
  required,
  error,
  value,
  onChange,
}) => {
  return (
    <div className={styles.form}>
      {method === "input" ? (
        <>
          {required ? (
            <input
              type={type}
              id={id}
              className={error ? styles.inputError : styles.input}
              placeholder=" "
              autoComplete={autocomplete}
              required
              value={value}
            />
          ) : (
            <input
              type={type}
              id={id}
              className={error ? styles.inputError : styles.input}
              placeholder=" "
              autoComplete={autocomplete}
              value={value}
            />
          )}
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </>
      ) : (
        <>
          <label htmlFor="sex" className={styles.label}>
            Sex:{" "}
          </label>
          <select name="sex" id="sex" className={styles.select}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </>
      )}
    </div>
  );
};

export default Input;
