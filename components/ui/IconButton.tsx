import { cn } from "@/libs/utils";
import { Button } from "./Button";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton = ({ className, icon, onClick }: IconButtonProps) => {
  return (
    <Button
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};
