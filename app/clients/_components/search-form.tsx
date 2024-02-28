import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <div className="flex items-center gap-2">
      <Input className="rounded-none h-[40px]" placeholder="Pesquisar" />
      <Button className="rounded-s">
        <Search />
      </Button>
    </div>
  );
}

export default SearchForm;