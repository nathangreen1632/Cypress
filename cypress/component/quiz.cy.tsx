import Quiz from '../../client/src/components/Quiz';

describe('<Quiz /> - Full Quiz Flow', () => {
  it('starts quiz and displays a question', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('h2').should('be.visible'); // assuming h2 contains the question
  });

  it('answers all questions and displays score screen', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // loop through all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('button')
        .not(':contains("Start Quiz")') // ignore start button
        .first()
        .click();
    }

    // Now check for score screen
    cy.contains(/score|your result|quiz complete/i).should('be.visible');
  });
});
