import { TypeOrdine, addGiftcard, getAmount, newOrder, ordiniList, reset } from './foo';

/*test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});*/

describe("Avvio applicazione", () => {

  describe("Inserimento carrello", () => {
    const result = newOrder({
      nome: "Gabriele",
      cognome: "Palezza",
      codiceFiscale: "PLZGRL02H12F205H",
      mail: "g.palezza@gmail.com"
    });

    it("Controllo inserimento carrello", () => {
      expect(result && typeof result === 'object').toBe(true);
    })

    it("Controllo della lunghezza del nome", () => {
      expect(typeof result.nome === 'string' && result.nome.length < 10).toBe(true);
    })
    it("Controllo della lunghezza del cognome", () => {
      expect(typeof result.cognome === 'string' && result.cognome.length < 10).toBe(true);
    })
    it("Controllo della validità del codice fiscale", () => {
      expect(
        result.codiceFiscale.length === 16 &&
        (result.codiceFiscale.match(/[A-Z]/g) || []).length === 9 &&
        typeof result.codiceFiscale === 'string'
      ).toBe(true);
    })
    it("Controllo validità mail", () => {
      expect(result.mail).toContain("@")
    })

  })

  describe("Inseriment giftcard", () => {
    newOrder({
      nome: "Gabriele",
      cognome: "Palezza",
      codiceFiscale: "PLZGRL02H12F205H",
      mail: "g.palezza@gmail.com"
    });

    const result = addGiftcard({
      tipologia: "cartacea",
      taglio: 10,
      quantità: 5
    },)



    const listaGiftCards = result.listaGiftCards[result.listaGiftCards.length - 1];

    it("Controllo giftcar", () => {
      expect(result && typeof result === 'object').toBe(true);
    })

    it("Controllo tipologia pagamento", () => {
      expect(listaGiftCards.tipologia === 'cartacea' || listaGiftCards.tipologia === 'digitale').toBe(true);
    })

    it("Controllo taglio", () => {
      expect(listaGiftCards.taglio === 10 || listaGiftCards.taglio === 20 || listaGiftCards.taglio === 50 || listaGiftCards.taglio === 100).toBe(true);
    })

    it("Controllo quantità", () => {
      expect(listaGiftCards.quantità > 0 && listaGiftCards.quantità < 100).toBe(true);
    })
    it("controllo tagli uguali", () => {
      const ordine: TypeOrdine = ordiniList[ordiniList.length - 1];
      for (let i = 0; i < ordine.listaGiftCards.length - 1; i++) {
        expect(ordine.listaGiftCards[i].tipologia !== ordine.listaGiftCards[i + 1].tipologia || ordine.listaGiftCards[i].taglio !== ordine.listaGiftCards[i + 1].taglio).toBe(true)

      }
    })
  })

  describe("test di getAmount", () => {
    newOrder({
      nome: "Gabriele",
      cognome: "Palezza",
      codiceFiscale: "PLZGRL02H12F205H",
      mail: "g.palezza@gmail.com"
    });
    addGiftcard({
      tipologia: "cartacea",
      taglio: 50,
      quantità: 2
    },)
    addGiftcard({
      tipologia: "cartacea",
      taglio: 100,
      quantità: 1
    },)
    const result = getAmount()
    it("Controllo imponibile", () => {
      expect(result.imponibile).toBe(200)
    })
    it("Controllo Iva", () => {
      expect(result.iva).toBe(44)
    })
    it("Controllo imponibile + iva", () => {
      expect(result.imponibileIva).toBe(244)
    })

  })
})