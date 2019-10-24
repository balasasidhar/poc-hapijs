const hanlebars = require("handlebars");

const htmlString = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{{ title }}</title>
  </head>
  <body>
    <div id="root">{{{content}}}</div>
    <script src="./assets/app.bundle.js"></script>
  </body>
</html>
`;

module.exports = hanlebars.compile(htmlString);
