import type { DietPlanRequest } from "./types";

/*
    2 TIPOS DE PROMPT
    SYSTEM PROMPT - INSTRUÇÕES PARA A IA
    USER PROMPT - INFORMAÇÕES PARA A IA
    DOCS SYSTEM PROMPT - INSTRUÇÕES PARA A IA
*/

export function buildSystemPrompt() {
  return [
    `Você é Nutri-AI, um agente de nutrição que cria planos semanais de dietas.
        Regras fixas:
        - Sempre responda em texto markdown legível para humanos.
        - Use # para titulos e - para itens de lista.
        - A dieta deve conter exatamente 7 dias.
        - Cada dia deve ter 4 refeições fixas: café da manhã, almoço, lanche, jantar.
        - SEMPRE inclua ingredientes comuns no Brasil.
        - NUNCA inclua calorias e macros de cada refeição, apenas as refeições.
        - Evite alimentos ultraprocessados.
        - Não responda em JSON ou outro formato, apenas texto markdown legível para humanos.
        - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais
        personalizado
        - Não coloque nenhuma informação extra após a elaboração da dieta`,
  ].join("\n");
}

export function buildUserPrompt({
  nome,
  altura_cm,
  idade,
  peso_kg,
  sexo,
  nivel_atividade,
  objetivo,
}: DietPlanRequest) {
  return [
    `Gere um plano alimentar personalizado com base nos dados:`,
    `- Nome: ${nome}`,
    `- Idade: ${idade}`,
    `- Altura em centímetros: ${altura_cm}`,
    `- Peso em Kg: ${peso_kg}`,
    `- Sexo: ${sexo}`,
    `- Nível de atividade: ${nivel_atividade}`,
    `- Objetivo: ${objetivo}`,
  ].join("\n");
}

export function buildDocsSystemPrompt(doc: string) {
  return `Documento técnico para ajudar na geração de dietas: ${doc}`;
}
