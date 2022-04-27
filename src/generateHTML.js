const generateHtml = (team) => {
  const generateHeader = () => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>`;
  };

  const generateFooter = () => {
    return `
        </body>
    </html>
      `;
  };

  const addCard = (employee) => {
    return `
    <div class="card">
        <h2>${employee.name}</h2>
        <ul>
            <li>Role: ${employee.getRole()}</li>
            <li>Id: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>${
              employee.getRole() === "Manager"
                ? "Office Number: " + employee.getOfficeNumber()
                : "Github: <a href='https://www.github.com/" +
                  employee.getGithub() +
                  "'>" +
                  employee.getGithub() +
                  "</a>"
            }</li>
        </ul>
    </div>
    `;
  };

  const combineHtml = (team) => {
    //generate header html
    let html = generateHeader();
    //loop through team array
    team.map((employee) => {
      //for each employee in team array, run addCard() on line 21
      html += addCard(employee);
    });
    //add footer
    html += generateFooter();
    return html;
  };

  return combineHtml(team);
};
module.exports = generateHtml;
