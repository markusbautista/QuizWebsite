const chapter1_questions = [
  {
    question: "Is described as any physical component of a computer system that contains a circuit board, Integrated Circuits (ICs), or other electronics. Without any _____, your computer would not function, and software could not be used.",
    answer: "Hardware",
    category: "Chapter1"
  },
  {
    question: "A computer’s _____ is divided into two different components: Input devices and Output devices.",
    answer: "Hardware",
    category: "Chapter1"
  },
  {
    question: "Is a piece of hardware that sends data to a computer. Most _____ either interact with or control the computer in some way.",
    answer: "Input Devices",
    category: "Chapter1"
  },
  {
    question: "An _____ sends data to the computer.",
    answer: "Input Device",
    category: "Chapter1"
  },
  {
    question: "Is a piece of computer hardware that receives data from a computer and then translates that data into another form. That form may be audio, visual, textual, or hard copy such as a printed document.",
    answer: "Output Devices",
    category: "Chapter1"
  },
  {
    question: "An _____ receives data from the computer.",
    answer: "Output Device",
    category: "Chapter1"
  },
  {
    question: "Also known as a 'tower' or 'chassis,' is the main part of a desktop computer. It includes the motherboard, CPU, RAM, and other components.",
    answer: "System Unit",
    category: "Chapter1"
  },
  {
    question: "The _____ also includes the case that houses the internal components of the computer.",
    answer: "System Unit",
    category: "Chapter1"
  },
  {
    question: "Some modern computers, such as the _____, combine the system unit and monitor into a single device. In this case, the monitor is part of the system unit. While laptops also have built-in displays, they are not called system unit, since the term only refers to desktop computers.",
    answer: "iMac",
    category: "Chapter1"
  },
  {
    question: "Gives instructions and commands to a computer. _____ comprises the entire set of programs, procedures, and routines associated with the operation of a computer system.",
    answer: "Software",
    category: "Chapter1"
  },
  {
    question: "The term _____ was coined to differentiate these instructions from hardware—i.e., the physical components of a computer system.",
    answer: "Software",
    category: "Chapter1"
  },
  {
    question: "A set of instructions that directs a computer’s hardware to perform a task is called a program, or software program.",
    answer: "Program/Software Program",
    category: "Chapter1"
  },
  {
    question: "Application Software is a computer software package that performs a specific function directly for an end user or, in some cases, for another application.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "Application Can be self-contained or a group of programs.",
    answer: "Application",
    category: "Chapter1"
  },
  {
    question: "Program Is a set of operations that runs the application for the user.",
    answer: "Program",
    category: "Chapter1"
  },
  {
    question: "System Software Is a type of computer program that is designed to run a computer's hardware and application programs.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "System Software If we think of the computer system as a layered model, the _____ is the interface between the hardware and user applications.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "Operating System The _____ is the best-known example of system software. It manages all the other programs in a computer.",
    answer: "Operating System",
    category: "Chapter1"
  },
  {
    question: "System Software Is used to manage the computer itself. It runs in the background, maintaining the computer's basic functions so users can run higher-level application software to perform certain tasks.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "System Software Provides a platform for application software to be run on top of.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "Application Software The user makes use of application software to perform some specific task.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "Application Software We install the application software according to the requirement of the user.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "Application Software Generally, the user interacts with the application software.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "Application Software It can’t run independently because it is not able to run without the presence of system software.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "Application Software Example: word processor, web browser, media player etc.",
    answer: "Application Software",
    category: "Chapter1"
  },
  {
    question: "System Software We make use of system software for operating hardware on the computer.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "System Software When the operating system is installed on the computer, then the system software is also mounted on the machine.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "_____ works in the background. So the user is not able to interact with it.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "It can run independently as it provides the platform for the running application softwares.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "Example: compiler, assembler, interpreter etc.",
    answer: "System Software",
    category: "Chapter1"
  },
  {
    question: "The word _____ comes from the name of a Persian author, Abu Ja'far Mohammed ibn Musa al Khowarizmi (c. 825 A.O.), who wrote a textbook on mathematics.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "An examination of the latest edition of Webster's dictionary defines its meaning as 'any special method of solving a certain kind of problem.' But this word has taken on a special significance in computer science.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "Has come to refer to a precise method usable by a computer to solve a problem. This is what makes an _____ different from words such as process, technique, or practice. (Horowirtz, Sahni, 1978).",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "Informally, an _____ is any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "An _____ is thus a sequence of computational steps that transform the input into the output.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "We can also view an _____ as a tool for solving a well-specified computational problem. The statement of the problem specifies in general terms the desired input/output relationship. The _____ describes a specific computational procedure for achieving that input/output relationship.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "An _____ can also be defined as the unambiguous step-by-step instructions to solve a given problem on a formal note.",
    answer: "Algorithm",
    category: "Chapter1"
  },
  {
    question: "In the formal study of algorithms, there are two main criteria for judging the merits of algorithms: _____ (does the algorithm give a solution to the problem in a finite number of steps?) and _____ (how much resources (in terms of memory and time) does it take to execute the).",
    answer: "Correctness and Efficiency",
    category: "Chapter1"
  },
  {
    question: "Sorting",
    answer: "Given the input sequence: {31; 41; 59; 26; 41; 58}, a sorting algorithm returns as output the sequence {26; 31; 41; 41; 58; 59}. Such an input sequence is called an instance of the sorting problem.",
    category: "Chapter1"
  },
  {
    question: "Instance of the Sorting Problem",
    answer: "Given the input sequence: {31; 41; 59; 26; 41; 58}, a sorting algorithm returns as output the sequence {26; 31; 41; 41; 58; 59}. Such an input sequence is called an instance of the sorting problem. In general, It consists of the input (satisfying whatever constraints are imposed in the problem statement) to compute a solution to the problem.",
    category: "Chapter1"
  },
  {
    question: "Sorting",
    answer: "Because many programs use it as an intermediate step, sorting is a fundamental operation in computer science. As a result, we have a large number of good sorting algorithms at our disposal.",
    category: "Chapter1"
  },
  {
    question: "Computer Program",
    answer: "An algorithm can be specified in English, as a computer program, or even a hardware design. The only requirement is that the specification must provide an accurate description of the computational procedure to be followed.",
    category: "Chapter1"
  },
  {
    question: "Algorithm Analysis",
    answer: "Helps us to determine which algorithm is most efficient in terms of time and space consumed. The goal is to compare algorithms (or solutions) mainly in terms of running time and other factors (e.g., memory, developer effort, etc.).",
    category: "Chapter1"
  },
  {
    question: "True",
    answer: "Multiple algorithms are available for solving the same problem (for example, a sorting problem has many algorithms, like insertion sort, selection sort, quick sort, and many more).",
    category: "Chapter1"
  },
  {
    question: "True",
    answer: "Which algorithm is best for a given application depends on—among other factors—the number of items to be sorted, the extent to which the items are already somewhat sorted, possible restrictions on the item values, the architecture of the computer, and the kind of storage devices to be used: main memory, disks, or even tapes.",
    category: "Chapter1"
  },
  {
    question: "True",
    answer: "An algorithm is said to be correct if, for every input instance, it halts with the correct output. An incorrect algorithm might not halt at all on some input instances, or it might stop with a wrong answer.",
    category: "Chapter1"
  },
  {
    question: "True",
    answer: "We say that a correct algorithm solves the given computational problem. Contrary to what you might expect, faulty algorithms can sometimes be helpful, if we can control their error rate.",
    category: "Chapter1"
  }
];

export default chapter1_questions;
