import { HelpCircle } from "lucide-react";
import { Button } from "../_components/ui/button";
import DropdownMenuButton from "./_components/dropdown-menu";
import SearchForm from "./_components/search-form";
import TableClients from "./_components/table-clients";
import { Separator } from "../_components/ui/separator";


const Clients = () => {
  return (
    <main className="flex flex-col items-center justify-between px-2 py-8 h-screen">
      <div className="max-w-[1180px] min-w-[1180px] min-h-[768px] bg-white px-8 py-6">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary ">Clientes</h1>
          <HelpCircle size={16} className="text-primary" />
        </div>
        <Separator className="mt-4"/>

        <div className="flex items-center justify-between pt-10 pb-4">
          <div className="flex items-center gap-2">
            <Button variant="default">Adicionar</Button>
            <Button variant="outline" disabled>Alterar</Button>
            <Button variant="outline" disabled>Excluir</Button>
            <DropdownMenuButton  />
          </div>

          <SearchForm />
        </div>

        <TableClients />
      </div>
    </main >
  );
}

export default Clients;