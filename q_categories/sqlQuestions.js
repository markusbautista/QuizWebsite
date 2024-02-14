const sql_questions = [
  {
    question: "SQL was initially named as _____ and was developed by the IBM Corporation Inc in California in the year 1970 and was later called SQL.",
    answer: "SEQUEL",
    category: "sql"
  },
  {
    question: "SQL was initially named as SEQUEL and was developed by the _____ in California in the year 1970 and was later called SQL.",
    answer: "IBM Corporation Inc",
    category: "sql"
  },
  {
    question: "_____ was initially named as SEQUEL and was developed by the IBM Corporation Inc in California in the year 1970 and was later called _____.",
    answer: "SQL",
    category: "sql"
  },
  {
    question: "In 1979, the first commercially available implementation of SQL was introduced by _____ which was now the Oracle Corporation.",
    answer: "Relational Software Inc",
    category: "sql"
  },
  {
    question: "In 1979, the first commercially available implementation of SQL was introduced by Relational Software, Inc which was now the _____.",
    answer: "Oracle Corporation",
    category: "sql"
  },
  {
    question: "_____ is now accepted as the standard RDBMS language.",
    answer: "SQL",
    category: "sql"
  },
  {
    question: "_____ is a language used to write programs that will allow the user to create, manipulate and query databases.",
    answer: "SQL",
    category: "sql"
  },
  {
    question: "The database system such as the_____, executes your SQL codes and displays your requested information.",
    answer: "SQL Server",
    category: "sql"
  },
  {
    question: "_____ follows some syntax and is defined by semantics.",
    answer: "SQL",
    category: "sql"
  },
  {
    question: "Stores, manages and presents data to users in the form of named tables related to other tables according to the relational model.",
    answer: "RDBMS",
    category: "sql"
  },
  {
    question: "One of the first database products to run on a variety of platforms. SQL *Plus and Developer.",
    answer: "Oracle",
    category: "sql"
  },
  {
    question: "One of the most popular open source databases. Usually used with PHP.",
    answer: "MySQL",
    category: "sql"
  },
  {
    question: "Runs in Microsoft Windows OS. Supports numerous transactions and computer applications stored.",
    answer: "MS SQL Server",
    category: "sql"
  },
  {
    question: "A word, clause, or statement added by the programmer to remind him of what a particular part of code does (// or /* */).",
    answer: "Comments",
    category: "sql"
  },
  {
    question: "Names given to the database objects such as tables, columns, views, and databases (COLLEGE which is a name given to a table).",
    answer: "Identifiers",
    category: "sql"
  },
  {
    question: "Words with special meaning therefore these are considered reserved and cannot be used as identifiers (SELECT, DATABASE).",
    answer: "Keywords",
    category: "sql"
  },
  {
    question: "A grammatically acceptable and valid combination of indivisible parts such as keywords, identifiers, operators, punctuation marks, or constants of the SQL language (SELECT * FROM COLLEGE).",
    answer: "SQL Statement",
    category: "sql"
  },
  {
    question: "Is a fragment of an SQL statement that is usually introduced by a keyword (ORDER BY FName).",
    answer: "Clause",
    category: "sql"
  },
  {
    question: "Refers to any legal combination of keywords and numeric symbols that evaluates to a single data value (SALARY * 12).",
    answer: "Expression",
    category: "sql"
  },
  {
    question: "Are sections of code that take zero, one, or more input values, perform a specific assignment and return a scalar or tabular set of values (SUM(), UPPER()).",
    answer: "Functions",
    category: "sql"
  },
  {
    question: "Work with one or more simple expressions to form a more complex expression (AND, +, >).",
    answer: "Operators",
    category: "sql"
  },
  {
    question: "Used to end SQL statements. In some variants of the SQL _____ is optional.",
    answer: "Semicolon",
    category: "sql"
  },
  {
    question: "Holds whole numbers",
    answer: "INT",
    category: "sql"
  },
  {
    question: "Holds numbers containing a decimal point.",
    answer: "DECIMAL(size,d) or NUMERIC(size,d)",
    category: "sql"
  },
  {
    question: "Holds numbers containing a decimal point and uses 8 bytes for storage with up to 15 digits precision.",
    answer: "FLOAT",
    category: "sql"
  },
  {
    question: "Holds a string.",
    answer: "VARCHAR(size)",
    category: "sql"
  },
  {
    question: "Holds a fixed-length character string where the exact length of the data to be stored is already determined.",
    answer: "CHAR(size)",
    category: "sql"
  },
  {
    question: "Holds date values in YYYY-MM-DD format.",
    answer: "DATE",
    category: "sql"
  },
  {
    question: "Holds time values in HH:MI:SS.[nnnnnnnnn] format.",
    answer: "SMALL DATETIME",
    category: "sql"
  },
  {
    question: "Holds date and time values in YYYY-MM-DD HH:MI:SS.[nnn] format.",
    answer: "DATETIME",
    category: "sql"
  },
  {
    question: "Used to store images in binary format and holds up to 2 gigabytes of binary data.",
    answer: "VARBINARY(max)",
    category: "sql"
  },
  {
    question: "Used to store images in binary format.",
    answer: "image",
    category: "sql"
  },
  {
    question: "An integer data type which can store only 0 or 1 and can consume only a single bit of storage space.",
    answer: "bit",
    category: "sql"
  },
  {
    question: "Used to store xml data.",
    answer: "xml",
    category: "sql"
  },
  {
    question: "These are statements that define, modify, and destroy the structure of the database and the tables within the database.",
    answer: "Data Definition Language (DDL) Statements",
    category: "sql"
  },
  {
    question: "Creates a new database. DDL",
    answer: "CREATE DATABASE",
    category: "sql"
  },
  {
    question: "Removes an existing database. DDL",
    answer: "DROP DATABASE",
    category: "sql"
  },
  {
    question: "Creates a new database table. DDL",
    answer: "CREATE TABLE",
    category: "sql"
  },
  {
    question: "Modifies the structure of a database table. DDL",
    answer: "ALTER TABLE",
    category: "sql"
  },
  {
    question: "Destroys a database table. DDL",
    answer: "DROP TABLE",
    category: "sql"
  },
  {
    question: "Used to control the contents of the tables and do not have an effect on the structure of the database.",
    answer: "Data Manipulation Language (DML) Statements",
    category: "sql"
  },
  {
    question: "Inserts new data into the database table. DML",
    answer: "INSERT INTO",
    category: "sql"
  },
  {
    question: "Retrieves data from the database tables. DML",
    answer: "SELECT",
    category: "sql"
  },
  {
    question: "Modifies the data stored in the database tables. DML",
    answer: "UPDATE",
    category: "sql"
  },
  {
    question: "Removes a row/record from a database table. DML",
    answer: "DELETE",
    category: "sql"
  },
  {
    question: "These are statements used to control a database including administering privileges by authorizing certain users to view, change, or delete database objects and/or the data within the database.",
    answer: "Data Control Language (DCL) Statements",
    category: "sql"
  },
  {
    question: "Assigns privileges to users and roles. DCL",
    answer: "GRANT",
    category: "sql"
  },
  {
    question: "Removes privileges. DCL",
    answer: "REVOKE",
    category: "sql"
  }
];

export default sql_questions;
