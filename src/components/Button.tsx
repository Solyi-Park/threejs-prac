type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-black rounded-md text-white text-xs px-2"
    >
      {text}
    </button>
  );
}
