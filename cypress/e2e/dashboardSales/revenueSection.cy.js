import RevenueSection from './../../support/pages/RevenueSection'

describe('Verify revenue chart usability', () => {

    const revenueSectionPage = new RevenueSection()

    before(() => {
        cy.goToPlatform()
      })
    it('Verify three dots button', () => {
        cy.fixture('revenueSection/threeDotsOptionsList').as('data');
        revenueSectionPage.getThreeDotsButton().click()
        revenueSectionPage.getThreeDotsOptions().should('exist')
        
            cy.fixture('revenueSection/threeDotsOptionsList').then((data) => {
                for(let  i = 0 ; i < 3; i++){
                    revenueSectionPage.getThreeDotsOptions()
                    .find('li').eq(i)
                    .find('button').should('have.text', data.threeDotsListOptions[i]); 
                }
             })
       
    })
  })