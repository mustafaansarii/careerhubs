export const ComputerArchitectureTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Computer Architecture", prompt: "Explain the fundamental concepts of computer architecture, including its components, organization, and different architectures like Von Neumann and Harvard." },
            { id: 2, title: "Instruction Set Architecture (ISA)", prompt: "Describe the Instruction Set Architecture (ISA), its role as an interface between hardware and software, and different types of ISAs (e.g., RISC, CISC)." },
            { id: 3, title: "CPU Structure and Function", prompt: "Explain the internal structure of a CPU, including the control unit, arithmetic logic unit (ALU), registers, and their functions in instruction execution." },
            { id: 4, title: "Memory Hierarchy", prompt: "Describe the memory hierarchy in computer systems, including cache memory, main memory (RAM), and secondary storage, and explain the principles of locality." },
            { id: 5, title: "Input/Output (I/O) Organization", prompt: "Explain different I/O techniques, including programmed I/O, interrupt-driven I/O, and Direct Memory Access (DMA), and their impact on system performance." },
        ]
    },
    {
        category: "Pipelining and Parallel Processing",
        items: [
            { id: 6, title: "Pipelining", prompt: "Explain the concept of pipelining in computer architecture, including its stages, hazards (data, control, structural), and techniques to mitigate them." },
            { id: 7, title: "Instruction-Level Parallelism (ILP)", prompt: "Describe techniques for exploiting Instruction-Level Parallelism (ILP), such as dynamic scheduling (Tomasulo's algorithm) and branch prediction." },
            { id: 8, title: "Multicore Processors", prompt: "Explain the architecture of multicore processors, including shared memory and distributed memory architectures, and the challenges of parallel programming." },
            { id: 9, title: "SIMD and Vector Processing", prompt: "Describe Single Instruction, Multiple Data (SIMD) and vector processing architectures, and their applications in multimedia and scientific computing." },
            { id: 10, title: "GPU Architecture", prompt: "Explain the architecture of Graphics Processing Units (GPUs) and their use in parallel computing and machine learning." },
        ]
    },
    {
        category: "Memory Systems",
        items: [
            { id: 11, title: "Caching", prompt: "Explain the concept of caching in computer architecture, including cache mapping techniques (direct-mapped, set-associative, fully associative), replacement policies (LRU, FIFO), and cache coherence protocols." },
            { id: 12, title: "Virtual Memory", prompt: "Explain the concept of virtual memory in computer architecture, including address translation, page tables, and page replacement algorithms (e.g., LRU, FIFO, Optimal)." },
            { id: 13, title: "Memory Management", prompt: "Describe memory management techniques, including segmentation, paging, and swapping, and their impact on system performance and security." },
            { id: 14, title: "Error Detection and Correction", prompt: "Explain error detection and correction techniques in memory systems, such as parity checks and ECC (Error Correcting Codes)." },
        ]
    },
    {
        category: "Advanced Topics",
        items: [
            { id: 15, title: "Virtual Machines", prompt: "Explain the concept of virtual machines in computer architecture, including hypervisors (Type 1 and Type 2), virtualization techniques (full virtualization, paravirtualization), and their applications in cloud computing." },
            { id: 16, title: "Embedded Systems Architecture", prompt: "Describe the architecture of embedded systems, including microcontrollers, sensors, and actuators, and their applications in IoT and real-time systems." },
            { id: 17, title: "Reconfigurable Computing", prompt: "Explain the concept of reconfigurable computing using FPGAs (Field-Programmable Gate Arrays) and their applications in custom hardware acceleration." },
            { id: 18, title: "Quantum Computing Architecture", prompt: "Introduce the basic concepts of quantum computing architecture, including qubits, quantum gates, and quantum algorithms." },
            { id: 19, title: "Neuromorphic Computing", prompt: "Explain the principles of neuromorphic computing, inspired by the human brain, and its potential for low-power and parallel processing." },
        ]
    }
];
export const ComputerNetworksTopics = [
    {
        category: "Introduction to Computer Networks",
        items: [
            { id: 1, title: "Overview of Computer Networks", prompt: "Explain the fundamental concepts of computer networks, including their components, architectures, and the evolution of networking technologies." },
            { id: 2, title: "Network Applications and Services", prompt: "Describe common network applications and services, including web browsing, email, file transfer, and their underlying protocols." },
            { id: 3, title: "Network Hardware Components", prompt: "Explain the role of various network hardware components such as routers, switches, hubs, and network interface cards (NICs)." },
            { id: 4, title: "Network Topologies", prompt: "Compare and contrast different network topologies (bus, star, ring, mesh, hybrid) including their characteristics, advantages, and disadvantages." },
            { id: 5, title: "Network Types", prompt: "Explain different types of networks (LAN, MAN, WAN, PAN) and their typical use cases and characteristics." },
            { id: 6, title: "Network Models", prompt: "Compare client-server and peer-to-peer network models, explaining their architectures and use cases." },
            { id: 7, title: "Protocol Layers and Models", prompt: "Explain the OSI model (7 layers) and TCP/IP model (4/5 layers), comparing their structures and functions." },
            { id: 8, title: "Network Performance Metrics", prompt: "Define and explain key network performance metrics including bandwidth, throughput, latency, and jitter." }
        ]
    },
    {
        category: "Physical Layer",
        items: [
            { id: 9, title: "Transmission Media", prompt: "Compare wired (twisted pair, coaxial, fiber optic) and wireless (radio waves, microwaves, infrared) transmission media, including their characteristics and use cases." },
            { id: 10, title: "Signal Encoding and Modulation", prompt: "Explain analog and digital signal transmission, including encoding and modulation techniques." },
            { id: 11, title: "Multiplexing Techniques", prompt: "Describe multiplexing techniques (FDM, TDM, WDM) and their use in efficient bandwidth utilization." },
            { id: 12, title: "Switching Techniques", prompt: "Compare circuit switching, packet switching, and message switching, including their advantages and disadvantages." },
            { id: 13, title: "Error Detection and Correction", prompt: "Explain error detection and correction techniques including parity checks, checksums, and CRC (Cyclic Redundancy Check)." },
            { id: 14, title: "Wireless Communication Basics", prompt: "Explain the fundamentals of wireless communication and common wireless standards." }
        ]
    },
    {
        category: "Data Link Layer",
        items: [
            { id: 15, title: "Data Link Layer Fundamentals", prompt: "Explain the functions of the data link layer including framing, addressing, and error control." },
            { id: 16, title: "MAC Addressing", prompt: "Describe MAC addresses and their role in network communication." },
            { id: 17, title: "Access Control Protocols", prompt: "Explain CSMA/CD and CSMA/CA protocols and their use in network access control." },
            { id: 18, title: "Point-to-Point Protocols", prompt: "Describe PPP (Point-to-Point Protocol) and its use in direct connections." },
            { id: 19, title: "Ethernet and Wireless LANs", prompt: "Explain Ethernet (IEEE 802.3) and Wireless LANs (IEEE 802.11) standards and their implementations." },
            { id: 20, title: "LAN Devices and VLANs", prompt: "Describe the function of LAN switches, bridges, and Virtual LANs (VLANs)." }
        ]
    },
    {
        category: "Network Layer",
        items: [
            { id: 21, title: "Network Layer Fundamentals", prompt: "Explain the functions of the network layer including routing and addressing." },
            { id: 22, title: "IP Addressing", prompt: "Compare IPv4 and IPv6 addressing, including address formats and subnetting techniques." },
            { id: 23, title: "Routing Algorithms", prompt: "Explain distance vector and link state routing algorithms and their characteristics." },
            { id: 24, title: "Routing Protocols", prompt: "Compare RIP, OSPF, and BGP routing protocols and their use in different network scenarios." },
            { id: 25, title: "ICMP and NAT", prompt: "Explain the Internet Control Message Protocol (ICMP) and Network Address Translation (NAT) and their roles in network communication." }
        ]
    },
    {
        category: "Transport Layer",
        items: [
            { id: 26, title: "Transport Layer Fundamentals", prompt: "Explain the functions of the transport layer including connection management and reliable data transfer." },
            { id: 27, title: "TCP and UDP", prompt: "Compare TCP (Transmission Control Protocol) and UDP (User Datagram Protocol), including their characteristics and use cases." },
            { id: 28, title: "Ports and Sockets", prompt: "Explain the concept of ports and sockets in network communication." },
            { id: 29, title: "TCP Congestion Control", prompt: "Describe TCP congestion control algorithms including slow start and congestion avoidance." }
        ]
    },
    {
        category: "Application Layer",
        items: [
            { id: 30, title: "Application Layer Fundamentals", prompt: "Explain the functions of the application layer and common application architectures." },
            { id: 31, title: "HTTP and Web Technologies", prompt: "Describe HTTP protocol and its role in web communication." },
            { id: 32, title: "Email Protocols", prompt: "Explain email protocols including SMTP, POP3, and IMAP." },
            { id: 33, title: "File Transfer and DNS", prompt: "Describe FTP (File Transfer Protocol) and DNS (Domain Name System) and their roles in network services." }
        ]
    },
    {
        category: "Network Security",
        items: [
            { id: 34, title: "Security Fundamentals", prompt: "Explain basic security concepts including confidentiality, integrity, and availability (CIA triad)." },
            { id: 35, title: "Cryptography", prompt: "Compare symmetric and asymmetric encryption techniques and their use in network security." },
            { id: 36, title: "Firewalls and IDS", prompt: "Explain the function of firewalls and intrusion detection systems in network security." },
            { id: 37, title: "VPNs and Security Protocols", prompt: "Describe Virtual Private Networks (VPNs) and security protocols like SSL/TLS and IPsec." }
        ]
    },
    {
        category: "Network Management",
        items: [
            { id: 38, title: "SNMP and Monitoring", prompt: "Explain Simple Network Management Protocol (SNMP) and network monitoring techniques." },
            { id: 39, title: "Troubleshooting Tools", prompt: "Describe common network troubleshooting tools like ping, traceroute, and Wireshark." },
            { id: 40, title: "Performance Analysis", prompt: "Explain methods for network performance analysis and optimization." }
        ]
    },
    {
        category: "Emerging Technologies",
        items: [
            { id: 41, title: "Wireless and Mobile Networks", prompt: "Explain wireless LANs (IEEE 802.11) and cellular network technologies (GSM, CDMA, LTE, 5G)." },
            { id: 42, title: "SDN and NFV", prompt: "Describe Software-Defined Networking (SDN) and Network Function Virtualization (NFV) concepts." },
            { id: 43, title: "Mobile IP and Ad Hoc Networks", prompt: "Explain Mobile IP and ad hoc network technologies and their applications." }
        ]
    }
];
export const DatabaseManagementSystemTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to DBMS", prompt: "Explain the fundamental concepts of Database Management Systems (DBMS), including their purpose, advantages, and disadvantages. Provide examples of popular DBMS like MySQL, PostgreSQL, and MongoDB." },
            { id: 2, title: "Data Models", prompt: "Describe different data models used in DBMS, such as the relational model, hierarchical model, network model, and object-oriented model. Compare and contrast their characteristics and use cases." },
            { id: 3, title: "DBMS Architecture", prompt: "Explain the architecture of a DBMS, including components like the storage manager, query processor, transaction manager, and buffer manager. Discuss their roles and interactions." },
            { id: 4, title: "Data Abstraction", prompt: "Discuss the concept of data abstraction and its levels (physical, logical, and view) in a DBMS. Explain how data abstraction provides data independence and simplifies database design." },
            { id: 5, title: "Database Users", prompt: "Describe different types of database users, including database administrators, application programmers, and end-users. Discuss their roles, responsibilities, and privileges." },
            { id: 6, title: "Database Languages", prompt: "Explain different database languages including DDL, DML, DCL, and TCL. Provide examples of each and their usage in database operations." },
            { id: 7, title: "Database System Concepts", prompt: "Discuss key database concepts like data independence, data integrity, and data security. Explain their importance in database design and management." }
        ]
    },
    {
        category: "Relational Model",
        items: [
            { id: 8, title: "Relational Algebra", prompt: "Explain relational algebra operations such as select, project, union, intersection, difference, and join. Provide examples of how these operations are used to query relational databases." },
            { id: 9, title: "SQL Fundamentals", prompt: "Introduce SQL (Structured Query Language) and its basic syntax for querying and manipulating data in relational databases. Cover topics such as SELECT, INSERT, UPDATE, and DELETE statements." },
            { id: 10, title: "Advanced SQL", prompt: "Explain advanced SQL concepts including subqueries, window functions, common table expressions (CTEs), and recursive queries. Provide practical examples of their usage." },
            { id: 11, title: "Data Integrity Constraints", prompt: "Explain data integrity constraints such as primary key, foreign key, unique, and not null constraints. Discuss their importance in ensuring data quality and consistency." },
            { id: 12, title: "Normalization", prompt: "Describe the concept of database normalization and its goals of reducing data redundancy and improving data integrity. Explain different normal forms (1NF, 2NF, 3NF, BCNF) and their properties." },
            { id: 13, title: "Joins", prompt: "Explain different types of SQL joins (inner join, left join, right join, full outer join) and their use in combining data from multiple tables based on related columns." },
            { id: 14, title: "Views and Stored Procedures", prompt: "Explain database views and stored procedures, their creation, and usage. Discuss their benefits in database security and performance optimization." }
        ]
    },
    {
        category: "NoSQL Databases",
        items: [
            { id: 15, title: "Introduction to NoSQL", prompt: "Introduce NoSQL databases and their characteristics, such as schema-less design, horizontal scalability, and support for various data models (e.g., document, key-value, graph, column-family)."},
            { id: 16, title: "Document Databases", prompt: "Explain document databases like MongoDB and their use in storing and querying semi-structured data in JSON or XML format. Discuss their advantages and disadvantages compared to relational databases."},
            { id: 17, title: "Key-Value Stores", prompt: "Describe key-value stores like Redis and their use in caching and session management. Discuss their performance characteristics and scalability."},
            { id: 18, title: "Graph Databases", prompt: "Explain graph databases like Neo4j and their use in modeling and querying relationships between entities. Discuss their applications in social networks, recommendation systems, and knowledge graphs."},
            { id: 19, title: "Column-Family Stores", prompt: "Describe column-family stores like Cassandra and their use in handling large-scale data with high write throughput. Discuss their consistency models and fault tolerance."},
            { id: 20, title: "NoSQL vs SQL", prompt: "Compare and contrast NoSQL and SQL databases in terms of data models, scalability, consistency, and use cases. Provide guidance on when to use each type."},
            { id: 21, title: "NoSQL Database Design", prompt: "Explain best practices for designing NoSQL databases, including data modeling, partitioning, and replication strategies."}
        ]
    },
    {
        category: "Transaction Management",
        items: [
            { id: 22, title: "ACID Properties", prompt: "Explain the ACID properties (Atomicity, Consistency, Isolation, Durability) of database transactions and their importance in ensuring data integrity."},
            { id: 23, title: "Concurrency Control", prompt: "Describe concurrency control techniques such as locking, timestamping, and optimistic concurrency control. Discuss their use in managing concurrent access to database resources."},
            { id: 24, title: "Two-Phase Locking", prompt: "Explain the two-phase locking (2PL) protocol and its use in ensuring serializability of transactions. Discuss its advantages and disadvantages."},
            { id: 25, title: "Deadlock Handling", prompt: "Describe deadlock detection and prevention techniques in database systems. Discuss strategies for resolving deadlocks and minimizing their impact on performance."},
            { id: 26, title: "Transaction Recovery", prompt: "Explain transaction recovery techniques such as logging and checkpointing. Discuss their use in restoring the database to a consistent state after a failure."},
            { id: 27, title: "Isolation Levels", prompt: "Explain different transaction isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) and their impact on concurrency and consistency."},
            { id: 28, title: "Distributed Transactions", prompt: "Describe distributed transactions and the challenges in maintaining ACID properties across multiple databases. Discuss two-phase commit protocol."}
        ]
    },
    {
        category: "Database Design",
        items: [
            { id: 29, title: "Entity-Relationship (ER) Modeling", prompt: "Explain the Entity-Relationship (ER) modeling technique and its use in designing relational databases. Cover topics such as entities, attributes, relationships, and cardinality constraints."},
            { id: 30, title: "Database Schema Design", prompt: "Discuss best practices for designing database schemas, including choosing appropriate data types, defining primary and foreign keys, and applying normalization techniques."},
            { id: 31, title: "Indexing", prompt: "Explain the concept of database indexing and its use in improving query performance. Discuss different types of indexes (e.g., B-tree, hash) and their trade-offs."},
            { id: 32, title: "View Materialization", prompt: "Describe view materialization techniques and their use in precomputing and storing the results of frequently executed queries. Discuss their advantages and disadvantages."},
            { id: 33, title: "Data Warehousing", prompt: "Introduce data warehousing concepts and their use in storing and analyzing historical data for business intelligence. Discuss data warehouse architectures and ETL processes."},
            { id: 34, title: "Database Design Patterns", prompt: "Explain common database design patterns like star schema, snowflake schema, and data vault. Discuss their applications in data warehousing and analytics."},
            { id: 35, title: "Data Modeling Tools", prompt: "Introduce popular data modeling tools like ER/Studio, ERwin, and MySQL Workbench. Discuss their features and usage in database design."}
        ]
    },
    {
        category: "Query Optimization",
        items: [
            { id: 36, title: "Query Processing", prompt: "Explain the steps involved in query processing, including parsing, semantic analysis, query rewriting, and query execution."},
            { id: 37, title: "Query Optimization Techniques", prompt: "Describe query optimization techniques such as index selection, join ordering, and subquery optimization. Discuss their impact on query performance."},
            { id: 38, title: "Cost-Based Optimization", prompt: "Explain cost-based query optimization and its use in estimating the cost of different query execution plans. Discuss cost models and optimization algorithms."},
            { id: 39, title: "Parallel Query Processing", prompt: "Describe parallel query processing techniques and their use in executing queries on multiple processors or machines. Discuss data partitioning and parallel join algorithms."},
            { id: 40, title: "Distributed Query Processing", prompt: "Explain distributed query processing and its challenges in querying data stored across multiple databases. Discuss distributed query optimization and transaction management."},
            { id: 41, title: "Query Execution Plans", prompt: "Explain how to analyze and interpret query execution plans. Discuss tools for plan visualization and optimization strategies."},
            { id: 26, title: "Query Processing", prompt: "Explain the steps involved in query processing, including parsing, semantic analysis, query rewriting, and query execution."},
            { id: 27, title: "Query Optimization Techniques", prompt: "Describe query optimization techniques such as index selection, join ordering, and subquery optimization. Discuss their impact on query performance."},
            { id: 28, title: "Cost-Based Optimization", prompt: "Explain cost-based query optimization and its use in estimating the cost of different query execution plans. Discuss cost models and optimization algorithms."},
            { id: 29, title: "Parallel Query Processing", prompt: "Describe parallel query processing techniques and their use in executing queries on multiple processors or machines. Discuss data partitioning and parallel join algorithms."},
            { id: 30, title: "Distributed Query Processing", prompt: "Explain distributed query processing and its challenges in querying data stored across multiple databases. Discuss distributed query optimization and transaction management."}
        ]
    },
    {
        category: "Database Security",
        items: [
            { id: 31, title: "Authentication and Authorization", prompt: "Explain authentication and authorization mechanisms in database systems. Discuss user roles, privileges, and access control policies."},
            { id: 32, title: "SQL Injection", prompt: "Describe SQL injection attacks and their prevention techniques. Discuss parameterized queries and input validation."},
            { id: 33, title: "Data Encryption", prompt: "Explain data encryption techniques for protecting sensitive data in databases. Discuss encryption algorithms, key management, and data masking."},
            { id: 34, title: "Auditing", prompt: "Describe database auditing and its use in tracking user activity and detecting security breaches. Discuss audit logs and compliance requirements."},
            { id: 35, title: "Database Firewalls", prompt: "Explain database firewalls and their use in preventing unauthorized access to databases. Discuss firewall rules and intrusion detection."}
        ]
    },
    {
        category: "Database Administration",
        items: [
            { id: 36, title: "Backup and Recovery", prompt: "Explain database backup and recovery procedures. Discuss different backup types (e.g., full, incremental) and recovery strategies."},
            { id: 37, title: "Performance Monitoring", prompt: "Describe database performance monitoring techniques and tools. Discuss key performance metrics and performance tuning strategies."},
            { id: 38, title: "Capacity Planning", prompt: "Explain database capacity planning and its importance in ensuring adequate resources for database operations. Discuss capacity forecasting and resource allocation."},
            { id: 39, title: "High Availability", prompt: "Describe high availability solutions for database systems. Discuss replication, clustering, and failover mechanisms."},
            { id: 40, title: "Disaster Recovery", prompt: "Explain disaster recovery planning and its importance in protecting databases from catastrophic events. Discuss disaster recovery strategies and testing."}
        ]
    },
    {
        category: "Cloud Databases",
        items: [
            { id: 41, title: "Introduction to Cloud Databases", prompt: "Introduce cloud databases and their advantages, such as scalability, elasticity, and cost-effectiveness. Discuss different cloud database deployment models (e.g., IaaS, PaaS, SaaS)."},
            { id: 42, title: "Database as a Service (DBaaS)", prompt: "Explain Database as a Service (DBaaS) offerings from cloud providers like AWS, Azure, and Google Cloud. Discuss their features, pricing models, and management tools."},
            { id: 43, title: "Cloud Database Migration", prompt: "Describe cloud database migration strategies and tools. Discuss data migration techniques, schema conversion, and application compatibility."},
            { id: 44, title: "Serverless Databases", prompt: "Explain serverless databases and their use in building scalable and cost-effective applications. Discuss serverless database architectures and event-driven programming."},
            { id: 45, title: "Polyglot Persistence", prompt: "Describe polyglot persistence and its use in combining different database technologies to meet the diverse needs of modern applications. Discuss data integration and consistency challenges."}
        ]
    },
    {
        category: "Emerging Trends",
        items: [
            { id: 46, title: "In-Memory Databases", prompt: "Explain in-memory databases and their use in providing low-latency access to data. Discuss their architectures, data structures, and applications."},
            { id: 47, title: "Blockchain Databases", prompt: "Introduce blockchain databases and their use in building secure and transparent data storage systems. Discuss their applications in supply chain management, healthcare, and finance."},
            { id: 48, title: "AI-Powered Databases", prompt: "Describe AI-powered databases and their use in automating database management tasks, optimizing query performance, and detecting anomalies. Discuss machine learning algorithms for database optimization."},
            { id: 49, title: "Quantum Databases", prompt: "Introduce quantum databases and their potential to revolutionize data storage and processing. Discuss quantum data structures, algorithms, and security protocols."},
            { id: 50, title: "Multi-Model Databases", prompt: "Explain multi-model databases and their ability to support multiple data models (e.g., relational, document, graph) in a single system. Discuss their advantages and use cases."}
        ]
    }
];

export const DataStructuresTopics = [
    {
        category: "Introduction to Data Structures and Algorithms",
        items: [
            { id: 1, title: "What is DSA?", prompt: "Define Data Structures and Algorithms (DSA), including their fundamental concepts and importance in computer science. Provide code examples in Python, Java, and C++." },
            { id: 2, title: "Importance of DSA", prompt: "Explain the importance of DSA in problem-solving and algorithm design. Provide code snippets in Python, Java, and C++." },
            { id: 3, title: "Applications of DSA", prompt: "Provide real-world applications of DSA in data management, search algorithms, and optimization problems. Include code examples in Python, Java, and C++." },
            { id: 4, title: "Time & Space Complexity", prompt: "Explain time and space complexity for measuring algorithm efficiency. Provide code examples in Python, Java, and C++." },
            { id: 5, title: "Asymptotic Notations", prompt: "Describe Big O, Omega, and Theta notations. Provide code examples in Python, Java, and C++." },
            { id: 6, title: "Best/Worst/Avg Case Analysis", prompt: "Explain best, worst, and average case analysis. Include code examples in Python, Java, and C++." },
            { id: 7, title: "Recursion vs Iteration", prompt: "Compare recursion and iteration. Provide code examples in Python, Java, and C++." },
            { id: 8, title: "Approach a Problem in DSA", prompt: "Discuss strategies for approaching DSA problems. Include code examples in Python, Java, and C++." },
            { id: 9, title: "Common DSA Mistakes", prompt: "Identify common DSA mistakes. Provide code examples in Python, Java, and C++." },
            { id: 10, title: "Roadmap to Master DSA", prompt: "Provide a roadmap for mastering DSA. Suggest coding exercises in Python, Java, and C++." }
        ]
    },
    {
        category: "Arrays",
        items: [
            { id: 11, title: "Intro to Arrays", prompt: "Introduce arrays, explaining their properties, advantages, and limitations." },
            { id: 12, title: "Declaration and Initialization", prompt: "Explain how to declare and initialize arrays in different languages." },
            { id: 13, title: "Memory Representation", prompt: "Describe the memory representation of arrays." },
            { id: 14, title: "Array Operations", prompt: "Explain common array operations and their time complexities." },
            { id: 15, title: "One vs. Multi-Dimensional", prompt: "Compare one-dimensional and multi-dimensional arrays." },
            { id: 16, title: "Dynamic Arrays", prompt: "Introduce dynamic arrays like ArrayList and Vectors." },
            { id: 17, title: "Two Pointer Technique", prompt: "Explain the two-pointer technique." },
            { id: 18, title: "Sliding Window Technique", prompt: "Explain the sliding window technique." },
            { id: 19, title: "Prefix Sum Arrays", prompt: "Describe prefix sum and difference arrays." },
            { id: 20, title: "Kadane’s Algorithm", prompt: "Explain Kadane's algorithm." },
            { id: 21, title: "Array Sorting", prompt: "Discuss different sorting algorithms for arrays." },
            { id: 22, title: "Array Searching", prompt: "Explain linear and binary search in arrays." },
            { id: 23, title: "Rotated Sorted Arrays", prompt: "Discuss searching in rotated sorted arrays." },
            { id: 24, title: "Array Rearrangement", prompt: "Explain array rearrangement techniques." },
            { id: 25, title: "Array Applications", prompt: "Provide real-world applications of arrays." }
        ]
    },
    {
        category: "Linked Lists",
        items: [
            { id: 31, title: "Intro to Linked Lists", prompt: "Introduce linked lists, explaining their properties, advantages, and limitations." },
            { id: 32, title: "Singly Linked List", prompt: "Explain singly linked lists and their operations." },
            { id: 33, title: "Doubly Linked List", prompt: "Explain doubly linked lists and their operations." },
            { id: 34, title: "Circular Linked List", prompt: "Explain circular linked lists and their operations." },
            { id: 35, title: "Linked List vs Arrays", prompt: "Compare linked lists and arrays." },
            { id: 36, title: "Insertion in Linked List", prompt: "Explain insertion operations in linked lists." },
            { id: 37, title: "Deletion in Linked List", prompt: "Explain deletion operations in linked lists." },
            { id: 38, title: "Reversing a Linked List", prompt: "Explain how to reverse a linked list." },
            { id: 39, title: "Detecting Loops in Linked List", prompt: "Explain how to detect loops in linked lists." },
            { id: 40, title: "Applications of Linked List", prompt: "Discuss applications of linked lists." }
        ]
    },
    {
        category: "Stacks",
        items: [
            { id: 41, title: "Intro to Stacks", prompt: "Introduce stacks, explaining their properties and operations (LIFO)." },
            { id: 42, title: "Stack Implementation", prompt: "Explain stack implementation using arrays and linked lists." },
            { id: 43, title: "Stack Operations", prompt: "Describe push, pop, peek, and isEmpty operations." },
            { id: 44, title: "Applications of Stacks", prompt: "Discuss applications of stacks (e.g., expression evaluation, backtracking)." }
        ]
    },
    {
        category: "Queues",
        items: [
            { id: 51, title: "Intro to Queues", prompt: "Introduce queues, explaining their properties and operations (FIFO)." },
            { id: 52, title: "Queue Implementation", prompt: "Explain queue implementation using arrays and linked lists." },
            { id: 53, title: "Queue Operations", prompt: "Describe enqueue, dequeue, peek, and isEmpty operations." },
            { id: 54, title: "Circular Queue", prompt: "Explain circular queue implementation." },
            { id: 55, title: "Priority Queue", prompt: "Explain priority queue implementation." },
            { id: 56, title: "Applications of Queues", prompt: "Discuss applications of queues (e.g., task scheduling, breadth-first search)." }
        ]
    },
    {
        category: "Trees",
        items: [
            { id: 61, title: "Intro to Trees", prompt: "Introduce trees, explaining their properties and terminology." },
            { id: 62, title: "Binary Tree", prompt: "Explain binary trees and their properties." },
            { id: 63, title: "Binary Search Tree (BST)", prompt: "Explain binary search trees and their operations." },
            { id: 64, title: "Tree Traversal", prompt: "Describe tree traversal algorithms (e.g., inorder, preorder, postorder)." },
            { id: 65, title: "Balanced Trees", prompt: "Introduce balanced trees (e.g., AVL trees, Red-Black trees)." },
            { id: 66, title: "Applications of Trees", prompt: "Discuss applications of trees (e.g., file systems, databases)." }
        ]
    },
    {
        category: "Graphs",
        items: [
            { id: 71, title: "Intro to Graphs", prompt: "Introduce graphs, explaining their properties and terminology." },
            { id: 72, title: "Graph Representation", prompt: "Explain graph representation using adjacency matrices and adjacency lists." },
            { id: 73, title: "Graph Traversal", prompt: "Describe graph traversal algorithms (e.g., breadth-first search, depth-first search)." },
            { id: 74, title: "Shortest Path Algorithms", prompt: "Explain shortest path algorithms (e.g., Dijkstra's algorithm, Bellman-Ford algorithm)." },
            { id: 75, title: "Minimum Spanning Tree", prompt: "Explain minimum spanning tree algorithms (e.g., Kruskal's algorithm, Prim's algorithm)." },
            { id: 76, title: "Applications of Graphs", prompt: "Discuss applications of graphs (e.g., social networks, routing)." }
        ]
    },
    {
        category: "Hash Tables",
        items: [
            { id: 81, title: "Intro to Hash Tables", prompt: "Introduce hash tables, explaining their properties and operations." },
            { id: 82, title: "Hash Functions", prompt: "Explain hash functions and their properties." },
            { id: 83, title: "Collision Resolution", prompt: "Describe collision resolution techniques (e.g., chaining, open addressing)." },
            { id: 84, title: "Applications of Hash Tables", prompt: "Discuss applications of hash tables (e.g., caching, symbol tables)." }
        ]
    },
    {
        category: "Heaps",
        items: [
            { id: 91, title: "Intro to Heaps", prompt: "Introduce heaps, explaining their properties and types (min-heap, max-heap)." },
            { id: 92, title: "Heap Implementation", prompt: "Explain heap implementation using arrays." },
            { id: 93, title: "Heap Operations", prompt: "Describe insert, delete, and peek operations." },
            { id: 94, title: "Heap Sort", prompt: "Explain heap sort algorithm." },
            { id: 95, title: "Applications of Heaps", prompt: "Discuss applications of heaps (e.g., priority queues, heap sort)." }
        ]
    },
    {
        category: "Sorting Algorithms",
        items: [
            { id: 101, title: "Bubble Sort", prompt: "Explain bubble sort algorithm." },
            { id: 102, title: "Selection Sort", prompt: "Explain selection sort algorithm." },
            { id: 103, title: "Insertion Sort", prompt: "Explain insertion sort algorithm." },
            { id: 104, title: "Merge Sort", prompt: "Explain merge sort algorithm." },
            { id: 105, title: "Quick Sort", prompt: "Explain quick sort algorithm." },
            { id: 106, title: "Counting Sort", prompt: "Explain counting sort algorithm." },
            { id: 107, title: "Radix Sort", prompt: "Explain radix sort algorithm." }
        ]
    },
    {
        category: "Searching Algorithms",
        items: [
            { id: 111, title: "Linear Search", prompt: "Explain linear search algorithm." },
            { id: 112, title: "Binary Search", prompt: "Explain binary search algorithm." },
            { id: 113, title: "Jump Search", prompt: "Explain jump search algorithm." },
            { id: 114, title: "Interpolation Search", prompt: "Explain interpolation search algorithm." }
        ]
    },
    {
        category: "Greedy Algorithms",
        items: [
            { id: 121, title: "Intro to Greedy Algorithms", prompt: "Introduce greedy algorithms and their properties." },
            { id: 122, title: "Activity Selection Problem", prompt: "Explain activity selection problem." },
            { id: 123, title: "Fractional Knapsack Problem", prompt: "Explain fractional knapsack problem." },
            { id: 124, title: "Huffman Coding", prompt: "Explain Huffman coding algorithm." }
        ]
    },
    {
        category: "Dynamic Programming",
        items: [
            { id: 131, title: "Intro to Dynamic Programming", prompt: "Introduce dynamic programming and its properties." },
            { id: 132, title: "Memoization", prompt: "Explain memoization technique." },
            { id: 133, title: "Tabulation", prompt: "Explain tabulation technique." },
            { id: 134, title: "Longest Common Subsequence", prompt: "Explain longest common subsequence problem." },
            { id: 135, title: "0/1 Knapsack Problem", prompt: "Explain 0/1 knapsack problem." },
            { id: 136, title: "Fibonacci Sequence", prompt: "Explain Fibonacci sequence using dynamic programming." }
        ]
    },
    {
        category: "Backtracking",
        items: [
            { id: 141, title: "Intro to Backtracking", prompt: "Introduce backtracking and its properties." },
            { id: 142, title: "N-Queens Problem", prompt: "Explain N-Queens problem." },
            { id: 143, title: "Sudoku Solver", prompt: "Explain Sudoku solver using backtracking." },
            { id: 144, title: "Rat in a Maze", prompt: "Explain Rat in a Maze problem." }
        ]
    },
    {
        category: "Divide and Conquer",
        items: [
            { id: 151, title: "Intro to Divide and Conquer", prompt: "Introduce divide and conquer and its properties." },
            { id: 152, title: "Merge Sort", prompt: "Explain Merge Sort algorithm using divide and conquer." },
            { id: 153, title: "Quick Sort", prompt: "Explain Quick Sort algorithm using divide and conquer." },
            { id: 154, title: "Binary Search", prompt: "Explain Binary Search algorithm using divide and conquer." }
        ]
    },
    {
        category: "Bit Manipulation",
        items: [
            { id: 161, title: "Intro to Bit Manipulation", prompt: "Introduce bit manipulation and its operators." },
            { id: 162, title: "AND, OR, XOR Operators", prompt: "Explain AND, OR, XOR bitwise operators." },
            { id: 163, title: "Left Shift, Right Shift", prompt: "Explain left shift and right shift operators." },
            { id: 164, title: "Applications of Bit Manipulation", prompt: "Discuss applications of bit manipulation." }
        ]
    },
    {
        category: "String Algorithms",
        items: [
            { id: 171, title: "Intro to String Algorithms", prompt: "Introduce string algorithms." },
            { id: 172, title: "Pattern Matching", prompt: "Explain pattern matching algorithms." },
            { id: 173, title: "Rabin-Karp Algorithm", prompt: "Explain Rabin-Karp algorithm." },
            { id: 174, title: "Knuth-Morris-Pratt (KMP)", prompt: "Explain Knuth-Morris-Pratt (KMP) algorithm." },
             { id: 175, title: "Longest Common Substring", prompt: "Explain Longest Common Substring problem." }
        ]
    },
    {
         category: "Trees Advanced",
         items:[
            { id: 181, title: "Segment Tree", prompt: "Explain Segment Tree"},
            { id: 182, title: "Fenwick Tree", prompt: "Explain Fenwick Tree"},
            { id: 183, title: "Trie", prompt: "Explain Trie"},
            { id: 184, title: "B-Tree", prompt: "Explain B-Tree"}
         ]
    },
    {
        category: "Graph Algorithms Advanced",
        items:[
           { id: 191, title: "Bellman Ford", prompt: "Explain Bellman Ford Algorithm"},
           { id: 192, title: "Floyd Warshall", prompt: "Explain Floyd Warshall Algorithm"},
           { id: 193, title: "Kosaraju Algorithm", prompt: "Explain Kosaraju Algorithm"},
           { id: 194, title: "Articulation Points", prompt: "Explain Articulation Points"},
           { id: 195, title: "Bridges in a Graph", prompt: "Explain Bridges in a Graph"}
        ]
    },
    {
        category: "Advanced Dynamic Programming",
        items:[
            { id: 201, title: "Matrix Chain Multiplication", prompt: "Explain Matrix Chain Multiplication"},
            { id: 202, title: "Longest Increasing Subsequence", prompt: "Explain Longest Increasing Subsequence"},
            { id: 203, title: "Edit Distance", prompt: "Explain Edit Distance"},
            { id: 204, title: "Maximum Sum Subarray", prompt: "Explain Maximum Sum Subarray"}
        ]
    },
    {
        category: "Geometric Algorithms",
        items:[
            { id: 211, title: "Convex Hull", prompt: "Explain Convex Hull"},
            { id: 212, title: "Line Intersection", prompt: "Explain Line Intersection"},
            { id: 213, title: "Closest Pair of Points", prompt: "Explain Closest Pair of Points"}
        ]
    },
    {
        category: "Randomized Algorithms",
        items:[
            { id: 221, title: "Randomized QuickSort", prompt: "Explain Randomized QuickSort"},
            { id: 222, title: "Monte Carlo Algorithm", prompt: "Explain Monte Carlo Algorithm"},
            { id: 223, title: "Las Vegas Algorithm", prompt: "Explain Las Vegas Algorithm"}
        ]
    },
    {
        category: "Number Theory",
        items:[
            { id: 231, title: "Prime Numbers", prompt: "Explain Prime Numbers"},
            { id: 232, title: "Euclidean Algorithm", prompt: "Explain Euclidean Algorithm"},
            { id: 233, title: "Modular Arithmetic", prompt: "Explain Modular Arithmetic"},
            { id: 234, title: "Chinese Remainder Theorem", prompt: "Explain Chinese Remainder Theorem"}
        ]
    },
    {
        category: "Combinatorial Algorithms",
        items:[
            { id: 241, title: "Permutations", prompt: "Explain Permutations"},
            { id: 242, title: "Combinations", prompt: "Explain Combinations"},
            { id: 243, title: "Backtracking for Combinatorial Problems", prompt: "Explain Backtracking for Combinatorial Problems"}
        ]
    },
    {
        category: "Data Structures for Specific Problems",
        items:[
            { id: 251, title: "Disjoint Set Union (DSU)", prompt: "Explain Disjoint Set Union (DSU)"},
            { id: 252, title: "Bloom Filter", prompt: "Explain Bloom Filter"},
            { id: 253, title: "Skip List", prompt: "Explain Skip List"}
        ]
    },
    {
        category: "Concurrency and Parallelism",
        items:[
            { id: 261, title: "Threads and Processes", prompt: "Explain Threads and Processes"},
            { id: 262, title: "Synchronization Primitives", prompt: "Explain Synchronization Primitives"},
            { id: 263, title: "Deadlocks", prompt: "Explain Deadlocks"},
            { id: 264, title: "Parallel Algorithms", prompt: "Explain Parallel Algorithms"}
        ]
    },
    {
        category: "Cache-Aware Algorithms",
        items:[
            { id: 271, title: "Cache Basics", prompt: "Explain Cache Basics"},
            { id: 272, title: "Cache-Oblivious Algorithms", prompt: "Explain Cache-Oblivious Algorithms"},
            { id: 273, title: "Cache-Conscious Algorithms", prompt: "Explain Cache-Conscious Algorithms"}
        ]
    },
    {
        category: "Approximation Algorithms",
        items:[
            { id: 281, title: "Vertex Cover", prompt: "Explain Vertex Cover"},
            { id: 282, title: "Traveling Salesman Problem (TSP)", prompt: "Explain Traveling Salesman Problem (TSP)"},
            { id: 283, title: "Set Cover", prompt: "Explain Set Cover"}
        ]
    },
    {
        category: "Online Algorithms",
        items:[
            { id: 291, title: "Competitive Analysis", prompt: "Explain Competitive Analysis"},
            { id: 292, title: "Ski Rental Problem", prompt: "Explain Ski Rental Problem"},
            { id: 293, title: "Caching Algorithms", prompt: "Explain Caching Algorithms"}
        ]
    },
    {
        category: "Data Streaming Algorithms",
        items:[
            { id: 301, title: "Count-Min Sketch", prompt: "Explain Count-Min Sketch"},
            { id: 302, title: "Flajolet-Martin Algorithm", prompt: "Explain Flajolet-Martin Algorithm"},
            { id: 303, title: "Reservoir Sampling", prompt: "Explain Reservoir Sampling"}
        ]
    },
    {
        category: "External Memory Algorithms",
        items:[
            { id: 311, title: "I/O Complexity", prompt: "Explain I/O Complexity"},
            { id: 312, title: "External Merge Sort", prompt: "Explain External Merge Sort"},
            { id: 313, title: "B-Trees in External Memory", prompt: "Explain B-Trees in External Memory"}
        ]
    },
    {
        category: "Advanced Graph Data Structures",
        items:[
            { id: 321, title: "Fibonacci Heaps", prompt: "Explain Fibonacci Heaps"},
            { id: 322, title: "Link-Cut Trees", prompt: "Explain Link-Cut Trees"},
            { id: 323, title: "Dynamic Graphs", prompt: "Explain Dynamic Graphs"}
        ]
    },
    {
        category: "Suffix Trees and Arrays",
        items:[
            { id: 331, title: "Suffix Trees", prompt: "Explain Suffix Trees"},
            { id: 332, title: "Suffix Arrays", prompt: "Explain Suffix Arrays"},
            { id: 333, title: "Applications of Suffix Trees and Arrays", prompt: "Explain Applications of Suffix Trees and Arrays"}
        ]
    },
    {
        category: "Computational Geometry Algorithms",
        items:[
            { id: 341, title: "Voronoi Diagrams", prompt: "Explain Voronoi Diagrams"},
            { id: 342, title: "Delaunay Triangulation", prompt: "Explain Delaunay Triangulation"},
            { id: 343, title: "Point Location Problem", prompt: "Explain Point Location Problem"}
        ]
    }
    ,
    {
        category: "Strings",
        items: [
            { id: 26, title: "Intro to Strings", prompt: "Introduce strings as a sequence of characters, explaining their properties, advantages, and common operations." },
            { id: 27, title: "Mutable vs Immutable", prompt: "Explain the concept of mutable and immutable strings, discussing how modifications affect memory allocation." },
            { id: 28, title: "Pattern Matching Algos", prompt: "Describe common pattern matching algorithms like Naïve Approach, KMP Algorithm, Rabin-Karp, and Z Algorithm." },
            { id: 29, title: "Anagram Problems", prompt: "Explain how to check for anagrams and solve problems related to anagram grouping efficiently." },
            { id: 30, title: "Palindrome Problems", prompt: "Discuss different approaches for checking palindromes and finding the longest palindromic substring." }
        ]
    },
];
export const OperatingSystemsTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Operating Systems", prompt: "Explain the fundamental concepts of operating systems, including their role in managing hardware and software resources. Discuss the different types of operating systems (e.g., batch, time-sharing, real-time) and their characteristics. Cover the evolution of operating systems from early batch systems to modern multi-user systems." },
            { id: 2, title: "Operating System Structures", prompt: "Describe the different structures of operating systems, such as monolithic, layered, and microkernel architectures. Discuss the advantages and disadvantages of each structure. Include examples of operating systems that use each architecture and their design trade-offs." },
            { id: 3, title: "System Boot Process", prompt: "Explain the boot process of an operating system, including BIOS/UEFI, bootloader, kernel initialization, and system startup services. Discuss the differences between cold boot and warm boot." },
            { id: 4, title: "Process Management", prompt: "Explain the concept of a process and its lifecycle. Discuss process scheduling algorithms (e.g., FIFO, SJF, priority, round-robin, multilevel queue) and their performance characteristics. Describe process synchronization mechanisms (e.g., semaphores, mutexes, condition variables) and their use in preventing race conditions." },
            { id: 5, title: "Inter-process Communication", prompt: "Describe various inter-process communication (IPC) mechanisms, including shared memory, message passing, pipes, and sockets. Discuss their use cases and performance implications." }
        ]
    },
    {
        category: "Memory Management",
        items: [
            { id: 6, title: "Memory Allocation", prompt: "Explain different memory allocation techniques, such as contiguous allocation, paging, and segmentation. Discuss the advantages and disadvantages of each technique. Include details about memory fragmentation and compaction." },
            { id: 7, title: "Virtual Memory", prompt: "Describe the concept of virtual memory and its role in allowing processes to access more memory than is physically available. Explain page replacement algorithms (e.g., LRU, FIFO, Optimal, Clock) and their performance characteristics. Discuss thrashing and working set models." },
            { id: 8, title: "Cache Memory", prompt: "Explain the principles of cache memory and its impact on system performance. Discuss cache replacement policies and cache coherence protocols. Include details about multi-level caches and cache-aware programming techniques." },
            { id: 9, title: "Memory Protection", prompt: "Describe memory protection mechanisms, including address space layout randomization (ASLR), memory segmentation, and page table permissions. Discuss their role in system security and stability." }
        ]
    },
    {
        category: "File Systems",
        items: [
            { id: 10, title: "File System Concepts", prompt: "Explain the fundamental concepts of file systems, including file organization, directory structures, and file access methods. Discuss file attributes, operations, and different types of file systems (e.g., disk-based, network, virtual)." },
            { id: 11, title: "File System Implementation", prompt: "Describe different file system implementations, such as FAT, NTFS, ext4, ZFS, and Btrfs. Discuss the advantages and disadvantages of each implementation. Include details about journaling, snapshots, and compression features." },
            { id: 12, title: "File System Security", prompt: "Explain file system security mechanisms, such as access control lists (ACLs), file encryption, and auditing. Discuss permission models (e.g., Unix permissions, Windows ACLs) and their implementation." },
            { id: 13, title: "Distributed File Systems", prompt: "Describe distributed file systems like NFS, CIFS/SMB, and HDFS. Discuss their architecture, consistency models, and performance characteristics in distributed environments." }
        ]
    },
    {
        category: "Input/Output (I/O) Systems",
        items: [
            { id: 14, title: "I/O Devices", prompt: "Describe different types of I/O devices and their characteristics, including block devices, character devices, and network interfaces. Discuss device controllers and their role in hardware abstraction." },
            { id: 15, title: "I/O Management", prompt: "Explain I/O management techniques, such as polling, interrupts, and DMA. Discuss the advantages and disadvantages of each technique. Include details about I/O scheduling algorithms and their impact on system performance." },
            { id: 16, title: "Device Drivers", prompt: "Explain the role of device drivers in enabling communication between the operating system and I/O devices. Discuss the different types of drivers (e.g., character, block, network) and their implementation challenges." },
            { id: 17, title: "Storage Systems", prompt: "Describe different storage systems, including RAID configurations, SAN, and NAS. Discuss their performance characteristics, fault tolerance, and use cases in enterprise environments." }
        ]
    },
    {
        category: "Security",
        items: [
            { id: 18, title: "Security Threats", prompt: "Describe common security threats to operating systems, such as viruses, worms, malware, rootkits, and zero-day exploits. Discuss their propagation methods and potential impacts on system security." },
            { id: 19, title: "Security Mechanisms", prompt: "Explain security mechanisms for protecting operating systems, such as firewalls, intrusion detection systems, antivirus software, and sandboxing. Discuss their implementation and effectiveness against different types of attacks." },
            { id: 20, title: "Authentication and Authorization", prompt: "Explain authentication and authorization techniques for controlling access to system resources. Discuss password policies, multi-factor authentication, role-based access control (RBAC), and privilege escalation prevention." },
            { id: 21, title: "System Hardening", prompt: "Describe techniques for hardening operating systems, including security patches, system configuration, and least privilege principles. Discuss the importance of regular security audits and vulnerability assessments." }
        ]
    },
    {
        category: "Virtualization",
        items: [
            { id: 22, title: "Virtualization Concepts", prompt: "Explain the fundamental concepts of virtualization, including hypervisors (Type 1 and Type 2), virtual machines, and containers. Discuss the benefits of virtualization in resource utilization and system management." },
            { id: 23, title: "Types of Virtualization", prompt: "Describe different types of virtualization, such as hardware virtualization, software virtualization, paravirtualization, and containerization. Discuss their use cases and performance characteristics." },
            { id: 24, title: "Cloud Computing", prompt: "Explain the relationship between virtualization and cloud computing. Discuss different cloud service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid)." },
            { id: 25, title: "Virtualization Security", prompt: "Discuss security challenges in virtualized environments, including VM escape attacks, hypervisor vulnerabilities, and container security. Describe best practices for securing virtualized systems." }
        ]
    },
    {
        category: "Real-time Operating Systems (RTOS)",
        items: [
            { id: 26, title: "RTOS Concepts", prompt: "Explain the fundamental concepts of real-time operating systems, including determinism, responsiveness, and predictability. Discuss the differences between hard and soft real-time systems." },
            { id: 27, title: "RTOS Scheduling", prompt: "Describe different scheduling algorithms used in real-time operating systems, such as rate-monotonic scheduling, earliest-deadline-first scheduling, and priority inheritance protocols. Discuss their implementation and performance characteristics." },
            { id: 28, title: "RTOS Applications", prompt: "Discuss the applications of real-time operating systems in embedded systems, industrial automation, and other time-critical applications. Include examples of popular RTOS implementations." },
            { id: 29, title: "RTOS Performance Analysis", prompt: "Explain techniques for analyzing and optimizing the performance of real-time systems, including worst-case execution time (WCET) analysis and response time analysis." }
        ]
    },
    {
        category: "Distributed Systems",
        items: [
            { id: 30, title: "Distributed System Concepts", prompt: "Explain the fundamental concepts of distributed systems, including distributed file systems, distributed databases, and distributed computing. Discuss the challenges of distributed system design and implementation." },
            { id: 31, title: "Consistency and Fault Tolerance", prompt: "Describe consistency models (e.g., strong, eventual) and fault tolerance techniques (e.g., replication, checkpointing) used in distributed systems. Discuss the CAP theorem and its implications." },
            { id: 32, title: "Distributed System Architectures", prompt: "Explain different distributed system architectures, such as client-server, peer-to-peer, and cloud-based architectures. Discuss their scalability, reliability, and performance characteristics." },
            { id: 33, title: "Distributed Coordination", prompt: "Describe distributed coordination techniques, including distributed consensus algorithms (e.g., Paxos, Raft), distributed locking, and leader election. Discuss their use in maintaining system consistency." }
        ]
    },
    {
        category: "Concurrency",
        items: [
            { id: 34, title: "Threads and Processes", prompt: "Explain the difference between threads and processes and their role in concurrent programming. Discuss thread models (e.g., user-level, kernel-level) and their implementation in different operating systems." },
            { id: 25, title: "Threads and Processes", prompt: "Explain the difference between threads and processes and their role in concurrent programming." },
            { id: 26, title: "Synchronization", prompt: "Describe synchronization primitives such as mutexes, semaphores, and monitors, and their use in preventing race conditions." },
            { id: 27, title: "Deadlocks", prompt: "Explain the concept of deadlocks and techniques for preventing and resolving them." }
        ]
    },
    {
        category: "Kernel",
        items: [
            { id: 28, title: "Kernel Structure", prompt: "Explain the structure of a kernel, including its different components and their functions." },
            { id: 29, title: "System Calls", prompt: "Describe system calls and their role in providing an interface between user-level programs and the kernel." },
            { id: 30, title: "Kernel Modules", prompt: "Explain how kernel modules can be used to extend the functionality of the kernel." }
        ]
    }
];

export const BigDataTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Big Data", prompt: "Explain the fundamental concepts of Big Data, including its characteristics (volume, velocity, variety, veracity, value), common use cases, and the challenges associated with processing and analyzing large datasets." },
            { id: 2, title: "Big Data Sources", prompt: "Describe various sources of Big Data, such as social media, sensor networks, web logs, financial transactions, and scientific data. Discuss the characteristics of data from each source." },
            { id: 3, title: "Big Data Storage", prompt: "Explain different approaches to storing Big Data, including distributed file systems (e.g., Hadoop Distributed File System - HDFS) and NoSQL databases (e.g., Cassandra, MongoDB). Compare and contrast these storage solutions." },
            { id: 4, title: "Big Data Processing Frameworks", prompt: "Describe popular Big Data processing frameworks, such as Apache Hadoop and Apache Spark. Explain the architecture and key components of each framework." },
            { id: 5, title: "MapReduce", prompt: "Explain the MapReduce programming model and its role in processing large datasets in parallel. Discuss the Map and Reduce phases, data partitioning, and fault tolerance." }
        ]
    },
    {
        category: "Hadoop Ecosystem",
        items: [
            { id: 6, title: "HDFS (Hadoop Distributed File System)", prompt: "Explain the architecture and features of HDFS, including data replication, fault tolerance, and data locality." },
            { id: 7, title: "YARN (Yet Another Resource Negotiator)", prompt: "Describe YARN's role in resource management and job scheduling in Hadoop clusters." },
            { id: 8, title: "HBase", prompt: "Explain HBase as a NoSQL database built on top of HDFS, suitable for real-time data access." },
            { id: 9, title: "Hive", prompt: "Describe Hive as a data warehousing solution that provides SQL-like querying capabilities for Hadoop data." },
            { id: 10, title: "Pig", prompt: "Explain Pig as a high-level data flow language for processing and analyzing large datasets in Hadoop." }
        ]
    },
    {
        category: "Spark Ecosystem",
        items: [
            { id: 11, title: "Spark Core", prompt: "Explain the core components of Apache Spark, including RDDs (Resilient Distributed Datasets) and the Spark execution model." },
            { id: 12, title: "Spark SQL", prompt: "Describe Spark SQL for querying structured data using SQL or DataFrame APIs." },
            { id: 13, title: "Spark Streaming", prompt: "Explain Spark Streaming for real-time data processing and stream analytics." },
            { id: 14, title: "MLlib (Machine Learning Library)", prompt: "Describe MLlib as Spark's machine learning library, providing various algorithms for classification, regression, clustering, and more." },
            { id: 15, title: "GraphX", prompt: "Explain GraphX for graph processing and analytics in Spark." }
        ]
    },
    {
        category: "NoSQL Databases",
        items: [
            { id: 16, title: "Cassandra", prompt: "Explain Cassandra as a distributed NoSQL database designed for high availability and scalability." },
            { id: 17, title: "MongoDB", prompt: "Describe MongoDB as a document-oriented NoSQL database suitable for flexible data models." },
            { id: 18, title: "Redis", prompt: "Explain Redis as an in-memory data structure store often used for caching and real-time data processing." },
            { id: 19, title: "Neo4j", prompt: "Describe Neo4j as a graph database for managing and querying relationships between data." },
            { id: 20, title: "Couchbase", prompt: "Explain Couchbase as a distributed NoSQL database with a flexible data model and built-in caching." }
        ]
    },
    {
        category: "Data Ingestion",
        items: [
            { id: 21, title: "Flume", prompt: "Explain Flume as a distributed data ingestion tool for collecting and aggregating log data." },
            { id: 22, title: "Kafka", prompt: "Describe Kafka as a distributed streaming platform for building real-time data pipelines." },
            { id: 23, title: "Sqoop", prompt: "Explain Sqoop as a tool for transferring data between Hadoop and relational databases." },
            { id: 24, title: "NiFi", prompt: "Describe Apache NiFi as a dataflow system for automating the movement and transformation of data between systems." },
            { id: 25, title: "Logstash", prompt: "Explain Logstash as a data processing pipeline that can ingest, transform, and ship data to various destinations." }
        ]
    },
    {
        category: "Data Warehousing",
        items: [
            { id: 26, title: "Data Warehouse Concepts", prompt: "Explain the fundamental concepts of data warehousing, including ETL (Extract, Transform, Load) processes and schema design." },
            { id: 27, title: "Snowflake", prompt: "Describe Snowflake as a cloud-based data warehousing solution with a unique architecture for scalability and performance." },
            { id: 28, title: "Amazon Redshift", prompt: "Explain Amazon Redshift as a fully managed data warehouse service in the AWS cloud." },
            { id: 29, title: "Google BigQuery", prompt: "Describe Google BigQuery as a serverless, highly scalable data warehouse service in the Google Cloud Platform." },
            { id: 30, title: "Azure Synapse Analytics", prompt: "Explain Azure Synapse Analytics as a limitless analytics service that brings together data integration, enterprise data warehousing, and big data analytics." }
        ]
    },
    {
        category: "Data Governance and Security",
        items: [
            { id: 31, title: "Data Governance", prompt: "Explain the importance of data governance in Big Data environments, including data quality, metadata management, and compliance." },
            { id: 32, title: "Data Security", prompt: "Describe security measures for protecting Big Data, including encryption, access control, and auditing." },
            { id: 33, title: "Apache Ranger", prompt: "Explain Apache Ranger as a framework for enabling, monitoring, and managing comprehensive data security across the Hadoop ecosystem." },
            { id: 34, title: "Apache Atlas", prompt: "Explain Apache Atlas as a metadata management and governance framework for Hadoop." },
            { id: 35, title: "Data Masking and Anonymization", prompt: "Describe techniques for masking and anonymizing sensitive data in Big Data environments." }
        ]
    },
    {
        category: "Real-time Analytics",
        items: [
            { id: 36, title: "Real-time Data Processing", prompt: "Explain the concepts of real-time data processing and the challenges associated with analyzing streaming data." },
            { id: 37, title: "Storm", prompt: "Describe Apache Storm as a distributed real-time computation system." },
            { id: 38, title: "Flink", prompt: "Explain Apache Flink as a stream processing framework with support for stateful computations and fault tolerance." },
            { id: 39, title: "Samza", prompt: "Describe Apache Samza as a distributed stream processing framework built on Kafka." },
            { id: 40, title: "Kinesis", prompt: "Explain Amazon Kinesis as a scalable and durable real-time data streaming service." }
        ]
    },
    {
        category: "Machine Learning on Big Data",
        items: [
            { id: 41, title: "Scalable Machine Learning", prompt: "Explain the challenges of applying machine learning algorithms to large datasets and techniques for scaling machine learning models." },
            { id: 42, title: "Distributed Machine Learning", prompt: "Describe distributed machine learning frameworks like TensorFlow, PyTorch, and Horovod." },
            { id: 43, title: "Feature Engineering for Big Data", prompt: "Explain feature engineering techniques for extracting relevant features from large datasets." },
            { id: 44, title: "Model Deployment", prompt: "Describe methods for deploying machine learning models in Big Data environments." },
            { id: 45, title: "Model Monitoring", prompt: "Explain the importance of monitoring machine learning models in production and techniques for detecting and addressing model drift." }
        ]
    },
    {
        category: "Cloud-Based Big Data Solutions",
        items: [
            { id: 46, title: "AWS Big Data Services", prompt: "Describe various Big Data services offered by Amazon Web Services (AWS), such as EMR, S3, and Glue." },
            { id: 47, title: "Azure Big Data Services", prompt: "Explain Big Data services offered by Microsoft Azure, such as HDInsight, Data Lake Storage, and Data Factory." },
            { id: 48, title: "Google Cloud Big Data Services", prompt: "Describe Big Data services offered by Google Cloud Platform (GCP), such as Dataproc, Cloud Storage, and Dataflow." },
            { id: 49, title: "Choosing a Cloud Provider", prompt: "Discuss factors to consider when choosing a cloud provider for Big Data solutions." },
            { id: 50, title: "Hybrid and Multi-Cloud Architectures", prompt: "Explain hybrid and multi-cloud architectures for Big Data and the benefits and challenges of these approaches." }
        ]
    }
];

export const DataAnalysisTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Data Analysis", prompt: "Explain the fundamental concepts of Data Analysis, including its definition, importance, and applications across various industries. Discuss the role of data in decision-making." },
            { id: 2, title: "Types of Data Analysis", prompt: "Describe the different types of data analysis, such as descriptive, diagnostic, predictive, and prescriptive analysis. Provide examples of when each type is used, and explain their respective goals and methodologies." },
            { id: 3, title: "Data Analysis Process", prompt: "Outline the typical data analysis process, including data collection, cleaning, exploration, modeling, and interpretation. Explain the importance of each step and the potential challenges involved." },
            { id: 4, title: "Key Skills for Data Analysts", prompt: "Discuss the key skills and qualifications needed to become a successful data analyst, including statistical knowledge, programming skills (e.g., Python, R), data visualization abilities, communication skills, and critical thinking." },
            { id: 5, title: "Tools for Data Analysis", prompt: "Introduce popular tools and software used for data analysis, such as Excel, Python libraries (e.g., Pandas, NumPy, Scikit-learn), R, data visualization tools (e.g., Tableau, Power BI), and cloud-based platforms (e.g., AWS, Azure, GCP). Compare and contrast their features and capabilities." }
        ]
    },
    {
        category: "Data Collection",
        items: [
            { id: 6, title: "Data Sources", prompt: "Describe various data sources, including databases, spreadsheets, APIs, web scraping, and social media. Discuss the characteristics of data from each source and how to access them." },
            { id: 7, title: "Data Acquisition Techniques", prompt: "Explain different data acquisition techniques, such as web scraping, API integration, and database querying. Provide examples of how to implement these techniques using programming languages like Python." },
            { id: 8, title: "Data Quality Assessment", prompt: "Discuss the importance of data quality and how to assess it. Explain common data quality issues, such as missing values, outliers, and inconsistencies, and how to address them." }
        ]
    },
    {
        category: "Data Cleaning and Preprocessing",
        items: [
            { id: 9, title: "Data Cleaning Techniques", prompt: "Explain various data cleaning techniques, such as handling missing values, removing duplicates, and correcting inconsistencies. Provide examples of how to implement these techniques using Python libraries like Pandas." },
            { id: 10, title: "Data Transformation", prompt: "Describe data transformation techniques, such as normalization, standardization, and feature scaling. Explain when and why these techniques are used." },
            { id: 11, title: "Data Integration", prompt: "Discuss data integration techniques for combining data from multiple sources. Explain how to handle schema differences and data conflicts." }
        ]
    },
    {
        category: "Exploratory Data Analysis (EDA)",
        items: [
            { id: 12, title: "Descriptive Statistics", prompt: "Explain descriptive statistics, such as mean, median, mode, standard deviation, and percentiles. Discuss how to use these statistics to summarize and understand data." },
            { id: 13, title: "Data Visualization", prompt: "Introduce data visualization techniques, such as histograms, scatter plots, box plots, and heatmaps. Explain how to create effective visualizations using tools like Matplotlib, Seaborn, and Tableau." },
            { id: 14, title: "Correlation Analysis", prompt: "Describe correlation analysis and how to use it to identify relationships between variables. Explain different types of correlation coefficients and how to interpret them." }
        ]
    },
    {
        category: "Statistical Analysis",
        items: [
            { id: 15, title: "Hypothesis Testing", prompt: "Explain hypothesis testing and its role in statistical inference. Discuss common hypothesis tests, such as t-tests, chi-square tests, and ANOVA." },
            { id: 16, title: "Regression Analysis", prompt: "Introduce regression analysis and its applications in predicting continuous outcomes. Explain linear regression, multiple regression, and logistic regression." },
            { id: 17, title: "Time Series Analysis", prompt: "Describe time series analysis techniques for analyzing data collected over time. Explain concepts like trend, seasonality, and autocorrelation." }
        ]
    },
    {
        category: "Data Modeling",
        items: [
            { id: 18, title: "Model Selection", prompt: "Discuss the process of selecting appropriate data models for different analytical tasks. Explain criteria for model selection, such as accuracy, interpretability, and complexity." },
            { id: 19, title: "Model Training and Evaluation", prompt: "Explain how to train and evaluate data models using techniques like cross-validation and holdout sets. Discuss common evaluation metrics, such as accuracy, precision, recall, and F1-score." },
            { id: 20, title: "Model Tuning", prompt: "Describe model tuning techniques for optimizing model performance. Explain how to use techniques like grid search and random search to find the best model parameters." }
        ]
    },
    {
        category: "Data Interpretation and Reporting",
        items: [
            { id: 21, title: "Interpreting Results", prompt: "Discuss how to interpret the results of data analysis and draw meaningful conclusions. Explain how to communicate findings to stakeholders." },
            { id: 22, title: "Data Visualization for Reporting", prompt: "Explain how to create effective data visualizations for reporting purposes. Discuss best practices for creating clear and concise visualizations." },
            { id: 23, title: "Report Writing", prompt: "Describe the process of writing data analysis reports. Explain how to structure a report, present findings, and make recommendations." }
        ]
    },
    {
        category: "Big Data Analysis",
        items: [
            { id: 24, title: "Introduction to Big Data Analysis", prompt: "Explain the challenges and opportunities of analyzing big data. Discuss the tools and techniques used for big data analysis, such as Hadoop, Spark, and cloud-based platforms." },
            { id: 25, title: "Distributed Data Processing", prompt: "Describe distributed data processing techniques for analyzing large datasets. Explain how to use frameworks like Hadoop and Spark to process data in parallel." },
            { id: 26, title: "Big Data Visualization", prompt: "Explain how to visualize big data using tools like Tableau and Power BI. Discuss techniques for creating effective visualizations of large datasets." }
        ]
    },
    {
        category: "Ethical Considerations",
        items: [
            { id: 27, title: "Data Privacy", prompt: "Discuss the ethical considerations related to data privacy. Explain how to protect sensitive data and comply with privacy regulations." },
            { id: 28, title: "Bias in Data Analysis", prompt: "Explain how bias can affect data analysis and how to mitigate it. Discuss techniques for identifying and addressing bias in data and models." },
            { id: 29, title: "Responsible Data Use", prompt: "Discuss the importance of responsible data use and how to ensure that data analysis is used for good." }
        ]
    },
    {
        category: "Advanced Techniques",
        items: [
            { id: 30, title: "Machine Learning for Data Analysis", prompt: "Introduce machine learning techniques for data analysis, such as classification, regression, and clustering. Explain how to use machine learning algorithms to solve data analysis problems." },
            { id: 31, title: "Text Analysis", prompt: "Describe text analysis techniques for analyzing unstructured text data. Explain how to use techniques like sentiment analysis, topic modeling, and named entity recognition." },
            { id: 32, title: "Network Analysis", prompt: "Explain network analysis techniques for analyzing relationships between entities. Discuss how to use network analysis to identify influential nodes and communities." }
        ]
    }
];



export const MachineLearningTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Machine Learning", prompt: "Explain the fundamental concepts of Machine Learning, including its definition, types (supervised, unsupervised, reinforcement learning), and applications." },
            { id: 2, title: "Types of Machine Learning", prompt: "Describe the different types of machine learning: supervised, unsupervised, semi-supervised, and reinforcement learning. Provide examples of each." },
            { id: 3, title: "Machine Learning Process", prompt: "Outline the typical machine learning process, including data collection, preprocessing, feature engineering, model selection, training, evaluation, and deployment. Explain the importance of each step." },
            { id: 4, title: "Key Skills for Machine Learning Engineers", prompt: "Discuss the key skills and qualifications needed to become a successful machine learning engineer, including programming skills (e.g., Python), statistical knowledge, and understanding of algorithms." },
            { id: 5, title: "Tools for Machine Learning", prompt: "Introduce popular tools and libraries used for machine learning, such as Python libraries (e.g., Scikit-learn, TensorFlow, PyTorch), cloud platforms (e.g., AWS, Azure, GCP), and data visualization tools." }
        ]
    },
    {
        category: "Supervised Learning",
        items: [
            { id: 6, title: "Linear Regression", prompt: "Explain linear regression, including simple linear regression and multiple linear regression. Discuss how to interpret coefficients and evaluate model performance using metrics like R-squared." },
            { id: 7, title: "Logistic Regression", prompt: "Describe logistic regression and its use for binary classification problems. Explain how to interpret coefficients and evaluate model performance using metrics like accuracy, precision, and recall." },
            { id: 8, title: "Decision Trees", prompt: "Explain decision trees and their use for both classification and regression problems. Discuss how decision trees are constructed and how to prevent overfitting." },
            { id: 9, title: "Support Vector Machines (SVM)", prompt: "Describe support vector machines and their use for classification and regression. Explain the concept of kernel functions and how to choose the right kernel." },
            { id: 10, title: "Ensemble Methods", prompt: "Explain ensemble methods like Random Forests and Gradient Boosting. Discuss how these methods combine multiple models to improve performance." }
        ]
    },
    {
        category: "Unsupervised Learning",
        items: [
            { id: 11, title: "Clustering", prompt: "Explain clustering algorithms like k-means and hierarchical clustering. Discuss how to choose the optimal number of clusters and evaluate clustering performance." },
            { id: 12, title: "Dimensionality Reduction", prompt: "Explain dimensionality reduction techniques like PCA (Principal Component Analysis) and t-SNE (t-distributed Stochastic Neighbor Embedding). Discuss how these techniques can be used to reduce the number of features and visualize high-dimensional data." },
            { id: 13, title: "Association Rule Mining", prompt: "Explain association rule mining and its use for discovering relationships between items in a dataset. Discuss algorithms like Apriori and FP-Growth." }
        ]
    },
    {
        category: "Reinforcement Learning",
        items: [
            { id: 14, title: "Introduction to Reinforcement Learning", prompt: "Introduce reinforcement learning and its key components (agent, environment, reward, policy). Explain how reinforcement learning algorithms learn through trial and error." },
            { id: 15, title: "Q-Learning", prompt: "Explain the Q-learning algorithm and its use for learning optimal policies in reinforcement learning problems." },
            { id: 16, title: "Deep Reinforcement Learning", prompt: "Introduce deep reinforcement learning and its use for solving complex reinforcement learning problems using deep neural networks." }
        ]
    },
    {
        category: "Model Evaluation",
        items: [
            { id: 17, title: "Bias-Variance Tradeoff", prompt: "Explain the bias-variance tradeoff in machine learning and how it affects model performance. Discuss techniques for reducing bias and variance." },
            { id: 18, title: "Cross-Validation", prompt: "Explain cross-validation techniques like k-fold cross-validation and stratified cross-validation. Discuss how these techniques can be used to estimate model performance and prevent overfitting." },
            { id: 19, title: "Evaluation Metrics", prompt: "Describe common evaluation metrics for classification (e.g., accuracy, precision, recall, F1-score) and regression (e.g., mean squared error, R-squared). Discuss how to choose the right metric for a given problem." },
            { id: 20, title: "ROC and AUC", prompt: "Explain ROC (Receiver Operating Characteristic) curves and AUC (Area Under the Curve) and their use for evaluating the performance of binary classification models." }
        ]
    },
    {
        category: "Feature Engineering",
        items: [
            { id: 21, title: "Feature Scaling", prompt: "Explain feature scaling techniques like standardization and normalization. Discuss how these techniques can improve model performance." },
            { id: 22, title: "Feature Encoding", prompt: "Explain feature encoding techniques like one-hot encoding and label encoding. Discuss how these techniques can be used to convert categorical features into numerical features." },
            { id: 23, title: "Feature Selection", prompt: "Explain feature selection techniques like filter methods, wrapper methods, and embedded methods. Discuss how these techniques can be used to reduce the number of features and improve model performance." }
        ]
    },
    {
        category: "Neural Networks",
        items: [
            { id: 24, title: "Introduction to Neural Networks", prompt: "Explain the fundamental concepts of neural networks, including neurons, layers, activation functions, and backpropagation." },
            { id: 25, title: "Deep Learning", prompt: "Introduce deep learning and its use for solving complex problems in areas like computer vision and natural language processing." },
            { id: 26, title: "Convolutional Neural Networks (CNNs)", prompt: "Explain convolutional neural networks and their use for image classification and object detection." },
            { id: 27, title: "Recurrent Neural Networks (RNNs)", prompt: "Explain recurrent neural networks and their use for sequence modeling and natural language processing." }
        ]
    },
    {
        category: "Model Deployment",
        items: [
            { id: 28, title: "Model Serving", prompt: "Explain different approaches to model serving, including deploying models as REST APIs and using model serving frameworks like TensorFlow Serving and TorchServe." },
            { id: 29, title: "Model Monitoring", prompt: "Discuss the importance of model monitoring and techniques for detecting model drift and performance degradation." },
            { id: 30, title: "A/B Testing", prompt: "Explain A/B testing and its use for comparing different models and evaluating their performance in a real-world setting." }
        ]
    },
    {
        category: "Ethical Considerations",
        items: [
            { id: 31, title: "Bias in Machine Learning", prompt: "Discuss the issue of bias in machine learning and its potential impact on fairness and equity." },
            { id: 32, title: "Explainable AI (XAI)", prompt: "Introduce explainable AI and its use for making machine learning models more transparent and interpretable." },
            { id: 33, title: "Privacy and Security", prompt: "Discuss the importance of privacy and security in machine learning and techniques for protecting sensitive data." },
            { id: 34, title: "Characteristics of NoSQL", prompt: "Discuss the characteristics of NoSQL databases, including their non-relational nature, scalability, and flexibility." }
        ]
    },
    {
        category: "Advanced Topics",
        items: [
            { id: 34, title: "Generative Adversarial Networks (GANs)", prompt: "Explain generative adversarial networks and their use for generating realistic images, videos, and text." },
            { id: 35, title: "Transformers", prompt: "Introduce transformers and their use for natural language processing tasks like machine translation and text summarization." },
            { id: 36, title: "AutoML", prompt: "Explain AutoML (Automated Machine Learning) and its use for automating the machine learning process." }
        ]
    }
];
export const MongoDBTopics = [
    {
        category: "Unit 1: NoSQL and MongoDB Fundamentals (4 hours)",
        items: [
            { id: 1, title: "The Evolution of Databases: From SQL to NoSQL", prompt: "Explore the historical progression of database systems, contrasting SQL and NoSQL paradigms. Analyze the CAP theorem and its implications for database design. Investigate diverse use cases where NoSQL databases excel, such as handling unstructured data, high-velocity data streams, and large-scale data storage." },
            { id: 2, title: "MongoDB: Core Concepts and Architecture", prompt: "Delve into the fundamental concepts of MongoDB, including the document data model, BSON (Binary JSON) format, collections, and databases. Understand the architectural components of MongoDB and how they contribute to its scalability and performance." },
            { id: 3, title: "The MongoDB Ecosystem: Tools and Extensions", prompt: "Become familiar with the MongoDB ecosystem, including essential tools like MongoDB Atlas (cloud database service), MongoDB Compass (GUI for data exploration), MongoDB Shell (command-line interface), and VS Code extensions for enhanced development. Learn how these tools streamline development, deployment, and management of MongoDB applications." },
            { id: 4, title: "Installation and Setup: Local and Cloud Deployment", prompt: "Master the installation and setup process for MongoDB, covering both local instance deployment for development and MongoDB Atlas cloud deployment for production environments. Understand the configuration options and best practices for each deployment scenario." },
            { id: 5, title: "Hands-on with MongoDB Shell and Compass", prompt: "Gain practical experience using the MongoDB Shell and Compass. Learn to create databases and collections, insert sample documents, perform basic queries, and explore data using Compass's visual interface. Develop proficiency in interacting with MongoDB through both command-line and GUI tools." },
            { id: 6, title: "Use Case Analysis: Identifying Suitable Scenarios for MongoDB", prompt: "Analyze real-world use cases to determine when MongoDB is the optimal database solution. Explore scenarios such as content management systems (CMS), Internet of Things (IoT) applications, real-time analytics, and mobile applications. Understand the factors that influence the choice of MongoDB over other database systems." }
        ]
    },
    {
        category: "Unit 2: Mastering MongoDB CRUD Operations (6 hours)",
        items: [
            { id: 7, title: "CRUD Operations: The Foundation of Data Manipulation", prompt: "Understand and implement the fundamental CRUD (Create, Read, Update, Delete) operations in MongoDB. Master the use of methods like `insertOne()`, `find()`, `updateMany()`, `replaceOne()`, and `deleteMany()` to effectively manage data within MongoDB collections. Explore the nuances of each operation and their impact on data integrity." },
            { id: 8, title: "Advanced Query Operators: Filtering and Refining Data", prompt: "Explore a wide range of query operators in MongoDB, including comparison operators (`$eq`, `$gt`, `$lt`, `$gte`, `$lte`), logical operators (`$and`, `$or`, `$not`, `$nor`), element operators (`$exists`, `$type`), evaluation operators (`$regex`, `$mod`), and array operators (`$in`, `$nin`, `$all`, `$size`). Learn how to combine these operators to create complex and precise queries." },
            { id: 9, title: "Projection, Sorting, and Pagination: Optimizing Query Results", prompt: "Master techniques for optimizing query results using projection, sorting, and pagination. Understand how to use projection to select specific fields, sorting to order results based on criteria, and pagination to retrieve data in manageable chunks using `limit()` and `skip()`. Learn how these techniques improve query performance and user experience." },
            { id: 10, title: "Practical Application: Building a Student Enrollment System", prompt: "Apply your knowledge of CRUD operations to build a practical student enrollment system. Design the database schema, implement CRUD functionalities for managing student records, courses, and enrollments. Gain hands-on experience in developing a real-world application using MongoDB." },
            { id: 11, title: "Use Case: Real-time Data Ingestion and Processing", prompt: "Explore the use of MongoDB for real-time data ingestion and processing. Analyze scenarios such as sensor data collection, user activity logging, and financial transaction processing. Understand how MongoDB's scalability and flexibility make it suitable for handling high-velocity data streams." }
        ]
    },
    {
        category: "Unit 3: Designing Effective Schemas and Data Models (8 hours)",
        items: [
            { id: 12, title: "Data Modeling Principles: Embedding vs. Referencing", prompt: "Explore the core principles of data modeling in MongoDB, focusing on the trade-offs between embedding and referencing data. Understand the concepts of cardinality (one-to-one, one-to-many, many-to-many) and how they influence schema design. Learn to choose the appropriate modeling strategy based on application requirements." },
            { id: 13, title: "Advanced Schema Patterns: Optimizing for Performance and Flexibility", prompt: "Study advanced schema patterns in MongoDB, including polymorphic patterns (handling diverse document structures), bucket patterns (grouping related data into single documents), subset patterns (extracting subsets of data for specific queries), and computed patterns (storing precomputed values for faster retrieval). Learn how these patterns enhance performance and flexibility." },
            { id: 14, title: "Schema Validation: Ensuring Data Quality and Consistency", prompt: "Implement schema validation in MongoDB using JSON Schema and dynamic validation rules. Define validation rules to enforce data types, required fields, and custom constraints. Understand how schema validation ensures data quality and consistency within MongoDB collections." },
            { id: 15, title: "Transactions: Ensuring Data Integrity in Complex Operations", prompt: "Understand the concept of transactions in MongoDB and their role in ensuring ACID (Atomicity, Consistency, Isolation, Durability) compliance. Learn how to use multi-document transactions to perform complex operations that require data integrity across multiple documents and collections." },
            { id: 16, title: "Practical Application: Designing an E-commerce Schema", prompt: "Design a comprehensive e-commerce schema in MongoDB, encompassing products, orders, users, and other relevant entities. Apply data modeling principles and schema patterns to create a flexible and efficient schema that supports various e-commerce functionalities." },
            { id: 17, title: "Use Case Analysis: Schema Design Trade-offs in Different Systems", prompt: "Analyze the trade-offs in schema design for different types of systems, such as social media platforms and financial systems. Understand how factors like data volume, query patterns, and consistency requirements influence schema design decisions." }
        ]
    },
    {
        category: "Unit 4: Unleashing the Power of the Aggregation Framework (8 hours)",
        items: [
            { id: 18, title: "Aggregation Pipeline Stages: Transforming and Analyzing Data", prompt: "Master the various stages of the MongoDB aggregation pipeline, including `$match` (filtering documents), `$group` (grouping documents), `$project` (reshaping documents), `$lookup` (joining documents from different collections), and `$unwind` (deconstructing array fields). Learn how to combine these stages to create powerful data transformation and analysis pipelines." },
            { id: 19, title: "Pipeline Optimization: Enhancing Performance and Efficiency", prompt: "Optimize aggregation pipelines for performance and efficiency. Understand the impact of index usage, memory limits, and pipeline stage ordering on query execution time. Learn techniques for minimizing resource consumption and maximizing pipeline throughput." },
            { id: 20, title: "Advanced Aggregation Techniques: Window Functions and Facets", prompt: "Explore advanced aggregation techniques, including window functions (`$setWindowFields`) for performing calculations across a set of documents, facets for creating multi-faceted aggregations, and merging collections for combining data from different sources. Learn how these techniques enable complex data analysis and reporting." },
            { id: 21, title: "Practical Application: Analyzing Sales Data with Multi-Stage Aggregations", prompt: "Analyze sales data using multi-stage aggregations to calculate metrics like monthly revenue, product sales trends, and customer segmentation. Gain hands-on experience in building complex aggregation pipelines for real-world data analysis." },
            { id: 22, title: "Use Case: Building Business Intelligence Dashboards", prompt: "Explore the use of MongoDB aggregation framework for building business intelligence dashboards. Understand how to extract, transform, and load data into a format suitable for visualization and analysis. Learn how to create interactive dashboards that provide insights into key business metrics." }
        ]
    },
    {
        category: "Unit 5: Indexing and Query Optimization for High Performance (6 hours)",
        items: [
            { id: 23, title: "Index Types: Choosing the Right Index for Your Queries", prompt: "Understand the different types of indexes available in MongoDB, including single-field indexes, compound indexes, text indexes, geospatial indexes, and TTL (Time-To-Live) indexes. Learn how to choose the appropriate index type based on query patterns and data characteristics." },
            { id: 24, title: "Index Strategies: Covering Queries and Index Intersection", prompt: "Explore advanced indexing strategies, such as covering queries (retrieving all required data from the index without accessing the document) and index intersection (combining multiple indexes to satisfy a query). Learn how these strategies optimize query performance and reduce latency." },
            { id: 25, title: "Performance Tools: Analyzing Query Execution with Explain() and Query Profiler", prompt: "Master the use of performance tools like `explain()` (analyzing query execution plans) and Query Profiler (monitoring query performance). Learn how to identify slow queries, analyze index usage, and optimize query execution for maximum performance." },
            { id: 26, title: "Practical Application: Optimizing Slow Queries Using Indexes", prompt: "Optimize slow queries by creating and tuning indexes. Analyze query execution plans, identify missing indexes, and implement indexing strategies to improve query performance. Gain hands-on experience in optimizing real-world queries." },
            { id: 27, title: "Use Case: Building High-Performance Applications", prompt: "Explore the use of MongoDB indexing and query optimization techniques for building high-performance applications, such as real-time analytics platforms and high-throughput data processing systems. Understand how to achieve low latency and high throughput in demanding environments." }
        ]
    },
    {
        category: "Unit 6: Replication and High Availability for Mission-Critical Systems (6 hours)",
        items: [
            { id: 28, title: "Replica Sets: Ensuring Data Redundancy and Fault Tolerance", prompt: "Understand the concept of replica sets in MongoDB and their role in ensuring data redundancy and fault tolerance. Learn about the primary-secondary architecture, elections, and oplog (operation log). Understand how replica sets provide high availability and data durability." },
            { id: 29, title: "Read/Write Concerns: Controlling Data Consistency and Durability", prompt: "Explore read and write concerns in MongoDB and their impact on data consistency and durability. Understand the different read concern levels (e.g., \"local\", \"majority\") and write concern levels (e.g., \"w:1\", \"w:\"majority\", \"j:true\"). Learn how to choose the appropriate read and write concerns based on application requirements." },
            { id: 30, title: "Failover Testing and Disaster Recovery: Preparing for the Unexpected", prompt: "Develop strategies for failover testing and disaster recovery in MongoDB. Simulate failure scenarios, test the failover process, and implement procedures for restoring data from backups. Ensure that your MongoDB deployment is resilient to unexpected events." },
            { id: 31, title: "Practical Application: Configuring a 3-Node Replica Set", prompt: "Configure a 3-node replica set locally or on MongoDB Atlas. Deploy the replica set, configure replication settings, and test failover scenarios. Gain hands-on experience in managing a highly available MongoDB deployment." },
            { id: 32, title: "Use Case: Supporting Mission-Critical Systems", prompt: "Explore the use of MongoDB replica sets for supporting mission-critical systems, such as healthcare applications and financial systems. Understand how to achieve high availability, data durability, and disaster recovery in demanding environments." }
        ]
    },
    {
        category: "Unit 7: Sharding and Horizontal Scaling for Large-Scale Applications (6 hours)",
        items: [
            { id: 33, title: "Sharding Components: Understanding the Architecture", prompt: "Understand the components of a sharded cluster in MongoDB, including shards (data partitions), config servers (metadata storage), and mongos (query routers). Learn how these components work together to provide horizontal scalability." },
            { id: 34, title: "Shard Key Selection: Choosing the Right Key for Data Distribution", prompt: "Explore different shard key selection strategies, including hashed sharding, ranged sharding, and zone sharding. Understand the trade-offs between these strategies and how to choose the appropriate shard key based on data characteristics and query patterns." },
            { id: 35, title: "Balancing and Rebalancing Shards: Maintaining Data Distribution", prompt: "Learn how to balance and rebalance shards in a MongoDB sharded cluster. Monitor shard performance, identify imbalances, and use the balancer to redistribute data evenly across shards. Ensure that your sharded cluster maintains optimal performance and scalability." },
            { id: 36, title: "Practical Application: Setting Up a Sharded Cluster", prompt: "Set up a sharded cluster in MongoDB and distribute data across shards. Configure the config servers, deploy the mongos routers, and shard a collection. Gain hands-on experience in managing a horizontally scaled MongoDB deployment." },
            { id: 37, title: "Use Case: Scaling Large-Scale Applications", prompt: "Explore the use of MongoDB sharding for scaling large-scale applications, such as social networks and online gaming platforms. Understand how to handle massive data volumes and high query loads by distributing data across multiple shards." }
        ]
    },
    {
        category: "Unit 8: Security and Administration Best Practices (6 hours)",
        items: [
            { id: 38, title: "Authentication Mechanisms: Securing Access to Your Data", prompt: "Understand the different authentication mechanisms available in MongoDB, including SCRAM (Salted Challenge Response Authentication Mechanism), LDAP (Lightweight Directory Access Protocol), and Kerberos. Learn how to configure authentication to secure access to your MongoDB deployment." },
            { id: 39, title: "Role-Based Access Control (RBAC): Managing User Permissions", prompt: "Implement role-based access control (RBAC) in MongoDB to manage user permissions. Define roles with specific privileges, assign roles to users, and control access to databases and collections. Ensure that only authorized users can access sensitive data." },
            { id: 40, title: "Data Encryption: Protecting Data at Rest and in Transit", prompt: "Implement data encryption in MongoDB to protect data at rest and in transit. Configure encryption settings, generate encryption keys, and encrypt sensitive data fields. Ensure that your data is protected from unauthorized access and data breaches." },
            { id: 41, title: "Practical Application: Implementing User Roles and Permissions", prompt: "Implement user roles and permissions in a sample application using MongoDB. Define roles for different user types, assign permissions to roles, and enforce access control policies. Gain hands-on experience in securing a MongoDB application." },
            { id: 42, title: "Use Case: Securing Sensitive Data in Compliance with Regulations", prompt: "Explore the use of MongoDB security features for securing sensitive data in compliance with regulations like GDPR (General Data Protection Regulation). Understand how to protect personal data, implement data anonymization techniques, and comply with data privacy requirements." }
        ]
    },
    {
        category: "Unit 9: Mastering MongoDB Tools and Ecosystem (6 hours)",
        items: [
            { id: 43, title: "MongoDB Compass: Visualizing and Exploring Your Data", prompt: "Master the use of MongoDB Compass for visualizing and exploring your data. Use Compass to browse collections, view documents, analyze schemas, and build queries. Gain insights into your data and identify patterns and trends." },
            { id: 44, title: "MongoDB Atlas: Cloud Deployment, Monitoring, and Scaling", prompt: "Explore MongoDB Atlas for cloud deployment, monitoring, and scaling. Deploy MongoDB clusters on Atlas, monitor performance metrics, and scale your deployment as needed. Leverage Atlas's features for automated backups, security, and high availability." },
            { id: 45, title: "MongoDB Shell: Advanced Commands and Scripting", prompt: "Master the use of MongoDB Shell for advanced commands and scripting. Use the shell to perform administrative tasks, execute complex queries, and automate data management operations. Develop proficiency in using the shell for various MongoDB tasks." },
            { id: 46, title: "Practical Application: Analyzing and Visualizing a Dataset", prompt: "Use MongoDB Compass to analyze and visualize a real-world dataset. Explore the data, identify patterns, and create visualizations to communicate insights. Gain hands-on experience in using Compass for data analysis and visualization." },
            { id: 47, title: "Use Case: Leveraging Tools for Data Analysis and Management", prompt: "Explore the use of MongoDB tools for data analysis and management in startups and enterprises. Understand how to leverage these tools to streamline development, improve data quality, and gain insights into your data." }
        ]
    },
    {
        category: "Unit 10: Integrating MongoDB with Programming Languages (6 hours)",
        items: [
            { id: 48, title: "Node.js and Mongoose: Building RESTful APIs", prompt: "Integrate MongoDB with Node.js using Mongoose ODM (Object Data Modeling). Build RESTful APIs for interacting with MongoDB databases, implementing CRUD operations, and handling middleware. Develop proficiency in building web applications with Node.js and MongoDB." },
            { id: 49, title: "Python and PyMongo: Data Manipulation and Flask Integration", prompt: "Integrate MongoDB with Python using PyMongo driver. Perform data manipulation operations, build data pipelines, and integrate MongoDB with Flask web framework. Develop proficiency in building data-driven applications with Python and MongoDB." },
            { id: 50, title: "Java and Spring Data MongoDB: Building Enterprise Applications", prompt: "Integrate MongoDB with Java using Spring Data MongoDB. Implement the repository pattern, build data access layers, and develop enterprise applications with MongoDB. Develop proficiency in building scalable and robust applications with Java and MongoDB." },
            { id: 51, title: "Practical Application: Building a RESTful API with Node.js and MongoDB", prompt: "Build a RESTful API using Node.js and MongoDB. Implement endpoints for creating, reading, updating, and deleting data. Secure the API with authentication and authorization. Gain hands-on experience in building a full-stack application with Node.js and MongoDB." },
            { id: 52, title: "Use Case: Building Full-Stack Applications", prompt: "Explore the use of MongoDB for building full-stack applications, such as MERN (MongoDB, Express.js, React, Node.js) stack applications. Understand how to integrate MongoDB with front-end frameworks and back-end servers to create complete web applications." }
        ]
    },
    {
        category: "Unit 11: Deployment and DevOps for MongoDB Applications (6 hours)",
        items: [
            { id: 53, title: "Docker: Containerizing MongoDB Applications", prompt: "Containerize MongoDB applications using Docker. Create Docker images, define Docker Compose files, and deploy MongoDB applications in containers. Understand the benefits of containerization for deployment and scalability." },
            { id: 54, title: "CI/CD Pipelines: Automating Deployment with MongoDB", prompt: "Automate deployment of MongoDB applications using CI/CD (Continuous Integration/Continuous Deployment) pipelines. Configure CI/CD tools, define deployment workflows, and automate the build, test, and deployment process. Ensure that your MongoDB applications are deployed reliably and efficiently." },
            { id: 55, title: "Monitoring and Logging: Ensuring Application Health", prompt: "Implement monitoring and logging for MongoDB applications using tools like Prometheus and Grafana. Collect performance metrics, monitor application health, and analyze logs to identify issues. Ensure that your MongoDB applications are running smoothly and efficiently." },
            { id: 56, title: "Practical Application: Deploying a MongoDB Application Using Docker", prompt: "Deploy a MongoDB application using Docker and set up monitoring. Create a Docker image for the application, define a Docker Compose file, and deploy the application to a Docker environment. Configure monitoring tools to track application performance and health." },
            { id: 57, title: "Use Case: DevOps Practices in Modern Software Development", prompt: "Explore the use of DevOps practices in modern software development with MongoDB. Understand how to automate deployment, monitoring, and scaling of MongoDB applications. Improve collaboration between development and operations teams and accelerate the software delivery process." }
        ]
    },
    {
        category: "Unit 12: Capstone Project: Building a Full-Stack MongoDB Application (6 hours)",
        items: [
            { id: 58, title: "Project Overview: Designing and Implementing a Full-Stack Application", prompt: "Design and implement a full-stack application using MongoDB, integrating all learned concepts. Choose a project idea, define the application requirements, and design the database schema. Develop the front-end and back-end components of the application." },
            { id: 59, title: "Project Requirements: Database Schema, CRUD Operations, Aggregation, and Deployment", prompt: "Create a database schema for the application, implement CRUD operations for managing data, use aggregation to analyze data, set up replication or sharding for scalability, and deploy the application using Docker. Ensure that the application meets all the defined requirements." },
            { id: 60, title: "Project Presentation: Demonstrating Functionality and Design Choices", prompt: "Present your project to the class, demonstrating the functionality of the application and explaining your design choices. Showcase the features of the application, highlight the challenges you faced, and discuss the lessons you learned." },
            { id: 61, title: "Use Case: Real-World Application Development Experience", prompt: "Gain real-world application development experience by building a full-stack MongoDB application. Prepare for job readiness by demonstrating your skills in database design, application development, and deployment. Build a portfolio of projects that showcase your expertise in MongoDB." }
        ]
    }
];

export const MySQLTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to MySQL", prompt: "Explain the fundamental concepts of MySQL, including relational databases, SQL, and database management systems. Discuss the history and evolution of MySQL." },
            { id: 2, title: "Installing MySQL", prompt: "Guide the user through the process of installing MySQL on different operating systems (Windows, macOS, Linux). Include instructions for both local development and server environments." },
            { id: 3, title: "Connecting to MySQL", prompt: "Explain how to connect to a MySQL server using command-line tools and GUI clients (e.g., MySQL Workbench, Dbeaver). Cover different connection methods and troubleshooting common issues." },
            { id: 4, title: "Basic SQL Commands", prompt: "Introduce basic SQL commands such as SELECT, INSERT, UPDATE, and DELETE. Provide examples of each command and explain their syntax." },
            { id: 5, title: "Creating Databases and Tables", prompt: "Explain how to create databases and tables in MySQL, including defining data types and constraints. Discuss database normalization principles." }
        ]
    },
    {
        category: "Data Types and Constraints",
        items: [
            { id: 6, title: "MySQL Data Types", prompt: "Describe the different data types available in MySQL, such as INT, VARCHAR, DATE, and TEXT. Explain the characteristics and use cases of each data type." },
            { id: 7, title: "Constraints in MySQL", prompt: "Explain how to use constraints to enforce data integrity, including PRIMARY KEY, FOREIGN KEY, UNIQUE, and NOT NULL constraints. Discuss the importance of data integrity and how constraints help maintain it." },
            { id: 8, title: "Working with NULL Values", prompt: "Discuss how to handle NULL values in MySQL queries and operations. Explain the implications of NULL values and how to use functions like IS NULL and IS NOT NULL." },
            { id: 9, title: "Auto-Increment Columns", prompt: "Explain how to use auto-increment columns to automatically generate unique IDs for table rows. Discuss the benefits of using auto-increment columns and how to configure them." },
            { id: 10, title: "Default Values", prompt: "Describe how to set default values for table columns. Explain how default values can simplify data entry and ensure data consistency." }
        ]
    },
    {
        category: "Querying Data",
        items: [
            { id: 11, title: "SELECT Statement", prompt: "Explain the SELECT statement and its various clauses, including WHERE, ORDER BY, GROUP BY, and LIMIT. Provide detailed examples of each clause and how they can be combined." },
            { id: 12, title: "Filtering Data with WHERE", prompt: "Describe how to use the WHERE clause to filter data based on specific conditions. Explain different comparison operators and logical operators that can be used in the WHERE clause." },
            { id: 13, title: "Sorting Data with ORDER BY", prompt: "Explain how to use the ORDER BY clause to sort data in ascending or descending order. Discuss how to sort data based on multiple columns." },
            { id: 14, title: "Grouping Data with GROUP BY", prompt: "Describe how to use the GROUP BY clause to group data based on one or more columns. Explain aggregate functions like COUNT, SUM, AVG, MIN, and MAX." },
            { id: 15, title: "Limiting Results with LIMIT", prompt: "Explain how to use the LIMIT clause to limit the number of rows returned by a query. Discuss how to use the OFFSET clause to retrieve a specific subset of rows." }
        ]
    },
    {
        category: "Joining Tables",
        items: [
            { id: 16, title: "INNER JOIN", prompt: "Explain how to use INNER JOIN to combine rows from two or more tables based on a related column. Provide examples of INNER JOIN with different types of relationships." },
            { id: 17, title: "LEFT JOIN", prompt: "Describe how to use LEFT JOIN (or LEFT OUTER JOIN) to return all rows from the left table and matching rows from the right table. Explain how to handle NULL values in the right table." },
            { id: 18, title: "RIGHT JOIN", prompt: "Explain how to use RIGHT JOIN (or RIGHT OUTER JOIN) to return all rows from the right table and matching rows from the left table. Discuss the differences between LEFT JOIN and RIGHT JOIN." },
            { id: 19, title: "FULL OUTER JOIN", prompt: "Describe how to use FULL OUTER JOIN to return all rows from both tables, regardless of whether there is a match. Explain how to handle NULL values in both tables." },
            { id: 20, title: "Self Join", prompt: "Explain how to perform a self-join, joining a table to itself. Discuss use cases for self-joins, such as finding employees who report to the same manager." }
        ]
    },
    {
        category: "Advanced SQL",
        items: [
            { id: 21, title: "Subqueries", prompt: "Explain how to use subqueries (nested queries) to retrieve data based on the results of another query. Discuss different types of subqueries and their use cases." },
            { id: 22, title: "Indexes", prompt: "Describe how to create and use indexes to improve query performance. Explain different types of indexes and how to choose the right index for a specific query." },
            { id: 23, title: "Views", prompt: "Explain how to create and use views to simplify complex queries and provide a virtual representation of data. Discuss the benefits of using views, such as security and data abstraction." },
            { id: 24, title: "Stored Procedures", prompt: "Describe how to create and use stored procedures to encapsulate and reuse SQL code. Explain the advantages of using stored procedures, such as improved performance and security." },
            { id: 25, title: "Triggers", prompt: "Explain how to create and use triggers to automatically execute SQL code in response to certain events. Discuss different types of triggers and their use cases, such as auditing and data validation." }
        ]
    },
    {
        category: "MySQL Administration",
        items: [
            { id: 26, title: "User Management", prompt: "Explain how to create and manage user accounts in MySQL, including granting and revoking privileges. Discuss different types of privileges and how to assign them to users." },
            { id: 27, title: "Backup and Restore", prompt: "Describe how to back up and restore MySQL databases. Explain different backup strategies and how to choose the right strategy for a specific environment." },
            { id: 28, title: "Performance Tuning", prompt: "Explain techniques for optimizing MySQL performance, such as query optimization and server configuration. Discuss different performance monitoring tools and how to use them." },
            { id: 29, title: "Security Best Practices", prompt: "Discuss security best practices for MySQL, such as password management and access control. Explain how to protect against common security threats." },
             { id: 30, title: "Replication", prompt: "Explain how to set up database replication for high availability and scalability. Discuss different replication topologies and how to choose the right topology for a specific application." },
        ]
    },
    {
        category: "Transactions and Locking",
        items: [
            { id: 31, title: "Transactions", prompt: "Explain the concept of transactions in MySQL and how to use them to ensure data consistency. Discuss ACID properties." },
            { id: 32, title: "Locking Mechanisms", prompt: "Describe different locking mechanisms in MySQL, such as table locks and row locks. Explain how locking affects concurrency." },
            { id: 33, title: "Isolation Levels", prompt: "Explain different transaction isolation levels in MySQL and their impact on concurrency and data consistency." },
        ]
    },
    {
        category: "Data Partitioning",
        items: [
            { id: 34, title: "Partitioning Overview", prompt: "Introduce the concept of data partitioning in MySQL and its benefits for performance and manageability." },
            { id: 35, title: "Partitioning Types", prompt: "Describe different types of partitioning in MySQL, such as range partitioning, list partitioning, and hash partitioning." },
            { id: 36, title: "Implementing Partitioning", prompt: "Explain how to implement data partitioning in MySQL using SQL commands." },
        ]
    },
    {
        category: "Full-Text Search",
        items: [
            { id: 37, title: "Introduction to Full-Text Search", prompt: "Explain the concept of full-text search in MySQL and its use cases." },
            { id: 38, title: "Creating Full-Text Indexes", prompt: "Describe how to create full-text indexes in MySQL to enable full-text search." },
            { id: 39, title: "Performing Full-Text Searches", prompt: "Explain how to perform full-text searches in MySQL using the MATCH() and AGAINST() functions." },
        ]
    },
    {
        category: "JSON Data Support",
        items: [
            { id: 40, title: "JSON Data Type", prompt: "Introduce the JSON data type in MySQL and its benefits for storing unstructured data." },
            { id: 41, title: "JSON Functions", prompt: "Describe different JSON functions in MySQL for manipulating JSON data." },
            { id: 42, title: "Querying JSON Data", prompt: "Explain how to query JSON data in MySQL using SQL commands." },
        ]
    }
];
export const PostgreSQLTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to PostgreSQL", prompt: "Explain the fundamental concepts of PostgreSQL, including its architecture, data types, indexing, transaction management, and extensions." },
            { id: 2, title: "Installation and Setup", prompt: "Guide the user through installing PostgreSQL on various operating systems (Windows, macOS, Linux), setting up the initial database environment, and configuring basic settings." },
            { id: 3, title: "Basic SQL Commands", prompt: "Introduce basic SQL commands for interacting with PostgreSQL, such as SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, and ALTER TABLE. Cover basic syntax and usage." },
            { id: 4, title: "Data Types in PostgreSQL", prompt: "Explain the different data types available in PostgreSQL, including integer, floating-point, character, date/time, boolean, geometric, network address, and JSON types. Discuss their properties and use cases." },
            { id: 5, title: "Connecting to PostgreSQL", prompt: "Demonstrate how to connect to a PostgreSQL database from various programming languages (e.g., Python, Java, Node.js, C#) using appropriate database drivers and connection parameters." }
        ]
    },
    {
        category: "Data Definition and Manipulation",
        items: [
            { id: 6, title: "Creating and Managing Tables", prompt: "Explain how to create, alter, and drop tables in PostgreSQL, including defining primary keys, foreign keys, constraints (UNIQUE, CHECK, NOT NULL), and table inheritance." },
            { id: 7, title: "Inserting, Updating, and Deleting Data", prompt: "Demonstrate how to insert new data into tables, update existing data, and delete data using SQL commands. Cover INSERT with ON CONFLICT, UPDATE with RETURNING, and DELETE with WHERE CURRENT OF." },
            { id: 8, title: "Querying Data with SELECT", prompt: "Explain how to use the SELECT statement to query data from tables, including filtering data with WHERE clauses, sorting data with ORDER BY clauses, grouping data with GROUP BY clauses, and using aggregate functions (COUNT, SUM, AVG, MIN, MAX)." },
            { id: 9, title: "Joining Tables", prompt: "Describe how to join multiple tables together using different types of joins (e.g., INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN) to retrieve related data. Explain the use of join conditions and aliases." },
            { id: 10, title: "Using Views", prompt: "Explain how to create and use views in PostgreSQL to simplify complex queries and provide a virtual representation of data. Discuss materialized views and their use cases." }
        ]
    },
    {
        category: "Advanced Features",
        items: [
            { id: 11, title: "Indexing", prompt: "Explain how indexing works in PostgreSQL and how to create indexes to improve query performance. Cover different index types (B-tree, Hash, GiST, GIN, BRIN) and their appropriate use cases." },
            { id: 12, title: "Transactions", prompt: "Describe how transactions work in PostgreSQL and how to use them to ensure data consistency and integrity. Explain ACID properties, isolation levels, and savepoints." },
            { id: 13, title: "Stored Procedures and Functions", prompt: "Explain how to create and use stored procedures and functions in PostgreSQL to encapsulate reusable logic. Discuss different types of functions (SQL, PL/pgSQL), parameters, and return values." },
            { id: 14, title: "Triggers", prompt: "Describe how to create and use triggers in PostgreSQL to automatically execute code in response to certain events (e.g., inserting, updating, or deleting data). Cover different trigger types (BEFORE, AFTER, INSTEAD OF) and trigger execution order." },
            { id: 15, title: "Security", prompt: "Discuss security aspects of PostgreSQL, including user authentication, access control, data encryption (at rest and in transit), and auditing." }
        ]
    },
    {
        category: "Performance Tuning",
        items: [
            { id: 16, title: "Query Optimization", prompt: "Explain how to optimize SQL queries in PostgreSQL to improve performance, including using EXPLAIN to analyze query execution plans, rewriting queries, and using hints." },
            { id: 17, title: "Connection Pooling", prompt: "Describe how connection pooling can improve performance by reusing database connections. Discuss different connection pooling solutions (e.g., PgBouncer, connection poolers in application frameworks)." },
            { id: 18, title: "Monitoring and Logging", prompt: "Explain how to monitor PostgreSQL performance and use logging to diagnose issues. Cover different monitoring tools (e.g., pg_stat_statements, system monitoring tools) and logging configuration options." },
            { id: 19, title: "Partitioning", prompt: "Discuss table partitioning techniques for managing large tables and improving query performance. Cover different partitioning methods (range, list, hash) and partition management." },
            { id: 20, title: "Vacuuming and Autovacuuming", prompt: "Explain the importance of vacuuming and autovacuuming in PostgreSQL for reclaiming storage space and maintaining performance. Discuss vacuuming parameters and autovacuuming configuration." }
        ]
    },
    {
        category: "Replication and High Availability",
        items: [
            { id: 21, title: "Replication", prompt: "Explain different replication techniques in PostgreSQL, such as streaming replication (synchronous and asynchronous) and logical replication, for creating backup copies of data and implementing read scaling." },
            { id: 22, title: "High Availability", prompt: "Describe how to set up PostgreSQL for high availability using techniques like failover clusters (e.g., using Pacemaker, Patroni) and load balancing. Discuss different HA architectures and considerations." },
            { id: 23, title: "Backup and Recovery", prompt: "Explain how to back up and restore PostgreSQL databases to protect against data loss. Cover different backup methods (physical and logical backups) and recovery procedures." },
        ]
    },
    {
        category: "Extensions",
        items: [
            { id: 24, title: "PostGIS", prompt: "Introduce the PostGIS extension for working with geospatial data in PostgreSQL. Explain how to store, query, and analyze spatial data using PostGIS functions." },
            { id: 25, title: "JSONB", prompt: "Explain how to use the JSONB data type and functions for storing and querying JSON data in PostgreSQL. Discuss the advantages of JSONB over JSON." },
            { id: 26, title: "pg_trgm", prompt: "Describe the pg_trgm extension for implementing trigram-based text similarity searches in PostgreSQL." },
        ]
    },
    {
        category: "Data Warehousing",
        items: [
            { id: 27, title: "Columnar Storage", prompt: "Discuss the concept of columnar storage and its benefits for data warehousing workloads. Introduce extensions like cstore_fdw for implementing columnar storage in PostgreSQL." },
            { id: 28, title: "Parallel Query Processing", prompt: "Explain how PostgreSQL can parallelize query processing to improve performance on large datasets. Discuss configuration options for parallel query execution." },
            { id: 29, title: "Foreign Data Wrappers", prompt: "Describe how to use foreign data wrappers (FDWs) to access data stored in external data sources (e.g., other databases, files) from PostgreSQL." },
        ]
    },
    {
        category: "Administration",
        items: [
            { id: 30, title: "User Management", prompt: "Explain how to create and manage user accounts in PostgreSQL, including granting and revoking privileges. Discuss different roles and permissions." },
            { id: 31, title: "Database Maintenance", prompt: "Describe routine database maintenance tasks, such as vacuuming, analyzing tables, and reindexing. Explain how to automate these tasks using cron or other scheduling tools." },
            { id: 32, title: "Configuration", prompt: "Explain key PostgreSQL configuration parameters and how to tune them for optimal performance. Discuss memory settings, connection limits, and other important parameters." },
        ]
    },
    {
        category: "Troubleshooting",
        items: [
            { id: 33, title: "Common Errors", prompt: "Discuss common PostgreSQL errors and how to troubleshoot them. Cover connection errors, syntax errors, and performance issues." },
            { id: 34, title: "Logging", prompt: "Explain how to use PostgreSQL logs to diagnose problems. Discuss different log levels and log analysis techniques." },
            { id: 35, title: "Performance Diagnostics", prompt: "Describe how to use performance monitoring tools to identify bottlenecks and optimize query performance." },
        ]
    },
    {
         category: "Backup Strategies",
         items:[
            { id: 36, title: "Physical Backups", prompt: "Detail the process of creating physical backups using tools like pg_basebackup. Discuss the advantages and disadvantages of physical backups."},
            { id: 37, title: "Logical Backups", prompt: "Explain how to create logical backups using pg_dump and pg_restore. Cover different dump formats and restoration options."},
            { id: 38, title: "Point-in-Time Recovery (PITR)", prompt: "Describe how to configure and perform point-in-time recovery using WAL archiving. Explain the steps involved in restoring a database to a specific point in time."}
         ]
    }
];
export const DjangoTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Django", prompt: "Explain the fundamental concepts of Django, including its architecture, key components like models, views, and templates, and the Model-View-Template (MVT) architectural pattern." },
            { id: 2, title: "Setting up a Django Project", prompt: "Guide the user through installing Django, creating a new project, and setting up the development environment." },
            { id: 3, title: "Creating a Basic Django App", prompt: "Explain how to create a Django app, define models, and interact with the database using the Django ORM." },
            { id: 4, title: "Django Views and Templates", prompt: "Describe how to create views to handle user requests and render dynamic content using Django templates." },
            { id: 5, title: "Django URLs and Routing", prompt: "Explain how to define URL patterns and route requests to the appropriate views in a Django project." }
        ]
    },
    {
        category: "Models and Databases",
        items: [
            { id: 6, title: "Defining Models", prompt: "Explain how to define models in Django, including different field types, relationships, and model options." },
            { id: 7, title: "Django ORM", prompt: "Describe the Django ORM and how it simplifies database interactions, including querying, creating, updating, and deleting records." },
            { id: 8, title: "Migrations", prompt: "Explain how to use Django migrations to manage database schema changes." },
            { id: 9, title: "Admin Interface", prompt: "Describe the Django admin interface and how it can be used to manage data in the database." },
            { id: 10, title: "Working with Databases", prompt: "Guide the user through configuring Django to work with different databases, such as PostgreSQL, MySQL, and SQLite." }
        ]
    },
    {
        category: "Views and Templates",
        items: [
            { id: 11, title: "Writing Views", prompt: "Explain how to write views in Django to handle user requests and process data." },
            { id: 12, title: "Template Syntax", prompt: "Describe the Django template syntax and how to use it to render dynamic content." },
            { id: 13, title: "Template Tags and Filters", prompt: "Explain how to use template tags and filters to perform common tasks in Django templates." },
            { id: 14, title: "Form Handling", prompt: "Describe how to handle forms in Django, including creating forms, validating user input, and processing form submissions." },
            { id: 15, title: "Class-Based Views", prompt: "Explain how to use class-based views in Django to organize and reuse view logic." }
        ]
    },
    {
        category: "User Authentication and Authorization",
        items: [
            { id: 16, title: "User Authentication", prompt: "Explain how to implement user authentication in Django, including user registration, login, and logout." },
            { id: 17, title: "Authorization and Permissions", prompt: "Describe how to implement authorization and permissions in Django to control access to resources based on user roles and permissions." },
            { id: 18, title: "Password Management", prompt: "Explain how to implement secure password management in Django, including password hashing, password reset, and password change functionality." },
            { id: 19, title: "Social Authentication", prompt: "Guide the user through integrating social authentication providers (e.g., Google, Facebook, Twitter) into a Django project using packages like django-allauth." },
            { id: 20, title: "Two-Factor Authentication", prompt: "Describe how to implement two-factor authentication (2FA) in Django to enhance security by requiring users to provide a second factor of authentication in addition to their password." }
        ]
    },
    {
        category: "Working with APIs",
        items: [
            { id: 21, title: "Building APIs with Django REST Framework", prompt: "Describe how to build RESTful APIs in Django using Django REST Framework (DRF), including setting up DRF, defining serializers, and creating API views." },
            { id: 22, title: "API Authentication", prompt: "Explain how to implement authentication for Django REST Framework APIs, including token-based authentication, OAuth 2.0, and JWT (JSON Web Tokens)." },
            { id: 23, title: "API Permissions", prompt: "Describe how to implement permissions for Django REST Framework APIs to control access to API endpoints based on user roles and permissions." },
            { id: 24, title: "API Versioning", prompt: "Discuss different strategies for versioning Django REST Framework APIs, including URL versioning, header versioning, and content negotiation." },
            { id: 25, title: "API Documentation", prompt: "Explain how to generate API documentation for Django REST Framework APIs using tools like Swagger/OpenAPI." }
        ]
    },
    {
        category: "Forms and Data Processing",
        items: [
            { id: 26, title: "Advanced Form Techniques", prompt: "Explore advanced form techniques in Django, such as dynamic forms, formsets, and custom form fields." },
            { id: 27, title: "File Uploads", prompt: "Describe how to handle file uploads in Django forms, including storing uploaded files, validating file types, and processing file data." },
            { id: 28, title: "Data Validation", prompt: "Explain how to implement custom data validation in Django forms, including validating individual fields, validating entire forms, and displaying validation errors." },
            { id: 29, title: "Serialization", prompt: "Describe how to serialize Django models into different data formats (e.g., JSON, XML) for use in APIs or data exchange." },
            { id: 30, title: "Data Import/Export", prompt: "Guide the user through importing and exporting data in Django using different formats (e.g., CSV, Excel) and libraries like django-import-export." }
        ]
    },
    {
        category: "Advanced Models and Databases",
        items: [
            { id: 31, title: "Model Inheritance", prompt: "Explain how to use model inheritance in Django to create reusable model structures and reduce code duplication." },
            { id: 32, title: "Custom Model Fields", prompt: "Describe how to create custom model fields in Django to store specialized data types or implement custom data validation." },
            { id: 33, title: "Raw SQL Queries", prompt: "Explain how to execute raw SQL queries in Django when the ORM is not sufficient for complex database operations." },
            { id: 34, title: "Database Optimization", prompt: "Discuss techniques for optimizing Django database queries, including indexing, query optimization, and caching." },
            { id: 35, title: "Multi-Database Support", prompt: "Guide the user through configuring Django to work with multiple databases and routing queries to the appropriate database based on the model or query type." }
        ]
    },
    {
        category: "Asynchronous Tasks and Background Processing",
        items: [
            { id: 36, title: "Celery Integration", prompt: "Explain how to integrate Celery with Django to handle asynchronous tasks and background processing, such as sending emails, processing images, or running long-running computations." },
            { id: 37, title: "Task Queues", prompt: "Describe how to use task queues in Celery to distribute tasks across multiple workers and manage task priorities." },
            { id: 38, title: "Periodic Tasks", prompt: "Explain how to schedule periodic tasks in Celery to run tasks at regular intervals, such as daily backups or hourly data updates." },
            { id: 39, title: "Real-Time Updates with WebSockets", prompt: "Guide the user through implementing real-time updates in Django using WebSockets and libraries like Django Channels." },
            { id: 40, title: "Background Task Monitoring", prompt: "Describe how to monitor background tasks in Celery using tools like Flower or Celery Beat." }
        ]
    },
    {
        category: "Testing and Debugging",
        items: [
            { id: 41, title: "Advanced Testing Techniques", prompt: "Explore advanced testing techniques in Django, such as mocking, test fixtures, and test runners." },
            { id: 42, title: "Test-Driven Development (TDD)", prompt: "Explain how to practice Test-Driven Development (TDD) in Django by writing tests before writing code and using tests to guide the development process." },
            { id: 43, title: "Debugging Techniques", prompt: "Discuss debugging techniques for Django applications, including using the Django debug toolbar, logging, and remote debugging." },
            { id: 44, title: "Profiling and Performance Analysis", prompt: "Explain how to profile Django applications to identify performance bottlenecks and optimize code for speed and efficiency." },
            { id: 45, title: "Security Testing", prompt: "Describe how to perform security testing on Django applications to identify and fix security vulnerabilities, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF)." }
        ]
    },
    {
        category: "Deployment and Production",
        items: [
            { id: 46, title: "Deployment Strategies", prompt: "Discuss different deployment strategies for Django applications, including deploying to cloud platforms (e.g., AWS, Azure, Google Cloud), using containerization (e.g., Docker), and using deployment tools (e.g., Fabric, Ansible)." },
            { id: 47, title: "Production Settings", prompt: "Explain how to configure Django for production, including setting up static files, configuring database connections, and enabling security features." },
            { id: 48, title: "Web Server Configuration", prompt: "Guide the user through configuring a web server (e.g., Nginx, Apache) to serve Django applications in production." },
            { id: 49, title: "Load Balancing", prompt: "Describe how to set up load balancing for Django applications to distribute traffic across multiple servers and improve performance and availability." },
            { id: 50, title: "Monitoring and Logging", prompt: "Explain how to monitor Django applications in production using tools like Sentry, New Relic, or Prometheus, and how to set up logging to track errors and performance metrics." }
        ]
    }
];

export const ExpressTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Express.js", prompt: "Explain the fundamental concepts of Express.js, including its role as a Node.js web application framework, its key features, and its advantages for building web applications and APIs." },
            { id: 2, title: "Setting up an Express.js Application", prompt: "Guide through the process of setting up a new Express.js application, including installing Node.js and npm, creating a project directory, initializing a package.json file, and installing Express.js as a dependency." },
            { id: 3, title: "Basic Routing in Express.js", prompt: "Explain how to define routes in Express.js to handle different HTTP methods (GET, POST, PUT, DELETE) and URL paths. Provide examples of creating route handlers and sending responses to clients." },
            { id: 4, title: "Middleware in Express.js", prompt: "Describe the concept of middleware in Express.js and its role in processing incoming requests. Explain how to use built-in middleware (e.g., body-parser, cookie-parser) and create custom middleware functions." },
            { id: 5, title: "Serving Static Files in Express.js", prompt: "Explain how to serve static files (e.g., HTML, CSS, JavaScript, images) in an Express.js application using the express.static middleware." },
        ]
    },
    {
        category: "Request and Response Objects",
        items: [
            { id: 6, title: "The Request Object", prompt: "Explain the properties and methods of the Express.js request object, including accessing request parameters, query strings, headers, and body data." },
            { id: 7, title: "The Response Object", prompt: "Explain the properties and methods of the Express.js response object, including setting response headers, sending JSON responses, redirecting clients, and rendering views." },
            { id: 8, title: "Handling Form Data", prompt: "Demonstrate how to handle form data submitted by clients using middleware like body-parser. Explain how to access form data in route handlers and perform validation." },
            { id: 9, title: "Working with Cookies", prompt: "Explain how to use cookies in Express.js to store and retrieve data on the client-side. Demonstrate how to set, read, and delete cookies using middleware like cookie-parser." },
            { id: 10, title: "Session Management", prompt: "Describe session management in Express.js and its use in maintaining user sessions across multiple requests. Explain how to use middleware like express-session to store session data." },
        ]
    },
    {
        category: "Templating Engines",
        items: [
            { id: 11, title: "Introduction to Templating Engines", prompt: "Introduce the concept of templating engines and their use in generating dynamic HTML content in Express.js applications." },
            { id: 12, title: "Using Pug (formerly Jade)", prompt: "Explain how to use the Pug templating engine with Express.js. Demonstrate how to render Pug templates and pass data to them." },
            { id: 13, title: "Using EJS (Embedded JavaScript)", prompt: "Explain how to use the EJS templating engine with Express.js. Demonstrate how to embed JavaScript code in EJS templates and render dynamic content." },
            { id: 14, title: "Using Handlebars", prompt: "Explain how to use the Handlebars templating engine with Express.js. Demonstrate how to register helpers and render Handlebars templates." },
            { id: 36, title: "Using Nunjucks", prompt: "Explain how to use the Nunjucks templating engine with Express.js. Demonstrate how to configure Nunjucks and render templates." }
        ]
    },
    {
        category: "RESTful APIs",
        items: [
            { id: 15, title: "Building RESTful APIs with Express.js", prompt: "Explain the principles of RESTful API design and how to build RESTful APIs using Express.js. Cover topics such as resource modeling, HTTP methods, and status codes." },
            { id: 16, title: "Implementing CRUD Operations", prompt: "Demonstrate how to implement CRUD (Create, Read, Update, Delete) operations for resources in an Express.js API. Provide examples of handling different HTTP methods and database interactions." },
            { id: 17, title: "API Authentication and Authorization", prompt: "Explain how to implement authentication and authorization in an Express.js API to secure resources and protect against unauthorized access. Cover topics such as JWT (JSON Web Tokens) and OAuth." },
            { id: 18, title: "API Versioning", prompt: "Discuss the importance of API versioning and different strategies for versioning an Express.js API. Explain how to implement versioning using URL prefixes or custom headers." },
            { id: 37, title: "API Documentation with Swagger", prompt: "Explain how to document Express.js APIs using Swagger/OpenAPI. Demonstrate how to generate Swagger documentation from code annotations." }
        ]
    },
    {
        category: "Database Integration",
        items: [
            { id: 19, title: "Connecting to MongoDB", prompt: "Explain how to connect an Express.js application to a MongoDB database using the Mongoose ODM (Object Data Mapper). Demonstrate how to define schemas, models, and perform CRUD operations." },
            { id: 20, title: "Connecting to MySQL", prompt: "Explain how to connect an Express.js application to a MySQL database using the Sequelize ORM (Object-Relational Mapper). Demonstrate how to define models, associations, and perform CRUD operations." },
            { id: 21, title: "Connecting to PostgreSQL", prompt: "Explain how to connect an Express.js application to a PostgreSQL database using the Sequelize ORM. Demonstrate how to define models, associations, and perform CRUD operations." },
            { id: 38, title: "Using SQLite", prompt: "Explain how to connect an Express.js application to a SQLite database. Demonstrate how to define schemas, models, and perform CRUD operations." }
        ]
    },
    {
        category: "Authentication and Authorization",
        items: [
            { id: 26, title: "Implementing Local Authentication", prompt: "Guide the user through implementing local authentication (username/password) in an Express.js application." },
            { id: 27, title: "Using Passport.js", prompt: "Explain how to use Passport.js for authentication in Express.js, including setting up strategies for local authentication, OAuth, and OpenID Connect." },
            { id: 28, title: "Implementing Role-Based Authorization", prompt: "Demonstrate how to implement role-based authorization in an Express.js application to control access to resources based on user roles." },
        ]
    },
    {
        category: "Real-time Communication",
        items: [
            { id: 29, title: "Introduction to WebSockets", prompt: "Introduce the concept of WebSockets and their use in enabling real-time communication between clients and servers." },
            { id: 30, title: "Using Socket.IO", prompt: "Explain how to use Socket.IO with Express.js to build real-time applications, such as chat applications and collaborative tools." },
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 22, title: "Error Handling in Express.js", prompt: "Explain how to handle errors in Express.js applications using middleware and error-handling functions. Cover topics such as synchronous and asynchronous error handling, custom error types, and logging." },
            { id: 23, title: "Testing Express.js Applications", prompt: "Explain how to test Express.js applications using testing frameworks like Mocha and Chai. Demonstrate how to write unit tests, integration tests, and end-to-end tests." },
            { id: 31, title: "Integration Testing with Supertest", prompt: "Demonstrate how to perform integration testing of Express.js APIs using Supertest." },
        ]
    },
    {
        category: "Deployment and Scaling",
        items: [
            { id: 24, title: "Deployment Strategies", prompt: "Discuss different deployment strategies for Express.js applications, including deploying to cloud platforms like Heroku, AWS, and Azure. Explain how to configure environment variables and set up continuous integration/continuous deployment (CI/CD) pipelines." },
            { id: 25, title: "Scaling Express.js Applications", prompt: "Explain techniques for scaling Express.js applications to handle increased traffic and load. Cover topics such as load balancing, caching, and horizontal scaling." },
            { id: 32, title: "Using Docker for Deployment", prompt: "Explain how to use Docker to containerize and deploy Express.js applications." },
        ]
    },
    {
        category: "Security",
        items: [
            { id: 33, title: "Preventing Cross-Site Scripting (XSS)", prompt: "Explain how to prevent XSS vulnerabilities in Express.js applications by sanitizing user input and encoding output." },
            { id: 34, title: "Preventing SQL Injection", prompt: "Explain how to prevent SQL injection vulnerabilities in Express.js applications by using parameterized queries or ORMs." },
            { id: 35, title: "Using Helmet.js", prompt: "Explain how to use Helmet.js middleware to secure Express.js applications by setting various HTTP headers." },
        ]
    },
    {
        category: "GraphQL",
        items: [
            { id: 39, title: "Introduction to GraphQL with Express", prompt: "Introduce the concept of GraphQL and its advantages over REST. Explain how to set up a GraphQL server with Express." },
            { id: 40, title: "Defining GraphQL Schemas and Resolvers", prompt: "Guide the user through defining GraphQL schemas, types, queries, and mutations. Explain how to implement resolvers to fetch and manipulate data." },
        ]
    }
];

export const FlaskTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Flask", prompt: "Explain the fundamental concepts of Flask, including its microframework nature, WSGI toolkit, and Jinja2 templating engine."},
            { id: 2, title: "Setting up a Flask Development Environment", prompt: "Guide the user through setting up a development environment for Flask, including installing Python, virtualenv, and Flask itself."},
            { id: 3, title: "Your First Flask Application", prompt: "Walk the user through creating a simple 'Hello, World!' Flask application, explaining the basic structure and routing."},
            { id: 4, title: "Understanding Routes and View Functions", prompt: "Explain how routes are defined in Flask using the `@app.route` decorator and how they map to view functions."},
            { id: 5, title: "Working with Templates", prompt: "Introduce the Jinja2 templating engine and demonstrate how to render dynamic content in HTML templates."},
        ]
    },
    {
        category: "Request Handling",
        items: [
            { id: 6, title: "Accessing Request Data", prompt: "Explain how to access request data, such as form data, query parameters, and headers, in Flask view functions."},
            { id: 7, title: "Handling Form Submissions", prompt: "Demonstrate how to handle form submissions in Flask, including validating user input and displaying error messages."},
            { id: 8, title: "File Uploads", prompt: "Guide the user through implementing file uploads in Flask, including handling file storage and security considerations."},
            { id: 9, title: "Cookies and Sessions", prompt: "Explain how to use cookies and sessions in Flask to store user-specific data and maintain state between requests."},
            { id: 10, title: "Request Hooks", prompt: "Describe the purpose and usage of request hooks, such as `before_request`, `after_request`, and `teardown_request`."}
        ]
    },
    {
        category: "Database Integration",
        items: [
            { id: 11, title: "Connecting to a Database", prompt: "Explain how to connect to a database (e.g., SQLite, PostgreSQL, MySQL) from a Flask application using SQLAlchemy or other database libraries."},
            { id: 12, title: "Defining Models", prompt: "Demonstrate how to define database models using SQLAlchemy and create tables in the database."},
            { id: 13, title: "Performing CRUD Operations", prompt: "Guide the user through performing CRUD (Create, Read, Update, Delete) operations on database records using SQLAlchemy."},
            { id: 14, title: "Database Migrations", prompt: "Explain how to use database migrations (e.g., Alembic) to manage changes to the database schema."},
            { id: 15, title: "Working with Flask-SQLAlchemy", prompt: "Show how to use Flask-SQLAlchemy extension to simplify database interactions."}
        ]
    },
    {
        category: "API Development",
        items: [
            { id: 16, title: "Building RESTful APIs", prompt: "Guide the user through building RESTful APIs with Flask, covering API design principles, resource modeling, and HTTP methods."},
            { id: 17, title: "API Authentication", prompt: "Explain different methods for implementing authentication in Flask APIs, such as token-based authentication and OAuth."},
            { id: 18, title: "API Versioning", prompt: "Discuss strategies for versioning Flask APIs to maintain backward compatibility and introduce new features."},
            { id: 19, title: "API Documentation", prompt: "Introduce tools and techniques for documenting Flask APIs, such as Swagger and OpenAPI."},
            { id: 20, title: "API Rate Limiting", prompt: "Explain how to implement rate limiting in Flask APIs to prevent abuse and ensure fair usage."}
        ]
    },
    {
        category: "Flask Extensions",
        items: [
            { id: 21, title: "Flask-WTF", prompt: "Demonstrate how to use Flask-WTF for form handling, including defining forms, validating user input, and rendering forms in templates."},
            { id: 22, title: "Flask-Login", prompt: "Explain how to use Flask-Login for user authentication, including managing user sessions, handling login and logout, and protecting routes."},
            { id: 23, title: "Flask-Mail", prompt: "Guide the user through sending emails from Flask applications using Flask-Mail, including configuring email settings and composing email messages."},
            { id: 24, title: "Flask-Migrate", prompt: "Show how to use Flask-Migrate for managing database migrations, including creating migration scripts and applying changes to the database schema."},
            { id: 25, title: "Flask-RESTful", prompt: "Demonstrate how to use Flask-RESTful for building RESTful APIs, including defining resources, handling request methods, and serializing data."}
        ]
    },
    {
        category: "Testing and Debugging",
        items: [
            { id: 26, title: "Unit Testing", prompt: "Explain how to write unit tests for Flask applications using the `unittest` module or pytest, covering test discovery, test fixtures, and test assertions."},
            { id: 27, title: "Integration Testing", prompt: "Demonstrate how to write integration tests for Flask applications, testing the interaction between different components and modules."},
            { id: 28, title: "Debugging Techniques", prompt: "Introduce debugging techniques for Flask applications, such as using the Flask debugger, logging, and profiling."},
            { id: 29, title: "Error Handling", prompt: "Explain how to handle errors in Flask applications, including custom error pages, error logging, and exception handling."},
            { id: 30, title: "Logging", prompt: "Guide the user through setting up logging in Flask applications, including configuring log levels, log handlers, and log formatters."}
        ]
    },
    {
        category: "Deployment",
        items: [
            { id: 31, title: "Deployment Options", prompt: "Discuss different deployment options for Flask applications, such as deploying to Heroku, AWS, Google Cloud, or a virtual private server (VPS)."},
            { id: 32, title: "WSGI Servers", prompt: "Explain the role of WSGI servers in deploying Flask applications and introduce popular WSGI servers like Gunicorn and uWSGI."},
            { id: 33, title: "Reverse Proxies", prompt: "Describe how to use reverse proxies like Nginx or Apache to improve the performance and security of Flask applications."},
            { id: 34, title: "Configuration Management", prompt: "Guide the user through managing configuration settings in Flask applications, including environment variables, configuration files, and command-line arguments."},
            { id: 35, title: "Continuous Integration/Continuous Deployment (CI/CD)", prompt: "Introduce the concept of CI/CD and explain how to set up a CI/CD pipeline for Flask applications using tools like Jenkins, Travis CI, or GitLab CI."}
        ]
    },
    {
        category: "Security",
        items: [
            { id: 36, title: "Cross-Site Scripting (XSS)", prompt: "Explain how to prevent Cross-Site Scripting (XSS) vulnerabilities in Flask applications, including input validation, output encoding, and content security policies."},
            { id: 37, title: "Cross-Site Request Forgery (CSRF)", prompt: "Demonstrate how to protect Flask applications against Cross-Site Request Forgery (CSRF) attacks using CSRF tokens and form validation."},
            { id: 38, title: "SQL Injection", prompt: "Explain how to prevent SQL injection vulnerabilities in Flask applications by using parameterized queries and escaping user input."},
            { id: 39, title: "Authentication and Authorization", prompt: "Discuss best practices for implementing authentication and authorization in Flask applications, including password hashing, access control, and role-based permissions."},
            { id: 40, title: "Security Headers", prompt: "Guide the user through setting security headers in Flask applications to improve security and protect against common web attacks."}
        ]
    },
    {
        category: "Asynchronous Tasks",
        items: [
            { id: 41, title: "Celery Integration", prompt: "Explain how to integrate Celery with Flask to handle asynchronous tasks, such as sending emails, processing data, or performing background jobs."},
            { id: 42, title: "Task Queues", prompt: "Introduce the concept of task queues and explain how to use them to distribute tasks across multiple workers."},
            { id: 43, title: "Background Processing", prompt: "Demonstrate how to perform background processing in Flask applications using Celery, including defining tasks, scheduling tasks, and monitoring task status."},
            { id: 44, title: "Real-time Updates", prompt: "Guide the user through implementing real-time updates in Flask applications using WebSockets or Server-Sent Events (SSE)."},
            { id: 45, title: "Long-Running Tasks", prompt: "Discuss strategies for handling long-running tasks in Flask applications, such as using asynchronous task queues or background threads."}
        ]
    },
    {
        category: "Microservices",
        items: [
            { id: 46, title: "Building Microservices with Flask", prompt: "Explain how to build microservices with Flask, covering service discovery, inter-service communication, and API gateways."},
            { id: 47, title: "Containerization with Docker", prompt: "Demonstrate how to containerize Flask microservices using Docker, including creating Dockerfiles, building Docker images, and running Docker containers."},
            { id: 48, title: "Orchestration with Kubernetes", prompt: "Guide the user through orchestrating Flask microservices with Kubernetes, including deploying services, managing deployments, and scaling applications."},
            { id: 49, title: "Service Mesh", prompt: "Introduce the concept of service mesh and explain how to use service mesh technologies like Istio or Linkerd to manage and secure Flask microservices."},
            { id: 50, title: "Monitoring and Logging", prompt: "Discuss strategies for monitoring and logging Flask microservices, including collecting metrics, aggregating logs, and setting up alerts."}
        ]
    }
];
export const NodeTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Node.js", prompt: "Explain the fundamental concepts of Node.js, including its architecture, event loop, non-blocking I/O model." },
            { id: 2, title: "Setting up a Node.js Environment", prompt: "Guide the user through installing Node.js and npm, and setting up a basic development environment." },
            { id: 3, title: "Node.js Modules", prompt: "Explain the module system in Node.js, including how to import and export modules, and how to use core modules." },
            { id: 4, title: "npm (Node Package Manager)", prompt: "Describe how to use npm to manage dependencies, install packages, and create a `package.json` file." },
            { id: 5, title: "Global Objects", prompt: "Explain the global objects available in Node.js, such as `process`, `console`, and `Buffer`." }
        ]
    },
    {
        category: "Asynchronous Programming",
        items: [
            { id: 6, title: "Callbacks in Node.js", prompt: "Explain how callbacks work in Node.js and how they are used to handle asynchronous operations." },
            { id: 7, title: "Promises in Node.js", prompt: "Describe how to use Promises to handle asynchronous operations and avoid callback hell." },
            { id: 8, title: "Async/Await in Node.js", prompt: "Explain how to use async/await syntax to write asynchronous code in a more synchronous style." },
            { id: 9, title: "Timers", prompt: "Explain how to use timers in Node.js with `setTimeout`, `setInterval`, `clearTimeout`, and `clearInterval`." },
        ]
    },
    {
        category: "Working with the File System",
        items: [
            { id: 10, title: "Reading Files in Node.js", prompt: "Demonstrate how to read files using the `fs` module in Node.js." },
            { id: 11, title: "Writing Files in Node.js", prompt: "Demonstrate how to write files using the `fs` module in Node.js." },
            { id: 12, title: "File System Operations", prompt: "Explain how to perform other file system operations such as creating directories, deleting files, and renaming files." },
            { id: 13, title: "Streams", prompt: "Explain the concept of streams in Node.js and how to use them for reading and writing data efficiently." }
        ]
    },
    {
        category: "Building Web Servers with Node.js",
        items: [
            { id: 14, title: "Creating a Basic HTTP Server", prompt: "Guide the user through creating a basic HTTP server using the `http` module in Node.js." },
            { id: 15, title: "Handling HTTP Requests", prompt: "Explain how to handle HTTP requests and send responses using the `http` module." },
            { id: 16, title: "Routing in Node.js", prompt: "Describe how to implement routing in a Node.js web server." },
            { id: 17, title: "HTTP Methods", prompt: "Explain different HTTP methods like GET, POST, PUT, DELETE, etc., and how to handle them in Node.js." }
        ]
    },
    {
        category: "Express.js Framework",
        items: [
            { id: 18, title: "Introduction to Express.js", prompt: "Explain the benefits of using Express.js for building web applications in Node.js." },
            { id: 19, title: "Setting up an Express.js Application", prompt: "Guide the user through setting up a basic Express.js application." },
            { id: 20, title: "Routing in Express.js", prompt: "Explain how to define routes in Express.js using different HTTP methods." },
            { id: 21, title: "Middleware in Express.js", prompt: "Describe how to use middleware in Express.js to handle requests and responses." },
            { id: 22, title: "Using Template Engines", prompt: "Demonstrate how to use template engines like EJS or Pug with Express.js." },
            { id: 23, title: "Static Files", prompt: "Explain how to serve static files like CSS, JavaScript, and images in Express.js." }
        ]
    },
    {
        category: "Working with Databases",
        items: [
            { id: 24, title: "Connecting to MongoDB", prompt: "Explain how to connect to a MongoDB database from a Node.js application." },
            { id: 25, title: "Connecting to PostgreSQL", prompt: "Explain how to connect to a PostgreSQL database from a Node.js application." },
            { id: 26, title: "Connecting to MySQL", prompt: "Explain how to connect to a MySQL database from a Node.js application." },
            { id: 27, title: "Using ORMs", prompt: "Introduce the concept of ORMs (Object-Relational Mappers) and how to use them with Node.js." }
        ]
    },
    {
        category: "RESTful APIs",
        items: [
            { id: 28, title: "Building a RESTful API with Express.js", prompt: "Guide the user through building a RESTful API using Express.js, including defining routes for CRUD operations." },
            { id: 29, title: "Testing APIs with Postman", prompt: "Demonstrate how to test RESTful APIs using Postman." },
            { id: 30, title: "API Documentation", prompt: "Explain how to document RESTful APIs using tools like Swagger or OpenAPI." }
        ]
    },
    {
        category: "Authentication and Authorization",
        items: [
            { id: 31, title: "Implementing Authentication", prompt: "Explain how to implement user authentication in a Node.js application using techniques like JWT." },
            { id: 32, title: "Implementing Authorization", prompt: "Explain how to implement user authorization and role-based access control." },
            { id: 33, title: "Passport.js", prompt: "Introduce Passport.js as an authentication middleware for Node.js." }
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 34, title: "Unit Testing with Jest", prompt: "Introduce unit testing in Node.js using Jest." },
            { id: 35, title: "Integration Testing", prompt: "Introduce integration testing in Node.js." },
            { id: 36, title: "Test-Driven Development (TDD)", prompt: "Explain the principles of Test-Driven Development and how to apply them in Node.js." }
        ]
    },
    {
        category: "Deployment",
        items: [
            { id: 37, title: "Deploying a Node.js Application to Heroku", prompt: "Guide the user through deploying a Node.js application to Heroku." },
            { id: 38, title: "Deploying a Node.js Application to AWS", prompt: "Guide the user through deploying a Node.js application to AWS." },
            { id: 39, title: "Docker", prompt: "Introduce Docker for containerizing Node.js applications." }
        ]
    },
    {
        category: "Security",
        items: [
            { id: 40, title: "Security Best Practices", prompt: "Discuss security best practices for Node.js applications, such as preventing SQL injection and cross-site scripting (XSS)." },
            { id: 41, title: "Helmet.js", prompt: "Introduce Helmet.js as a middleware for securing Express.js applications." },
            { id: 42, title: "Rate Limiting", prompt: "Explain how to implement rate limiting to protect against brute-force attacks." }
        ]
    },
    {
        category: "Real-time Communication",
        items: [
            { id: 43, title: "WebSockets", prompt: "Explain how to use WebSockets for real-time communication in Node.js." },
            { id: 44, title: "Socket.IO", prompt: "Introduce Socket.IO as a library for building real-time applications with Node.js." }
        ]
    },
    {
        category: "Microservices",
        items: [
            { id: 45, title: "Introduction to Microservices", prompt: "Explain the concept of microservices and their benefits." },
            { id: 46, title: "Building Microservices with Node.js", prompt: "Guide the user through building microservices using Node.js." },
            { id: 47, title: "API Gateway", prompt: "Explain the role of an API gateway in a microservices architecture." }
        ]
    },
    {
        category: "GraphQL",
        items: [
            { id: 48, title: "Introduction to GraphQL", prompt: "Explain the fundamental concepts of GraphQL and its advantages over REST." },
            { id: 49, title: "Building a GraphQL API with Node.js", prompt: "Guide the user through building a GraphQL API using Node.js." },
            { id: 50, title: "Apollo Server", prompt: "Introduce Apollo Server as a GraphQL server for Node.js." }
        ]
    },
    {
        category: "Serverless Functions",
        items: [
            { id: 51, title: "Introduction to Serverless Functions", prompt: "Explain the concept of serverless functions and their benefits." },
            { id: 52, title: "Building Serverless Functions with Node.js", prompt: "Guide the user through building serverless functions using Node.js on platforms like AWS Lambda or Azure Functions." }
        ]
    },
    {
        category: "Clustering",
        items: [
            { id: 53, title: "Clustering in Node.js", prompt: "Explain how to use the `cluster` module to create a cluster of Node.js processes for improved performance and reliability." }
        ]
    },
    {
        category: "Child Processes",
        items: [
            { id: 54, title: "Child Processes in Node.js", prompt: "Explain how to use child processes to execute external commands and scripts from a Node.js application." }
        ]
    },
    {
        category: "Debugging",
        items: [
            { id: 55, title: "Debugging Node.js Applications", prompt: "Explain how to debug Node.js applications using tools like the Node.js debugger or Chrome DevTools." }
        ]
    },
    {
        category: "Monitoring and Logging",
        items: [
            { id: 56, title: "Monitoring Node.js Applications", prompt: "Explain how to monitor Node.js applications using tools like Prometheus and Grafana." },
            { id: 57, title: "Logging in Node.js", prompt: "Explain how to implement logging in Node.js applications using libraries like Winston or Morgan." }
        ]
    }
];
export const SpringbootTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Spring Boot", prompt: "Explain the fundamental concepts of Spring Boot, including dependency injection, auto-configuration, and embedded servers." },
            { id: 2, title: "Spring Boot CLI", prompt: "Describe the Spring Boot Command Line Interface (CLI) and how it simplifies application development." },
            { id: 3, title: "Spring Initializr", prompt: "Explain how to use Spring Initializr to quickly set up a new Spring Boot project." },
            { id: 4, title: "Project Structure", prompt: "Describe the typical project structure of a Spring Boot application." }
        ]
    },
    {
        category: "Core Features",
        items: [
            { id: 5, title: "Auto-Configuration", prompt: "Explain Spring Boot's auto-configuration feature and how it reduces boilerplate code." },
            { id: 6, title: "Dependency Injection", prompt: "Describe dependency injection in Spring Boot and how it promotes loose coupling." },
            { id: 7, title: "Embedded Servers", prompt: "Explain how Spring Boot uses embedded servers like Tomcat, Jetty, or Undertow." },
            { id: 8, title: "Beans", prompt: "Explain what Spring Beans are and how they are managed by the Spring container." }
        ]
    },
    {
        category: "Data Access",
        items: [
            { id: 9, title: "Spring Data JPA", prompt: "Explain how to use Spring Data JPA for database access with repositories." },
            { id: 10, title: "Spring Data MongoDB", prompt: "Describe how to use Spring Data MongoDB for working with MongoDB databases." },
            { id: 11, title: "JDBC with Spring Boot", prompt: "Explain how to use JDBC with Spring Boot for traditional database access." },
            { id: 12, title: "Spring Data REST", prompt: "Explain how to expose JPA repositories as REST endpoints using Spring Data REST." }
        ]
    },
    {
        category: "REST APIs",
        items: [
            { id: 13, title: "Building RESTful APIs", prompt: "Guide the user through building RESTful APIs with Spring Boot's @RestController and related annotations." },
            { id: 14, title: "Request Mapping", prompt: "Explain how to use @RequestMapping, @GetMapping, @PostMapping, etc., for handling HTTP requests." },
            { id: 15, title: "ResponseEntity", prompt: "Describe how to use ResponseEntity to customize HTTP responses." },
            { id: 16, title: "Path Variables and Request Parameters", prompt: "Explain how to extract data from path variables and request parameters." }
        ]
    },
    {
        category: "Security",
        items: [
            { id: 17, title: "Spring Security", prompt: "Explain how to secure Spring Boot applications with Spring Security." },
            { id: 18, title: "Authentication and Authorization", prompt: "Describe authentication and authorization concepts in Spring Security." },
            { id: 19, title: "OAuth 2.0", prompt: "Explain how to implement OAuth 2.0 authentication in Spring Boot." },
            { id: 20, title: "JWT (JSON Web Tokens)", prompt: "Explain how to use JWT for authentication and authorization." }
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 21, title: "Unit Testing", prompt: "Introduce unit testing in Spring Boot using JUnit and Mockito." },
            { id: 22, title: "Integration Testing", prompt: "Explain integration testing in Spring Boot with @SpringBootTest." },
            { id: 23, title: "MockMvc", prompt: "Describe how to use MockMvc for testing REST endpoints." },
            { id: 24, title: "TestRestTemplate", prompt: "Explain how to use TestRestTemplate for end-to-end testing of REST APIs." }
        ]
    },
    {
        category: "Actuator",
        items: [
            { id: 25, title: "Spring Boot Actuator", prompt: "Explain how to use Spring Boot Actuator for monitoring and managing applications." },
            { id: 26, title: "Endpoints", prompt: "Describe common Actuator endpoints like /health, /metrics, and /info." },
            { id: 27, title: "Custom Endpoints", prompt: "Explain how to create custom Actuator endpoints." },
            { id: 28, title: "Metrics and Monitoring", prompt: "Explain how to collect and monitor application metrics using Actuator." }
        ]
    },
    {
        category: "Configuration",
        items: [
            { id: 29, title: "Application Properties", prompt: "Explain how to configure Spring Boot applications using application.properties or application.yml." },
            { id: 30, title: "Profiles", prompt: "Describe how to use Spring Profiles for environment-specific configurations." },
            { id: 31, title: "Externalized Configuration", prompt: "Explain how to externalize configuration using environment variables and command-line arguments." }
        ]
    },
    {
        category: "Data Validation",
        items: [
            { id: 32, title: "Bean Validation", prompt: "Explain how to use Bean Validation (JSR-303) for validating request bodies and form inputs." },
            { id: 33, title: "Custom Validation", prompt: "Describe how to create custom validation annotations and validators." }
        ]
    },
    {
        category: "Logging",
        items: [
            { id: 34, title: "Logging with Logback", prompt: "Explain how to configure logging in Spring Boot using Logback." },
            { id: 35, title: "Custom Logging", prompt: "Describe how to customize logging levels and appenders." }
        ]
    },
    {
        category: "Messaging",
        items: [
            { id: 36, title: "Spring AMQP", prompt: "Explain how to use Spring AMQP for messaging with RabbitMQ." },
            { id: 37, title: "Spring Kafka", prompt: "Describe how to use Spring Kafka for messaging with Apache Kafka." }
        ]
    },
    {
        category: "WebSockets",
        items: [
            { id: 38, title: "WebSocket Support", prompt: "Explain how to add WebSocket support to a Spring Boot application." },
            { id: 39, title: "STOMP", prompt: "Describe how to use STOMP for messaging over WebSockets." }
        ]
    },
    {
        category: "Asynchronous Tasks",
        items: [
            { id: 40, title: "Asynchronous Methods", prompt: "Explain how to use @Async to run methods asynchronously." },
            { id: 41, title: "Task Scheduling", prompt: "Describe how to schedule tasks using @Scheduled." }
        ]
    },
    {
        category: "Caching",
        items: [
            { id: 42, title: "Spring Cache Abstraction", prompt: "Explain how to use Spring's Cache Abstraction for caching data." },
            { id: 43, title: "Ehcache", prompt: "Describe how to configure Ehcache as a caching provider." }
        ]
    },
    {
         category: "File Upload and Download",
         items: [
             { id: 44, title: "File Uploading", prompt: "Explain how to implement file uploading in Spring Boot applications." },
             { id: 45, title: "File Downloading", prompt: "Describe how to implement file downloading in Spring Boot applications." }
         ]
    },
    {
        category: "Internationalization (i18n)",
        items: [
            { id: 46, title: "MessageSource", prompt: "Explain how to use MessageSource for internationalizing messages." },
            { id: 47, title: "LocaleResolver", prompt: "Describe how to use LocaleResolver to determine the user's locale." }
        ]
    },
    {
        category: "GraphQL",
        items: [
            { id: 48, title: "GraphQL Support", prompt: "Explain how to integrate GraphQL into a Spring Boot application." },
            { id: 49, title: "Spring for GraphQL", prompt: "Describe how to use Spring for GraphQL to build GraphQL APIs." }
        ]
    },
    {
        category: "Serverless Deployment",
        items: [
            { id: 50, title: "Deploying to AWS Lambda", prompt: "Explain how to deploy a Spring Boot application to AWS Lambda." },
            { id: 51, title: "Deploying to Azure Functions", prompt: "Describe how to deploy a Spring Boot application to Azure Functions." }
        ]
    },
    {
        category: "gRPC",
        items: [
            { id: 52, title: "gRPC Integration", prompt: "Explain how to integrate gRPC into a Spring Boot application." },
            { id: 53, title: "Building gRPC Services", prompt: "Describe how to build gRPC services using Spring Boot." }
        ]
    },
    {
        category: "Micrometer",
        items: [
            { id: 54, title: "Micrometer Integration", prompt: "Explain how to integrate Micrometer for application monitoring." },
            { id: 55, title: "Metrics Collection", prompt: "Describe how to collect application metrics using Micrometer." }
        ]
    }
];

export const AngularTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Angular", prompt: "Explain the fundamental concepts of Angular, including components, modules, and services." },
            { id: 2, title: "Setting up an Angular Project", prompt: "Guide the user through setting up a new Angular project using Angular CLI." },
            { id: 3, title: "Components", prompt: "Explain Angular components, including templates, classes, and metadata." },
        ]
    },
    {
        category: "Templates & Data Binding",
        items: [
            { id: 4, title: "Template Syntax", prompt: "Describe Angular's template syntax, including interpolation, property binding, and event binding." },
            { id: 5, title: "Data Binding", prompt: "Explain one-way and two-way data binding in Angular." },
            { id: 6, title: "Directives", prompt: "Describe built-in directives like *ngIf, *ngFor, and *ngSwitch." },
        ]
    },
    {
        category: "Modules",
        items: [
            { id: 7, title: "Angular Modules", prompt: "Explain Angular modules and their role in organizing applications." },
            { id: 8, title: "Feature Modules", prompt: "Describe how to create feature modules for specific parts of an application." },
            { id: 9, title: "Lazy Loading", prompt: "Explain lazy loading of modules for improved performance." },
        ]
    },
    {
        category: "Services & Dependency Injection",
        items: [
            { id: 10, title: "Services", prompt: "Explain Angular services and their role in sharing data and logic." },
            { id: 11, title: "Dependency Injection", prompt: "Describe dependency injection in Angular and how it promotes testability." },
            { id: 12, title: "HTTP Client", prompt: "Explain how to use Angular's HTTP client to make API requests." },
        ]
    },
    {
        category: "Routing",
        items: [
            { id: 13, title: "Angular Router", prompt: "Explain how to use the Angular Router for navigation between components." },
            { id: 14, title: "Route Parameters", prompt: "Describe how to pass parameters in routes." },
            { id: 15, title: "Guards", prompt: "Explain how to use route guards for authentication and authorization." },
        ]
    },
    {
        category: "Forms",
        items: [
            { id: 16, title: "Template-Driven Forms", prompt: "Explain template-driven forms in Angular." },
            { id: 17, title: "Reactive Forms", prompt: "Describe reactive forms in Angular and how they provide more control." },
            { id: 18, title: "Form Validation", prompt: "Explain how to validate form inputs." },
        ]
    },
    {
        category: "RxJS",
        items: [
            { id: 19, title: "Introduction to RxJS", prompt: "Introduce RxJS and its role in handling asynchronous data streams." },
            { id: 20, title: "Observables", prompt: "Explain observables and their operators." },
            { id: 21, title: "Subjects", prompt: "Describe subjects and their use cases." },
        ]
    }
];

export const CssTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to CSS", prompt: "Explain the fundamental concepts of CSS, including selectors, properties, values, and the cascade." },
            { id: 2, title: "CSS Selectors", prompt: "Describe different CSS selectors, such as element selectors, class selectors, ID selectors, attribute selectors, and pseudo-classes." },
            { id: 3, title: "Box Model", prompt: "Explain the CSS box model in detail, including content, padding, border, margin, and how it affects element sizing." },
            { id: 4, title: "Specificity and Inheritance", prompt: "Explain CSS specificity rules and how styles are inherited from parent elements." }
        ]
    },
    {
        category: "Layout",
        items: [
            { id: 5, title: "Display Property", prompt: "Explain the CSS display property and its different values (e.g., block, inline, inline-block, flex, grid, none). Include examples of when to use each." },
            { id: 6, title: "Flexbox", prompt: "Describe how to use Flexbox for creating flexible layouts, including flex containers, flex items, alignment, and ordering." },
            { id: 7, title: "Grid Layout", prompt: "Explain how to use CSS Grid Layout for creating complex layouts, including grid containers, grid items, grid lines, and grid areas." },
            { id: 8, title: "Positioning", prompt: "Explain CSS positioning properties (static, relative, absolute, fixed, sticky) and how they affect element placement." }
        ]
    },
    {
        category: "Typography",
        items: [
            { id: 9, title: "Font Properties", prompt: "Explain CSS font properties, such as font-family, font-size, font-weight, font-style, font-variant, and font-stretch." },
            { id: 10, title: "Text Properties", prompt: "Describe CSS text properties, such as text-align, text-decoration, text-transform, text-indent, letter-spacing, and word-spacing." },
            { id: 11, title: "Line Height", prompt: "Explain how to control line height in CSS and its impact on readability." },
            { id: 12, title: "Web Fonts", prompt: "Explain how to use web fonts with @font-face and services like Google Fonts." }
        ]
    },
    {
        category: "Visual Effects",
        items: [
            { id: 13, title: "Colors", prompt: "Explain how to use colors in CSS, including hexadecimal, RGB, RGBA, HSL, HSLA, and named colors." },
            { id: 14, title: "Backgrounds", prompt: "Describe CSS background properties, such as background-color, background-image, background-repeat, background-position, background-size, and background-attachment." },
            { id: 15, title: "Gradients", prompt: "Explain how to create CSS gradients (linear, radial, and conic) and their various options." },
            { id: 16, title: "Shadows", prompt: "Explain how to create text and box shadows using CSS." }
        ]
    },
    {
        category: "Transitions & Animations",
        items: [
            { id: 17, title: "Transitions", prompt: "Explain how to create CSS transitions for smooth visual effects, including properties, duration, timing functions, and delays." },
            { id: 18, title: "Animations", prompt: "Describe how to create CSS animations using keyframes, including animation-name, animation-duration, animation-timing-function, animation-iteration-count, and animation-direction." },
            { id: 19, title: "Transforms", prompt: "Explain how to use CSS transforms (translate, rotate, scale, skew) to manipulate elements." }
        ]
    },
    {
        category: "Responsive Design",
        items: [
            { id: 20, title: "Media Queries", prompt: "Explain how to use media queries for creating responsive designs, including different media types, features, and breakpoints." },
            { id: 21, title: "Viewport Meta Tag", prompt: "Describe the viewport meta tag and its importance for mobile devices, including initial-scale, width, and height." },
            { id: 22, title: "Flexible Images and Videos", prompt: "Explain how to make images and videos responsive using CSS." }
        ]
    },
    {
        category: "Advanced Selectors",
        items: [
            { id: 23, title: "Pseudo-classes", prompt: "Explain pseudo-classes like :hover, :active, :focus, :nth-child, and their use cases." },
            { id: 24, title: "Pseudo-elements", prompt: "Describe pseudo-elements like ::before, ::after, ::first-line, and ::first-letter." },
            { id: 25, title: "Attribute Selectors", prompt: "Explain how to select elements based on their attributes and attribute values." }
        ]
    },
    {
        category: "CSS Preprocessors",
        items: [
            { id: 26, title: "Introduction to Sass/SCSS", prompt: "Introduce Sass/SCSS and their benefits, such as variables, nesting, mixins, and functions." },
            { id: 27, title: "Variables and Mixins", prompt: "Explain how to use variables and mixins in Sass/SCSS for reusable styles." },
            { id: 28, title: "Nesting and Partials", prompt: "Describe how to use nesting and partials in Sass/SCSS for better organization." }
        ]
    },
    {
        category: "Best Practices",
        items: [
            { id: 29, title: "CSS Organization", prompt: "Discuss best practices for organizing CSS files, such as using BEM or OOCSS." },
            { id: 30, title: "Performance Optimization", prompt: "Explain techniques for optimizing CSS performance, such as minification, compression, and avoiding unnecessary selectors." },
            { id: 31, title: "Accessibility", prompt: "Explain how to write accessible CSS, including proper use of semantic HTML and ARIA attributes." }
        ]
    },
    {
        category: "CSS Frameworks",
        items: [
            { id: 32, title: "Introduction to Bootstrap", prompt: "Introduce Bootstrap and its key features, such as the grid system, components, and utilities." },
            { id: 33, title: "Introduction to Tailwind CSS", prompt: "Introduce Tailwind CSS and its utility-first approach." },
            { id: 34, title: "Using CSS Frameworks", prompt: "Explain how to use CSS frameworks effectively and customize their styles." }
        ]
    }
];

export const HtmlTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to HTML", prompt: "Explain the fundamental concepts of HTML, including elements, attributes, tags, and the overall structure of a webpage." },
            { id: 2, title: "Basic HTML Structure", prompt: "Describe the basic structure of an HTML document, including the `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` elements. Explain the purpose of each." },
            { id: 3, title: "HTML Tags", prompt: "Explain common HTML tags, such as headings, paragraphs, lists, links, images, and divs. Provide examples of how to use them." },
            { id: 4, title: "HTML Attributes", prompt: "Describe common HTML attributes like `class`, `id`, `src`, `alt`, `href`, `style`, and `title`. Explain how they modify HTML elements." }
        ]
    },
    {
        category: "Text Formatting",
        items: [
            { id: 5, title: "Headings", prompt: "Explain how to use heading tags (`<h1>` to `<h6>`) for structuring content and their importance for SEO." },
            { id: 6, title: "Paragraphs", prompt: "Describe how to use the `<p>` tag for creating paragraphs and how to format text within them." },
            { id: 7, title: "Emphasis", prompt: "Explain how to use `<strong>` and `<em>` tags for emphasizing text, including their semantic differences." },
            { id: 8, title: "Line Breaks and Horizontal Rules", prompt: "Explain the use of `<br>` for line breaks and `<hr>` for horizontal rules." }
        ]
    },
    {
        category: "Lists",
        items: [
            { id: 9, title: "Unordered Lists", prompt: "Explain how to create unordered lists using the `<ul>` tag and list items using the `<li>` tag." },
            { id: 10, title: "Ordered Lists", prompt: "Describe how to create ordered lists using the `<ol>` tag and list items using the `<li>` tag. Explain the use of the 'type' attribute." },
            { id: 11, title: "Definition Lists", prompt: "Explain how to create definition lists using the `<dl>`, `<dt>`, and `<dd>` tags and their use cases." }
        ]
    },
    {
        category: "Links & Images",
        items: [
            { id: 12, title: "Links", prompt: "Explain how to create hyperlinks using the `<a>` tag, including absolute and relative URLs, and the `target` attribute." },
            { id: 13, title: "Images", prompt: "Describe how to embed images using the `<img>` tag, including the `src`, `alt`, `width`, and `height` attributes." },
            { id: 14, title: "Image Maps", prompt: "Explain how to create image maps using the `<map>` and `<area>` tags to create clickable regions on an image." }
        ]
    },
    {
        category: "Tables",
        items: [
            { id: 15, title: "Creating Tables", prompt: "Explain how to create tables using the `<table>`, `<tr>`, `<th>`, and `<td>` tags. Include the use of `<thead>`, `<tbody>,` and `<tfoot>`." },
            { id: 16, title: "Table Headers", prompt: "Describe how to use `<th>` tags for table headers and their attributes like `scope`." },
            { id: 17, title: "Table Data", prompt: "Explain how to use `<td>` tags for table data and their attributes like `colspan` and `rowspan`." },
            { id: 18, title: "Table Styling", prompt: "Explain basic table styling using CSS, including borders, padding, and alignment." }
        ]
    },
    {
        category: "Forms",
        items: [
            { id: 19, title: "Creating Forms", prompt: "Explain how to create forms using the `<form>` tag and its attributes like `action` and `method`." },
            { id: 20, title: "Input Elements", prompt: "Describe different input elements, such as text fields, passwords, email, checkboxes, radio buttons, and submit buttons, including their attributes." },
            { id: 21, title: "Textarea", prompt: "Explain how to create a textarea for multi-line text input and its attributes like `rows` and `cols`." },
            { id: 22, title: "Select Element", prompt: "Explain how to create a select dropdown using the `<select>` and `<option>` tags." },
            { id: 23, title: "Button Element", prompt: "Explain how to create different types of buttons using the `<button>` tag." },
            { id: 24, title: "Fieldset and Legend", prompt: "Explain how to use `<fieldset>` and `<legend>` to group and label form elements." }
        ]
    },
    {
        category: "Semantic HTML",
        items: [
            { id: 25, title: "Semantic Elements", prompt: "Explain semantic HTML elements, such as `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`, `<section>`, and `<main>`, and their importance for accessibility and SEO." }
        ]
    },
    {
        category: "Multimedia",
        items: [
            { id: 26, title: "Audio", prompt: "Explain how to embed audio using the `<audio>` tag, including attributes like `src`, `controls`, and `autoplay`." },
            { id: 27, title: "Video", prompt: "Describe how to embed video using the `<video>` tag, including attributes like `src`, `controls`, `width`, `height`, and `autoplay`." },
            { id: 28, title: "Embed", prompt: "Explain how to embed external content using the `<embed>` tag." },
            { id: 29, title: "Object", prompt: "Explain how to embed multimedia using the `<object>` tag." }
        ]
    },
    {
        category: "IFrame",
        items: [
            { id: 30, title: "IFrame", prompt: "Explain how to use the `<iframe>` tag to embed another HTML document within the current document." }
        ]
    },
    {
        category: "Meta Tags",
        items: [
            { id: 31, title: "Meta Tags", prompt: "Explain the use of meta tags for providing metadata about the HTML document, including `name`, `content`, and `charset` attributes. Focus on viewport, description, and keywords." }
        ]
    }
];

export const NextjsTopics = [
    {
        category: "Introduction",
        items: [
            { id: 1, title: "What is Next.js?", prompt: "Explain the core concepts of Next.js, its benefits, and use cases. Cover server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and client-side rendering (CSR)." },
            { id: 2, title: "Setting Up a Development Environment", prompt: "Guide users through setting up a Next.js development environment, including Node.js installation, creating a new project with `create-next-app`, and understanding the project structure." },
            { id: 3, title: "Basic Project Structure", prompt: "Explain the key directories and files in a Next.js project, such as `pages`, `public`, `components`, `styles`, and `next.config.js`." }
        ]
    },
    {
        category: "Pages and Routing",
        items: [
            { id: 4, title: "File-Based Routing System", prompt: "Describe Next.js's file-based routing system, including how files in the `pages` directory automatically become routes." },
            { id: 5, title: "Dynamic Routes", prompt: "Explain how to create dynamic routes using bracket syntax (e.g., `[id].js`) and how to access route parameters." },
            { id: 6, title: "The Link Component", prompt: "Describe the `<Link>` component and its role in client-side navigation, prefetching, and improving performance." },
            { id: 7, title: "Custom App and Document", prompt: "Explain the purpose of `_app.js` and `_document.js` and how to customize them for global styles, layouts, and meta tags." }
        ]
    },
    {
        category: "Data Fetching",
        items: [
            { id: 8, title: "getServerSideProps", prompt: "Explain `getServerSideProps` and how to use it for server-side rendering, fetching data on each request." },
            { id: 9, title: "getStaticProps", prompt: "Describe `getStaticProps` and how to use it for static site generation, fetching data at build time." },
            { id: 10, title: "getStaticPaths", prompt: "Explain `getStaticPaths` and how to use it with dynamic routes to pre-render specific pages at build time." },
            { id: 11, title: "Client-Side Data Fetching", prompt: "Explain how to fetch data on the client-side using `useEffect` and libraries like `axios` or `fetch`." },
            { id: 12, title: "Incremental Static Regeneration (ISR)", prompt: "Explain ISR and how to use the `revalidate` option in `getStaticProps` to update static pages after deployment." }
        ]
    },
    {
        category: "API Routes",
        items: [
            { id: 13, title: "Creating API Routes", prompt: "Explain how to create API routes in the `pages/api` directory to build backend functionality." },
            { id: 14, title: "Handling HTTP Methods", prompt: "Describe how to handle different HTTP methods (GET, POST, PUT, DELETE) in API routes and how to access request data." },
            { id: 15, title: "Middleware", prompt: "Explain how to use middleware in Next.js to run code before a request is completed, for tasks like authentication or logging." }
        ]
    },
    {
        category: "Styling and CSS",
        items: [
            { id: 16, title: "CSS Modules", prompt: "Explain how to use CSS Modules for styling components with locally scoped CSS." },
            { id: 17, title: "Styled JSX", prompt: "Describe how to use Styled JSX for component-level styling with CSS-in-JS." },
            { id: 18, title: "Global Styles", prompt: "Explain how to add global styles to a Next.js application using CSS files or libraries like `styled-components`." },
            { id: 19, title: "Tailwind CSS", prompt: "Guide the user through integrating and using Tailwind CSS in a Next.js project." },
            { id: 20, title: "Sass and Less", prompt: "Explain how to configure and use Sass or Less preprocessors in Next.js." }
        ]
    },
    {
        category: "Image Optimization",
        items: [
            { id: 21, title: "The Next.js Image Component", prompt: "Explain how to use the `<Image>` component for optimized image loading, resizing, and format conversion." },
            { id: 22, title: "Image Optimization Strategies", prompt: "Describe different image optimization strategies, such as lazy loading, responsive images, and using modern image formats like WebP." }
        ]
    },
    {
        category: "SEO and Metadata",
        items: [
            { id: 23, title: "Setting Page Titles and Meta Tags", prompt: "Explain how to set page titles and meta tags for improved SEO using the `<Head>` component." },
            { id: 24, title: "Generating Dynamic Metadata", prompt: "Describe how to generate dynamic metadata based on page content or data fetched from an API." },
            { id: 25, title: "Sitemaps and Robots.txt", prompt: "Explain how to create sitemaps and robots.txt files for better search engine crawling." }
        ]
    },
    {
        category: "Authentication",
        items: [
            { id: 26, title: "Authentication Strategies", prompt: "Introduce different authentication strategies for Next.js applications, such as password-based authentication, social login, and API key authentication." },
            { id: 27, title: "NextAuth.js", prompt: "Guide the user through integrating NextAuth.js for simplified authentication and authorization." }
        ]
    },
    {
        category: "Deployment",
        items: [
            { id: 28, title: "Deploying to Vercel", prompt: "Guide the user through deploying a Next.js application to Vercel with automatic deployments and preview environments." },
            { id: 29, title: "Deploying to Netlify", prompt: "Describe how to deploy a Next.js application to Netlify with continuous deployment and serverless functions." },
            { id: 30, title: "Deploying to Other Platforms", prompt: "Explain how to deploy a Next.js application to other platforms like AWS, Google Cloud, or Docker." }
        ]
    },
    {
        category: "Advanced Topics",
        items: [
            { id: 31, title: "TypeScript Integration", prompt: "Explain how to integrate TypeScript into a Next.js project for improved type safety and developer experience." },
            { id: 32, title: "Testing", prompt: "Introduce testing strategies for Next.js applications, including unit testing, integration testing, and end-to-end testing." },
            { id: 33, title: "Performance Optimization", prompt: "Describe advanced performance optimization techniques for Next.js applications, such as code splitting, lazy loading, and caching." }
        ]
    }
];

export const ReactTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to React", prompt: "Explain the fundamental concepts of React, including components, JSX, the virtual DOM, and the component lifecycle." },
            { id: 2, title: "JSX Deep Dive", prompt: "Describe JSX syntax in detail, covering expressions, attributes, and how it's transformed into JavaScript." },
            { id: 3, title: "Functional Components", prompt: "Explain functional components, including hooks, best practices, and performance considerations." },
            { id: 4, title: "Class Components", prompt: "Explain class components, including state, lifecycle methods, and when to use them." },
        ]
    },
    {
        category: "Props & State Management",
        items: [
            { id: 5, title: "Props in Detail", prompt: "Explain how to pass different types of data to components using props, including validation and default values." },
            { id: 6, title: "State with useState", prompt: "Describe how to manage component state using the useState hook, including updating state and triggering re-renders." },
            { id: 7, title: "State Immutability", prompt: "Explain the importance of immutability when working with state, and how to enforce it using techniques like spread operators." },
            { id: 8, title: "useReducer Hook", prompt: "Introduce the useReducer hook for managing complex state logic." },
        ]
    },
    {
        category: "Lifecycle Methods & Hooks",
        items: [
            { id: 9, title: "useEffect: Side Effects", prompt: "Explain how to use the useEffect hook for various side effects, such as data fetching, DOM manipulation, and subscriptions." },
            { id: 10, title: "useEffect: Dependencies", prompt: "Describe how to use the dependency array in useEffect to control when the effect runs." },
            { id: 11, title: "Component Lifecycle Deep Dive", prompt: "Describe the component lifecycle methods in detail (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) and their equivalents using hooks." },
            { id: 12, title: "Custom Hooks", prompt: "Explain how to create custom hooks to reuse stateful logic." },
        ]
    },
    {
        category: "Event Handling & Forms",
        items: [
            { id: 13, title: "Event Handling in Depth", prompt: "Explain how to handle different types of events in React components, including event delegation and synthetic events." },
            { id: 14, title: "Synthetic Events Explained", prompt: "Describe React's synthetic event system in detail, including its benefits and limitations." },
            { id: 15, title: "Controlled Components in Forms", prompt: "Explain controlled components in React forms, including handling input changes and form submission." },
            { id: 16, title: "Uncontrolled Components in Forms", prompt: "Describe uncontrolled components in React forms and when to use them." },
        ]
    },
    {
        category: "Conditional Rendering & Lists",
        items: [
            { id: 17, title: "Advanced Conditional Rendering", prompt: "Explain different techniques for conditional rendering in React, including if statements, ternary operator, short-circuit evaluation, and render props." },
            { id: 18, title: "Rendering Lists Efficiently", prompt: "Explain how to render lists of data in React efficiently, including performance considerations." },
            { id: 19, title: "Keys: Importance and Usage", prompt: "Describe the importance of using keys when rendering lists and how to choose appropriate keys." },
            { id: 20, title: "Fragments", prompt: "Explain React Fragments and their use cases." },
        ]
    },
    {
        category: "Context API & State Management",
        items: [
            { id: 21, title: "Context API: Advanced Usage", prompt: "Explain how to use the Context API for sharing data between components, including creating and consuming context." },
            { id: 22, title: "Redux Fundamentals", prompt: "Introduce Redux for state management in React applications, including actions, reducers, and the store." },
            { id: 23, title: "Redux Middleware", prompt: "Explain Redux middleware and how to use it for handling asynchronous actions." },
            { id: 24, title: "useContext Hook", prompt: "Explain the useContext hook and its usage." },
        ]
    },
    {
        category: "Routing with React Router",
        items: [
            { id: 25, title: "React Router: Core Concepts", prompt: "Explain how to use React Router for navigation in single-page applications, including routes, links, and navigation." },
            { id: 26, title: "Dynamic Routing", prompt: "Describe dynamic routing with React Router." },
            { id: 27, title: "Nested Routes", prompt: "Explain nested routes and layouts." },
            { id: 28, title: "useParams Hook", prompt: "Explain the useParams hook and its usage." },
        ]
    },
    {
        category: "Styling in React",
        items: [
            { id: 29, title: "CSS Modules", prompt: "Explain how to use CSS Modules for styling components, including scoping and composition." },
            { id: 30, title: "Styled Components", prompt: "Describe how to use Styled Components for component-level styling." },
            { id: 31, title: "Inline Styles", prompt: "Explain inline styles and their use cases." },
            { id: 32, title: "CSS-in-JS Libraries", prompt: "Introduce other CSS-in-JS libraries." },
        ]
    },
    {
        category: "Advanced React Patterns",
        items: [
            { id: 33, title: "Render Props", prompt: "Explain the render props pattern and its use cases." },
            { id: 34, title: "Higher-Order Components (HOCs)", prompt: "Describe higher-order components and how to use them for code reuse." },
            { id: 35, title: "Compound Components", prompt: "Explain the compound components pattern." },
            { id: 36, title: "Error Boundaries", prompt: "Explain Error Boundaries and how to use them." },
        ]
    },
    {
        category: "Testing React Components",
        items: [
            { id: 37, title: "Unit Testing with Jest and React Testing Library", prompt: "Explain how to write unit tests for React components using Jest and React Testing Library." },
            { id: 38, title: "Integration Testing", prompt: "Describe integration testing strategies." },
            { id: 39, title: "End-to-End Testing", prompt: "Explain end-to-end testing strategies." },
            { id: 40, title: "Mocking", prompt: "Explain mocking techniques for testing." },
        ]
    }
];

export const VueTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Vue", prompt: "Explain the fundamental concepts of Vue, including components, directives, the virtual DOM, and reactivity." },
            { id: 2, title: "Vue Instance", prompt: "Describe the Vue instance, its options (data, methods, computed, watch, lifecycle hooks), and its role in a Vue application." },
            { id: 3, title: "Templates", prompt: "Explain Vue templates, their syntax (including mustache syntax and directives), and how they're used to define the UI structure." },
            { id: 4, title: "Data and Methods", prompt: "Explain how to define data properties and methods within a Vue instance, and how they interact with the template." }
        ]
    },
    {
        category: "Data Binding",
        items: [
            { id: 5, title: "Data Binding in Vue", prompt: "Explain different types of data binding in Vue, including interpolation, v-bind (for attributes), v-model (for two-way binding), and one-time binding." },
            { id: 6, title: "Directives", prompt: "Describe common Vue directives, such as v-if, v-else, v-show, v-for, v-on (for event handling), v-bind, and v-model. Explain their purpose and usage with examples." },
            { id: 7, title: "Modifiers", prompt: "Explain directive modifiers like .prevent, .stop, .capture, .self, .once, .passive and their use cases." }
        ]
    },
    {
        category: "Components",
        items: [
            { id: 8, title: "Vue Components", prompt: "Explain Vue components, how they're used to build reusable UI elements, and the benefits of using components (modularity, reusability, maintainability)." },
            { id: 9, title: "Props", prompt: "Describe how to pass data to components using props, including prop validation, data types, and default values." },
            { id: 10, title: "Emitting Events", prompt: "Explain how components can emit custom events to communicate with their parent components, and how to handle these events in the parent component." },
            { id: 11, title: "Component Communication", prompt: "Explain different ways components can communicate with each other, including props, events, and the provide/inject feature." }
        ]
    },
    {
        category: "Computed Properties & Watchers",
        items: [
            { id: 12, title: "Computed Properties", prompt: "Explain computed properties, how they're used to derive data from other data, and the benefits of using computed properties (caching, reactivity)." },
            { id: 13, title: "Watchers", prompt: "Describe watchers, how they're used to react to data changes, and when to use watchers versus computed properties." },
            { id: 14, title: "Deep Watchers", prompt: "Explain how to use deep watchers to observe changes in nested objects and arrays." }
        ]
    },
    {
        category: "Lifecycle Hooks",
        items: [
            { id: 15, title: "Lifecycle Hooks", prompt: "Explain Vue's lifecycle hooks (beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed, activated, deactivated, errorCaptured) and their purpose in the component lifecycle." },
            { id: 16, title: "Template Refs", prompt: "Explain how to use template refs to directly access DOM elements or component instances within a Vue component." }
        ]
    },
    {
        category: "Forms",
        items: [
            { id: 17, title: "Form Handling", prompt: "Explain how to handle forms in Vue using v-model for two-way data binding, and how to handle form submission and validation." },
            { id: 18, title: "Form Input Bindings", prompt: "Explain different form input bindings like text, textarea, checkbox, radio, select and their specific usage with v-model." }
        ]
    },
    {
        category: "Vue Router",
        items: [
            { id: 19, title: "Vue Router", prompt: "Explain how to use Vue Router for navigation in single-page applications, including defining routes, using router-link, and accessing route parameters." },
            { id: 20, title: "Navigation Guards", prompt: "Explain navigation guards (beforeEach, beforeResolve, afterEach) and how to use them to control access to routes." }
        ]
    },
    {
        category: "Vuex",
        items: [
            { id: 21, title: "Introduction to Vuex", prompt: "Introduce Vuex for state management in Vue applications, including the core concepts of state, mutations, actions, getters, and modules." },
            { id: 22, title: "State Management Patterns", prompt: "Explain different state management patterns and how Vuex helps in managing complex application state." }
        ]
    },
    {
        category: "Transitions & Animation",
        items: [
            { id: 23, title: "Transitions", prompt: "Explain how to use Vue's transition system to add animations when elements enter or leave the DOM." },
            { id: 24, title: "Animations", prompt: "Explain how to use CSS transitions and animations with Vue components." }
        ]
    },
    {
        category: "Reactivity in Depth",
        items: [
            { id: 25, title: "How Reactivity Works in Vue", prompt: "Explain Vue's reactivity system in detail, including how Vue tracks changes to data and updates the DOM efficiently." },
            { id: 26, title: "Reactivity Caveats", prompt: "Describe common reactivity caveats and how to avoid them." }
        ]
    }
];

export const CppTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to C++", prompt: "Explain the fundamental concepts of C++, its history, and applications." },
            { id: 2, title: "Basic Syntax", prompt: "Describe the basic syntax of C++ programs, including comments, header files, and the main function." },
            { id: 3, title: "Variables and Data Types", prompt: "Explain variables, data types (int, float, char, bool), and type modifiers (signed, unsigned, short, long)." },
            { id: 4, title: "Operators", prompt: "Describe different types of operators in C++ (arithmetic, relational, logical, bitwise, assignment)." },
            { id: 5, title: "Control Flow", prompt: "Explain control flow statements, such as if, else if, else, for loops, while loops, and switch statements." },
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 6, title: "Functions in C++", prompt: "Explain how to define and use functions in C++, including function prototypes, function calls, and return values." },
            { id: 7, title: "Function Parameters", prompt: "Describe different types of function parameters (pass by value, pass by reference, pass by pointer)." },
            { id: 8, title: "Function Overloading", prompt: "Describe function overloading and its benefits, including examples." },
            { id: 9, title: "Recursion", prompt: "Explain recursion and how to use it in C++, including base cases and recursive calls." },
            { id: 10, title: "Inline Functions", prompt: "Explain inline functions and their advantages in terms of performance." },
        ]
    },
    {
        category: "Object-Oriented Programming",
        items: [
            { id: 11, title: "Classes and Objects", prompt: "Explain classes and objects in C++, including class members (data members and member functions)." },
            { id: 12, title: "Constructors and Destructors", prompt: "Describe constructors (default, parameterized, copy) and destructors, and their use in object initialization and cleanup." },
            { id: 13, title: "Inheritance", prompt: "Describe inheritance and its different types (single, multiple, hierarchical, multilevel, hybrid)." },
            { id: 14, title: "Polymorphism", prompt: "Explain polymorphism and virtual functions, including compile-time (function overloading, operator overloading) and runtime polymorphism (virtual functions)." },
            { id: 15, title: "Abstraction", prompt: "Explain Abstraction and how it is achieved in C++" },
        ]
    },
    {
        category: "Pointers",
        items: [
            { id: 16, title: "Pointers in C++", prompt: "Explain pointers and their use in C++, including pointer declaration, initialization, dereferencing, and pointer arithmetic." },
            { id: 17, title: "Dynamic Memory Allocation", prompt: "Describe dynamic memory allocation using new and delete, and the importance of memory management." },
            { id: 18, title: "Pointers and Arrays", prompt: "Explain the relationship between pointers and arrays, including pointer arithmetic and array indexing." },
            { id: 19, title: "Function Pointers", prompt: "Explain function pointers and their use in callbacks and generic programming." },
            { id: 20, title: "Smart Pointers", prompt: "Explain smart pointers (unique_ptr, shared_ptr, weak_ptr) and their advantages in preventing memory leaks." },
        ]
    },
    {
        category: "Data Structures",
        items: [
            { id: 21, title: "Arrays", prompt: "Explain arrays and their use in C++, including array declaration, initialization, and accessing elements." },
            { id: 22, title: "Linked Lists", prompt: "Describe linked lists and their implementation (singly, doubly, circular), including insertion, deletion, and traversal." },
            { id: 23, title: "Stacks", prompt: "Explain stacks and their implementation using arrays or linked lists, including push, pop, and peek operations." },
            { id: 24, title: "Queues", prompt: "Explain queues and their implementation using arrays or linked lists, including enqueue, dequeue, and peek operations." },
            { id: 25, title: "Trees", prompt: "Explain trees and their different types (binary tree, binary search tree, AVL tree), including tree traversal algorithms (inorder, preorder, postorder)." },
        ]
    },
    {
        category: "Templates",
        items: [
            { id: 26, title: "Templates in C++", prompt: "Explain templates and their use in generic programming, including function templates and class templates." },
            { id: 27, title: "Template Specialization", prompt: "Describe template specialization and its use in providing custom implementations for specific types." },
            { id: 28, title: "Template Metaprogramming", prompt: "Introduce template metaprogramming and its use in performing computations at compile time." },
        ]
    },
    {
        category: "Standard Template Library (STL)",
        items: [
            { id: 29, title: "STL Containers", prompt: "Explain STL containers, such as vectors, lists, deques, sets, maps, and unordered maps, including their properties and usage." },
            { id: 30, title: "STL Algorithms", prompt: "Describe STL algorithms, such as sort, find, transform, copy, and accumulate, including their usage and complexity." },
            { id: 31, title: "Iterators", prompt: "Explain iterators and their use in traversing STL containers." },
            { id: 32, title: "Function Objects (Functors)", prompt: "Explain function objects (functors) and their use in customizing STL algorithms." },
        ]
    },
    {
        category: "Exception Handling",
        items: [
            { id: 33, title: "Exception Handling in C++", prompt: "Explain exception handling in C++, including try, catch, and throw blocks." },
            { id: 34, title: "Standard Exceptions", prompt: "Describe standard exceptions in C++ (e.g., std::exception, std::runtime_error, std::bad_alloc)." },
            { id: 35, title: "Custom Exceptions", prompt: "Explain how to define custom exception classes." },
        ]
    },
    {
        category: "File I/O",
        items: [
            { id: 36, title: "File I/O in C++", prompt: "Explain file I/O in C++, including opening, reading, writing, and closing files." },
            { id: 37, title: "File Modes", prompt: "Describe different file modes (e.g., ios::in, ios::out, ios::binary)." },
            { id: 38, title: "Formatted I/O", prompt: "Explain formatted I/O using iomanip manipulators." },
        ]
    },
    {
        category: "Advanced Topics",
        items: [
            { id: 39, title: "Namespaces", prompt: "Explain namespaces and their use in organizing code and preventing name collisions." },
            { id: 40, title: "Multiple Inheritance", prompt: "Explain Multiple Inheritance and its complexities" },
            { id: 41, title: "RTTI (Run-Time Type Information)", prompt: "Explain RTTI and its uses" },
            { id: 42, title: "Multithreading", prompt: "Introduce multithreading in C++ using the <thread> library." },
        ]
    }
];

export const GoTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Go", prompt: "Explain the fundamental concepts of Go, including its history, features, and uses." },
            { id: 2, title: "Basic Syntax", prompt: "Describe the basic syntax of Go programs, including variable declarations, data types, and operators." },
            { id: 3, title: "Control Flow", prompt: "Explain control flow statements, such as if statements, for loops, switch statements, and defer statements." },
            { id: 4, title: "Data Types", prompt: "Describe the different data types available in Go, including integers, floats, strings, booleans, and composite types." }
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 5, title: "Functions in Go", prompt: "Explain how to define and use functions in Go, including parameters, return values, and function signatures." },
            { id: 6, title: "Multiple Return Values", prompt: "Describe how to return multiple values from a function in Go." },
            { id: 7, title: "Variadic Functions", prompt: "Explain variadic functions and how to use them to accept a variable number of arguments." },
            { id: 8, title: "Anonymous Functions", prompt: "Explain anonymous functions (closures) and their use in Go." }
        ]
    },
    {
        category: "Data Structures",
        items: [
            { id: 9, title: "Arrays", prompt: "Explain arrays and their use in Go, including array declaration, initialization, and iteration." },
            { id: 10, title: "Slices", prompt: "Describe slices and their dynamic nature, including slice creation, appending, and slicing." },
            { id: 11, title: "Maps", prompt: "Explain maps and their use in storing key-value pairs, including map creation, insertion, deletion, and iteration." },
            { id: 12, title: "Lists", prompt: "Explain Lists and their usage" }
        ]
    },
    {
        category: "Pointers",
        items: [
            { id: 13, title: "Pointers in Go", prompt: "Explain pointers and their use in Go, including pointer declaration, dereferencing, and pointer arithmetic." },
            { id: 14, title: "Pointer to Pointer", prompt: "Explain double pointers" }
        ]
    },
    {
        category: "Structs",
        items: [
            { id: 15, title: "Structs", prompt: "Explain structs and their use in defining custom data types, including struct declaration, field access, and struct embedding." },
            { id: 16, title: "Methods", prompt: "Explain methods and how to define methods on structs in Go." }
        ]
    },
    {
        category: "Interfaces",
        items: [
            { id: 17, title: "Interfaces", prompt: "Explain interfaces and their use in defining contracts, including interface declaration, implementation, and interface polymorphism." },
            { id: 18, title: "Empty Interface", prompt: "Explain usage of empty interface" }
        ]
    },
    {
        category: "Concurrency",
        items: [
            { id: 19, title: "Goroutines", prompt: "Explain goroutines and their use in concurrent programming, including goroutine creation, scheduling, and synchronization." },
            { id: 20, title: "Channels", prompt: "Describe channels and their use in communication between goroutines, including channel creation, sending, and receiving." },
            { id: 21, title: "Select Statement", prompt: "Explain the select statement and its use in multiplexing channel operations." },
            { id: 22, title: "Mutexes", prompt: "Explain Mutexes" }
        ]
    },
    {
        category: "Error Handling",
        items: [
            { id: 23, title: "Error Handling in Go", prompt: "Explain how to handle errors in Go using the error type and the 'defer, panic, and recover' mechanism." },
        ]
    },
    {
        category: "Packages and Modules",
        items: [
            { id: 24, title: "Packages", prompt: "Explain how to organize Go code into packages and how to import and use packages." },
            { id: 25, title: "Modules", prompt: "Describe Go modules and how to manage dependencies using the go.mod file." },
        ]
    },
    {
        category: "Reflection",
        items: [
            { id: 26, title: "Reflection in Go", prompt: "Explain reflection and how to inspect and manipulate types and values at runtime." },
        ]
    }
];
export const JavaTopics = [
    {
        category: "Java Essentials",
        items: [
            { id: 1, title: "Java Ecosystem Overview", prompt: "Explain Java's platform independence, JVM architecture, and key features like garbage collection. Include Java's evolution from JDK 1.0 to modern versions." },
            { id: 2, title: "Java Development Setup", prompt: "Guide through installing JDK, setting up environment variables, and configuring popular IDEs like IntelliJ IDEA and Eclipse. Include Maven/Gradle basics." },
            { id: 3, title: "Java Syntax Fundamentals", prompt: "Explain Java's strict typing, case sensitivity, and basic program structure. Cover package declaration, imports, and the main method signature." },
            { id: 4, title: "Java Type System", prompt: "Detail primitive types (int, double, boolean etc.), wrapper classes, and type conversion. Explain autoboxing/unboxing and type promotion rules." },
            { id: 5, title: "Java Operators and Expressions", prompt: "Cover arithmetic, relational, logical, bitwise, and ternary operators. Explain operator precedence and common pitfalls in Java expressions." }
        ]
    },
    {
        category: "Java Control Structures",
        items: [
            { id: 6, title: "Java Decision Making", prompt: "Explain if-else, nested if, and switch expressions (including Java 12+ enhancements). Cover pattern matching in switch (Java 17+)." },
            { id: 7, title: "Java Loops", prompt: "Detail for, while, do-while loops. Include enhanced for loop for collections. Explain loop control with break, continue, and labels." },
            { id: 8, title: "Java Exception Handling", prompt: "Explain try-catch-finally, multiple catch blocks, and try-with-resources. Cover checked vs unchecked exceptions and custom exception creation." },
            { id: 9, title: "Java Assertions", prompt: "Explain the assert keyword, its use in debugging, and best practices for assertion usage in Java applications." }
        ]
    },
    {
        category: "Object-Oriented Java",
        items: [
            { id: 10, title: "Java Classes and Objects", prompt: "Explain class definition, object instantiation, constructors, and the 'this' keyword. Cover access modifiers and encapsulation principles." },
            { id: 11, title: "Java Inheritance", prompt: "Explain extends keyword, method overriding, super keyword, and the Object class. Cover final classes and methods." },
            { id: 12, title: "Java Polymorphism", prompt: "Explain method overloading, overriding, and dynamic method dispatch. Cover covariant return types and the instanceof operator." },
            { id: 13, title: "Java Interfaces", prompt: "Explain interface declaration, implementation, and default/static methods (Java 8+). Cover functional interfaces and lambda expressions." },
            { id: 14, title: "Java Abstract Classes", prompt: "Explain abstract class definition, abstract methods, and when to use them versus interfaces. Cover template method pattern." }
        ]
    },
    {
        category: "Advanced Java Features",
        items: [
            { id: 15, title: "Java Generics", prompt: "Explain generic classes, methods, and type parameters. Cover bounded types, wildcards, and type erasure." },
            { id: 16, title: "Java Collections Framework", prompt: "Explain List, Set, Map interfaces and their implementations. Cover Java 8+ stream API and functional operations." },
            { id: 17, title: "Java Concurrency", prompt: "Explain Thread class, Runnable, Callable, ExecutorService. Cover synchronization, locks, and concurrent collections." },
            { id: 18, title: "Java I/O and NIO", prompt: "Explain File I/O, streams, readers/writers. Cover NIO channels, buffers, and the Path API." },
            { id: 19, title: "Java Annotations", prompt: "Explain built-in annotations (@Override, @Deprecated etc.) and custom annotation creation. Cover annotation processing." }
        ]
    },
    {
        category: "Modern Java Development",
        items: [
            { id: 20, title: "Java Modules (JPMS)", prompt: "Explain module system introduced in Java 9. Cover module declaration, requires, exports, and modular JARs." },
            { id: 21, title: "Java Streams API", prompt: "Explain stream creation, intermediate/terminal operations. Cover collectors, parallel streams, and performance considerations." },
            { id: 22, title: "Java Functional Programming", prompt: "Explain lambda expressions, method references, and functional interfaces. Cover Optional class and its proper usage." },
            { id: 23, title: "Java Records", prompt: "Explain record classes introduced in Java 14. Cover their use as immutable data carriers and comparison with traditional classes." },
            { id: 24, title: "Java Sealed Classes", prompt: "Explain sealed classes and interfaces introduced in Java 17. Cover their use in controlling inheritance hierarchies." }
        ]
    },
    {
        category: "Java Best Practices",
        items: [
            { id: 25, title: "Java Code Style", prompt: "Explain Java coding conventions, Javadoc comments, and effective package organization. Cover common style checkers and linters." },
            { id: 26, title: "Java Unit Testing", prompt: "Explain JUnit 5 features, test organization, and mocking with frameworks like Mockito. Cover test-driven development in Java." },
            { id: 27, title: "Java Performance Tuning", prompt: "Explain JVM memory model, garbage collection, and performance profiling. Cover common performance pitfalls and optimizations." },
            { id: 28, title: "Java Security Best Practices", prompt: "Explain secure coding practices, input validation, and common vulnerabilities. Cover Java's security manager and cryptography APIs." }
        ]
    }
];

export const TypescriptTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to TypeScript", prompt: "Explain the fundamental concepts of TypeScript, including variables, data types, and operators." },
            { id: 2, title: "Basic Types", prompt: "Describe the basic data types in TypeScript: number, string, boolean, null, undefined, and symbol." },
            { id: 3, title: "Type Annotations", prompt: "Explain how to use type annotations to explicitly specify the type of a variable." },
            { id: 4, title: "Type Inference", prompt: "Describe how TypeScript can infer types automatically." },
        ]
    },
    {
        category: "Interfaces",
        items: [
            { id: 5, title: "Introduction to Interfaces", prompt: "Explain what interfaces are and how to define them in TypeScript." },
            { id: 6, title: "Optional Properties", prompt: "Describe how to define optional properties in an interface." },
            { id: 7, title: "Readonly Properties", prompt: "Explain how to define readonly properties in an interface." },
            { id: 8, title: "Extending Interfaces", prompt: "Describe how to extend interfaces to create more specific types." },
        ]
    },
    {
        category: "Classes",
        items: [
            { id: 9, title: "Introduction to Classes", prompt: "Explain how to define classes in TypeScript." },
            { id: 10, title: "Constructors", prompt: "Describe how to define constructors in TypeScript classes." },
            { id: 11, title: "Inheritance", prompt: "Explain how to use inheritance in TypeScript classes." },
            { id: 12, title: "Access Modifiers", prompt: "Describe the different access modifiers (public, private, protected) in TypeScript." },
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 13, title: "Function Types", prompt: "Explain how to define function types in TypeScript." },
            { id: 14, title: "Optional Parameters", prompt: "Describe how to define optional parameters in TypeScript functions." },
            { id: 15, title: "Default Parameters", prompt: "Explain how to define default parameters in TypeScript functions." },
            { id: 16, title: "Rest Parameters", prompt: "Describe how to use rest parameters in TypeScript functions." },
        ]
    },
    {
        category: "Generics",
        items: [
            { id: 17, title: "Introduction to Generics", prompt: "Explain what generics are and how to use them in TypeScript." },
            { id: 18, title: "Generic Functions", prompt: "Describe how to define generic functions in TypeScript." },
            { id: 19, title: "Generic Classes", prompt: "Explain how to define generic classes in TypeScript." },
            { id: 20, title: "Generic Constraints", prompt: "Describe how to use generic constraints to limit the types that can be used with a generic." },
        ]
    },
    {
        category: "Modules",
        items: [
            { id: 21, title: "Introduction to Modules", prompt: "Explain what modules are and how to use them in TypeScript." },
            { id: 22, title: "Importing and Exporting", prompt: "Describe how to import and export modules in TypeScript." },
            { id: 23, title: "Module Resolution", prompt: "Explain how TypeScript resolves modules." },
        ]
    },
    {
        category: "Decorators",
        items: [
            { id: 24, title: "Introduction to Decorators", prompt: "Explain what decorators are and how to use them in TypeScript." },
            { id: 25, title: "Class Decorators", prompt: "Describe how to define class decorators in TypeScript." },
            { id: 26, title: "Method Decorators", prompt: "Explain how to define method decorators in TypeScript." },
            { id: 27, title: "Property Decorators", prompt: "Describe how to define property decorators in TypeScript." },
        ]
    },
    {
        category: "Enums",
        items: [
            { id: 28, title: "Introduction to Enums", prompt: "Explain what enums are and how to use them in TypeScript." },
            { id: 29, title: "Numeric Enums", prompt: "Describe numeric enums in TypeScript." },
            { id: 30, title: "String Enums", prompt: "Explain string enums in TypeScript." },
            { id: 31, title: "Heterogeneous Enums", prompt: "Explain heterogeneous enums in TypeScript." },
        ]
    },
    {
        category: "Utility Types",
        items: [
            { id: 32, title: "Partial", prompt: "Explain the Partial utility type in TypeScript." },
            { id: 33, title: "Readonly", prompt: "Explain the Readonly utility type in TypeScript." },
            { id: 34, title: "Required", prompt: "Explain the Required utility type in TypeScript." },
            { id: 35, title: "Pick", prompt: "Explain the Pick utility type in TypeScript." },
            { id: 36, title: "Omit", prompt: "Explain the Omit utility type in TypeScript." },
        ]
    },
    {
        category: "Advanced Types",
        items: [
            { id: 37, title: "Intersection Types", prompt: "Explain intersection types in TypeScript." },
            { id: 38, title: "Union Types", prompt: "Explain union types in TypeScript." },
            { id: 39, title: "Type Aliases", prompt: "Explain type aliases in TypeScript." },
            { id: 40, title: "Conditional Types", prompt: "Explain conditional types in TypeScript." },
            { id: 41, title: "Mapped Types", prompt: "Explain mapped types in TypeScript." },
        ]
    }
];

export const JavascriptTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to JavaScript", prompt: "Explain the fundamental concepts of JavaScript, including variables, data types, and operators." },
            { id: 2, title: "Basic Syntax", prompt: "Describe the basic syntax of JavaScript programs." },
            { id: 3, title: "Control Flow", prompt: "Explain control flow statements, such as if statements, for loops, and while loops." },
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 4, title: "Functions in JavaScript", prompt: "Explain how to define and use functions in JavaScript." },
            { id: 5, title: "Arrow Functions", prompt: "Describe arrow functions and their syntax." },
            { id: 6, title: "Closures", prompt: "Explain closures and their use in JavaScript." },
        ]
    },
    {
        category: "Objects",
        items: [
            { id: 7, title: "Objects in JavaScript", prompt: "Explain objects and their properties." },
            { id: 8, title: "Prototypes", prompt: "Describe prototypes and their role in inheritance." },
            { id: 9, title: "Classes", prompt: "Explain classes and their use in object-oriented programming." },
        ]
    },
    {
        category: "Arrays",
        items: [
            { id: 10, title: "Arrays in JavaScript", prompt: "Explain arrays and their methods." },
        ]
    },
    {
        category: "DOM Manipulation",
        items: [
            { id: 11, title: "DOM Manipulation", prompt: "Explain how to manipulate the DOM using JavaScript." },
        ]
    },
    {
        category: "Asynchronous JavaScript",
        items: [
            { id: 12, title: "Callbacks", prompt: "Explain callbacks and their use in asynchronous programming." },
            { id: 13, title: "Promises", prompt: "Describe promises and their use in handling asynchronous operations." },
            { id: 14, title: "Async/Await", prompt: "Explain async/await and their use in simplifying asynchronous code." },
        ]
    },
    {
        category: "ES6 Features",
        items: [
            { id: 15, title: "Let and Const", prompt: "Explain let and const and their differences from var." },
            { id: 16, title: "Template Literals", prompt: "Describe template literals and their use in string interpolation." },
            { id: 17, title: "Destructuring", prompt: "Explain destructuring and its use in extracting values from objects and arrays." },
        ]
    }
];

export const PHPTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to PHP", prompt: "Explain the fundamental concepts of PHP, including its history, uses, and basic syntax." },
            { id: 2, title: "PHP Installation and Setup", prompt: "Guide the user through installing and setting up a PHP development environment on various operating systems (Windows, macOS, Linux)." },
            { id: 3, title: "Basic PHP Syntax", prompt: "Describe the basic syntax of PHP, including variables, data types, operators, and control structures." },
        ]
    },
    {
        category: "Variables and Data Types",
        items: [
            { id: 4, title: "Variables in PHP", prompt: "Explain how to declare and use variables in PHP, including variable scope and naming conventions." },
            { id: 5, title: "Data Types", prompt: "Describe the different data types available in PHP, such as integers, floats, strings, booleans, arrays, and objects." },
            { id: 6, title: "Type Casting", prompt: "Explain type casting in PHP and how to convert variables from one data type to another." },
        ]
    },
    {
        category: "Control Structures",
        items: [
            { id: 7, title: "Conditional Statements", prompt: "Explain conditional statements in PHP, including if, else, elseif, and switch statements." },
            { id: 8, title: "Looping Structures", prompt: "Describe looping structures in PHP, including for, while, do-while, and foreach loops." },
            { id: 9, title: "Break and Continue", prompt: "Explain how to use break and continue statements to control the flow of loops." },
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 10, title: "Functions in PHP", prompt: "Explain how to define and use functions in PHP, including function parameters, return values, and scope." },
            { id: 11, title: "Built-in Functions", prompt: "Introduce some of the commonly used built-in functions in PHP for string manipulation, array handling, and more." },
            { id: 12, title: "User-Defined Functions", prompt: "Guide the user through creating their own custom functions in PHP." },
        ]
    },
    {
        category: "Arrays",
        items: [
            { id: 13, title: "Arrays in PHP", prompt: "Explain arrays in PHP, including indexed arrays, associative arrays, and multidimensional arrays." },
            { id: 14, title: "Array Functions", prompt: "Describe various array functions in PHP for sorting, searching, and manipulating arrays." },
            { id: 15, title: "Foreach Loop with Arrays", prompt: "Explain how to use the foreach loop to iterate through arrays in PHP." },
        ]
    },
    {
        category: "Strings",
        items: [
            { id: 16, title: "Strings in PHP", prompt: "Explain strings in PHP, including string concatenation, string functions, and string manipulation." },
            { id: 17, title: "String Functions", prompt: "Describe commonly used string functions in PHP for searching, replacing, and formatting strings." },
            { id: 18, title: "String Interpolation", prompt: "Explain how to use string interpolation to embed variables within strings." },
        ]
    },
    {
        category: "Forms and Input",
        items: [
            { id: 19, title: "Handling Forms", prompt: "Guide the user through handling HTML forms in PHP, including processing form data and validating user input." },
            { id: 20, title: "GET and POST Methods", prompt: "Explain the difference between GET and POST methods for submitting form data." },
            { id: 21, title: "Input Validation", prompt: "Describe techniques for validating user input to prevent security vulnerabilities and ensure data integrity." },
        ]
    },
    {
        category: "Working with Databases",
        items: [
            { id: 22, title: "Connecting to MySQL", prompt: "Explain how to connect to a MySQL database from PHP using the mysqli extension or PDO." },
            { id: 23, title: "Executing Queries", prompt: "Guide the user through executing SQL queries in PHP to retrieve, insert, update, and delete data." },
            { id: 24, title: "Prepared Statements", prompt: "Explain how to use prepared statements to prevent SQL injection attacks." },
        ]
    },
    {
        category: "Sessions and Cookies",
        items: [
            { id: 25, title: "Sessions in PHP", prompt: "Explain how to use sessions in PHP to store user-specific data across multiple pages." },
            { id: 26, title: "Cookies in PHP", prompt: "Describe how to use cookies in PHP to store small pieces of data on the user's computer." },
            { id: 27, title: "Session Management", prompt: "Discuss session management techniques, including session hijacking prevention and session timeout." },
        ]
    },
    {
        category: "Object-Oriented Programming (OOP)",
        items: [
            { id: 28, title: "Introduction to OOP", prompt: "Explain the fundamental concepts of object-oriented programming (OOP) in PHP, including classes, objects, inheritance, and polymorphism." },
            { id: 29, title: "Classes and Objects", prompt: "Guide the user through defining classes and creating objects in PHP." },
            { id: 30, title: "Inheritance", prompt: "Explain inheritance in PHP and how to create subclasses that inherit properties and methods from parent classes." },
			{ id: 31, title: "Polymorphism", prompt: "Explain Polymorphism in PHP and how to create classes that can be used interchangeably." },
        ]
    },
	{
        category: "Error Handling",
        items: [
            { id: 32, title: "Error Handling in PHP", prompt: "Explain how to handle errors and exceptions in PHP using try-catch blocks." },
            { id: 33, title: "Custom Error Handlers", prompt: "Guide the user through creating custom error handlers to log and display errors." },
        ]
    },
	{
        category: "File Handling",
        items: [
            { id: 34, title: "File Handling in PHP", prompt: "Explain how to read, write, and manipulate files in PHP." },
            { id: 35, title: "File Uploading", prompt: "Guide the user through creating file uploading scripts in PHP." },
        ]
    },
];
export const RubyTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Ruby", prompt: "Explain the fundamental concepts of Ruby, including its history, philosophy, uses, and basic syntax. Cover topics like: What is Ruby? Why use Ruby? Key features of Ruby. Setting up a Ruby development environment. Basic syntax: variables, data types, operators, and control structures." },
            { id: 2, title: "Data Types and Variables", prompt: "Describe Ruby's data types (numbers, strings, symbols, booleans, arrays, hashes) and how to declare and use variables. Include: Numeric types (Integer, Float), String manipulation, Symbols vs. Strings, Boolean logic, Array methods, Hash operations." },
            { id: 3, title: "Operators and Expressions", prompt: "Explain Ruby's operators (arithmetic, comparison, logical, assignment) and how to construct expressions. Cover operator precedence and examples of complex expressions." },
            { id: 4, title: "Control Structures", prompt: "Guide the user through Ruby's control structures (if/else, case, while, until, for loops). Provide examples of using these structures to control program flow." },
            { id: 5, title: "Methods", prompt: "Explain how to define and call methods in Ruby, including parameters, return values, and scope. Include: Defining methods with and without parameters, Returning values from methods, Understanding variable scope within methods." }
        ]
    },
    {
        category: "Object-Oriented Programming",
        items: [
            { id: 6, title: "Classes and Objects", prompt: "Explain the concepts of classes and objects in Ruby, including how to define classes, create objects, and access attributes and methods. Cover: Defining classes with attributes and methods, Creating instances of classes (objects), Accessing object attributes and calling methods." },
            { id: 7, title: "Inheritance", prompt: "Describe inheritance in Ruby and how to create subclasses that inherit properties and methods from parent classes. Include: Single inheritance, Method overriding, Using `super` to call parent class methods." },
            { id: 8, title: "Modules and Mixins", prompt: "Explain how to use modules and mixins in Ruby to share code between classes. Cover: Defining modules, Including modules in classes, Using mixins to add functionality." },
            { id: 9, title: "Encapsulation and Abstraction", prompt: "Discuss encapsulation and abstraction in Ruby and how to use access modifiers (public, private, protected) to control access to attributes and methods. Explain how to create abstract classes and methods." },
            { id: 10, title: "Polymorphism", prompt: "Explain polymorphism in Ruby and how to create classes that can be used interchangeably. Cover: Duck typing, Method overloading (simulated with default parameters)." }
        ]
    },
    {
        category: "Working with Data",
        items: [
            { id: 11, title: "Arrays", prompt: "Guide the user through working with arrays in Ruby, including creating, accessing, and manipulating arrays. Cover: Array creation and initialization, Accessing elements by index, Adding and removing elements, Iterating over arrays, Common array methods (map, select, reduce)." },
            { id: 12, title: "Hashes", prompt: "Explain how to use hashes in Ruby to store key-value pairs. Include: Hash creation and initialization, Accessing values by key, Adding and removing key-value pairs, Iterating over hashes, Common hash methods." },
            { id: 13, title: "Strings", prompt: "Describe string manipulation in Ruby, including string concatenation, slicing, and formatting. Cover: String creation and manipulation, String concatenation and interpolation, String slicing and substring extraction, String formatting with `printf` and `sprintf`, Regular expressions for pattern matching." },
            { id: 14, title: "Regular Expressions", prompt: "Explain how to use regular expressions in Ruby for pattern matching and text manipulation. Include: Regular expression syntax, Matching patterns in strings, Extracting substrings, Replacing text with regular expressions." },
            { id: 15, title: "File I/O", prompt: "Guide the user through reading from and writing to files in Ruby. Cover: Opening and closing files, Reading data from files, Writing data to files, Handling file errors." }
        ]
    },
    {
        category: "Gems and Libraries",
        items: [
            { id: 16, title: "Using Gems", prompt: "Explain how to use gems (Ruby libraries) to extend the functionality of Ruby programs. Cover: Installing gems with `gem install`, Requiring gems in your code, Using gem documentation." },
            { id: 17, title: "Popular Gems", prompt: "Introduce some popular Ruby gems for web development, data processing, and other tasks. Include: Rails (web framework), RSpec (testing framework), Nokogiri (HTML/XML parsing), HTTParty (HTTP client)." },
            { id: 18, title: "Creating Gems", prompt: "Guide the user through creating their own Ruby gems. Cover: Gem structure, Writing gem code, Creating a gemspec file, Publishing gems to RubyGems.org." }
        ]
    },
    {
        category: "Web Development with Sinatra",
        items: [
            { id: 19, title: "Introduction to Sinatra", prompt: "Explain the basics of web development with the Sinatra framework. Cover: What is Sinatra? Setting up a Sinatra application, Defining routes, Handling requests and responses." },
            { id: 20, title: "Routes and Handlers", prompt: "Describe how to define routes and handlers in Sinatra to handle different HTTP requests. Include: Defining routes with different HTTP methods (GET, POST, PUT, DELETE), Accessing request parameters, Rendering views." },
            { id: 21, title: "Views and Templates", prompt: "Explain how to use views and templates in Sinatra to generate HTML output. Cover: Using ERB templates, Passing data to views, Layouts and partials." },
            { id: 22, title: "Working with Forms", prompt: "Guide the user through handling HTML forms in Sinatra, including processing form data and validating user input. Cover: Creating HTML forms, Processing form data in routes, Validating user input." },
            { id: 23, title: "Sessions and Cookies", prompt: "Explain how to use sessions and cookies in Sinatra to store user-specific data. Cover: Enabling sessions, Storing data in sessions, Setting and reading cookies." }
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 24, title: "Unit Testing with RSpec", prompt: "Introduce unit testing in Ruby using the RSpec framework. Cover: Installing RSpec, Writing test cases, Running tests, Using matchers." },
            { id: 25, title: "Test-Driven Development (TDD)", prompt: "Explain the principles of Test-Driven Development (TDD) and how to apply them in Ruby. Cover: Writing tests before code, Red-Green-Refactor cycle." },
            { id: 26, title: "Mocking and Stubbing", prompt: "Describe how to use mocking and stubbing in RSpec to isolate units of code during testing. Cover: Creating mocks and stubs, Setting expectations, Verifying interactions." }
        ]
    },
	{
        category: "Metaprogramming",
        items: [
            { id: 27, title: "Introduction to Metaprogramming", prompt: "Explain the concept of metaprogramming in Ruby and its uses." },
            { id: 28, title: "Eval and Instance Eval", prompt: "Guide the user through using eval and instance_eval for dynamic code execution." },
        ]
    },
	{
        category: "Concurrency",
        items: [
            { id: 29, title: "Threads", prompt: "Explain how to use threads in Ruby for concurrent execution." },
            { id: 30, title: "Fibers", prompt: "Describe fibers and their use in Ruby for lightweight concurrency." },
        ]
    },
	{
        category: "Networking",
        items: [
            { id: 31, title: "Sockets", prompt: "Guide the user through creating network applications using sockets in Ruby." },
            { id: 32, title: "HTTP Clients", prompt: "Explain how to make HTTP requests using Ruby's built-in libraries or gems like Net::HTTP." },
        ]
    },
	{
        category: "Databases with ActiveRecord",
        items: [
            { id: 33, title: "Introduction to ActiveRecord", prompt: "Introduce ActiveRecord as an ORM for database interaction in Ruby." },
            { id: 34, title: "Migrations", prompt: "Explain how to use migrations to manage database schema changes." },
			{ id: 35, title: "Models", prompt: "Guide the user through defining models and performing CRUD operations." },
        ]
    },
	{
        category: "Advanced Data Structures",
        items: [
            { id: 36, title: "Sets", prompt: "Explain how to use sets in Ruby for storing unique values." },
            { id: 37, title: "Queues", prompt: "Describe queues and their use in managing data flow." },
			{ id: 38, title: "Stacks", prompt: "Guide the user through implementing stacks in Ruby." },
        ]
    },
	{
        category: "Design Patterns",
        items: [
            { id: 39, title: "Singleton Pattern", prompt: "Explain the singleton design pattern and its implementation in Ruby." },
            { id: 40, title: "Observer Pattern", prompt: "Describe the observer pattern and its use in event handling." },
        ]
    },
	{
        category: "Security",
        items: [
            { id: 41, title: "Input Sanitization", prompt: "Guide the user through sanitizing user input to prevent security vulnerabilities." },
            { id: 42, title: "Authentication", prompt: "Explain different authentication methods in Ruby web applications." },
        ]
    },
	{
        category: "Debugging",
        items: [
            { id: 43, title: "Using the Debugger", prompt: "Explain how to use Ruby's built-in debugger or gems like byebug." },
            { id: 44, title: "Logging", prompt: "Describe how to implement logging in Ruby applications for debugging and monitoring." },
        ]
    },
	{
        category: "Regular Expression Advanced",
        items: [
            { id: 45, title: "Advanced Regular Expression", prompt: "Guide the user through Advanced Regular Expression" },
            { id: 46, title: "Regex performance", prompt: "Explain Regex performance" },
        ]
    },
	{
        category: "Deployment",
        items: [
            { id: 47, title: "Deploying Ruby", prompt: "Guide the user through Deploying Ruby" },
            { id: 48, title: "Capistrano", prompt: "Explain Capistrano" },
        ]
    },
	{
        category: "Ruby on Rails",
        items: [
            { id: 49, title: "Ruby on Rails", prompt: "Guide the user through Ruby on Rails" },
            { id: 50, title: "MVC", prompt: "Explain MVC" },
        ]
    },
	{
        category: "GraphQL",
        items: [
            { id: 51, title: "GraphQL", prompt: "Guide the user through GraphQL" },
            { id: 52, title: "Apollo", prompt: "Explain Apollo" },
        ]
    },
	{
        category: "gRPC",
        items: [
            { id: 53, title: "gRPC", prompt: "Guide the user through gRPC" },
            { id: 54, title: "Protocol Buffers", prompt: "Explain Protocol Buffers" },
        ]
    },
	{
        category: "Asynchronous Processing",
        items: [
            { id: 55, title: "Sidekiq", prompt: "Guide the user through Sidekiq" },
            { id: 56, title: "Resque", prompt: "Explain Resque" },
        ]
    },
];
export const SwiftTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Swift", prompt: "Provide a comprehensive introduction to Swift, covering its origins, key features, advantages, and use cases. Discuss Swift's evolution and its role in modern iOS, macOS, watchOS, and tvOS development. Explain the basic syntax and structure of a Swift program, including comments, semicolons, and code organization. Touch upon the Swift Package Manager and its role in dependency management." },
            { id: 2, title: "Data Types and Variables", prompt: "Explore Swift's fundamental data types in detail, including Int, Float, Double, String, Bool, Array, Dictionary, and Tuple. Explain how to declare variables and constants using `var` and `let`, respectively. Discuss type inference and type annotations. Include detailed examples of numeric type conversions, string manipulation techniques (e.g., concatenation, substring extraction, string interpolation), boolean logic operations, array manipulation methods (e.g., adding, removing, inserting elements, sorting, filtering), and dictionary operations (e.g., adding, removing, updating key-value pairs, iterating). Also, cover the use of type aliases for creating more readable code." },
            { id: 3, title: "Operators and Expressions", prompt: "Provide an in-depth explanation of Swift's operators, including arithmetic, comparison, logical, assignment, range, and bitwise operators. Explain operator precedence and associativity. Demonstrate how to construct complex expressions using various operators and data types. Include examples of using compound assignment operators, ternary conditional operators, and custom operators. Discuss the use of overflow operators for handling potential overflow issues." },
            { id: 4, title: "Control Flow", prompt: "Guide the user through Swift's control flow statements, including if/else statements, switch statements, for loops (for-in, for-each), while loops, and repeat-while loops. Explain how to use these statements to control program execution based on conditions and iterations. Provide detailed examples of using break and continue statements to alter loop behavior. Discuss the use of guard statements for early exit from functions or loops and error handling. Cover the use of `defer` statements for executing code upon exiting a scope." }
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 5, title: "Functions in Swift", prompt: "Explain how to define and call functions in Swift, including parameters, return values, function types, and throwing functions. Cover: Defining functions with and without parameters, Returning values from functions, Using function types as variables and parameters, Understanding function scope, Defining throwing functions with `throws`, Handling errors with `try`, `catch`, and `rethrow`." },
            { id: 6, title: "Closures", prompt: "Describe closures in Swift and their syntax. Include: Closure expressions, Trailing closures, Capturing values, Escaping closures, Autoclosures." }
        ]
    },
    {
        category: "Object-Oriented Programming",
        items: [
            { id: 7, title: "Classes and Objects", prompt: "Explain the concepts of classes and objects in Swift, including how to define classes, create objects, and access properties and methods. Cover: Defining classes with properties and methods, Creating instances of classes (objects), Accessing object properties and calling methods, Computed properties, Property observers (willSet, didSet), Lazy properties." },
            { id: 8, title: "Inheritance", prompt: "Describe inheritance in Swift and how to create subclasses that inherit properties and methods from parent classes. Include: Single inheritance, Method overriding, Using `super` to call parent class methods, Preventing overriding with `final`." },
            { id: 9, title: "Structures", prompt: "Explain the differences between classes and structures in Swift and when to use each. Cover: Defining structures, Value vs. reference types, Mutating methods, Structures with stored properties." },
            { id: 10, title: "Protocols", prompt: "Explain how to use protocols in Swift to define a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality. Cover: Defining protocols, Adopting protocols, Protocol extensions, Protocol-oriented programming." }
        ]
    },
    {
        category: "Advanced Swift Features",
        items: [
            { id: 11, title: "Optionals", prompt: "Explain optionals in Swift and how to handle values that may be absent. Cover: Optional types, Optional binding, Forced unwrapping, Optional chaining, Nil coalescing operator, Implicitly unwrapped optionals." },
            { id: 12, title: "Error Handling", prompt: "Describe error handling in Swift and how to handle errors that may occur during program execution. Cover: Throwing errors, Catching errors, Using `try`, `catch`, and `throw` keywords, Custom error types, Defer statements for cleanup." },
            { id: 13, title: "Generics", prompt: "Explain how to use generics in Swift to write code that can work with any type. Cover: Generic functions, Generic types, Type constraints, Associated types." }
        ]
    },
    {
        category: "Memory Management",
        items: [
            { id: 14, title: "Automatic Reference Counting (ARC)", prompt: "Explain how Swift manages memory using Automatic Reference Counting (ARC). Cover: Strong references, Weak references, Unowned references, Avoiding retain cycles." }
        ]
    },
    {
        category: "Concurrency",
        items: [
            { id: 15, title: "Concurrency in Swift", prompt: "Introduce concurrency in Swift using Grand Central Dispatch (GCD). Cover: Dispatch queues, Asynchronous execution, Concurrent execution, Avoiding race conditions." },
            { id: 16, title: "Async/Await", prompt: "Explain how to use async/await for writing asynchronous code in a more readable and maintainable way. Cover: Defining async functions, Calling async functions, Handling errors in async functions." }
        ]
    },
    {
        category: "Properties",
        items: [
            { id: 17, title: "Stored Properties", prompt: "Explain stored properties in Swift classes and structs. Cover: Defining stored properties, Initializing stored properties, Lazy stored properties." },
            { id: 18, title: "Computed Properties", prompt: "Explain computed properties in Swift classes and structs. Cover: Defining computed properties, Getters and setters, Read-only computed properties." },
            { id: 19, title: "Property Observers", prompt: "Explain property observers in Swift classes and structs. Cover: willSet and didSet observers, Observing property changes." }
    ]
    },
    {
        category: "Subscripts",
        items: [
            { id: 20, title: "Subscripts", prompt: "Explain how to define and use subscripts in Swift. Cover: Defining subscripts, Subscript options."}
        ]
    },
    {
        category: "Extensions",
        items: [
            { id: 21, title: "Extensions", prompt: "Explain how to use extensions to add new functionality to existing types. Cover: Adding methods to existing types, Adding computed properties to existing types, Adding protocol conformance to existing types."}
        ]
    },
    {
        category: "Enumerations",
        items: [
            { id: 22, title: "Enumerations", prompt: "Explain how to define and use enumerations in Swift. Cover: Defining enumerations, Associated values, Raw values."}
        ]
    },
    {
        category: "Access Control",
        items: [
            { id: 23, title: "Access Control", prompt: "Explain access control in Swift. Cover: Open, Public, Internal, File Private, Private."}
        ]
    },
    {
        category: "SwiftUI",
        items: [
            { id: 24, title: "Introduction to SwiftUI", prompt: "Introduce SwiftUI, Apple's declarative UI framework. Cover: Basic SwiftUI syntax, Views, Modifiers, Layouts."}
        ]
    },
    {
        category: "Networking",
        items: [
            { id: 25, title: "Networking with URLSession", prompt: "Explain how to perform networking tasks using URLSession. Cover: Making network requests, Handling responses, Parsing JSON."}
        ]
    },
    {
        category: "Codable",
        items: [
            { id: 26, title: "Encoding and Decoding Data", prompt: "Explain how to use Codable to encode and decode data. Cover: Encoding data to JSON, Decoding JSON to data."}
        ]
    },
    {
        category: "Combine Framework",
        items: [
            { id: 27, title: "Introduction to Combine", prompt: "Introduce the Combine framework for handling asynchronous events. Cover: Publishers, Subscribers, Operators."}
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 28, title: "Unit Testing with XCTest", prompt: "Explain how to write unit tests using XCTest. Cover: Writing test cases, Assertions, Test-Driven Development (TDD)."}
        ]
    },
    {
        category: "Swift Package Manager",
        items: [
            { id: 29, title: "Managing Dependencies", prompt: "Explain how to use Swift Package Manager to manage dependencies. Cover: Creating a package, Adding dependencies, Resolving dependencies."}
        ]
    },
    {
        category: "Design Patterns",
        items: [
            { id: 30, title: "Common Design Patterns", prompt: "Introduce common design patterns in Swift. Cover: Singleton, Factory, Observer."}
        ]
    }
];

export const TypeScriptTopics = [
    {
        category: "Introduction",
        items: [
            { id: 1, title: "What is TypeScript?", prompt: "Explain the purpose of TypeScript and its benefits over JavaScript." },
            { id: 2, title: "Setting up a TypeScript Environment", prompt: "Guide users through installing TypeScript and setting up a development environment." },
            { id: 3, title: "Basic TypeScript Syntax", prompt: "Introduce the basic syntax of TypeScript, including variable declarations and type annotations." }
        ]
    },
    {
        category: "Basic Types",
        items: [
            { id: 4, title: "Number, String, and Boolean", prompt: "Explain the primitive types in TypeScript: number, string, and boolean." },
            { id: 5, title: "Arrays and Tuples", prompt: "Describe how to use arrays and tuples in TypeScript, including type safety." },
            { id: 6, title: "Enums", prompt: "Explain how to define and use enums in TypeScript." },
            { id: 7, title: "Any, Void, Null, and Undefined", prompt: "Discuss the special types any, void, null, and undefined in TypeScript." }
        ]
    },
    {
        category: "Variables",
        items: [
            { id: 8, title: "Variable Declarations (let, const, var)", prompt: "Explain the differences between let, const, and var in TypeScript." },
            { id: 9, title: "Type Annotations", prompt: "Describe how to use type annotations to specify the type of a variable." },
            { id: 10, title: "Type Inference", prompt: "Explain how TypeScript infers the type of a variable when no type annotation is provided." }
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 11, title: "Function Declarations", prompt: "Explain how to declare functions in TypeScript, including parameters and return types." },
            { id: 12, title: "Optional and Default Parameters", prompt: "Describe how to use optional and default parameters in TypeScript functions." },
            { id: 13, title: "Rest Parameters", prompt: "Explain how to use rest parameters to accept a variable number of arguments in a TypeScript function." },
            { id: 14, title: "Function Overloads", prompt: "Explain how to define function overloads in TypeScript to provide different function signatures." }
        ]
    },
    {
        category: "Interfaces",
        items: [
            { id: 15, title: "Defining Interfaces", prompt: "Explain how to define interfaces in TypeScript to describe the shape of an object." },
            { id: 16, title: "Implementing Interfaces", prompt: "Describe how to implement interfaces in TypeScript classes." },
            { id: 17, title: "Extending Interfaces", prompt: "Explain how to extend interfaces in TypeScript to create more specific interfaces." }
        ]
    },
    {
        category: "Classes",
        items: [
            { id: 18, title: "Defining Classes", prompt: "Explain how to define classes in TypeScript, including constructors, properties, and methods." },
            { id: 19, title: "Inheritance", prompt: "Describe how to use inheritance to create subclasses in TypeScript." },
            { id: 20, title: "Access Modifiers (public, private, protected)", prompt: "Explain how to use access modifiers to control the visibility of class members in TypeScript." },
            { id: 21, title: "Abstract Classes", prompt: "Explain how to define and use abstract classes in TypeScript." }
        ]
    },
    {
        category: "Objects",
        items: [
            { id: 22, title: "Creating Objects", prompt: "Explain how to create objects from classes in TypeScript." },
            { id: 23, title: "Object Types", prompt: "Describe how to define object types using interfaces and type aliases." }
        ]
    },
    {
        category: "Generics",
        items: [
            { id: 24, title: "Generic Functions", prompt: "Explain how to write generic functions in TypeScript that can work with any type." },
            { id: 25, title: "Generic Classes", prompt: "Describe how to write generic classes in TypeScript." },
            { id: 26, title: "Type Constraints", prompt: "Explain how to use type constraints to restrict the types that can be used with generics." }
        ]
    },
    {
        category: "Advanced Types",
        items: [
            { id: 27, title: "Union Types", prompt: "Explain how to use union types to allow a variable to have one of several types." },
            { id: 28, title: "Intersection Types", prompt: "Describe how to use intersection types to combine multiple types into a single type." },
            { id: 29, title: "Type Guards", prompt: "Explain how to use type guards to narrow down the type of a variable within a conditional block." },
            { id: 30, title: "Conditional Types", prompt: "Explain how to use conditional types to define types based on conditions." },
            { id: 31, title: "Mapped Types", prompt: "Explain how to use mapped types to transform types based on existing types." }
        ]
    },
    {
        category: "Modules",
        items: [
            { id: 32, title: "Exporting Modules", prompt: "Explain how to export modules in TypeScript to make them available to other files." },
            { id: 33, title: "Importing Modules", prompt: "Describe how to import modules in TypeScript to use code from other files." },
            { id: 34, title: "Module Loaders", prompt: "Explain how to use module loaders like CommonJS and ES modules in TypeScript." }
        ]
    },
    {
        category: "Namespaces",
        items: [
            { id: 35, title: "Defining Namespaces", prompt: "Explain how to define namespaces in TypeScript to create logical groupings of code." },
            { id: 36, title: "Nested Namespaces", prompt: "Describe how to nest namespaces in TypeScript to create hierarchical groupings of code." }
        ]
    },
    {
        category: "Decorators",
        items: [
            { id: 37, title: "Class Decorators", prompt: "Explain how to use class decorators in TypeScript to add metadata and modify the behavior of classes." },
            { id: 38, title: "Method Decorators", prompt: "Describe how to use method decorators in TypeScript." },
            { id: 39, title: "Property Decorators", prompt: "Explain how to use property decorators in TypeScript." },
            { id: 40, title: "Parameter Decorators", prompt: "Describe how to use parameter decorators in TypeScript." }
        ]
    },
    {
        category: "Advanced Features",
        items: [
            { id: 41, title: "Mixins", prompt: "Explain how to use mixins in TypeScript to reuse code across multiple classes." },
            { id: 42, title: "Declaration Merging", prompt: "Describe how declaration merging works in TypeScript." },
            { id: 43, title: "Symbols", prompt: "Explain how to use symbols in TypeScript." },
            { id: 44, title: "Iterators and Generators", prompt: "Explain how to use iterators and generators in TypeScript." }
        ]
    },
    {
        category: "Working with JavaScript",
        items: [
            { id: 45, title: "Using JavaScript Libraries", prompt: "Explain how to use JavaScript libraries in TypeScript projects." },
            { id: 46, title: "Declaration Files (.d.ts)", prompt: "Describe how to create and use declaration files for JavaScript libraries." },
            { id: 47, title: "Migrating from JavaScript to TypeScript", prompt: "Guide users through the process of migrating a JavaScript project to TypeScript." }
        ]
    },
    {
        category: "Configuration",
        items: [
            { id: 48, title: "tsconfig.json", prompt: "Explain the purpose and structure of the tsconfig.json file." },
            { id: 49, title: "Compiler Options", prompt: "Describe the various compiler options available in TypeScript." }
        ]
    },
    {
        category: "Tooling",
        items: [
            { id: 50, title: "TypeScript Compiler (tsc)", prompt: "Explain how to use the TypeScript compiler (tsc) to compile TypeScript code." },
            { id: 51, title: "Linting with ESLint", prompt: "Describe how to use ESLint to lint TypeScript code." },
            { id: 52, title: "Formatting with Prettier", prompt: "Explain how to use Prettier to format TypeScript code." }
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 53, title: "Unit Testing with Jest", prompt: "Explain how to write unit tests for TypeScript code using Jest." },
            { id: 54, title: "End-to-End Testing with Cypress", prompt: "Describe how to write end-to-end tests for TypeScript applications using Cypress." }
        ]
    },
    {
        category: "Debugging",
        items: [
            { id: 55, title: "Debugging TypeScript Code", prompt: "Explain how to debug TypeScript code using various debugging tools." }
        ]
    },
    {
        category: "Best Practices",
        items: [
            { id: 56, title: "Writing Clean TypeScript Code", prompt: "Provide best practices for writing clean and maintainable TypeScript code." },
            { id: 57, title: "Code Organization", prompt: "Describe best practices for organizing TypeScript code into modules and namespaces." }
        ]
    }
];

export const PythonTopics = [
    {
        category: "Fundamentals",
        items: [
            { id: 1, title: "Introduction to Python", prompt: "Explain the fundamental concepts of Python, including its history, uses, and basic syntax." },
            { id: 2, title: "Python Installation and Setup", prompt: "Guide the user through installing and setting up a Python development environment on various operating systems (Windows, macOS, Linux)." },
            { id: 3, title: "Basic Python Syntax", prompt: "Describe the basic syntax of Python, including variables, data types, operators, and control structures." },
        ]
    },
    {
        category: "Variables and Data Types",
        items: [
            { id: 4, title: "Variables in Python", prompt: "Explain how to declare and use variables in Python, including variable scope and naming conventions." },
            { id: 5, title: "Data Types", prompt: "Describe the different data types available in Python, such as integers, floats, strings, booleans, lists, tuples, dictionaries, and sets." },
            { id: 6, title: "Type Conversion", prompt: "Explain type conversion in Python and how to convert variables from one data type to another." },
        ]
    },
    {
        category: "Control Structures",
        items: [
            { id: 7, title: "Conditional Statements", prompt: "Explain conditional statements in Python, including if, else, and elif statements." },
            { id: 8, title: "Looping Structures", prompt: "Describe looping structures in Python, including for and while loops." },
            { id: 9, title: "Break and Continue", prompt: "Explain how to use break and continue statements to control the flow of loops." },
        ]
    },
    {
        category: "Functions",
        items: [
            { id: 10, title: "Functions in Python", prompt: "Explain how to define and use functions in Python, including function parameters, return values, and scope." },
            { id: 11, title: "Built-in Functions", prompt: "Introduce some of the commonly used built-in functions in Python for string manipulation, list handling, and more." },
            { id: 12, title: "User-Defined Functions", prompt: "Guide the user through creating their own custom functions in Python." },
        ]
    },
    {
        category: "Lists",
        items: [
            { id: 13, title: "Lists in Python", prompt: "Explain lists in Python, including list creation, indexing, slicing, and common list methods." },
            { id: 14, title: "List Comprehension", prompt: "Describe list comprehension and how it simplifies list creation and manipulation." },
            { id: 15, title: "List Methods", prompt: "Explain various list methods in Python for adding, removing, and modifying list elements." },
        ]
    },
    {
        category: "Strings",
        items: [
            { id: 16, title: "Strings in Python", prompt: "Explain strings in Python, including string concatenation, string formatting, and string methods." },
            { id: 17, title: "String Formatting", prompt: "Describe different string formatting techniques in Python, such as f-strings and the format() method." },
            { id: 18, title: "String Methods", prompt: "Explain commonly used string methods in Python for searching, replacing, and manipulating strings." },
        ]
    },
    {
        category: "Dictionaries",
        items: [
            { id: 19, title: "Dictionaries in Python", prompt: "Explain dictionaries in Python, including dictionary creation, accessing values, adding/removing key-value pairs, and dictionary methods." },
            { id: 20, title: "Dictionary Methods", prompt: "Describe various dictionary methods in Python for managing key-value pairs." },
            { id: 21, title: "Dictionary Comprehension", prompt: "Explain dictionary comprehension and how it simplifies dictionary creation." },
        ]
    },
    {
        category: "Tuples and Sets",
        items: [
            { id: 22, title: "Tuples in Python", prompt: "Explain tuples in Python, including tuple creation, immutability, and tuple methods." },
            { id: 23, title: "Sets in Python", prompt: "Explain sets in Python, including set creation, set operations (union, intersection, difference), and set methods." },
        ]
    },
    {
        category: "File Handling",
        items: [
            { id: 24, title: "File Handling in Python", prompt: "Explain how to read from and write to files in Python, including opening files, reading data, writing data, and closing files." },
            { id: 25, title: "File Modes", prompt: "Describe different file modes in Python (e.g., read, write, append) and their uses." },
            { id: 26, title: "Context Managers", prompt: "Explain how to use context managers (with statement) for file handling to ensure proper file closing." },
        ]
    },
    {
        category: "Object-Oriented Programming",
        items: [
            { id: 27, title: "Classes and Objects", prompt: "Explain the concepts of classes and objects in Python, including class definition, object creation, attributes, and methods." },
            { id: 28, title: "Inheritance", prompt: "Describe inheritance in Python and how to create subclasses that inherit attributes and methods from parent classes." },
            { id: 29, title: "Polymorphism", prompt: "Explain polymorphism in Python and how objects of different classes can respond to the same method call." },
        ]
    },
    {
        category: "Modules and Packages",
        items: [
            { id: 30, title: "Modules in Python", prompt: "Explain how to use modules in Python to organize code into reusable units." },
            { id: 31, title: "Packages in Python", prompt: "Describe how to create and use packages in Python to group related modules." },
            { id: 32, title: "Import Statements", prompt: "Explain different ways to import modules and packages in Python using import statements." },
        ]
    },
    {
        category: "Error Handling",
        items: [
            { id: 33, title: "Exceptions in Python", prompt: "Explain how to handle exceptions in Python using try, except, else, and finally blocks." },
            { id: 34, title: "Raising Exceptions", prompt: "Describe how to raise custom exceptions in Python using the raise statement." },
            { id: 35, title: "Custom Exceptions", prompt: "Guide the user through creating their own custom exception classes in Python." },
        ]
    },
    {
        category: "Working with Data",
        items: [
            { id: 36, title: "CSV Files", prompt: "Explain how to read and write CSV files in Python using the csv module." },
            { id: 37, title: "JSON Data", prompt: "Describe how to work with JSON data in Python, including encoding and decoding JSON objects." },
            { id: 38, title: "Data Serialization", prompt: "Explain data serialization and deserialization using pickle in Python." },
        ]
    },
    {
        category: "Web Development",
        items: [
            { id: 39, title: "Introduction to Web Frameworks", prompt: "Introduce popular Python web frameworks like Flask and Django." },
            { id: 40, title: "Flask Basics", prompt: "Guide the user through creating a simple web application using Flask." },
            { id: 41, title: "Django Basics", prompt: "Guide the user through creating a simple web application using Django." },
        ]
    },
    {
        category: "Databases",
        items: [
            { id: 42, title: "Database Connections", prompt: "Explain how to connect to different types of databases (e.g., MySQL, PostgreSQL, SQLite) in Python." },
            { id: 43, title: "SQLAlchemy", prompt: "Introduce SQLAlchemy as an ORM (Object-Relational Mapper) for database interactions." },
            { id: 44, title: "Database Queries", prompt: "Describe how to perform database queries using SQL in Python." },
        ]
    },
    {
        category: "Regular Expressions",
        items: [
            { id: 45, title: "Regular Expressions in Python", prompt: "Explain how to use regular expressions in Python for pattern matching and text manipulation." },
            { id: 46, title: "Regex Patterns", prompt: "Describe common regex patterns and their uses." },
            { id: 47, title: "Regex Functions", prompt: "Explain various regex functions in Python for searching, replacing, and splitting strings." },
        ]
    },
    {
        category: "Multithreading and Multiprocessing",
        items: [
            { id: 48, title: "Multithreading", prompt: "Explain how to use multithreading in Python to achieve concurrency." },
            { id: 49, title: "Multiprocessing", prompt: "Describe how to use multiprocessing in Python to achieve parallelism." },
            { id: 50, title: "Concurrency vs Parallelism", prompt: "Explain the difference between concurrency and parallelism." },
        ]
    },
    {
        category: "Networking",
        items: [
            { id: 51, title: "Socket Programming", prompt: "Introduce socket programming in Python for creating network applications." },
            { id: 52, title: "HTTP Requests", prompt: "Explain how to make HTTP requests using the requests library in Python." },
            { id: 53, title: "Web Scraping", prompt: "Guide the user through web scraping using libraries like Beautiful Soup." },
        ]
    },
    {
        category: "GUI Programming",
        items: [
            { id: 54, title: "Tkinter Basics", prompt: "Introduce Tkinter for creating graphical user interfaces in Python." },
            { id: 55, title: "GUI Elements", prompt: "Describe common GUI elements like buttons, labels, and text boxes." },
            { id: 56, title: "Event Handling", prompt: "Explain how to handle events in Tkinter applications." },
        ]
    },
    {
        category: "Testing",
        items: [
            { id: 57, title: "Unit Testing", prompt: "Explain how to write unit tests in Python using the unittest module." },
            { id: 58, title: "Test-Driven Development", prompt: "Introduce the concept of Test-Driven Development (TDD)." },
            { id: 59, title: "pytest", prompt: "Introduce pytest as a testing framework." },
        ]
    },
    {
        category: "Data Analysis",
        items: [
            { id: 60, title: "NumPy", prompt: "Introduce NumPy for numerical computations in Python." },
            { id: 61, title: "Pandas", prompt: "Introduce Pandas for data manipulation and analysis in Python." },
            { id: 62, title: "Matplotlib", prompt: "Introduce Matplotlib for data visualization in Python." },
        ]
    },
    {
        category: "Data Science and Machine Learning",
        items: [
            { id: 63, title: "Scikit-learn", prompt: "Introduce Scikit-learn for machine learning tasks in Python." },
            { id: 64, title: "Machine Learning Algorithms", prompt: "Explain common machine learning algorithms like linear regression, decision trees, and clustering." },
            { id: 65, title: "Model Evaluation", prompt: "Describe how to evaluate machine learning models." },
        ]
    },
    {
        category: "Image Processing",
        items: [
            { id: 66, title: "PIL/Pillow", prompt: "Introduce PIL/Pillow for image processing in Python." },
            { id: 67, title: "Image Manipulation", prompt: "Explain how to perform basic image manipulation tasks like resizing, cropping, and filtering." },
            { id: 68, title: "Image Analysis", prompt: "Describe how to analyze images using Python." },
        ]
    },
    {
        category: "Game Development",
        items: [
            { id: 69, title: "Pygame", prompt: "Introduce Pygame for game development in Python." },
            { id: 70, title: "Game Logic", prompt: "Explain how to implement game logic in Pygame." },
            { id: 71, title: "Game Assets", prompt: "Describe how to use game assets like sprites and sounds in Pygame." },
        ]
    },
    {
        category: "Automation",
        items: [
            { id: 72, title: "Scripting", prompt: "Explain how to write Python scripts for automating tasks." },
            { id: 73, title: "Task Scheduling", prompt: "Describe how to schedule tasks using cron or Task Scheduler." },
            { id: 74, title: "System Administration", prompt: "Explain how to use Python for system administration tasks." },
        ]
    },
    {
        category: "DevOps",
        items: [
            { id: 75, title: "Ansible", prompt: "Introduce Ansible for configuration management and automation." },
            { id: 76, title: "Docker", prompt: "Explain how to use Docker for containerization." },
            { id: 77, title: "Continuous Integration", prompt: "Introduce the concept of Continuous Integration (CI)." },
        ]
    },
    {
        category: "Ethical Hacking",
        items: [
            { id: 78, title: "Network Scanning", prompt: "Explain how to perform network scanning using Python." },
            { id: 79, title: "Vulnerability Assessment", prompt: "Describe how to assess vulnerabilities using Python." },
            { id: 80, title: "Penetration Testing", prompt: "Introduce the concept of penetration testing." },
        ]
    }
];
