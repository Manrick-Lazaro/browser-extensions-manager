import ButtonComponent from "../ButtonComponent/ButtonComponent";

export type FilterProps = {
  activatedFilter: string;
  onChangeFilter: (filter: string) => void;
};

export default function Filter({
  activatedFilter,
  onChangeFilter,
}: FilterProps) {
  return (
    <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between md:items-center">
      <h1 className="flex justify-center text-neutral-900 dark:text-neutral-100 font-[700] text-3xl">
        Extensions List
      </h1>

      <div className="flex flex-row justify-center items-center gap-4 mt-4 md:mt-0">
        <ButtonComponent
          activatedFilter={activatedFilter}
          onChangeFilter={onChangeFilter}
          text="All"
        />
        <ButtonComponent
          activatedFilter={activatedFilter}
          onChangeFilter={onChangeFilter}
          text="Active"
        />
        <ButtonComponent
          activatedFilter={activatedFilter}
          onChangeFilter={onChangeFilter}
          text="Inactive"
        />
      </div>
    </div>
  );
}
