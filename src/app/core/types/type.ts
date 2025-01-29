export interface Offer {
    id: number;
    destino: string;
    imagem: string;
    preco: number;
}

export interface FederativeUnit {
  id: number;
  nome: string;
  sigla: string;
}

export interface Statement {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
}
