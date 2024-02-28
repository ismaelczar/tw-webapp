import { HelpCircle } from "lucide-react";
import { Button } from "../_components/ui/button";
import DropdownMenuButton from "./_components/dropdown-menu";
import SearchForm from "./_components/search-form";
import TableClients from "./_components/table-clients";


const Clients = () => {
  return (
    <main className="flex flex-col items-center justify-between py-8 px-4 h-screen">
      <div className="max-w-[1180px] w-full">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Clientes</h1>
          <HelpCircle size={16} className="text-primary" />
        </div>

        <div className="flex items-center justify-between pt-10 pb-4">
          <div className="flex items-center gap-2">
            <Button>Adicionar</Button>
            <Button variant="secondary">Alterar</Button>
            <Button variant="secondary">Excluir</Button>
            <DropdownMenuButton />
          </div>

          <SearchForm />
        </div>

        <TableClients />

      </div>
    </main >
  );
}

export default Clients;