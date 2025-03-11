import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('should render the Quiz component', () => {
    cy.mount(<Quiz />)
  });

  it('should render the start quiz button', () => {
    cy.mount(<Quiz />)
    cy.get('button').should('have.text', 'Start Quiz')
  });

  it('should display a question when the start button is clicked', () => {
    cy.mount(<Quiz />)
    cy.contains('Start Quiz').click()

    // h2 that holds the question text
    cy.get('h2').should('be.visible');
  });

  it('should display another questions when an answer is selected', () => {
    cy.mount(<Quiz />)
    cy.contains('Start Quiz').click()

    cy.get('h2').invoke('text').then((initialQuestion) => {
      cy.get('button').first().click();

      cy.get('h2').should('be.visible').invoke('text').should('not.eq', initialQuestion);
    })
  });

  it('should display quiz completed when all questions are answered', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()

    cy.get('h2').then(($questions) => {
      const questionCount = 10;

      for (let i = 0; i < questionCount; i++) {
        cy.get('button').first().click();
      }
      cy.get('.card').contains('Quiz Completed').should('be.visible');
    })
  });

  it('should display the score when the quiz is completed', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()

    cy.get('h2').then(($questions) => {
      const questionCount = 10;

      for (let i = 0; i < questionCount; i++) {
        cy.get('button').first().click();
      }
      cy.get('.card').contains('Your score:').should('be.visible');
    })
  });

  it('should display a button to take a new quiz after the quiz is completed', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()

    cy.get('h2').then(($questions) => {
      const questionCount = 10;

      for (let i = 0; i < questionCount; i++) {
        cy.get('button').first().click();
      }
      cy.get('button').contains('Take New Quiz').should('be.visible');
    })
  });
});