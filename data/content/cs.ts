import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    A: [
      'Theme A, concepts of computer science, explains how computers and computer systems work.',
      'It covers computer fundamentals, networks, databases and machine learning, with HL extensions in several areas.',
    ],
    B: [
      'Theme B, computational thinking and problem-solving, is about designing and writing programs.',
      'You will study computational thinking, programming in Java or Python, object-oriented programming, and at HL, abstract data types like stacks, queues and linked lists.',
    ],
    X: [
      'Beyond the themes, you study an annual case study released by the IB and create a computational solution for your internal assessment.',
    ],
  },
  chapters: {
    A1: C(
      [
        'Computer fundamentals covers hardware, data representation and logic.',
        'The CPU fetches, decodes and executes instructions. It contains the control unit, the arithmetic logic unit, and registers. Cache memory speeds up access to frequently used data.',
        'Primary memory includes RAM, which is volatile, and ROM, which is not. Secondary storage like SSDs keeps data permanently.',
        'Data is represented in binary. Logic gates, such as AND, OR, NOT, NAND, NOR and XOR, process binary signals, and truth tables show their outputs. Operating systems manage hardware and software.',
      ],
      [
        ['Binary 1010 in denary', '10'],
        ['RAM vs ROM', 'RAM is volatile working memory; ROM is non-volatile.'],
        ['ALU', 'Arithmetic logic unit: performs calculations and logic.'],
        ['AND gate', 'Output 1 only when both inputs are 1.'],
      ],
      [
        ['Binary 1101 equals…', ['11', '12', '13', '14'], 2, '8 + 4 + 0 + 1 = 13.'],
        ['Which memory loses its data when power is off?', ['ROM', 'RAM', 'SSD', 'Hard disk'], 1, 'RAM is volatile.'],
        ['An XOR gate outputs 1 when…', ['Both inputs are 1', 'Inputs are different', 'Both inputs are 0', 'Always'], 1, 'Exclusive OR.'],
      ],
    ),
    A2: C(
      [
        'A network connects devices to share data and resources. Types include LAN, a local area network, and WAN, a wide area network.',
        'Network models, like the TCP/IP model, split communication into layers, each with protocols such as HTTP, TCP and IP.',
        'Data is split into packets, which travel independently and are reassembled. Devices include routers, switches and access points.',
        'Security uses encryption, firewalls and authentication. Network topologies include star and mesh, each with advantages and disadvantages.',
      ],
      [
        ['LAN vs WAN', 'LAN covers a small area; WAN covers a large geographic area.'],
        ['Packet switching', 'Data is split into packets that may travel different routes.'],
        ['Router', 'Forwards packets between networks.'],
        ['Firewall', 'Monitors and filters incoming and outgoing traffic.'],
      ],
      [
        ['The internet is an example of a…', ['LAN', 'WAN', 'PAN', 'Single computer'], 1, 'It spans the globe.'],
        ['Which protocol is used to view web pages?', ['SMTP', 'HTTP', 'FTP', 'DNS'], 1, 'HyperText Transfer Protocol.'],
        ['Encryption protects data by…', ['Compressing it', 'Making it unreadable without a key', 'Deleting it', 'Sending it faster'], 1, 'Only authorised users can decrypt it.'],
      ],
    ),
    A3: C(
      [
        'A database stores structured data. Relational databases organise data into tables of records and fields.',
        'A primary key uniquely identifies each record; a foreign key links tables together.',
        'SQL is used to query databases: SELECT, FROM, WHERE and ORDER BY retrieve data; INSERT, UPDATE and DELETE change it.',
        'Normalisation reduces redundancy. At HL, you study more advanced SQL, database design and alternative models, such as NoSQL and data warehouses.',
      ],
      [
        ['Primary key', 'A field that uniquely identifies each record.'],
        ['Foreign key', 'A field that links to the primary key of another table.'],
        ['SQL SELECT', 'Retrieves data from a database.'],
        ['Normalisation', 'Organising data to reduce redundancy.'],
      ],
      [
        ['A primary key must be…', ['A number', 'Unique for each record', 'The first column', 'Encrypted'], 1, 'It uniquely identifies records.'],
        ['SELECT name FROM students WHERE age > 16 returns…', ['All students', 'Names of students older than 16', 'Ages only', 'Nothing'], 1, 'WHERE filters rows.'],
        ['A field linking two tables is a…', ['Primary key', 'Foreign key', 'Index', 'Query'], 1, 'It references another table.'],
      ],
    ),
    A4: C(
      [
        'Machine learning lets computers learn patterns from data rather than being explicitly programmed.',
        'Supervised learning uses labelled data, such as classifying emails as spam. Unsupervised learning finds patterns in unlabelled data, like clustering customers.',
        'Reinforcement learning learns by trial and error with rewards. Neural networks are inspired by the brain and power deep learning.',
        'Data must be cleaned and split into training and test sets. Ethical issues include bias in training data, privacy and accountability.',
      ],
      [
        ['Supervised learning', 'Learning from labelled examples.'],
        ['Unsupervised learning', 'Finding patterns in unlabelled data.'],
        ['Reinforcement learning', 'Learning by rewards and penalties.'],
        ['Overfitting', 'A model learns training data too closely and fails on new data.'],
      ],
      [
        ['Grouping customers without labels is…', ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Rule-based programming'], 1, 'No labels are provided.'],
        ['Why split data into training and test sets?', ['To save memory', 'To evaluate performance on unseen data', 'To make training faster', 'It is required by law'], 1, 'Testing on new data checks generalisation.'],
        ['A model trained on biased data may…', ['Be perfectly fair', 'Produce biased predictions', 'Stop working', 'Use less power'], 1, 'Bias in data carries into the model.'],
      ],
    ),
    B1: C(
      [
        'Computational thinking is a way of solving problems so that a computer could carry out the solution.',
        'Decomposition breaks a big problem into smaller, manageable parts. Pattern recognition spots similarities, so one solution can be reused.',
        'Abstraction removes unnecessary detail and keeps only what matters. Algorithmic design writes clear, ordered steps, which you can check using a trace table.',
        'Efficiency matters: linear search is O of n, while binary search on a sorted list is O of log n. Flowcharts and pseudocode help plan algorithms.',
      ],
      [
        ['Decomposition', 'Breaking a problem into smaller parts.'],
        ['Abstraction', 'Removing unnecessary detail.'],
        ['Binary search complexity', 'O(log n); the list must be sorted.'],
        ['Trace table', 'Tracks variable values step by step through an algorithm.'],
      ],
      [
        ['Binary search requires the list to be…', ['Short', 'Sorted', 'Numeric only', 'Stored in RAM'], 1, 'It relies on comparing with the middle item.'],
        ['Removing unnecessary detail from a problem is called…', ['Decomposition', 'Abstraction', 'Iteration', 'Recursion'], 1, 'Abstraction keeps only what matters.'],
        ['Linear search on 1000 items needs at most how many comparisons?', ['10', '100', '500', '1000'], 3, 'It may check every item.'],
      ],
    ),
    B2: C(
      [
        'Programming turns algorithms into code. You will use variables, data types, operators and input and output.',
        'The three basic constructs are sequence, selection with if statements, and iteration with for and while loops.',
        'Programs use data structures such as arrays and lists, and break code into functions or methods with parameters and return values.',
        'Good programs are tested with normal, boundary and erroneous data, and are readable, with meaningful names and comments. Recursion is a function calling itself.',
      ],
      [
        ['Three programming constructs', 'Sequence, selection, iteration.'],
        ['Boundary data', 'Values at the edge of the valid range.'],
        ['Function', 'A named block of code that can take parameters and return a value.'],
        ['Recursion', 'A function that calls itself, with a base case.'],
      ],
      [
        ['A loop that repeats while a condition is true is…', ['Selection', 'Iteration', 'Sequence', 'Declaration'], 1, 'Loops are iteration.'],
        ['For a valid range 1–100, which is boundary data?', ['50', '100', '−5', '"abc"'], 1, 'It is at the edge of the range.'],
        ['A recursive function must have a…', ['Global variable', 'Base case', 'Loop', 'Array'], 1, 'Otherwise it never stops.'],
      ],
    ),
    B3: C(
      [
        'Object-oriented programming, OOP, organises code into classes and objects. A class is a blueprint; an object is an instance of it.',
        'Encapsulation bundles data and methods together and restricts direct access using private attributes and public methods.',
        'Inheritance lets a subclass reuse and extend a parent class. Polymorphism lets different classes respond to the same method call in their own way.',
        'UML class diagrams show classes, attributes, methods and relationships. OOP makes large programs easier to maintain and reuse.',
      ],
      [
        ['Class vs object', 'A class is a blueprint; an object is an instance.'],
        ['Encapsulation', 'Bundling data and methods; hiding internal data.'],
        ['Inheritance', 'A subclass inherits attributes and methods from a parent class.'],
        ['Polymorphism', 'Different classes respond to the same method in different ways.'],
      ],
      [
        ['A Dog class extending an Animal class shows…', ['Encapsulation', 'Inheritance', 'Recursion', 'Abstraction only'], 1, 'Dog inherits from Animal.'],
        ['Making attributes private with getters and setters is…', ['Polymorphism', 'Encapsulation', 'Inheritance', 'Iteration'], 1, 'It controls access to data.'],
        ['Circle and Square both having a draw() method that works differently is…', ['Polymorphism', 'Encapsulation', 'Decomposition', 'Sorting'], 0, 'Same interface, different behaviour.'],
      ],
    ),
    B4: C(
      [
        'Abstract data types, ADTs, define data and operations without specifying implementation.',
        'A stack is last in, first out, with push and pop operations. A queue is first in, first out, with enqueue and dequeue.',
        'A linked list stores nodes with data and a pointer to the next node, making insertion and deletion efficient.',
        'Binary search trees keep data ordered for fast searching; each node’s left subtree is smaller and right subtree larger. Traversals include in-order, pre-order and post-order.',
      ],
      [
        ['Stack', 'Last in, first out (LIFO): push and pop.'],
        ['Queue', 'First in, first out (FIFO): enqueue and dequeue.'],
        ['Linked list', 'Nodes with data and a pointer to the next node.'],
        ['Binary search tree', 'Left child smaller, right child larger than the node.'],
      ],
      [
        ['Which structure is first in, first out?', ['Stack', 'Queue', 'Tree', 'Array'], 1, 'A queue removes items in arrival order.'],
        ['The browser back button is best modelled by a…', ['Queue', 'Stack', 'Tree', 'Graph'], 1, 'The last page visited is the first returned to.'],
        ['In-order traversal of a binary search tree gives values…', ['Random', 'In ascending order', 'Reversed', 'Only leaves'], 1, 'Left, node, right.'],
      ],
    ),
    X1: C(
      [
        'Each year the IB releases a case study, a scenario involving computing technology, for Paper 1.',
        'It introduces a real-world context, key challenges and technical terms you must research.',
        'Prepare by learning all the terminology, researching the technologies involved, and considering social and ethical issues.',
        'Exam questions test your understanding of the scenario and your ability to evaluate solutions.',
      ],
      [
        ['Case study', 'A scenario released by the IB each year, examined in Paper 1.'],
        ['How to prepare', 'Learn the terminology and research the technologies.'],
        ['Ethical issues', 'Privacy, security, bias, impact on society.'],
        ['Exam focus', 'Understanding and evaluating solutions in context.'],
      ],
      [
        ['The case study is examined in…', ['The IA', 'Paper 1', 'The EE', 'TOK'], 1, 'It forms part of Paper 1.'],
        ['The best preparation is to…', ['Ignore it', 'Research its terms and technologies', 'Memorise one answer', 'Only study programming'], 1, 'Understand the scenario deeply.'],
        ['Evaluating a solution means…', ['Describing it only', 'Weighing strengths and weaknesses', 'Copying the text', 'Listing terms'], 1, 'Evaluation needs judgement.'],
      ],
    ),
    X2: C(
      [
        'The internal assessment is a computational solution to a real problem for a client or yourself.',
        'You identify the problem and success criteria, plan the solution, develop the product, and evaluate it against the criteria.',
        'Document your design with diagrams, and show the techniques used in development, explaining why they were chosen.',
        'Test the product and include a video showing it working. Evaluation should suggest improvements.',
      ],
      [
        ['IA product', 'A computational solution to a real problem.'],
        ['Success criteria', 'Specific, testable goals the product must meet.'],
        ['Development evidence', 'Explanation of techniques used and why.'],
        ['Evaluation', 'Judging the product against success criteria and suggesting improvements.'],
      ],
      [
        ['Success criteria should be…', ['Vague', 'Specific and testable', 'Unrelated to the problem', 'Written after finishing'], 1, 'They guide development and evaluation.'],
        ['The IA evaluation should…', ['Only praise the product', 'Compare it to the success criteria', 'List programming languages', 'Be skipped'], 1, 'Judge whether criteria were met.'],
        ['Which is good evidence of development?', ['Screenshots with explanation of techniques', 'Only the final code', 'A title page', 'Blank templates'], 0, 'Explain the techniques used.'],
      ],
    ),
  },
};

export default content;
