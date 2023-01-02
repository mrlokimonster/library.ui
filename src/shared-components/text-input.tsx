interface TextInputProps {
  name: string;
  label: string;
}

export default function TextInput(props: TextInputProps) {
  return (
    <label>
      {props.label}
      <input name={props.name} type="text" />
    </label>
  );
}
