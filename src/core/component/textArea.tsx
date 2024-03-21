interface TextInputAreaProps {
  label?: string;
  placeHolder?: string;
}

const TextInputArea = (props: TextInputAreaProps) => {
  return (
    <label>
      <span class="text-white">{props.label}</span>
      <textarea
        class="w-full border rounded-md p-2"
        placeholder={props.placeHolder ?? ""}
      />
    </label>
  );
};

export default TextInputArea;
