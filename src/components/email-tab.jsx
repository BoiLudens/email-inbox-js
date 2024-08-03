function EmailTab({ emailEntry, openEmail }) {
  return (
    <button
      style={emailEntry.read === false ? { color: "black" } : { color: "gray" }}
      onClick={() => openEmail(emailEntry.id, emailEntry)}
    >
      <h3>{emailEntry.subject}</h3>
      <p>{emailEntry.datetime}</p>
    </button>
  );
}

export default EmailTab;
