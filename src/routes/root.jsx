import { useEffect, useState } from "react";
import Email from "../components/email";
import EmailTab from "../components/email-tab";
// import data from "../emails.json";

function Root() {
  const [emailList, setEmailList] = useState([]);
  const [email, setEmail] = useState();
  const url = "http://localhost:3000/emails";

  useEffect(() => {
    async function fetchEmail() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setEmailList(json.emails);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchEmail();
    console.log(emailList);
  }, []);

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

  function deleteEmail(emailEntryId) {
    const filteredList = emailList.filter((email) => email.id !== emailEntryId);
    setEmailList(filteredList);
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
                <EmailTab
                  emailEntry={emailEntry}
                  openEmail={openEmail}
                  deleteEmail={deleteEmail}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        {email !== undefined ? <Email email={email} /> : null}
      </div>
    </>
  );
}

export default Root;
