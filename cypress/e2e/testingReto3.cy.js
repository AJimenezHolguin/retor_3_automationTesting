describe("inicio de seción", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/hotels.html");
  });
  it("debe verificar que al cargar la pagina se muestren todos los hoteles", () => {
    cy.wait(500);
    cy.get(".container-general_cards")
      .should("be.visible")
      .find(".card")
      .should("have.length", 18);
  });
  it("Debe mostrar todos los tipos de precios cada uno con sus respectivos hoteles", () => {
    cy.get(".filter-prices").select("$");
    cy.get(".container-general_cards")
      .should("be.visible")
      .should(($cards) => {
        const cardCount = $cards.length;
        expect(cardCount).to.be.greaterThan(0);
      });
    cy.get("#filter-prices").select("$$");
    cy.get(".container-general_cards")
      .should("be.visible")
      .should(($cards) => {
        const cardCount = $cards.length;
        expect(cardCount).to.be.greaterThan(0);
      });
    cy.get("#filter-prices").select("$$$");
    cy.get(".container-general_cards")
      .should("be.visible")
      .should(($cards) => {
        const cardCount = $cards.length;
        expect(cardCount).to.be.greaterThan(0);
      });
    cy.get("#filter-prices").select("$$$$");
    cy.get(".container-general_cards")
      .should("be.visible")
      .should(($cards) => {
        const cardCount = $cards.length;
        expect(cardCount).to.be.greaterThan(0);
      });
    cy.get("#filter-prices").select("All");
    cy.get(".container-general_cards")
      .should("be.visible")
      .should(($cards) => {
        const cardCount = $cards.length;
        expect(cardCount).to.be.greaterThan(0);
      });
  });
  it("Debe limpiar los filtros y verificar que se muestren nuevamente las 18 cards de hoteles", () => {
    cy.get(".filter_countries").select("country3");
    cy.get(".filter_countries").select("country2");
    cy.get(".filter-prices").select("price3");
    cy.get(".filter_clear").click();
    cy.get(".container-general_cards")
      .should("be.visible")
      .find(".card")
      .should("have.length", 18);
  });
});
