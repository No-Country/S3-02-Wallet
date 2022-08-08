import styles from "../styles/input.module.scss";

const Input = ({ method, type, id, label, autocomplete }) => {
  return (
    <div className={styles.form}>
      {method === "input" ? (
        <>
          <input
            type={type}
            id={id}
            className={styles.input}
            placeholder=" "
            autoComplete={autocomplete}
          />
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
