"use client";
import { useTokenContext } from "@/contexts/TokenContext";
import { api } from "@/services/api";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function AccountDetails() {
  const { user } = useTokenContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const getUserAvatarLetters = () => {
    if (user?.name && user?.lastname) {
      return `${user.name[0]}${user.lastname[0]}`.toUpperCase();
    }
    return "U"; // Default placeholder if user name or lastname is not available
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file); // Armazene o objeto File real
      setPreviewImage(URL.createObjectURL(file)); // Para exibição de pré-visualização
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image", selectedFile); // Use o objeto File aqui

    try {
      await api.post(`/usuarios/update_photo?_id=${user?._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setIsEditing(false);
      setPreviewImage(null); // Limpa a pré-visualização após salvar
    } catch (error) {
      console.error("Erro ao atualizar a foto:", error);
    }
  };

  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>Sua Conta </CardTitle>
        <CardDescription>Informações sobre a sua conta.</CardDescription>
        {user?.image || previewImage ? (
          <div className="flex flex-col gap-4">
            <Image
              src={(previewImage || user?.image) ?? ""}
              alt="Avatar"
              className="rounded-sm self-center"
              width={200}
              height={200}
            />
            {isEditing ? (
              <Button
                className="w-fit self-center text-xs p-2 h-fit"
                onClick={handleSave}
              >
                Salvar
              </Button>
            ) : (
              <>
                <Button className="w-fit self-center text-xs p-2 h-fit">
                  <label htmlFor="upload-photo" className="cursor-pointer">
                    Alterar foto
                  </label>
                </Button>
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <Avatar className="h-[200px] w-[200px] self-center">
              <AvatarImage src="#" alt="Avatar" />
              <AvatarFallback className="text-4xl">
                {getUserAvatarLetters()}
              </AvatarFallback>
            </Avatar>
            <Button className="w-fit self-center text-xs p-2 h-fit">
              <label htmlFor="upload-photo" className="cursor-pointer">
                Alterar foto
              </label>
            </Button>
            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={user?.email}
          className="input"
          disabled
        />
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={user?.name}
          className="input"
          disabled
        />
        <Label htmlFor="lastname">Sobrenome</Label>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          value={user?.lastname}
          className="input"
          disabled
        />

        <Label htmlFor="cellphone">Celular</Label>
        <Input
          type="text"
          id="cellphone"
          name="cellphone"
          value={user?.cellphone}
          className="input"
          disabled
        />
        <Label htmlFor="role">Função</Label>
        <Input
          type="text"
          id="role"
          name="role"
          value={user?.role}
          className="input"
          disabled
        />
      </CardContent>
    </Card>
  );
}
