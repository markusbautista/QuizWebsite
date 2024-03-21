const sqlDataTypes_questions = [
  {
    question: "Holds whole numbers",
    answer: "INT",
    category: "sqlDataTypes"
  },
  {
    question: "Holds numbers containing a decimal point.",
    answer: "DECIMAL(size,d) or NUMERIC(size,d)",
    category: "sqlDataTypes"
  },
  {
    question: "Holds numbers containing a decimal point and uses 8 bytes for storage with up to 15 digits precision.",
    answer: "FLOAT",
    category: "sqlDataTypes"
  },
  {
    question: "Holds a string.",
    answer: "VARCHAR(size)",
    category: "sqlDataTypes"
  },
  {
    question: "Holds a fixed-length character string where the exact length of the data to be stored is already determined.",
    answer: "CHAR(size)",
    category: "sqlDataTypes"
  },
  {
    question: "Holds date values in YYYY-MM-DD format.",
    answer: "DATE",
    category: "sqlDataTypes"
  },
  {
    question: "Holds time values in HH:MI:SS.[nnnnnnnnn] format.",
    answer: "SMALL DATETIME",
    category: "sqlDataTypes"
  },
  {
    question: "Holds date and time values in YYYY-MM-DD HH:MI:SS.[nnn] format.",
    answer: "DATETIME",
    category: "sqlDataTypes"
  },
  {
    question: "Used to store images in binary format and holds up to 2 gigabytes of binary data.",
    answer: "VARBINARY(max)",
    category: "sqlDataTypes"
  },
  {
    question: "Used to store images in binary format.",
    answer: "Image",
    category: "sqlDataTypes"
  },
  {
    question: "An integer data type which can store only 0 or 1 and can consume only a single bit of storage space.",
    answer: "Bit",
    category: "sqlDataTypes"
  },
  {
    question: "Used to store xml data.",
    answer: "XML",
    category: "sqlDataTypes"
  }
];

export default sqlDataTypes_questions;
