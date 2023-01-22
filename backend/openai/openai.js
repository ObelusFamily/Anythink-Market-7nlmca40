const { Configuration, OpenAIApi } = require("openai");
const p1 = 'sk-ydfDUt15LLi8Ur7cwTpPT'
const p2 = '3BlbkFJpsDbehO1LvY2ozksUs0J'
const configuration = new Configuration({
  apiKey: p1+p2,
});
const openai = new OpenAIApi(configuration)

module.exports = openai