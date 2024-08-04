import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function EmailTab({ emailEntry, openEmail, deleteEmail }) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button
        variant="contained"
        style={
          emailEntry.read === false ? { color: "black" } : { color: "gray" }
        }
        onClick={() => openEmail(emailEntry.id)}
      >
        <h3>{emailEntry.subject}</h3>
        <p>{emailEntry.datetime}</p>
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => deleteEmail(emailEntry.id)}
      >
        Delete
      </Button>
    </ButtonGroup>
  );
}

export default EmailTab;
