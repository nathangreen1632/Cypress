describe('React Tech Quiz', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display a start quiz button', () => {
        cy.get('button').contains('Start Quiz');
    });

    it('should start the quiz and display the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').should('be.visible');
        cy.get('button').should('have.length.greaterThan', 1);
    });

    it('should advance to the next question when an answer is selected', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').invoke('text').then((initialQuestion) => {
            cy.get('.btn.btn-primary').first().click();
            cy.get('h2').should('not.have.text', initialQuestion);
        });
    });

    it('should display the quiz completion screen when all questions are answered', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').then(($questions) => {
            const questionCount = 10; // need to update this once I figure out how to get the question count
            for (let i = 0; i < questionCount; i++) {
                cy.get('.btn.btn-primary').first().click();
            }
            cy.contains('Quiz Completed').should('be.visible');
            cy.contains('Your score:').should('be.visible');
            cy.contains('Take New Quiz').should('be.visible');
        });
    });

    it('should start a new quiz when the "Take New Quiz" button is clicked', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').then(($questions) => {
            const questionCount = 10;
            for (let i = 0; i < questionCount; i++) {
                cy.get('.btn.btn-primary').first().click();
            }
        });
        cy.contains('Take New Quiz').click();
        cy.get('h2').should('be.visible');
    });
});