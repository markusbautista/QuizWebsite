import sql_questions from './q_categories/sqlQuestions.js';
import sqlDataTypes_questions from './q_categories/sqlDataTypes.js';
import sqlConcepts_questions from './q_categories/sqlConcepts.js';
import sqlStatements_questions from './q_categories/sqlStatements.js';
import sqlConstraints_questions from './q_categories/sqlConstraints.js';

const questions = [
  ...sql_questions,
  ...sqlDataTypes_questions,
  ...sqlConcepts_questions,
  ...sqlStatements_questions,
  ...sqlConstraints_questions
];

export default questions;
