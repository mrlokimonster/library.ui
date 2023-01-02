import TextInput from "../../shared-components/text-input";

export default function AddBook() {
  return (
    <>
      <TextInput name="title" label="Title" />
      <TextInput name="firstName" label="Author First Name" />
      <TextInput name="lastName" label="Author Last Name" />
    </>
  );
}
