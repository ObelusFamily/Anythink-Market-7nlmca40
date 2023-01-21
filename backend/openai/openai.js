const { Configuration, OpenAIApi } = require("openai");
const p1 = 'sk-R8pMPzbbnqz'
const p2 = 'RAetjOnFBT3BlbkFJO4'
const p3 = 'uSeTMPYDyfCYPPrGTn'
const configuration = new Configuration({
  apiKey: p2+p2+p3,
});
const openai = new OpenAIApi(configuration)

module.exports = openai