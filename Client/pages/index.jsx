import Head from "next/head";
import { useState } from "react";
import { addUser } from "../store/usersSlice";
import { increment } from "../store/countSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Index.module.scss";

export default function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const count = useSelector((state) => state.counter.count);
  const users = useSelector((state) => state.users.users);

  const addUsers = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.all}>
      <Head>
        <title>Wallet App</title>
        <meta name="description" content="Wallet App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <span>
          <h1>New User: </h1>
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={addUsers}>Add</button>
        </span>

        <div>
          <h3>User List:</h3>
          <ol>
            {users &&
              users.map((user) => (
                <li key={user}>
                  <b>{user}</b>
                </li>
              ))}
          </ol>
        </div>
      </div>

      <div>
        <h1>Counter: {count}</h1>

        <button onClick={() => dispatch(increment())}>Add to Count</button>
      </div>
    </div>
  );
}
