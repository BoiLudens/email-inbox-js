import { useState } from "react";
import Email from "../components/email";
import EmailTab from "../components/email-tab";
import data from "../emails.json";

function Root() {
  const [emailList, setEmailList] = useState(data.emails);
  const [email, setEmail] = useState(emailList[0]);

  function sortEmailListByDate(direction) {
    const sortedEmailList = [...emailList];
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

    setEmailList(sortedEmailList);
  }

  function deleteEmail(index) {
    const filteredList = [...emailList];
    filteredList.filter((email) => email.id !== index);
  }

  function openEmail(emailEntryId) {
    const emailToUpdate = emailList.find((email) => email.id === emailEntryId);
    emailToUpdate.read = true;
    setEmail(emailToUpdate);
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
            {emailList.map((emailEntry) => (
              <li key={emailEntry.id}>
                <EmailTab emailEntry={emailEntry} openEmail={openEmail} />
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
