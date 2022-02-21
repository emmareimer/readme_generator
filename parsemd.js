let licenseBadge = "";
let licenseDescription = "";

// Switch statement to get license badge and description
function getLicenseDetails(license) {

    switch (license) {
        case "apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            licenseDescription = "Apache License Version 2.0"
            break;
        case "boost":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
            licenseDescription = "Boost Software License 1.0"
            break;
        case "bsd2-clause":
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
            licenseDescription = "The 2-Clause BSD License"
            break;
        case "bsd3-clause":
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            licenseDescription = "The 3-Clause BSD License"
            break;
        case "creative commons":
            licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
            licenseDescription = "CC0 1.0 Universal "
            break;
        case "eclipse":
            licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
            licenseDescription = "Eclipse Public License 1.0"
            break;
        case "gnu":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            licenseDescription = "GNU GPL v3"
            break;
        case "mit":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            licenseDescription = "The MIT License"
            break;
        case "mozilla":
            licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            licenseDescription = "Mozilla Public License 2.0"
            break;

        default:
            break;
    }

    return {licenseBadge, licenseDescription}
}

const parser = ({email, github, title, description, installation, license, usage, contributing, tests, sources}) => {
    
    const {licenseBadge, licenseDescription} = getLicenseDetails(license);
// String for readme template
    return `

# ${title} ${licenseBadge}
  
## Description
${description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Sources](#sources)

## Installation
${installation}
  
## Usage
${usage}

## License
${licenseDescription}
    
## Contributing
${contributing}

## Tests
${tests}

## Questions?\n
Contact Info:\n
Github profile: ${github}\n
Email: ${email}

## Sources
${sources}
  
    `;
}

// Connects parsemd to index.js
  module.exports = parser