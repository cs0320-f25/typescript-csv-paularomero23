# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    The parser only handles commas, not other common symbols like | or ;
    The parser doesn't have a way to distinguish header rows from actual data
    There might be some edge cases that break the parser, like unclosed quotes
    It would be useful to have specific exceptions for certain cases, so the caller has an idea of exactly what the issue is
    
- #### Step 2: Use an LLM to help expand your perspective.
    LLM suggested: 
    - handling quoted fields with commas, newlines, or escaped quotes
    - supporting different delimiters
    - skipping empty lines or white space
    - handling files with or without headers
    - provide clear error messages for malformed rows
    - allow configuration via options


- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both.   
    Describe these using the User Story format—see below for a definition. 
    
    1. Functionality - Handling quoted fields with commas, or escaped quotes - both
    User Story: As a user using the parser, I want fields containing commas or double quotes to be parsed correctly so I can be able to process CSV data from various sources

    2. Functionality/Extensibility - Handling files with header rows - me, but the LLM also suggested
    User Story: As a user, I want an option to specify whether the first row of the CSV contains headers, that way I can access data by column name rather than just index

    3. Extensibility - provide clear error messages for malformed rows - both
    User Story: As a user, when a CSV has a row with n inconsistent number of fields, I want the parser to provide a clear error message so that I, and any other caller, can quickly identify the issue.


    4. Extensibility - Allow configuration via options - the LLM
    User Story: As a user, I want to be able to configure the character used as a field's delimiter so that I can use the parser with different file formats that aren't necessarily separated by commas.


    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    My suggestions overlapped quite well with the LLM's suggestions; we had a lot of the same ideas and suggestions, but the LLM was a bit more descriptive and "technical". The results did not really differ by prompt, the order or phrasing of the suggestions would be different, but it overall suggested the same ideas. I really resonated with the extensability improvements it suggested, I think if implemented, using the parser would be a far easier experience for the caller.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): jgcasale, abodet, Samyak Jain (i dont know his cs login)
#### Total estimated time it took to complete project: 5 hours
#### Link to GitHub Repo:  
