/*export const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);*/
export type TypeIntestatario = {
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


export const newOrder = ({ nome, cognome, codiceFiscale, mail }): TypeIntestatario => {
  const ordine: TypeIntestatario = {
    nome: nome,
    cognome: cognome,
    codiceFiscale: codiceFiscale,
    mail: mail,
    listaGifCards: []
  }
  return ordine
}