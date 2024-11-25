// customParsers/lowerCaseParser.js
import parseOptions from "i18next-options-parser";

const lowerCaseParser = (options) => ({
  type: "object",
  value: Object.keys(options).reduce((result, key) => {
    result[key.toLowerCase()] = options[key];
    return result;
  }, {}),
});

parseOptions.parsers["lower-case"] = lowerCaseParser;
