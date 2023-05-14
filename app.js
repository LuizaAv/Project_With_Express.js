const { Configuration, OpenAIApi } = require("openai");

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000
 


let returnedData

app.get("/question", (req, res) => {   //request example http://localhost:4000/question?message=hello%20world
  const message = req.query.message
  res.send(message)

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  async function askAquestionCHATGPT(text){
      try{
          const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              max_tokens: 2000
            });
          console.log(completion.data.choices[0].text);
      }catch(error){
          console.log(error)
      }
  }

  return askAquestionCHATGPT(message)
})

app.listen(4000, () => console.log(`the server run on the ${PORT} port`))
