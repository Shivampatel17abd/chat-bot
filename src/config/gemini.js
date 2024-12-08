// const apiKey = AIzaSyAsr5NKFwudoz4l6vlul0NA4xCneDRSSt8


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

 import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";

  
  const apiKey = "AIzaSyAsr5NKFwudoz4l6vlul0NA4xCneDRSSt8"
  ;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession =  model.startChat({
      generationConfig,
  //  safetySettings: Adjust safety settings
  //  See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }


  export default run;