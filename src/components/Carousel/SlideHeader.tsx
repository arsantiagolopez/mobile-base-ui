import Button from "@/components/Button";
import {
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconLoader2,
} from "@tabler/icons-react";
import clsx from "clsx";

type SlideHeaderProps = {
  header: string;
  isBackHidden?: boolean;
  isBackDisabled?: boolean;
  isForwardHidden?: boolean;
  isForwardDisabled?: boolean;
  isForwardLoading?: boolean;
  isForwardSuccess?: boolean;
  onBackClick?: () => void;
  onForwardClick?: () => void;
};

const SlideHeader = ({
  header,
  isBackHidden,
  isBackDisabled,
  isForwardHidden,
  isForwardDisabled,
  isForwardLoading,
  isForwardSuccess,
  onBackClick,
  onForwardClick,
}: SlideHeaderProps) => {
  const forwardIcon = isForwardLoading ? (
    <IconLoader2 color="black" size={18} stroke={2} className="animate-spin" />
  ) : isForwardSuccess ? (
    <IconCheck color="black" size={18} stroke={2} />
  ) : (
    <IconChevronRight
      color={isForwardDisabled ? "white" : "black"}
      size={24}
      stroke={isForwardDisabled ? 1 : 1.5}
    />
  );

  return (
    <div className="relative flex items-center justify-between h-14 px-5">
      {!isBackHidden && (
        <Button
          variant="unstyled"
          disabled={isBackDisabled}
          onClick={onBackClick}
          className="flex items-center justify-center h-9 -ml-2 aspect-square rounded-xl"
        >
          <IconChevronLeft color="white" size={24} stroke={1} />
        </Button>
      )}

      <h1 className="absolute left-20 right-20 text-sm text-center">
        {header}
      </h1>

      {!isForwardHidden && (
        <Button
          theme={isForwardDisabled ? "light" : "dark"}
          disabled={isForwardDisabled}
          onClick={onForwardClick}
          className={clsx(
            "flex items-center justify-center !p-1.5 h-9 aspect-square",
            {
              "ml-auto": isBackHidden,
            }
          )}
        >
          {forwardIcon}
        </Button>
      )}
    </div>
  );
};

export default SlideHeader;
