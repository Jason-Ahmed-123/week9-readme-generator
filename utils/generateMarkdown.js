// function to generate the README markdown file (using template literals):

function generateMarkdown(data) {
  return `
  ## Project title:
  # ${data.title}

  ## Description:
  # ${data.description}

  ## Installation steps (if necessary):
  # ${data.installsteps}

  ## User instructions (if necessary):
  # ${data.instructions}

  ## Credits:
  # ${data.credits}

  ## License:
  # ${data.license}

  ## GitHub username:
  # ${data.github}

  ## Questions? Contact me at:
  # ${data.email}
`;
}

module.exports = generateMarkdown;