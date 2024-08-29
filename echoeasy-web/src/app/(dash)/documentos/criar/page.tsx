"use client";

import { ContentLayout } from "@/components/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema de validação usando Zod
const FormSchema = z.object({
  title: z.string().min(1, { message: "Título é obrigatório" }),
  description: z.string().min(1, { message: "Descrição é obrigatória" }),
  category: z.string().optional(),
  image: z.instanceof(File).optional(),
});

export default function CriarDocumento() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Configuração do formulário com react-hook-form e Zod
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      image: undefined,
    },
  });

  // Função para envio do formulário
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);

      // Criação de FormData para envio de arquivos
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.category) formData.append("category", data.category);
      if (data.image) formData.append("image", data.image);

      // Requisição para API
      const response = await api.post("/documentos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: "Documento criado!",
        description: "Seu documento foi criado com sucesso.",
      });

      router.push("/documentos");
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Erro ao criar documento",
        description: error.response.data.message || "Erro inesperado.",
        variant: "destructive",
      });
    }
  }

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
          {/* Formulário de criação de documentos */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Título
              </label>
              <Input
                type="text"
                id="title"
                placeholder="Digite o título"
                {...form.register("title")}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Descrição
              </label>
              <Input
                type="text"
                id="description"
                placeholder="Digite a descrição"
                {...form.register("description")}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium">
                Categoria
              </label>
              <Input
                type="text"
                id="category"
                placeholder="Digite a categoria (opcional)"
                {...form.register("category")}
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium">
                Imagem
              </label>
              <Input
                type="file"
                id="image"
                onChange={(e) => form.setValue("image", e.target.files?.[0])}
              />
            </div>
            {isLoading ? (
              <Button className="w-full" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Salvar
              </Button>
            )}
          </form>
        </CardContent>
      </Card>

      <Table>{/* Se precisar, adicione a tabela aqui */}</Table>
    </ContentLayout>
  );
}
