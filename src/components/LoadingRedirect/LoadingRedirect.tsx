import { IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type LoadingRedirectProps = {};

const LoadingRedirect = ({}: LoadingRedirectProps) => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };

  useEffect(() => {
    navigateHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <IconLoader2
        size={60}
        color="white"
        stroke={1}
        className="animate-spin"
      />
    </div>
  );
};

export default LoadingRedirect;
