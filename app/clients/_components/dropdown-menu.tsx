import { Button } from "@/app/_components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu";


const DropdownMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Mais ações</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" >
        <DropdownMenuItem>Exportar</DropdownMenuItem>
        <DropdownMenuItem>Imprimir</DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>

  );
}

export default DropdownMenuButton;