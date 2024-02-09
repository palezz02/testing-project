/*export const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);*/
export type TypeOrdine = {
  nome: string,
  cognome: string,
  codiceFiscale: string,
  mail: string,
  listaGifCards: TypeGiftCard[]
}

export type TypeGiftCard = {
  tipologia: string,
  taglio: number,
  quantità: number
}


export const newOrder = ({ nome, cognome, codiceFiscale, mail }): TypeOrdine => {
  const ordine: TypeOrdine = {
    nome: nome,
    cognome: cognome,
    codiceFiscale: codiceFiscale,
    mail: mail,
    listaGifCards: []
  }
  return ordine
}