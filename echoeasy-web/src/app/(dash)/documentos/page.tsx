"use client";

import { ContentLayout } from "@/components/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllDocuments } from "@/hooks/useGetAllDocuments";
import { useRouter } from "next/navigation";

export default function Documentos() {
  const router = useRouter();
  const { data: documents } = useGetAllDocuments();

  console.log(documents); // Debug para verificar os documentos recebidos

  const handleEdit = (documentId: any) => {
    // Lógica para editar o documento
    console.log("Editar documento:", documentId);
    // Redireciona para a página de edição do documento
    router.push(`/documentos/editar/${documentId}`);
  };

  const handleDelete = (documentId: any) => {
    // Lógica para deletar o documento
    console.log("Deletar documento:", documentId);
    // Adicione a lógica de exclusão aqui, como uma chamada API para deletar o documento
  };
  return (
    <ContentLayout className="flex flex-col gap-10" title="Documentos">
      <Button
        className="w-fit self-end"
        onClick={() => router.push("/documentos/criar")}
      >
        Criar Documento
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Lista de documentos cadastrados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents?.map((document: any) => (
                <TableRow key={document._id}>
                  <TableCell className="font-medium">
                    {document.title}
                  </TableCell>
                  <TableCell>{document.description}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleEdit(document._id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(document._id)}
                      >
                        Deletar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
