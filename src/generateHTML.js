const generateHtml = (team) => {
  const generateHeader = () => {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>`;
  };

  const generateFooter = () => {
    return `
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"        crossorigin="anonymous"></script>
        </body>
    </html>
      `;
  };

  const addCard = (employee) => {
    return `
    <div class="card" class="col-4 mt-4">
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
