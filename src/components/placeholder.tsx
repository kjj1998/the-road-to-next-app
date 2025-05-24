import { cloneElement } from "react";
import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: React.ReactElement<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  button?: React.ReactElement<any>;
}

const Placeholder = ({
  label,
  button = <div />,
  icon = <LucideMessageSquareWarning /> }: PlaceholderProps) => {
    return (
      <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
        {cloneElement(icon, {
          className: "w-16 h-16",
        })}
        <h2 className="text-lg text-center">{label}</h2>
        {cloneElement(button, {
          className: "h-10",
        })}
      </div>
    );
};

export { Placeholder };