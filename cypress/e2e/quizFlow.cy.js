describe('Quiz Application E2E Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'mockData.json' }).as('getQuestions');
        cy.visit('/');
    });

    it('should start the quiz and display the first question', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');

        cy.get('[data-cy="question"]', { timeout: 6000 }).should('contain.text', 'What does HTML stand for?');
    });

    it('should answer all questions and show score screen', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');

        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy="answer-button"]').first().click();
        }

        cy.get('[data-cy="score-display"]').should('be.visible');
    });

    it('should allow restarting the quiz', () => {
        cy.get('[data-cy="start-quiz"]').click();
        cy.wait('@getQuestions');

        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy="answer-button"]').first().click();
        }

        cy.get('[data-cy="restart-quiz"]').click();

        cy.get('[data-cy="question"]').should('contain.text', 'What does HTML stand for?');
    });
});
