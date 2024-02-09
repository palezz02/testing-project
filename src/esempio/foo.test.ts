import { sum } from './foo';

/*test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});*/


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
      result.codiceFiscale.length = 15 &&
      result.codiceFiscale.replace("/[^A-Z]/gi", "").length === 9 &&
      typeof result.codiceFiscale === 'string'
    ).toBe(true);
  })
  it("Controllo validità mail", () => {
    expect(typeof result.mail).toContain("@")
  })

})
