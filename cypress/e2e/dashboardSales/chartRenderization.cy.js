import RevenueSection from './../../support/pages/RevenueSection'

describe('Verify chart renderization', () => {

  const revenueSectionPage = new RevenueSection()

  before(() => {
    cy.goToPlatform()
  })
  it('Verify revenue section renders correctly', () => {
    revenueSectionPage.getSectionContainer().should('be.visible')
  })
})