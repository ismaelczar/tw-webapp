'use client'

import { LogIn, User, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { signIn } from 'next-auth/react'


const AccountMenu = () => {

  function handleLoginClick() {
    signIn('google')
  }

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2">
          <User size={16} />
          Perfil
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" >
        <SheetHeader className="px-5 py-6 border-b border-solid">Menu</SheetHeader>

        <div className="px-5 py-6">
          <div className="flex items-center gap-2">
            <UserCircle className="text-secondary" />
            <h2>Olá, Faça seu login!</h2>
          </div>
          <Button variant="outline" className="mt-8 w-full flex items-center gap-1" onClick={handleLoginClick}> <LogIn size={14} />Faça seu login</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AccountMenu;