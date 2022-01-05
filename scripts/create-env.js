const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)
// Con esto ya crearemos un archivo .env en nuestro servidor