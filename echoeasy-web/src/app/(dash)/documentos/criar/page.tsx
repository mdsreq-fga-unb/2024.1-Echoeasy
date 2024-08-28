"use client";

import { ContentLayout } from "@/components/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { useGetAllDocuments } from "@/hooks/useGetAllDocuments";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CriarDocumento() {
  const router = useRouter();

  const { data } = useGetAllDocuments();

  console.log(data);

  return (
    <ContentLayout className="flex flex-col gap-10" title="Criar Documento">
      <div
        onClick={() => router.push("/documentos")}
        className="flex gap-2 cursor-pointer"
      >
        <ArrowLeft />
        Voltar
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Criar Documento</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Salvar</Button>
        </CardContent>
      </Card>

      <Table></Table>
    </ContentLayout>
  );
}
