import express from "express";
import fetch from "node-fetch";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Helper: fetch a random inspirational quote
async function fetchQuote() {
  const url = `https://zenquotes.io/api/random`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return `“${data[0].q}” — ${data[0].a}`;
  } catch {
    return "“Stay hungry, stay foolish.” — Steve Jobs";
  }
}

// Dynamically load simple-icons ESM
let simpleIcons;
async function loadIcons() {
  simpleIcons = await import("simple-icons");
}
await loadIcons();

// Helper: get the icon SVG for a given page/topic
function getTopicIcon(name) {
  const map = {
    software_engineering: "siGithub",
    algorithms: "siPython",
    software_design: "siSketch",
    project_management: "siJira",
  };
  const iconKey = map[name];
  const icon = simpleIcons[iconKey];
  return icon ? icon.svg : "";
}

// Routes

app.get("/", async (req, res) => {
  res.locals.quote = await fetchQuote();
  res.render("index");
});

app.get("/software_engineering", async (req, res) => {
  res.locals.quote = await fetchQuote();
  res.locals.sections = [
    {
      title: "1. Software Development Life Cycle (SDLC)",
      body: `<p>The SDLC consists of:</p>

          <ul>
            <li>
              <strong>Planning:</strong> Define scope, budget, and schedule.
            </li>
            <li>
              <strong>Requirements:</strong> Gather functional and
              non‐functional needs.
            </li>
            <li>
              <strong>Design:</strong> High‐level and detailed design
              specifications.
            </li>
            <li>
              <strong>Implementation:</strong> Coding, code reviews, and version
              control.
            </li>
            <li>
              <strong>Testing:</strong> Unit, integration, system, and
              acceptance tests.
            </li>
            <li>
              <strong>Maintenance:</strong> Patches, updates, and continuous
              improvement.
            </li>
          </ul>`,
      icon: getTopicIcon("software_engineering"),
    },
    {
      title: "2. Methodologies",
      body: `      <aside
        style="
          background: #dfe6e9;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
        "
      >
        <h3>Waterfall vs. Agile</h3>
        <p>
          Waterfall is linear and rigid; Agile is iterative and adaptive. Many
          teams adopt a hybrid (e.g. “Wagile”) to combine planning with
          flexibility.
        </p>
      </aside>`,
    },
    {
      title: "3. Quality Assurance & DevOps",
      body: `      <p>Modern pipelines include:</p>

      <ul>
        <li>Continuous Integration (CI) with automated builds.</li>
        <li>Continuous Delivery (CD) for rapid, reliable deployments.</li>
        <li>Infrastructure as Code (IaC) to manage provisioning.</li>
      </ul>
`,
    },
  ];
  res.locals.sources = [
    {
      text: "Systems Development Life Cycle – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Systems_development_life_cycle",
    },
    {
      text: "Agile 101 – Agile Alliance",
      url: "https://www.agilealliance.org/agile101/",
    },
    {
      text: "What is DevOps? – Red Hat",
      url: "https://www.redhat.com/en/topics/devops/what-is-devops",
    },
  ];
  res.render("software_engineering");
});

app.get("/algorithms", async (req, res) => {
  res.locals.quote = await fetchQuote();
  res.locals.sections = [
    {
      title: "1. Classic Algorithms",
      body: `<ul>
            <li>
              <strong>Sorting:</strong> Quick Sort (O(n log n)), Merge Sort,
              Heap Sort
            </li>
            <li>
              <strong>Searching:</strong> Binary Search (O(log n)),
              Interpolation Search
            </li>
            <li>
              <strong>Graph:</strong> Dijkstra’s, A* for shortest paths; DFS/BFS
              for traversal
            </li>
          </ul>`,
      icon: getTopicIcon("algorithms"),
    },
    {
      title: "2. Hash Algorithms",
      body: `<p>Cryptographic hashes map input data to fixed-size digests:</p>
      <ul>
        <li>
          <strong>MD5:</strong> 128-bit, fast but broken for collision
          resistance.
        </li>
        <li><strong>SHA-1:</strong> 160-bit, also deprecated for security.</li>
        <li>
          <strong>SHA-256:</strong> 256-bit, industry standard for integrity
          checks.
        </li>
      </ul>

      <figure
        style="
          background: #ecf0f1;
          padding: 0.5rem;
          border-radius: 4px;
          overflow-x: auto;
        "
      >
        <pre>
// Javascript: simple rolling hash
function hash(s) {
    let h = 0;
    for (let c of s) {
        h = ((h &lt;&lt; 5) - h) + c.charCodeAt(0);
        h |= 0;  // convert to 32-bit
    }
    return h &gt;&gt;&gt; 0;
}
            </pre
        >
        <figcaption
          style="font-size: 0.9rem; color: #7f8c8d; text-align: center"
        >
          Fig.1 – Rolling hash example.
        </figcaption>
      </figure>`,
    },
    {
      title: "3. Performance Considerations",
      body: `      <p>
        Always analyze <em>time complexity</em> and
        <em>space complexity</em> (Big-O notation). Choose in-place vs.
        out-of-place algorithms based on memory constraints.
      </p>
`,
    },
  ];
  res.locals.sources = [
    {
      text: "Sorting algorithm – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
    },
    {
      text: "Binary search algorithm – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Binary_search_algorithm",
    },
    {
      text: "Cryptographic hash function – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
    },
  ];
  res.render("algorithms");
});

app.get("/software_design", async (req, res) => {
  res.locals.quote = await fetchQuote();
  res.locals.sections = [
    {
      title: "1. SOLID Principles",
      body: `<ul>
            <li><strong>S:</strong> Single Responsibility</li>
            <li><strong>O:</strong> Open/Closed</li>
            <li><strong>L:</strong> Liskov Substitution</li>
            <li><strong>I:</strong> Interface Segregation</li>
            <li><strong>D:</strong> Dependency Inversion</li>
          </ul>`,
      icon: getTopicIcon("software_design"),
    },
    {
      title: "2. Common Design Patterns",
      body: ` <ul>
        <li><strong>Creational:</strong> Singleton, Factory Method</li>
        <li><strong>Structural:</strong> Adapter, Decorator, Facade</li>
        <li><strong>Behavioral:</strong> Observer, Strategy, Command</li>
      </ul>`,
    },
    {
      title: "3. UML Diagrams",
      body: `<p>
        Use class, sequence, and state diagrams to model and communicate
        architecture.
      </p>
      <aside
        style="
          background: #dfe6e9;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
        "
      >
        <h3>Design Tip</h3>
        <p>Favor composition over inheritance to reduce tight coupling.</p>
      </aside>`,
    },
  ];
  res.locals.sources = [
    {
      text: "SOLID (object-oriented design) – Wikipedia",
      url: "https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)",
    },
    {
      text: "Design Patterns – Refactoring.Guru",
      url: "https://refactoring.guru/design-patterns",
    },
    { text: "UML – UML.org", url: "https://www.uml.org/" },
  ];
  res.render("software_design");
});

app.get("/project_management", async (req, res) => {
  res.locals.quote = await fetchQuote();
  res.locals.sections = [
    {
      title: "1. Agile Framework",
      body: `<p>Agile is all about iterative delivery:</p>
          <ul>
            <li>2- to 4-week sprints</li>
            <li>Continuous feedback from stakeholders</li>
            <li>Regular retrospectives for improvement</li>
          </ul>`,
      icon: getTopicIcon("project_management"),
    },
    {
      title: "2. Key Ceremonies",
      body: `<ul>
        <li>
          <strong>Sprint Planning:</strong> Define sprint goal and backlog
          items.
        </li>
        <li>
          <strong>Daily Stand-up:</strong> Quick sync: What I did, will do,
          blockers.
        </li>
        <li>
          <strong>Sprint Review:</strong> Demo completed work to stakeholders.
        </li>
        <li>
          <strong>Retrospective:</strong> Reflect on what went well and what to
          improve.
        </li>
      </ul>`,
    },
    {
      title: "3. Roles & Artifacts",
      body: `<p>
        <strong>Product Owner:</strong> Prioritizes backlog
        <strong>Scrum Master:</strong> Facilitates process
        <strong>Team:</strong> Delivers the work
      </p>
      <p>
        Artifacts include the Product Backlog, Sprint Backlog, and Burndown
        Charts.
      </p>`,
    },
  ];
  res.locals.sources = [
    {
      text: "Agile software development – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Agile_software_development",
    },
    {
      text: "The Scrum Guide – Scrum.org",
      url: "https://www.scrum.org/resources/scrum-guide",
    },
    {
      text: "Scrum Artifacts – Mountain Goat Software",
      url: "https://www.mountaingoatsoftware.com/agile/scrum/artifacts",
    },
  ];
  res.render("project_management");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
