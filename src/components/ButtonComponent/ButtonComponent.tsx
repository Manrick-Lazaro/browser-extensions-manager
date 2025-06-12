type ButtonProps = {
  text: string;
  activatedFilter?: string;
  onChangeFilter?: (filter: string) => void;
  w?: number;
  h?: number;
  desabledShadow?: boolean;
};

export default function ButtonComponent({
  activatedFilter,
  onChangeFilter,
  text,
  w,
  h,
  desabledShadow,
}: ButtonProps) {
  return (
    <button
      className={`common-btn ${
        activatedFilter === text ? "active-btn" : "inactive-btn"
      } ${desabledShadow ? "!shadow-none" : ""}`}
      style={{
        paddingLeft: w ?? 20,
        paddingRight: w ?? 20,
        paddingTop: h ?? 10,
        paddingBottom: h ?? 10,
      }}
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
