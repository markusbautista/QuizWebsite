const sqlConstraints_questions = [
  {
    question: "What ensures the uniqueness of every record in a table and is required in every table?",
    answer: "PRIMARY KEY",
    category: "sqlConstraints"
  },
  {
    question: "What is used to enforce referential integrity, ensuring that a value inserted in the foreign key column matches any of the values stored in the primary key column of the reference table?",
    answer: "FOREIGN KEY ... REFERENCES",
    category: "sqlConstraints"
  },
  {
    question: "What is used to determine if null values are allowed in the column, with NOT NULL placed after the data type declaration if the column is required to always have a value?",
    answer: "NULL | NOT NULL",
    category: "sqlConstraints"
  },
  {
    question: "What is used to provide a unique, incremental value for the column and is commonly used with the primary key constraints? Example: StudID int primary key identity (1000,1)",
    answer: "IDENTITY",
    category: "sqlConstraints"
  },
  {
    question: "What is used to provide a default value for the column when a value is not given by the user during the insert operation? Example: HireDate datetime not null default (getdate())",
    answer: "DEFAULT",
    category: "sqlConstraints"
  },
  {
    question: "What is used to limit or filter the possible values that can be entered into a column? Example: InstructorType varchar(1) check(InstructorType in (‘R’,’P’))",
    answer: "CHECK",
    category: "sqlConstraints"
  }
];

export default sqlConstraints_questions;
