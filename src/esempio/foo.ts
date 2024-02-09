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

export type TypeAmount = {
  imponibile: number,
  iva: number,
  imponibileIva: number
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

export const getAmount = (): TypeAmount => {
  const ordine: TypeOrdine = ordiniList[ordiniList.length - 1];
  let imponibile: number = 0
  let iva: number = 0
  let imponibileIva: number = 0
  for (let i = 0; i < ordine.listaGiftCards.length; i++) {
    imponibile = imponibile + (ordine.listaGiftCards[i].taglio * ordine.listaGiftCards[i].quantità)
  }
  iva = imponibile * 0.22
  imponibileIva = imponibile + iva
  const amount: TypeAmount = {
    imponibile: imponibile,
    iva: iva,
    imponibileIva: imponibileIva
  }
  return amount
}

export const reset = (): void => {
  ordiniList.length = 0;
}