import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../_components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../_components/ui/table";

const Clients = () => {
  return (
    <main className="flex flex-col items-center justify-between py-8 px-4 h-screen">
      <div className="max-w-[1180px] w-full">
        <Table className="w-full border">
          <TableHeader className="bg-secondary">
            <TableRow className="border">
              <TableHead className="p-2 w-[15px]"></TableHead>
              <TableHead className="p-2 w-[15px]">Código</TableHead>
              <TableHead className="p-2 w-[200px]">Nome</TableHead>
              <TableHead className="p-2 w-[160px]">CNPJ/CPF</TableHead>
              <TableHead className="p-2 w-[100px]">Telefone</TableHead>
              <TableHead className="p-2 w-[100px]">Situação</TableHead>
              <TableHead className="p-2 w-[60px]">Tipo</TableHead>
              <TableHead className="p-2 w-[30px]"></TableHead>
              <TableHead className="p-2 w-[30px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>1</TableCell>
              <TableCell>UPCIGA AUTOMAÇÃO COMERCIAL</TableCell>
              <TableCell>27.686.124/0001-29</TableCell>
              <TableCell>3034-3040</TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>Avulso</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </main>
  );
}

export default Clients;