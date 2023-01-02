import { TextField } from "@mui/material";

interface TextInputProps {
  name: string;
  label: string;
}

export default function TextInput(props: TextInputProps) {
  return (
    <label htmlFor={props.name}>
      <TextField id={props.name} label={props.label} variant="standard" />
    </label>
  );
}
