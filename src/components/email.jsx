function Email({ email }) {
  return (
    <div>
      <p>to: {email.to}</p>
      <p>from: {email.from}</p>
      <h1>subject: {email.subject}</h1>
      <p>{email.body}</p>
      <p>{email.id}</p>
    </div>
  );
}

export default Email;
