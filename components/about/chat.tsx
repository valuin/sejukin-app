"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SendHorizonalIcon } from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "operator";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "operator", content: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);


  const operatorResponses = [
    "Baik, saya akan segera memeriksanya untuk Anda.",
    "Pembacaan suhu kemarin rata-rata 2°C.",
    "Apakah ada yang bisa saya bantu lagi?",
    "Kami sedang menangani masalah tersebut.",
    "Data inventaris sudah diperbarui.",
    "Sistem pelacakan telah diaktifkan.",
    "Segera akan melakukan perbaikan pada Unit Penyimpanan B.",
    "Terima kasih telah melaporkan masalah ini.",
    "Apakah Anda memerlukan laporan detail dari minggu ini?",
    "Kami akan memantau temperatur secara real-time.",
    "Pemberitahuan: Backup generator aktif saat ini.",
    "Kelembaban di Storage Unit C sudah stabil.",
    "Pengiriman berikutnya dijadwalkan pada hari Jumat.",
    "Sensor suhu baru telah dipasang di semua unit.",
    "Pemeriksaan rutin selesai tanpa temuan.",
    "Perangkat lunak sistem telah diperbarui.",
    "Notifikasi dini untuk deviasi suhu telah diaktifkan.",
    "Apakah Anda membutuhkan bantuan teknis?",
    "Stok es stabil dan mencukupi.",
    "Alarm suhu telah dinonaktifkan setelah penyesuaian.",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: input,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    if (step < operatorResponses.length) {
      setTimeout(() => {
        const operatorResponse: Message = {
          id: Date.now() + 1,
          sender: "operator",
          content: operatorResponses[step],
        };
        setMessages((prevMessages) => [...prevMessages, operatorResponse]);
        setStep((prevStep) => prevStep + 1);
      }, 1000 + Math.random() * 2000);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-center font-bold text-lg">
        Customer Support Chat
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px] pr-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex mb-4 ${
                m.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-end gap-2 ${
                  m.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={
                      m.sender === "user"
                        ? "https://github.com/shadcn.png"
                        : "/placeholder.svg?height=32&width=32"
                    }
                    alt={m.sender}
                  />
                  <AvatarFallback>
                    {m.sender === "user" ? "ME" : "JS"}
                  </AvatarFallback>
                </Avatar>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    m.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
            <SendHorizonalIcon />
            <span>Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
