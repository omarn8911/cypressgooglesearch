require("cypress-plugin-tab");

describe('Open link in new tab', () => {

  it('Run a google search for the word "selenium" and check the page title', () => {
      cy.visit('https://www.google.com')
      cy.get('input[name="q"]')
          .type('selenium{enter}')
      cy.wait(1000);
      cy.get('#search > div > div > div:nth-child(3) > div > div > div  .yuRUbf > a')
          .should('have.attr', 'href')
          .then(($href) => {
              // Log the href value
              cy.log($href)
              // Open the link in a new tab
              cy.wait(1000);
              cy.get('#search > div > div > div:nth-child(3) > div > div > div  .yuRUbf > a').then((link) => {
                  const href = link.prop('href')
                  link.removeAttr('target')
                  link.attr('href', 'javascript:void(0)')
                  link.click()
                  cy.visit(href)
                  cy.wait(1000)
                  cy.tab().then((tab) => {
                      cy.title().then((title) => {
                          expect(title).to.not.be.empty
                          cy.wait(1000);
                      })
                  })
              })
          })
  })
})