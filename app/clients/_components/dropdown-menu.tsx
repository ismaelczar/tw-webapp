import { Button } from "@/app/_components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu";


const DropdownMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Mais ações</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" >
        <DropdownMenuItem>Copiar</DropdownMenuItem>
        <DropdownMenuItem>Lançar Contas</DropdownMenuItem>
        <DropdownMenuItem>Imprimir dados</DropdownMenuItem>
        <DropdownMenuItem>Enviar e-mail</DropdownMenuItem>
        <DropdownMenuItem>Enviar mensagem WhatsApp</DropdownMenuItem>
        <DropdownMenuItem>Alterar Status</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}

export default DropdownMenuButton;