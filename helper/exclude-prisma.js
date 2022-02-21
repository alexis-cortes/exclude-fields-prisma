const { Prisma } = require("@prisma/client");

const exclude = (modelName, fields) => {
  let modelFields = {
    ...Prisma[`${firstLetterUpperCase(modelName)}ScalarFieldEnum`],
  };
  fields.forEach((field) => delete modelFields[field]);
  Object.keys(modelFields).forEach((key) => (modelFields[key] = true));
  return modelFields;
};

const firstLetterUpperCase = (word) => {
  let upperCase = word.charAt(0).toUpperCase() + word.slice(1);
  return upperCase;
};

module.exports = {
  exclude,
};
