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
      body: `<p>The SDLC consists of several phases to deliver quality software.</p>`,
      icon: getTopicIcon("software_engineering"),
    },
    {
      title: "2. Methodologies",
      body: `<p>Common methodologies include Waterfall and Agile.</p>`,
    },
    {
      title: "3. Quality Assurance & DevOps",
      body: `<p>Automation, CI/CD, and IaC improve software delivery.</p>`,
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
      body: `<p>Sorting, searching, and graph algorithms are foundational.</p>`,
      icon: getTopicIcon("algorithms"),
    },
    {
      title: "2. Hash Algorithms",
      body: `<p>Hashes provide fixed-length representations for integrity checks.</p>`,
    },
    {
      title: "3. Performance Considerations",
      body: `<p>Analyze time and space complexity to optimize algorithms.</p>`,
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
      body: `<p>Design principles to make software more maintainable and scalable.</p>`,
      icon: getTopicIcon("software_design"),
    },
    {
      title: "2. Common Design Patterns",
      body: `<p>Reusable patterns to solve recurring problems in software design.</p>`,
    },
    {
      title: "3. UML Diagrams",
      body: `<p>Visual representations of system structure and behavior.</p>`,
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
      body: `<p>Iterative delivery with stakeholder feedback and continuous improvement.</p>`,
      icon: getTopicIcon("project_management"),
    },
    {
      title: "2. Key Ceremonies",
      body: `<p>Planning, daily standups, reviews, and retrospectives.</p>`,
    },
    {
      title: "3. Roles & Artifacts",
      body: `<p>Product Owner, Scrum Master, and the team maintain the backlog and track progress.</p>`,
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
