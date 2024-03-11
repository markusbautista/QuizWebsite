import componentsOfMultimedia_questions from './q_categories/componentsOfMultimedia.js';
import whenToUseAnimations_questions from './q_categories/whenToUseAnimations.js';
import howToIncorporateAnimations_questions from './q_categories/howToIncorporateAnimations.js';
import principlesOfAnimations_questions from './q_categories/principlesOfAnimations.js';
import interactiveSystemDesign_questions from './q_categories/interactiveSystemDesign.js';
import interactiveSystemDesignLifeCycle_questions from './q_categories/interactiveSystemDesignLifeCycle.js';
import art_questions from './q_categories/art.js';

const questions = [
  ...componentsOfMultimedia_questions,
  ...whenToUseAnimations_questions,
  ...howToIncorporateAnimations_questions,
  ...principlesOfAnimations_questions,
  ...interactiveSystemDesign_questions,
  ...interactiveSystemDesignLifeCycle_questions,
  ...art_questions
];

export default questions;