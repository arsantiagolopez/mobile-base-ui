import Button from "@/components/Button";
import Link from "next/link";

type AuthButtonsProps = {};

const AuthButtons = ({}: AuthButtonsProps) => {
  const buttonClasses = "px-5 py-3";

  return (
    <div className="absolute bottom-5 left-5 flex items-center gap-2">
      <Link href="/signup">
        <Button className={buttonClasses}>Sign up</Button>
      </Link>
      <Link href="/login">
        <Button theme="light" className={buttonClasses}>
          Log in
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
