function EmailTab({ emailEntry, openEmail, index }) {
  return (
    <button
      style={emailEntry.read === false ? { color: "black" } : { color: "gray" }}
      onClick={() => openEmail(index, emailEntry)}
    >
      <h3>{emailEntry.subject}</h3>
      <p>{emailEntry.datetime}</p>
    </button>
  );
}

export default EmailTab;
