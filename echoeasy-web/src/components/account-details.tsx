"use client";
import { useTokenContext } from "@/contexts/TokenContext";
import Image from "next/image";
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

  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>Sua Conta </CardTitle>
        <CardDescription>Informações sobre a sua conta.</CardDescription>
        {user?.image && (
          <Image
            src={user.image}
            alt="Avatar"
            className="rounded-sm self-center"
            width={200}
            height={200}
          />
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
