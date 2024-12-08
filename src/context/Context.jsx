
import { createContext, useState } from "react";
import run from '../config/gemini.js'

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input,setInput] = useState("");
    const[prompt,setPromt] = useState("");
    const[prevPrompt,setPrevPrompt] = useState([]);
    const[recentPrompts,setRescentPromots] = useState(false);
    const [showresult,setShowresult] = useState(false);
    const[loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState("");

    const delayPare = (index,nextWord)=>{
       setTimeout(function(){
          setResultData(prev => prev+nextWord)
       },75*index)
    }

    const  newChat = ()=>{
        setLoading(false)
        setShowresult(false);
    }

    const onSent = async(prompt) =>{

        setResultData("");
        setInput("")
        setShowresult(true);
        let response;
        if(prompt !== undefined){
          response = await run(prompt);
          setRescentPromots(prompt)
        } else{
            setPrevPrompt((prev)=>[...prev,input])
            setRescentPromots(input)
            response = await run(input);
        }
        setRescentPromots(input);
        setPrevPrompt(prev=>[...prev,input])
       
        // const response =  await run(input);
        let responseArray = response.split("**");
        let newResponse = "";

        for(let i=0;i<responseArray.length;i++){
            if(i === 0 || i%2 !== 1){
                newResponse +=responseArray[i];
            }else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");

        for(let i= 0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPare(i,nextWord+" ");
        }
        // setResultData(newResponse2);

        setLoading(false);
        setInput("");
        
    }
    

    const contextValue = {
          prevPrompt,
          setPrevPrompt,
          onSent,
          input,
          setInput,
          prompt,
          setPromt,
          loading,
          setLoading,
          showresult,
          setResultData,
          resultData,
          setShowresult,
          recentPrompts,
          setRescentPromots,
          newChat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider