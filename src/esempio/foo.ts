/*export const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);*/
export type TypeOrdine = {
  nome: string,
  cognome: string,
  codiceFiscale: string,
  mail: string,
  listaGiftCards: TypeGiftCard[]
}

export type TypeGiftCard = {
  tipologia: string,
  taglio: number,
  quantità: number
}

export const ordiniList: TypeOrdine[] = []

export const newOrder = ({ nome, cognome, codiceFiscale, mail }): TypeOrdine => {
  const ordine: TypeOrdine = {
    nome: nome,
    cognome: cognome,
    codiceFiscale: codiceFiscale,
    mail: mail,
    listaGiftCards: []
  }
  ordiniList.push(ordine)
  return ordine
}

export const addGiftcard = ({ tipologia, taglio, quantità }: TypeGiftCard): TypeOrdine => {
  const ordine: TypeOrdine = ordiniList[ordiniList.length - 1];
  for (let i = 0; i < ordine.listaGiftCards.length - 1; i++) {
    if (ordine.listaGiftCards[i].tipologia === tipologia && ordine.listaGiftCards[i].taglio === taglio) {
      ordine.listaGiftCards[i].quantità === ordine.listaGiftCards[i].quantità + quantità;
      return ordine
    }
  }
  ordine.listaGiftCards.push({ tipologia, taglio, quantità });
  return ordine
}