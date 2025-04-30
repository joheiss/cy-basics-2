describe("Outer suite", () => {
  before(() => cy.log("Before all in outer suite"));
  beforeEach(() => cy.log("Before each in outer suite"));
  afterEach(() => cy.log("After each in outer suite"));
  after(() => cy.log("After all in outer suite"));
  it("Test 1 in outer suite", () => {
    cy.log("Test 1 in outer suite");
  });
  it("Test 2 in outer suite", () => {
    cy.log("Test 2 in outer suite");
  });
  describe("Inner suite #1", () => {
    before(() => cy.log("Before all in inner suite #1"));
    beforeEach(() => cy.log("Before each in inner suite #1"));
    afterEach(() => cy.log("After each in inner suite #1"));
    after(() => cy.log("After all in inner suite #1"));
    it("Test 1.1 in outer suite", () => {
      cy.log("Test 1.1 in inner suite #1");
    });
    it("Test 1.2 in outer suite", () => {
      cy.log("Test 1.2 in inner suite #1");
    });
  });
  describe("Inner suite #2", () => {
    before(() => cy.log("Before all in inner suite #2"));
    beforeEach(() => cy.log("Before each in inner suite #2"));
    afterEach(() => cy.log("After each in inner suite #2"));
    after(() => cy.log("After all in inner suite #2"));
    it("Test 2.1 in outer suite", () => {
      cy.log("Test 2.1 in inner suite #2");
    });
    it("Test 2.2 in outer suite", () => {
      cy.log("Test 2.2 in inner suite #2");
    });
  });
});
