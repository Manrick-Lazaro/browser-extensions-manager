type ButtonProps = {
  text: string;
  activatedFilter?: string;
  onChangeFilter?: (filter: string) => void;
};

export default function ButtonComponent({
  activatedFilter,
  onChangeFilter,
  text,
}: ButtonProps) {
  return (
    <button
      className={`common-btn ${
        activatedFilter === text ? "active-btn" : "inactive-btn"
      }`}
      onClick={() => {
        if (onChangeFilter) {
          onChangeFilter(text);
        }
      }}
    >
      {text}
    </button>
  );
}
