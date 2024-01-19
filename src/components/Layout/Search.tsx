import { IconSearch } from "@tabler/icons-react";
import Button from "../Button";

type SearchProps = {
  className?: string;
};

const Search = ({ className }: SearchProps) => {
  return (
    <Button variant="unstyled" className={className}>
      <IconSearch stroke={1.5} />
    </Button>
  );
};

export default Search;
