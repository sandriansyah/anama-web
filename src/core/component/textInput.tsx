interface TextInputProps {
  label?: string;
  placeHolder?: string;
}

const TextInput = (props: TextInputProps) => {
  return (
    <label>
      <span class="text-white">{props.label}</span>
      <input
        class="w-full border rounded-md p-2"
        placeholder={props.placeHolder ?? ""}
      />
    </label>
  );
};

export default TextInput;
