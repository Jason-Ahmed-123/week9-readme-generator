// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          # ${data.description}
          # ${data.installsteps}
          # ${data.instructions}
          # ${data.credits}
          # ${data.license}
          ## Content
`;
}

module.exports = generateMarkdown;
