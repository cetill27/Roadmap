/* ================================================================
   DETAILED MDN-STYLE CONCEPT CONTENT
   Extends each concept in WEEKS with rich 'sections' arrays
   ================================================================ */

(function() {

// Helper to add sections to a concept
function addSections(weekId, conceptIndex, sections) {
  if (WEEKS[weekId] && WEEKS[weekId].concepts && WEEKS[weekId].concepts[conceptIndex]) {
    WEEKS[weekId].concepts[conceptIndex].sections = sections;
  }
}

// ╔═══════════════════════════════════════════════════╗
// ║  PHASE 1 — FOUNDATIONS (Weeks 1–4)                ║
// ╚═══════════════════════════════════════════════════╝

// ─── W1 CONCEPT 0: Binary & How Computers Work ──────
addSections('w1', 0, [
  {
    title: 'What Is Binary?',
    content: '<p>At the lowest level, a computer is made of billions of tiny switches called <strong>transistors</strong>. Each transistor can be in one of two states: <strong>on</strong> (represented as <code>1</code>) or <strong>off</strong> (represented as <code>0</code>). This two-state system is called <strong>binary</strong> (base-2).</p><p>Everything you see on a computer — text, images, videos, programs — is ultimately stored and processed as sequences of 0s and 1s. A single binary digit is called a <strong>bit</strong>. Eight bits grouped together form a <strong>byte</strong>, which can represent 256 different values (2<sup>8</sup> = 256). This is enough to encode any character in the English alphabet (using ASCII) or a small number.</p><p>Larger units build on bytes: a <strong>kilobyte (KB)</strong> is 1,024 bytes, a <strong>megabyte (MB)</strong> is ~1 million bytes, a <strong>gigabyte (GB)</strong> is ~1 billion bytes, and a <strong>terabyte (TB)</strong> is ~1 trillion bytes.</p>',
    note: 'When you see file sizes on your computer (e.g., a 5 MB image), that means the file is approximately 5 million bytes, or about 40 million individual bits — all just 0s and 1s.',
    table: {
      headers: ['Decimal', 'Binary', 'Bits Needed', 'Notes'],
      rows: [
        ['0', '0', '1', 'Zero'],
        ['1', '1', '1', 'One'],
        ['7', '111', '3', '4 + 2 + 1'],
        ['10', '1010', '4', '8 + 2'],
        ['65', '01000001', '8 (1 byte)', 'ASCII letter "A"'],
        ['255', '11111111', '8 (1 byte)', 'Max value in 1 byte'],
        ['256', '100000000', '9', 'Needs 2 bytes']
      ]
    }
  },
  {
    title: 'The CPU: Fetch-Decode-Execute Cycle',
    content: '<p>The <strong>Central Processing Unit (CPU)</strong> is the "brain" of your computer. It performs calculations and makes decisions by following a simple three-step loop billions of times per second:</p><p><strong>1. Fetch:</strong> The CPU reads the next instruction from memory (RAM). The <strong>Program Counter (PC)</strong> register keeps track of which instruction to read next.</p><p><strong>2. Decode:</strong> The CPU\'s <strong>control unit</strong> interprets the instruction — figuring out what operation to perform (add, subtract, compare, move data, etc.) and what data to use.</p><p><strong>3. Execute:</strong> The CPU\'s <strong>Arithmetic Logic Unit (ALU)</strong> performs the actual operation. The result may be stored in a register, written back to memory, or used to decide which instruction to execute next (branching).</p><p>Modern CPUs execute this cycle <strong>billions of times per second</strong>. A 3 GHz processor completes approximately 3 billion cycles every second. Modern CPUs also use <strong>pipelining</strong> (overlapping fetch/decode/execute stages) and <strong>multiple cores</strong> to execute several instructions simultaneously.</p>',
    code: '// What happens when you run: int result = 3 + 4;\n\n// Step 1 - FETCH: CPU reads instruction from address 0x0040\n//   Instruction: ADD R1, #3, #4\n\n// Step 2 - DECODE: Control unit determines:\n//   Operation: Addition\n//   Operand 1: immediate value 3\n//   Operand 2: immediate value 4\n//   Destination: Register R1\n\n// Step 3 - EXECUTE: ALU computes 3 + 4 = 7\n//   Result 7 is stored in register R1\n//   Program Counter advances to next instruction\n\n// This entire cycle takes ~0.3 nanoseconds on a 3 GHz CPU',
    codeLang: 'Assembly Concept'
  },
  {
    title: 'Memory Hierarchy',
    content: '<p>Computers use a <strong>hierarchy</strong> of memory types, each with different speed and capacity trade-offs. The closer memory is to the CPU, the faster it is — but also the smaller and more expensive.</p>',
    table: {
      headers: ['Memory Type', 'Speed', 'Size', 'Persists?', 'Cost'],
      rows: [
        ['CPU Registers', '< 1 nanosecond', '~1 KB', 'No', 'Built into CPU'],
        ['L1 Cache', '~1 ns', '32-64 KB per core', 'No', 'Very expensive'],
        ['L2 Cache', '~4 ns', '256 KB - 1 MB', 'No', 'Expensive'],
        ['L3 Cache', '~10 ns', '4-64 MB shared', 'No', 'Expensive'],
        ['RAM', '~100 ns', '8-64 GB typical', 'No (volatile)', 'Moderate'],
        ['SSD', '~100,000 ns', '256 GB - 4 TB', 'Yes', 'Affordable'],
        ['HDD', '~10,000,000 ns', '1-20 TB', 'Yes', 'Cheap']
      ]
    },
    note: 'RAM is about 100x faster than SSD and 100,000x faster than HDD. This is why programs load into RAM before executing — the CPU cannot work at disk speed. When your computer "runs out of RAM," the OS swaps data to disk, making everything dramatically slower.'
  },
  {
    title: 'What Happens When You Run a Program',
    content: '<p>Understanding the full sequence from double-clicking an icon to seeing output is fundamental:</p><p><strong>1. Loading:</strong> The operating system reads the program file from disk (SSD/HDD) into RAM. This includes the program\'s instructions (code) and any initial data it needs.</p><p><strong>2. Process creation:</strong> The OS creates a <strong>process</strong> — an isolated container with its own memory space, a unique process ID (PID), and scheduled CPU time. The OS manages thousands of processes simultaneously.</p><p><strong>3. Execution:</strong> The CPU starts executing the program\'s instructions via the fetch-decode-execute cycle. The program can request resources from the OS (file access, network, screen output) through <strong>system calls</strong>.</p><p><strong>4. Memory management:</strong> As the program runs, it allocates memory for variables, objects, and data structures. The OS + hardware (MMU) translate the program\'s <strong>virtual memory addresses</strong> to <strong>physical RAM addresses</strong>, keeping each process isolated.</p><p><strong>5. Termination:</strong> When the program finishes (or crashes), the OS reclaims all its memory and removes the process.</p>',
    warn: 'This is why a crash in one program rarely affects others — each process has its own isolated memory space. The OS prevents any process from reading or writing another process\'s memory.'
  },
  {
    title: 'Number Systems You Should Know',
    content: '<p>Beyond binary (base-2), developers regularly encounter two other number systems:</p><p><strong>Hexadecimal (base-16)</strong> uses digits 0-9 and letters A-F. It\'s compact: one hex digit represents exactly 4 bits. You\'ll see it everywhere: memory addresses (<code>0x7fff5fbff8dc</code>), colors (<code>#FF5733</code>), and byte values.</p><p><strong>Octal (base-8)</strong> uses digits 0-7. You\'ll encounter it primarily in Unix file permissions (<code>chmod 755</code>).</p>',
    table: {
      headers: ['Decimal', 'Binary', 'Hexadecimal', 'Octal'],
      rows: [
        ['0', '0000', '0', '0'],
        ['9', '1001', '9', '11'],
        ['10', '1010', 'A', '12'],
        ['15', '1111', 'F', '17'],
        ['16', '10000', '10', '20'],
        ['255', '11111111', 'FF', '377'],
        ['256', '100000000', '100', '400']
      ]
    },
    code: '# In most programming languages:\n0b1010    # binary literal   → 10\n0xFF      # hex literal      → 255\n0o17      # octal literal    → 15\n\n# CSS colors are hex: #RRGGBB\n#FF0000   # Red:   255, Green: 0,   Blue: 0\n#00FF00   # Red:   0,   Green: 255, Blue: 0\n#1E90FF   # Red:   30,  Green: 144, Blue: 255 (DodgerBlue)\n\n# File permissions in octal:\nchmod 755 script.sh\n# 7 = rwx (owner)  → 111 in binary\n# 5 = r-x (group)  → 101 in binary\n# 5 = r-x (others) → 101 in binary',
    codeLang: 'Examples'
  }
]);

// ─── W1 CONCEPT 1: Command Line Interface ───────────
addSections('w1', 1, [
  {
    title: 'What Is the Terminal?',
    content: '<p>The <strong>terminal</strong> (or terminal emulator) is an application that provides a text-based interface to your computer. Inside the terminal runs a <strong>shell</strong> — a program that interprets the commands you type and communicates with the operating system to execute them.</p><p>Common shells include <strong>Bash</strong> (default on most Linux systems), <strong>Zsh</strong> (default on macOS since Catalina), and <strong>PowerShell</strong> (Windows). While they have slightly different syntax, the core commands are the same.</p><p>The terminal is more powerful than a graphical file manager because: you can <strong>automate</strong> repetitive tasks with scripts, <strong>chain</strong> multiple commands together, work <strong>remotely</strong> on servers (which often have no GUI), and perform operations on <strong>hundreds of files</strong> at once.</p>',
    note: 'On Windows, you can use <strong>Git Bash</strong>, <strong>WSL (Windows Subsystem for Linux)</strong>, or the built-in <strong>PowerShell</strong>. WSL is recommended for full Linux compatibility.'
  },
  {
    title: 'Navigation Commands',
    content: '<p>The file system is a <strong>tree structure</strong> starting from the root (<code>/</code> on Unix/Mac, <code>C:\\</code> on Windows). Every file and directory has an <strong>absolute path</strong> (from root: <code>/home/user/projects</code>) and a <strong>relative path</strong> (from your current location: <code>../projects</code>).</p>',
    table: {
      headers: ['Command', 'What It Does', 'Example'],
      rows: [
        ['<code>pwd</code>', 'Print working directory (where am I?)', '<code>pwd</code> → <code>/home/user/projects</code>'],
        ['<code>ls</code>', 'List directory contents', '<code>ls -la</code> (all files, detailed)'],
        ['<code>cd &lt;path&gt;</code>', 'Change directory', '<code>cd ~/projects</code>'],
        ['<code>cd ..</code>', 'Go up one level', '<code>cd ../../</code> (up two levels)'],
        ['<code>cd -</code>', 'Go to previous directory', 'Toggle between two dirs'],
        ['<code>cd ~</code>', 'Go to home directory', 'Same as just <code>cd</code>']
      ]
    },
    code: '# Where am I?\npwd                        # /home/user\n\n# List files\nls                         # basic listing\nls -l                      # detailed (permissions, size, date)\nls -la                     # include hidden files (start with .)\nls -lah                    # human-readable sizes (KB, MB, GB)\nls -lt                     # sort by modification time (newest first)\n\n# Navigate\ncd projects/               # go into projects directory\ncd ..                      # go up one level\ncd ~/Desktop               # go to Desktop (~ = home directory)\ncd -                       # go back to previous directory\n\n# Special paths:\n# .    = current directory\n# ..   = parent directory\n# ~    = home directory (/home/username)\n# /    = root directory',
    codeLang: 'Bash'
  },
  {
    title: 'File & Directory Operations',
    content: '<p>These commands create, copy, move, rename, and delete files and directories. The <code>-r</code> flag (recursive) is needed for directories because they may contain other files and subdirectories.</p>',
    table: {
      headers: ['Command', 'Purpose', 'Example'],
      rows: [
        ['<code>mkdir &lt;name&gt;</code>', 'Create directory', '<code>mkdir src</code>'],
        ['<code>mkdir -p a/b/c</code>', 'Create nested directories', 'Creates all missing parents'],
        ['<code>touch &lt;file&gt;</code>', 'Create empty file / update timestamp', '<code>touch index.html</code>'],
        ['<code>cp &lt;src&gt; &lt;dest&gt;</code>', 'Copy file', '<code>cp file.txt backup.txt</code>'],
        ['<code>cp -r &lt;dir&gt; &lt;dest&gt;</code>', 'Copy directory recursively', '<code>cp -r src/ src-backup/</code>'],
        ['<code>mv &lt;src&gt; &lt;dest&gt;</code>', 'Move or rename', '<code>mv old.txt new.txt</code>'],
        ['<code>rm &lt;file&gt;</code>', 'Delete file (permanent!)', '<code>rm temp.log</code>'],
        ['<code>rm -rf &lt;dir&gt;</code>', 'Delete directory and all contents', '<code>rm -rf build/</code>']
      ]
    },
    warn: '<code>rm</code> is <strong>permanent</strong> — there is no recycle bin in the terminal. <code>rm -rf /</code> would attempt to delete your entire filesystem. Always double-check your path before pressing Enter, especially with <code>-rf</code>.'
  },
  {
    title: 'Viewing & Searching File Contents',
    content: '<p>These commands let you read, search, and analyze file contents directly from the terminal — essential for log files, config files, and quick code inspection.</p>',
    table: {
      headers: ['Command', 'Purpose', 'When to Use'],
      rows: [
        ['<code>cat file</code>', 'Print entire file contents', 'Short files (< 50 lines)'],
        ['<code>less file</code>', 'Scrollable file viewer (q to quit)', 'Long files, log files'],
        ['<code>head -n 20 file</code>', 'First 20 lines', 'Check file structure quickly'],
        ['<code>tail -n 20 file</code>', 'Last 20 lines', 'Check recent log entries'],
        ['<code>tail -f file</code>', 'Follow file in real-time', 'Watch live server logs'],
        ['<code>grep "text" file</code>', 'Find lines containing "text"', 'Search in a specific file'],
        ['<code>grep -rn "text" .</code>', 'Recursive search with line numbers', 'Search entire project'],
        ['<code>wc -l file</code>', 'Count lines in file', 'Quick file size check']
      ]
    },
    code: '# View files\ncat README.md              # print whole file\nless server.log            # scroll through (q to quit, / to search)\nhead -20 data.csv          # first 20 lines\ntail -f app.log            # follow log in real-time (Ctrl+C to stop)\n\n# Search\ngrep "ERROR" app.log              # find all error lines\ngrep -rn "TODO" src/              # recursive search with line numbers\ngrep -i "function" *.js           # case-insensitive search in JS files\ngrep -c "import" App.java         # count matching lines\n\n# Pipes: connect output of one command to input of another\ncat app.log | grep "ERROR" | wc -l    # count error lines\nls -la | grep ".txt"                   # find .txt files\nhistory | grep "git"                   # find past git commands',
    codeLang: 'Bash'
  },
  {
    title: 'Pipes, Redirection & Environment Variables',
    content: '<p><strong>Pipes (<code>|</code>)</strong> send the output of one command as input to another. This lets you chain simple commands into powerful pipelines. <strong>Redirection</strong> sends output to files instead of the screen.</p><p><strong>Environment variables</strong> are key-value pairs that configure your shell and programs. <code>PATH</code> is the most important — it tells the shell where to find executable programs.</p>',
    code: '# Redirection\necho "Hello" > file.txt           # write to file (overwrites)\necho "World" >> file.txt          # append to file\nls /nonexistent 2> errors.txt     # redirect errors to file\nls /nonexistent 2>/dev/null        # discard errors silently\n\n# Environment variables\necho $HOME                         # print home directory\necho $PATH                         # print program search paths\nexport MY_VAR="hello"              # set variable for this session\nexport PATH="$HOME/.local/bin:$PATH"  # add to PATH\n\n# To make permanent, add export lines to:\n# ~/.bashrc   (Bash)\n# ~/.zshrc    (Zsh)\n\n# Process management\nCtrl+C                   # kill the running process\nCtrl+Z                   # suspend (pause) the process\nbg                       # resume suspended process in background\nfg                       # bring background process to foreground\nCtrl+D                   # close the terminal / end input',
    codeLang: 'Bash'
  }
]);

// ─── W1 CONCEPT 2: Git Version Control ──────────────
addSections('w1', 2, [
  {
    title: 'Why Version Control Matters',
    content: '<p><strong>Version control</strong> is a system that records changes to files over time so you can recall specific versions later. Without it, developers resort to naming files <code>project_v2_final_FINAL.zip</code> — which is unmaintainable, error-prone, and impossible to collaborate with.</p><p>Git is a <strong>distributed version control system (DVCS)</strong> — every developer has a full copy of the entire repository history on their machine. This means you can work offline, commits are instant (no network needed), and there\'s no single point of failure.</p><p>Git was created by <strong>Linus Torvalds</strong> in 2005 to manage the Linux kernel codebase. Today it\'s used by virtually every software project in the world.</p>'
  },
  {
    title: 'The Three Areas of Git',
    content: '<p>Git manages your code through three distinct areas. Understanding this is essential for using Git correctly:</p><p><strong>1. Working Directory:</strong> Your actual files on disk. When you edit a file in your IDE, you\'re modifying the working directory. Git knows about these files but doesn\'t automatically save changes.</p><p><strong>2. Staging Area (Index):</strong> A preparation area where you decide which changes to include in the next commit. Running <code>git add file.txt</code> moves changes from the working directory to the staging area. This lets you create focused, logical commits — even if you changed 10 files, you can commit them in groups.</p><p><strong>3. Repository (.git directory):</strong> The permanent history. Running <code>git commit</code> takes everything in the staging area and saves it as a permanent snapshot. Each commit has a unique SHA-1 hash identifier, a message, a timestamp, and a pointer to the previous commit.</p>',
    code: '# See which area your changes are in:\ngit status\n\n# Working Directory → Staging Area\ngit add file.txt            # stage one file\ngit add src/                # stage a directory\ngit add .                   # stage ALL changes\ngit add -p                  # interactively choose chunks to stage\n\n# Staging Area → Repository\ngit commit -m "feat: add user login"\n\n# Undo: Unstage a file (keep changes in working dir)\ngit restore --staged file.txt\n\n# Undo: Discard working directory changes (DESTRUCTIVE)\ngit restore file.txt\n\n# See differences between areas:\ngit diff                    # working dir vs staging\ngit diff --staged           # staging vs last commit\ngit diff HEAD               # working dir vs last commit',
    codeLang: 'Bash'
  },
  {
    title: 'Commits: Snapshots in Time',
    content: '<p>A <strong>commit</strong> is a snapshot of your entire project at a point in time. It records: what changed (the diff), who made the change (author), when (timestamp), and why (commit message). Commits are identified by a <strong>SHA-1 hash</strong> — a 40-character string like <code>a1b2c3d4e5f6...</code>.</p><p>Commits form a <strong>linked list</strong>: each commit points to its parent commit, creating a chain of history. This is why <code>git log</code> can show you every change ever made to the project.</p>',
    note: 'Write commit messages in the <strong>imperative mood</strong>: "Add login page" not "Added login page." Follow the <strong>Conventional Commits</strong> format for clarity: <code>feat:</code> (new feature), <code>fix:</code> (bug fix), <code>refactor:</code> (code restructuring), <code>docs:</code> (documentation), <code>test:</code> (tests), <code>chore:</code> (maintenance).',
    code: '# Good commit messages:\ngit commit -m "feat: add JWT authentication to API"\ngit commit -m "fix: prevent null pointer in user service"\ngit commit -m "refactor: extract validation into separate class"\ngit commit -m "docs: add API endpoint documentation"\ngit commit -m "test: add unit tests for OrderService"\n\n# View history:\ngit log                     # full log\ngit log --oneline           # compact (hash + message)\ngit log --oneline --graph   # visual branch history\ngit log -5                  # last 5 commits\ngit log --author="Alice"    # filter by author\ngit log -- src/Main.java    # history of specific file\n\n# Inspect a specific commit:\ngit show a1b2c3d            # show changes in commit\ngit show HEAD               # show latest commit\ngit show HEAD~2             # show 2 commits ago',
    codeLang: 'Bash'
  },
  {
    title: 'Branching & Merging',
    content: '<p>A <strong>branch</strong> in Git is simply a movable pointer to a commit. The default branch is called <code>main</code> (or <code>master</code> in older repos). <strong>HEAD</strong> is a special pointer that tells Git which branch you\'re currently on.</p><p>Branching lets you work on features, fixes, or experiments in isolation. When the work is done, you <strong>merge</strong> the branch back into <code>main</code>. If two branches changed the same lines of code, Git creates a <strong>merge conflict</strong> that you must resolve manually.</p><p>The typical workflow: create a branch → make commits → push to remote → open a Pull Request → review → merge → delete the branch.</p>',
    code: '# Create and switch to a new branch\ngit checkout -b feature/user-auth    # create + switch (classic)\ngit switch -c feature/user-auth      # create + switch (modern)\n\n# Switch between existing branches\ngit checkout main                    # switch to main\ngit switch main                      # modern syntax\n\n# See all branches\ngit branch                           # local branches\ngit branch -a                        # local + remote branches\ngit branch -v                        # with last commit message\n\n# Merge a branch into current branch\ngit checkout main                    # switch to main first\ngit merge feature/user-auth          # merge feature into main\n\n# Delete branch after merging\ngit branch -d feature/user-auth      # safe delete (only if merged)\ngit branch -D feature/user-auth      # force delete\n\n# If merge conflict occurs:\n# 1. Open conflicted files — look for <<<<<<< markers\n# 2. Edit to resolve (keep the code you want)\n# 3. git add <resolved-files>\n# 4. git commit (completes the merge)',
    codeLang: 'Bash'
  },
  {
    title: 'Working with GitHub (Remotes)',
    content: '<p>A <strong>remote</strong> is a copy of your repository hosted on a server (GitHub, GitLab, Bitbucket). The default remote is called <code>origin</code>. Remotes enable collaboration: multiple developers push and pull from the same remote repository.</p><p><strong>Pull Requests (PRs)</strong> are GitHub\'s collaboration feature — you push your branch to GitHub, then open a PR asking to merge your branch into <code>main</code>. Team members review the code, leave comments, and approve or request changes before merging.</p>',
    code: '# Connect local repo to GitHub\ngit remote add origin https://github.com/user/repo.git\ngit remote -v                         # verify remote URLs\n\n# Push your branch to GitHub\ngit push -u origin main               # first push (-u sets upstream)\ngit push                              # subsequent pushes\ngit push origin feature/auth          # push a feature branch\n\n# Get latest changes from GitHub\ngit fetch                              # download changes (don\'t merge)\ngit pull                               # fetch + merge (shortcut)\ngit pull --rebase                      # fetch + rebase (cleaner history)\n\n# Clone someone else\'s repo\ngit clone https://github.com/user/repo.git\ngit clone git@github.com:user/repo.git  # SSH (no password needed)\n\n# Fork workflow (contributing to open source):\n# 1. Fork the repo on GitHub (creates your copy)\n# 2. Clone YOUR fork locally\n# 3. Create a branch, make changes, push to YOUR fork\n# 4. Open a PR from your fork to the original repo',
    codeLang: 'Bash'
  },
  {
    title: 'The .gitignore File',
    content: '<p>The <code>.gitignore</code> file tells Git which files and directories to <strong>ignore</strong> — they won\'t be tracked, staged, or committed. This is essential for keeping build artifacts, dependencies, secrets, and OS-specific files out of your repository.</p>',
    code: '# .gitignore for a typical Java + Node project\n\n# Compiled output\ntarget/\nbuild/\n*.class\n*.jar\n\n# Dependencies\nnode_modules/\n.gradle/\n\n# IDE files\n.idea/\n*.iml\n.vscode/\n*.swp\n\n# Environment & secrets (NEVER commit these!)\n.env\n.env.local\n*.pem\ncredentials.json\n\n# OS files\n.DS_Store\nThumbs.db\n\n# Logs\n*.log\nlogs/',
    codeLang: '.gitignore',
    warn: 'If you accidentally committed a secret (API key, password), simply deleting it in a new commit does NOT remove it — it\'s still in the Git history. You need to use <code>git filter-branch</code> or the BFG Repo-Cleaner to purge it completely. Better yet: <strong>never commit secrets in the first place</strong>.'
  }
]);

// ─── W2 CONCEPT 0: JVM Architecture ─────────────────
addSections('w2', 0, [
  {
    title: 'JDK vs JRE vs JVM — The Full Picture',
    content: '<p>One of the most confusing things for beginners is the relationship between JDK, JRE, and JVM. Here\'s the clear breakdown:</p><p><strong>JVM (Java Virtual Machine):</strong> The engine that actually runs your Java programs. It takes bytecode (.class files) and converts it to native machine code that your specific CPU understands. The JVM is platform-specific — there\'s a different JVM for Windows, macOS, and Linux — but they all run the same bytecode. This is how Java achieves "write once, run anywhere."</p><p><strong>JRE (Java Runtime Environment):</strong> JVM + the standard library classes (java.lang, java.util, java.io, etc.). This is what end users need to <em>run</em> Java applications. It does not include development tools.</p><p><strong>JDK (Java Development Kit):</strong> JRE + development tools: the compiler (<code>javac</code>), debugger (<code>jdb</code>), archiver (<code>jar</code>), documentation generator (<code>javadoc</code>), and more. This is what you need to <em>develop</em> Java applications.</p>',
    note: 'Since Java 11, Oracle no longer distributes a standalone JRE. When you install the JDK, you get everything. Use <strong>JDK 21 (LTS)</strong> — it\'s the current Long-Term Support version with the latest features and security patches.',
    table: {
      headers: ['Component', 'Contains', 'Who Needs It'],
      rows: [
        ['JVM', 'Bytecode interpreter, JIT compiler, GC', 'Included in both JRE and JDK'],
        ['JRE', 'JVM + Standard Library (rt.jar)', 'End users running Java apps'],
        ['JDK', 'JRE + javac + jdb + jar + javadoc + tools', 'Developers writing Java code']
      ]
    }
  },
  {
    title: 'How Java Code Compiles and Runs',
    content: '<p>Java uses a <strong>two-stage compilation</strong> process that\'s different from languages like C (which compiles directly to machine code) or Python (which interprets line by line):</p><p><strong>Stage 1 — Compilation (javac):</strong> The Java compiler reads your <code>.java</code> source files and produces <code>.class</code> files containing <strong>bytecode</strong>. Bytecode is not machine code — it\'s an intermediate representation designed for the JVM. This stage catches syntax errors, type errors, and other compile-time issues.</p><p><strong>Stage 2 — Execution (java):</strong> The JVM loads the <code>.class</code> files and executes them. Initially, the JVM <strong>interprets</strong> bytecode instruction by instruction. But the <strong>JIT (Just-In-Time) Compiler</strong> monitors which code runs frequently ("hot spots") and compiles those sections into optimized native machine code on the fly. This is why Java starts slightly slow but gets faster over time.</p>',
    code: '// 1. You write: Hello.java\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n\n// 2. Compile: javac Hello.java\n//    Output: Hello.class (bytecode)\n//    The compiler checks:\n//    ✓ Syntax correct\n//    ✓ Types match\n//    ✓ Methods exist\n//    ✓ Access modifiers valid\n\n// 3. Run: java Hello\n//    JVM loads Hello.class into memory\n//    Interprets bytecode initially\n//    JIT compiles hot methods to native code\n//    Output: Hello, World!',
    codeLang: 'Java'
  },
  {
    title: 'JVM Memory Areas',
    content: '<p>The JVM divides memory into several distinct areas, each with a specific purpose:</p><p><strong>Heap:</strong> Where all objects live. When you write <code>new Dog()</code>, the Dog object is allocated on the heap. The <strong>Garbage Collector (GC)</strong> automatically frees heap memory when objects are no longer referenced. The heap is shared across all threads.</p><p><strong>Stack:</strong> Each thread gets its own stack. Every method call creates a <strong>stack frame</strong> containing local variables, method parameters, and the return address. When a method returns, its frame is popped. This is why local variables don\'t exist outside their method. Stack overflow occurs when too many frames pile up (usually from infinite recursion).</p><p><strong>Metaspace:</strong> Stores class metadata — class names, method signatures, field types. In older Java versions, this was called "PermGen" and had a fixed size (causing <code>OutOfMemoryError: PermGen space</code>). Metaspace uses native memory and grows dynamically.</p><p><strong>Program Counter (PC) Register:</strong> Each thread has its own PC register tracking which bytecode instruction is currently executing.</p>',
    table: {
      headers: ['Area', 'Stores', 'Thread Safety', 'GC Managed?'],
      rows: [
        ['Heap', 'Objects, arrays, class instances', 'Shared (needs synchronization)', 'Yes'],
        ['Stack', 'Local variables, method frames, return addresses', 'Thread-private (safe)', 'No (auto cleanup on return)'],
        ['Metaspace', 'Class metadata, method definitions', 'Shared', 'Yes (class unloading)'],
        ['PC Register', 'Current instruction pointer', 'Thread-private', 'No']
      ]
    },
    code: 'public class MemoryExample {\n    // "greeting" reference is on the stack\n    // The String object "Hello" is on the heap\n    String greeting = "Hello";\n\n    public void demo() {\n        int x = 42;                    // x is on the STACK (primitive)\n        String name = new String("Alice"); // name ref on STACK, object on HEAP\n        int[] nums = {1, 2, 3};        // nums ref on STACK, array on HEAP\n\n        // When demo() returns:\n        // - Stack frame is destroyed (x, name, nums references gone)\n        // - Heap objects become eligible for GC (no more references)\n    }\n}',
    codeLang: 'Java'
  },
  {
    title: 'Garbage Collection',
    content: '<p>In languages like C, you must manually allocate (<code>malloc</code>) and free (<code>free</code>) memory. Forget to free → <strong>memory leak</strong>. Free too early → <strong>use-after-free bug</strong> (crash or security vulnerability). Java eliminates this entire class of bugs with <strong>automatic garbage collection</strong>.</p><p>The GC periodically scans the heap and identifies objects that are no longer <strong>reachable</strong> from any active reference (local variable, static field, or thread). Unreachable objects are automatically freed.</p><p>The heap is divided into <strong>generations</strong> based on the observation that most objects die young:</p>',
    table: {
      headers: ['Generation', 'Contains', 'GC Type', 'Frequency'],
      rows: [
        ['Young Gen (Eden + Survivor)', 'Newly created objects', 'Minor GC (fast, ~ms)', 'Very frequent'],
        ['Old Gen (Tenured)', 'Objects that survived many GCs', 'Major GC (slower, ~100ms)', 'Less frequent'],
        ['Metaspace', 'Class metadata', 'Only on class unloading', 'Rare']
      ]
    },
    note: 'You cannot force garbage collection — <code>System.gc()</code> is merely a suggestion that the JVM may ignore. Instead, focus on writing code that doesn\'t create unnecessary objects and releases references (set to <code>null</code>) when objects are no longer needed.',
    warn: 'Common causes of memory leaks in Java: holding references in static collections that grow forever, unclosed resources (streams, connections), and listeners/callbacks that are registered but never removed.'
  }
]);

// ─── W2 CONCEPT 1: Variables & Data Types ────────────
addSections('w2', 1, [
  {
    title: 'Primitive Types — The Building Blocks',
    content: '<p>Java has exactly <strong>8 primitive types</strong>. These are NOT objects — they\'re stored directly by value on the stack and are the most efficient data types in Java. Every other type in Java is a <strong>reference type</strong> (object stored on the heap).</p>',
    table: {
      headers: ['Type', 'Size', 'Range', 'Default', 'Example'],
      rows: [
        ['<code>byte</code>', '8 bits', '-128 to 127', '0', '<code>byte b = 100;</code>'],
        ['<code>short</code>', '16 bits', '-32,768 to 32,767', '0', '<code>short s = 30000;</code>'],
        ['<code>int</code>', '32 bits', '-2.1B to 2.1B', '0', '<code>int age = 25;</code>'],
        ['<code>long</code>', '64 bits', '-9.2×10¹⁸ to 9.2×10¹⁸', '0L', '<code>long pop = 8_000_000_000L;</code>'],
        ['<code>float</code>', '32 bits', '~7 decimal digits precision', '0.0f', '<code>float pi = 3.14f;</code>'],
        ['<code>double</code>', '64 bits', '~15 decimal digits precision', '0.0', '<code>double price = 19.99;</code>'],
        ['<code>boolean</code>', '1 bit*', 'true or false only', 'false', '<code>boolean active = true;</code>'],
        ['<code>char</code>', '16 bits', 'Unicode: 0 to 65,535', '\\u0000', "<code>char grade = 'A';</code>"]
      ]
    },
    note: 'Use <code>int</code> for most whole numbers and <code>double</code> for most decimals. Use <code>long</code> only when <code>int</code> range is insufficient. Never use <code>float</code> or <code>double</code> for money — use <code>BigDecimal</code> instead (floating point has rounding errors).'
  },
  {
    title: 'Reference Types & The Heap',
    content: '<p>Everything that isn\'t a primitive is a <strong>reference type</strong>. This includes: Strings, arrays, and all objects (instances of classes). A reference variable doesn\'t hold the object itself — it holds the <strong>memory address</strong> (pointer) to where the object lives on the heap.</p><p>This distinction matters because:</p>',
    keyPoints: [
      'Primitives are compared by <strong>value</strong>: <code>int a = 5; int b = 5; a == b</code> is <code>true</code>',
      'References are compared by <strong>address</strong> with <code>==</code>: two different objects with the same content are NOT equal with <code>==</code>',
      'Use <code>.equals()</code> to compare object content: <code>"hello".equals(otherString)</code>',
      'Assigning a reference copies the <strong>pointer</strong>, not the object: both variables point to the same object',
      '<code>null</code> means the reference points to nothing — accessing it causes <code>NullPointerException</code>'
    ],
    code: '// Primitive: value is copied\nint a = 10;\nint b = a;      // b gets a COPY of the value\nb = 20;         // changing b does NOT affect a\nSystem.out.println(a); // 10 (unchanged)\n\n// Reference: address is copied\nint[] arr1 = {1, 2, 3};\nint[] arr2 = arr1;       // arr2 points to SAME array\narr2[0] = 99;            // modifies the shared array\nSystem.out.println(arr1[0]); // 99 (both see the change!)\n\n// String comparison trap:\nString s1 = new String("hello");\nString s2 = new String("hello");\nSystem.out.println(s1 == s2);      // false! Different objects\nSystem.out.println(s1.equals(s2)); // true! Same content\n\n// Null danger:\nString name = null;\nname.length();  // NullPointerException! Cannot call methods on null',
    codeLang: 'Java'
  },
  {
    title: 'Type Casting',
    content: '<p><strong>Widening (implicit)</strong> casting converts a smaller type to a larger type automatically — no data is lost. <strong>Narrowing (explicit)</strong> casting converts a larger type to a smaller type — you must cast explicitly because data may be lost.</p>',
    table: {
      headers: ['Direction', 'Example', 'Data Loss?', 'Cast Required?'],
      rows: [
        ['byte → short → int → long', '<code>int x = 10; long y = x;</code>', 'No', 'No (automatic)'],
        ['int → float → double', '<code>int x = 10; double d = x;</code>', 'No*', 'No (automatic)'],
        ['double → int', '<code>double d = 9.99; int x = (int) d;</code>', 'Yes (decimal lost → 9)', 'Yes (explicit)'],
        ['long → int', '<code>long big = 3_000_000_000L; int x = (int) big;</code>', 'Yes (overflow!)', 'Yes (explicit)']
      ]
    },
    warn: 'Be careful with narrowing casts — they can silently produce wrong values. <code>(int) 3_000_000_000L</code> does not throw an error; it wraps around and gives you <code>-1294967296</code> (integer overflow). Always check the value fits before casting.',
    code: '// Widening — automatic, safe\nint count = 42;\nlong bigCount = count;          // int → long: OK\ndouble price = count;           // int → double: OK\n\n// Narrowing — explicit, potential data loss\ndouble gpa = 3.97;\nint rounded = (int) gpa;        // 3 (decimal part is TRUNCATED, not rounded)\nint properRound = (int) Math.round(gpa);  // 4 (use Math.round)\n\n// Common gotcha: integer division\nint a = 7, b = 2;\ndouble result = a / b;          // 3.0 (NOT 3.5! integer division happens first)\ndouble correct = (double) a / b; // 3.5 (cast BEFORE dividing)\n\n// Useful conversions\nString numStr = "42";\nint num = Integer.parseInt(numStr);         // String → int\ndouble dbl = Double.parseDouble("3.14");    // String → double\nString back = String.valueOf(num);          // int → String\nString also = "" + num;                     // int → String (concatenation trick)',
    codeLang: 'Java'
  }
]);

// ─── W2 CONCEPT 2: Control Flow & Loops ─────────────
addSections('w2', 2, [
  {
    title: 'If / Else — Branching Logic',
    content: '<p>The <code>if</code> statement is the most fundamental control structure. It executes a block of code only if a boolean condition is <code>true</code>. You can chain conditions with <code>else if</code> and provide a fallback with <code>else</code>.</p><p>A common improvement is the <strong>guard clause</strong> (early return) pattern: instead of nesting conditions deeply, check for invalid/edge cases first and return early.</p>',
    code: '// Standard if/else\nint score = 85;\nString grade;\nif (score >= 90) {\n    grade = "A";\n} else if (score >= 80) {\n    grade = "B";\n} else if (score >= 70) {\n    grade = "C";\n} else {\n    grade = "F";\n}\n\n// BAD: deeply nested (pyramid of doom)\npublic void processOrder(Order order) {\n    if (order != null) {\n        if (order.isValid()) {\n            if (order.hasStock()) {\n                // finally do work here, indented 3 levels\n            }\n        }\n    }\n}\n\n// GOOD: guard clauses (early return)\npublic void processOrder(Order order) {\n    if (order == null) return;\n    if (!order.isValid()) throw new InvalidOrderException();\n    if (!order.hasStock()) throw new OutOfStockException();\n    // do work here — flat, readable\n}',
    codeLang: 'Java'
  },
  {
    title: 'Switch Expressions (Modern Java)',
    content: '<p>Java 14 introduced <strong>switch expressions</strong> — a cleaner, more powerful version of the traditional switch statement. They use arrow syntax (<code>-></code>) and can return values directly. No more <code>break</code> statements, no more fall-through bugs.</p>',
    code: '// Traditional switch (avoid — fall-through bugs)\nswitch (day) {\n    case "MONDAY":    type = "Weekday"; break;  // forget break → fall-through!\n    case "TUESDAY":   type = "Weekday"; break;\n    case "SATURDAY":  type = "Weekend"; break;\n    default:          type = "Unknown"; break;\n}\n\n// Switch EXPRESSION (Java 14+) — use this!\nString type = switch (day) {\n    case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Weekday";\n    case "SATURDAY", "SUNDAY" -> "Weekend";\n    default -> "Unknown";\n};\n\n// Switch with blocks (when you need multiple statements)\nString description = switch (statusCode) {\n    case 200 -> "OK";\n    case 201 -> "Created";\n    case 404 -> "Not Found";\n    case 500 -> {\n        log.error("Internal server error");\n        yield "Server Error";  // "yield" returns value from block\n    }\n    default -> "Unknown status: " + statusCode;\n};\n\n// Pattern matching (Java 21+)\nObject obj = getInput();\nString result = switch (obj) {\n    case Integer i when i > 0 -> "Positive integer: " + i;\n    case Integer i            -> "Non-positive integer: " + i;\n    case String s             -> "String of length " + s.length();\n    case null                 -> "null";\n    default                   -> "Other: " + obj.getClass();\n};',
    codeLang: 'Java',
    note: 'Switch expressions are <strong>exhaustive</strong> — the compiler ensures you handle all possible values. For enums, this means every enum constant must be covered (or use <code>default</code>). This catches bugs at compile time.'
  },
  {
    title: 'Loops — for, while, do-while, for-each',
    content: '<p>Loops repeat a block of code until a condition is met. Choosing the right loop type makes your code clearer:</p>',
    table: {
      headers: ['Loop Type', 'Best When', 'Minimum Runs', 'Example Use Case'],
      rows: [
        ['<code>for</code>', 'You know the count upfront', '0', 'Iterate 0 to n-1'],
        ['<code>for-each</code>', 'Iterating a collection/array', '0', 'Process every item in a list'],
        ['<code>while</code>', 'Condition-based (unknown count)', '0', 'Read lines until EOF'],
        ['<code>do-while</code>', 'Must execute at least once', '1', 'Menu: show options then ask for input']
      ]
    },
    code: '// Standard for loop — use when you know the count\nfor (int i = 0; i < 10; i++) {\n    System.out.println(i);  // 0 through 9\n}\n\n// Enhanced for-each — use for collections and arrays\nString[] names = {"Alice", "Bob", "Charlie"};\nfor (String name : names) {\n    System.out.println(name);\n}\n\n// While — use when condition-based\nScanner scanner = new Scanner(System.in);\nString input = "";\nwhile (!input.equals("quit")) {\n    System.out.print("Enter command: ");\n    input = scanner.nextLine();\n    processCommand(input);\n}\n\n// Do-while — executes body at least once\nint choice;\ndo {\n    System.out.println("1. Play  2. Settings  3. Quit");\n    choice = scanner.nextInt();\n    handleChoice(choice);\n} while (choice != 3);\n\n// Break and continue\nfor (int i = 0; i < 100; i++) {\n    if (i % 2 == 0) continue;  // skip even numbers\n    if (i > 20) break;         // stop after 20\n    System.out.println(i);     // prints odd numbers 1-19\n}\n\n// Labeled break (for nested loops)\nouter:\nfor (int i = 0; i < 10; i++) {\n    for (int j = 0; j < 10; j++) {\n        if (i * j > 50) break outer;  // breaks BOTH loops\n    }\n}',
    codeLang: 'Java',
    warn: 'Infinite loops (<code>while(true)</code>) are sometimes intentional (server loops, game loops) but usually indicate a bug. Always ensure your loop condition will eventually become false, or include a <code>break</code> condition.'
  }
]);

// ─── W2 CONCEPT 3: Methods ──────────────────────────
addSections('w2', 3, [
  {
    title: 'Anatomy of a Method',
    content: '<p>A method is a named, reusable block of code that performs a specific task. In Java, every method belongs to a class. The method <strong>signature</strong> consists of its name and parameter types — this is how Java identifies which method to call.</p>',
    code: '//  access  static?  return   name     parameters\n//  ↓       ↓        ↓        ↓        ↓\n    public  static   int      add      (int a, int b) {\n        return a + b;\n    }\n\n// Void method — performs an action, returns nothing\npublic static void greet(String name) {\n    System.out.println("Hello, " + name + "!");\n    // no return statement needed (or use bare "return;" to exit early)\n}\n\n// Method with multiple parameters\npublic static double calculateBMI(double weightKg, double heightM) {\n    if (heightM <= 0) throw new IllegalArgumentException("Height must be positive");\n    return weightKg / (heightM * heightM);\n}\n\n// Calling methods\nint sum = add(3, 4);                  // 7\ngreet("Alice");                        // prints: Hello, Alice!\ndouble bmi = calculateBMI(70.0, 1.75); // 22.86',
    codeLang: 'Java'
  },
  {
    title: 'Method Overloading',
    content: '<p><strong>Method overloading</strong> means defining multiple methods with the <strong>same name</strong> but <strong>different parameter types or count</strong>. Java selects the correct version at compile time based on the arguments you pass. The return type alone does NOT distinguish overloaded methods.</p>',
    code: 'public class Calculator {\n    // Same name, different parameter types/count\n    public static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static double add(double a, double b) {\n        return a + b;\n    }\n\n    public static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    // Java picks the right version based on arguments:\n    add(3, 4);          // calls add(int, int) → 7\n    add(3.0, 4.0);      // calls add(double, double) → 7.0\n    add(1, 2, 3);       // calls add(int, int, int) → 6\n\n    // Real-world example: String.valueOf() is heavily overloaded\n    String.valueOf(42);        // int version\n    String.valueOf(3.14);      // double version\n    String.valueOf(true);      // boolean version\n    String.valueOf(new char[]{"h","i"}); // char[] version\n}',
    codeLang: 'Java',
    note: 'Overloading is resolved at <strong>compile time</strong> (static dispatch). This is different from <strong>overriding</strong> (Week 3), which is resolved at <strong>runtime</strong> (dynamic dispatch). Overloading = same class, different params. Overriding = subclass replaces parent method.'
  },
  {
    title: 'How Methods Work in Memory (The Call Stack)',
    content: '<p>Every time a method is called, the JVM creates a <strong>stack frame</strong> and pushes it onto the <strong>call stack</strong>. The frame contains: local variables, parameter values, and the return address (where to continue after the method finishes). When the method returns, its frame is <strong>popped</strong> (destroyed).</p><p>This is why local variables don\'t persist between calls, and why calling too many methods (usually via recursion without a base case) causes a <strong>StackOverflowError</strong>.</p>',
    code: 'public static void main(String[] args) {\n    int result = multiply(3, 4);  // main calls multiply\n    System.out.println(result);   // 12\n}\n\npublic static int multiply(int a, int b) {\n    int product = a * b;          // multiply calls nothing else\n    return product;\n}\n\n// Call stack during execution:\n// 1. [main] is pushed onto stack\n// 2. main calls multiply → [multiply] pushed on top of [main]\n// 3. multiply computes 3*4=12, returns 12\n// 4. [multiply] popped from stack\n// 5. main receives 12, continues\n// 6. main finishes → [main] popped. Stack empty.\n\n// Stack Overflow from infinite recursion:\npublic static int broken(int n) {\n    return broken(n - 1);  // NO BASE CASE → infinite calls → StackOverflowError\n}\n\n// Correct recursion with base case:\npublic static int factorial(int n) {\n    if (n <= 1) return 1;          // BASE CASE — stops recursion\n    return n * factorial(n - 1);   // RECURSIVE CASE\n}\n// factorial(4): 4 → 4*factorial(3) → 4*3*factorial(2) → 4*3*2*factorial(1) → 4*3*2*1 = 24',
    codeLang: 'Java',
    warn: 'Java\'s default stack size is typically 512 KB to 1 MB per thread. Deep recursion (thousands of calls) can exhaust it. For very deep recursion, convert to an iterative approach with an explicit stack data structure, or increase the stack size with <code>-Xss</code> JVM flag.'
  }
]);

// ─── W3 CONCEPT 0: Classes & Objects ─────────────────
addSections('w3', 0, [
  {
    title: 'Class vs Object — The Blueprint Analogy',
    content: '<p>A <strong>class</strong> is a <em>blueprint</em> that describes what data (fields) and behavior (methods) a thing has. An <strong>object</strong> is a <em>real, concrete instance</em> created from that blueprint at runtime.</p><p>When you write <code>class Dog { ... }</code>, you are not creating any dogs yet — you are only telling the JVM what every dog <em>could</em> know (fields like <code>name</code>, <code>age</code>) and what it can <em>do</em> (methods like <code>bark()</code>). When you later call <code>new Dog(\"Rex\", \"Husky\", 3)</code>, the JVM allocates a Dog object on the heap with its own copy of those fields.</p>',
    keyPoints: [
      'A class is a static description; objects are dynamic, created and destroyed at runtime.',
      'Each object gets its own copy of instance fields, but all objects share the same method code.',
      'The <code>new</code> keyword does two things: allocates memory on the heap and calls the constructor.',
      'Reference variables (<code>Dog rex</code>) live on the stack and point to heap objects.',
      'Multiple references can point to the same object — changing through one reference is visible through the others.'
    ]
  },
  {
    title: 'The Life Cycle of an Object in Java',
    content: '<p>Every object goes through the same rough life cycle: <strong>allocation → initialization → use → garbage collection</strong>.</p><p>Allocation happens when you call <code>new</code>. Initialization happens inside the constructor (and field initializers). During the object\'s lifetime, you call methods that read or update its fields. When there are no more <strong>reachable references</strong> to that object, it becomes <em>eligible for garbage collection</em> and the JVM can reclaim its memory.</p>',
    table: {
      headers: ['Stage', 'Where It Happens', 'What You Control', 'Common Mistakes'],
      rows: [
        ['Allocation', 'Heap', 'Whether/when you call <code>new</code>', 'Allocating inside tight loops without need, causing GC pressure'],
        ['Initialization', 'Constructor + field initializers', 'Validation, default values, invariants', 'Leaving objects in half-initialized or invalid states'],
        ['Use', 'Everywhere you call methods', 'Behavior and mutations of fields', 'Letting too many unrelated classes mutate the same object'],
        ['Garbage collection', 'JVM', 'Releasing references when done', 'Keeping references in static fields/long-lived collections (memory leaks)']
      ]
    }
  },
  {
    title: 'The this Keyword & Aliasing',
    content: '<p><code>this</code> refers to the <strong>current object</strong> whose method or constructor is running. It is especially important when constructor parameters have the same names as fields, or when you want to call another constructor in the same class.</p><p><strong>Aliasing</strong> happens when two or more references point to the <em>same</em> object. This is powerful (you can share objects) but also dangerous (unexpected changes if you forget that two variables share state).</p>',
    code: 'public class Dog {\n    private String name;\n    private String breed;\n    private int age;\n\n    // Constructor uses parameter names identical to fields\n    public Dog(String name, String breed, int age) {\n        this.name = name;    // \"this.name\" = field, \"name\" = parameter\n        this.breed = breed;\n        this.age = age;\n    }\n\n    public void birthday() {\n        this.age++;          // increment this specific dog\'s age\n    }\n}\n\npublic class AliasDemo {\n    public static void main(String[] args) {\n        Dog a = new Dog(\"Rex\", \"Husky\", 3);\n        Dog b = a;                 // alias — both point to SAME object\n\n        b.birthday();              // increments age on that one Dog\n\n        // Both references see the updated age\n        System.out.println(a == b);           // true (same object)\n        System.out.println(a.toString());\n        System.out.println(b.toString());\n    }\n}',
    codeLang: 'Java',
    warn: 'Aliasing bugs are subtle: code that <em>looks</em> like it is working on “two dogs” might actually be mutating the same underlying instance. When designing APIs, prefer immutable objects or defensive copies if you do not want callers to share state.'
  }
]);

// ─── W3 CONCEPT 1: Encapsulation ─────────────────────
addSections('w3', 1, [
  {
    title: 'What Encapsulation Really Protects',
    content: '<p><strong>Encapsulation</strong> is about <em>controlling access</em> to an object’s internal state so that invariants (rules that must always be true) cannot be broken accidentally.</p><p>In Java, this means: make fields <code>private</code>, expose behavior through <code>public</code> methods, and enforce validation and business rules in those methods. Callers do not set raw fields; they ask the object to perform operations on itself.</p>',
    keyPoints: [
      'Encapsulation is not just about syntax (<code>private</code>) — it is about enforcing invariants.',
      'Callers should not be able to put an object into an impossible state (e.g., negative balance, null name).',
      'Public API should be smaller than internal implementation — fewer public methods is usually better.',
      'Changing internals (field names, extra helper methods) should not break callers if the API is well-encapsulated.',
      'Good encapsulation makes refactoring and debugging <em>far</em> easier.'
    ]
  },
  {
    title: 'Access Modifiers in Practice',
    content: '<p>Java gives you four access modifiers to control visibility:</p>',
    table: {
      headers: ['Modifier', 'Visible From', 'Typical Use'],
      rows: [
        ['<code>private</code>', 'Same class only', 'Fields, helper methods that must never leak out'],
        ['<code>(default)</code>', 'Same package', 'Package-internal helpers; keep APIs small between packages'],
        ['<code>protected</code>', 'Same package + subclasses', 'Hooks for subclasses to override or use'],
        ['<code>public</code>', 'Everywhere', 'Carefully designed API surface other code depends on']
      ]
    },
    note: 'A good heuristic: start as restrictive as possible (<code>private</code>) and relax visibility <em>only</em> when you have a concrete need.'
  },
  {
    title: 'Designing a Robust BankAccount',
    content: '<p>The <code>BankAccount</code> example is a classic encapsulation exercise. The critical part is where you put the <strong>rules</strong> — they must live <em>inside</em> the class, not spread across random callers.</p>',
    code: 'public class BankAccount {\n    private final String id;\n    private final String owner;\n    private double balance;\n\n    public BankAccount(String id, String owner, double initialBalance) {\n        if (id == null || id.isBlank()) {\n            throw new IllegalArgumentException(\"id must not be blank\");\n        }\n        if (owner == null || owner.isBlank()) {\n            throw new IllegalArgumentException(\"owner must not be blank\");\n        }\n        if (initialBalance < 0) {\n            throw new IllegalArgumentException(\"Balance cannot be negative\");\n        }\n        this.id = id;\n        this.owner = owner;\n        this.balance = initialBalance;\n    }\n\n    public double getBalance() {\n         return balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Deposit must be positive\");\n        }\n        balance += amount;\n    }\n\n    public void withdraw(double amount) {\n        if (amount <= 0) {\n            throw new IllegalArgumentException(\"Must be positive\");\n        }\n        if (amount > balance) {\n            throw new IllegalStateException(\"Insufficient funds\");\n        }\n        balance -= amount;\n    }\n}\n\n// Callers cannot set balance directly:\nBankAccount acc = new BankAccount(\"A-001\", \"Alice\", 100);\nacc.deposit(50);    // balance = 150\nacc.withdraw(200);  // throws IllegalStateException — cannot go below 0',
    codeLang: 'Java',
    warn: 'If you ever find <code>public</code> fields in your domain model, that is almost always a design smell. Replace them with private fields + methods that enforce rules.'
  }
]);

// ─── W3 CONCEPT 2: Inheritance ───────────────────────
addSections('w3', 2, [
  {
    title: 'IS-A Relationships & Code Reuse',
    content: '<p><strong>Inheritance</strong> lets one class (the child or subclass) reuse fields and methods from another class (the parent or superclass). In Java you express this with the <code>extends</code> keyword.</p><p>The key test: if you can truthfully say “X <strong>is a</strong> Y” (<code>SavingAccount is-a BankAccount</code>), inheritance is likely appropriate. If you are really saying “X <strong>has a</strong> Y” (<code>Order has-a Customer</code>), then you probably want <strong>composition</strong>, not inheritance.</p>',
    keyPoints: [
      'Subclass inherits <em>non-private</em> fields and methods from its superclass.',
      'Use <code>super(...)</code> to delegate to the parent constructor, and it must be the first statement.',
      'Overriding allows a subclass to change behavior while keeping the same method signature.',
      'Mark overridden methods with <code>@Override</code> to catch mistakes at compile time.',
      'Prefer composition over inheritance when relationships are not truly “is-a”.'
    ]
  },
  {
    title: 'Constructors, super and this',
    content: '<p>When you create a subclass object, Java <strong>always</strong> constructs the superclass part first. If you don\'t explicitly call <code>super(...)</code>, the compiler inserts a call to the no-arg parent constructor.</p>',
    code: 'public class Animal {\n    protected String name;\n\n    public Animal(String name) {\n        this.name = name;\n        System.out.println(\"Creating Animal \" + name);\n    }\n}\n\npublic class Dog extends Animal {\n    private String breed;\n\n    public Dog(String name, String breed) {\n        super(name);           // must be first line\n        this.breed = breed;\n    }\n\n    @Override\n    public String toString() {\n        return name + \" (\" + breed + \")\";\n    }\n}\n\nDog d = new Dog(\"Max\", \"Husky\");\n// Output:\n// Creating Animal Max\n// (then Dog constructor body runs)',
    codeLang: 'Java',
    note: 'If your superclass does not have a no-arg constructor, you <em>must</em> call one of its existing constructors explicitly with <code>super(...)</code>.'
  },
  {
    title: 'Polymorphism Preview',
    content: '<p>Inheritance enables <strong>polymorphism</strong>: code written against a parent type can work with any subclass instance. The JVM chooses the correct overridden method implementation at <strong>runtime</strong>, based on the <em>actual</em> object type.</p>',
    code: 'Animal a1 = new Dog(\"Max\", \"Husky\");   // upcasting to Animal\nAnimal a2 = new Cat(\"Luna\");          // another subclass\n\n// Both calls go through the same reference type (Animal),\n// but the JVM dispatches to different implementations.\na1.eat();   // Dog.eat if overridden\n a2.eat();   // Cat.eat if overridden',
    codeLang: 'Java',
    warn: 'Downcasting (<code>(Dog) someAnimal</code>) is a code smell unless you have a very specific reason. If you find yourself downcasting often, redesign your type hierarchy or rely more on interfaces.'
  }
]);

// ─── W4 CONCEPT 0: Interfaces ────────────────────────
addSections('w4', 0, [
  {
    title: 'Interfaces as Contracts',
    content: '<p>An <strong>interface</strong> is a pure contract: it states <em>what</em> operations are available without committing to <em>how</em> they are implemented. Any class that <code>implements</code> an interface must provide those methods.</p><p>This lets you write code that depends on <strong>capabilities</strong> (e.g., <code>Drawable</code>, <code>Resizable</code>) instead of concrete classes, which is the foundation of flexible design and testability.</p>',
    keyPoints: [
      'All interface methods are implicitly <code>public</code> and <code>abstract</code> (unless they are <code>default</code> or <code>static</code>).',
      'A class can implement multiple interfaces — Java’s solution to “multiple inheritance”.',
      'Interfaces decouple clients from concrete implementations and make mocking/testing easier.',
      'Prefer depending on interfaces in your APIs and fields (e.g., <code>List</code> instead of <code>ArrayList</code>).'
    ]
  },
  {
    title: 'Default & Static Methods (Java 8+)',
    content: '<p>Before Java 8, you could not add new methods to an interface without breaking all implementations. <strong>Default methods</strong> solve this by letting you provide a method body directly inside the interface.</p><p><strong>Static methods</strong> in interfaces are utility methods conceptually tied to the contract (e.g., factory helpers).</p>',
    code: 'public interface Drawable {\n    void draw();                      // abstract by default\n\n    default void clear() {            // concrete default implementation\n        System.out.println(\"Clearing...\");\n    }\n\n    static Drawable noop() {          // static utility\n        return () -> {};             // lambda implementing draw()\n    }\n}\n\npublic class Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}',
    codeLang: 'Java',
    warn: 'Use default methods sparingly. If interfaces accumulate too much behavior, they can become “fat” and hard to evolve.'
  },
  {
    title: 'Programming to Interfaces',
    content: '<p>The core design rule is: <strong>“Program to an interface, not an implementation.”</strong> That means variables, parameters, and return types should prefer the most general contract that still expresses your needs.</p>',
    code: 'public void renderScene(List<Drawable> drawables) {   // List interface, not ArrayList\n    for (Drawable d : drawables) {\n        d.draw();                  // works for ANY Drawable implementation\n    }\n}\n\n// Elsewhere in your code\nList<Drawable> shapes = new ArrayList<>();\nshapes.add(new Circle());\nshapes.add(new Rectangle());\nrenderScene(shapes);               // caller decides concrete types',
    codeLang: 'Java',
    note: 'This style makes it trivial to plug in new implementations (e.g., <code>Triangle</code>) without changing existing client code.'
  }
]);

// ─── W4 CONCEPT 1: Abstract Classes vs Interfaces ────
addSections('w4', 1, [
  {
    title: 'Choosing Between Abstract Class and Interface',
    content: '<p>Both abstract classes and interfaces define contracts, but they solve slightly different problems.</p><p>Use an <strong>abstract class</strong> when multiple related classes share <em>state + partial implementation</em>. Use an <strong>interface</strong> when you want to describe a capability that may apply to otherwise unrelated classes.</p>',
    table: {
      headers: ['Feature', 'Abstract Class', 'Interface'],
      rows: [
        ['Constructors', 'Yes', 'No'],
        ['Instance fields', 'Yes (shared state)', 'No instance state (before Java 9 module features)'],
        ['Multiple inheritance', 'No (single parent only)', 'Yes (class can implement many interfaces)'],
        ['Use case', 'IS-A relationships within a family of types', 'Capabilities (can-do) cross-cutting many types']
      ]
    }
  },
  {
    title: 'Template Method Pattern with Abstract Classes',
    content: '<p>A common use of abstract classes is the <strong>Template Method</strong> pattern: the base class defines the <em>algorithm skeleton</em> while letting subclasses customize certain steps.</p>',
    code: 'public abstract class DataExporter {\n    public final void export() {       // template method\n        connect();\n        fetchData();\n        format();\n        close();\n    }\n\n    protected abstract void connect();\n    protected abstract void fetchData();\n    protected abstract void format();\n    protected void close() {\n        System.out.println(\"Closing resources\");\n    }\n}\n\npublic class CsvExporter extends DataExporter {\n    @Override protected void connect() { /* connect to DB */ }\n    @Override protected void fetchData() { /* query */ }\n    @Override protected void format() { /* write CSV */ }\n}',
    codeLang: 'Java',
    note: 'The <code>final</code> on <code>export()</code> prevents subclasses from changing the overall algorithm order, while still letting them customize pieces.'
  }
]);

// ╔═══════════════════════════════════════════════════╗
// ║  AUTO-MDN EXPANSION (fallback for all concepts)   ║
// ╚═══════════════════════════════════════════════════╝
// If a concept does not yet have handcrafted `sections`, generate a
// structured, MDN-style set of sections from the existing fields.
function autoMDNExpandAllConcepts() {
  if (typeof WEEKS !== 'object' || !WEEKS) return;

  const mk = {
    escHtml(s) {
      return String(s ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    },
    bulletsToHtml(list) {
      if (!Array.isArray(list) || !list.length) return '';
      return `<ul>${list.map(x => `<li>${mk.escHtml(x)}</li>`).join('')}</ul>`;
    }
  };

  Object.values(WEEKS).forEach(week => {
    if (!week?.concepts?.length) return;
    week.concepts.forEach(c => {
      if (!c || (Array.isArray(c.sections) && c.sections.length)) return;

      const title = c.title || 'Concept';
      const desc = c.desc ? `<p>${mk.escHtml(c.desc)}</p>` : '';
      const keyPoints = Array.isArray(c.keyPoints) && c.keyPoints.length
        ? `<p><strong>Key ideas:</strong></p>${mk.bulletsToHtml(c.keyPoints)}`
        : '';

      const exampleIntro = c.code
        ? `<p>This section gives you a concrete reference example you can copy, run, and tweak.</p>`
        : `<p>Try explaining this concept out loud, then write a tiny example that proves you understand it.</p>`;

      const pitfalls = (() => {
        const kp = (c.keyPoints || []).join(' ').toLowerCase();
        const common = [];
        if (kp.includes('null')) common.push('Treating <code>null</code> like a normal value (leads to runtime errors).');
        if (kp.includes('==') || kp.includes('equals')) common.push('Using the wrong equality check for the type you’re working with.');
        if (kp.includes('async') || kp.includes('promise') || kp.includes('await')) common.push('Forgetting error handling (<code>try/catch</code> or <code>.catch()</code>) in async flows.');
        if (kp.includes('thread') || kp.includes('race') || kp.includes('synchron')) common.push('Sharing mutable state across threads without proper synchronization.');
        if (kp.includes('transaction') || kp.includes('jpa') || kp.includes('hibernate')) common.push('N+1 queries / lazy-loading surprises and missing indexes.');
        if (!common.length) common.push('Learning the syntax but not practicing the “when to use it” decision-making.');
        return `<ul>${common.map(x => `<li>${x}</li>`).join('')}</ul>`;
      })();

      c.sections = [
        {
          title: 'Overview',
          content: `${desc}${keyPoints || '<p>Read the definition, then immediately build a tiny example to test your understanding.</p>'}`
        },
        {
          title: 'Mental model',
          content: `<p>Don’t memorize—build intuition. Ask: <strong>what problem does "${mk.escHtml(title)}" solve</strong>, and <strong>what trade-off does it introduce</strong>?</p>
          <p>Then validate with a “smallest possible” program or snippet.</p>`
        },
        {
          title: 'Example',
          content: exampleIntro,
          code: c.code || '',
          codeLang: c.codeLang || 'Example'
        },
        {
          title: 'Common pitfalls',
          content: `<p>These are the mistakes that cause most bugs in this topic:</p>${pitfalls}`,
          warn: 'If you hit a bug, reduce your code to the smallest reproduction and inspect assumptions line-by-line.'
        },
        {
          title: 'Practice checklist (do this today)',
          content: `<ul>
            <li>Rewrite the example from memory.</li>
            <li>Change one thing and predict the output before running.</li>
            <li>Explain the “why” in 3 sentences.</li>
            <li>Create 2 edge cases and make your code handle them.</li>
          </ul>`,
          note: 'Progress comes from tight feedback loops: write → run → inspect → refine.'
        }
      ];
    });
  });
}

autoMDNExpandAllConcepts();

})();
