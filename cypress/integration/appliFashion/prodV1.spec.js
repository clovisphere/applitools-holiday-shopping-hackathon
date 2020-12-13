/// <reference types="cypress" />

const url = "https://demo.applitools.com/tlcHackathonMasterV1.html";
const browsers = [{ width: 1200, height: 800, name: "chrome" }];
const appName = "AppliFashion";
const batchName = "Holiday Shopping";

let params = {
  appName: appName,
  batchName: batchName,
  testName: "Test 1", // default - change accordingly
  stepName: "main page", // default - change accordingly
  browser: browsers,
};

describe("AppliFashion - Production V1", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it("navigate to main page", () => {
    // initialize test session
    cy.eyesOpen(params);
    // take screenshot
    cy.eyesCheckWindow({
      tag: "Main Page",
      target: "window",
      fully: true,
    });
    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });

  it("filter by color 'black'", () => {
    // initialize test session
    params.testName = "Test 2";
    params.stepName = "filter by color";
    cy.eyesOpen(params);
    // check black color, and click on the filter button
    cy.get("#SPAN__checkmark__107").click();
    cy.get("#filterBtn").click();
    // take screenshot
    cy.eyesCheckWindow({
      tag: "Filter By Color",
      target: "region",
      selector: "#product_grid",
    });
    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
    // verify that only two black shoes appear:-)
    // if #product_grid's children are two then we are good
    cy.get("#product_grid").children().should("have.length", 2);
  });

  it("view product detail", () => {
    // initialize test session
    params.testName = "Test 3";
    params.stepName = "product details";
    cy.eyesOpen(params);
    // check black color, and click on the filter button
    cy.get("#SPAN__checkmark__107").click();
    cy.get("#filterBtn").click();
    // click on 'Appli Air x Night' shoe
    cy.get("#IMG__imgfluid__215").click();
    // take screenshot
    cy.eyesCheckWindow({
      tag: "Product Details",
      target: "window",
      fully: true,
    });
    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });
});
