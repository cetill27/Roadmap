'use strict';

/* ================================================================
   FULL STACK ENGINEER ROADMAP 2026 — APP.JS
   All roadmap data + rendering engine (vanilla JS, no dependencies)
   ================================================================ */

const PHASES = [
  { id:'phase-1', number:1, title:'Foundations', subtitle:'CS Basics, CLI, Git & Java OOP', duration:'Weeks 1-4 · Month 1', color:'#58a6ff', desc:'Start from absolute zero. Learn how computers work, master the terminal, Git, and build a solid Java OOP foundation.', tags:['Computer Science','CLI','Git','Java','OOP'], weekIds:['w1','w2','w3','w4'] },
  { id:'phase-2', number:2, title:'Java Core Mastery', subtitle:'Collections, Streams, Concurrency', duration:'Weeks 5-8 · Month 2', color:'#f0883e', desc:'Deep-dive into the Java ecosystem — Collections Framework, Generics, Streams API, functional programming, and multithreading.', tags:['Collections','Generics','Streams','Lambda','Concurrency'], weekIds:['w5','w6','w7','w8'] },
  { id:'phase-3', number:3, title:'Spring Boot Backend', subtitle:'REST APIs, JPA, Security, Microservices', duration:'Weeks 9-14 · Months 2-3', color:'#3fb950', desc:'Build production-grade backends with Spring Boot, REST APIs, databases, JWT security, and microservices architecture.', tags:['Spring Boot','REST API','JPA','Security','Microservices'], weekIds:['w9','w10','w11','w12','w13','w14'] },
  { id:'phase-4', number:4, title:'Frontend Development', subtitle:'HTML/CSS, JavaScript, React, Next.js', duration:'Weeks 15-20 · Months 3-4', color:'#bc8cff', desc:'Master the modern frontend stack — from HTML fundamentals to advanced React patterns, TypeScript and Next.js 14.', tags:['HTML','CSS','JavaScript','React','TypeScript','Next.js'], weekIds:['w15','w16','w17','w18','w19','w20'] },
  { id:'phase-5', number:5, title:'DSA & Problem Solving', subtitle:'Data Structures, Algorithms, Interview Prep', duration:'Weeks 21-24 · Month 5', color:'#ffa657', desc:'Conquer coding interviews. Master every data structure and algorithm pattern used in top-tier tech interviews.', tags:['Arrays','Trees','Graphs','DP','Sorting','LeetCode'], weekIds:['w21','w22','w23','w24'] },
  { id:'phase-6', number:6, title:'System Design & Launch', subtitle:'Scalability, Architecture & Career Launch', duration:'Weeks 25-26 · Month 6', color:'#79c0ff', desc:'Design scalable distributed systems, build a full-stack SaaS app, and launch your career with a polished portfolio.', tags:['System Design','Scalability','Cloud','Portfolio','Interviews'], weekIds:['w25','w26'] }
];

const WEEKS = {};

WEEKS['w1'] = {
  "id": "w1",
  "phase": 1,
  "number": 1,
  "title": "Computer Science & Dev Environment",
  "overview": "Before writing a single line of code, understand what happens under the hood. Learn how a CPU executes instructions, how memory works, and control your machine from the terminal. Set up Git so every change is tracked from day one.",
  "goals": [
    "Understand binary, CPU, and memory",
    "Master 30+ essential CLI commands",
    "Set up a professional Git workflow",
    "Push your first repository to GitHub"
  ],
  "days": [
    {
      "day": 1,
      "focus": "How Computers Work",
      "topics": [
        "Binary number system & bits/bytes",
        "CPU: fetch-decode-execute cycle",
        "Memory: registers, cache, RAM, disk",
        "What happens when you run a program"
      ]
    },
    {
      "day": 2,
      "focus": "Operating Systems & Files",
      "topics": [
        "OS role: process/memory management",
        "File system structure and paths",
        "Absolute vs relative paths",
        "Processes and the shell"
      ]
    },
    {
      "day": 3,
      "focus": "CLI Fundamentals",
      "topics": [
        "Terminal vs shell vs CLI",
        "Navigation: ls, cd, pwd, mkdir, rm, cp, mv",
        "File viewing: cat, less, head, tail",
        "Man pages: reading documentation"
      ]
    },
    {
      "day": 4,
      "focus": "Power CLI Skills",
      "topics": [
        "Pipes & redirection: |, >, >>, <",
        "Text processing: grep, sed basics",
        "Permissions: chmod, chown, ls -la",
        "Environment variables & .bashrc/.zshrc"
      ]
    },
    {
      "day": 5,
      "focus": "Git Basics",
      "topics": [
        "What is version control and why it matters",
        "git init, status, add, commit",
        ".gitignore and what to ignore",
        "git log, git diff — inspecting history"
      ]
    },
    {
      "day": 6,
      "focus": "Git Branching & GitHub",
      "topics": [
        "Branching: branch, checkout, merge",
        "Remote: remote, push, pull, clone",
        "GitHub: repos, README, fork & PR basics",
        "SSH keys setup for GitHub"
      ]
    },
    {
      "day": 7,
      "focus": "Dev Environment Setup",
      "topics": [
        "Install IntelliJ IDEA Community Edition",
        "Install JDK 21 (LTS)",
        "Git practice: 10 commits with meaningful messages",
        "Push everything to GitHub — first public repo"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Binary & How Computers Work",
      "icon": "💻",
      "desc": "Everything in a computer is stored as 0s and 1s. A bit is 0 or 1. A byte is 8 bits. Your CPU follows a simple loop billions of times per second: Fetch instruction, Decode it, Execute it. RAM is fast temporary storage; disk is slow permanent storage.",
      "keyPoints": [
        "1 byte = 8 bits, represents 0-255",
        "ASCII: \"A\" = 65 = 01000001 in binary",
        "CPU clock speed (GHz) = billions of cycles/second",
        "RAM is fast and temporary; disk is slow and permanent",
        "The OS sits between programs and the hardware"
      ],
      "code": "// Binary counting:\n// Decimal: 0  1  2  3   4   5   6   7    8\n// Binary:  0  1 10 11 100 101 110 111 1000\n\n// ASCII: \"A\" = 65 = 0b01000001\n// Memory: 1KB=1024B, 1MB=~1M bytes, 1GB=~1B bytes\n// Programs load into RAM for fast CPU access"
    },
    {
      "title": "Command Line Interface",
      "icon": "⌨️",
      "desc": "The terminal is the most powerful developer tool. GUIs hide complexity; the CLI exposes it. Mastering the command line makes you 10x faster at file management, running programs, and automation.",
      "keyPoints": [
        "ls -la: list all files including hidden, with details",
        "cd ~: go home; cd -: go to previous directory",
        "mkdir -p a/b/c: create nested directories at once",
        "grep -r \"text\" .: search all files recursively",
        "Ctrl+C: kill process; Tab: autocomplete paths"
      ],
      "code": "# Navigate\nls -la              # list all files with details\ncd /path/to/dir     # change directory\npwd                 # print working directory\n\n# Files\nmkdir -p src/main   # create nested dirs\ncp -r src/ backup/  # copy directory\nmv old.txt new.txt  # rename / move\nrm -rf build/       # delete (careful!)\n\n# Search\ngrep -rn \"TODO\" .   # find text recursively"
    },
    {
      "title": "Git Version Control",
      "icon": "🌿",
      "desc": "Git tracks every change you make — like save-states for your entire project. Work on features in branches, go back in time, and collaborate with teams.",
      "keyPoints": [
        "Working tree → Staging area (git add) → Repository (git commit)",
        "Each commit is a snapshot identified by a SHA hash",
        "Branches are just pointers to commits — cheap and fast to create",
        "HEAD points to your current branch or commit",
        "git merge combines branches; git rebase re-applies commits cleanly"
      ],
      "code": "# Daily workflow\ngit init\ngit add .\ngit commit -m \"feat: add login\"\ngit status\ngit log --oneline\n\n# Branching\ngit checkout -b feature/auth\ngit merge feature/auth\ngit branch -d feature/auth\n\n# GitHub\ngit remote add origin <url>\ngit push -u origin main\ngit pull"
    }
  ],
  "projects": [
    {
      "title": "Developer Setup & First Repo",
      "icon": "🚀",
      "difficulty": "beginner",
      "desc": "Set up your complete dev environment and push your first project to GitHub.",
      "features": [
        "Install JDK 21, IntelliJ IDEA, Git, Node.js",
        "Configure Git with name/email/SSH key",
        "Create GitHub profile with professional README",
        "Push Hello World Java project with .gitignore",
        "Write meaningful README.md with setup instructions"
      ],
      "tech": [
        "Git",
        "GitHub",
        "JDK 21",
        "IntelliJ IDEA"
      ],
      "goals": [
        "Professional dev environment",
        "Full Git push workflow",
        "Public GitHub presence from day 1"
      ]
    }
  ],
  "resources": [
    {
      "title": "CS50x — Harvard Free Course",
      "type": "course",
      "icon": "🎓",
      "desc": "Watch Weeks 0-1. Best intro to how computers work.",
      "url": "https://cs50.harvard.edu"
    },
    {
      "title": "Pro Git Book (free online)",
      "type": "book",
      "icon": "📖",
      "desc": "The definitive Git reference. Read Chapters 1-3 this week.",
      "url": "https://git-scm.com/book"
    },
    {
      "title": "The Linux Command Line (free PDF)",
      "type": "book",
      "icon": "📖",
      "desc": "William Shotts. Comprehensive CLI guide. Chapters 1-7.",
      "url": "https://linuxcommand.org/tlcl.php"
    }
  ]
};

WEEKS['w2'] = {
  "id": "w2",
  "phase": 1,
  "number": 2,
  "title": "Java Fundamentals",
  "overview": "Java is the language of enterprise. Start from zero — understand the JVM, learn variables, control flow, methods, and arrays. By end of week you can write programs that solve real problems.",
  "goals": [
    "Understand JVM/JRE/JDK architecture",
    "Write programs with variables, loops, and methods",
    "Understand the Java type system completely",
    "Build 2 beginner CLI programs"
  ],
  "days": [
    {
      "day": 1,
      "focus": "JVM & First Program",
      "topics": [
        "JDK vs JRE vs JVM differences",
        "Java source → bytecode → machine code",
        "Hello World in IntelliJ IDEA",
        "Project structure: src/main/java"
      ]
    },
    {
      "day": 2,
      "focus": "Variables & Data Types",
      "topics": [
        "8 primitive types: byte short int long float double boolean char",
        "Reference types: String arrays objects",
        "Variable declaration and initialization",
        "Type casting: widening vs narrowing"
      ]
    },
    {
      "day": 3,
      "focus": "Operators & Expressions",
      "topics": [
        "Arithmetic: + - * / % (modulo)",
        "Comparison: == != < > <= >=",
        "Logical: && (AND) || (OR) ! (NOT)",
        "Ternary: condition ? valueIfTrue : valueIfFalse"
      ]
    },
    {
      "day": 4,
      "focus": "Control Flow",
      "topics": [
        "if / else if / else chains",
        "switch statement and switch expressions (Java 14+)",
        "Nested conditionals and guard clauses",
        "Pattern matching for switch (Java 21)"
      ]
    },
    {
      "day": 5,
      "focus": "Loops",
      "topics": [
        "for loop: init condition update",
        "while loop: condition-based",
        "do-while: executes at least once",
        "break continue nested loops"
      ]
    },
    {
      "day": 6,
      "focus": "Methods",
      "topics": [
        "Method declaration: modifier returnType name params",
        "Void vs value-returning methods",
        "Method overloading",
        "Stack frames and recursion"
      ]
    },
    {
      "day": 7,
      "focus": "Arrays & Projects",
      "topics": [
        "Declaring: int[] nums = new int[5]",
        "Initializing: int[] nums = {1,2,3,4,5}",
        "Access modification iteration",
        "Build CLI Calculator + Number Guessing Game"
      ]
    }
  ],
  "concepts": [
    {
      "title": "JVM Architecture",
      "icon": "☕",
      "desc": "The JVM makes Java \"write once, run anywhere.\" You write Java → compiler produces bytecode (.class files) → JVM on any OS runs that bytecode. JVM also manages memory via Garbage Collection.",
      "keyPoints": [
        "JDK = JRE + compiler (javac) + tools. You need this to develop.",
        "JRE = JVM + standard libraries. End users need this to run.",
        "JVM converts bytecode to native machine code via JIT compilation",
        "Heap stores objects (GC managed); Stack stores method call frames",
        "GC automatically frees memory — no manual malloc/free like C"
      ],
      "code": "// Compile: javac Hello.java  →  Hello.class (bytecode)\n// Run:     java Hello  →  JVM executes bytecode\n\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n\n// JVM Memory:\n// Heap:      objects live here (GC managed)\n// Stack:     each method call gets its own frame\n// Metaspace: class definitions and method metadata"
    },
    {
      "title": "Variables & Data Types",
      "icon": "📦",
      "desc": "Java is statically typed — every variable must have a declared type. 8 primitive types are stored by value on the stack. Reference types (objects/Strings/arrays) store a memory address pointing to data on the heap.",
      "keyPoints": [
        "int (32-bit): -2.1B to 2.1B — use for most whole numbers",
        "long (64-bit): huge numbers — append L: 123456789L",
        "double (64-bit): decimals — use for most floating point numbers",
        "boolean: only true or false",
        "char (16-bit): single Unicode character in single quotes: 'A'",
        "String is a class (reference type), not a primitive",
        "final makes a variable a constant: final int MAX = 100;"
      ],
      "code": "// Primitives\nint age = 25;\nlong population = 8_000_000_000L;  // underscores for readability\ndouble price = 19.99;\nboolean isActive = true;\nchar grade = 'A';\n\n// Reference types\nString name = \"Alice\";\nint[] scores = {95, 87, 92, 78};\n\n// Type casting\nint x = 10;\ndouble d = x;           // widening: automatic\nint y = (int) 3.99;     // narrowing: explicit cast, y=3 (loses .99)\n\n// Constants\nfinal double PI = 3.14159265;\nfinal int MAX_SIZE = 100;"
    },
    {
      "title": "Control Flow & Loops",
      "icon": "🔀",
      "desc": "Control flow determines which code runs and when. Every algorithm depends on if/else, switch, and loops. Master these and you can implement any logic.",
      "keyPoints": [
        "Use switch for discrete values, if/else for ranges or complex conditions",
        "for loop: best when you know the iteration count upfront",
        "while loop: best when condition-based (unknown iterations)",
        "break exits innermost loop; continue skips current iteration",
        "Avoid deep nesting — use early returns (guard clauses) instead"
      ],
      "code": "// Switch expression (Java 14+)\nString type = switch (day) {\n    case \"MONDAY\",\"TUESDAY\",\"WEDNESDAY\",\"THURSDAY\",\"FRIDAY\" -> \"Weekday\";\n    case \"SATURDAY\",\"SUNDAY\" -> \"Weekend\";\n    default -> \"Unknown\";\n};\n\n// For loop\nfor (int i = 0; i < 10; i++) System.out.println(i);\n\n// Enhanced for (for-each)\nint[] numbers = {1,2,3,4,5};\nfor (int num : numbers) System.out.println(num);\n\n// While\nint n = 1;\nwhile (n <= 5) { System.out.print(n + \" \"); n++; }\n// output: 1 2 3 4 5"
    }
  ],
  "projects": [
    {
      "title": "CLI Calculator",
      "icon": "🧮",
      "difficulty": "beginner",
      "desc": "Command-line calculator with all basic operations and input validation.",
      "features": [
        "Add subtract multiply divide modulo",
        "Power and square root (Math class)",
        "Input validation (catch division by zero)",
        "Loop to continue until user types exit",
        "History of last 5 calculations"
      ],
      "tech": [
        "Java",
        "Scanner",
        "Math class"
      ],
      "goals": [
        "Practice methods loops switch",
        "Input validation patterns",
        "Real program that actually does something useful"
      ]
    },
    {
      "title": "Number Guessing Game",
      "icon": "🎯",
      "difficulty": "beginner",
      "desc": "Computer picks a random number; user guesses with higher/lower hints.",
      "features": [
        "Random number 1-100 (Math.random)",
        "Count guesses per round",
        "Best score tracking across rounds",
        "Difficulty levels (change range)"
      ],
      "tech": [
        "Java",
        "Random",
        "Scanner"
      ],
      "goals": [
        "Practice while loops",
        "Random number generation",
        "User interaction patterns"
      ]
    }
  ],
  "resources": [
    {
      "title": "Head First Java (3rd Edition)",
      "type": "book",
      "icon": "📖",
      "desc": "Most beginner-friendly Java book. Visual, engaging, thorough. Chapters 1-5.",
      "url": "https://www.oreilly.com/library/view/head-first-java/9781492091646/"
    },
    {
      "title": "Oracle Java Tutorials",
      "type": "docs",
      "icon": "📚",
      "desc": "Official, free, comprehensive. Start with Getting Started and Language Basics.",
      "url": "https://docs.oracle.com/javase/tutorial/"
    }
  ]
};

WEEKS['w3'] = {
  "id": "w3",
  "phase": 1,
  "number": 3,
  "title": "Object-Oriented Programming — Part 1",
  "overview": "OOP is the cornerstone of Java. This week you transition from writing scripts to designing systems. Learn to model the real world with classes and objects, enforce data integrity with encapsulation, and build hierarchies with inheritance.",
  "goals": [
    "Understand class vs object distinction",
    "Implement encapsulation with access modifiers",
    "Build inheritance hierarchies",
    "Override methods and use polymorphism"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Classes & Objects",
      "topics": [
        "Class anatomy: fields constructors methods",
        "Object instantiation with new keyword",
        "Reference variables and null",
        "The this keyword — which instance am I?"
      ]
    },
    {
      "day": 2,
      "focus": "Constructors",
      "topics": [
        "Default constructor (no-arg)",
        "Parameterized constructors",
        "Constructor chaining with this()",
        "Copy constructor pattern"
      ]
    },
    {
      "day": 3,
      "focus": "Encapsulation",
      "topics": [
        "Access modifiers: private default protected public",
        "Getters and setters with validation",
        "Why encapsulation prevents bugs",
        "JavaBean convention"
      ]
    },
    {
      "day": 4,
      "focus": "Inheritance",
      "topics": [
        "extends keyword — is-a relationship",
        "Inheriting fields and methods",
        "super keyword: call parent constructor/methods",
        "Method overriding with @Override"
      ]
    },
    {
      "day": 5,
      "focus": "The Object Class",
      "topics": [
        "Object is the root of all Java classes",
        "toString() — how objects print themselves",
        "equals() and hashCode() — equality vs identity",
        "instanceof operator for type checking"
      ]
    },
    {
      "day": 6,
      "focus": "Static Members",
      "topics": [
        "static fields: shared across all instances",
        "static methods: belong to the class",
        "Static initializer blocks",
        "When to use static vs instance"
      ]
    },
    {
      "day": 7,
      "focus": "Bank Account Project",
      "topics": [
        "Design Account SavingsAccount CheckingAccount",
        "Implement deposit withdraw transfer",
        "Apply encapsulation throughout",
        "CLI menu for the system"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Classes & Objects",
      "icon": "🏗️",
      "desc": "A class is a blueprint. An object is an instance created from that blueprint. Think of a class as the cookie cutter and an object as the cookie. Each object gets its own copy of instance fields but shares the class methods.",
      "keyPoints": [
        "Class = blueprint/template; Object = specific instance with own data",
        "new keyword allocates memory on the heap and calls the constructor",
        "Reference variable holds the memory address to the object",
        "Two references can point to the same object (aliasing)",
        "null means \"pointing to nothing\" — accessing it causes NullPointerException"
      ],
      "code": "public class Dog {\n    private String name;\n    private String breed;\n    private int age;\n\n    public Dog(String name, String breed, int age) {\n        this.name = name;    // \"this\" = this specific instance\n        this.breed = breed;\n        this.age = age;\n    }\n\n    public void bark() {\n        System.out.println(name + \" says: Woof!\");\n    }\n\n    @Override\n    public String toString() {\n        return \"Dog{\" + name + \", \" + breed + \", age=\" + age + \"}\";\n    }\n}\n\n// Usage\nDog rex = new Dog(\"Rex\", \"German Shepherd\", 3);\nDog buddy = new Dog(\"Buddy\", \"Labrador\", 5);\nrex.bark();                 // Rex says: Woof!\nSystem.out.println(buddy); // Dog{Buddy, Labrador, age=5}"
    },
    {
      "title": "Encapsulation",
      "icon": "🔒",
      "desc": "Encapsulation means hiding internal state and requiring all interaction to go through methods. Make fields private, expose only what's needed through public methods. This protects objects from being put into invalid states.",
      "keyPoints": [
        "private: accessible only within the same class",
        "default (no modifier): accessible within same package",
        "protected: accessible in same package plus subclasses",
        "public: accessible from anywhere",
        "Setters should validate — do not just blindly assign",
        "Immutable classes (all fields final, no setters) are thread-safe by default"
      ],
      "code": "public class BankAccount {\n    private String id;\n    private String owner;\n    private double balance;   // PRIVATE — cannot be accessed directly\n\n    public BankAccount(String id, String owner, double initialBalance) {\n        if (initialBalance < 0)\n            throw new IllegalArgumentException(\"Balance cannot be negative\");\n        this.id = id;\n        this.owner = owner;\n        this.balance = initialBalance;\n    }\n\n    public double getBalance() { return balance; }  // read-only\n\n    public void deposit(double amount) {\n        if (amount <= 0)\n            throw new IllegalArgumentException(\"Deposit must be positive\");\n        balance += amount;\n    }\n\n    public void withdraw(double amount) {\n        if (amount <= 0) throw new IllegalArgumentException(\"Must be positive\");\n        if (amount > balance) throw new IllegalStateException(\"Insufficient funds\");\n        balance -= amount;\n    }\n}"
    },
    {
      "title": "Inheritance",
      "icon": "🧬",
      "desc": "Inheritance lets a child class inherit fields and methods from a parent class, creating an \"is-a\" relationship. A SavingsAccount IS-A BankAccount. This enables code reuse and polymorphism.",
      "keyPoints": [
        "extends creates the inheritance relationship",
        "Child class inherits all non-private members of parent",
        "super() must be first line in child constructor if explicitly called",
        "@Override annotation catches typos in method overriding",
        "Java supports single inheritance only (one parent class)",
        "A class can implement multiple interfaces (covered next week)"
      ],
      "code": "public class Animal {\n    protected String name;\n    public Animal(String name) { this.name = name; }\n    public void eat() { System.out.println(name + \" is eating.\"); }\n    public String describe() { return name; }\n}\n\npublic class Dog extends Animal {\n    private String breed;\n\n    public Dog(String name, String breed) {\n        super(name);     // call parent constructor FIRST\n        this.breed = breed;\n    }\n\n    @Override\n    public String describe() {\n        return super.describe() + \" — \" + breed;  // use parent version too\n    }\n\n    public void fetch() { System.out.println(name + \" fetches!\"); }\n}\n\nDog d = new Dog(\"Max\", \"Husky\");\nd.eat();             // inherited: Max is eating.\nd.fetch();           // own method\nSystem.out.println(d.describe()); // Max — Husky"
    }
  ],
  "projects": [
    {
      "title": "Bank Account System",
      "icon": "🏦",
      "difficulty": "beginner",
      "desc": "A complete CLI banking system demonstrating OOP principles.",
      "features": [
        "Account base class with deposit/withdraw/balance",
        "SavingsAccount (earns interest) extends Account",
        "CheckingAccount (overdraft limit) extends Account",
        "AccountManager stores multiple accounts in ArrayList",
        "Transfer between accounts",
        "Transaction history per account"
      ],
      "tech": [
        "Java",
        "OOP",
        "ArrayList"
      ],
      "goals": [
        "Apply encapsulation in a real scenario",
        "Build and use inheritance hierarchy",
        "Design methods with proper validation"
      ]
    }
  ],
  "resources": [
    {
      "title": "Head First Java",
      "type": "book",
      "icon": "📖",
      "desc": "Chapters 7-10 cover OOP beautifully with visuals.",
      "url": "https://www.oreilly.com/library/view/head-first-java/9781492091646/"
    },
    {
      "title": "Effective Java by Joshua Bloch",
      "type": "book",
      "icon": "📖",
      "desc": "The Bible of Java best practices. Items 1-20 this week. Read slowly.",
      "url": "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
    }
  ]
};

WEEKS['w4'] = {
  "id": "w4",
  "phase": 1,
  "number": 4,
  "title": "OOP Part 2 — Interfaces, Abstract Classes & Polymorphism",
  "overview": "Complete your OOP mastery. Interfaces define contracts, abstract classes provide partial implementations, and polymorphism lets you write flexible code that works with any object implementing a contract.",
  "goals": [
    "Design with interfaces for maximum flexibility",
    "Know when to use abstract class vs interface",
    "Understand runtime polymorphism deeply",
    "Apply SOLID principles S, O, and L"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Interfaces",
      "topics": [
        "Interface declaration and implementation",
        "Multiple interface implementation",
        "Default methods (Java 8+)",
        "Static methods in interfaces"
      ]
    },
    {
      "day": 2,
      "focus": "Abstract Classes",
      "topics": [
        "abstract keyword for classes and methods",
        "Abstract classes cannot be instantiated",
        "Template Method Pattern",
        "Abstract class vs interface decision"
      ]
    },
    {
      "day": 3,
      "focus": "Polymorphism",
      "topics": [
        "Runtime polymorphism: parent reference child object",
        "Dynamic dispatch: JVM chooses correct method at runtime",
        "Casting: upcasting (automatic) and downcasting",
        "Programming to interfaces"
      ]
    },
    {
      "day": 4,
      "focus": "Enums",
      "topics": [
        "Enum declaration and usage",
        "Enum with fields and methods",
        "EnumSet and EnumMap",
        "Using enums in switch expressions"
      ]
    },
    {
      "day": 5,
      "focus": "Java Packages",
      "topics": [
        "Package declaration and import statements",
        "Standard library packages (java.util java.io java.lang)",
        "Creating and organizing your own packages",
        "Access modifiers in context of packages"
      ]
    },
    {
      "day": 6,
      "focus": "SOLID Principles S O L",
      "topics": [
        "Single Responsibility: one class one job",
        "Open/Closed: open for extension closed for modification",
        "Liskov Substitution: subtypes must be substitutable",
        "Code smells to avoid"
      ]
    },
    {
      "day": 7,
      "focus": "Shape Calculator Project",
      "topics": [
        "Interface Drawable Resizable",
        "Abstract class Shape",
        "Circle Rectangle Triangle implementations",
        "Polymorphic calculations"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Interfaces",
      "icon": "📋",
      "desc": "An interface is a pure contract — it declares what methods a class MUST implement, without caring about how. Interfaces enable multiple inheritance and are the foundation of every major design pattern in Java.",
      "keyPoints": [
        "Interface methods are public and abstract by default",
        "A class can implement multiple interfaces",
        "Default methods (Java 8) allow adding methods without breaking implementations",
        "Functional interfaces have exactly ONE abstract method — key for lambdas",
        "Program to an interface, not an implementation (core OOP principle)"
      ],
      "code": "public interface Drawable {\n    void draw();                      // abstract by default\n    default void clear() {            // default — can be overridden\n        System.out.println(\"Clearing...\");\n    }\n}\n\npublic interface Resizable {\n    void resize(double factor);\n}\n\n// Implement multiple interfaces\npublic class Circle implements Drawable, Resizable {\n    private double radius;\n    public Circle(double r) { this.radius = r; }\n\n    @Override public void draw() { System.out.println(\"Drawing circle r=\" + radius); }\n    @Override public void resize(double f) { radius *= f; }\n}\n\n// Polymorphism through interfaces\nDrawable d = new Circle(5.0);\nd.draw();   // works even though d is typed as Drawable"
    },
    {
      "title": "Abstract Classes vs Interfaces",
      "icon": "🔄",
      "desc": "Both define contracts but serve different purposes. Use abstract classes when you have shared STATE or IMPLEMENTATION across related classes. Use interfaces when defining a CAPABILITY or CONTRACT that unrelated classes can share.",
      "keyPoints": [
        "Abstract class: can have constructors fields concrete methods",
        "Interface: no constructors no instance state (before Java 9)",
        "extends = \"is-a\" (Dog is-a Animal)",
        "implements = \"can-do\" (Dog can-do Trainable)",
        "If two things are truly IS-A related → abstract class",
        "If defining a capability → interface"
      ],
      "code": "// Abstract class — has shared state and partial implementation\npublic abstract class Shape {\n    protected String color;\n    public Shape(String color) { this.color = color; }\n\n    public abstract double area();       // subclasses MUST implement\n    public abstract double perimeter();  // subclasses MUST implement\n\n    public void printInfo() {   // concrete — shared by all\n        System.out.printf(\"%s area=%.2f%n\", getClass().getSimpleName(), area());\n    }\n}\n\npublic class Circle extends Shape {\n    private double r;\n    public Circle(String color, double r) { super(color); this.r = r; }\n    @Override public double area() { return Math.PI * r * r; }\n    @Override public double perimeter() { return 2 * Math.PI * r; }\n}\n\n// Polymorphism\nShape[] shapes = { new Circle(\"red\", 5), new Rectangle(\"blue\", 4, 6) };\nfor (Shape s : shapes) s.printInfo(); // correct method for each type"
    }
  ],
  "projects": [
    {
      "title": "Shape Calculator",
      "icon": "📐",
      "difficulty": "beginner",
      "desc": "Demonstrates interfaces and abstract classes with polymorphic calculations.",
      "features": [
        "Abstract Shape class with area/perimeter",
        "Circle Rectangle Triangle Pentagon",
        "Drawable and Comparable interfaces",
        "Polymorphic collection of shapes",
        "Sort shapes by area using Comparator",
        "Find largest/smallest shape"
      ],
      "tech": [
        "Java",
        "OOP",
        "Abstract Classes",
        "Interfaces",
        "Comparator"
      ],
      "goals": [
        "Design with interfaces",
        "Runtime polymorphism",
        "Comparator/Comparable pattern"
      ]
    },
    {
      "title": "Student Grade Manager",
      "icon": "🎓",
      "difficulty": "beginner",
      "desc": "Grade management system applying all OOP principles.",
      "features": [
        "Student Teacher Course classes",
        "GPA calculation with weighted grades",
        "Honors determination (GPA > 3.5)",
        "Report card generation",
        "Sort by GPA or name"
      ],
      "tech": [
        "Java",
        "OOP",
        "ArrayList",
        "Collections"
      ],
      "goals": [
        "Real-world OOP design",
        "Practice all week 3-4 concepts",
        "Meaningful project for GitHub"
      ]
    }
  ],
  "resources": [
    {
      "title": "Effective Java — Items 17-25",
      "type": "book",
      "icon": "📖",
      "desc": "Essential reading on interfaces, abstract classes, and class design.",
      "url": "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
    },
    {
      "title": "Refactoring Guru — Design Patterns",
      "type": "article",
      "icon": "📝",
      "desc": "Visual explanations of design patterns. Read the OOP primer section.",
      "url": "https://refactoring.guru/design-patterns"
    }
  ]
};

WEEKS['w5'] = {
  "id": "w5",
  "phase": 2,
  "number": 5,
  "title": "Java Collections Framework",
  "overview": "The Collections Framework is the backbone of every Java application. Learn the List, Set, Map, and Queue hierarchies in depth. Understand when to use each structure based on performance, and master sorting and searching patterns.",
  "goals": [
    "Know every major Collection type and when to use it",
    "Understand time complexity of all operations",
    "Sort collections with Comparable and Comparator",
    "Implement hashCode and equals correctly"
  ],
  "days": [
    {
      "day": 1,
      "focus": "List — ArrayList & LinkedList",
      "topics": [
        "ArrayList: dynamic array, O(1) access, O(n) insert",
        "LinkedList: doubly-linked, O(1) insert/delete, O(n) access",
        "List.of() and List.copyOf() — immutable lists",
        "Collections.sort() and List.sort() with Comparator"
      ]
    },
    {
      "day": 2,
      "focus": "Set Interface",
      "topics": [
        "HashSet: O(1) ops no order hash-based",
        "LinkedHashSet: insertion-order maintained",
        "TreeSet: sorted by natural order or Comparator O(log n)",
        "Set operations: union intersection difference"
      ]
    },
    {
      "day": 3,
      "focus": "Map Interface",
      "topics": [
        "HashMap: O(1) average key-value no order",
        "LinkedHashMap: insertion-order maintained",
        "TreeMap: sorted by key O(log n)",
        "getOrDefault computeIfAbsent merge"
      ]
    },
    {
      "day": 4,
      "focus": "Queue Deque PriorityQueue",
      "topics": [
        "Queue FIFO: offer poll peek",
        "ArrayDeque: efficient double-ended queue",
        "PriorityQueue: min-heap O(log n) insert/remove",
        "Use cases: BFS task scheduling top-K"
      ]
    },
    {
      "day": 5,
      "focus": "hashCode & equals Contract",
      "topics": [
        "Why they must be overridden together",
        "Contract: equal objects MUST have same hashCode",
        "HashMap internals: buckets chaining load factor rehashing",
        "Objects.hash() utility method"
      ]
    },
    {
      "day": 6,
      "focus": "Comparable & Comparator",
      "topics": [
        "Comparable<T>: natural ordering in the class itself",
        "Comparator<T>: external ordering for multiple sort criteria",
        "Comparator.comparing() thenComparing() reversed()",
        "Sorting complex objects by multiple fields"
      ]
    },
    {
      "day": 7,
      "focus": "Project — Contact Book",
      "topics": [
        "Build full CRUD contact management",
        "HashMap-based storage with multiple lookups",
        "Sort contacts multiple ways",
        "Export to CSV file"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Collection Hierarchy & Choosing the Right One",
      "icon": "🗂️",
      "desc": "The key is choosing the right collection based on your access patterns. Wrong choice = 10x slower. Right choice = elegant and fast.",
      "keyPoints": [
        "ArrayList: mostly read by index, rare inserts in middle",
        "LinkedList: frequently insert/delete at both ends (use as deque)",
        "HashSet: need uniqueness and do not care about order",
        "TreeSet: need uniqueness AND sorted order",
        "HashMap: key-value lookups — most used collection in Java",
        "TreeMap: keys must be in sorted order",
        "PriorityQueue: always need the min/max element"
      ],
      "code": "import java.util.*;\n\n// List — ordered allows duplicates\nList<String> list = new ArrayList<>();\nlist.add(\"Alice\"); list.add(\"Bob\"); list.add(\"Alice\");\nSystem.out.println(list); // [Alice, Bob, Alice]\n\n// Set — unique elements only\nSet<String> set = new HashSet<>(list);\nSystem.out.println(set);  // [Alice, Bob] — no duplicate\n\n// Map — key-value pairs\nMap<String, Integer> scores = new HashMap<>();\nscores.put(\"Alice\", 95);\nscores.getOrDefault(\"Charlie\", 0);    // 0 — key not found\nscores.computeIfAbsent(\"Dave\", k -> 75);\n\n// Iterate Map\nfor (Map.Entry<String, Integer> e : scores.entrySet()) {\n    System.out.println(e.getKey() + \": \" + e.getValue());\n}\n\n// PriorityQueue (min-heap)\nPriorityQueue<Integer> pq = new PriorityQueue<>();\npq.offer(5); pq.offer(1); pq.offer(3);\nwhile (!pq.isEmpty()) System.out.print(pq.poll() + \" \"); // 1 3 5"
    },
    {
      "title": "HashMap Internals",
      "icon": "🔑",
      "desc": "HashMap uses an array of \"buckets.\" Each key hashCode determines which bucket it lands in. Multiple keys can hash to same bucket (collision), forming a linked list or balanced tree (Java 8+).",
      "keyPoints": [
        "Default initial capacity: 16 buckets",
        "Load factor 0.75: rehash (double capacity) when 75% full",
        "hashCode() determines the bucket index",
        "equals() resolves collisions within a bucket",
        "Java 8+: buckets become balanced trees when > 8 entries",
        "ALWAYS override both hashCode AND equals together"
      ],
      "code": "public class Student {\n    private String id;\n    private String name;\n\n    public Student(String id, String name) {\n        this.id = id; this.name = name;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Student s)) return false;\n        return Objects.equals(id, s.id);   // equality by ID\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id);   // hash by same field(s) as equals\n    }\n}\n\n// Now Set works correctly\nSet<Student> students = new HashSet<>();\nstudents.add(new Student(\"S001\", \"Alice\"));\nstudents.add(new Student(\"S001\", \"Alice\")); // duplicate!\nSystem.out.println(students.size()); // 1"
    }
  ],
  "projects": [
    {
      "title": "Contact Book Application",
      "icon": "📒",
      "difficulty": "intermediate",
      "desc": "A full-featured CLI contact manager using various collection types.",
      "features": [
        "Add update delete search contacts",
        "HashMap<String, Contact> for O(1) ID lookup",
        "Sort by name email or phone (Comparator)",
        "Group contacts by city (Map<String, List<Contact>>)",
        "Import/export CSV files",
        "Duplicate detection with Set"
      ],
      "tech": [
        "Java",
        "HashMap",
        "TreeMap",
        "ArrayList",
        "Comparator"
      ],
      "goals": [
        "Master Map for real use case",
        "Practice sorting with Comparator",
        "Multiple data structures working together"
      ]
    }
  ],
  "resources": [
    {
      "title": "Java Collections Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "Oracle official tutorial — read the Collections trail completely.",
      "url": "https://docs.oracle.com/javase/tutorial/collections/"
    },
    {
      "title": "Baeldung Java Collections",
      "type": "article",
      "icon": "📝",
      "desc": "Comprehensive guides on every collection type.",
      "url": "https://www.baeldung.com/java-collections"
    }
  ]
};

WEEKS['w6'] = {
  "id": "w6",
  "phase": 2,
  "number": 6,
  "title": "Generics, Exceptions & File I/O",
  "overview": "Generics give you type-safe containers and methods. Exception handling makes programs robust. File I/O lets data outlive the program. These three are essential for building real applications that handle errors gracefully.",
  "goals": [
    "Write generic classes and methods",
    "Handle exceptions properly (not just catch and ignore)",
    "Read and write files efficiently",
    "Use try-with-resources everywhere relevant"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Generics",
      "topics": [
        "Generic classes: class Box<T>",
        "Generic methods: <T> T pick(T[] items)",
        "Bounded type parameters: <T extends Comparable<T>>",
        "Wildcards: ? ? extends Number ? super Integer"
      ]
    },
    {
      "day": 2,
      "focus": "Exception Hierarchy",
      "topics": [
        "Throwable → Error (do not catch) vs Exception",
        "Checked exceptions (must handle) vs Unchecked (RuntimeException)",
        "try-catch-finally execution flow",
        "Multi-catch: catch (IOException | SQLException e)"
      ]
    },
    {
      "day": 3,
      "focus": "Exception Best Practices",
      "topics": [
        "try-with-resources (AutoCloseable)",
        "throws declaration in method signature",
        "Creating custom exceptions",
        "When to wrap vs rethrow vs swallow"
      ]
    },
    {
      "day": 4,
      "focus": "File I/O Basics",
      "topics": [
        "File class: exists createNewFile mkdir list",
        "FileReader/FileWriter for character streams",
        "BufferedReader/BufferedWriter for efficiency",
        "Scanner for reading formatted input from files"
      ]
    },
    {
      "day": 5,
      "focus": "NIO — Modern File I/O",
      "topics": [
        "Path and Paths — better than File",
        "Files: readString writeString readAllLines",
        "Files.walk and Files.find for directory traversal",
        "Files.copy move delete"
      ]
    },
    {
      "day": 6,
      "focus": "Serialization & JSON",
      "topics": [
        "Serializable interface and ObjectOutputStream",
        "serialVersionUID for version control",
        "transient keyword to skip fields",
        "Introduction to Jackson/Gson for JSON"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Inventory Management System",
        "Generic collection containers",
        "Full exception handling",
        "File persistence with NIO"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Generics",
      "icon": "🧬",
      "desc": "Generics allow type-safe code that works with any type. Instead of List of Objects (requiring casting, ClassCastException risk), you write List<String> and the compiler catches type errors immediately.",
      "keyPoints": [
        "Type erasure: generic type info removed at compile time — only for type checking",
        "Bounded: <T extends Comparable<T>> means T must implement Comparable",
        "Upper bounded wildcard ? extends T: read from it do not write",
        "Lower bounded wildcard ? super T: write to it cannot read typed",
        "PECS principle: Producer Extends Consumer Super"
      ],
      "code": "// Generic class\npublic class Pair<A, B> {\n    private final A first;\n    private final B second;\n    public Pair(A first, B second) { this.first = first; this.second = second; }\n    public A getFirst() { return first; }\n    public B getSecond() { return second; }\n}\n\n// Generic method with bound\npublic static <T extends Comparable<T>> T max(T a, T b) {\n    return a.compareTo(b) >= 0 ? a : b;\n}\n\nSystem.out.println(max(3, 7));           // 7\nSystem.out.println(max(\"apple\", \"mango\")); // mango\n\n// Wildcard: sum any list of numbers\npublic static double sum(List<? extends Number> list) {\n    return list.stream().mapToDouble(Number::doubleValue).sum();\n}\nsum(List.of(1, 2, 3));      // works with Integer\nsum(List.of(1.5, 2.5));     // works with Double"
    },
    {
      "title": "Exception Handling",
      "icon": "🚨",
      "desc": "The goal is NOT to suppress exceptions — it is to handle them at the right level. Let exceptions propagate up until a layer that can actually do something meaningful about them.",
      "keyPoints": [
        "Checked (IOException SQLException): compiler forces you to handle",
        "Unchecked (RuntimeException): programmer errors — NPE IllegalArgumentException",
        "finally ALWAYS runs — good for cleanup",
        "try-with-resources automatically closes AutoCloseable resources",
        "Never catch Exception or Throwable generically without re-throwing",
        "Log the full stack trace — never just e.getMessage()"
      ],
      "code": "// try-with-resources — preferred for I/O\npublic static List<String> readLines(String path) throws IOException {\n    try (var reader = new BufferedReader(new FileReader(path))) {\n        List<String> lines = new ArrayList<>();\n        String line;\n        while ((line = reader.readLine()) != null) lines.add(line);\n        return lines;\n    }\n    // reader auto-closed even if exception occurs\n}\n\n// Custom exception\npublic class InsufficientFundsException extends RuntimeException {\n    private final double shortfall;\n    public InsufficientFundsException(double shortfall) {\n        super(\"Insufficient funds: need $\" + shortfall + \" more\");\n        this.shortfall = shortfall;\n    }\n    public double getShortfall() { return shortfall; }\n}\n\n// Exception chaining\ntry {\n    connectToDatabase();\n} catch (SQLException e) {\n    throw new DataAccessException(\"Failed to load user\", e); // chain!"
    }
  ],
  "projects": [
    {
      "title": "Inventory Management System",
      "icon": "📦",
      "difficulty": "intermediate",
      "desc": "A file-persisted inventory system with full exception handling.",
      "features": [
        "Product<T> generic class with type-safe categories",
        "CRUD operations with validation",
        "Save/load to JSON file",
        "Exception handling for every operation",
        "CSV import for bulk product loading",
        "Low stock alerts"
      ],
      "tech": [
        "Java",
        "Generics",
        "File I/O NIO",
        "Gson"
      ],
      "goals": [
        "Generics in real-world scenario",
        "Robust exception handling",
        "File persistence pattern"
      ]
    }
  ],
  "resources": [
    {
      "title": "Effective Java — Exceptions Chapter",
      "type": "book",
      "icon": "📖",
      "desc": "Items 69-77. The definitive guide to Java exception best practices.",
      "url": "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
    },
    {
      "title": "Baeldung — Java I/O",
      "type": "article",
      "icon": "📝",
      "desc": "Comprehensive guides on Java NIO Path Files. Bookmark baeldung.com.",
      "url": "https://www.baeldung.com/java-io"
    }
  ]
};

WEEKS['w7'] = {
  "id": "w7",
  "phase": 2,
  "number": 7,
  "title": "Streams API & Functional Programming",
  "overview": "Java 8 transformed the language with lambdas and Streams. You will write less code, make fewer bugs, and think more declaratively. Streams let you process collections as pipelines — filter, transform, aggregate — all in a clean readable style.",
  "goals": [
    "Write lambda expressions naturally",
    "Use all Stream intermediate and terminal operations",
    "Process data with Collectors (groupingBy partitioningBy)",
    "Use Optional to eliminate NullPointerException"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Functional Interfaces & Lambdas",
      "topics": [
        "@FunctionalInterface annotation",
        "Built-in: Predicate<T> Function<T,R> Consumer<T> Supplier<T>",
        "Lambda syntax: () -> expr (x) -> expr (x,y) -> { stmts; }",
        "Method references: Class::method obj::method Class::new"
      ]
    },
    {
      "day": 2,
      "focus": "Stream Creation & Basics",
      "topics": [
        "Creating: collection.stream() Stream.of() Stream.generate()",
        "Intermediate: filter() map() distinct() sorted() limit() skip()",
        "Terminal: forEach() count() collect() toList()",
        "Streams are LAZY — nothing runs until a terminal operation"
      ]
    },
    {
      "day": 3,
      "focus": "Advanced Stream Operations",
      "topics": [
        "flatMap: flatten nested collections",
        "reduce: fold a stream to a single value",
        "peek: debug without breaking pipeline",
        "mapToInt mapToDouble for numeric streams (sum average statistics)"
      ]
    },
    {
      "day": 4,
      "focus": "Collectors",
      "topics": [
        "Collectors.toList() toSet() toMap()",
        "Collectors.groupingBy() — group into Map",
        "Collectors.partitioningBy() — split by boolean predicate",
        "Collectors.joining() — concatenate strings",
        "Collectors.counting() summarizingInt()"
      ]
    },
    {
      "day": 5,
      "focus": "Optional Class",
      "topics": [
        "Why Optional: explicit null handling vs NPE",
        "Optional.of() ofNullable() empty()",
        "orElse() orElseGet() (lazy) orElseThrow()",
        "map() flatMap() filter() on Optional",
        "Anti-pattern: Optional.get() without isPresent() check"
      ]
    },
    {
      "day": 6,
      "focus": "Parallel Streams & Performance",
      "topics": [
        "parallelStream() — uses ForkJoinPool",
        "When parallel helps (large CPU-bound) vs hurts (small IO-bound)",
        "Stream ordering guarantees",
        "Performance benchmarking with JMH basics"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Sales Data Analytics Pipeline",
        "Load CSV process with Streams",
        "Filter transform aggregate",
        "Generate formatted report"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Lambdas & Functional Interfaces",
      "icon": "λ",
      "desc": "A lambda expression is an anonymous function. Functional interfaces have exactly one abstract method, making them compatible with lambdas. Together they enable functional-style programming in Java.",
      "keyPoints": [
        "Predicate<T>: T → boolean — use for filter()",
        "Function<T,R>: T → R — use for map()",
        "Consumer<T>: T → void — use for forEach()",
        "Supplier<T>: () → T — use for lazy initialization",
        "Method references are shorthand lambdas when just calling a method",
        "Lambdas can capture effectively final variables from outer scope"
      ],
      "code": "import java.util.function.*;\n\n// Predicate\nPredicate<String> isLong = s -> s.length() > 5;\nPredicate<String> startsA = s -> s.startsWith(\"A\");\nPredicate<String> both = isLong.and(startsA);  // compose\n\n// Function\nFunction<String, Integer> length = String::length;  // method ref\nFunction<String, String> upper = String::toUpperCase;\nFunction<String, String> chain = upper.andThen(String::strip);\n\n// Consumer\nConsumer<String> printer = System.out::println;\n\n// Supplier\nSupplier<List<String>> factory = ArrayList::new;\n\n// In practice\nList.of(\"Alice\", \"Bob\", \"Charlie\")\n    .stream()\n    .filter(s -> s.length() > 3)    // lambda\n    .map(String::toUpperCase)        // method reference\n    .forEach(System.out::println);   // method reference"
    },
    {
      "title": "Streams API Complete Guide",
      "icon": "🌊",
      "desc": "A Stream processes elements from a source. Intermediate operations build a pipeline; terminal operations trigger execution. Streams are lazy and can only be consumed once.",
      "keyPoints": [
        "filter(Predicate): keep elements matching condition",
        "map(Function): transform each element",
        "flatMap: transform and flatten (List<List<T>> to Stream<T>)",
        "sorted(): natural order; sorted(Comparator): custom order",
        "collect(Collectors.toList()): materialize to List",
        "reduce(): combine all elements into one value",
        "Stream can only be consumed ONCE — create a new one if needed"
      ],
      "code": "List<Employee> employees = getEmployees();\n\n// Filter + map + collect\nList<String> names = employees.stream()\n    .filter(e -> e.getYears() >= 5)\n    .filter(e -> e.getSalary() > 80000)\n    .map(Employee::getName)\n    .sorted()\n    .collect(Collectors.toList());\n\n// Group by department\nMap<String, List<Employee>> byDept = employees.stream()\n    .collect(Collectors.groupingBy(Employee::getDepartment));\n\n// Average salary by department\nMap<String, Double> avgSalary = employees.stream()\n    .collect(Collectors.groupingBy(\n        Employee::getDepartment,\n        Collectors.averagingDouble(Employee::getSalary)\n    ));\n\n// Top 3 earners\nemployees.stream()\n    .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())\n    .limit(3)\n    .forEach(e -> System.out.println(e.getName() + \": $\" + e.getSalary()));\n\n// flatMap\nList<List<String>> nested = List.of(List.of(\"a\",\"b\"), List.of(\"c\",\"d\"));\nList<String> flat = nested.stream().flatMap(Collection::stream).toList();"
    }
  ],
  "projects": [
    {
      "title": "Sales Data Analytics Pipeline",
      "icon": "📊",
      "difficulty": "intermediate",
      "desc": "Process a large CSV dataset of sales records using the Streams API exclusively.",
      "features": [
        "Load CSV with 10000+ sales records",
        "Filter by date range region product",
        "GroupBy product → total revenue",
        "Top 10 products by revenue",
        "Monthly sales trends",
        "Export report to formatted text file",
        "ALL processing done with Streams — no loops"
      ],
      "tech": [
        "Java Streams",
        "Collectors",
        "Files API",
        "Optional"
      ],
      "goals": [
        "Master all stream operations",
        "Think declaratively",
        "Appreciate stream power over loops"
      ]
    }
  ],
  "resources": [
    {
      "title": "Modern Java in Action",
      "type": "book",
      "icon": "📖",
      "desc": "Urma Fusco Mycroft. The best book on Streams lambdas and functional Java.",
      "url": "https://www.manning.com/books/modern-java-in-action"
    },
    {
      "title": "Baeldung — Java Streams",
      "type": "article",
      "icon": "📝",
      "desc": "Comprehensive stream guides. baeldung.com/java-8-streams",
      "url": "https://www.baeldung.com/java-8-streams"
    }
  ]
};

WEEKS['w8'] = {
  "id": "w8",
  "phase": 2,
  "number": 8,
  "title": "Multithreading & Concurrency",
  "overview": "Modern applications are concurrent — web servers handle hundreds of simultaneous requests. This week you master threads, synchronization, the java.util.concurrent toolkit, and CompletableFuture for modern async programming.",
  "goals": [
    "Create and manage threads safely",
    "Understand and prevent race conditions and deadlocks",
    "Use ExecutorService for thread pool management",
    "Write async code with CompletableFuture"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Thread Basics",
      "topics": [
        "Thread lifecycle: NEW RUNNABLE BLOCKED WAITING TERMINATED",
        "Creating: extends Thread vs implements Runnable vs lambda",
        "thread.start() vs thread.run() — critical difference!",
        "Daemon vs user threads"
      ]
    },
    {
      "day": 2,
      "focus": "Thread Synchronization",
      "topics": [
        "Race conditions: when multiple threads touch shared state",
        "synchronized keyword: method-level and block-level",
        "volatile keyword: visibility across threads (not atomicity)",
        "Deadlock: two threads waiting for each other forever"
      ]
    },
    {
      "day": 3,
      "focus": "ExecutorService",
      "topics": [
        "ExecutorService: manage a pool of threads",
        "Executors.newFixedThreadPool() newCachedThreadPool() newSingleThreadExecutor()",
        "Callable<T> + Future<T>: tasks that return values",
        "submit() vs execute() — Future vs fire-and-forget"
      ]
    },
    {
      "day": 4,
      "focus": "Locks & Synchronizers",
      "topics": [
        "ReentrantLock: more flexible than synchronized",
        "ReadWriteLock: multiple readers OR one writer",
        "CountDownLatch: wait for N events to complete",
        "Semaphore: limit concurrent access to resource"
      ]
    },
    {
      "day": 5,
      "focus": "Concurrent Collections & Atomic",
      "topics": [
        "ConcurrentHashMap: thread-safe fine-grained locking",
        "CopyOnWriteArrayList: safe for many-readers few-writers",
        "BlockingQueue: producer-consumer without manual sync",
        "AtomicInteger AtomicReference: lock-free atomic operations"
      ]
    },
    {
      "day": 6,
      "focus": "CompletableFuture",
      "topics": [
        "supplyAsync() and runAsync()",
        "thenApply() (transform) thenAccept() (consume) thenRun() (action)",
        "thenCombine() allOf() anyOf() — combining futures",
        "exceptionally() and handle() — error handling in async chains"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Multi-threaded file downloader",
        "Download multiple URLs concurrently",
        "Progress tracking with atomic counters",
        "CompletableFuture pipeline"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Race Conditions & Synchronization",
      "icon": "⚡",
      "desc": "A race condition occurs when two threads access shared mutable data simultaneously and the outcome depends on timing. The solution is synchronization — making certain code sections execute by only one thread at a time.",
      "keyPoints": [
        "Race condition: outcome depends on non-deterministic thread scheduling",
        "synchronized method: only one thread can execute it at a time per object",
        "synchronized block: finer-grained — lock only what you need to",
        "volatile: ensures reads/writes go to main memory not thread cache",
        "Deadlock: avoid by always acquiring locks in the same order",
        "AtomicInteger uses CAS (Compare-And-Swap) — lock-free and fast"
      ],
      "code": "// UNSAFE — race condition!\npublic class Counter {\n    private int count = 0;\n    public void increment() { count++; }  // count++ is NOT atomic!\n}\n\n// SAFE — synchronized\npublic synchronized void increment() { count++; }\n\n// BEST — AtomicInteger (lock-free)\nimport java.util.concurrent.atomic.AtomicInteger;\npublic class SafeCounter {\n    private AtomicInteger count = new AtomicInteger(0);\n    public void increment() { count.incrementAndGet(); }  // atomic CAS\n    public int get() { return count.get(); }\n}\n\n// Deadlock pattern (AVOID!)\n// Thread 1: holds lockA, wants lockB\n// Thread 2: holds lockB, wants lockA\n// Solution: always acquire locks in same order"
    },
    {
      "title": "CompletableFuture — Async Programming",
      "icon": "🔮",
      "desc": "CompletableFuture is Java's modern answer to async programming. Instead of blocking threads while waiting for I/O, you describe a pipeline of operations that execute when results become available.",
      "keyPoints": [
        "supplyAsync runs in ForkJoinPool.commonPool() by default",
        "thenApply (like map): transform result synchronously",
        "thenCompose (like flatMap): chain another async operation",
        "thenCombine: wait for two futures and combine results",
        "CompletableFuture.allOf(): wait for ALL futures to complete",
        "Handle errors with exceptionally() or handle()"
      ],
      "code": "import java.util.concurrent.*;\n\n// Async pipeline\nCompletableFuture<String> future = CompletableFuture\n    .supplyAsync(() -> fetchUser(userId))     // runs on thread pool\n    .thenApply(user -> enrichWithProfile(user)) // transform\n    .thenApply(user -> user.toJson())           // transform again\n    .exceptionally(ex -> \"{error: \" + ex.getMessage() + \"}\");\n\n// Combining futures\nvar cf1 = CompletableFuture.supplyAsync(() -> \"Hello\");\nvar cf2 = CompletableFuture.supplyAsync(() -> \"World\");\ncf1.thenCombine(cf2, (s1, s2) -> s1 + \" \" + s2)\n   .thenAccept(System.out::println);   // Hello World\n\n// Wait for all\nCompletableFuture.allOf(cf1, cf2).join();"
    }
  ],
  "projects": [
    {
      "title": "Multi-Threaded File Downloader",
      "icon": "⬇️",
      "difficulty": "intermediate",
      "desc": "Download multiple files concurrently with progress tracking.",
      "features": [
        "Download N files simultaneously with thread pool",
        "Progress bar per file (atomic counters)",
        "Retry logic for failed downloads (3 attempts)",
        "Rate limiting with Semaphore",
        "CompletableFuture pipeline",
        "Summary report: total time bytes downloaded"
      ],
      "tech": [
        "ExecutorService",
        "CompletableFuture",
        "AtomicLong",
        "Semaphore"
      ],
      "goals": [
        "Real-world concurrency",
        "CompletableFuture chains",
        "Thread pool sizing"
      ]
    }
  ],
  "resources": [
    {
      "title": "Java Concurrency in Practice",
      "type": "book",
      "icon": "📖",
      "desc": "Brian Goetz. THE book on Java concurrency. Read chapters 1-5 and 7.",
      "url": "https://jcip.net/"
    },
    {
      "title": "Baeldung — Java Concurrency",
      "type": "article",
      "icon": "📝",
      "desc": "Comprehensive series on threads locks CompletableFuture.",
      "url": "https://www.baeldung.com/java-concurrency"
    }
  ]
};

WEEKS['w9'] = {
  "id": "w9",
  "phase": 3,
  "number": 9,
  "title": "Spring Core & Dependency Injection",
  "overview": "Spring is the dominant Java framework. Before Spring Boot, understand what Spring Core solves: Inversion of Control (IoC) and Dependency Injection (DI). These patterns make applications testable, modular, and maintainable.",
  "goals": [
    "Understand IoC and why it matters",
    "Configure Spring beans with annotations",
    "Inject dependencies cleanly",
    "Understand bean scopes and lifecycle"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Why Spring Exists",
      "topics": [
        "Problems before Spring: tight coupling untestable code",
        "Inversion of Control (IoC): framework calls your code",
        "Dependency Injection: receive dependencies do not create them",
        "Spring ecosystem overview: Core Boot Data Security Cloud"
      ]
    },
    {
      "day": 2,
      "focus": "Spring IoC Container",
      "topics": [
        "ApplicationContext vs BeanFactory",
        "Bean definition and creation",
        "Java-based configuration with @Configuration and @Bean",
        "Bean naming conventions"
      ]
    },
    {
      "day": 3,
      "focus": "Component Scanning",
      "topics": [
        "@Component @Service @Repository @Controller stereotype annotations",
        "@ComponentScan — tell Spring where to find beans",
        "Difference between @Service and @Component (semantic only)",
        "@Repository translates persistence exceptions"
      ]
    },
    {
      "day": 4,
      "focus": "Dependency Injection",
      "topics": [
        "Constructor injection (preferred — immutable testable)",
        "Setter injection (optional dependencies)",
        "Field injection with @Autowired (avoid)",
        "@Qualifier when multiple beans of same type exist"
      ]
    },
    {
      "day": 5,
      "focus": "Bean Scopes & Lifecycle",
      "topics": [
        "singleton (default): one instance per container",
        "prototype: new instance every time",
        "request/session scopes for web context",
        "@PostConstruct and @PreDestroy callbacks"
      ]
    },
    {
      "day": 6,
      "focus": "Spring Properties & Profiles",
      "topics": [
        "@Value(\"${property.name}\"): inject from properties file",
        "@ConfigurationProperties for type-safe config binding",
        "Profiles with @Profile — different beans for dev/prod",
        "Environment object for programmatic access"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Multi-layer Spring app",
        "Service Repository Configuration layers",
        "Property-driven configuration",
        "Unit test with @ExtendWith(SpringExtension.class)"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Inversion of Control & Dependency Injection",
      "icon": "🔄",
      "desc": "In traditional code, your class creates its own dependencies (tightly coupled, untestable). With DI, the Spring container creates dependencies and injects them. Your class just declares what it needs.",
      "keyPoints": [
        "Tight coupling: ClassA creates ClassB — cannot test A without B",
        "Loose coupling with DI: ClassA receives ClassB via constructor — easy to mock B",
        "Constructor injection preferred: dependencies explicit class can be immutable",
        "@Autowired on constructor optional in Spring (auto if one constructor)",
        "Spring ApplicationContext manages the entire bean lifecycle"
      ],
      "code": "// WITHOUT DI — tightly coupled untestable\npublic class OrderService {\n    private PaymentService payment = new StripePaymentService(); // hard dep!\n    private EmailService email = new SmtpEmailService();\n}\n\n// WITH DI — loosely coupled testable\n@Service\npublic class OrderService {\n    private final PaymentService paymentService;\n    private final EmailService emailService;\n\n    // Spring injects these via constructor\n    public OrderService(PaymentService paymentService, EmailService emailService) {\n        this.paymentService = paymentService;\n        this.emailService = emailService;\n    }\n}\n\n// In test: inject mocks!\n@Test\nvoid testProcessOrder() {\n    var mockPayment = Mockito.mock(PaymentService.class);\n    var mockEmail = Mockito.mock(EmailService.class);\n    var service = new OrderService(mockPayment, mockEmail);\n    // test without touching real Stripe or SMTP!\n}"
    }
  ],
  "projects": [
    {
      "title": "Library Management System (Spring IoC)",
      "icon": "📚",
      "difficulty": "intermediate",
      "desc": "A Spring-managed library system demonstrating IoC and DI patterns.",
      "features": [
        "BookService MemberService LoanService with DI",
        "In-memory repositories",
        "@Configuration class wiring",
        "Multiple profiles: dev (verbose) vs prod",
        "Property-driven configuration (max loans overdue days)"
      ],
      "tech": [
        "Spring Core",
        "@Component",
        "@Service",
        "@Configuration"
      ],
      "goals": [
        "DI from first principles",
        "Profile-based configuration",
        "Layered architecture"
      ]
    }
  ],
  "resources": [
    {
      "title": "Spring in Action (6th Ed)",
      "type": "book",
      "icon": "📖",
      "desc": "Craig Walls. The most popular Spring book. Read Chapters 1-3.",
      "url": "https://www.manning.com/books/spring-in-action-sixth-edition"
    },
    {
      "title": "Spring Framework Reference",
      "type": "docs",
      "icon": "📚",
      "desc": "Read the Core Technologies section: IoC resources validation.",
      "url": "https://docs.spring.io/spring-framework/reference/core.html"
    }
  ]
};

WEEKS['w10'] = {
  "id": "w10",
  "phase": 3,
  "number": 10,
  "title": "Spring Boot",
  "overview": "Spring Boot eliminates 80% of Spring boilerplate. With auto-configuration, starter dependencies, and embedded servers, you go from zero to running web app in minutes.",
  "goals": [
    "Create and structure Spring Boot projects",
    "Understand auto-configuration and starters",
    "Configure applications with YAML",
    "Monitor apps with Actuator"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Spring Boot Fundamentals",
      "topics": [
        "spring.io/start — Spring Initializr walkthrough",
        "Project structure: main class resources test",
        "@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan",
        "Maven build lifecycle: compile test package install"
      ]
    },
    {
      "day": 2,
      "focus": "Auto-Configuration",
      "topics": [
        "How @EnableAutoConfiguration works",
        "spring-boot-autoconfigure JAR inspection",
        "Overriding auto-configuration with your own beans",
        "@ConditionalOnMissingBean — use mine unless you provide yours"
      ]
    },
    {
      "day": 3,
      "focus": "Configuration Files",
      "topics": [
        "application.properties vs application.yml (YAML preferred)",
        "Profile-specific: application-dev.yml application-prod.yml",
        "@ConfigurationProperties with validation",
        "spring.config.import for external config"
      ]
    },
    {
      "day": 4,
      "focus": "Spring Boot Starters",
      "topics": [
        "spring-boot-starter-web (Tomcat Jackson Spring MVC)",
        "spring-boot-starter-data-jpa",
        "spring-boot-starter-security",
        "spring-boot-starter-test (JUnit 5 Mockito MockMvc)"
      ]
    },
    {
      "day": 5,
      "focus": "Spring Boot Testing",
      "topics": [
        "@SpringBootTest: full application context",
        "@WebMvcTest: test controllers without full context",
        "@DataJpaTest: test repositories with H2",
        "MockBean vs SpyBean"
      ]
    },
    {
      "day": 6,
      "focus": "Spring Boot Actuator",
      "topics": [
        "Health endpoint /actuator/health",
        "Metrics and info endpoints",
        "Custom health indicators",
        "Prometheus integration basics"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Complete Spring Boot app structure",
        "Multiple profiles dev/prod",
        "Actuator configured",
        "Integration tests pass"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Spring Boot Auto-Configuration",
      "icon": "⚡",
      "desc": "Spring Boot auto-configuration is the killer feature. When you add a dependency, Spring Boot automatically configures it — without writing any @Bean. But if you define your own bean, Boot backs off.",
      "keyPoints": [
        "Auto-config classes live in spring-boot-autoconfigure.jar",
        "Each auto-config is guarded by @Conditional annotations",
        "debug=true in application.properties shows auto-config report",
        "Exclusions: spring.autoconfigure.exclude=...SecurityAutoConfiguration",
        "@ConditionalOnProperty: activate beans based on properties"
      ],
      "code": "# application.yml\nspring:\n  application:\n    name: my-api\n  datasource:\n    url: jdbc:postgresql://localhost:5432/mydb\n    username: ${DB_USER}           # from environment variable\n    password: ${DB_PASS}\n  jpa:\n    hibernate:\n      ddl-auto: validate           # prod: validate / dev: update\n    show-sql: false\n\nserver:\n  port: 8080\n\nlogging:\n  level:\n    com.myapp: DEBUG\n    org.springframework: WARN\n\n---\nspring:\n  config:\n    activate:\n      on-profile: dev\n  jpa:\n    show-sql: true\n    hibernate:\n      ddl-auto: update"
    }
  ],
  "projects": [
    {
      "title": "Notes REST API (Full Boot App)",
      "icon": "📝",
      "difficulty": "intermediate",
      "desc": "A complete Spring Boot REST API for managing notes — fully configured.",
      "features": [
        "CRUD API for notes",
        "application.yml with dev/prod profiles",
        "H2 for dev PostgreSQL for prod",
        "Actuator with custom health check",
        "@WebMvcTest and @DataJpaTest",
        "Dockerfile for containerization"
      ],
      "tech": [
        "Spring Boot 3",
        "Spring MVC",
        "H2",
        "Actuator",
        "JUnit 5"
      ],
      "goals": [
        "Full Boot lifecycle",
        "Profile management",
        "Testing patterns"
      ]
    }
  ],
  "resources": [
    {
      "title": "Spring Boot Reference Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "Read \"Using Spring Boot\" and \"Application Properties\" sections.",
      "url": "https://docs.spring.io/spring-boot/docs/current/reference/html/"
    }
  ]
};

WEEKS['w11'] = {
  "id": "w11",
  "phase": 3,
  "number": 11,
  "title": "REST APIs with Spring MVC",
  "overview": "REST APIs are how modern applications communicate. This week you build production-quality APIs with proper HTTP semantics, request validation, global exception handling, DTO patterns, and API documentation.",
  "goals": [
    "Build RESTful APIs following HTTP best practices",
    "Implement request validation with Bean Validation",
    "Design proper error responses with ProblemDetails",
    "Document APIs with OpenAPI/Swagger"
  ],
  "days": [
    {
      "day": 1,
      "focus": "HTTP & REST Principles",
      "topics": [
        "HTTP methods: GET POST PUT PATCH DELETE",
        "Status codes: 200 201 204 400 401 403 404 409 500",
        "REST constraints: stateless uniform interface client-server",
        "REST maturity model (Richardson): Level 0 to 3"
      ]
    },
    {
      "day": 2,
      "focus": "Spring MVC Controllers",
      "topics": [
        "@RestController @RequestMapping",
        "@GetMapping @PostMapping @PutMapping @DeleteMapping",
        "@PathVariable @RequestParam @RequestBody",
        "ResponseEntity<T> for full control"
      ]
    },
    {
      "day": 3,
      "focus": "Request/Response Handling",
      "topics": [
        "Jackson JSON serialization/deserialization",
        "Custom serializers/deserializers",
        "Date formatting with @JsonFormat",
        "Content negotiation"
      ]
    },
    {
      "day": 4,
      "focus": "Request Validation",
      "topics": [
        "@Valid on @RequestBody",
        "@NotNull @NotBlank @Size @Email @Min @Max @Pattern",
        "Custom validators",
        "ValidationException handling"
      ]
    },
    {
      "day": 5,
      "focus": "Global Exception Handling",
      "topics": [
        "@RestControllerAdvice",
        "@ExceptionHandler for specific exceptions",
        "ProblemDetails RFC 9457 standard",
        "Custom error response structure"
      ]
    },
    {
      "day": 6,
      "focus": "DTOs & Mapping",
      "topics": [
        "Why DTOs: decouple API contract from domain model",
        "Request DTOs vs Response DTOs",
        "Manual mapping methods in Mapper class",
        "MapStruct for zero-boilerplate mapping"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Task Management REST API",
        "Full CRUD with validation",
        "Global exception handling",
        "Swagger UI documentation"
      ]
    }
  ],
  "concepts": [
    {
      "title": "RESTful API Design Best Practices",
      "icon": "🌐",
      "desc": "A well-designed REST API is intuitive, consistent, and follows HTTP semantics. Use nouns for resources, HTTP methods for actions, proper status codes, and consistent response structures.",
      "keyPoints": [
        "Resource naming: plural nouns — /users /orders /products (NOT /getUsers)",
        "Nested resources: /users/{userId}/orders for clear ownership",
        "Always return appropriate status codes — never 200 with error body",
        "201 Created must include Location header pointing to new resource",
        "Use query params for filtering/pagination: /products?category=electronics&page=0&size=20",
        "API versioning: /api/v1/users — version in URL (simplest approach)"
      ],
      "code": "@RestController\n@RequestMapping(\"/api/v1/users\")\npublic class UserController {\n    private final UserService userService;\n    public UserController(UserService userService) { this.userService = userService; }\n\n    @GetMapping\n    public ResponseEntity<Page<UserResponse>> getUsers(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size) {\n        return ResponseEntity.ok(userService.getUsers(page, size));\n    }\n\n    @PostMapping\n    public ResponseEntity<UserResponse> createUser(\n            @Valid @RequestBody CreateUserRequest request) {\n        UserResponse created = userService.create(request);\n        URI location = URI.create(\"/api/v1/users/\" + created.getId());\n        return ResponseEntity.created(location).body(created); // 201 + Location\n    }\n\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {\n        userService.delete(id);\n        return ResponseEntity.noContent().build(); // 204\n    }\n}"
    },
    {
      "title": "Global Exception Handling",
      "icon": "🛡️",
      "desc": "With @RestControllerAdvice, catch exceptions from anywhere in your application and return clean, consistent JSON error responses.",
      "keyPoints": [
        "Never leak internal stack traces to API clients",
        "Map domain exceptions to HTTP status codes in one place",
        "Use ProblemDetails (RFC 9457) for standard error format",
        "Log errors server-side with full context; send minimal info to client",
        "Validation errors: 400 Bad Request with field-level details"
      ],
      "code": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {\n        ProblemDetail pd = ProblemDetail.forStatusAndDetail(\n            HttpStatus.NOT_FOUND, ex.getMessage());\n        pd.setTitle(\"Resource Not Found\");\n        return pd;\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ProblemDetail handleValidation(MethodArgumentNotValidException ex) {\n        ProblemDetail pd = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);\n        pd.setTitle(\"Validation Failed\");\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getFieldErrors()\n          .forEach(fe -> errors.put(fe.getField(), fe.getDefaultMessage()));\n        pd.setProperty(\"errors\", errors);\n        return pd;\n    }\n}"
    }
  ],
  "projects": [
    {
      "title": "Task Management REST API",
      "icon": "✅",
      "difficulty": "intermediate",
      "desc": "A production-quality REST API for managing tasks and projects.",
      "features": [
        "Full CRUD for tasks and projects",
        "Nested resources: /projects/{id}/tasks",
        "Request validation with custom messages",
        "Global exception handling with ProblemDetails",
        "Pagination and filtering",
        "Swagger UI documentation",
        "Integration tests with @SpringBootTest"
      ],
      "tech": [
        "Spring Boot 3",
        "Spring MVC",
        "Bean Validation",
        "springdoc-openapi",
        "MapStruct"
      ],
      "goals": [
        "Production REST API patterns",
        "Validation and error handling",
        "API documentation"
      ]
    }
  ],
  "resources": [
    {
      "title": "Spring Web MVC Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "Official Spring MVC reference. Read Controllers and Exception Handling.",
      "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html"
    }
  ]
};

WEEKS['w12'] = {
  "id": "w12",
  "phase": 3,
  "number": 12,
  "title": "Database Design & JPA/Hibernate",
  "overview": "Almost every application needs persistent data. This week covers relational database design, SQL mastery, JPA/Hibernate for ORM, and Spring Data JPA for clean repository patterns.",
  "goals": [
    "Design normalized relational schemas",
    "Write complex SQL with JOINs and aggregates",
    "Map Java entities with JPA annotations",
    "Use Spring Data JPA repositories and projections"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Relational Database Design",
      "topics": [
        "Tables columns rows data types",
        "Primary keys foreign keys constraints",
        "1NF 2NF 3NF normalization",
        "Relationships: 1-to-1 1-to-many many-to-many (junction table)"
      ]
    },
    {
      "day": 2,
      "focus": "SQL Mastery",
      "topics": [
        "SELECT FROM WHERE ORDER BY LIMIT OFFSET",
        "INNER JOIN LEFT JOIN RIGHT JOIN with visual explanation",
        "GROUP BY + COUNT SUM AVG MIN MAX",
        "Subqueries CTEs (WITH clause) EXPLAIN ANALYZE"
      ]
    },
    {
      "day": 3,
      "focus": "JPA Entities",
      "topics": [
        "@Entity @Table @Id @GeneratedValue",
        "@Column: name nullable length unique",
        "@Temporal @Lob @Embedded @Embeddable",
        "Equals and hashCode for entities — use ID only"
      ]
    },
    {
      "day": 4,
      "focus": "JPA Relationships",
      "topics": [
        "@ManyToOne and @OneToMany — most common",
        "FetchType.LAZY vs EAGER — always LAZY for collections",
        "CascadeType choices — be careful with ALL",
        "Bidirectional relationships — set BOTH sides"
      ]
    },
    {
      "day": 5,
      "focus": "Spring Data JPA",
      "topics": [
        "JpaRepository<T, ID> — 30+ methods free",
        "Derived queries: findByEmailAndActive()",
        "@Query with JPQL and native SQL",
        "Pagination: Pageable Page<T> Slice<T>"
      ]
    },
    {
      "day": 6,
      "focus": "Hibernate Performance",
      "topics": [
        "N+1 query problem — most common JPA bug",
        "Fix: @EntityGraph or JOIN FETCH in @Query",
        "Database indexing strategy",
        "Flyway for database migration management"
      ]
    },
    {
      "day": 7,
      "focus": "E-Commerce Project",
      "topics": [
        "Design Users Products Orders OrderItems schema",
        "Complex queries with JPA",
        "Transaction management",
        "Flyway migrations"
      ]
    }
  ],
  "concepts": [
    {
      "title": "JPA Entity Mapping",
      "icon": "🗄️",
      "desc": "JPA maps Java objects to database tables. @Entity makes a class persistable, @Id marks the primary key, and relationship annotations define how tables relate.",
      "keyPoints": [
        "@GeneratedValue(strategy = IDENTITY): DB auto-increments the ID",
        "FetchType.LAZY (default for collections): load related entities only when accessed",
        "FetchType.EAGER: load immediately — avoid for collections (N+1 risk)",
        "CascadeType.ALL on @OneToMany means parent operations cascade to children",
        "Always use @OneToMany(mappedBy=\"parent\") on the non-owning side"
      ],
      "code": "@Entity\n@Table(name = \"users\")\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, length = 100)\n    private String name;\n\n    @Column(nullable = false, unique = true)\n    private String email;\n\n    @OneToMany(mappedBy = \"user\", cascade = CascadeType.ALL,\n               fetch = FetchType.LAZY, orphanRemoval = true)\n    private List<Order> orders = new ArrayList<>();\n\n    @CreatedDate\n    private LocalDateTime createdAt;\n\n    // Convenience method for bidirectional\n    public void addOrder(Order order) {\n        orders.add(order);\n        order.setUser(this);  // set BOTH sides!\n    }\n}"
    },
    {
      "title": "Spring Data JPA & N+1 Problem",
      "icon": "🔍",
      "desc": "Spring Data JPA lets you define queries by naming conventions. For complex queries or to avoid N+1, use @Query with JPQL and JOIN FETCH.",
      "keyPoints": [
        "N+1 problem: loading N orders causes N extra DB queries to load users",
        "Fix: JOIN FETCH in @Query or @EntityGraph",
        "Always paginate — never findAll() on large tables",
        "Projections return only specific columns — avoid over-fetching",
        "Native queries for complex SQL that JPQL cannot express"
      ],
      "code": "@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n\n    // Derived query\n    Optional<User> findByEmail(String email);\n    List<User> findByActiveOrderByNameAsc(boolean active);\n\n    // JOIN FETCH to prevent N+1\n    @Query(\"SELECT u FROM User u LEFT JOIN FETCH u.orders WHERE u.id = :id\")\n    Optional<User> findByIdWithOrders(@Param(\"id\") Long id);\n\n    // Pagination\n    Page<User> findByActive(boolean active, Pageable pageable);\n\n    // Interface projection\n    List<UserSummary> findAllProjectedBy();\n}\n\n// Usage\nPageable page = PageRequest.of(0, 20, Sort.by(\"name\").ascending());\nPage<User> result = userRepo.findByActive(true, page);\nresult.getContent();\nresult.getTotalElements();\nresult.hasNext();"
    }
  ],
  "projects": [
    {
      "title": "E-Commerce Backend",
      "icon": "🛒",
      "difficulty": "advanced",
      "desc": "Full e-commerce backend with complex database schema and queries.",
      "features": [
        "Users Products Categories Orders OrderItems Addresses",
        "JPA entity mapping with all relationship types",
        "Flyway migrations",
        "Complex queries: top products revenue by category",
        "Transaction management for order processing",
        "Pagination for product listing",
        "Optimistic locking with @Version"
      ],
      "tech": [
        "Spring Boot",
        "JPA/Hibernate",
        "PostgreSQL",
        "Flyway"
      ],
      "goals": [
        "Real-world schema design",
        "JPA relationship mastery",
        "Transaction management"
      ]
    }
  ],
  "resources": [
    {
      "title": "Java Persistence with Hibernate",
      "type": "book",
      "icon": "📖",
      "desc": "Bauer King Gregory. The definitive JPA/Hibernate reference.",
      "url": "https://www.manning.com/books/java-persistence-with-hibernate-third-edition"
    },
    {
      "title": "PostgreSQL Tutorial",
      "type": "docs",
      "icon": "📚",
      "desc": "Free comprehensive PostgreSQL guide. Read through JOINs and indexes.",
      "url": "https://www.postgresqltutorial.com/"
    },
    {
      "title": "Vlad Mihalcea Blog",
      "type": "article",
      "icon": "📝",
      "desc": "Best resource for JPA/Hibernate performance. vladmihalcea.com",
      "url": "https://vladmihalcea.com/"
    }
  ]
};

WEEKS['w13'] = {
  "id": "w13",
  "phase": 3,
  "number": 13,
  "title": "Spring Security & Authentication",
  "overview": "Security is not optional. This week covers JWT authentication, Spring Security configuration, role-based access control, and OAuth2 social login. You will build a complete auth system that is production-ready.",
  "goals": [
    "Configure Spring Security filter chain",
    "Implement JWT access + refresh token authentication",
    "Set up role-based authorization",
    "Add Google OAuth2 social login"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Security Fundamentals",
      "topics": [
        "Authentication vs Authorization",
        "OWASP Top 10: SQL injection XSS CSRF broken auth",
        "HTTPS/TLS — why it is mandatory",
        "Password hashing with BCrypt (why not MD5/SHA1)"
      ]
    },
    {
      "day": 2,
      "focus": "Spring Security Architecture",
      "topics": [
        "SecurityFilterChain — the filter pipeline",
        "AuthenticationManager and AuthenticationProvider",
        "UserDetailsService — load user from database",
        "SecurityContextHolder — thread-local security context"
      ]
    },
    {
      "day": 3,
      "focus": "JWT Deep Dive",
      "topics": [
        "JWT structure: header.payload.signature (Base64)",
        "Claims: sub iat exp roles",
        "HS256 (shared secret) vs RS256 (key pair)",
        "Access tokens (15min) vs Refresh tokens (7 days)"
      ]
    },
    {
      "day": 4,
      "focus": "Implementing JWT Auth",
      "topics": [
        "JwtAuthenticationFilter extends OncePerRequestFilter",
        "JwtService for generate/validate tokens",
        "AuthController: /auth/register /auth/login /auth/refresh",
        "SecurityFilterChain: permitAll vs authenticated"
      ]
    },
    {
      "day": 5,
      "focus": "Authorization",
      "topics": [
        "@PreAuthorize(\"hasRole('ADMIN')\")",
        "@PostAuthorize for return object checks",
        "@EnableMethodSecurity annotation",
        "Custom permission evaluators"
      ]
    },
    {
      "day": 6,
      "focus": "OAuth2 Social Login",
      "topics": [
        "OAuth2 authorization code flow",
        "Spring Security OAuth2 Client",
        "Google and GitHub social login",
        "Handling new OAuth2 users (create account on first login)"
      ]
    },
    {
      "day": 7,
      "focus": "Security Testing",
      "topics": [
        "@WithMockUser for controller tests",
        "Test 401 and 403 responses",
        "Integration tests with auth headers",
        "Complete auth service"
      ]
    }
  ],
  "concepts": [
    {
      "title": "JWT Authentication Flow",
      "icon": "🔐",
      "desc": "JWT is a self-contained token that proves identity without hitting the database on every request. The server signs the token; any server with the secret can verify it. Stateless and scalable.",
      "keyPoints": [
        "Header: {\"alg\":\"HS256\",\"typ\":\"JWT\"}",
        "Payload: claims (sub=userId roles exp=expiry)",
        "Signature: HMAC-SHA256(base64(header)+\".\"+base64(payload), secret)",
        "Client sends: Authorization: Bearer <token>",
        "Server verifies signature and checks expiry — no DB lookup needed",
        "Refresh token flow: access expires → use refresh to get new access token"
      ],
      "code": "@Service\npublic class JwtService {\n    @Value(\"${jwt.secret}\") private String secret;\n    private static final long ACCESS_EXPIRY = 15 * 60 * 1000; // 15 min\n\n    public String generateToken(UserDetails user) {\n        return Jwts.builder()\n            .subject(user.getUsername())\n            .claim(\"roles\", user.getAuthorities().stream()\n                .map(GrantedAuthority::getAuthority).toList())\n            .issuedAt(new Date())\n            .expiration(new Date(System.currentTimeMillis() + ACCESS_EXPIRY))\n            .signWith(getSigningKey())\n            .compact();\n    }\n\n    public String extractUsername(String token) {\n        return Jwts.parser().verifyWith(getSigningKey()).build()\n            .parseSignedClaims(token).getPayload().getSubject();\n    }\n\n    private SecretKey getSigningKey() {\n        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));\n    }\n}"
    }
  ],
  "projects": [
    {
      "title": "Complete Authentication Service",
      "icon": "🔑",
      "difficulty": "advanced",
      "desc": "Production-ready authentication and authorization system.",
      "features": [
        "User registration with email verification",
        "JWT login with access + refresh tokens",
        "Google OAuth2 social login",
        "Role-based access: USER MODERATOR ADMIN",
        "Password reset via email link",
        "Account lockout after 5 failed attempts",
        "Rate limiting on auth endpoints"
      ],
      "tech": [
        "Spring Security 6",
        "JWT (jjwt)",
        "Spring OAuth2 Client",
        "BCrypt",
        "Spring Mail"
      ],
      "goals": [
        "Complete security implementation",
        "OAuth2 social login",
        "Security testing"
      ]
    }
  ],
  "resources": [
    {
      "title": "Spring Security in Action",
      "type": "book",
      "icon": "📖",
      "desc": "Laurentiu Spilca. Best practical Spring Security book.",
      "url": "https://www.manning.com/books/spring-security-in-action-second-edition"
    },
    {
      "title": "OWASP Top 10",
      "type": "article",
      "icon": "📝",
      "desc": "The 10 most critical web security risks. Know all of them.",
      "url": "https://owasp.org/www-project-top-ten/"
    }
  ]
};

WEEKS['w14'] = {
  "id": "w14",
  "phase": 3,
  "number": 14,
  "title": "Microservices, Messaging & Caching",
  "overview": "Enterprise systems are built as microservices. This week: service decomposition, Docker, async messaging with RabbitMQ/Kafka, Redis caching, and Spring Cloud for distributed systems.",
  "goals": [
    "Decompose a monolith into microservices",
    "Implement async communication with RabbitMQ",
    "Add Redis caching to eliminate repeated DB calls",
    "Containerize services with Docker"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Microservices Architecture",
      "topics": [
        "Monolith vs microservices: when to choose",
        "Microservice boundaries: DDD basics",
        "Each service owns its data — no shared databases",
        "Synchronous (REST) vs asynchronous (messages) communication"
      ]
    },
    {
      "day": 2,
      "focus": "Docker for Backend",
      "topics": [
        "Images containers volumes networks",
        "Dockerfile for Spring Boot: multi-stage build",
        "docker-compose for local development",
        "Container networking: service discovery by name"
      ]
    },
    {
      "day": 3,
      "focus": "Message Queues — RabbitMQ",
      "topics": [
        "Why async: decouple services absorb load spikes",
        "AMQP: exchanges queues bindings routing keys",
        "Spring AMQP: @RabbitListener RabbitTemplate",
        "Dead letter queues and message acknowledgement"
      ]
    },
    {
      "day": 4,
      "focus": "Apache Kafka",
      "topics": [
        "Kafka: topics partitions consumer groups offsets",
        "Kafka vs RabbitMQ: when to use each",
        "Spring Kafka: @KafkaListener KafkaTemplate",
        "Exactly-once vs at-least-once delivery"
      ]
    },
    {
      "day": 5,
      "focus": "Redis Caching",
      "topics": [
        "Redis data structures: String Hash List Set Sorted Set",
        "@Cacheable @CacheEvict @CachePut",
        "Cache-aside pattern implementation",
        "TTL eviction policies cache stampede"
      ]
    },
    {
      "day": 6,
      "focus": "Spring Cloud",
      "topics": [
        "API Gateway pattern: single entry point",
        "Spring Cloud Gateway: routes filters rate limiting",
        "Eureka Service Discovery",
        "Feign client for declarative REST calls"
      ]
    },
    {
      "day": 7,
      "focus": "Microservices Project",
      "topics": [
        "Product Order User services",
        "API Gateway routing",
        "RabbitMQ for order events",
        "Redis caching for catalog",
        "docker-compose for full system"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Event-Driven Microservices with RabbitMQ",
      "icon": "🐇",
      "desc": "Async messaging decouples microservices. Order Service publishes \"order.placed\" to RabbitMQ; Email Service and Inventory Service consume it independently.",
      "keyPoints": [
        "Publisher sends to Exchange; Exchange routes to Queues",
        "Consumer listens on Queue — completely independent of publisher",
        "Dead Letter Exchange: failed messages go here for inspection/retry",
        "ACK = processed; NACK = failed (retry or DLQ)",
        "Idempotent consumers: handle duplicate messages safely"
      ],
      "code": "// Publisher (Order Service)\n@Service\npublic class OrderEventPublisher {\n    private final RabbitTemplate rabbitTemplate;\n\n    public void publishOrderPlaced(Order order) {\n        OrderPlacedEvent event = new OrderPlacedEvent(\n            order.getId(), order.getUserId(), order.getTotal());\n        rabbitTemplate.convertAndSend(\"orders.exchange\", \"order.placed\", event);\n    }\n}\n\n// Consumer (Email Service — separate microservice)\n@Service\npublic class OrderConfirmationListener {\n\n    @RabbitListener(queues = \"email.order.placed\")\n    public void handle(OrderPlacedEvent event) {\n        emailService.sendConfirmation(event.getUserId(), event.getOrderId());\n        // throws → message goes to dead letter queue\n    }\n}"
    }
  ],
  "projects": [
    {
      "title": "E-Commerce Microservices Platform",
      "icon": "🏪",
      "difficulty": "advanced",
      "desc": "A full microservices system with 3 services, messaging, and caching.",
      "features": [
        "Product Service: catalog inventory Redis caching",
        "Order Service: create orders publish RabbitMQ events",
        "User Service: JWT authentication",
        "API Gateway: Spring Cloud Gateway",
        "docker-compose: all services + PostgreSQL + Redis + RabbitMQ",
        "Feign client between services"
      ],
      "tech": [
        "Spring Boot 3",
        "Spring Cloud Gateway",
        "RabbitMQ",
        "Redis",
        "Docker",
        "Feign"
      ],
      "goals": [
        "Microservices communication patterns",
        "Event-driven architecture",
        "Production docker setup"
      ]
    }
  ],
  "resources": [
    {
      "title": "Microservices Patterns",
      "type": "book",
      "icon": "📖",
      "desc": "Chris Richardson. The definitive microservices patterns book.",
      "url": "https://microservices.io/book"
    },
    {
      "title": "Docker Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "Docker Getting Started guide. Master Dockerfile and compose.",
      "url": "https://docs.docker.com/"
    }
  ]
};

WEEKS['w15'] = {
  "id": "w15",
  "phase": 4,
  "number": 15,
  "title": "HTML & CSS Fundamentals",
  "overview": "The web is built on HTML and CSS. Start from zero and build a strong foundation. Semantic HTML makes your sites accessible and SEO-friendly. CSS controls every visual aspect. By end of week build a complete HTML/CSS website.",
  "goals": [
    "Write semantic HTML5 correctly",
    "Understand the CSS box model completely",
    "Style text layout and components",
    "Build a multi-page website without JavaScript"
  ],
  "days": [
    {
      "day": 1,
      "focus": "HTML Structure",
      "topics": [
        "DOCTYPE html head body — the skeleton",
        "Semantic tags: header nav main section article aside footer",
        "Heading hierarchy h1-h6 — only one h1 per page",
        "Paragraphs links images lists"
      ]
    },
    {
      "day": 2,
      "focus": "HTML Forms & Media",
      "topics": [
        "form element: action method",
        "Input types: text email password number date checkbox radio file",
        "Labels fieldsets legends — accessibility",
        "Video audio iframe srcset for responsive images"
      ]
    },
    {
      "day": 3,
      "focus": "CSS Basics",
      "topics": [
        "Selectors: element .class #id attribute :pseudo ::pseudo-element",
        "Specificity: ID > Class > Element",
        "Cascade: order matters when specificity is equal",
        "Inheritance: some properties inherit others do not"
      ]
    },
    {
      "day": 4,
      "focus": "Box Model",
      "topics": [
        "content → padding → border → margin",
        "box-sizing: border-box (use always!)",
        "Margin collapsing — the confusing one",
        "display: block inline inline-block none"
      ]
    },
    {
      "day": 5,
      "focus": "Typography & Colors",
      "topics": [
        "font-family size weight line-height letter-spacing",
        "Google Fonts integration",
        "Color: hex rgb hsl and when to use each",
        "CSS Custom Properties: --color: red; var(--color)"
      ]
    },
    {
      "day": 6,
      "focus": "Positioning",
      "topics": [
        "position: static relative absolute fixed sticky",
        "Stacking context and z-index",
        "Common patterns: sticky header modal overlay tooltip",
        "overflow: hidden scroll auto visible"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Personal portfolio — HTML/CSS only",
        "3 pages: home projects contact",
        "Semantic HTML throughout",
        "Professional typography and color scheme"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Semantic HTML5",
      "icon": "🌐",
      "desc": "Semantic HTML means using elements that describe their meaning. <header> <nav> <main> <article> tell browsers, screen readers, and search engines what your content IS, not just how it looks.",
      "keyPoints": [
        "<header>: intro content logo nav — not just the page header",
        "<nav>: primary navigation links",
        "<main>: the main content — only ONE per page",
        "<article>: self-contained content (blog post product card)",
        "<section>: thematically grouped content with a heading",
        "<aside>: tangentially related content (sidebar callout)",
        "<footer>: closing content for section or page"
      ],
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Alice's developer portfolio\">\n  <title>Alice Smith — Full Stack Developer</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <nav aria-label=\"Main navigation\">\n      <a href=\"/\" class=\"brand\">Alice Smith</a>\n      <ul role=\"list\">\n        <li><a href=\"/about\">About</a></li>\n        <li><a href=\"/projects\">Projects</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section aria-labelledby=\"hero\">\n      <h1 id=\"hero\">Full Stack Developer</h1>\n      <p>Building scalable apps with Java and React.</p>\n    </section>\n  </main>\n  <footer><p>2026 Alice Smith</p></footer>\n</body>\n</html>"
    },
    {
      "title": "CSS Box Model & Display",
      "icon": "📦",
      "desc": "Every element is a rectangular box with content padding border margin. The most common mistake: forgetting box-sizing: border-box, which makes width include padding and border.",
      "keyPoints": [
        "content-box (default): width = content only — add padding/border → element gets bigger",
        "border-box: width includes content + padding + border — USE THIS ALWAYS",
        "Margin collapsing: vertical margins of adjacent blocks combine not add",
        "display:block → full width new line; display:inline → flows with text",
        "display:none removes from layout; visibility:hidden hides but keeps space"
      ],
      "code": "/* Global box-sizing reset — add to EVERY project */\n*, *::before, *::after { box-sizing: border-box; }\n\n.card {\n  width: 300px;      /* total width including padding+border */\n  padding: 16px;\n  border: 2px solid #ccc;\n  margin: 16px auto; /* auto left/right = center block */\n}\n\n/* CSS Custom Properties — use everywhere! */\n:root {\n  --color-primary: #0969da;\n  --space-4: 1rem;\n  --radius: 8px;\n}\n.btn {\n  background: var(--color-primary);\n  padding: var(--space-4);\n  border-radius: var(--radius);\n}\n\n/* Centering patterns */\n.center-text  { text-align: center; }\n.center-block { margin: 0 auto; max-width: 960px; }\n.center-flex  { display:flex; justify-content:center; align-items:center; }"
    }
  ],
  "projects": [
    {
      "title": "Personal Developer Portfolio",
      "icon": "💼",
      "difficulty": "beginner",
      "desc": "A professional portfolio site built with pure HTML and CSS.",
      "features": [
        "Home: hero section skills featured projects",
        "Projects: project cards with descriptions and links",
        "Contact: form with validation attributes",
        "CSS variables for consistent theme",
        "Multiple font weights and sizes",
        "Print-friendly stylesheet"
      ],
      "tech": [
        "HTML5",
        "CSS3",
        "Google Fonts",
        "CSS Custom Properties"
      ],
      "goals": [
        "Semantic HTML practice",
        "Box model mastery",
        "Real portfolio you will actually use"
      ]
    }
  ],
  "resources": [
    {
      "title": "MDN Web Docs",
      "type": "docs",
      "icon": "📚",
      "desc": "The definitive HTML/CSS reference. developer.mozilla.org",
      "url": "https://developer.mozilla.org/"
    },
    {
      "title": "HTML and CSS by Jon Duckett",
      "type": "book",
      "icon": "📖",
      "desc": "The most beautiful visual HTML/CSS book ever made.",
      "url": "https://www.htmlandcssbook.com/"
    }
  ]
};

WEEKS['w16'] = {
  "id": "w16",
  "phase": 4,
  "number": 16,
  "title": "Advanced CSS — Flexbox, Grid & Responsive Design",
  "overview": "Modern CSS layout is built on Flexbox and Grid. These replace float-based hacks and let you build any layout. Combine with media queries and animations for beautiful responsive interfaces.",
  "goals": [
    "Master Flexbox for 1D layouts",
    "Master CSS Grid for 2D layouts",
    "Build fully responsive designs mobile-first",
    "Create smooth CSS animations and transitions"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Flexbox Complete",
      "topics": [
        "display:flex — creates a flex container",
        "flex-direction: row column row-reverse column-reverse",
        "justify-content: space-between center flex-end (main axis)",
        "align-items: center stretch flex-start (cross axis)"
      ]
    },
    {
      "day": 2,
      "focus": "Flexbox Item Properties",
      "topics": [
        "flex-grow: how much extra space does item take",
        "flex-shrink: how much does item shrink",
        "flex-basis: initial size before growing/shrinking",
        "flex: 1 = grow:1 shrink:1 basis:0 (the magic shorthand)"
      ]
    },
    {
      "day": 3,
      "focus": "CSS Grid Basics",
      "topics": [
        "display:grid — creates a grid container",
        "grid-template-columns: 200px 1fr 2fr",
        "grid-template-rows: define rows",
        "gap: space between cells; fr unit for equal fractions"
      ]
    },
    {
      "day": 4,
      "focus": "CSS Grid Advanced",
      "topics": [
        "grid-column: 1/3 — span across columns",
        "grid-template-areas: ASCII art layout!",
        "minmax(200px, 1fr) — responsive columns",
        "auto-fill vs auto-fit: fill available space intelligently"
      ]
    },
    {
      "day": 5,
      "focus": "Responsive Design",
      "topics": [
        "Mobile-first: design small screen first",
        "Media queries: @media (min-width: 768px)",
        "Breakpoints: 480 768 1024 1280px",
        "clamp(1rem, 2.5vw, 2rem) for fluid typography"
      ]
    },
    {
      "day": 6,
      "focus": "Animations & Transitions",
      "topics": [
        "transition: property duration timing-function",
        "transform: translate rotate scale skew",
        "@keyframes for complex animations",
        "prefers-reduced-motion for accessibility"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Responsive admin dashboard",
        "CSS Grid page layout Flexbox components",
        "Dark mode with CSS variables",
        "Animated card interactions"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Flexbox — Complete Mental Model",
      "icon": "🔤",
      "desc": "Flexbox is for 1D layouts — a row OR a column. Think of a flex container as a shelf. Items sit along the main axis; cross axis is perpendicular. Most navbar, card, and centering problems are solved with Flexbox.",
      "keyPoints": [
        "Container: display:flex flex-direction justify-content align-items flex-wrap",
        "Items: flex-grow flex-shrink flex-basis align-self order",
        "justify-content aligns on MAIN axis; align-items aligns on CROSS axis",
        "flex:1 = equal-width items that fill available space",
        "To center anything: display:flex + justify-content:center + align-items:center"
      ],
      "code": "/* NAVBAR — classic flexbox */\nnav {\n  display: flex;\n  align-items: center;         /* vertically center */\n  justify-content: space-between; /* logo left links right */\n  padding: 0 24px;\n  height: 60px;\n}\n\n/* RESPONSIVE CARDS */\n.card-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card { flex: 1 1 280px; } /* min 280px grow equally */\n\n/* PERFECT CENTERING */\n.hero {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n/* SIDEBAR + CONTENT */\n.layout { display: flex; }\n.sidebar { width: 240px; flex-shrink: 0; }\n.content { flex: 1; min-width: 0; } /* min-width:0 prevents overflow */"
    },
    {
      "title": "CSS Grid — Complete Mental Model",
      "icon": "▦",
      "desc": "Grid is for 2D layouts — rows AND columns simultaneously. Use Grid for page-level layouts; Flexbox for component-level. They complement each other.",
      "keyPoints": [
        "Explicit grid: defined by grid-template-columns/rows",
        "fr unit distributes remaining space proportionally",
        "grid-template-areas: visual ASCII layout — incredibly readable",
        "auto-fill + minmax: responsive grid with ZERO media queries!",
        "grid-column: 1/3 spans item across 2 columns"
      ],
      "code": "/* HOLY GRAIL LAYOUT */\n.page {\n  display: grid;\n  grid-template-areas:\n    \"header  header  header\"\n    \"sidebar content ads\"\n    \"footer  footer  footer\";\n  grid-template-columns: 200px 1fr 160px;\n  grid-template-rows: 60px 1fr 80px;\n  min-height: 100vh;\n}\nheader  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\nmain    { grid-area: content; }\nfooter  { grid-area: footer; }\n\n/* RESPONSIVE CARD GRID — no media queries! */\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 20px;\n}\n/* 1 col mobile → 2-4 cols desktop — automatic! */"
    }
  ],
  "projects": [
    {
      "title": "Responsive Dashboard UI",
      "icon": "📊",
      "difficulty": "intermediate",
      "desc": "A full admin dashboard with complex layouts and responsive design.",
      "features": [
        "CSS Grid page layout (sidebar + header + main)",
        "Flexbox component internals",
        "Responsive: collapses to mobile at 768px",
        "Dark mode with CSS variable swapping",
        "CSS-only dropdown menus",
        "Card hover animations"
      ],
      "tech": [
        "CSS Grid",
        "Flexbox",
        "CSS Variables",
        "Media Queries",
        "CSS Animations"
      ],
      "goals": [
        "Master both Grid and Flexbox",
        "Real portfolio piece",
        "Responsive design workflow"
      ]
    }
  ],
  "resources": [
    {
      "title": "CSS-Tricks Flexbox Guide",
      "type": "article",
      "icon": "📝",
      "desc": "The best Flexbox visual reference. Bookmark it forever.",
      "url": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    },
    {
      "title": "CSS-Tricks Grid Guide",
      "type": "article",
      "icon": "📝",
      "desc": "The best Grid visual reference.",
      "url": "https://css-tricks.com/snippets/css/complete-guide-grid/"
    },
    {
      "title": "Every Layout",
      "type": "book",
      "icon": "📖",
      "desc": "Heydon Pickering & Andy Bell. Algorithmic CSS layouts.",
      "url": "https://every-layout.dev/"
    }
  ]
};

WEEKS['w17'] = {
  "id": "w17",
  "phase": 4,
  "number": 17,
  "title": "JavaScript Fundamentals",
  "overview": "JavaScript brings web pages to life. Start from zero — understand types, functions, arrays, objects, and DOM manipulation. By end of week build interactive applications that respond to user actions.",
  "goals": [
    "Understand JavaScript types and coercion",
    "Manipulate the DOM to create dynamic pages",
    "Handle events with proper delegation",
    "Build 3 interactive applications"
  ],
  "days": [
    {
      "day": 1,
      "focus": "JS Runtime & Variables",
      "topics": [
        "V8 engine single thread call stack",
        "var vs let vs const — always prefer const then let",
        "Primitive types: string number boolean null undefined symbol bigint",
        "typeof truthy/falsy type coercion"
      ]
    },
    {
      "day": 2,
      "focus": "Functions",
      "topics": [
        "Function declarations vs expressions",
        "Arrow functions: () => value vs () => { return value; }",
        "Default parameters rest (...args) spread (...array)",
        "Scope: global function block (let/const)"
      ]
    },
    {
      "day": 3,
      "focus": "Arrays & Objects",
      "topics": [
        "Array methods: map filter reduce forEach find findIndex some every flat",
        "Object creation property access destructuring",
        "Spread in objects: {...defaults, ...overrides}",
        "Optional chaining: user?.address?.city"
      ]
    },
    {
      "day": 4,
      "focus": "DOM Manipulation",
      "topics": [
        "querySelector() and querySelectorAll()",
        "textContent innerHTML (XSS risk!) value",
        "createElement append prepend insertAdjacentHTML",
        "classList.add/remove/toggle style dataset"
      ]
    },
    {
      "day": 5,
      "focus": "Events",
      "topics": [
        "addEventListener removeEventListener",
        "Event object: target currentTarget key",
        "Event delegation — one listener for many elements",
        "Bubbling and capture phase; preventDefault() stopPropagation()"
      ]
    },
    {
      "day": 6,
      "focus": "Browser APIs & Storage",
      "topics": [
        "localStorage and sessionStorage: setItem getItem removeItem",
        "JSON.stringify and JSON.parse",
        "Fetch API basics (deep dive next week)",
        "Geolocation clipboard APIs"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Todo list with localStorage persistence",
        "Quiz app with timer and scoring",
        "Real-time character counter with progress bar",
        "Calculator"
      ]
    }
  ],
  "concepts": [
    {
      "title": "JavaScript Types & Coercion",
      "icon": "🔢",
      "desc": "JavaScript has 7 primitive types and objects. Type coercion (automatic type conversion) is the source of many bugs. Use === always.",
      "keyPoints": [
        "Primitives: string number boolean null undefined symbol bigint",
        "\"3\" + 3 = \"33\" (string concatenation wins)",
        "\"3\" - 3 = 0 (arithmetic converts to number)",
        "null == undefined is true (loose); null === undefined is false",
        "Falsy: false 0 \"\" null undefined NaN — everything else is truthy",
        "typeof null === \"object\" — a 27-year-old JavaScript bug"
      ],
      "code": "// Type coercion\nconsole.log(\"3\" + 3);    // \"33\" — concat\nconsole.log(\"3\" - 3);    // 0 — numeric\nconsole.log([] + []);    // \"\" — both convert to \"\"\n\n// Always use === (strict equality)\nconsole.log(0 == false);   // true  (loose)\nconsole.log(0 === false);  // false (strict)\n\n// Truthy/falsy\nif (\"0\") console.log(\"truthy\"); // runs! \"0\" is truthy\nif (0)  console.log(\"truthy\");  // does NOT run — 0 is falsy\n\n// Modern null handling\nconst user = null;\nconst name = user?.profile?.name ?? \"Anonymous\"; // safe access + default\nconst list = null ?? [];   // [] — nullish coalescing\nconst val  = 0 ?? \"default\"; // 0 — only null/undefined triggers ??"
    },
    {
      "title": "DOM Manipulation & Events",
      "icon": "🖱️",
      "desc": "The DOM is a tree representation of HTML that JavaScript can modify. Every element is a node. Add remove modify elements dynamically.",
      "keyPoints": [
        "querySelector returns FIRST match; querySelectorAll returns ALL (NodeList)",
        "innerHTML parses HTML — XSS risk if inserting user content; use textContent for text",
        "Event delegation: one listener on parent check event.target for which child clicked",
        "event.preventDefault(): stop form submission link navigation etc",
        "Debounce: prevent event handlers from firing too frequently"
      ],
      "code": "// DOM selection and creation\nconst btn = document.querySelector(\"#submit-btn\");\nconst items = document.querySelectorAll(\".list-item\");\n\nfunction addItem(text) {\n    const li = document.createElement(\"li\");\n    li.textContent = text;  // safe — no XSS\n    li.classList.add(\"todo-item\");\n    document.querySelector(\"#list\").append(li);\n}\n\n// Event delegation — efficient for dynamic lists\ndocument.querySelector(\"#todo-list\").addEventListener(\"click\", (e) => {\n    const item = e.target.closest(\".todo-item\");\n    if (!item) return;\n    if (e.target.matches(\".delete-btn\")) item.remove();\n    if (e.target.matches(\".complete-btn\")) item.classList.toggle(\"completed\");\n});\n\n// localStorage with JSON\nconst save = (key, data) => localStorage.setItem(key, JSON.stringify(data));\nconst load = (key) => JSON.parse(localStorage.getItem(key) ?? \"null\");"
    }
  ],
  "projects": [
    {
      "title": "Interactive Todo App",
      "icon": "✅",
      "difficulty": "beginner",
      "desc": "Complete todo app with filtering and persistence.",
      "features": [
        "Add complete delete tasks",
        "Filter: All Active Completed",
        "LocalStorage persistence across refreshes",
        "Item count display",
        "Clear completed button"
      ],
      "tech": [
        "Vanilla JavaScript",
        "DOM API",
        "localStorage"
      ],
      "goals": [
        "DOM manipulation mastery",
        "Event delegation",
        "State management without frameworks"
      ]
    }
  ],
  "resources": [
    {
      "title": "Eloquent JavaScript (free online)",
      "type": "book",
      "icon": "📖",
      "desc": "Marijn Haverbeke. Best free JS book. Chapters 1-6.",
      "url": "https://eloquentjavascript.net/"
    },
    {
      "title": "javascript.info",
      "type": "docs",
      "icon": "📚",
      "desc": "Most comprehensive modern JavaScript tutorial. Bookmark immediately.",
      "url": "https://javascript.info"
    }
  ]
};

WEEKS['w18'] = {
  "id": "w18",
  "phase": 4,
  "number": 18,
  "title": "Advanced JavaScript",
  "overview": "Go deep into closures, prototypes, async/await, the event loop, and ES6+ syntax. These concepts separate junior from senior JavaScript developers.",
  "goals": [
    "Understand closures and use them correctly",
    "Explain the event loop with confidence",
    "Write clean async code with async/await",
    "Use all ES6+ features fluently"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Closures & Scope",
      "topics": [
        "Lexical scoping: functions remember where they were DEFINED",
        "Closure: function + its outer scope reference",
        "Use cases: data privacy function factories memoization",
        "Common closure bug: var in loops (use let or IIFE)"
      ]
    },
    {
      "day": 2,
      "focus": "Prototypes & Classes",
      "topics": [
        "Prototypal inheritance: __proto__ chain lookup",
        "Object.create(proto) — explicit prototype setting",
        "ES6 class: syntactic sugar over prototypes",
        "class constructor extends super instanceof"
      ]
    },
    {
      "day": 3,
      "focus": "this Keyword",
      "topics": [
        "this in regular functions vs arrow functions",
        "Method context: how this is lost in callbacks",
        "Explicit binding: call() apply() bind()",
        "Arrow functions use lexical this from enclosing scope"
      ]
    },
    {
      "day": 4,
      "focus": "Promises",
      "topics": [
        "Callback hell — why promises exist",
        "Promise states: pending fulfilled rejected",
        "then() catch() finally() chaining",
        "Promise.all() allSettled() race() any()"
      ]
    },
    {
      "day": 5,
      "focus": "Async/Await & Event Loop",
      "topics": [
        "async function always returns a Promise",
        "await suspends current function (not the thread!)",
        "Error handling: try/catch with await",
        "Event loop: call stack microtask queue macrotask queue"
      ]
    },
    {
      "day": 6,
      "focus": "ES6+ Features & Modules",
      "topics": [
        "Destructuring: arrays and objects with defaults and renaming",
        "Template literals tagged template literals",
        "Symbol WeakMap WeakSet Proxy Reflect",
        "ES Modules: import/export named vs default; dynamic import()"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Weather app using Fetch + async/await",
        "Debounced search with closures",
        "GitHub profile finder",
        "Promise.all() for parallel fetches"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Closures",
      "icon": "🔒",
      "desc": "A closure is when a function retains access to variables from its outer scope even after the outer function has returned. One of JavaScript's most powerful features.",
      "keyPoints": [
        "Every function in JS is a closure — it remembers where it was created",
        "Closures enable data privacy: variables inside not accessible outside",
        "Function factories: create customized functions programmatically",
        "Memoization: cache function results using closure over a Map",
        "Module pattern: expose public API hide private state"
      ],
      "code": "// Data privacy with closures\nfunction createCounter(initial = 0) {\n    let count = initial;  // private!\n    return {\n        increment: () => ++count,\n        decrement: () => --count,\n        value: () => count\n    };\n}\nconst c = createCounter(10);\nc.increment();  // 11\nc.value();      // 11\n// c.count      // undefined — private!\n\n// Function factory\nfunction multiplier(factor) {\n    return (n) => n * factor;  // closes over factor\n}\nconst double = multiplier(2);\nconst triple = multiplier(3);\nconsole.log(double(5));  // 10\nconsole.log(triple(5));  // 15\n\n// Memoization\nfunction memoize(fn) {\n    const cache = new Map();\n    return (...args) => {\n        const key = JSON.stringify(args);\n        if (cache.has(key)) return cache.get(key);\n        const result = fn(...args);\n        cache.set(key, result);\n        return result;\n    };\n}"
    },
    {
      "title": "The Event Loop",
      "icon": "🔄",
      "desc": "JavaScript is single-threaded but non-blocking. The event loop handles async operations without freezing. Understanding it explains why certain code runs in unexpected order.",
      "keyPoints": [
        "Call Stack: where synchronous code executes (LIFO)",
        "Web APIs: setTimeout fetch DOM events — browser handles off-thread",
        "Microtask Queue: Promise .then() callbacks — HIGHER priority",
        "Macrotask Queue: setTimeout/setInterval callbacks",
        "Event loop: run all microtasks FIRST then one macrotask then repeat"
      ],
      "code": "console.log(\"1\");        // sync\n\nsetTimeout(() => console.log(\"2\"), 0);  // macrotask\n\nPromise.resolve()\n  .then(() => console.log(\"3\"));        // microtask\n\nconsole.log(\"4\");        // sync\n\n// Output: 1, 4, 3, 2\n// Sync first → Microtasks → Macrotasks\n\n// Async/await example\nasync function fetchData() {\n    console.log(\"A: starting\");           // sync\n    const res = await fetch(\"/api/data\"); // suspends — yields to event loop\n    console.log(\"B: got response\");       // after fetch resolves\n}\nfetchData();\nconsole.log(\"C: after calling\");          // runs BEFORE B!\n// Output: A, C, B"
    }
  ],
  "projects": [
    {
      "title": "Weather Dashboard",
      "icon": "🌤️",
      "difficulty": "intermediate",
      "desc": "Weather app using async/await and the OpenWeatherMap API.",
      "features": [
        "Search by city with debounced input",
        "Geolocation for current weather",
        "5-day forecast display",
        "Loading states and error handling",
        "Unit toggle Celsius/Fahrenheit"
      ],
      "tech": [
        "Fetch API",
        "Async/await",
        "OpenWeatherMap API",
        "Debouncing",
        "Geolocation API"
      ],
      "goals": [
        "Real API consumption",
        "Async error handling",
        "Debouncing pattern"
      ]
    }
  ],
  "resources": [
    {
      "title": "You Don't Know JS (free on GitHub)",
      "type": "book",
      "icon": "📖",
      "desc": "Kyle Simpson. Read 'Scope & Closures' and 'Async & Performance'.",
      "url": "https://github.com/getify/You-Dont-Know-JS"
    },
    {
      "title": "Jake Archibald — Event Loop Talk",
      "type": "video",
      "icon": "🎬",
      "desc": "Best visual explanation of the event loop ever recorded.",
      "url": "https://www.youtube.com/watch?v=cCOL7MC4Pl0"
    }
  ]
};

WEEKS['w19'] = {
  "id": "w19",
  "phase": 4,
  "number": 19,
  "title": "React.js",
  "overview": "React is the dominant frontend library. Build declarative UIs with components, manage state with hooks, navigate with React Router, and fetch data with React Query.",
  "goals": [
    "Think in components and data flow",
    "Master all essential React hooks",
    "Manage state at all levels (local context global)",
    "Fetch data cleanly with React Query"
  ],
  "days": [
    {
      "day": 1,
      "focus": "React Fundamentals",
      "topics": [
        "Components: functions that return JSX",
        "JSX: HTML-in-JS compiles to React.createElement",
        "Props: passing data to child components",
        "Key prop for lists; conditional rendering"
      ]
    },
    {
      "day": 2,
      "focus": "useState & Events",
      "topics": [
        "useState: [value setValue] = useState(initial)",
        "Immutable state updates: spread for objects/arrays",
        "React re-renders when state changes",
        "Controlled vs uncontrolled form inputs"
      ]
    },
    {
      "day": 3,
      "focus": "useEffect & Lifecycle",
      "topics": [
        "useEffect(fn [deps]) — side effects",
        "Dependency array: [] [id] no array — what each means",
        "Cleanup function: return () => cleanup()",
        "Common patterns: fetch on mount subscriptions timers"
      ]
    },
    {
      "day": 4,
      "focus": "useContext & useRef",
      "topics": [
        "Context: avoid prop drilling for global data",
        "createContext Provider useContext pattern",
        "useRef: mutable value that does not trigger re-render",
        "DOM refs: ref={myRef} myRef.current.focus()"
      ]
    },
    {
      "day": 5,
      "focus": "useMemo useCallback & Patterns",
      "topics": [
        "useMemo: memoize expensive computation",
        "useCallback: memoize function reference",
        "React.memo: prevent unnecessary re-renders",
        "useReducer for complex state (action patterns)"
      ]
    },
    {
      "day": 6,
      "focus": "React Router & React Query",
      "topics": [
        "BrowserRouter Routes Route Link NavLink",
        "useNavigate useParams useLocation",
        "Protected routes pattern",
        "React Query: useQuery useMutation caching invalidation"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Full React e-commerce frontend",
        "Product listing with filters",
        "Shopping cart with context + useReducer",
        "API integration with React Query"
      ]
    }
  ],
  "concepts": [
    {
      "title": "React Hooks — Mental Model",
      "icon": "🎣",
      "desc": "Hooks let function components have state side effects and context. Rule: call hooks only at the top level, never inside conditions or loops.",
      "keyPoints": [
        "useState: local component state — triggers re-render when updated",
        "useEffect: sync with external system (API DOM subscriptions)",
        "useContext: consume context without prop drilling",
        "useRef: mutable value + DOM references — does NOT trigger re-render",
        "useMemo/useCallback: performance optimizations — profile first!",
        "useReducer: useState + reducer pattern for complex state"
      ],
      "code": "import { useState, useEffect } from 'react';\n\n// Custom hook — extract stateful logic\nfunction useFetch(url) {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n    const [error, setError] = useState(null);\n\n    useEffect(() => {\n        let cancelled = false;\n        fetch(url)\n            .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })\n            .then(json => { if (!cancelled) setData(json); })\n            .catch(err => { if (!cancelled) setError(err.message); })\n            .finally(() => { if (!cancelled) setLoading(false); });\n        return () => { cancelled = true; };  // cleanup\n    }, [url]);\n\n    return { data, loading, error };\n}\n\nfunction UserProfile({ userId }) {\n    const { data: user, loading, error } = useFetch(`/api/users/${userId}`);\n    if (loading) return <div className=\"skeleton\" />;\n    if (error)   return <div>Error: {error}</div>;\n    return <div><h2>{user.name}</h2><p>{user.email}</p></div>;\n}"
    },
    {
      "title": "State Management Patterns",
      "icon": "🗃️",
      "desc": "Choose state management based on complexity. Right tool for right job.",
      "keyPoints": [
        "Server state (API data) → React Query. Handles caching refetching loading.",
        "Global UI state (theme auth modals) → Context + useReducer",
        "Complex client state (cart wizard) → Zustand or Redux Toolkit",
        "Local component state → useState always",
        "Do not use Context for frequently-changing state — all consumers re-render"
      ],
      "code": "// Shopping cart with Context + useReducer\nconst CartContext = createContext(null);\n\nfunction cartReducer(state, action) {\n    switch (action.type) {\n        case 'ADD_ITEM': {\n            const existing = state.items.find(i => i.id === action.item.id);\n            if (existing) return { ...state, items: state.items.map(i =>\n                i.id === action.item.id ? {...i, qty: i.qty + 1} : i) };\n            return { ...state, items: [...state.items, {...action.item, qty: 1}] };\n        }\n        case 'REMOVE_ITEM':\n            return { ...state, items: state.items.filter(i => i.id !== action.id) };\n        case 'CLEAR': return { items: [] };\n        default: return state;\n    }\n}\n\nexport function CartProvider({ children }) {\n    const [state, dispatch] = useReducer(cartReducer, { items: [] });\n    return (\n        <CartContext.Provider value={{ ...state, dispatch }}>\n            {children}\n        </CartContext.Provider>\n    );\n}\nexport const useCart = () => useContext(CartContext);"
    }
  ],
  "projects": [
    {
      "title": "E-Commerce Frontend",
      "icon": "🛍️",
      "difficulty": "advanced",
      "desc": "A complete React e-commerce frontend with real API integration.",
      "features": [
        "Product listing with search filter sort",
        "Shopping cart (Context + useReducer)",
        "Checkout form with React Hook Form + Zod",
        "Authentication (login/register)",
        "React Query for all API calls",
        "React Router v6 with protected routes"
      ],
      "tech": [
        "React 18",
        "React Router v6",
        "React Query",
        "React Hook Form",
        "Zod"
      ],
      "goals": [
        "Real-world React architecture",
        "Forms and validation",
        "Protected routing"
      ]
    }
  ],
  "resources": [
    {
      "title": "React Official Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "react.dev — completely rewritten in 2023. Excellent interactive examples.",
      "url": "https://react.dev/"
    },
    {
      "title": "Josh Comeau's Blog",
      "type": "article",
      "icon": "📝",
      "desc": "Best React articles on the internet. joshwcomeau.com",
      "url": "https://www.joshwcomeau.com/"
    }
  ]
};

WEEKS['w20'] = {
  "id": "w20",
  "phase": 4,
  "number": 20,
  "title": "TypeScript & Next.js 14",
  "overview": "TypeScript adds static typing to JavaScript — catching errors at compile time. Next.js is the React meta-framework used by Vercel Netflix TikTok. Combine both for production-grade full-stack web apps.",
  "goals": [
    "Write TypeScript comfortably (no implicit any)",
    "Use Next.js 14 App Router with Server Components",
    "Understand SSR vs SSG vs ISR and when to use each",
    "Deploy a full-stack Next.js app"
  ],
  "days": [
    {
      "day": 1,
      "focus": "TypeScript Fundamentals",
      "topics": [
        "Type annotations: string number boolean null undefined",
        "Arrays: string[] Array<string>; Tuples: [string number]",
        "any unknown never void — and when each is appropriate",
        "Type inference — TypeScript figures out types automatically"
      ]
    },
    {
      "day": 2,
      "focus": "Interfaces & Types",
      "topics": [
        "interface vs type — prefer interface for objects type for unions",
        "Optional properties: name?: string",
        "Readonly: readonly id: number",
        "Union types: string | number | null; Intersection: User & Admin"
      ]
    },
    {
      "day": 3,
      "focus": "TypeScript Advanced",
      "topics": [
        "Generics: function identity<T>(arg: T): T",
        "Utility types: Partial<T> Required<T> Pick<T,K> Omit<T,K> Record<K,V>",
        "Discriminated unions for type narrowing",
        "Type guards: instanceof typeof in custom predicates"
      ]
    },
    {
      "day": 4,
      "focus": "Next.js 14 App Router",
      "topics": [
        "File-based routing: app/page.tsx app/about/page.tsx",
        "Layouts: app/layout.tsx (persistent across routes)",
        "loading.tsx error.tsx not-found.tsx special files",
        "Route groups and dynamic segments"
      ]
    },
    {
      "day": 5,
      "focus": "Server vs Client Components",
      "topics": [
        "Server Components: run on server access DB/secrets no useState",
        "Client Components: \"use client\" directive interactive hooks",
        "Data fetching in Server Components with async/await",
        "fetch() cache options: {cache:\"force-cache\"} {revalidate:60}"
      ]
    },
    {
      "day": 6,
      "focus": "Next.js Features",
      "topics": [
        "next/image: automatic optimization WebP lazy loading",
        "next/font: self-hosted fonts zero layout shift",
        "Route Handlers: app/api/*/route.ts for API endpoints",
        "Server Actions: call server functions from forms; Metadata API for SEO"
      ]
    },
    {
      "day": 7,
      "focus": "Project Day",
      "topics": [
        "Full-stack blog platform",
        "MDX for blog posts",
        "PostgreSQL + Prisma",
        "NextAuth.js for auth",
        "Deployed to Vercel"
      ]
    }
  ],
  "concepts": [
    {
      "title": "TypeScript Type System",
      "icon": "🔷",
      "desc": "TypeScript catches errors before you run your code. With proper typing, your IDE gives you autocomplete inline documentation and instant error detection.",
      "keyPoints": [
        "Type inference: TS often figures out types — you do not always need to annotate",
        "Generics make reusable type-safe utilities and components",
        "Discriminated unions: tag each variant with a literal type for exhaustive handling",
        "Utility types: Partial (all optional) Pick (select fields) Omit (remove fields)",
        "zod: runtime type validation that generates TypeScript types"
      ],
      "code": "// Interface\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    role: 'admin' | 'user' | 'guest';  // literal union\n    profile?: UserProfile;  // optional\n}\n\n// Generic with constraint\nfunction getById<T extends { id: number }>(items: T[], id: number): T | undefined {\n    return items.find(item => item.id === id);\n}\n\n// Discriminated union\ntype Result<T> =\n    | { success: true; data: T }\n    | { success: false; error: string };\n\nfunction handleResult<T>(result: Result<T>) {\n    if (result.success) {\n        console.log(result.data);    // TS knows data exists\n    } else {\n        console.error(result.error); // TS knows error exists\n    }\n}\n\n// Utility types\ntype CreateUser = Omit<User, 'id'>;\ntype UpdateUser = Partial<Pick<User, 'name' | 'email'>>;"
    }
  ],
  "projects": [
    {
      "title": "Full-Stack Blog Platform",
      "icon": "✍️",
      "difficulty": "advanced",
      "desc": "A production-grade blog with Next.js 14 TypeScript and PostgreSQL.",
      "features": [
        "Next.js 14 App Router with Server Components",
        "MDX blog posts with syntax highlighting",
        "PostgreSQL + Prisma ORM",
        "NextAuth.js (Google + GitHub login)",
        "Admin dashboard to create/edit posts",
        "Tag-based filtering and search",
        "SEO: metadata OG images sitemap",
        "Deployed to Vercel with preview deployments"
      ],
      "tech": [
        "Next.js 14",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "NextAuth.js",
        "MDX"
      ],
      "goals": [
        "Full-stack Next.js with real database",
        "TypeScript throughout",
        "Production deployment"
      ]
    }
  ],
  "resources": [
    {
      "title": "Next.js Documentation",
      "type": "docs",
      "icon": "📚",
      "desc": "nextjs.org/docs — comprehensive with interactive examples.",
      "url": "https://nextjs.org/docs"
    },
    {
      "title": "Total TypeScript by Matt Pocock",
      "type": "course",
      "icon": "🎓",
      "desc": "Best TypeScript course. Free exercises at totaltypescript.com",
      "url": "https://www.totaltypescript.com/"
    }
  ]
};

WEEKS['w21'] = {
  "id": "w21",
  "phase": 5,
  "number": 21,
  "title": "DSA — Arrays, Strings & Linked Lists",
  "overview": "DSA is what separates engineers who code from engineers who solve hard problems efficiently. Master the patterns: two pointers, sliding window, fast/slow pointers — and you will recognize them in dozens of interview problems.",
  "goals": [
    "Solve array problems with two-pointer and sliding window",
    "Apply the fast/slow pointer pattern",
    "Implement linked list operations from scratch",
    "Solve 20+ LeetCode problems"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Arrays & Two Pointers",
      "topics": [
        "Array: contiguous O(1) access O(n) insert/delete",
        "Two-pointer: start+end moving toward each other",
        "Problems: Two Sum Valid Palindrome Container With Most Water",
        "Reverse array in-place"
      ]
    },
    {
      "day": 2,
      "focus": "Sliding Window",
      "topics": [
        "Fixed-size window: move one step at a time",
        "Variable-size window: expand right shrink left on condition break",
        "Problems: Max sum subarray size k",
        "Longest substring without repeating characters"
      ]
    },
    {
      "day": 3,
      "focus": "Strings",
      "topics": [
        "String immutability in Java — use StringBuilder for building",
        "Char frequency with int[26] or HashMap",
        "Anagram check: sort both or compare freq maps",
        "Problems: Valid Anagram Group Anagrams Longest Common Prefix"
      ]
    },
    {
      "day": 4,
      "focus": "Prefix Sum & Kadane",
      "topics": [
        "Prefix sum array for O(1) range queries",
        "Kadane's: max subarray sum in O(n)",
        "Product of array except self (no division)",
        "Maximum circular subarray"
      ]
    },
    {
      "day": 5,
      "focus": "Linked List Basics",
      "topics": [
        "Node class: value + next pointer",
        "Traversal insertion deletion",
        "Reverse linked list iterative + recursive",
        "Detect cycle: Floyd's slow/fast pointer"
      ]
    },
    {
      "day": 6,
      "focus": "Linked List Advanced",
      "topics": [
        "Find middle node (fast/slow)",
        "Merge two sorted linked lists",
        "Remove Nth from end (two pointers with gap)",
        "LRU Cache implementation (HashMap + DLL)"
      ]
    },
    {
      "day": 7,
      "focus": "Practice Day",
      "topics": [
        "Solve 5 problems combining patterns",
        "Time yourself: 20 min per medium",
        "Review all patterns learned",
        "Document your problem-solving template"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Arrays — Key Patterns",
      "icon": "📊",
      "desc": "Arrays are the most common interview topic. Recognize which pattern to apply in under 2 minutes.",
      "keyPoints": [
        "Two Pointers (sorted or palindrome): O(n) time O(1) space",
        "Sliding Window (substring/subarray with constraint): O(n) time",
        "Prefix Sum (range queries): O(n) preprocess O(1) query",
        "Hash Map for O(1) lookups (Two Sum Group Anagrams)",
        "Sort first to enable binary search or two pointers"
      ],
      "code": "// Two Sum — O(n) with HashMap\npublic int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int comp = target - nums[i];\n        if (map.containsKey(comp)) return new int[]{map.get(comp), i};\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}\n\n// Sliding Window — Longest Substring Without Repeating\npublic int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> last = new HashMap<>();\n    int left = 0, max = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (last.containsKey(c) && last.get(c) >= left)\n            left = last.get(c) + 1;\n        last.put(c, right);\n        max = Math.max(max, right - left + 1);\n    }\n    return max;\n}\n\n// Kadane's — Max Subarray O(n)\npublic int maxSubArray(int[] nums) {\n    int max = nums[0], cur = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        cur = Math.max(nums[i], cur + nums[i]);\n        max = Math.max(max, cur);\n    }\n    return max;\n}"
    },
    {
      "title": "Linked Lists — Patterns",
      "icon": "🔗",
      "desc": "Linked lists require strong pointer manipulation. Key patterns: fast/slow pointers and dummy head nodes.",
      "keyPoints": [
        "Always draw the pointer changes before coding — avoid off-by-one",
        "Dummy head node: eliminates special cases for head deletion",
        "Fast pointer moves 2x speed of slow — they meet inside a cycle",
        "To find middle: slow ends at middle when fast reaches end",
        "Reverse: track prev curr next — update one step at a time"
      ],
      "code": "// Reverse Linked List — O(n) time O(1) space\npublic ListNode reverse(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next;  // save next\n        curr.next = prev;           // reverse pointer\n        prev = curr;                // advance prev\n        curr = next;                // advance curr\n    }\n    return prev;  // new head\n}\n\n// Detect Cycle — Floyd's algorithm\npublic boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}\n\n// Merge Two Sorted Lists — dummy head trick\npublic ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }\n        else                   { curr.next = l2; l2 = l2.next; }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}"
    }
  ],
  "projects": [],
  "dsaProblems": [
    {
      "name": "Two Sum",
      "difficulty": "easy",
      "tag": "Array"
    },
    {
      "name": "Best Time to Buy and Sell Stock",
      "difficulty": "easy",
      "tag": "Array"
    },
    {
      "name": "Contains Duplicate",
      "difficulty": "easy",
      "tag": "Array"
    },
    {
      "name": "Product of Array Except Self",
      "difficulty": "medium",
      "tag": "Array"
    },
    {
      "name": "Maximum Subarray (Kadane)",
      "difficulty": "medium",
      "tag": "Array"
    },
    {
      "name": "Container With Most Water",
      "difficulty": "medium",
      "tag": "Two Pointers"
    },
    {
      "name": "3Sum",
      "difficulty": "medium",
      "tag": "Two Pointers"
    },
    {
      "name": "Longest Substring Without Repeating",
      "difficulty": "medium",
      "tag": "Sliding Window"
    },
    {
      "name": "Minimum Window Substring",
      "difficulty": "hard",
      "tag": "Sliding Window"
    },
    {
      "name": "Valid Anagram",
      "difficulty": "easy",
      "tag": "String"
    },
    {
      "name": "Group Anagrams",
      "difficulty": "medium",
      "tag": "String"
    },
    {
      "name": "Valid Palindrome",
      "difficulty": "easy",
      "tag": "String"
    },
    {
      "name": "Reverse Linked List",
      "difficulty": "easy",
      "tag": "Linked List"
    },
    {
      "name": "Merge Two Sorted Lists",
      "difficulty": "easy",
      "tag": "Linked List"
    },
    {
      "name": "Linked List Cycle",
      "difficulty": "easy",
      "tag": "Linked List"
    },
    {
      "name": "Remove Nth Node From End",
      "difficulty": "medium",
      "tag": "Linked List"
    },
    {
      "name": "Reorder List",
      "difficulty": "medium",
      "tag": "Linked List"
    },
    {
      "name": "LRU Cache",
      "difficulty": "medium",
      "tag": "Linked List + HashMap"
    },
    {
      "name": "Find Minimum in Rotated Sorted Array",
      "difficulty": "medium",
      "tag": "Binary Search"
    },
    {
      "name": "Merge k Sorted Lists",
      "difficulty": "hard",
      "tag": "Linked List"
    }
  ],
  "resources": [
    {
      "title": "Neetcode.io",
      "type": "course",
      "icon": "🎓",
      "desc": "Best free DSA curriculum. Neetcode 150 is the gold standard.",
      "url": "https://neetcode.io/"
    },
    {
      "title": "LeetCode",
      "type": "tool",
      "icon": "🔧",
      "desc": "Practice platform. Solve problems in Neetcode order.",
      "url": "https://leetcode.com/"
    }
  ]
};

WEEKS['w22'] = {
  "id": "w22",
  "phase": 5,
  "number": 22,
  "title": "DSA — Stacks, Queues, Trees & Hash Maps",
  "overview": "Trees are everywhere in interviews. Know DFS traversals, BFS, BST operations, and a dozen key tree problems. Stacks and queues unlock BFS/DFS implementations.",
  "goals": [
    "Implement all DFS traversals recursively and iteratively",
    "Implement BFS on trees",
    "Solve BST problems confidently",
    "Know HashMap internals deeply"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Stacks & Queues",
      "topics": [
        "Stack LIFO: valid parentheses daily temperatures monotonic stack",
        "Queue FIFO: BFS foundation sliding window maximum",
        "ArrayDeque as both stack and queue in Java",
        "Monotonic stack: next greater element problems"
      ]
    },
    {
      "day": 2,
      "focus": "Binary Trees DFS",
      "topics": [
        "TreeNode: int val left right",
        "Inorder Preorder Postorder recursive DFS",
        "Iterative DFS with explicit stack",
        "Height depth diameter of binary tree"
      ]
    },
    {
      "day": 3,
      "focus": "Binary Trees BFS",
      "topics": [
        "Level-order with a Queue",
        "Process level by level using queue size",
        "Zigzag level-order traversal",
        "Right side view minimum depth"
      ]
    },
    {
      "day": 4,
      "focus": "Binary Search Trees",
      "topics": [
        "BST property: left < root < right",
        "Search insert delete: O(h) where h = height",
        "Validate BST using min/max bounds",
        "Inorder gives sorted sequence — use for kth smallest"
      ]
    },
    {
      "day": 5,
      "focus": "Tree Problem Patterns",
      "topics": [
        "Same tree Symmetric tree",
        "Path sum: root-to-leaf path equals target",
        "Lowest Common Ancestor (LCA)",
        "Serialize and deserialize binary tree"
      ]
    },
    {
      "day": 6,
      "focus": "Hash Maps Deep Dive",
      "topics": [
        "Frequency counting: char freq word count",
        "Two Sum pattern: look for (target - x)",
        "Group anagrams: sorted key",
        "Longest consecutive sequence: O(n) with HashSet"
      ]
    },
    {
      "day": 7,
      "focus": "Practice Day",
      "topics": [
        "5 tree problems timed",
        "3 stack/hashmap problems",
        "Time complexity review",
        "Pattern recognition drill"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Binary Tree Traversals",
      "icon": "🌳",
      "desc": "Tree traversals are fundamental. Inorder on BST gives sorted output. Preorder serializes. Level-order BFS finds shortest paths.",
      "keyPoints": [
        "Inorder (L-Root-R): BST inorder = sorted array",
        "Preorder (Root-L-R): serialize tree construct prefix expression",
        "Postorder (L-R-Root): delete tree evaluate expressions",
        "Level-order BFS: find minimum depth right side view",
        "DFS height: max(left height right height) + 1"
      ],
      "code": "// Recursive traversals\nvoid inorder(TreeNode r, List<Integer> res) {\n    if (r == null) return;\n    inorder(r.left, res);\n    res.add(r.val);\n    inorder(r.right, res);\n}\n\n// Iterative inorder\nList<Integer> inorderIter(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    Deque<TreeNode> stack = new ArrayDeque<>();\n    TreeNode curr = root;\n    while (curr != null || !stack.isEmpty()) {\n        while (curr != null) { stack.push(curr); curr = curr.left; }\n        curr = stack.pop();\n        res.add(curr.val);\n        curr = curr.right;\n    }\n    return res;\n}\n\n// BFS Level Order\nList<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        int size = q.size();\n        List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode node = q.poll();\n            level.add(node.val);\n            if (node.left != null)  q.offer(node.left);\n            if (node.right != null) q.offer(node.right);\n        }\n        res.add(level);\n    }\n    return res;\n}\n\n// LCA\nTreeNode lca(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode L = lca(root.left, p, q);\n    TreeNode R = lca(root.right, p, q);\n    return (L != null && R != null) ? root : (L != null ? L : R);\n}"
    }
  ],
  "projects": [],
  "dsaProblems": [
    {
      "name": "Valid Parentheses",
      "difficulty": "easy",
      "tag": "Stack"
    },
    {
      "name": "Min Stack",
      "difficulty": "medium",
      "tag": "Stack"
    },
    {
      "name": "Daily Temperatures",
      "difficulty": "medium",
      "tag": "Stack"
    },
    {
      "name": "Invert Binary Tree",
      "difficulty": "easy",
      "tag": "Tree"
    },
    {
      "name": "Maximum Depth of Binary Tree",
      "difficulty": "easy",
      "tag": "Tree"
    },
    {
      "name": "Same Tree",
      "difficulty": "easy",
      "tag": "Tree"
    },
    {
      "name": "Subtree of Another Tree",
      "difficulty": "easy",
      "tag": "Tree"
    },
    {
      "name": "Binary Tree Level Order Traversal",
      "difficulty": "medium",
      "tag": "Tree BFS"
    },
    {
      "name": "Binary Tree Right Side View",
      "difficulty": "medium",
      "tag": "Tree BFS"
    },
    {
      "name": "Count Good Nodes in Binary Tree",
      "difficulty": "medium",
      "tag": "Tree DFS"
    },
    {
      "name": "Validate Binary Search Tree",
      "difficulty": "medium",
      "tag": "BST"
    },
    {
      "name": "Kth Smallest Element in BST",
      "difficulty": "medium",
      "tag": "BST"
    },
    {
      "name": "Lowest Common Ancestor of BST",
      "difficulty": "medium",
      "tag": "BST"
    },
    {
      "name": "Construct Tree from Preorder and Inorder",
      "difficulty": "medium",
      "tag": "Tree"
    },
    {
      "name": "Serialize and Deserialize Binary Tree",
      "difficulty": "hard",
      "tag": "Tree"
    },
    {
      "name": "Two Sum (HashMap)",
      "difficulty": "easy",
      "tag": "HashMap"
    },
    {
      "name": "Longest Consecutive Sequence",
      "difficulty": "medium",
      "tag": "HashMap"
    },
    {
      "name": "Top K Frequent Elements",
      "difficulty": "medium",
      "tag": "HashMap + Heap"
    },
    {
      "name": "Sliding Window Maximum",
      "difficulty": "hard",
      "tag": "Deque"
    },
    {
      "name": "Design HashMap",
      "difficulty": "medium",
      "tag": "HashMap"
    }
  ],
  "resources": [
    {
      "title": "Visualgo",
      "type": "tool",
      "icon": "🔧",
      "desc": "Visualize data structures and algorithms. visualgo.net",
      "url": "https://visualgo.net/"
    },
    {
      "title": "Neetcode.io — Trees Section",
      "type": "course",
      "icon": "🎓",
      "desc": "Video explanations for every tree problem.",
      "url": "https://neetcode.io/roadmap"
    }
  ]
};

WEEKS['w23'] = {
  "id": "w23",
  "phase": 5,
  "number": 23,
  "title": "DSA — Graphs, Heaps & Sorting",
  "overview": "Graphs model real-world networks. Heaps power priority-based problems. Sorting algorithms reveal algorithmic thinking and why complexity matters.",
  "goals": [
    "Implement BFS and DFS on graphs",
    "Apply topological sort for dependency problems",
    "Use heaps for top-K and scheduling",
    "Know when each sorting algorithm is optimal"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Graph Representations & BFS",
      "topics": [
        "Adjacency list (sparse) vs matrix (dense)",
        "Building a graph from edge list",
        "BFS with a queue: O(V+E)",
        "Shortest path unweighted; Number of Islands"
      ]
    },
    {
      "day": 2,
      "focus": "Graph DFS & Cycle Detection",
      "topics": [
        "DFS with stack or recursion: O(V+E)",
        "Cycle detection in undirected graph",
        "Cycle detection in directed graph (visited + recursion stack)",
        "Connected components count"
      ]
    },
    {
      "day": 3,
      "focus": "Topological Sort & Dijkstra",
      "topics": [
        "Topological sort: Kahn's (BFS) and DFS method",
        "Course Schedule problem",
        "Dijkstra's shortest path: O((V+E) log V)",
        "Priority queue for Dijkstra"
      ]
    },
    {
      "day": 4,
      "focus": "Union-Find",
      "topics": [
        "Disjoint Set Union (DSU) data structure",
        "find() with path compression",
        "union() with rank",
        "Detect cycle; Number of connected components"
      ]
    },
    {
      "day": 5,
      "focus": "Heaps & Priority Queues",
      "topics": [
        "Min-heap: root is always minimum",
        "Java PriorityQueue (min-heap default)",
        "Top K elements: min-heap of size K",
        "Find median from data stream (two heaps)"
      ]
    },
    {
      "day": 6,
      "focus": "Sorting Algorithms",
      "topics": [
        "Merge Sort: O(n log n) stable good for linked lists",
        "Quick Sort: O(n log n) avg in-place best cache",
        "Heap Sort: O(n log n) in-place not stable",
        "Counting Sort: O(n+k) for integer keys in known range"
      ]
    },
    {
      "day": 7,
      "focus": "Practice Day",
      "topics": [
        "5 graph problems timed",
        "3 heap problems",
        "Sorting algorithm decision tree",
        "Pattern review"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Graph Algorithms",
      "icon": "🕸️",
      "desc": "Graphs model connections: social networks maps dependencies. BFS finds shortest path unweighted. DFS finds components cycles topological order.",
      "keyPoints": [
        "BFS: Queue finds SHORTEST PATH in unweighted graphs",
        "DFS: Stack/recursion finds all reachable nodes",
        "Topo sort: valid ordering of nodes with no cycles",
        "Dijkstra: BFS with PriorityQueue for WEIGHTED shortest path",
        "Union-Find: most efficient for connectivity queries"
      ],
      "code": "// BFS — shortest path unweighted\nint bfs(Map<Integer, List<Integer>> graph, int start, int end) {\n    Set<Integer> visited = new HashSet<>();\n    Queue<int[]> q = new LinkedList<>();  // [node, dist]\n    q.offer(new int[]{start, 0});\n    visited.add(start);\n    while (!q.isEmpty()) {\n        int[] curr = q.poll();\n        if (curr[0] == end) return curr[1];\n        for (int nb : graph.getOrDefault(curr[0], List.of())) {\n            if (!visited.contains(nb)) {\n                visited.add(nb);\n                q.offer(new int[]{nb, curr[1] + 1});\n            }\n        }\n    }\n    return -1;\n}\n\n// Topological Sort — Kahn's Algorithm\nint[] topoSort(int n, int[][] prerequisites) {\n    int[] inDegree = new int[n];\n    Map<Integer, List<Integer>> adj = new HashMap<>();\n    for (int[] pre : prerequisites) {\n        adj.computeIfAbsent(pre[1], k -> new ArrayList<>()).add(pre[0]);\n        inDegree[pre[0]]++;\n    }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < n; i++) if (inDegree[i] == 0) q.offer(i);\n    int[] order = new int[n];\n    int idx = 0;\n    while (!q.isEmpty()) {\n        int c = q.poll();\n        order[idx++] = c;\n        for (int next : adj.getOrDefault(c, List.of()))\n            if (--inDegree[next] == 0) q.offer(next);\n    }\n    return idx == n ? order : new int[]{}; // empty = cycle\n}"
    },
    {
      "title": "Heaps & Top-K Pattern",
      "icon": "⛰️",
      "desc": "A heap supports O(1) min/max access and O(log n) insert/remove. The \"top K elements\" pattern uses a heap of size K to process large datasets.",
      "keyPoints": [
        "Min-heap: PriorityQueue<Integer>() — default in Java",
        "Max-heap: PriorityQueue<Integer>(Comparator.reverseOrder())",
        "Top K LARGEST: use MIN-heap of size K (counterintuitive but correct)",
        "Top K SMALLEST: use MAX-heap of size K",
        "K closest: use max-heap comparing by distance"
      ],
      "code": "// Top K Frequent Elements\npublic int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int n : nums) freq.merge(n, 1, Integer::sum);\n\n    // Min-heap of size K\n    PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    for (var e : freq.entrySet()) {\n        heap.offer(new int[]{e.getValue(), e.getKey()});\n        if (heap.size() > k) heap.poll();\n    }\n    int[] res = new int[k];\n    for (int i = k-1; i >= 0; i--) res[i] = heap.poll()[1];\n    return res;\n}\n\n// Find Median from Data Stream\nclass MedianFinder {\n    PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder()); // max-heap lower half\n    PriorityQueue<Integer> large = new PriorityQueue<>();  // min-heap upper half\n\n    public void addNum(int n) {\n        small.offer(n);\n        large.offer(small.poll());\n        if (large.size() > small.size()) small.offer(large.poll());\n    }\n    public double findMedian() {\n        return small.size() > large.size() ? small.peek()\n               : (small.peek() + large.peek()) / 2.0;\n    }\n}"
    }
  ],
  "projects": [],
  "dsaProblems": [
    {
      "name": "Number of Islands",
      "difficulty": "medium",
      "tag": "Graph DFS/BFS"
    },
    {
      "name": "Max Area of Island",
      "difficulty": "medium",
      "tag": "Graph DFS"
    },
    {
      "name": "Clone Graph",
      "difficulty": "medium",
      "tag": "Graph BFS"
    },
    {
      "name": "Rotting Oranges",
      "difficulty": "medium",
      "tag": "Graph BFS"
    },
    {
      "name": "Pacific Atlantic Water Flow",
      "difficulty": "medium",
      "tag": "Graph DFS"
    },
    {
      "name": "Course Schedule",
      "difficulty": "medium",
      "tag": "Topological Sort"
    },
    {
      "name": "Course Schedule II",
      "difficulty": "medium",
      "tag": "Topological Sort"
    },
    {
      "name": "Number of Connected Components",
      "difficulty": "medium",
      "tag": "Union-Find"
    },
    {
      "name": "Redundant Connection",
      "difficulty": "medium",
      "tag": "Union-Find"
    },
    {
      "name": "Kth Largest Element in Array",
      "difficulty": "medium",
      "tag": "Heap"
    },
    {
      "name": "K Closest Points to Origin",
      "difficulty": "medium",
      "tag": "Heap"
    },
    {
      "name": "Task Scheduler",
      "difficulty": "medium",
      "tag": "Heap"
    },
    {
      "name": "Find Median from Data Stream",
      "difficulty": "hard",
      "tag": "Heap"
    },
    {
      "name": "Network Delay Time (Dijkstra)",
      "difficulty": "medium",
      "tag": "Dijkstra"
    },
    {
      "name": "Word Ladder",
      "difficulty": "hard",
      "tag": "Graph BFS"
    },
    {
      "name": "Sort Colors",
      "difficulty": "medium",
      "tag": "Sorting"
    },
    {
      "name": "Meeting Rooms II",
      "difficulty": "medium",
      "tag": "Sorting + Heap"
    },
    {
      "name": "Largest Number",
      "difficulty": "medium",
      "tag": "Custom Sort"
    },
    {
      "name": "Swim in Rising Water",
      "difficulty": "hard",
      "tag": "Dijkstra"
    },
    {
      "name": "Alien Dictionary",
      "difficulty": "hard",
      "tag": "Topological Sort"
    }
  ],
  "resources": [
    {
      "title": "Neetcode.io — Graphs Section",
      "type": "course",
      "icon": "🎓",
      "desc": "Video explanations for every graph problem.",
      "url": "https://neetcode.io/roadmap"
    },
    {
      "title": "cp-algorithms.com",
      "type": "docs",
      "icon": "📚",
      "desc": "Competitive programming algorithms. Read the graph section.",
      "url": "https://cp-algorithms.com/"
    }
  ]
};

WEEKS['w24'] = {
  "id": "w24",
  "phase": 5,
  "number": 24,
  "title": "DSA — Dynamic Programming, Greedy & Backtracking",
  "overview": "DP is the hardest topic in interviews and the most rewarding to master. Learn to recognize patterns (linear 2D knapsack interval) then greedy and backtracking.",
  "goals": [
    "Identify overlapping subproblems and optimal substructure",
    "Implement top-down (memoization) and bottom-up (tabulation)",
    "Solve classic DP problems confidently",
    "Apply backtracking template to permutation/combination problems"
  ],
  "days": [
    {
      "day": 1,
      "focus": "DP Foundations",
      "topics": [
        "Optimal substructure: optimal solution uses optimal sub-solutions",
        "Overlapping subproblems: same subproblems computed multiple times",
        "Memoization (top-down): recursion + cache",
        "Tabulation (bottom-up): iterative filling from base case"
      ]
    },
    {
      "day": 2,
      "focus": "1D DP Problems",
      "topics": [
        "Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]",
        "House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
        "House Robber II (circular array)",
        "Coin Change: minimum coins to make amount"
      ]
    },
    {
      "day": 3,
      "focus": "2D DP — LCS & Edit Distance",
      "topics": [
        "Unique Paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]",
        "Longest Common Subsequence (LCS)",
        "Edit Distance (Levenshtein)",
        "Space optimization: 1D rolling array"
      ]
    },
    {
      "day": 4,
      "focus": "Knapsack & Partition",
      "topics": [
        "0/1 Knapsack: include or exclude each item",
        "Partition Equal Subset Sum",
        "Word Break: can string be segmented into dict words",
        "Unbounded Knapsack: Coin Change II (ways)"
      ]
    },
    {
      "day": 5,
      "focus": "Greedy Algorithms",
      "topics": [
        "Greedy choice property: locally optimal = globally optimal",
        "Jump Game: can you reach the end?",
        "Jump Game II: minimum jumps",
        "Gas Station: which start allows full circle?"
      ]
    },
    {
      "day": 6,
      "focus": "Backtracking",
      "topics": [
        "Template: choose → explore → unchoose",
        "Subsets: all possible subsets",
        "Permutations: all orderings",
        "Combination Sum; N-Queens; Sudoku Solver; Word Search"
      ]
    },
    {
      "day": 7,
      "focus": "Final DSA Review",
      "topics": [
        "5 DP problems end-to-end",
        "Pattern recognition test (60 seconds per problem)",
        "Time and space complexity for all patterns",
        "Build your personal DSA cheat sheet"
      ]
    }
  ],
  "concepts": [
    {
      "title": "Dynamic Programming — The Framework",
      "icon": "🧩",
      "desc": "DP is memoized recursion, or equivalently bottom-up table filling. Ask: \"Can I define the answer as a function of smaller subproblems?\" If yes and subproblems overlap, DP applies.",
      "keyPoints": [
        "Ask: Can I define the answer in terms of smaller subproblems?",
        "Top-down (memoization): natural recursion + cache Map/array",
        "Bottom-up (tabulation): fill a table from base case up",
        "Common patterns: 1D (linear) 2D (string/grid) knapsack interval",
        "Space optimization: often need only previous row or two values"
      ],
      "code": "// Coin Change — minimum coins O(n*amount)\npublic int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);  // \"infinity\"\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++)\n        for (int c : coins)\n            if (c <= i) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    return dp[amount] > amount ? -1 : dp[amount];\n}\n\n// Longest Common Subsequence\npublic int lcs(String t1, String t2) {\n    int m = t1.length(), n = t2.length();\n    int[][] dp = new int[m+1][n+1];\n    for (int i = 1; i <= m; i++)\n        for (int j = 1; j <= n; j++)\n            dp[i][j] = t1.charAt(i-1) == t2.charAt(j-1)\n                ? dp[i-1][j-1] + 1\n                : Math.max(dp[i-1][j], dp[i][j-1]);\n    return dp[m][n];\n}\n\n// Backtracking template — Subsets\npublic List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, 0);\n    return res;\n}\nvoid backtrack(List<List<Integer>> res, List<Integer> cur, int[] nums, int start) {\n    res.add(new ArrayList<>(cur));  // add current subset\n    for (int i = start; i < nums.length; i++) {\n        cur.add(nums[i]);           // choose\n        backtrack(res, cur, nums, i+1); // explore\n        cur.remove(cur.size()-1);   // unchoose\n    }\n}"
    }
  ],
  "projects": [],
  "dsaProblems": [
    {
      "name": "Climbing Stairs",
      "difficulty": "easy",
      "tag": "DP 1D"
    },
    {
      "name": "House Robber",
      "difficulty": "medium",
      "tag": "DP 1D"
    },
    {
      "name": "House Robber II",
      "difficulty": "medium",
      "tag": "DP 1D"
    },
    {
      "name": "Longest Palindromic Substring",
      "difficulty": "medium",
      "tag": "DP 2D"
    },
    {
      "name": "Coin Change",
      "difficulty": "medium",
      "tag": "DP Knapsack"
    },
    {
      "name": "Coin Change II",
      "difficulty": "medium",
      "tag": "DP Knapsack"
    },
    {
      "name": "Partition Equal Subset Sum",
      "difficulty": "medium",
      "tag": "DP Knapsack"
    },
    {
      "name": "Longest Common Subsequence",
      "difficulty": "medium",
      "tag": "DP 2D"
    },
    {
      "name": "Edit Distance",
      "difficulty": "medium",
      "tag": "DP 2D"
    },
    {
      "name": "Unique Paths",
      "difficulty": "medium",
      "tag": "DP Grid"
    },
    {
      "name": "Word Break",
      "difficulty": "medium",
      "tag": "DP"
    },
    {
      "name": "Decode Ways",
      "difficulty": "medium",
      "tag": "DP 1D"
    },
    {
      "name": "Jump Game",
      "difficulty": "medium",
      "tag": "Greedy"
    },
    {
      "name": "Jump Game II",
      "difficulty": "medium",
      "tag": "Greedy"
    },
    {
      "name": "Gas Station",
      "difficulty": "medium",
      "tag": "Greedy"
    },
    {
      "name": "Subsets",
      "difficulty": "medium",
      "tag": "Backtracking"
    },
    {
      "name": "Permutations",
      "difficulty": "medium",
      "tag": "Backtracking"
    },
    {
      "name": "Combination Sum",
      "difficulty": "medium",
      "tag": "Backtracking"
    },
    {
      "name": "N-Queens",
      "difficulty": "hard",
      "tag": "Backtracking"
    },
    {
      "name": "Regular Expression Matching",
      "difficulty": "hard",
      "tag": "DP 2D"
    }
  ],
  "resources": [
    {
      "title": "Neetcode.io — DP Section",
      "type": "course",
      "icon": "🎓",
      "desc": "Best DP explanations on the internet.",
      "url": "https://neetcode.io/roadmap"
    },
    {
      "title": "Atcoder DP Contest",
      "type": "tool",
      "icon": "🔧",
      "desc": "26 DP problems covering all patterns. Free.",
      "url": "https://atcoder.jp/contests/dp/tasks"
    }
  ]
};

WEEKS['w25'] = {
  "id": "w25",
  "phase": 6,
  "number": 25,
  "title": "System Design",
  "overview": "System design interviews test your ability to architect large-scale distributed systems. You need to discuss trade-offs, calculate capacity, design APIs, choose databases, and explain component interactions.",
  "goals": [
    "Follow a structured system design interview framework",
    "Explain load balancing caching and database strategies",
    "Design systems for millions of users",
    "Discuss CAP theorem and distributed system trade-offs"
  ],
  "days": [
    {
      "day": 1,
      "focus": "System Design Framework",
      "topics": [
        "Step 1: Requirements (functional vs non-functional)",
        "Step 2: Capacity estimation (users RPS storage)",
        "Step 3: High-level design (draw the boxes)",
        "Step 4: Deep dive (bottlenecks trade-offs)",
        "Practice: URL shortener full walkthrough"
      ]
    },
    {
      "day": 2,
      "focus": "Scalability & Load Balancing",
      "topics": [
        "Vertical scaling (bigger machine) vs horizontal (more machines)",
        "Load balancers: round-robin least-connections consistent hashing",
        "Stateless services enable horizontal scaling",
        "Session management: sticky sessions vs distributed store"
      ]
    },
    {
      "day": 3,
      "focus": "Caching",
      "topics": [
        "CDN for static assets: dramatically reduces origin load",
        "Application cache (Redis): cache-aside read-through write-through",
        "Cache eviction: LRU LFU TTL",
        "Cache invalidation strategies; cache stampede solutions"
      ]
    },
    {
      "day": 4,
      "focus": "Databases at Scale",
      "topics": [
        "SQL vs NoSQL trade-offs (neither is always better)",
        "Database indexing: B-tree covering composite index order",
        "Read replicas: scale reads independently",
        "Database sharding: horizontal partitioning; ACID vs BASE"
      ]
    },
    {
      "day": 5,
      "focus": "Distributed Systems",
      "topics": [
        "CAP theorem: Consistency Availability Partition tolerance (pick 2)",
        "Eventual consistency: DynamoDB Cassandra",
        "Distributed transactions: 2-Phase Commit Saga pattern",
        "Rate limiting: token bucket vs leaky bucket"
      ]
    },
    {
      "day": 6,
      "focus": "Message Queues & Patterns",
      "topics": [
        "Message queues decouple services absorb spikes",
        "Kafka for event streaming; RabbitMQ for task queues",
        "Circuit breaker: fail fast prevent cascade failures",
        "API Gateway: auth rate-limiting routing"
      ]
    },
    {
      "day": 7,
      "focus": "Case Studies",
      "topics": [
        "Design Twitter feed (timeline generation)",
        "Design YouTube (video upload + streaming)",
        "Design WhatsApp (real-time messaging)",
        "Design Uber (ride matching)",
        "Design URL Shortener"
      ]
    }
  ],
  "concepts": [
    {
      "title": "System Design Interview Framework",
      "icon": "🏗️",
      "desc": "System design interviews test structured thinking, not perfect answers. Use a consistent framework to demonstrate you can break down ambiguous problems.",
      "keyPoints": [
        "1. Clarify requirements: ask about scale features constraints",
        "2. Estimate capacity: users × requests/day × data size",
        "3. Define APIs: what endpoints do clients call?",
        "4. Draw high-level: clients LB app-servers DB cache queue",
        "5. Deep dive: focus on 1-2 hard parts (data model feed generation)",
        "6. Discuss trade-offs: SQL vs NoSQL pull vs push consistency"
      ],
      "code": "/* URL SHORTENER WALKTHROUGH\n\nRequirements:\n  Given long URL → generate short code (short.ly/abc123)\n  Redirect short → long URL\n  Scale: 100M URLs, 10B redirects/day\n\nCapacity:\n  Write RPS: 100M / (30 days × 86400) ≈ 40 writes/sec\n  Read RPS: 10B / 86400 ≈ 115,000 reads/sec\n  Storage: 100M × 500 bytes ≈ 50 GB (fits in Redis!)\n\nAPI:\n  POST /shorten  { url } → { short: \"short.ly/abc123\" }\n  GET  /{code}  → 302 Redirect\n\nData Model:\n  urls: id (bigint), code (varchar 7), original_url, created_at\n\nID Generation: Base62 encode auto-increment ID\n  125 → \"cb\" in Base62 (52 letters + 10 digits)\n\nArchitecture:\n  Client → LB → App Servers → Redis Cache\n                             → PostgreSQL (fallback)\n\nHot path (99%): Redis hit → 302 in <1ms\nCold path (1%): DB lookup → cache → 302\n*/"
    }
  ],
  "projects": [],
  "designCases": [
    {
      "title": "Design Twitter / X",
      "icon": "🐦",
      "requirements": [
        "Post tweets (280 chars)",
        "Follow/unfollow users",
        "Timeline: see tweets from followed users",
        "10M DAU 100M tweets/day"
      ],
      "components": [
        "Tweet storage: Cassandra (write-heavy time-series)",
        "Timeline: hybrid push/pull (push for <10K followers pull for celebrities)",
        "CDN for media; separate S3 media storage",
        "Redis for timeline cache (800 tweet limit per user)",
        "Graph DB or Redis set for follower relationships"
      ],
      "tradeoffs": [
        "Push model: fast reads but 10M followers = huge write amplification",
        "Pull model: slow reads but simple writes",
        "Hybrid: push for normal users pull for celebrities (10M+ followers)"
      ]
    },
    {
      "title": "Design YouTube",
      "icon": "▶️",
      "requirements": [
        "Upload and watch videos",
        "Search for videos",
        "Like/dislike comments",
        "2B users 500 hours uploaded/minute"
      ],
      "components": [
        "Video upload: async processing pipeline (transcode to multiple resolutions)",
        "Object storage: S3/GCS for video files",
        "CDN: edge nodes serve video segments globally",
        "Metadata: PostgreSQL; ElasticSearch for search",
        "Adaptive bitrate streaming (HLS)"
      ],
      "tradeoffs": [
        "Sync vs async upload processing",
        "Hot vs cold storage: recent popular on SSD old rare on object storage",
        "View count: eventually consistent via Cassandra counter"
      ]
    },
    {
      "title": "Design WhatsApp",
      "icon": "💬",
      "requirements": [
        "Real-time messaging",
        "Group chats up to 100 people",
        "Delivery status: sent delivered read",
        "2B users 100B messages/day"
      ],
      "components": [
        "WebSocket: each user maintains persistent connection to chat server",
        "Message routing: sender → queue → recipient server → recipient",
        "Message storage: Cassandra (time-series high write)",
        "Presence service: online/offline tracking",
        "Push notifications (APNS/FCM) when user offline"
      ],
      "tradeoffs": [
        "End-to-end encryption: keys on device server cannot read",
        "Fan-out in group chats: 1 send = 99 deliveries",
        "Message ordering: timestamp + sequence number per conversation"
      ]
    }
  ],
  "resources": [
    {
      "title": "System Design Interview Vol 1 & 2",
      "type": "book",
      "icon": "📖",
      "desc": "Alex Xu. The most popular system design interview book.",
      "url": "https://www.goodreads.com/book/show/54109255-system-design-interview"
    },
    {
      "title": "Designing Data-Intensive Applications",
      "type": "book",
      "icon": "📖",
      "desc": "Martin Kleppmann. Deep dive into distributed systems. Life-changing.",
      "url": "https://dataintensive.net/"
    },
    {
      "title": "ByteByteGo Newsletter",
      "type": "article",
      "icon": "📝",
      "desc": "Alex Xu system design newsletter. Free tier has excellent content.",
      "url": "https://blog.bytebytego.com/"
    }
  ]
};

WEEKS['w26'] = {
  "id": "w26",
  "phase": 6,
  "number": 26,
  "title": "Final Projects, Portfolio & Career Launch",
  "overview": "The final week is about synthesis. Build showcase projects demonstrating everything you have learned. Polish your GitHub, write your resume, optimize your LinkedIn, and start applying. You are ready.",
  "goals": [
    "Deploy at least one production full-stack app",
    "Polish GitHub with READMEs and pinned repos",
    "Write a strong developer resume",
    "Start applying to mid/senior positions"
  ],
  "days": [
    {
      "day": 1,
      "focus": "Project Planning",
      "topics": [
        "Choose capstone project (SaaS real-time or AI-powered)",
        "Architecture decision: monolith vs microservices",
        "Define MVP features for 1-week build",
        "Set up repo CI/CD hosting"
      ]
    },
    {
      "day": 2,
      "focus": "Backend Development",
      "topics": [
        "Scaffold Spring Boot with all layers",
        "Database migrations with Flyway",
        "Core business logic with tests",
        "Deploy backend to AWS or Railway"
      ]
    },
    {
      "day": 3,
      "focus": "Frontend Development",
      "topics": [
        "Create React + Next.js frontend",
        "TypeScript throughout",
        "Connect to backend API",
        "Authentication with JWT/NextAuth"
      ]
    },
    {
      "day": 4,
      "focus": "DevOps & Deployment",
      "topics": [
        "Dockerize frontend and backend",
        "GitHub Actions CI/CD pipeline",
        "Deploy to AWS (EC2 + RDS) or DigitalOcean",
        "Custom domain + HTTPS with Let's Encrypt"
      ]
    },
    {
      "day": 5,
      "focus": "Polish & Document",
      "topics": [
        "Comprehensive README (setup architecture features screenshots)",
        "Record 3-minute demo video",
        "Add tests (aim for 70%+ coverage)",
        "Performance testing with k6 or JMeter"
      ]
    },
    {
      "day": 6,
      "focus": "Portfolio & Resume",
      "topics": [
        "GitHub profile README (skills projects stats)",
        "Pin 4-6 best repositories",
        "Resume: one page strong action verbs quantify impact",
        "LinkedIn: connect with 50 developers in target area"
      ]
    },
    {
      "day": 7,
      "focus": "Interview Preparation",
      "topics": [
        "5 STAR method behavioral stories ready",
        "Review all DSA patterns",
        "Practice 3 system designs out loud",
        "Apply to 10 positions today — start the funnel"
      ]
    }
  ],
  "concepts": [],
  "projects": [
    {
      "title": "Full-Stack SaaS Platform",
      "icon": "🚀",
      "difficulty": "advanced",
      "desc": "A production-grade SaaS demonstrating senior-level full-stack skills.",
      "features": [
        "JWT + OAuth2 Google authentication",
        "Multi-tenant data isolation",
        "Subscription billing (Stripe)",
        "Admin dashboard with analytics",
        "Email notifications (SendGrid)",
        "WebSocket real-time updates",
        "React + Next.js 14 frontend",
        "Spring Boot 3 backend",
        "PostgreSQL + Redis + RabbitMQ",
        "Docker + GitHub Actions CI/CD"
      ],
      "tech": [
        "Next.js 14",
        "TypeScript",
        "Spring Boot 3",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS"
      ],
      "goals": [
        "Production-grade full-stack system",
        "Demonstrate all 6 phases",
        "Impressive portfolio centerpiece"
      ]
    },
    {
      "title": "Real-Time Chat Application",
      "icon": "💬",
      "difficulty": "advanced",
      "desc": "A WhatsApp-inspired real-time chat app.",
      "features": [
        "WebSocket messaging (Spring WebSocket + STOMP)",
        "Channels and direct messages",
        "User presence (online/offline)",
        "File/image sharing (S3)",
        "Message history with pagination",
        "React frontend with optimistic updates"
      ],
      "tech": [
        "Spring WebSocket",
        "STOMP",
        "React",
        "AWS S3",
        "PostgreSQL"
      ],
      "goals": [
        "WebSocket implementation",
        "Real-time system design",
        "Complex state management"
      ]
    },
    {
      "title": "AI-Powered Study Assistant",
      "icon": "🤖",
      "difficulty": "advanced",
      "desc": "A RAG-based AI assistant that answers questions from uploaded documents.",
      "features": [
        "Upload PDFs and documents",
        "OpenAI GPT-4 / Gemini integration",
        "RAG (Retrieval Augmented Generation)",
        "Vector database (pgvector or Pinecone)",
        "Streaming responses",
        "Chat history per document",
        "Next.js frontend with streaming UI"
      ],
      "tech": [
        "Spring AI",
        "OpenAI API",
        "pgvector",
        "Next.js",
        "TypeScript"
      ],
      "goals": [
        "AI integration in production",
        "Vector database fundamentals",
        "Streaming API responses"
      ]
    }
  ],
  "resources": [
    {
      "title": "Levels.fyi",
      "type": "tool",
      "icon": "🔧",
      "desc": "Research compensation at tech companies. Know your worth.",
      "url": "https://www.levels.fyi/"
    },
    {
      "title": "Tech Interview Handbook",
      "type": "docs",
      "icon": "📚",
      "desc": "Free comprehensive interview guide.",
      "url": "https://www.techinterviewhandbook.org/"
    }
  ]
};

const DAILY_ROUTINE = {
  "title": "Daily Beast Mode Routine",
  "subtitle": "6-7 hours per day of focused, deliberate practice",
  "blocks": [
    {
      "time": "2h",
      "activity": "New Concept Learning",
      "detail": "Read docs watch videos take notes on the current week topic",
      "icon": "📖"
    },
    {
      "time": "2h",
      "activity": "Hands-On Coding",
      "detail": "Implement what you learned. Type every line of code — never copy paste",
      "icon": "💻"
    },
    {
      "time": "1h",
      "activity": "DSA Practice",
      "detail": "1-2 LeetCode problems. Do not just solve — analyze time/space complexity",
      "icon": "🧩"
    },
    {
      "time": "1h",
      "activity": "Project Building",
      "detail": "Add a feature to your current project. Push to GitHub daily",
      "icon": "🚀"
    },
    {
      "time": "30m",
      "activity": "Review & Reflect",
      "detail": "What did I learn? What confused me? What do I need to revisit tomorrow?",
      "icon": "📝"
    }
  ],
  "weeklyRhythm": [
    {
      "day": "Monday",
      "focus": "New week topic introduction + fundamentals"
    },
    {
      "day": "Tuesday",
      "focus": "Deep dive into first 2 concepts + coding practice"
    },
    {
      "day": "Wednesday",
      "focus": "Next 2 concepts + project feature"
    },
    {
      "day": "Thursday",
      "focus": "Advanced concepts + DSA problems"
    },
    {
      "day": "Friday",
      "focus": "Mini-project or large coding exercise"
    },
    {
      "day": "Saturday",
      "focus": "Catch up + harder DSA + review weak areas"
    },
    {
      "day": "Sunday",
      "focus": "Rest (walk outside) OR light reading/videos only — NO intense coding"
    }
  ]
};

const TOOLS_ECOSYSTEM = {
  "title": "Tools & Ecosystem",
  "categories": [
    {
      "name": "Version Control",
      "tools": [
        {
          "name": "Git",
          "icon": "🌿",
          "why": "Track every change. Non-negotiable.",
          "cmds": [
            "git add .",
            "git commit -m \"msg\"",
            "git push"
          ]
        },
        {
          "name": "GitHub",
          "icon": "🐱",
          "why": "Host code collaborate build portfolio.",
          "cmds": [
            "gh pr create",
            "gh repo create",
            "gh issue list"
          ]
        }
      ]
    },
    {
      "name": "Containerization",
      "tools": [
        {
          "name": "Docker",
          "icon": "🐳",
          "why": "Package apps with their dependencies. Runs anywhere.",
          "cmds": [
            "docker build -t app .",
            "docker run -p 8080:8080 app",
            "docker-compose up"
          ]
        }
      ]
    },
    {
      "name": "CI/CD",
      "tools": [
        {
          "name": "GitHub Actions",
          "icon": "⚙️",
          "why": "Automate tests build deploy on every push.",
          "cmds": [
            "on: push: branches: [main]",
            "jobs: test: runs-on: ubuntu-latest"
          ]
        }
      ]
    },
    {
      "name": "Cloud",
      "tools": [
        {
          "name": "AWS EC2",
          "icon": "☁️",
          "why": "Virtual machines in the cloud. Host your backend.",
          "cmds": [
            "aws ec2 run-instances",
            "ssh -i key.pem ec2-user@ip"
          ]
        },
        {
          "name": "AWS S3",
          "icon": "🪣",
          "why": "Object storage for files images static sites.",
          "cmds": [
            "aws s3 cp file.txt s3://bucket/",
            "aws s3 sync ./dist s3://bucket/"
          ]
        },
        {
          "name": "Vercel",
          "icon": "▲",
          "why": "Zero-config Next.js hosting. Free tier.",
          "cmds": [
            "vercel",
            "vercel --prod"
          ]
        }
      ]
    },
    {
      "name": "Monitoring",
      "tools": [
        {
          "name": "Spring Actuator",
          "icon": "📊",
          "why": "Health checks metrics endpoints for your Spring app.",
          "cmds": [
            "GET /actuator/health",
            "GET /actuator/metrics"
          ]
        },
        {
          "name": "Grafana + Prometheus",
          "icon": "📈",
          "why": "Visualize metrics alerts dashboards.",
          "cmds": [
            "docker run grafana/grafana",
            "scrape_configs: - job_name: spring"
          ]
        }
      ]
    },
    {
      "name": "Testing",
      "tools": [
        {
          "name": "JUnit 5",
          "icon": "🧪",
          "why": "Java unit testing framework.",
          "cmds": [
            "@Test",
            "@BeforeEach",
            "assertEquals(expected actual)"
          ]
        },
        {
          "name": "Mockito",
          "icon": "🎭",
          "why": "Mock dependencies in unit tests.",
          "cmds": [
            "Mockito.mock(Service.class)",
            "when(mock.method()).thenReturn(value)",
            "verify(mock).method()"
          ]
        },
        {
          "name": "Jest",
          "icon": "🃏",
          "why": "JavaScript testing framework.",
          "cmds": [
            "npm test",
            "jest --watch",
            "jest --coverage"
          ]
        }
      ]
    }
  ]
};

const BUILD_IN_PUBLIC = {
  "title": "Build in Public Strategy",
  "subtitle": "Document your journey. Build your audience. Get hired faster.",
  "steps": [
    {
      "title": "GitHub: Your Code Portfolio",
      "icon": "📁",
      "actions": [
        "Push code EVERY day — green squares = consistency and discipline",
        "Write meaningful commit messages: \"feat: add JWT authentication\" not \"fixed stuff\"",
        "Every project needs a README: what does it do how to run it screenshots",
        "Pin your 6 best repositories on your profile",
        "Contribute to open source: fix a bug or improve documentation in a real project"
      ]
    },
    {
      "title": "LinkedIn: Your Professional Story",
      "icon": "💼",
      "actions": [
        "Post weekly: \"Week 15: Built my first React app. Learned about hooks and state management.\"",
        "Share your project screenshots with explanation of what you built and what you learned",
        "Connect with 5 developers every day in your target tech stack",
        "Comment thoughtfully on posts by engineers at your target companies",
        "Add every technology to your Skills section as you learn it"
      ]
    },
    {
      "title": "Twitter/X or Dev.to: Your Technical Voice",
      "icon": "🐦",
      "actions": [
        "Tweet daily: \"TIL: The difference between @PreAuthorize and @PostAuthorize in Spring Security\"",
        "Thread your weekly learnings: 5-tweet summaries of what you learned",
        "Ask questions publicly: more engagement and you get answers fast",
        "Share code snippets: \"Here is how I implemented JWT refresh tokens in Spring Boot\"",
        "Document your failures: \"I spent 4 hours on this N+1 query bug — here is how I found and fixed it\""
      ]
    },
    {
      "title": "Your Developer Blog",
      "icon": "✍️",
      "actions": [
        "Write one technical blog post per week (on your Next.js blog project!)",
        "Document problems you solved: others search for the same issue",
        "Explain concepts you just learned in your own words — the best way to solidify knowledge",
        "Case studies of your projects: architecture decisions trade-offs lessons learned",
        "Cross-post to DEV.to HashNode and your LinkedIn — multiply reach"
      ]
    }
  ]
};

const INTERVIEW_PREP = {
  "title": "Interview Preparation Guide",
  "behavioral": [
    {
      "q": "Tell me about a challenging technical problem you solved.",
      "hint": "STAR method: Situation Task Action Result. Pick a real project problem. Focus on YOUR actions and decision-making."
    },
    {
      "q": "How do you stay up-to-date with technology?",
      "hint": "Mention blogs (baeldung.com java.dev), newsletters (ByteByteGo), podcasts, open source. Show genuine curiosity."
    },
    {
      "q": "Describe a time you disagreed with a technical decision.",
      "hint": "Show you can advocate respectfully for your view and also accept others decisions. Focus on the process not the outcome."
    },
    {
      "q": "How do you handle tight deadlines?",
      "hint": "Prioritization, communication, MVP thinking, knowing when to ask for help."
    },
    {
      "q": "Tell me about a time you mentored someone.",
      "hint": "Even if junior: blog posts code reviews pair programming. Shows leadership mindset."
    }
  ],
  "javaQuestions": [
    {
      "q": "What is the difference between HashMap and ConcurrentHashMap?",
      "hint": "HashMap: not thread-safe O(1) avg. ConcurrentHashMap: thread-safe via segment locking no null keys Java 8 uses tree when bucket > 8 entries."
    },
    {
      "q": "Explain Java memory model and garbage collection.",
      "hint": "Heap (Young Gen: Eden + Survivor, Old Gen) + Metaspace. GC algorithms: G1 (default) ZGC for low-latency. STW (stop-the-world) pauses."
    },
    {
      "q": "What is the difference between @Component @Service and @Repository?",
      "hint": "All are @Component stereotypes. @Service: service layer semantic. @Repository: persistence layer + exception translation. @Controller: web layer. Functionally same but semantic clarity matters."
    },
    {
      "q": "Explain the N+1 problem in JPA and how to solve it.",
      "hint": "Loading N entities then lazily loading a collection on each = N+1 queries. Fix: JOIN FETCH in @Query or @EntityGraph. Use Hibernate statistics to detect it."
    },
    {
      "q": "What are the SOLID principles?",
      "hint": "S: Single Responsibility. O: Open/Closed (extend not modify). L: Liskov Substitution. I: Interface Segregation. D: Dependency Inversion. Give a code example for each."
    }
  ],
  "systemDesignTips": [
    "Always start by clarifying requirements — never assume. Ask \"How many users? What is the expected RPS? Any latency SLAs?\"",
    "Estimate scale before designing — it changes everything. 1000 users vs 10M users need completely different architectures.",
    "Draw the system as you talk. Boxes for services, arrows for data flow, cylinders for databases.",
    "Discuss trade-offs explicitly: \"We could use SQL for strong consistency or Cassandra for write throughput. Given the high write load I would choose Cassandra here.\"",
    "Know CAP theorem: in a distributed system you can only guarantee 2 of 3 (Consistency Availability Partition tolerance).",
    "Common components: CDN Load Balancer App Servers Cache (Redis) Database (Primary + Replicas) Message Queue (Kafka/RabbitMQ) Object Storage (S3)."
  ]
};

/* ================================================================
   RENDERING ENGINE & APP LOGIC
   ================================================================ */

// ─── STATE ────────────────────────────────────────────────────────
const STATE = {
  currentView: 'home',
  currentWeekId: null,
  currentTab: 'overview',
  sidebarOpen: window.innerWidth > 900,
  theme: localStorage.getItem('theme') || 'dark',
  progress: JSON.parse(localStorage.getItem('roadmap-progress') || '{}'),
  searchQuery: ''
};

// ─── HELPERS ──────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function saveProgress() {
  localStorage.setItem('roadmap-progress', JSON.stringify(STATE.progress));
  updateAllProgress();
}

function isTopicDone(key) { return !!STATE.progress[key]; }

function toggleTopic(key) {
  STATE.progress[key] = !STATE.progress[key];
  saveProgress();
}

function getWeekProgress(weekId) {
  const week = WEEKS[weekId];
  if (!week) return { done: 0, total: 0, pct: 0 };
  let total = 0, done = 0;
  week.days.forEach(d => d.topics.forEach(t => {
    const k = `${weekId}-day${d.day}-${t}`;
    total++;
    if (STATE.progress[k]) done++;
  }));
  (week.concepts || []).forEach((c, i) => {
    const k = `${weekId}-concept-${i}`;
    total++;
    if (STATE.progress[k]) done++;
  });
  (week.dsaProblems || []).forEach((p, i) => {
    const k = `${weekId}-dsa-${i}`;
    total++;
    if (STATE.progress[k]) done++;
  });
  return { done, total, pct: total > 0 ? Math.round(done / total * 100) : 0 };
}

function getPhaseProgress(phase) {
  const p = PHASES.find(p => p.number === phase);
  if (!p) return { done: 0, total: 0, pct: 0 };
  let totalDone = 0, totalAll = 0;
  p.weekIds.forEach(wid => {
    const wp = getWeekProgress(wid);
    totalDone += wp.done;
    totalAll += wp.total;
  });
  return { done: totalDone, total: totalAll, pct: totalAll > 0 ? Math.round(totalDone / totalAll * 100) : 0 };
}

function getOverallProgress() {
  let done = 0, total = 0;
  Object.values(WEEKS).forEach(w => {
    const wp = getWeekProgress(w.id);
    done += wp.done; total += wp.total;
  });
  return { done, total, pct: total > 0 ? Math.round(done / total * 100) : 0 };
}

function getPhaseColor(num) {
  const colors = { 1:'#58a6ff', 2:'#f0883e', 3:'#3fb950', 4:'#bc8cff', 5:'#ffa657', 6:'#79c0ff' };
  return colors[num] || '#58a6ff';
}

// ─── UPDATE PROGRESS DISPLAYS ────────────────────────────────────
function updateAllProgress() {
  const ov = getOverallProgress();
  const pct = ov.pct;

  // Top bar
  const tbBar = $('tb-progress-bar');
  const tbLabel = $('tb-progress-label');
  if (tbBar) tbBar.style.width = pct + '%';
  if (tbLabel) tbLabel.textContent = pct + '%';

  // Ring
  const ring = $('ring-fill');
  const ringPct = $('ring-pct');
  const ringSub = $('ring-sub');
  if (ring) {
    const circumference = 2 * Math.PI * 28;
    const offset = circumference - (pct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    ring.style.strokeDasharray = circumference;
  }
  if (ringPct) ringPct.textContent = pct + '%';
  if (ringSub) ringSub.textContent = `${ov.done} / ${ov.total} topics`;

  // Phase progress bars in sidebar
  PHASES.forEach(phase => {
    const pp = getPhaseProgress(phase.number);
    const bar = document.querySelector(`.phase-progress-fill[data-phase="${phase.number}"]`);
    if (bar) bar.style.width = pp.pct + '%';
    const wBtns = document.querySelectorAll(`[data-week-phase="${phase.number}"]`);
    wBtns.forEach(btn => {
      const wid = btn.dataset.weekId;
      const wp = getWeekProgress(wid);
      if (wp.pct === 100) btn.classList.add('completed');
      else btn.classList.remove('completed');
    });
  });

  // Phase cards on home
  PHASES.forEach(phase => {
    const pp = getPhaseProgress(phase.number);
    const fill = document.querySelector(`.pc-progress-fill[data-phase="${phase.number}"]`);
    const lbl = document.querySelector(`.pc-progress-label[data-phase="${phase.number}"]`);
    if (fill) fill.style.width = pp.pct + '%';
    if (lbl) lbl.textContent = `${pp.pct}% complete`;
  });
}

// ─── SIDEBAR ──────────────────────────────────────────────────────
function renderSidebar() {
  const nav = $('sidebar-nav');
  if (!nav) return;

  let html = '';
  PHASES.forEach(phase => {
    const isOpen = STATE.currentWeekId && WEEKS[STATE.currentWeekId]?.phase === phase.number;
    html += `
      <div class="phase-group">
        <div class="phase-header ${isOpen ? 'open' : ''}" data-phase="${phase.number}" onclick="togglePhase(${phase.number}, this)">
          <span class="phase-dot" style="background:${phase.color}"></span>
          <span>Phase ${phase.number}: ${phase.title}</span>
          <span class="phase-chevron">▾</span>
        </div>
        <div class="phase-progress-bar">
          <div class="phase-progress-fill" data-phase="${phase.number}" style="background:${phase.color}; width:0%"></div>
        </div>
        <div class="week-list">
          ${phase.weekIds.map(wid => {
            const w = WEEKS[wid];
            return `<button class="week-btn ${STATE.currentWeekId === wid ? 'active' : ''}"
              data-week-id="${wid}" data-week-phase="${phase.number}"
              onclick="navigateToWeek('${wid}')">
              <span class="week-num">W${w.number}</span>
              <span style="flex:1;text-align:left">${w.title}</span>
              <span class="week-check">✓</span>
            </button>`;
          }).join('')}
        </div>
      </div>`;
  });

  nav.innerHTML = html;

  // Open current phase
  if (STATE.currentWeekId) {
    const phase = WEEKS[STATE.currentWeekId]?.phase;
    const header = nav.querySelector(`.phase-header[data-phase="${phase}"]`);
    if (header) header.classList.add('open');
  }

  updateAllProgress();
}

function togglePhase(num, el) {
  el.classList.toggle('open');
}

// ─── NAVIGATION ───────────────────────────────────────────────────
function navigateToWeek(weekId) {
  STATE.currentWeekId = weekId;
  STATE.currentView = 'week';
  STATE.currentTab = 'overview';
  renderWeekView(weekId);
  renderSidebar();
  window.scrollTo(0, 0);

  // Mobile: close sidebar
  if (window.innerWidth <= 900) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function navigateHome() {
  STATE.currentView = 'home';
  STATE.currentWeekId = null;
  renderHomeView();
  renderSidebar();
}

function navigateSpecial(view) {
  STATE.currentView = view;
  renderSpecialView(view);
}

// ─── HOME VIEW ────────────────────────────────────────────────────
function renderHomeView() {
  const container = $('view-container');

  const totalWeeks = Object.keys(WEEKS).length;
  const ov = getOverallProgress();

  container.innerHTML = `
    <div class="home-hero">
      <div class="home-badge">⚡ Beast Mode — 26 Weeks to Senior Developer</div>
      <h1 class="home-title">Full Stack Engineering<br>Roadmap 2026</h1>
      <p class="home-subtitle">Transform from complete beginner to senior-level full stack engineer capable of building production-grade applications and passing top tech interviews.</p>
      <div class="home-stats">
        <div class="stat-card"><span class="stat-num">${totalWeeks}</span><span class="stat-lbl">Weeks</span></div>
        <div class="stat-card"><span class="stat-num">6</span><span class="stat-lbl">Phases</span></div>
        <div class="stat-card"><span class="stat-num">${ov.total}</span><span class="stat-lbl">Topics</span></div>
        <div class="stat-card"><span class="stat-num">${ov.done}</span><span class="stat-lbl">Completed</span></div>
        <div class="stat-card"><span class="stat-num" id="home-pct">${ov.pct}%</span><span class="stat-lbl">Progress</span></div>
      </div>
      <div class="callout callout-tip">
        <span class="callout-icon">💡</span>
        <span><strong>How to use this roadmap:</strong> Click any week to open it. Check off topics as you complete them. Your progress is saved automatically in your browser. Start with Week 1 and work sequentially.</span>
      </div>
    </div>

    <div class="home-phases">
      <div class="section-title">Learning Phases</div>
      <div class="phase-cards">
        ${PHASES.map(phase => {
          const pp = getPhaseProgress(phase.number);
          return `
            <div class="phase-card" style="--phase-color:${phase.color}" onclick="navigateToWeek('${phase.weekIds[0]}')">
              <div class="pc-header">
                <div class="pc-num" style="background:${phase.color}">${phase.number}</div>
                <div>
                  <div class="pc-title">${phase.title}</div>
                  <div class="pc-duration">${phase.duration}</div>
                </div>
              </div>
              <p class="pc-desc">${phase.desc}</p>
              <div class="pc-tags">
                ${phase.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}
              </div>
              <div class="pc-progress">
                <div class="pc-progress-track">
                  <div class="pc-progress-fill" data-phase="${phase.number}" style="background:${phase.color}; width:${pp.pct}%"></div>
                </div>
                <span class="pc-progress-label" data-phase="${phase.number}">${pp.pct}% complete</span>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>

    <div style="padding:0 max(24px, calc(50% - 480px)) 40px">
      <div class="section-title" style="margin-top:32px">Special Sections</div>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:12px">
        <div class="info-card" style="cursor:pointer" onclick="navigateSpecial('daily-routine')">
          <h3>📅 Daily Routine</h3>
          <p style="font-size:.85rem">Your hour-by-hour study schedule for maximum skill acquisition.</p>
        </div>
        <div class="info-card" style="cursor:pointer" onclick="navigateSpecial('tools')">
          <h3>🔧 Tools & Ecosystem</h3>
          <p style="font-size:.85rem">Git Docker AWS CI/CD Testing Monitoring — the full stack developer toolkit.</p>
        </div>
        <div class="info-card" style="cursor:pointer" onclick="navigateSpecial('build-public')">
          <h3>🚀 Build in Public</h3>
          <p style="font-size:.85rem">GitHub portfolio LinkedIn Twitter strategy to build reputation and get hired.</p>
        </div>
        <div class="info-card" style="cursor:pointer" onclick="navigateSpecial('interview-prep')">
          <h3>🎯 Interview Prep</h3>
          <p style="font-size:.85rem">Behavioral questions Java technicals system design tips and salary negotiation.</p>
        </div>
      </div>
    </div>`;
}

// ─── WEEK VIEW ────────────────────────────────────────────────────
function renderWeekView(weekId) {
  const week = WEEKS[weekId];
  if (!week) return;
  const container = $('view-container');
  const phase = PHASES.find(p => p.number === week.phase);
  const color = getPhaseColor(week.phase);
  const wp = getWeekProgress(weekId);

  // Find prev/next weeks
  const allWeekIds = Object.keys(WEEKS);
  const idx = allWeekIds.indexOf(weekId);
  const prevId = idx > 0 ? allWeekIds[idx - 1] : null;
  const nextId = idx < allWeekIds.length - 1 ? allWeekIds[idx + 1] : null;

  container.innerHTML = `
    <div class="week-view-wrap">
      <div class="week-breadcrumb">
        <a onclick="navigateHome()">Home</a>
        <span class="sep">/</span>
        <a onclick="navigateHome()">Phase ${week.phase}: ${phase?.title}</a>
        <span class="sep">/</span>
        <span>Week ${week.number}</span>
      </div>

      <div class="week-header">
        <div class="week-phase-badge" style="background:${color}20; color:${color}">
          <span class="wk-num">${week.number}</span>
          <span class="wk-lbl">WEEK</span>
        </div>
        <div class="week-header-text">
          <h1>${week.title}</h1>
          <p>${week.overview}</p>
          <div style="margin-top:10px">
            <div class="week-progress-bar">
              <div class="week-progress-fill" id="week-prog-fill" style="width:${wp.pct}%"></div>
            </div>
            <span class="week-progress-label">${wp.done}/${wp.total} topics completed (${wp.pct}%)</span>
          </div>
          <div class="week-meta">
            ${(week.goals || []).map(g => `<span class="week-meta-tag">✓ ${g}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="week-tabs">
        <button class="week-tab active" onclick="switchTab('overview', this)">📅 Daily Schedule</button>
        <button class="week-tab" onclick="switchTab('concepts', this)">🧠 Concepts</button>
        ${(week.projects||[]).length > 0 ? `<button class="week-tab" onclick="switchTab('projects', this)">🚀 Projects</button>` : ''}
        ${(week.dsaProblems||[]).length > 0 ? `<button class="week-tab" onclick="switchTab('dsa', this)">⚡ Problems</button>` : ''}
        ${(week.designCases||[]).length > 0 ? `<button class="week-tab" onclick="switchTab('design', this)">🏗️ Case Studies</button>` : ''}
        <button class="week-tab" onclick="switchTab('resources', this)">📚 Resources</button>
      </div>

      <div id="tab-overview" class="tab-panel active">
        ${renderDaySchedule(week)}
      </div>
      <div id="tab-concepts" class="tab-panel">
        ${renderConcepts(week)}
      </div>
      <div id="tab-projects" class="tab-panel">
        ${renderProjects(week)}
      </div>
      <div id="tab-dsa" class="tab-panel">
        ${renderDSAProblems(week)}
      </div>
      <div id="tab-design" class="tab-panel">
        ${renderDesignCases(week)}
      </div>
      <div id="tab-resources" class="tab-panel">
        ${renderResources(week)}
      </div>

      <div class="week-nav">
        <button class="nav-arrow" onclick="navigateToWeek('${prevId}')" ${!prevId ? 'disabled' : ''}>
          ← ${prevId ? 'Week ' + WEEKS[prevId]?.number + ': ' + WEEKS[prevId]?.title : 'First Week'}
        </button>
        <button class="nav-arrow" onclick="navigateToWeek('${nextId}')" ${!nextId ? 'disabled' : ''}>
          ${nextId ? 'Week ' + WEEKS[nextId]?.number + ': ' + WEEKS[nextId]?.title : 'Last Week'} →
        </button>
      </div>
    </div>`;
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.week-tab').forEach(b => b.classList.remove('active'));
  const panel = $(`tab-${name}`);
  if (panel) panel.classList.add('active');
  btn.classList.add('active');
}

function renderDaySchedule(week) {
  return `
    <div class="day-grid">
      ${(week.days || []).map(d => `
        <div class="day-card">
          <div class="day-card-header">
            <span class="day-num">Day ${d.day}</span>
            <span class="day-focus">${d.focus}</span>
          </div>
          <ul class="day-topics">
            ${d.topics.map(t => {
              const key = `${week.id}-day${d.day}-${t}`;
              const done = isTopicDone(key);
              return `<li class="day-topic ${done ? 'done' : ''}" onclick="handleTopicClick('${key}', this)">
                <input type="checkbox" ${done ? 'checked' : ''} onclick="event.stopPropagation(); handleTopicClick('${key}', this.parentElement)">
                <span>${t}</span>
              </li>`;
            }).join('')}
          </ul>
        </div>`).join('')}
    </div>`;
}

function handleTopicClick(key, el) {
  toggleTopic(key);
  const done = isTopicDone(key);
  el.classList.toggle('done', done);
  const cb = el.querySelector('input[type="checkbox"]');
  if (cb) cb.checked = done;
  // Update week progress bar
  const wp = getWeekProgress(el.closest('.week-view-wrap') ? STATE.currentWeekId : null);
  const fill = $('week-prog-fill');
  if (fill) fill.style.width = wp.pct + '%';
}

function renderConcepts(week) {
  if (!week.concepts?.length) return '<div class="empty-state"><span class="icon">📖</span><h3>Concepts coming soon</h3></div>';
  return `
    <div class="concepts-grid">
      ${week.concepts.map((c, i) => {
        const key = `${week.id}-concept-${i}`;
        const done = isTopicDone(key);
        return `
          <div class="concept-card ${done ? 'completed' : ''}">
            <div class="concept-header" onclick="toggleConcept(this)">
              <span class="concept-icon">${c.icon || '📌'}</span>
              <span class="concept-title">${c.title}</span>
              <label style="margin-left:auto; display:flex; align-items:center; gap:6px; cursor:pointer" onclick="event.stopPropagation()">
                <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleTopic('${key}'); updateAllProgress()" style="accent-color:var(--success)">
                <span style="font-size:.75rem; color:var(--text-3)">Done</span>
              </label>
              <span class="concept-chevron">▾</span>
            </div>
            <div class="concept-body">
              ${c.sections?.length ? renderConceptSections(c.sections) : renderLegacyConcept(c)}
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

function renderLegacyConcept(c) {
  return `
    <p class="concept-desc">${c.desc || ''}</p>
    ${c.keyPoints?.length ? `
      <div class="concept-key-points">
        <h5>Key Points</h5>
        <ul class="kp-list">
          ${c.keyPoints.map(kp => `<li class="kp-item"><span class="kp-bullet">▸</span><span>${kp}</span></li>`).join('')}
        </ul>
      </div>` : ''}
    ${c.code ? `
      <div class="code-block-wrap">
        <div class="code-block-label">
          <span class="code-lang">${esc(c.codeLang || 'Code')}</span>
          <button class="code-copy" onclick="copyCode(this)">Copy</button>
        </div>
        <pre class="code-block">${esc(c.code)}</pre>
      </div>` : ''}`;
}

function renderConceptSections(sections) {
  return `
    <div class="concept-sections">
      ${sections.map(s => {
        const note = s.note ? `<div class="callout callout-info" style="margin-top:10px"><span class="callout-icon">💡</span><span>${s.note}</span></div>` : '';
        const warn = s.warn ? `<div class="callout callout-warn" style="margin-top:10px"><span class="callout-icon">⚠️</span><span>${s.warn}</span></div>` : '';
        const keyPoints = s.keyPoints?.length ? `
          <div class="concept-key-points" style="margin-top:10px">
            <h5>Key Points</h5>
            <ul class="kp-list">
              ${s.keyPoints.map(kp => `<li class="kp-item"><span class="kp-bullet">▸</span><span>${kp}</span></li>`).join('')}
            </ul>
          </div>` : '';
        const table = s.table?.headers?.length ? `
          <div class="table-wrap" style="margin-top:10px; overflow:auto; border:1px solid var(--border); border-radius:10px">
            <table class="mdn-table" style="width:100%; border-collapse:collapse">
              <thead>
                <tr>${s.table.headers.map(h => `<th style="text-align:left; padding:10px 12px; font-size:.78rem; color:var(--text-3); background:var(--bg-2); border-bottom:1px solid var(--border)">${h}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${(s.table.rows || []).map(r => `<tr>${r.map(cell => `<td style="padding:10px 12px; vertical-align:top; border-bottom:1px solid var(--border-light); color:var(--text-2); font-size:.9rem; line-height:1.55">${cell}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
          </div>` : '';
        const code = s.code ? `
          <div class="code-block-wrap" style="margin-top:12px">
            <div class="code-block-label">
              <span class="code-lang">${esc(s.codeLang || 'Example')}</span>
              <button class="code-copy" onclick="copyCode(this)">Copy</button>
            </div>
            <pre class="code-block">${esc(s.code)}</pre>
          </div>` : '';

        return `
          <section class="concept-section" style="padding-top:12px">
            ${s.title ? `<h4 style="margin:10px 0 6px; font-size:1rem">${s.title}</h4>` : ''}
            ${s.content ? `<div class="concept-mdn" style="color:var(--text-2); font-size:.92rem; line-height:1.75">${s.content}</div>` : ''}
            ${keyPoints}
            ${table}
            ${note}
            ${warn}
            ${code}
          </section>`;
      }).join('')}
    </div>`;
}

function toggleConcept(headerEl) {
  headerEl.parentElement.classList.toggle('open');
}

function renderProjects(week) {
  if (!week.projects?.length) return '<div class="empty-state"><span class="icon">🚀</span><h3>No projects for this week</h3></div>';
  return `
    <div class="projects-grid">
      ${week.projects.map(p => `
        <div class="project-card">
          <div class="project-header">
            <span class="project-icon">${p.icon || '🔨'}</span>
            <h3 class="project-title" style="flex:1">${p.title}</h3>
            <span class="project-difficulty diff-${p.difficulty}">${p.difficulty}</span>
          </div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-section-label">Features</div>
          <ul class="project-list">
            ${(p.features || []).map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="project-section-label">Learning Goals</div>
          <ul class="project-list">
            ${(p.goals || []).map(g => `<li>${g}</li>`).join('')}
          </ul>
          <div class="project-tech-stack">
            ${(p.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;
}

function renderDSAProblems(week) {
  if (!week.dsaProblems?.length) return '<div class="empty-state"><span class="icon">⚡</span><h3>No DSA problems for this week</h3></div>';
  return `
    <div class="callout callout-info">
      <span class="callout-icon">💡</span>
      <span>Solve these on <strong>LeetCode</strong>. Time yourself: Easy = 15 min, Medium = 30 min, Hard = 45 min. If stuck after the time limit, look at the approach (not code), then try again.</span>
    </div>
    <div style="margin-top:16px" class="dsa-problems">
      ${week.dsaProblems.map((p, i) => {
        const key = `${week.id}-dsa-${i}`;
        const done = isTopicDone(key);
        return `<div class="dsa-problem ${done ? 'done' : ''}" onclick="handleTopicClick('${key}', this)">
          <input type="checkbox" ${done ? 'checked' : ''} onclick="event.stopPropagation(); handleTopicClick('${key}', this.parentElement)" style="accent-color:var(--success)">
          <span class="dsa-problem-name">${p.name}</span>
          <span class="dsa-tag">${p.tag}</span>
          <span class="dsa-difficulty dsa-${p.difficulty}">${p.difficulty}</span>
        </div>`;
      }).join('')}
    </div>`;
}

function renderDesignCases(week) {
  if (!week.designCases?.length) return '<div class="empty-state"><span class="icon">🏗️</span><h3>No design cases</h3></div>';
  return `
    ${week.designCases.map(dc => `
      <div class="design-case">
        <div class="design-case-header" onclick="this.parentElement.classList.toggle('open')">
          <span class="design-case-icon">${dc.icon}</span>
          <span class="design-case-title">${dc.title}</span>
          <span class="design-case-chevron">▾</span>
        </div>
        <div class="design-case-body">
          <div class="design-section">
            <h5>Requirements</h5>
            <ul class="design-points">${(dc.requirements||[]).map(r=>`<li>${r}</li>`).join('')}</ul>
          </div>
          <div class="design-section">
            <h5>Key Components</h5>
            <ul class="design-points">${(dc.components||[]).map(c=>`<li>${c}</li>`).join('')}</ul>
          </div>
          <div class="design-section">
            <h5>Trade-offs to Discuss</h5>
            <ul class="design-points">${(dc.tradeoffs||[]).map(t=>`<li>${t}</li>`).join('')}</ul>
          </div>
        </div>
      </div>`).join('')}`;
}

function renderResources(week) {
  if (!week.resources?.length) return '<div class="empty-state"><span class="icon">📚</span><h3>No resources listed</h3></div>';
  return `
    <div class="resources-list">
      ${week.resources.map(r => `
        <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
          <span class="resource-icon">${r.icon || '📖'}</span>
          <div class="resource-info">
            <div class="resource-title">${r.title}</div>
            <div class="resource-desc">${r.desc}</div>
          </div>
          <span class="resource-type rtype-${r.type}">${r.type}</span>
        </a>`).join('')}
    </div>`;
}

// ─── SPECIAL VIEWS ────────────────────────────────────────────────
function renderSpecialView(view) {
  const container = $('view-container');

  if (view === 'daily-routine') {
    const dr = DAILY_ROUTINE;
    container.innerHTML = `
      <div class="special-view-wrap">
        <h1>${dr.title}</h1>
        <p class="subtitle">${dr.subtitle}</p>
        <div class="section-title">Daily Schedule</div>
        <div class="routine-grid">
          ${dr.blocks.map(b => `
            <div class="routine-card">
              <span style="font-size:2rem">${b.icon}</span>
              <span class="routine-time">${b.time}</span>
              <div class="routine-activity">${b.activity}</div>
              <div class="routine-detail">${b.detail}</div>
            </div>`).join('')}
        </div>
        <div class="section-title" style="margin-top:28px">Weekly Rhythm</div>
        <div class="info-card">
          <div class="info-list">
            ${dr.weeklyRhythm.map(d => `
              <li><span class="bullet" style="color:var(--accent)">▸</span><span><strong>${d.day}:</strong> ${d.focus}</span></li>`).join('')}
          </div>
        </div>
        <div class="callout callout-warn" style="margin-top:16px">
          <span class="callout-icon">⚠️</span>
          <span>Consistency beats intensity. 5 hours every day beats 35 hours in one weekend. Show up daily.</span>
        </div>
      </div>`;
  }

  else if (view === 'tools') {
    const te = TOOLS_ECOSYSTEM;
    container.innerHTML = `
      <div class="special-view-wrap">
        <h1>${te.title}</h1>
        <p class="subtitle">Every tool a professional full-stack developer uses daily.</p>
        ${te.categories.map(cat => `
          <div class="section-title" style="margin-top:24px">${cat.name}</div>
          <div class="tools-grid">
            ${cat.tools.map(t => `
              <div class="tool-card">
                <div class="tool-header">
                  <span class="tool-icon">${t.icon}</span>
                  <span class="tool-name">${t.name}</span>
                </div>
                <p class="tool-why">${t.why}</p>
                <div class="tool-cmds">
                  ${t.cmds.map(c => `<code class="tool-cmd">${esc(c)}</code>`).join('')}
                </div>
              </div>`).join('')}
          </div>`).join('')}
      </div>`;
  }

  else if (view === 'build-public') {
    const bp = BUILD_IN_PUBLIC;
    container.innerHTML = `
      <div class="special-view-wrap">
        <h1>${bp.title}</h1>
        <p class="subtitle">${bp.subtitle}</p>
        ${bp.steps.map(step => `
          <div class="info-card" style="margin-bottom:16px">
            <h3>${step.icon} ${step.title}</h3>
            <ul class="info-list" style="margin-top:10px">
              ${step.actions.map(a => `<li><span class="bullet">▸</span><span>${a}</span></li>`).join('')}
            </ul>
          </div>`).join('')}
        <div class="callout callout-tip" style="margin-top:8px">
          <span class="callout-icon">🚀</span>
          <span>Start today. Post your Day 1 setup to LinkedIn right now. The journey of 1000 miles begins with a single step — and a single post.</span>
        </div>
      </div>`;
  }

  else if (view === 'interview-prep') {
    const ip = INTERVIEW_PREP;
    container.innerHTML = `
      <div class="special-view-wrap">
        <h1>${ip.title}</h1>

        <div class="interview-section">
          <h3>Behavioral Questions (STAR Method)</h3>
          <div class="callout callout-info"><span class="callout-icon">💡</span><span>STAR = Situation, Task, Action, Result. Prepare 5-7 stories from real projects. Each story should be ~2 minutes.</span></div>
          <div class="qa-list" style="margin-top:12px">
            ${ip.behavioral.map(q => `
              <div class="qa-item">
                <div class="qa-q" onclick="this.parentElement.classList.toggle('open')">
                  <span>${q.q}</span>
                  <span class="qa-chevron">▾</span>
                </div>
                <div class="qa-a">${q.hint}</div>
              </div>`).join('')}
          </div>
        </div>

        <div class="interview-section" style="margin-top:28px">
          <h3>Java & Spring Technical Questions</h3>
          <div class="qa-list">
            ${ip.javaQuestions.map(q => `
              <div class="qa-item">
                <div class="qa-q" onclick="this.parentElement.classList.toggle('open')">
                  <span>${q.q}</span>
                  <span class="qa-chevron">▾</span>
                </div>
                <div class="qa-a">${q.hint}</div>
              </div>`).join('')}
          </div>
        </div>

        <div class="interview-section" style="margin-top:28px">
          <h3>System Design Interview Tips</h3>
          <div class="info-card">
            <ul class="info-list">
              ${ip.systemDesignTips.map(t => `<li><span class="bullet">▸</span><span>${t}</span></li>`).join('')}
            </ul>
          </div>
        </div>
      </div>`;
  }
}

// ─── SEARCH ───────────────────────────────────────────────────────
function buildSearchIndex() {
  const index = [];
  Object.values(WEEKS).forEach(week => {
    // Week itself
    index.push({ type: 'week', title: `Week ${week.number}: ${week.title}`, sub: week.overview?.slice(0, 80) + '...', weekId: week.id, phase: week.phase });
    // Concepts
    (week.concepts || []).forEach(c => {
      index.push({ type: 'concept', title: c.title, sub: `Week ${week.number} — ${c.desc?.slice(0,60)}...`, weekId: week.id, phase: week.phase });
    });
    // DSA problems
    (week.dsaProblems || []).forEach(p => {
      index.push({ type: 'problem', title: p.name, sub: `${p.difficulty} · ${p.tag} — Week ${week.number}`, weekId: week.id, phase: week.phase });
    });
  });
  return index;
}

let searchIndex = null;

function handleSearch(query) {
  if (!searchIndex) searchIndex = buildSearchIndex();
  const dropdown = $('search-dropdown');
  const q = query.trim().toLowerCase();
  if (!q) { dropdown.classList.add('hidden'); return; }

  const results = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) ||
    (item.sub || '').toLowerCase().includes(q)
  ).slice(0, 12);

  if (!results.length) {
    dropdown.innerHTML = `<div class="search-empty">No results for "${esc(query)}"</div>`;
  } else {
    const icons = { week: '📅', concept: '🧠', problem: '⚡' };
    const color = getPhaseColor;
    dropdown.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="navigateToWeek('${r.weekId}'); $('search-input').value=''; $('search-dropdown').classList.add('hidden')">
        <span class="sri-icon">${icons[r.type] || '📌'}</span>
        <div>
          <div class="sri-title">${r.title}</div>
          <div class="sri-sub">${r.sub || ''}</div>
        </div>
        <span class="sri-tag" style="background:${color(r.phase)}20; color:${color(r.phase)}">Phase ${r.phase}</span>
      </div>`).join('');
  }
  dropdown.classList.remove('hidden');
}

// ─── COPY CODE ────────────────────────────────────────────────────
function copyCode(btn) {
  const code = btn.closest('.code-block-wrap').querySelector('pre').textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// ─── TOAST ────────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ─── KEYBOARD SHORTCUT ────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    $('search-input').focus();
    $('search-input').select();
  }
  if (e.key === 'Escape') {
    $('search-dropdown').classList.add('hidden');
    $('search-input').blur();
  }
});

// ─── INIT ─────────────────────────────────────────────────────────
function init() {
  // Apply theme
  document.documentElement.setAttribute('data-theme', STATE.theme);
  $('theme-icon').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';

  // Sidebar toggle
  $('sidebar-toggle').addEventListener('click', () => {
    const sb = $('sidebar');
    if (window.innerWidth <= 900) {
      sb.classList.toggle('open');
    } else {
      if (sb.classList.contains('collapsed')) {
        sb.classList.remove('collapsed');
        document.getElementById('app').style.gridTemplateColumns = 'var(--sidebar-w) 1fr';
      } else {
        sb.classList.add('collapsed');
        document.getElementById('app').style.gridTemplateColumns = '0 1fr';
      }
    }
  });

  // Theme toggle
  $('theme-toggle').addEventListener('click', () => {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', STATE.theme);
    $('theme-icon').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', STATE.theme);
  });

  // Reset progress
  $('reset-btn').addEventListener('click', () => {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      STATE.progress = {};
      saveProgress();
      showToast('Progress reset', 'info');
      renderCurrentView();
    }
  });

  // Search
  $('search-input').addEventListener('input', e => handleSearch(e.target.value));
  $('search-input').addEventListener('focus', e => { if (e.target.value) handleSearch(e.target.value); });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap') && !e.target.closest('.search-dropdown')) {
      $('search-dropdown').classList.add('hidden');
    }
  });

  // Special section buttons
  document.querySelectorAll('.nav-extra-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateSpecial(btn.dataset.view));
  });

  // Render initial view
  renderSidebar();
  renderHomeView();
}

function renderCurrentView() {
  if (STATE.currentView === 'home') renderHomeView();
  else if (STATE.currentView === 'week' && STATE.currentWeekId) renderWeekView(STATE.currentWeekId);
  else if (STATE.currentView !== 'home') renderSpecialView(STATE.currentView);
  renderSidebar();
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
