export const PASSWORD = "letmein";

export const BOOT_MESSAGE = ["Ed's Portfolio OS v1.0", "Established 2024", ""];

export const WELCOME_BANNER = [
  "  ______     _  ___  ____  ",
  " | ____| __| |/ _ \\/ ___| ",
  " |  _| / _` | | | \\___ \\ ",
  " | |__| (_| | |_| |___) |",
  " |_____\\__,_|\\___/|____/ ",
  "",
  " Welcome to EdOS. Type 'help' to see available commands.",
  "",
];

const aboutData = {
  name: "Edvardas Kozlovas",
  role: "Full-stack engineer",
  location: "Remote",
  bio: ["YEAHHHH I BUILD STUUF"],
  stack: ["next.js....."],
};

const experienceData = [
  {
    company: "BPP",
    role: "Fullstack",
    period: "2022 - Present",
    highlights: ["Serverless"],
    logo: [
      "  #################################################",
      "  #################.             .#################",
      "  ################.               .################",
      "  ###############.                 .###############",
      "  ##############.                   .##############",
      "  ##########-.                         .-##########",
      "  ####+.               .                   .+######",
      "  ####.          .-#######+#######+.          .####",
      "  ###.         -#####################+.        .###",
      "  ##.       .+##########################+       .##",
      "  ##      .###############################-      ##",
      "  ##      +###+       -########.       +###+     ##",
      "  ##      +####-..   .#######+.  ....-#####+     ##",
      "  ##       #########+.+######.+#########-        ##",
      "  ##       -#########-+######-##########.        ##",
      "  ##.       +########-+######-#########+        .##",
      "  ##.       .########-+######-########+.        .##",
      "  ##.        -#######.########.#######+         .##",
      "  ##+         #######-########-######-          +##",
      "  ###.        -######.########+.#####.         .###",
      "  ###.        .######+.      .+######.         .###",
      "  ####.       -#########. .-#########-        .####",
      "  #####.      .##########.##########.        .#####",
      "  ######.      -#########.#########+        .######",
      "  #######+       .+###-.++..-###-.        .########",
      "  #########.        -##########.        .##########",
      "  ##########+.       -########.       .############",
      "  ############-.                   .-##############",
      "  ##############-.               .-################",
      "  ################-.          .-####################",
      "  ###################-.    .-######################",
      "  ######################+.+########################",
      "  #################################################",
    ],
  },
  {
    company: "Zustech",
    role: "Junior Frontend Developer",
    period: "2022 - 2022",
    highlights: ["Collaborated on multi-team React projects"],
    logo: [
      "┌──────────────┐",
      "│    ZUSTECH   │",
      "│   [██████]   │",
      "└──────────────┘",
    ],
  },
];

const projectsData = [
  {
    name: "3D Portfolio",
    description: "This interactive 3D room built with React Three Fiber.",
    tech: ["React", "Three.js", "R3F", "Rapier"],
    url: "https://github.com/EdvardasCode/Portfolio",
  },
];

function formatAbout() {
  const lines = [
    "┌─────────────────────────────────────────┐",
    "│                  ABOUT                  │",
    "└─────────────────────────────────────────┘",
    "",
    `  Name     : ${aboutData.name}`,
    `  Role     : ${aboutData.role}`,
    `  Location : ${aboutData.location}`,
    "",
    "  Bio:",
    ...aboutData.bio.map((line) => `    ${line}`),
    "",
    `  Stack    : ${aboutData.stack.join(", ")}`,
    "",
  ];
  return lines;
}

function formatExperience() {
  const lines = [
    "┌─────────────────────────────────────────┐",
    "│               EXPERIENCE                │",
    "└─────────────────────────────────────────┘",
    "",
  ];

  for (const entry of experienceData) {
    lines.push(...entry.logo);
    lines.push(`  ${entry.company} — ${entry.role}`);
    lines.push(`  ${entry.period}`);
    lines.push("");
    for (const highlight of entry.highlights) {
      lines.push(`    • ${highlight}`);
    }
    lines.push("");
  }

  return lines;
}

function formatProjects() {
  const lines = [
    "┌─────────────────────────────────────────┐",
    "│                PROJECTS                 │",
    "└─────────────────────────────────────────┘",
    "",
  ];

  for (const project of projectsData) {
    lines.push(`  [ ${project.name} ]`);
    lines.push(`    ${project.description}`);
    lines.push(`    Tech : ${project.tech.join(", ")}`);
    lines.push(`    URL  : ${project.url}`);
    lines.push("");
  }

  return lines;
}

const HELP_TEXT = [
  "┌─────────────────────────────────────────┐",
  "│            AVAILABLE COMMANDS           │",
  "└─────────────────────────────────────────┘",
  "",
  "  help        Show this help message",
  "  about       Who am I and what I do",
  "  experience  Work history",
  "  projects    Things I have built",
  "  clear       Clear the terminal",
  "",
];

export function executeCommand(input) {
  const command = input.trim().toLowerCase();

  if (command === "clear") return null;

  if (command === "help") return HELP_TEXT;

  if (command === "about") return formatAbout();

  if (command === "experience") return formatExperience();

  if (command === "projects") return formatProjects();

  return [
    `  Command not found: '${input.trim()}'. Type 'help' for a list of commands.`,
    "",
  ];
}
