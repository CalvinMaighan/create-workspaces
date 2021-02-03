const fs = require('fs');
const {
    exec
} = require("child_process");

const iframeContent = fs.readFileSync('./.storybook/manager-static/iframe.html').toString()

const hashRegex = /([a-z0-9])+(?=\.bundle\.js)/;

const hash = iframeContent.match(hashRegex)[0]

exec(`rimraf ./.storybook/manager-static/*${hash}*`)
exec(`rimraf ./.storybook/manager-static/iframe.html`)
