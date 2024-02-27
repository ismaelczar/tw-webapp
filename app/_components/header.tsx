import { ClipboardCheck, Headset, Plus, User, UserSearch } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <div className=" flex justify-center w-full">
        <div className="w-[1180px] flex items-center justify-center gap-8 h-[96px]">
          <h1 className="text-2xl font-bold text-primary ">Logotipo</h1>
          <nav className="flex items-center gap-8">
            <Link href={''} className="flex items-center gap-0.5 text-gray-400 hover:text-white">
              <Plus size={14} />
              Novo
            </Link>
            <Link href={''} className="text-gray-400 hover:text-white">Ordem de Serviço</Link>
            <Link href={''} className="text-gray-400 hover:text-white">Clientes</Link>
            <Link href={''} className="text-gray-400 hover:text-white">Chamados</Link>
            <Link href={''} className="text-gray-400 hover:text-white">Manuais</Link>
          </nav>
          <Button className="flex items-center gap-2 ">
            <User size={16} />
            Perfil
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
}

export default Header;