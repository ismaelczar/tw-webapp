import { Checkbox } from "@/app/_components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/_components/ui/table";


const TableClients = () => {
  return (
    <>
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
            <TableCell>
              <Checkbox />
            </TableCell>
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
    </>
  );
}

export default TableClients;