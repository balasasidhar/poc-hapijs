const jsLogger = require("js-logger");
const chalk = require("chalk");

jsLogger.useDefaults();

module.exports = {
  log: (...messages) => jsLogger.log(chalk.white(...messages)),
  info: (...messages) => jsLogger.info(chalk.blue(...messages)),
  warn: (...messages) => jsLogger.warn(chalk.yellow(...messages)),
  error: (...messages) => jsLogger.error(chalk.red(...messages)),
  success: (...messages) => jsLogger.log(chalk.green(...messages)),
  trace: (...messages) => jsLogger.error(chalk.black.bgYellow(...messages)),
  debug: (...messages) => jsLogger.log(chalk.black.bgBlue(...messages))
};
