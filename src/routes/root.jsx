import { useState } from "react";
import Email from "../components/email";
import EmailTab from "../components/email-tab";
import data from "../emails.json";

function Root() {
  const [emailList, setEmailList] = useState(data.emails);
  const [email, setEmail] = useState(emailList[0]);

  function sortEmailListByDate(direction) {
    const sortedEmailList = emailList;
    let sortMultiplier = 1;
    if (direction === "DESC") {
      sortMultiplier = -1;
    }

    sortedEmailList.sort((a, b) => {
      if (a.datetime > b.datetime) {
        return 1 * sortMultiplier;
      } else if (a.datetime < b.datetime) {
        return -1 * sortMultiplier;
      } else {
        return 0;
      }
    });
    console.log(sortedEmailList);
    setEmailList(sortedEmailList);
  }

  function openEmail(index, emailEntry) {
    emailList[index].read = true;
    setEmail(emailEntry);
  }

  return (
    <>
      <div id="sidebar">
        <div>
          <button onClick={() => sortEmailListByDate("ASC")}>
            Sort By Ascending
          </button>
          <button onClick={() => sortEmailListByDate("DESC")}>
            Sort By Descending
          </button>
        </div>
        <nav>
          <ul>
            {emailList.map((emailEntry, index) => (
              <li key={index}>
                <EmailTab
                  emailEntry={emailEntry}
                  openEmail={openEmail}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Email email={email} />
      </div>
    </>
  );
}

export default Root;
