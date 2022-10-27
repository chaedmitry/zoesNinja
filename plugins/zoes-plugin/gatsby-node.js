const path = require("path");
const reporter = require("gatsby-cli/lib/reporter");

exports.onCreatePage = async ({ page, actions }, pluginOptions) => {
  reporter.info(`page` + page.path + ` has been created`);
};
