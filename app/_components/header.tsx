import Link from "next/link";
import { Bell, HelpCircle, Plus, Settings } from "lucide-react";
import { Separator } from "./ui/separator";
import AccountMenu from "./account-menu";
import Logo from '@/public/UP.png'
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div className="flex justify-center bg-[#41009a]">
        <div className="max-w-[1180px] flex items-center justify-around h-[67px] w-full">
          <Image src={Logo} alt="" />

          <nav className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-0.5 text-white font-semibold">
              <Plus size={14} />
              Novo
            </Link>
            <Link href={''} className="text-white font-semibold text-sm">Ordem de Serviço</Link>
            <Link href="/clients" className="text-white font-semibold text-sm">Clientes</Link>
            <Link href={''} className="text-white font-semibold text-sm">Chamados</Link>
            <Link href={''} className="text-white font-semibold text-sm">Manuais</Link>
            <Link href={''} className="text-white font-semibold text-sm"></Link>
            <Link href={''} className="text-white font-semibold text-sm">Manuais</Link>
          </nav>
          <div className="flex items-center gap-4">
            <HelpCircle size={20} className="text-primary" />
            <Settings size={20} className="text-primary" />
            <Bell size={20} className="text-primary" />

            <AccountMenu />
          </div>
        </div>
      </div>

      <Separator />
    </header>
  );
}

export default Header;