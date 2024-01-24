const oopHandouts_questions = [
  {
    question: "An _____ has characteristics or attributes.",
    answer: "Object",
    category: "oopHandouts"
  },
  {
    question: "The values of an object’s attributes give the object a state.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "The actions that an object can take are called _____.",
    answer: "Behaviors",
    category: "oopHandouts"
  },
  {
    question: "Each behavior is defined by a piece of Java code called a _____.",
    answer: "Method",
    category: "oopHandouts"
  },
  {
    question: "Objects of the same kind are said to have the same data type and belong to the same class.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "A _____defines a kind of object; it is a blueprint for defining the objects.",
    answer: "Class",
    category: "oopHandouts"
  },
  {
    question: "The _____ of an object is the name of its class.",
    answer: "Data Type",
    category: "oopHandouts"
  },
  {
    question: "One way of organizing classes is through _____ .",
    answer: "Inheritance",
    category: "oopHandouts"
  },
  {
    question: "_____ allows objects of a class to take on the properties of objects from another class.",
    answer: "Inheritance",
    category: "oopHandouts"
  },
  {
    question: "_____ is used to avoid the repetition of programming instructions for each class.",
    answer: "Inheritance",
    category: "oopHandouts"
  },
  {
    question: "To apply inheritance between classes, the _____ keyword is used.",
    answer: "Extends",
    category: "oopHandouts"
  },
  {
    question: "An _____ is a program component that contains the heading for a number of public methods.",
    answer: "Interface",
    category: "oopHandouts"
  },
  {
    question: "Some interfaces describe all the public methods in a class while others specify only certain methods.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "An interface is used by another class through the _____ keyword.",
    answer: "Implements",
    category: "oopHandouts"
  },
  {
    question: "A _____ is a collection of related classes and interfaces that have been grouped together into a folder.",
    answer: "Package",
    category: "oopHandouts"
  },
  {
    question: "The name of the folder is the name of the package.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "The classes in the package are each placed in a separated file, and the file name begins with the name of the class.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "You can use all the classes that are in a package within any program or class definition by placing an _____ statement.",
    answer: "Import",
    category: "oopHandouts"
  },
  {
    question: "The class does not need to be in the same folder with the classes in the package. The syntax is: import package_name.class_name_or_asterisk;",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "A _____ is any field declared with the static modifier; this tells the compiler that there is exactly one (1) copy of this variable in existence, regardless of how many times the class has been instantiated.",
    answer: "Static Variable or Class Variable",
    category: "oopHandouts"
  },
  {
    question: "A _____ belongs to the class rather than the object of a class.",
    answer: "Static Method",
    category: "oopHandouts"
  },
  {
    question: "A _____ can be invoked without creating an instance of a class.",
    answer: "Static Method",
    category: "oopHandouts"
  },
  {
    question: "_____  can access static members and change their values.",
    answer: "Static Method",
    category: "oopHandouts"
  },
  {
    question: "For utility or helper methods that don’t require any object state: Since there is no need to access instance variables, having static methods eliminates the need for the caller to instantiate the object just to call the method.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "For a state shared by all instances of a class (like a counter): All instances must share the same state. Methods that merely use that state should be static as well.",
    answer: "True",
    category: "oopHandouts"
  },
  {
      question: "To call a static method or variable, put the class name before the method or variable.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "An instance of an object can be used to call a static method or update a static variable.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "An _____ variable or method is any variable or method that is non-static. It requires an object of its class to be created before it can be used or called.",
      answer: "Instance",
      category: "oopHandouts"
  },
  {
      question: "An _____ is any variable that is declared outside any method, constructor, or block.",
      answer: "Instance Variable",
      category: "oopHandouts"
  },
  {
      question: "Instance variables are declared in a class but outside a method, constructor, or any block.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "Instance variables hold values that must be referenced by more than one method, constructor, or block, or essential parts of an object's state that must be present throughout the class.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "Instance variables can be declared at the class level before or after use.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "Access modifiers can be given for instance variables.",
      answer: "True",
      category: "oopHandouts"
  },
  {
      question: "The instance variables are visible for all methods, constructors, and blocks in the class. Normally, it is recommended to make these variables private (access level). However, visibility for subclasses can be given for these variables with the use of access modifiers.",
      answer: "True",
      category: "oopHandouts"
  },
  {
    question: "Instance variables have default values. For numbers, the default value is 0, for Booleans, it is false, and for object references, it is null. Values can be assigned during the declaration or within the constructor.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Instance variables can be accessed directly by calling the variable name inside the class. However, within static methods (when instance variables are given accessibility), they should be called using the fully qualified name. ObjectReference.VariableName.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static Methods, as the name states, are defined at the class level and could be accessed on the class name, i.e., no need for class object creation to access/call the static methods.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "If we do not use the static keyword with a variable/method, it belongs or is categorized as an instance method, which is defined at the instance level and needs a class object for their accessibility.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static methods exist as a single copy for a class, while instance methods exist as multiple copies depending on the number of instances created for that particular class.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static methods can't access instance methods/variables directly, while instance methods can access static variables and static methods directly.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "_____, also known as static variables, are declared with the static keyword in a class, but outside a method, constructor, or a block.",
    answer: "Class Variables",
    category: "oopHandouts"
  },
  {
    question: "There would only be one copy of each class variable per class, regardless of how many objects are created from it.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static variables are rarely used other than being declared as _____. _____ are variables that are declared as public/private, final, and static.",
    answer: "Constants",
    category: "oopHandouts"
  },
  {
    question: "_____ variables never change from their initial value.",
    answer: "Constant",
    category: "oopHandouts"
  },
  {
    question: "Static variables are stored in the _____.",
    answer: "Static Memory",
    category: "oopHandouts"
  },
  {
    question: "It is rare to use static variables other than declared final and used as either public or private constants.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static variables are created when the program starts and destroyed when the program stops.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Visibility of static variables is similar to instance variables. However, most static variables are declared public since they must be available for users of the class.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Default values are the same as instance variables. For numbers, the default value is 0; for Booleans, it is false; and for object references, it is null. Values can be assigned during the declaration or within the constructor. Additionally, values can be assigned in special static initializer blocks.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "Static variables can be accessed by calling with the class name ClassName.VariableName.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "When declaring class variables as public static final, then variable names (constants) are all in uppercase. If the static variables are not public and final, the naming syntax is the same as instance and local variables.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "A _____ specifies all the information needed to call a method.",
    answer: "Method Declaration",
    category: "oopHandouts"
  },
  {
    question: "An _____ specifies whether other classes can use a particular field or invoke a particular method. The _____ in Java are public, protected, package-private (no modifier), and private.",
    answer: "Access Modifier",
    category: "oopHandouts"
  },
  {
    question: "The most common optional specifiers are the following: _____ is used for class methods.",
    answer: "Static",
    category: "oopHandouts"
  },
  {
    question: "The most common optional specifiers are the following: _____ is used when a method does not have a body.",
    answer: "Abstract",
    category: "oopHandouts"
  },
  {
    question: "The most common optional specifiers are the following: _____ is used when a method is not allowed to be overridden by a subclass.",
    answer: "Final",
    category: "oopHandouts"
  },
  {
    question: "_____ is the data type of the value returned by the method, or void if the method does not return a value.",
    answer: "Return Type",
    category: "oopHandouts"
  },
  {
    question: "The method name should follow the naming convention rules below: Should be a verb in lowercase (ex. run); or",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "A multi-word name that begins with a verb in lowercase, followed by adjectives, nouns, etc., that starts with capital letters (ex. runFast)",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "The _____ is a comma-delimited list of input parameters, preceded by their data types and enclosed by parentheses. Empty parentheses are allowed if there are no parameters specified.",
    answer: "Parameter List",
    category: "oopHandouts"
  },
  {
    question: "The _____ indicates that the method might throw one of the listed exception types.",
    answer: "Optional Exception List",
    category: "oopHandouts"
  },
  {
    question: "The _____ modifier allows the method body to be visible to all classes everywhere. It contains the method’s code, including the declaration of local variables.",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "The _____ determine whether other classes can use a particular field or invoke a particular method.",
    answer: "Access Level Modifiers",
    category: "oopHandouts"
  },
  {
    question: "There are two levels of access control: _____ – public or package-private (no explicit modifier).",
    answer: "Top Level",
    category: "oopHandouts"
  },
  {
    question: "There are two levels of access control: _____ – public, private, protected, or package-private",
    answer: "Member Level",
    category: "oopHandouts"
  },
  {
    question: "The _____ modifier allows the method to be visible to all classes everywhere.",
    answer: "Public",
    category: "oopHandouts"
  },
  {
    question: "The _____ modifier specifies that the method can only be accessed in its own class.",
    answer: "Private",
    category: "oopHandouts"
  },
  {
    question: "The _____ modifier specifies that the member can only be accessed within its own package.",
    answer: "Package-Private",
    category: "oopHandouts"
  },
  {
    question: "The _____(no modifier) specifies that the member can only be accessed within its own package and by a subclass of its class in another package.",
    answer: "Protected Modifier",
    category: "oopHandouts"
  },
  {
    question: "A class may be declared with the modifier public, in which case that class is visible to all classes everywhere. If a class has no modifier (the default, also known as package-private), it is visible only within its own package (packages are named groups of related classes).",
    answer: "True",
    category: "oopHandouts"
  },
  {
    question: "At the member level, you can also use the public modifier or no modifier (package-private) just as with top-level classes, and with the same meaning. For members, there are two additional access modifiers: private and protected. The private modifier specifies that the member can only be accessed in its own class. The protected modifier specifies that the member can only be accessed within its own package (as with package-private) and, in addition, by a subclass of its class in another package.",
    answer: "True",
    category: "oopHandouts"
  }
];

export default oopHandouts_questions;
