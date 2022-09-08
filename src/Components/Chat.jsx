import React,{useEffect, useState} from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import "../App.css"

import 'react-chat-widget/lib/styles.css';

function Chat() {
  const [messages,setMessages] = useState([])
  const [lastmsg,setLastmsg] = useState("")



  useEffect(() => {
    // var num = 2;
    // var lst= []
    // var LST=[]
    // for(var i=0;i<=num;i++){
    //   var binary = Number(i).toString(2) //Convert decimal to binary
    //   console.log(binary)
    //   lst.push(binary)
    //   LST.push(binary.toString(2).split('1').length-1) //Count number of 1s in binary
    //   console.log("LST",LST)
    // }
    
    getMessages()
  }, []);

  const AddMessageFromUser=(Message)=>{
    fetch(process.env.REACT_APP_BASE_URL + '/AddChatMessageFromUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "aleezah@gmail.com",message:Message,messages:messages })
    })
      .then(response => response.json())
      .then(data => {
        console.log("chat data", data)
      }
      );
  }

  const getMessages=()=>{
    fetch(process.env.REACT_APP_BASE_URL + '/getChatMessages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "aleezah@gmail.com" })
    })
      .then(response => response.json())
      .then(data => {
        var mymsg = data.result[0].messages
        console.log("messages data", data.result[0].messages)
        setLastmsg(mymsg[mymsg.length-1].admin)
        console.log("MSG",mymsg[mymsg.length-1].admin)
      }
      );
  }

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // setMessages(oldArray => [{msg:newMessage,time:currentTime,sender:"User"},...oldArray] );
    AddMessageFromUser(newMessage)
    getMessages()
    setTimeout(()=>{
      addResponseMessage(lastmsg);
    },3000)
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        emojis={true}
        handleNewUserMessage={handleNewUserMessage}
        title="Customer Support"
          subtitle="Welcome to Computer-hi-tech"
      />
    </div>
  );
}

export default Chat;