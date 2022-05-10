import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Inbox = () => {
  const history = useHistory();
  const [mails, setMails] = useState();

  const composeHandler = (e) => {
    e.preventDefault();
    history.replace("/startingpage");
  };

  useEffect(() => {
    let String = localStorage.getItem("userId");
    let email = String.replace(/[&,+()$~%@.'":*?<>{}]/g, "");

    axios
      .get(
        `https://mailbox-data-default-rtdb.firebaseio.com/maildata${email}.json`
      )
      .then((res) => {
        console.log(res.data);
        setMails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <span>Yahoo.mails: </span>
        <span>
          <input type={"text"} placeholder="search here" />
        </span>
      </div>
      <div>
        <section>
          <button onClick={composeHandler}>compose</button>

          <button>Inbox</button>
          <button>Unread</button>
          <button>Starred</button>
        </section>
        <div>
          <ul>
            {Object.keys(mails).map((key) => (
              <li key={mails[key].sub}>
                {mails[key].sub} {""} 
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
