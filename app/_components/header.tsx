import Link from "next/link";
import { Bell, HelpCircle, Plus, Settings } from "lucide-react";
import { Separator } from "./ui/separator";
import AccountMenu from "./account-menu";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <div className="max-w-[1180px] flex items-center justify-between gap-6 h-[96px] w-full">
          <h1 className="text-3xl font-bold text-primary ">UPCIGA</h1>
          <nav className="flex items-center gap-6">
            <Link href={''} className="flex items-center gap-0.5 text-gray-400 hover:text-white font-semibold">
              <Plus size={14} />
              Novo
            </Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Ordem de Serviço</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Clientes</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Chamados</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold">Manuais</Link>
            <Link href={''} className="text-gray-400 hover:text-white font-semibold"></Link>
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