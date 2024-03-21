const sqlDataTypes_questions = [
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
  }
];

export default sqlDataTypes_questions;
