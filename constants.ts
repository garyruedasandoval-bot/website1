import { Pillar, ServiceItem } from './types';

export const COMPANY_NAME = "Business Innovations";
export const COMPANY_ADDRESS = "Global Operations | Regional Hub: Middle East (Alliance Network)";
export const LINKEDIN_URL = "https://linkedin.com/company/business-innovations-demo";

export const SERVICE_CATALOG: ServiceItem[] = [
  // ==================================================================================
  // PILLAR 1: TALENT ACCELERATION & AI PROGRAM (Pages 3-8)
  // ==================================================================================
  // CONTENT NOTE: All items here are Training Courses / Certifications / Workshops
  
  // ---------------------------------------------------------
  // Category: Quality & Testing (Was Quality & Testing Excellence)
  // ---------------------------------------------------------
  
  // Sub: AI-Powered Testing
  {
    id: "p1-c1-s1-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "AI-Powered Testing",
    title: "ISTQB® AI Tester",
    leadMagnet: "ISTQB® Certified Tester AI Testing (CT-AI) Syllabus",
    description: "Certification course to master the testing of AI-based systems and AI-driven testing strategies.",
    quiz: {
      title: "Free Assessment: AI Tester Skill Assessment",
      description: "Take this 5-question skill assessment based on the CT-AI Syllabus to test your readiness.",
      questions: [
        {
          question: "You have trained an ML model for image classification. It achieves 99% accuracy on the training data but only 55% accuracy on the validation data. What is the most likely cause?",
          options: [
            "Underfitting",
            "Overfitting",
            "Data Poisoning",
            "Concept Drift"
          ],
          correctIndex: 1,
          topic: "ML Model Characteristics (Overfitting)",
          module: "Module 2: Quality Characteristics for AI-Based Systems"
        },
        {
          question: "In a binary classification of 'Spam' vs 'Not Spam', a model has the following results: TP=40, TN=50, FP=10, FN=0. What is the Precision of this model?",
          options: [
            "80%",
            "100%",
            "90%",
            "44%"
          ],
          correctIndex: 0,
          topic: "ML Functional Performance Metrics",
          module: "Module 5: ML Functional Performance Metrics"
        },
        {
          question: "You are testing a route optimization AI. You cannot easily calculate the optimal route time manually, but you know that if you add a stop to an existing route, the new total time should be greater than or equal to the original. This relationship is known as:",
          options: [
            "A Metamorphic Relation (MR)",
            "A Heuristic Oracle",
            "A Pseudo-Oracle",
            "Differential Testing"
          ],
          correctIndex: 0,
          topic: "Metamorphic Testing",
          module: "Module 9: Methods and Techniques for the Testing of AI-Based Systems"
        },
        {
          question: "An AI recruitment tool was trained on 10 years of hiring data. It consistently ranks candidates from a specific university lower, even when their qualifications are identical to others. The training data shows few hires from that university historically. What type of bias is this?",
          options: [
            "Algorithmic Bias",
            "Automation Bias",
            "Sample Bias",
            "Inappropriate Bias"
          ],
          correctIndex: 2,
          topic: "Data Quality and Bias",
          module: "Module 4: ML - Data"
        },
        {
          question: "You are designing test cases to achieve 'Sign-Change Coverage' for a neural network. What must your test cases demonstrate?",
          options: [
            "That every neuron is activated at least once.",
            "That each neuron takes both positive and negative activation values.",
            "That changing a neuron's sign in one layer changes a neuron's sign in the next layer.",
            "That the output sign changes based on input perturbation."
          ],
          correctIndex: 1,
          topic: "Neural Network Coverage",
          module: "Module 6: ML - Neural Networks and Testing"
        }
      ]
    }
  },
  {
    id: "p1-c1-s1-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "AI-Powered Testing",
    title: "ISTQB® GenAI Tester",
    leadMagnet: "ISTQB® Certified Tester Specialist - Testing with Generative AI (CT-GenAI) Syllabus",
    description: "Hands-on training to learn to use Generative AI tools to augment testing activities.",
    quiz: {
      title: "Free Assessment: GenAI Tester Skill Assessment",
      description: "Take this 5-question skill assessment based on the CT-GenAI Syllabus to test your readiness.",
      questions: [
        {
          question: "You ask a GenAI tool to generate a test script for a specific legacy banking API. The tool generates code using a library function 'validate_iban_v2()'. Upon review, you discover this function does not exist in the library documentation. This is an example of:",
          options: [
            "A Reasoning Error",
            "A Hallucination",
            "Automation Bias",
            "A Tokenization Error"
          ],
          correctIndex: 1,
          topic: "GenAI Risks (Hallucinations)",
          module: "Module 3: Managing Risks of Generative AI in Software Testing"
        },
        {
          question: "You are using an LLM to generate complex end-to-end test scenarios. You break the task into a series of intermediate prompts, where the output of one prompt (e.g., 'List user roles') becomes the input for the next (e.g., 'Generate actions for Admin role'). Which technique is this?",
          options: [
            "Meta Prompting",
            "Few-shot Prompting",
            "Prompt Chaining",
            "Zero-shot Prompting"
          ],
          correctIndex: 2,
          topic: "Prompt Engineering Techniques",
          module: "Module 2: Prompt Engineering for Effective Software Testing"
        },
        {
          question: "Your organization wants to use an LLM to answer questions about internal proprietary test standards. To avoid retraining the model, you implement a system that retrieves relevant documents from a vector database to provide context for the LLM. What is this architecture called?",
          options: [
            "Retrieval-Augmented Generation (RAG)",
            "Fine-Tuning",
            "Reinforcement Learning from Human Feedback (RLHF)",
            "Transfer Learning"
          ],
          correctIndex: 0,
          topic: "LLM-Powered Test Infrastructure",
          module: "Module 4: LLM-Powered Test Infrastructure for Software Testing"
        },
        {
          question: "When an LLM processes the word 'Testing', it might break it down into 'Test' and 'ing'. These numerical representations of text fragments used by the model are called:",
          options: [
            "Embeddings",
            "Vectors",
            "Tokens",
            "Parameters"
          ],
          correctIndex: 2,
          topic: "GenAI Foundations",
          module: "Module 1: Introduction to Generative AI for Software Testing"
        },
        {
          question: "Before pasting a production defect report into a public GenAI chatbot to ask for a root cause analysis, you replace all customer names and account numbers with generic placeholders. This practice is known as:",
          options: [
            "Data Augmentation",
            "Data Poisoning",
            "Data Anonymization / Pseudonymization",
            "Prompt Injection"
          ],
          correctIndex: 2,
          topic: "Data Privacy and Security",
          module: "Module 3: Managing Risks of Generative AI in Software Testing"
        }
      ]
    }
  },
  {
    id: "p1-c1-s1-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "AI-Powered Testing",
    title: "LLM Validation",
    leadMagnet: "LLM Validation Syllabus",
    description: "Course covering advanced techniques for validating the output and behavior of LLMs."
  },
  {
    id: "p1-c1-s1-4",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "AI-Powered Testing",
    title: "Agent Testing",
    leadMagnet: "Agent Testing Syllabus",
    description: "Training workshop on strategies for verifying autonomous software agents."
  },

  // Sub: Blockchain QA (Was Blockchain & Smart Contract Assurance)
  {
    id: "p1-c1-s2-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Blockchain QA",
    title: "Smart Contract QA",
    leadMagnet: "Smart Contract QA Syllabus",
    description: "Learn to test decentralized applications and smart contracts for security and logic."
  },

  // Sub: ISTQB® Core (Was Essential Test Engineering (ISTQB® Path))
  {
    id: "p1-c1-s3-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Foundation",
    leadMagnet: "ISTQB® Foundation Syllabus",
    description: "The official foundation level training for software testing professionals.",
    quiz: {
      title: "Free Assessment: ISTQB® Foundation Skill Assessment",
      description: "Assess your knowledge of the CTFL v4.0 syllabus with these 5 core questions.",
      questions: [
        {
          question: "Which of the following is a fundamental principle of software testing?",
          options: [
            "Exhaustive testing is possible with enough time.",
            "Testing shows the presence of defects, not their absence.",
            "Testing should begin only after development is complete.",
            "Automated testing can replace manual testing entirely."
          ],
          correctIndex: 1,
          topic: "Seven Testing Principles",
          module: "Chapter 1: Fundamentals of Testing"
        },
        {
          question: "You are testing a login form. You check the behavior when the username field is empty. What type of test technique is this?",
          options: [
            "Structure-based (White-box)",
            "Experience-based",
            "Specification-based (Black-box)",
            "Defect-based"
          ],
          correctIndex: 2,
          topic: "Black-Box Test Techniques",
          module: "Chapter 4: Test Analysis and Design"
        },
        {
          question: "Which test level focuses on the interactions between integrated components or systems?",
          options: [
            "Component Testing",
            "Integration Testing",
            "System Testing",
            "Acceptance Testing"
          ],
          correctIndex: 1,
          topic: "Test Levels",
          module: "Chapter 2: Testing Throughout the SDLC"
        },
        {
          question: "During a code review, a developer notices a variable that is initialized but never used. What type of testing is this?",
          options: [
            "Dynamic Testing",
            "Static Testing",
            "Unit Testing",
            "Regression Testing"
          ],
          correctIndex: 1,
          topic: "Static Testing Basics",
          module: "Chapter 3: Static Testing"
        },
        {
          question: "What is the primary difference between 'Confirmation Testing' and 'Regression Testing'?",
          options: [
            "Confirmation testing verifies a fix; Regression testing checks for side effects.",
            "Confirmation testing is automated; Regression testing is manual.",
            "Confirmation testing checks the whole system; Regression testing checks one module.",
            "There is no difference; they are synonyms."
          ],
          correctIndex: 0,
          topic: "Confirmation vs Regression Testing",
          module: "Chapter 2: Testing Throughout the SDLC"
        }
      ]
    }
  },
  {
    id: "p1-c1-s3-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Test Manager",
    leadMagnet: "ISTQB® Test Manager Syllabus",
    description: "Advanced training on skills for managing testing teams and processes.",
    quiz: {
      title: "Free Assessment: Test Manager Skill Assessment",
      description: "Evaluate your readiness for the CTAL-TM exam with these 5 scenario-based questions.",
      questions: [
        {
          question: "You are defining the Test Strategy for a safety-critical medical device. Which strategy is most appropriate?",
          options: [
            "Reactive Strategy",
            "Consultative Strategy",
            "Analytical (Risk-Based) Strategy",
            "Regression-Averse Strategy"
          ],
          correctIndex: 2,
          topic: "Test Strategies",
          module: "Chapter 1: Managing the Test Activities (Test Strategy)"
        },
        {
          question: "Which of the following is a project risk (not a product risk)?",
          options: [
            "The system response time is too slow.",
            "The calculation module produces incorrect tax values.",
            "The test environment will not be ready by the planned start date.",
            "The UI is difficult to navigate for elderly users."
          ],
          correctIndex: 2,
          topic: "Risk Management",
          module: "Chapter 1: Managing the Test Activities (Risk)"
        },
        {
          question: "When estimating test effort using a 'Three-Point Estimation' technique, you have Optimistic=5, Most Likely=10, Pessimistic=21. What is the weighted average (E)?",
          options: [
            "12",
            "11",
            "10",
            "18"
          ],
          correctIndex: 1,
          topic: "Test Estimation",
          module: "Chapter 2: Managing the Product (Estimation)"
        },
        {
          question: "During a project retrospective, the team identifies that defects are being found very late. Which metric would best help monitor this in the future?",
          options: [
            "Test execution rate",
            "Defect Detection Percentage (DDP)",
            "Code coverage",
            "Number of test cases written"
          ],
          correctIndex: 1,
          topic: "Test Metrics",
          module: "Chapter 2: Managing the Product (Metrics)"
        },
        {
          question: "Which of the following is a key responsibility of the Test Manager in a distributed team?",
          options: [
            "Writing all unit tests for the developers.",
            "Ensuring consistent communication and processes across locations.",
            "Fixing defects found in the code.",
            "Configuring the production servers."
          ],
          correctIndex: 1,
          topic: "Managing the Team",
          module: "Chapter 3: Managing the Team"
        }
      ]
    }
  },
  {
    id: "p1-c1-s3-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Test Analyst",
    leadMagnet: "ISTQB® Test Analyst Syllabus",
    description: "Course focusing on advanced functional testing analysis and design.",
    quiz: {
      title: "Free Assessment: Test Analyst Skill Assessment",
      description: "Test your functional testing expertise with 5 questions from the CTAL-TA syllabus.",
      questions: [
        {
          question: "Which test technique is most effective for testing a system where different combinations of inputs result in different complex actions?",
          options: [
            "Boundary Value Analysis",
            "State Transition Testing",
            "Decision Table Testing",
            "Use Case Testing"
          ],
          correctIndex: 2,
          topic: "Black-Box Test Techniques",
          module: "Chapter 3: Test Techniques"
        },
        {
          question: "You are testing a banking kiosk. The system screen changes depending on user actions (Insert Card -> Enter PIN -> Select Transaction). Which technique is best to model this behavior?",
          options: [
            "Equivalence Partitioning",
            "State Transition Testing",
            "Classification Tree Method",
            "Pairwise Testing"
          ],
          correctIndex: 1,
          topic: "State Transition Testing",
          module: "Chapter 3: Test Techniques"
        },
        {
          question: "According to the ISO 25010 quality model, 'Interoperability' is a sub-characteristic of which quality characteristic?",
          options: [
            "Functional Suitability",
            "Compatibility",
            "Usability",
            "Reliability"
          ],
          correctIndex: 1,
          topic: "Software Quality Characteristics",
          module: "Chapter 4: Testing Software Quality Characteristics"
        },
        {
          question: "Which of the following is an example of a defect taxonomy?",
          options: [
            "A list of test case priorities.",
            "A hierarchical categorization of defect types (e.g., Functional > UI > Logic).",
            "A schedule of when defects should be fixed.",
            "A report showing defect density per module."
          ],
          correctIndex: 1,
          topic: "Defect Management",
          module: "Chapter 5: Reviews"
        },
        {
          question: "In a Classification Tree, what is the purpose of 'pruning'?",
          options: [
            "Removing irrelevant test cases.",
            "Removing infeasible combinations of classes.",
            "Deleting old code from the repository.",
            "Reducing the size of the requirement document."
          ],
          correctIndex: 1,
          topic: "Combinatorial Testing",
          module: "Chapter 3: Test Techniques"
        }
      ]
    }
  },
  {
    id: "p1-c1-s3-4",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Tech Analyst",
    leadMagnet: "ISTQB® Tech Analyst Syllabus",
    description: "Advanced course on technical testing, structure-based testing, and static analysis.",
    quiz: {
      title: "Free Assessment: Technical Test Analyst Skill Assessment",
      description: "Challenge your technical skills with 5 questions based on the CTAL-TTA syllabus.",
      questions: [
        {
          question: "Which code coverage measure guarantees that all possible outcomes of every condition in a decision are tested independently?",
          options: [
            "Statement Coverage",
            "Decision Coverage",
            "Modified Condition/Decision Coverage (MC/DC)",
            "Path Coverage"
          ],
          correctIndex: 2,
          topic: "White-Box Test Techniques",
          module: "Chapter 2: White-Box Test Techniques"
        },
        {
          question: "What is the primary purpose of Static Analysis tools?",
          options: [
            "To execute the code and find runtime errors.",
            "To find defects in source code without executing it (e.g., unreachable code, undeclared variables).",
            "To measure the performance of the system under load.",
            "To manage test cases and defects."
          ],
          correctIndex: 1,
          topic: "Static Analysis",
          module: "Chapter 3: Static and Dynamic Analysis"
        },
        {
          question: "A 'Buffer Overflow' vulnerability is best detected using which type of testing?",
          options: [
            "Usability Testing",
            "Security Testing",
            "Portability Testing",
            "Maintainability Testing"
          ],
          correctIndex: 1,
            topic: "Security Testing",
          module: "Chapter 4: Testing Software Quality Characteristics"
        },
        {
          question: "Which quality characteristic relates to the degree to which a system can be modified effectively and efficiently?",
          options: [
            "Reliability",
            "Maintainability",
            "Portability",
            "Performance Efficiency"
          ],
          correctIndex: 1,
          topic: "Maintainability Testing",
          module: "Chapter 4: Testing Software Quality Characteristics"
        },
        {
          question: "What is 'Cyclomatic Complexity'?",
          options: [
            "A measure of the number of lines of code.",
            "A metric indicating the number of independent paths through a program's source code.",
            "The time it takes for a developer to fix a bug.",
            "The number of classes in an object-oriented system."
          ],
          correctIndex: 1,
          topic: "Static Analysis Metrics",
          module: "Chapter 3: Static and Dynamic Analysis"
        }
      ]
    }
  },
  {
    id: "p1-c1-s3-5",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Expert Mgmt",
    leadMagnet: "ISTQB® Expert Mgmt Syllabus",
    description: "Expert-level training for strategic management of the testing function."
  },
  {
    id: "p1-c1-s3-6",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "ISTQB® Core",
    title: "ISTQB® Expert TPI",
    leadMagnet: "ISTQB® Expert TPI Syllabus",
    description: "Expert training on methodologies for assessing and improving test processes."
  },

  // Sub: Specialized QA (Was Specialized Test Engineering)
  {
    id: "p1-c1-s4-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Specialized QA",
    title: "ISTQB® Automation",
    leadMagnet: "ISTQB® Automation Syllabus",
    description: "Learn to design and implement robust test automation architectures.",
    quiz: {
      title: "Free Assessment: Automation Engineer Skill Assessment",
      description: "Test your automation architecture knowledge with 5 questions from the CT-TAE syllabus.",
      questions: [
        {
          question: "Which layer of the Generic Test Automation Architecture (GTAA) provides the interface to the SUT (System Under Test)?",
          options: [
            "Test Definition Layer",
            "Test Execution Layer",
            "Test Adaptation Layer",
            "Test Reporting Layer"
          ],
          correctIndex: 2,
          topic: "Test Automation Architecture",
          module: "Chapter 3: The Generic Test Automation Architecture"
        },
        {
          question: "What is a primary risk of 'Capture/Playback' automation?",
          options: [
            "It requires high programming skills.",
            "Scripts are often fragile and difficult to maintain when the UI changes.",
            "It cannot be used for GUI testing.",
            "It is too slow to record."
          ],
          correctIndex: 1,
          topic: "Automation Approaches",
          module: "Chapter 4: Deployment Risks and Contingencies"
        },
        {
          question: "In a keyword-driven framework, where is the logic for navigating the application stored?",
          options: [
            "In the test data file.",
            "In the keywords / action words implementation.",
            "In the test case definition.",
            "In the manual test steps."
          ],
          correctIndex: 1,
          topic: "Automation Frameworks",
          module: "Chapter 3: The Generic Test Automation Architecture"
        },
        {
          question: "Which of the following is a valid metric for Test Automation?",
          options: [
            "Number of lines of code in the SUT.",
            "Percent of manual test cases that are automatable vs automated.",
            "Number of coffee breaks taken by the automator.",
            "Cost of the manual test team lunches."
          ],
          correctIndex: 1,
          topic: "Automation Reporting & Metrics",
          module: "Chapter 5: Test Automation Reporting and Metrics"
        },
        {
          question: "When should you start planning for a Pilot Project in test automation?",
          options: [
            "After buying the most expensive tool.",
            "Before selecting a tool, to define evaluation criteria.",
            "After automating 100% of the regression suite.",
            "Never, pilots are a waste of time."
          ],
          correctIndex: 1,
          topic: "Introduction of Test Automation",
          module: "Chapter 2: Preparing for Test Automation"
        }
      ]
    }
  },
  {
    id: "p1-c1-s4-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Specialized QA",
    title: "ISTQB® Security",
    leadMagnet: "ISTQB® Security Syllabus",
    description: "Training focused on security testing planning, design, and execution.",
    quiz: {
      title: "Free Assessment: Security Tester Skill Assessment",
      description: "Take this 5-question skill assessment based on the Security Tester Syllabus to test your readiness.",
      questions: [
        {
          question: "Risk is typically a function of which two factors?",
          options: [
            "Impact and Likelihood",
            "Threat and Vulnerability",
            "Asset Value and Threat Agent",
            "Frequency and Severity"
          ],
          correctIndex: 0,
          topic: "Security Risk Fundamentals",
          module: "Chapter 1: The Basis of Security Testing"
        },
        {
          question: "Which of the following best describes \"Social Engineering\"?",
          options: [
            "Exploiting human behavior to gather sensitive information",
            "Using a tool to crack passwords",
            "Injecting malicious SQL code",
            "Intercepting network traffic"
          ],
          correctIndex: 0,
          topic: "Social Engineering",
          module: "Chapter 6: Human Factors in Security Testing"
        },
        {
          question: "What is the main difference between a firewall and an Intrusion Detection System (IDS)?",
          options: [
            "A firewall blocks traffic based on rules; an IDS analyzes traffic for suspicious patterns",
            "A firewall is hardware; an IDS is software",
            "A firewall protects internal networks; an IDS protects external networks",
            "There is no difference"
          ],
          correctIndex: 0,
          topic: "Security Defenses",
          module: "Chapter 5: Testing Security Mechanisms"
        },
        {
          question: "In the context of encryption, what is the purpose of \"salting\"?",
          options: [
            "To ensure that the same password always hashes to a different value",
            "To speed up the encryption process",
            "To compress the data before encryption",
            "To allow the administrator to recover lost passwords"
          ],
          correctIndex: 0,
          topic: "Encryption Mechanisms",
          module: "Chapter 5: Testing Security Mechanisms"
        },
        {
          question: "Which type of security testing is most likely to involve \"SQL Injection\"?",
          options: [
            "Input Validation Testing",
            "Network Port Scanning",
            "Encryption Cracking",
            "Social Engineering"
          ],
          correctIndex: 0,
          topic: "Injection Attacks",
          module: "Chapter 4: Security Testing Throughout the Software Lifecycle"
        }
      ]
    }
  },

  // Sub: Agile & DevOps (Was Agile & DevOps Quality Assurance)
  {
    id: "p1-c1-s5-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Agile & DevOps",
    title: "ISTQB® Agile Tester",
    leadMagnet: "ISTQB® Agile Tester Syllabus",
    description: "Course on testing practices specifically for Agile environments.",
    quiz: {
      title: "Free Assessment: Agile Tester Skill Assessment",
      description: "Evaluate your Agile testing mindset with 5 questions from the CTFL-AT syllabus.",
      questions: [
        {
          question: "Which of the following best describes the 'Whole Team Approach' in Agile?",
          options: [
            "Only developers are responsible for quality.",
            "Only testers are responsible for quality.",
            "The entire team is responsible for quality and testing activities.",
            "The product owner is responsible for testing."
          ],
          correctIndex: 2,
          topic: "Agile Software Development",
          module: "Chapter 1: Agile Software Development"
        },
        {
          question: "What is the primary purpose of a 'Retrospective' meeting?",
          options: [
            "To assign blame for failed stories.",
            "To demonstrate the working software to the customer.",
            "To reflect on the process and identify improvements for the next iteration.",
            "To plan the next release."
          ],
          correctIndex: 2,
          topic: "Agile Testing Methods",
          module: "Chapter 3: Agile Testing Methods, Techniques, and Tools"
        },
        {
          question: "In the 'Testing Quadrants', Quadrant Q2 (Business Facing, Support the Team) typically includes:",
          options: [
            "Unit Tests and Component Tests.",
            "Functional Tests, Examples, and Story Tests.",
            "Exploratory Testing and Usability Testing.",
            "Performance and Load Testing."
          ],
          correctIndex: 1,
          topic: "Testing Quadrants",
          module: "Chapter 3: Agile Testing Methods, Techniques, and Tools"
        },
        {
          question: "What does the 'INVEST' mnemonic stand for regarding User Stories?",
          options: [
            "Independent, Negotiable, Valuable, Estimable, Small, Testable.",
            "Integrated, New, Verified, Easy, Secure, Timely.",
            "Intelligent, Novel, Valid, Efficient, Simple, Technical.",
            "Immediate, Necessary, Visual, Exact, Scalable, Tested."
          ],
          correctIndex: 0,
          topic: "User Stories",
          module: "Chapter 3: Agile Testing Methods, Techniques, and Tools"
        },
        {
          question: "Which technique involves writing the test case before writing the code?",
          options: [
            "Test-Driven Development (TDD)",
            "Code-Driven Testing",
            "Post-Implementation Testing",
            "Exploratory Testing"
          ],
          correctIndex: 0,
          topic: "TDD",
          module: "Chapter 3: Agile Testing Methods, Techniques, and Tools"
        }
      ]
    }
  },
  {
    id: "p1-c1-s5-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Agile & DevOps",
    title: "ISTQB® Agile Tech",
    leadMagnet: "ISTQB® Agile Tech Syllabus",
    description: "Technical training on testing skills for Agile projects including CI/CD.",
    quiz: {
      title: "Free Assessment: Agile Technical Tester Skill Assessment",
      description: "Take this 5-question skill assessment based on the Agile Technical Tester Syllabus to test your readiness.",
      questions: [
        {
          question: "Which test automation approach separates test data from the test script logic?",
          options: [
            "Data-Driven Testing",
            "Linear Scripting",
            "Keyword-Driven Testing",
            "Capture/Playback"
          ],
          correctIndex: 0,
          topic: "Test Automation Techniques",
          module: "Chapter 3: Test Automation"
        },
        {
          question: "What is the \"Test Pyramid\" concept in Agile testing?",
          options: [
            "Having many unit tests, fewer integration tests, and fewest UI tests",
            "Having many UI tests, fewer integration tests, and fewest unit tests",
            "Having equal numbers of tests at all levels",
            "Relying solely on manual exploratory testing"
          ],
          correctIndex: 0,
          topic: "Agile Testing Concepts",
          module: "Chapter 2: Testing in Agile"
        },
        {
          question: "In Behavior-Driven Development (BDD), scenarios are typically written in which format?",
          options: [
            "Given-When-Then",
            "If-Then-Else",
            "Try-Catch-Finally",
            "Do-While"
          ],
          correctIndex: 0,
          topic: "BDD",
          module: "Chapter 2: Testing in Agile"
        },
        {
          question: "What is \"Service Virtualization\" used for?",
          options: [
            "Emulating the behavior of unavailable or expensive dependencies",
            "Running virtual machines for cross-browser testing",
            "Virtualizing the test management tool",
            "Creating virtual users for load testing"
          ],
          correctIndex: 0,
          topic: "Service Virtualization",
          module: "Chapter 4: Deployment and Delivery"
        },
        {
          question: "What is a primary benefit of Continuous Integration (CI) for testers?",
          options: [
            "Faster feedback on the impact of code changes",
            "Eliminating the need for regression testing",
            "Reducing the need for test automation",
            "Allowing developers to skip unit testing"
          ],
          correctIndex: 0,
          topic: "Continuous Integration",
          module: "Chapter 4: Deployment and Delivery"
        }
      ]
    }
  },
  {
    id: "p1-c1-s5-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "Agile & DevOps",
    title: "DevOps Testing (T-MAP)",
    leadMagnet: "DevOps Testing (T-MAP) Syllabus",
    description: "Training on integrating quality engineering into the DevOps lifecycle."
  },

  // Sub: SDET Track (Was Software Development Engineer in Test (SDET))
  {
    id: "p1-c1-s6-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "SDET Track",
    title: "SDET Foundation",
    leadMagnet: "SDET Foundation Syllabus",
    description: "Bootcamp on core coding and automation skills for the modern SDET."
  },
  {
    id: "p1-c1-s6-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Quality & Testing",
    subCategory: "SDET Track",
    title: "Advanced SDET",
    leadMagnet: "Advanced SDET Syllabus",
    description: "Deep dive course into complex automation frameworks and tooling."
  },

  // ---------------------------------------------------------
  // Category: Requirements Eng. (Was Strategic Requirements Engineering)
  // ---------------------------------------------------------

  // Sub: Foundational RE (Was Foundational Requirements Engineering)
  {
    id: "p1-c2-s1-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Requirements Eng.",
    subCategory: "Foundational RE",
    title: "CPRE® Foundation",
    leadMagnet: "CPRE® Foundation Syllabus",
    description: "Official Certified Professional for Requirements Engineering training - Foundation Level."
  },
  {
    id: "p1-c2-s1-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Requirements Eng.",
    subCategory: "Foundational RE",
    title: "CPRE® Agile RE",
    leadMagnet: "CPRE® Agile RE Syllabus",
    description: "Training on applying requirements engineering practices in Agile contexts."
  },

  // Sub: Advanced Modeling (Was Advanced Requirements Modeling)
  {
    id: "p1-c2-s2-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Requirements Eng.",
    subCategory: "Advanced Modeling",
    title: "CPRE® Advanced Spec",
    leadMagnet: "CPRE® Advanced Spec Syllabus",
    description: "Mastering requirements modeling and elicitation at an advanced level."
  },

  // Sub: AI Requirements (Was AI System Requirements)
  {
    id: "p1-c2-s3-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Requirements Eng.",
    subCategory: "AI Requirements",
    title: "AI Systems Req.",
    leadMagnet: "AI Systems Req. Syllabus",
    description: "Course on specialized approaches for defining requirements for AI/ML systems."
  },

  // ---------------------------------------------------------
  // Category: Process & Certs (Was Process Assessment & Certification)
  // ---------------------------------------------------------

  // Sub: TMMi Cert (Was TMMi Professional Certification)
  {
    id: "p1-c3-s1-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Process & Certs",
    subCategory: "TMMi Cert",
    title: "TMMi Professional",
    leadMagnet: "TMMi Professional Syllabus",
    description: "Training for the TMMi Professional certification and model understanding."
  },

  // Sub: ISTQB® Expert Process (Was ISTQB® Expert)
  {
    id: "p1-c3-s2-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Process & Certs",
    subCategory: "ISTQB® Expert Process",
    title: "Process Improvement",
    leadMagnet: "Process Improvement Syllabus",
    description: "Expert level training on assessment and implementation of test process improvements."
  },

  // Sub: AI QA Process (Was The AI Quality Assurance Process)
  {
    id: "p1-c3-s3-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Process & Certs",
    subCategory: "AI QA Process",
    title: "AI QA Methodology",
    leadMagnet: "AI QA Methodology Syllabus",
    description: "Workshop on specialized processes for ensuring quality in AI-driven systems."
  },

  // ---------------------------------------------------------
  // Category: Next-Gen Dev (Was Next-Generation Software Development)
  // ---------------------------------------------------------

  // Sub: Core Programming (Was Core Programming Mastery)
  {
    id: "p1-c4-s1-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Core Programming",
    title: "Enterprise Java",
    leadMagnet: "Enterprise Java Syllabus",
    description: "Master advanced Java development for large-scale enterprise systems."
  },
  {
    id: "p1-c4-s1-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Core Programming",
    title: "Professional C#",
    leadMagnet: "Professional C# Syllabus",
    description: "Course on building robust applications with C# and .NET."
  },
  {
    id: "p1-c4-s1-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Core Programming",
    title: "Python for Auto/Data",
    leadMagnet: "Python for Auto/Data Syllabus",
    description: "Hands-on Python training focused on automation scripts and data analysis."
  },

  // Sub: DevOps & Cloud (Was DevOps & Cloud Engineering)
  {
    id: "p1-c4-s2-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "DevOps & Cloud",
    title: "AWS DevOps Eng",
    leadMagnet: "AWS DevOps Eng Syllabus",
    description: "Training preparation for the AWS Certified DevOps Engineer certification."
  },

  // Sub: Emerging Tech (Was Emerging Technology Development)
  {
    id: "p1-c4-s3-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Emerging Tech",
    title: "AI & ML App Dev",
    leadMagnet: "AI & ML App Dev Syllabus",
    description: "Learn to build applications that integrate Artificial Intelligence and Machine Learning."
  },
  {
    id: "p1-c4-s3-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Emerging Tech",
    title: "LLM App Dev",
    leadMagnet: "LLM App Dev Syllabus",
    description: "Training on developing applications powered by LLMs."
  },
  {
    id: "p1-c4-s3-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Emerging Tech",
    title: "Blockchain Dev",
    leadMagnet: "Blockchain Dev Syllabus",
    description: "Course on development for blockchain ecosystems and decentralized apps."
  },
  {
    id: "p1-c4-s3-4",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Emerging Tech",
    title: "Agent & Auto Dev",
    leadMagnet: "Agent & Auto Dev Syllabus",
    description: "Learn to build autonomous agents and intelligent automation systems."
  },

  // Sub: Safety-Critical (Was Safety-Critical Systems Engineering)
  {
    id: "p1-c4-s4-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Safety-Critical",
    title: "MBSE",
    leadMagnet: "MBSE Syllabus",
    description: "Training on methodologies for model-based systems engineering."
  },
  {
    id: "p1-c4-s4-2",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Safety-Critical",
    title: "Secure C/C++",
    leadMagnet: "Secure C/C++ Syllabus",
    description: "Course on writing secure and compliant code for safety-critical systems."
  },
  {
    id: "p1-c4-s4-3",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Next-Gen Dev",
    subCategory: "Safety-Critical",
    title: "IBM ELM (Rhapsody)",
    leadMagnet: "IBM ELM (Rhapsody) Syllabus",
    description: "Training on IBM ELM tools including Rhapsody and Pure Variants."
  },

  // ---------------------------------------------------------
  // Category: Business Training (Was Strategic Business Acceleration - for Training)
  // ---------------------------------------------------------

  // Sub: Scaling Training
  {
    id: "p1-c5-s1-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Business Training",
    subCategory: "Scaling Training",
    title: "Scaling for Growth",
    leadMagnet: "Scaling for Growth Syllabus",
    description: "Training program on establishing baselines, benchmarking, and accelerating growth."
  },

  // Sub: Disruption Training
  {
    id: "p1-c5-s2-1",
    pillar: Pillar.TALENT_ACCELERATION,
    category: "Business Training",
    subCategory: "Disruption Training",
    title: "Market Disruption",
    leadMagnet: "Market Disruption Syllabus",
    description: "Training program on identifying opportunities, analyzing competition, and creating disruptive solutions."
  },


  // ==================================================================================
  // PILLAR 2: STRATEGIC ADVISORY, TRANSFORMATION & AI (Pages 9-14)
  // ==================================================================================
  // CONTENT NOTE: All items here are Consulting Services / Solutions
  
  // ---------------------------------------------------------
  // Category: Quality Solutions (Was Quality Engineering & Assurance Solutions)
  // ---------------------------------------------------------
  {
    id: "p2-c1-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "Web & Mobile QA",
    leadMagnet: "Omnichannel Digital Quality Strategy",
    description: "Managed testing services for web and mobile applications to ensure optimal performance."
  },
  {
    id: "p2-c1-2",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "Test Auto Strategy",
    leadMagnet: "AI-Driven Automation ROI Calculator",
    description: "Strategic consulting to design and implement advanced automation frameworks."
  },
  {
    id: "p2-c1-3",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "AI App Validation",
    leadMagnet: "AI System Validation & Risk Framework",
    description: "Validation services leveraging AI to enhance test efficiency and identify complex issues."
  },
  {
    id: "p2-c1-4",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "Agent Assurance",
    leadMagnet: "Governing Autonomous Agents Whitepaper",
    description: "Specialized assurance and testing services for AI agents and autonomous systems."
  },
  {
    id: "p2-c1-5",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "Smart Contract Audits",
    leadMagnet: "Web3 Security Vulnerability Database",
    description: "Professional security auditing for blockchain applications and smart contracts."
  },
  {
    id: "p2-c1-6",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "E2E Testing",
    leadMagnet: "Enterprise E2E Testing Transformation Plan",
    description: "End-to-end testing delivery services covering the entire lifecycle from requirements to deployment."
  },
  {
    id: "p2-c1-7",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Quality Solutions",
    subCategory: "Solutions",
    title: "Perf & Security Testing",
    leadMagnet: "High-Performance Systems Resilience Guide",
    description: "Managed performance and security testing services to ensure system resilience."
  },

  // ---------------------------------------------------------
  // Category: Product Definition (Was Product & Requirements Definition)
  // ---------------------------------------------------------
  {
    id: "p2-c2-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Product Definition",
    subCategory: "Definition Services",
    title: "Strategic Discovery",
    leadMagnet: "Strategic Requirements Discovery Workshop Kit",
    description: "Consulting workshops to identify and capture key business and technical requirements."
  },
  {
    id: "p2-c2-2",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Product Definition",
    subCategory: "Definition Services",
    title: "Agile Documentation",
    leadMagnet: "Hybrid Agile Requirements Templates",
    description: "Service to create comprehensive documentation that balances agile flexibility with formal specification."
  },
  {
    id: "p2-c2-3",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Product Definition",
    subCategory: "Definition Services",
    title: "Req Validation",
    leadMagnet: "Requirements Quality & Traceability Matrix",
    description: "Third-party validation services to ensure requirements are complete, consistent, and aligned."
  },
  {
    id: "p2-c2-4",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Product Definition",
    subCategory: "Definition Services",
    title: "AI Requirements",
    leadMagnet: "AI Product Requirement Document (PRD) Template",
    description: "Consulting on specialized approaches for capturing the unique needs of AI applications."
  },

  // ---------------------------------------------------------
  // Category: Process Optimization (Was Process Optimization & Certification)
  // ---------------------------------------------------------
  {
    id: "p2-c3-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "Process Modernization",
    leadMagnet: "Legacy to Modern QA Transformation Blueprint",
    description: "Transformation service to update legacy testing processes with modern methodologies."
  },
  {
    id: "p2-c3-2",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "TMMi Certification",
    leadMagnet: "Executive Guide to TMMi Certification",
    description: "Expert consulting and assessment to prepare your organization for TMMi certification."
  },
  {
    id: "p2-c3-3",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "Agile Maturity",
    leadMagnet: "DevOps & Agile Maturity Scorecard",
    description: "Assessment services to evaluate and enhance agile and DevOps practices."
  },
  {
    id: "p2-c3-4",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "Framework Optimization",
    leadMagnet: "Test Automation Framework Health Check",
    description: "Optimization services to enhance your existing automation frameworks for efficiency."
  },
  {
    id: "p2-c3-5",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "Cyber Posture",
    leadMagnet: "CISO's Cybersecurity Posture Assessment",
    description: "Consulting to assess and strengthen security practices and protocols."
  },
  {
    id: "p2-c3-6",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "STLC Enhancement",
    leadMagnet: "Optimized STLC Implementation Guide",
    description: "Consulting improvements across all software testing life cycle phases."
  },
  {
    id: "p2-c3-7",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "SDLC Optimization",
    leadMagnet: "SDLC Throughput Optimization Report",
    description: "Streamlining your development workflows for increased productivity."
  },
  {
    id: "p2-c3-8",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "AI Quality Readiness",
    leadMagnet: "Enterprise AI Quality Readiness Assessment",
    description: "Organizational assessment service for AI implementation and quality assurance readiness."
  },
  {
    id: "p2-c3-9",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Process Optimization",
    subCategory: "Optimization Services",
    title: "Blockchain Risk",
    leadMagnet: "Institutional Blockchain Risk Management Framework",
    description: "Specialized risk evaluation service for blockchain applications."
  },

  // ---------------------------------------------------------
  // Category: Custom Dev (Was Custom Technology Development)
  // ---------------------------------------------------------
  {
    id: "p2-c4-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Custom Dev",
    subCategory: "Development Services",
    title: "Web Platform Dev",
    leadMagnet: "Cloud-Native Web Architecture Reference",
    description: "Custom development of scalable, responsive web applications and platforms."
  },
  {
    id: "p2-c4-2",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Custom Dev",
    subCategory: "Development Services",
    title: "Mobile App Dev",
    leadMagnet: "Cross-Platform vs Native Decision Matrix",
    description: "End-to-end development of high-performance mobile applications."
  },
  {
    id: "p2-c4-3",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Custom Dev",
    subCategory: "Development Services",
    title: "AI & ML Solutions",
    leadMagnet: "From POC to Production: AI Roadmap",
    description: "Bespoke development of intelligent solutions that leverage AI and ML."
  },
  {
    id: "p2-c4-4",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Custom Dev",
    subCategory: "Development Services",
    title: "dApp Development",
    leadMagnet: "Enterprise Blockchain Solution Design Guide",
    description: "Development services for secure, transparent blockchain solutions."
  },
  {
    id: "p2-c4-5",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Custom Dev",
    subCategory: "Development Services",
    title: "Agent Development",
    leadMagnet: "Intelligent Automation Opportunity Heatmap",
    description: "Custom build of automated agents and intelligent systems."
  },

  // ---------------------------------------------------------
  // Category: Business Strategy (Was Strategic Business Acceleration)
  // ---------------------------------------------------------

  // Sub: Scaling for Growth Consulting
  {
    id: "p2-c5-s1-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Business Strategy",
    subCategory: "Scaling for Growth Consulting",
    title: "Scaling Strategy",
    leadMagnet: "Exponential Growth Strategy Playbook",
    description: "Consulting engagement to establish metrics, benchmark against industry, and implement growth strategies."
  },

  // Sub: Market Disruption Consulting
  {
    id: "p2-c5-s2-1",
    pillar: Pillar.STRATEGIC_ADVISORY,
    category: "Business Strategy",
    subCategory: "Market Disruption Consulting",
    title: "Disruption Strategy",
    leadMagnet: "Market Disruption & Blue Ocean Blueprint",
    description: "Strategic consulting to identify opportunities, analyze competition, and create transformative solutions."
  },

  // ==================================================================================
  // PILLAR 3: BLOCKCHAIN & FINTECH COMPLIANCE (Page 15)
  // ==================================================================================

  // ---------------------------------------------------------
  // Category: CryptoPay Solutions (Page 15)
  // ---------------------------------------------------------
  {
    id: "p3-c1-1",
    pillar: Pillar.CRYPTO_FINANCE,
    category: "Blockchain & FinTech Compliance",
    subCategory: "Payment Services",
    title: "Crypto Payments",
    leadMagnet: "Merchant's Guide to Crypto Payment Gateways",
    description: "Audited and secure cryptocurrency payment processing for compliant business operations."
  },
  {
    id: "p3-c1-2",
    pillar: Pillar.CRYPTO_FINANCE,
    category: "Blockchain & FinTech Compliance",
    subCategory: "Payment Services",
    title: "Blockchain Finance",
    leadMagnet: "Cross-Border Blockchain Settlements Whitepaper",
    description: "Facilitating financial transactions using blockchain technology with full traceability."
  },
  {
    id: "p3-c1-3",
    pillar: Pillar.CRYPTO_FINANCE,
    category: "Blockchain & FinTech Compliance",
    subCategory: "Payment Services",
    title: "Wallet Integration",
    leadMagnet: "Enterprise Digital Wallet Integration Specs",
    description: "Integration of digital wallets into business systems with bank-grade security protocols."
  },
  {
    id: "p3-c1-4",
    pillar: Pillar.CRYPTO_FINANCE,
    category: "Blockchain & FinTech Compliance",
    subCategory: "Payment Services",
    title: "Payment Automation",
    leadMagnet: "Automated Payment Smart Contract Patterns",
    description: "Automating payments using audited smart contracts to eliminate manual error and fraud."
  }
];

export const TESTIMONIALS = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ISTQB_Logo.svg/1200px-ISTQB_Logo.svg.png",
    name: "ISTQB"
  },
  {
    name: "TMMi® Foundation"
  },
  {
    name: "IREB®"
  },
  {
    name: "A4Q Alliance"
  },
  {
    name: "SDET & DevOps"
  },
  {
    name: "RPA Automation"
  }
];

export const ALLIANCE_DATA = [
  {
    id: "tech-staffing",
    title: "Technology Upskilling and Staffing",
    description: "Specializes in IT staffing, training, and certifications with a focus on DevOps and cloud.",
    highlights: ["Founded in 2018", "ISO 9001:2015 certified", "Authorized Microsoft Education Partner"],
    competencies: [
      "IT Staffing & Staff Augmentation",
      "DevOps & Cloud Training",
      "Professional IT Certifications",
      "Application Development & Support"
    ],
    distribution: [
      { label: "Staffing", percentage: 30 },
      { label: "Training", percentage: 30 },
      { label: "Managed Services", percentage: 25 },
      { label: "Certifications", percentage: 15 }
    ]
  },
  {
    id: "qa-testing",
    title: "Software Quality Assurance & Testing Excellence",
    description: "Specialized IT solutions provider focused on web/mobile optimization and QA.",
    highlights: ["ISTQB Certified Company", "AWS, Azure, Google Partners", "Salesforce Partner"],
    competencies: [
      "End-to-End Web Application Solutions",
      "Website & Mobile Optimization",
      "Advanced CRM Implementation",
      "Software Quality Assurance & Testing"
    ],
    distribution: [
      { label: "QA & Testing", percentage: 30 },
      { label: "Web Solutions", percentage: 25 },
      { label: "Quality Training", percentage: 20 },
      { label: "Mobile Optimization", percentage: 15 },
      { label: "CRM Implementation", percentage: 10 }
    ]
  },
  {
    id: "software-dev",
    title: "End-to-End Software Development Solutions",
    description: "20+ years experience with 3,000+ successful projects across custom software, mobile apps, and cloud services.",
    highlights: ["800+ Experts", "Global Presence (US, UK, UAE, India, APAC)", "Healthcare, Finance, & Logistics focus"],
    competencies: [
      "Custom Software Development",
      "Mobile App Development",
      "UI/UX Design",
      "Cloud Services"
    ],
    clients: ["Careem", "Amcor", "BCG", "UPS", "Nokia"]
  }
];

export const VALUE_PROPOSITION = {
  main: "Business Innovations & Trusted Alliance delivers a curated network of elite specialists, providing tailored solutions for enterprises and SMEs globally. We operate across the Middle East, North America, Europe, Asia Pacific, and Latin America, ensuring every project is managed with world-class expertise and high-trust standards.",
  points: [
    { title: "Comprehensive Solutions", desc: "Customized to your business size and needs, whether enterprise or SME." },
    { title: "Single Point of Contact", desc: "Through Business Innovations for seamless delivery across all services." },
    { title: "Trusted Specialists", desc: "Ensuring top-tier quality and reliability in every engagement." }
  ]
};