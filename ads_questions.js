import sql_questions from './q_categories/sqlQuestions.js';
import sqlDataTypes_questions from './q_categories/sqlDataTypes.js';
import sqlConcepts_questions from './q_categories/sqlConcepts.js';

const questions = [
  ...sql_questions,
  ...sqlDataTypes_questions,
  ...sqlConcepts_questions
];

export default questions;
