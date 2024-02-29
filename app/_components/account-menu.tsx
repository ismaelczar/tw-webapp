'use client'

import { LogIn, LogOut, User, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from "./ui/avatar";



const AccountMenu = () => {
  const { data, status } = useSession()

  function handleLoginClick() {
    signIn('google')
  }

  function handleLogOutClick() {
    signOut()
  }

  return (
    <Sheet >
      <SheetTrigger asChild>
        {data?.user ?
          (
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar>
                <AvatarImage src={data?.user.image ?? ""} />
              </Avatar>
              <h2 className="text-white">{data?.user.name}</h2>
            </div>
          )
          : (
            <Button className="flex items-center gap-2">
              <User size={16} />
              Perfil
            </Button>
          )
        }
      </SheetTrigger>

      <SheetContent className="p-0" >
        <SheetHeader className="px-5 py-6 border-b border-solid">Menu</SheetHeader>
        {data?.user ?
          (
            <div className="px-5 py-6">
              <div className="flex items-center gap-2">
                <h2>Olá, {data.user.name}</h2>
              </div>
              <Button className="mt-8 w-full flex items-center gap-1 text-white" onClick={handleLogOutClick}> <LogOut size={14} />Sair</Button>
            </div>
          ) : (
            <div className="px-5 py-6">
              <div className="flex items-center gap-2">
                <UserCircle className="text-gray-500" />
                <h2>Olá, Faça seu login!</h2>
              </div>
              <Button className="mt-8 w-full flex items-center gap-1 text-white" onClick={handleLoginClick}> <LogIn size={14} />Faça seu login</Button>
            </div>
          )
        }
      </SheetContent >
    </Sheet >
  );
}

export default AccountMenu;


