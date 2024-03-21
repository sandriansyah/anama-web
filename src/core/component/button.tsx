interface ButtonProps {
  contain: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 w-full">
      {props.contain}
    </button>
  );
};

export default Button;
