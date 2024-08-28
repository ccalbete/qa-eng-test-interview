class RevenueSection {
    constructor(){}

    getSectionContainer(){
        return cy.get('[data-cy="revenue-chart-container"]')
    }

    getThreeDotsButton(){
        return cy.get('[data-cy="revenue-chart-three-dots-button"]').find('button')
    }

    getThreeDotsOptions(){
        return cy.get('[data-cy="revenue-chart-three-dots-list"]')
    }
}

export default RevenueSection