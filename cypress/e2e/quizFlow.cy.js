describe('Quiz Application E2E Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'mockData.json' }).as('getQuestions');
        cy.visit('/');
    });

    it('should start the quiz and display the first question', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');

        cy.get('[data-testid="question"]', { timeout: 5000 }).should('contain.text', 'What does HTML stand for?');
    });

    it('should answer all questions and show score screen', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');

        // Answer all 10 questions (or 2 if that's all you have)
        for (let i = 0; i < 2; i++) {
            cy.get('[data-testid="answer-button"]').first().click();
        }

        cy.get('[data-testid="score-display"]').should('be.visible');
    });

    it('should allow restarting the quiz', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');

        for (let i = 0; i < 2; i++) {
            cy.get('[data-testid="answer-button"]').first().click();
        }

        cy.get('[data-testid="restart-button"]').click();

        cy.get('[data-testid="question"]').should('contain.text', 'What does HTML stand for?');
    });
});
