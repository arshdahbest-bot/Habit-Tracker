import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked examples, code tracing, common mistakes, exam technique) plus extra
// flashcards and questions for every Computer Science chapter.
const more: Record<string, MoreContent> = {
  A1: M(
    [
      'The fetch–decode–execute cycle: the program counter holds the next instruction’s address; the instruction is fetched into the instruction register, decoded by the control unit, and executed, often by the ALU.',
      'Worked example: convert denary 45 to binary. 45 is 32 plus 8 plus 4 plus 1, so 101101. In hexadecimal, 45 is 2D, because 2 times 16 plus 13 is 45.',
      'Cache memory is small, very fast memory close to the CPU that stores frequently used data. More cores and a larger cache can improve performance, but not every program uses multiple cores.',
      'Operating systems manage memory, processes, files, devices and security. Virtual memory uses secondary storage when RAM is full, which is much slower.',
    ],
    [
      ['Program counter', 'Register holding the address of the next instruction.'],
      ['Cache memory', 'Small, fast memory near the CPU for frequently used data.'],
      ['Hexadecimal 2D in denary', '45.'],
      ['Virtual memory', 'Using secondary storage as extra RAM when RAM is full.'],
    ],
    [
      ['Denary 45 in binary is…', '101101', ['110101', '101011', '100101'], '32 + 8 + 4 + 1 = 45.'],
      ['Which register holds the address of the next instruction?', 'Program counter', ['Accumulator', 'Instruction register', 'ALU'], 'It is incremented after each fetch.'],
      ['Hexadecimal FF equals…', '255', ['256', '15', '240'], '15 × 16 + 15 = 255.'],
      ['Heavy use of virtual memory makes a computer…', 'Slower', ['Faster', 'Use less power', 'Have more RAM'], 'Secondary storage is much slower than RAM.'],
    ],
  ),
  A2: M(
    [
      'The TCP/IP model has four layers: application, like HTTP; transport, TCP or UDP; internet, IP addressing and routing; and network access, physical transmission.',
      'TCP is reliable, checking packets arrive in order and resending lost ones; UDP is faster but unreliable, suitable for live video and online games.',
      'DNS translates domain names like example.com into IP addresses. IPv4 addresses are 32 bits; IPv6 addresses are 128 bits because IPv4 addresses ran out.',
      'Security: symmetric encryption uses one shared key; asymmetric encryption uses a public key to encrypt and a private key to decrypt. HTTPS uses asymmetric keys to agree a shared symmetric key, which then encrypts the data.',
    ],
    [
      ['TCP vs UDP', 'TCP: reliable, ordered. UDP: faster, no guarantee of delivery.'],
      ['DNS', 'Translates domain names into IP addresses.'],
      ['IPv6 address size', '128 bits.'],
      ['Asymmetric encryption', 'Public key encrypts; only the private key decrypts.'],
    ],
    [
      ['Which protocol suits live video streaming?', 'UDP', ['TCP', 'FTP', 'SMTP'], 'Speed matters more than resending lost packets.'],
      ['An IPv4 address has how many bits?', '32', ['64', '128', '16'], 'That gives about 4.3 billion addresses.'],
      ['Which service turns a website name into an IP address?', 'DNS', ['DHCP', 'HTTP', 'VPN'], 'The Domain Name System.'],
      ['In asymmetric encryption, the private key is used to…', 'Decrypt messages', ['Encrypt for everyone', 'Share publicly', 'Compress data'], 'Only the owner can decrypt.'],
    ],
  ),
  A3: M(
    [
      'Relational databases store data in tables of records and fields. Relationships can be one-to-one, one-to-many or many-to-many, which needs a linking table.',
      'Worked SQL example: SELECT name, grade FROM students WHERE grade >= 6 ORDER BY name. JOIN combines rows from two tables using matching keys.',
      'Normal forms: first normal form removes repeating groups; second removes partial dependencies; third removes transitive dependencies, where non-key fields depend on other non-key fields.',
      'Transactions follow ACID properties: atomicity, consistency, isolation and durability. A bank transfer must either fully complete or not happen at all.',
    ],
    [
      ['ACID', 'Atomicity, consistency, isolation, durability.'],
      ['JOIN (SQL)', 'Combines rows from two tables using matching keys.'],
      ['Many-to-many relationship', 'Needs a linking table between the two tables.'],
      ['Third normal form', 'No transitive dependencies between non-key fields.'],
    ],
    [
      ['A bank transfer either fully completes or not at all. This is…', 'Atomicity', ['Durability', 'Isolation', 'Normalisation'], 'The transaction is all or nothing.'],
      ['Students and courses have a many-to-many relationship. You need…', 'A linking table', ['One table only', 'No keys', 'A single primary key'], 'E.g. an Enrolment table.'],
      ['Which SQL clause sorts results?', 'ORDER BY', ['WHERE', 'GROUP', 'SELECT'], 'It sorts ascending by default.'],
      ['Removing repeating groups achieves…', 'First normal form', ['Second normal form', 'Third normal form', 'Denormalisation'], '1NF requires atomic values.'],
    ],
  ),
  A4: M(
    [
      'Common algorithms: linear regression predicts a number; decision trees and k-nearest neighbours classify; k-means clustering groups unlabelled data; neural networks learn complex patterns.',
      'Neural networks have an input layer, hidden layers and an output layer. Weights are adjusted during training to reduce error, using backpropagation.',
      'Evaluate models with accuracy, precision and recall. In medical tests, missing a disease, a false negative, may be worse than a false alarm.',
      'Ethics: biased training data can produce unfair outcomes, like facial recognition performing worse for some groups. Transparency, privacy and accountability matter.',
    ],
    [
      ['Neural network layers', 'Input, hidden and output layers.'],
      ['False negative', 'Model predicts “no” when the true answer is “yes”.'],
      ['K-means clustering', 'Unsupervised algorithm grouping data into k clusters.'],
      ['Backpropagation', 'Adjusting weights by passing error back through the network.'],
    ],
    [
      ['Predicting house prices from size is best done with…', 'Linear regression', ['K-means clustering', 'A queue', 'Encryption'], 'It predicts a continuous value.'],
      ['A cancer test says “healthy” for a sick patient. This is a…', 'False negative', ['False positive', 'True positive', 'True negative'], 'The disease was missed.'],
      ['K-means clustering is…', 'Unsupervised learning', ['Supervised learning', 'Reinforcement learning', 'A sorting algorithm'], 'It groups unlabelled data.'],
      ['In a neural network, training mainly adjusts the…', 'Weights', ['Input data', 'Number of users', 'Programming language'], 'Weights control each connection’s influence.'],
    ],
  ),
  B1: M(
    [
      'Pattern recognition finds similarities in problems so a solution can be reused. Algorithmic design writes clear steps using flowcharts or pseudocode.',
      'Worked example: bubble sort on 5, 3, 8, 1. First pass: 3, 5, 1, 8. Second pass: 3, 1, 5, 8. Third pass: 1, 3, 5, 8. Worst case is O(n squared).',
      'Big O notation describes how running time grows: O(1) constant, O(log n) logarithmic, O(n) linear, O(n squared) quadratic. Binary search is O(log n); linear search O(n).',
      'Exam tip: when tracing an algorithm, make a trace table with a column for each variable and update one row per step.',
    ],
    [
      ['Bubble sort worst case', 'O(n²).'],
      ['Pattern recognition', 'Spotting similarities to reuse solutions.'],
      ['O(1)', 'Constant time — does not grow with input size.'],
      ['Flowchart symbols', 'Oval: start/end; rectangle: process; diamond: decision.'],
    ],
    [
      ['After one pass of bubble sort on 5, 3, 8, 1 the list is…', '3, 5, 1, 8', ['1, 3, 5, 8', '3, 1, 5, 8', '5, 3, 1, 8'], 'The largest value bubbles to the end.'],
      ['Binary search on 1,023 sorted items needs at most…', '10 comparisons', ['1,023 comparisons', '512 comparisons', '100 comparisons'], '1,023 = 2¹⁰ − 1, so 10 halvings are enough.'],
      ['A decision in a flowchart is drawn as a…', 'Diamond', ['Rectangle', 'Oval', 'Parallelogram'], 'It has yes/no branches.'],
      ['Which grows fastest as n increases?', 'O(n²)', ['O(n)', 'O(log n)', 'O(1)'], 'Quadratic time grows fastest here.'],
    ],
  ),
  B2: M(
    [
      'Data types: integer, float or real, string, Boolean and char. Choosing the right type avoids errors, like storing a phone number as a string, not an integer.',
      'Worked tracing example: total equals 0; for i from 1 to 4, total equals total plus i. The loop adds 1, 2, 3 and 4, so total ends at 10.',
      'Error types: syntax errors break language rules; runtime errors crash during execution, like dividing by zero; logic errors give wrong results without crashing.',
      'Testing uses normal, boundary and erroneous data. Good code uses meaningful variable names, comments and modular functions.',
    ],
    [
      ['Logic error', 'Program runs but gives the wrong result.'],
      ['Runtime error', 'Error that occurs during execution, e.g. division by zero.'],
      ['Erroneous data', 'Invalid input that should be rejected.'],
      ['Boolean', 'Data type with only two values: true or false.'],
    ],
    [
      ['total = 0; for i = 1 to 4: total = total + i. Final total?', '10', ['4', '6', '15'], '1 + 2 + 3 + 4.'],
      ['Dividing by zero during execution causes a…', 'Runtime error', ['Syntax error', 'Logic error', 'Compilation success'], 'It fails while running.'],
      ['A phone number should be stored as a…', 'String', ['Integer', 'Float', 'Boolean'], 'It may start with 0 or contain +.'],
      ['Using “<” instead of “<=” so the last item is skipped is a…', 'Logic error', ['Syntax error', 'Runtime error', 'Hardware error'], 'The code runs but gives wrong results.'],
    ],
  ),
  B3: M(
    [
      'A class defines attributes, the data, and methods, the behaviour. A constructor sets up a new object’s initial state.',
      'Worked example: class BankAccount with a private balance, a deposit method that adds money, and a withdraw method that refuses if funds are too low. Encapsulation stops other code changing balance directly.',
      'Composition means a class contains objects of other classes, a “has-a” relationship, like a Car has an Engine; inheritance is an “is-a” relationship, like a Car is a Vehicle.',
      'UML class diagrams show class names, attributes and methods, with plus for public and minus for private, and arrows for inheritance.',
    ],
    [
      ['Constructor', 'Method that initialises a new object.'],
      ['Composition', '“Has-a” relationship: a class contains other objects.'],
      ['UML: + and −', 'Public (+) and private (−) members.'],
      ['Method overriding', 'A subclass provides its own version of an inherited method.'],
    ],
    [
      ['A Car containing an Engine object is an example of…', 'Composition', ['Inheritance', 'Polymorphism', 'Recursion'], 'Car has an Engine.'],
      ['In UML, a minus sign before an attribute means it is…', 'Private', ['Public', 'Static', 'Inherited'], 'Only the class can access it.'],
      ['The method that runs when an object is created is the…', 'Constructor', ['Destructor', 'Getter', 'Main method'], 'It sets initial values.'],
      ['A subclass giving its own version of an inherited method is…', 'Overriding', ['Overloading', 'Encapsulation', 'Composition'], 'This enables polymorphism.'],
    ],
  ),
  B4: M(
    [
      'Stacks use push, pop and peek, and are used for undo features, function calls and checking balanced brackets.',
      'Queues use enqueue and dequeue, and are used for print jobs and task scheduling. A circular queue reuses space when items are removed.',
      'Worked BST example: insert 50, 30, 70, 20, 40. 30 goes left of 50, 70 right, 20 left of 30, 40 right of 30. In-order traversal gives 20, 30, 40, 50, 70.',
      'Static structures, like arrays, have a fixed size; dynamic structures, like linked lists, grow and shrink but use extra memory for pointers.',
    ],
    [
      ['Peek (stack)', 'Look at the top item without removing it.'],
      ['Circular queue', 'Queue where the rear wraps around to reuse freed space.'],
      ['Static vs dynamic structure', 'Fixed size vs can grow and shrink at runtime.'],
      ['Use of a stack', 'Undo, function calls, checking balanced brackets.'],
    ],
    [
      ['Push A, push B, push C, pop. Which item is removed?', 'C', ['A', 'B', 'None'], 'LIFO.'],
      ['Enqueue A, B, C, then dequeue. Which item is removed?', 'A', ['C', 'B', 'None'], 'FIFO.'],
      ['Insert 50, 30, 70 into a BST. 30 is placed…', 'To the left of 50', ['To the right of 50', 'As the root', 'Right of 70'], 'Smaller values go left.'],
      ['A drawback of a linked list compared with an array is…', 'Extra memory for pointers and no direct indexing', ['Fixed size', 'It can’t grow', 'It can’t store numbers'], 'You must traverse from the head.'],
    ],
  ),
  X1: M(
    [
      'Build a glossary: list every technical term in the case study with a definition and an example of how it applies to the scenario.',
      'Research the technologies using reliable sources, and think about how they work, their advantages, limitations and costs.',
      'Consider stakeholders: users, developers, the organization and society. Evaluate social and ethical issues like privacy, accessibility and job losses.',
      'Practise answering past-style questions that ask you to explain, discuss or evaluate a solution in the context of the scenario, not in general.',
    ],
    [
      ['Case study glossary', 'List of key terms with definitions and scenario examples.'],
      ['Stakeholder analysis', 'Considering how different groups are affected by a solution.'],
      ['Contextualised answer', 'Applying knowledge directly to the scenario.'],
      ['Accessibility', 'Designing systems usable by people with disabilities.'],
    ],
    [
      ['A strong case study answer…', 'Applies concepts to the specific scenario', ['Repeats general definitions only', 'Ignores stakeholders', 'Avoids judgement'], 'Context earns marks.'],
      ['Considering how a system affects users, staff and society is…', 'Stakeholder analysis', ['Normalisation', 'Recursion', 'Encryption'], 'It supports evaluation.'],
      ['A useful first step with a new case study is to…', 'Build a glossary of its key terms', ['Start coding', 'Memorise model answers', 'Skip unfamiliar terms'], 'Understanding terms is essential.'],
      ['Designing for screen readers improves…', 'Accessibility', ['Encryption', 'Latency', 'Compression'], 'It supports users with visual impairments.'],
    ],
  ),
  X2: M(
    [
      'Choose a real client or user with a genuine problem, and agree success criteria with them.',
      'Plan the solution with design documents: structure charts, flowcharts, data dictionaries, class diagrams and a test plan.',
      'Show development through annotated screenshots and code extracts that explain complex techniques, such as data structures, algorithms, validation and error handling.',
      'Test against success criteria with normal, boundary and erroneous data. Evaluate honestly, include client feedback and suggest realistic improvements.',
    ],
    [
      ['Client', 'The real person or group whose problem the IA solves.'],
      ['Test plan', 'Planned tests with inputs, expected results and actual results.'],
      ['Data dictionary', 'Describes each data item: name, type, size and validation.'],
      ['Validation', 'Checking input is reasonable, e.g. range or format checks.'],
    ],
    [
      ['A document listing each field’s name, type and validation is a…', 'Data dictionary', ['Trace table', 'Gantt chart', 'User manual'], 'It supports design.'],
      ['Which is a range check?', 'Age must be between 11 and 19', ['Email must contain @', 'Name must be entered', 'Password must be 8 characters'], 'It checks values lie within limits.'],
      ['Success criteria should be agreed with…', 'The client', ['The examiner', 'Nobody', 'Other students'], 'They reflect the client’s needs.'],
      ['A good test plan includes…', 'Expected and actual results for each test', ['Only passing tests', 'No data', 'Screenshots of code only'], 'It shows the solution works.'],
    ],
  ),
};

export default more;
