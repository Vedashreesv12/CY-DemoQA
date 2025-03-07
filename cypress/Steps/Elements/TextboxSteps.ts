import { Given } from "@badeball/cypress-cucumber-preprocessor";


Given("I want to Login to DemoQA Portal", () => {
    cy.visit("https://demoqa.com/login"); // Example action
  });