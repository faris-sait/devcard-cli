#!/usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");

const data = {
  name: chalk.white("Name:") + chalk.cyan(" Mohammed Faris Sait"),
  about: chalk.white("About:") + chalk.magenta(" Passionate Software developer and AI enthusiast"),
  website: chalk.white("Portfolio:") + chalk.blue("https://resume-portfolio-site.vercel.app"),
  github: chalk.white("GitHub:") + chalk.green("https://github.com/faris-sait"),
  email: chalk.white("Email:") + chalk.red("mailto:farissait@gmail.com"),
  linkedin: chalk.white("LinkedIn:") + chalk.yellow("https://www.linkedin.com/in/farissait/"),

  languages: chalk.white("Languages:") +
    chalk.yellow(" Python ") +
    chalk.cyan(" Java ") +
    chalk.white(" C ") +
    chalk.green(" JavaScript ") +
    chalk.magenta(" Kotlin "),

  web: chalk.white("Web Technologies:") +
    chalk.blue(" HTML ") +
    chalk.yellow(" CSS ") +
    chalk.cyan(" React ") +
    chalk.green(" Node.js ") +
    chalk.magenta(" FastAPI "),

  databases: chalk.white("Databases & Tools:") +
    chalk.cyan(" SQL ") +
    chalk.red(" Git ") +
    chalk.green(" GitHub "),

  specializations: chalk.white("Specializations:") +
    chalk.yellow(" Machine Learning ") +
    chalk.cyan(" OpenCV ") +
    chalk.red(" Cybersecurity ") +
    chalk.green(" Cloud Computing "),

  systems: chalk.white("Systems:") +
    chalk.cyan(" Linux ") +
    chalk.blue(" Windows ")
};

const output = `
${data.name}
${data.about}
${data.website}
${data.github}
${data.email}
${data.linkedin}

${data.languages}
${data.web}
${data.databases}
${data.specializations}
${data.systems}
`;

console.log(
  boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan"
  })
);
