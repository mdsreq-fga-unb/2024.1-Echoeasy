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
import { toast } from "@/components/ui/use-toast";
import { useGetAllDocuments } from "@/hooks/useGetAllDocuments";
import { Loader2, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Documentos() {
  const router = useRouter();
  const { data: documents, isLoading } = useGetAllDocuments();

  const handleEdit = (documentId: any) => {
    toast({
      title: "Edição não disponível",
      description: "Documento Id: " + documentId,
      variant: "destructive",
    });
  };

  const handleDelete = (documentId: any) => {
    toast({
      title: "Deleção não disponível",
      description: "Documento Id: " + documentId,
      variant: "destructive",
    });
  };

  if (isLoading) {
    return (
      <ContentLayout
        className="flex justify-center items-center"
        title="Documentos"
      >
        <Loader2 className="h-10 w-10 animate-spin" />
      </ContentLayout>
    );
  }

  return (
    <ContentLayout title="Documentos">
      <Card>
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          <Button
            className="w-fit"
            onClick={() => router.push("/documentos/criar")}
          >
            <PlusCircle className="mr-2" />
            Criar Novo Documento
          </Button>
          <Table>
            <TableCaption>Lista de documentos cadastrados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Ações</TableHead>
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
