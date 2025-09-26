"use client";

import { useState } from "react";
import { DietForm } from "./_components/diet-form";

interface DietData {
  nome: string;
  idade: number;
  altura_cm: number;
  peso_kg: number;
  sexo: "masculino" | "feminino";
  nivel_atividade: "sedentario" | "2x_semana" | "4x_semana";
  objetivo: "perda_de_peso" | "hipertrofia" | "manter_massa_muscular";
}

export default function Home() {
  const [data, setData] = useState(null);

  function handleSubmit(data: DietData){
    console.log(data);
  }

  return (
    <DietForm onSubmit={handleSubmit} />
  );
}
