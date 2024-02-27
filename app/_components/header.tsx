import Link from "next/link";
import { Bell, HelpCircle, Plus, Settings, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import AccountMenu from "./account-menu";

const Header = () => {
  return (
    <header>
      <div className=" flex justify-center w-full">
        <div className="max-w-[1180px] flex items-center justify-center gap-8 h-[96px]">
          <h1 className="text-2xl font-bold text-primary ">UPCIGA</h1>
          <nav className="flex items-center gap-8">
            <Link href={''} className="flex items-center gap-0.5 text-gray-400 hover:text-white font-semibold">
              <Plus size={14} />
              Novo
            </Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Ordem de Serviço</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Clientes</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Chamados</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Manuais</Link>
          </nav>
          <div className="flex items-center gap-4">
            <HelpCircle size={20} />
            <Settings size={20} />
            <Bell size={20} />

            <AccountMenu />
          </div>
        </div>
      </div>

      <Separator />
    </header>
  );
}

export default Header;