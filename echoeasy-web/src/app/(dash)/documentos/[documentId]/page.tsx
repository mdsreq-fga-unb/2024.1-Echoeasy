"use client";

import { ContentLayout } from "@/components/content-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useGetDocumentById } from "@/hooks/useGetDocumentById";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(1, { message: "Título é obrigatório" }),
  description: z.string().min(1, { message: "Descrição é obrigatória" }),
});

export default function EditarDocumento({
  params,
}: {
  params: { documentId: string };
}) {
  const router = useRouter();
  const {
    data: documentData,
    isLoading: isLoadingDocument,
    mutate: refetchDocument,
  } = useGetDocumentById(params.documentId);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: documentData?.title,
      description: documentData?.description,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      await api.put(`/documentos/update?_id=${params.documentId}`, formData);

      toast({
        title: "Documento alterado!",
        description: "Seu documento foi modificado com sucesso.",
      });

      refetchDocument();
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Erro ao criar documento",
        description: error.response?.data.message || "Erro inesperado.",
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    if (!documentData) return;

    form.setValue("title", documentData.title);
    form.setValue("description", documentData.description);
  }, [documentData, form]);

  if (isLoadingDocument) {
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
          <CardTitle>Editar Documento</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Digite o título"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite a descrição" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col w-fit items-center gap-4">
                <Image
                  src={documentData?.image}
                  alt="Imagem do documento"
                  width={200}
                  height={200}
                />
                <Button className="w-fit" type="button" variant="outline">
                  Alterar Imagem
                </Button>
              </div>

              {isLoadingDocument ? (
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
          </Form>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
