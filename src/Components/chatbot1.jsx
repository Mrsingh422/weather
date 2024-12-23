import React, { useState } from 'react';
import './chatbot1.css'; // External CSS file for styling

const Chatboot = () => {
  // Define predefined question-answer pairs
  const predefinedQuestions = [
    { question: 'What is your name?', answer: 'My name is ChatBot.' },
    { question: 'How are you?', answer: 'I am fine, thank you!' },
    { question: 'What can you do?', answer: 'I can provide information and assistance.' },
    { question: 'React', answer: 'React is a JavaScript-based UI development library.'},
    { question: 'Html', answer: 'HTML is the standard markup language for creating Web pages'},
    { question: 'css', answer: 'CSS is used to define styles for your web pages'},
    { question: 'Javascript', answer: 'JavaScript is very Tough programing language for mine.'},
    { question: 'Kaalu', answer: 'Kaalu is also called Kiran Mandyaal and she is from Gughar, Palampur , Himachal'},
    { question: 'Kaalu kitne saal ka hai', answer: 'Kaalu is 25 years old and her DOB: 6,march 1998 and also in document 11,December 1998.'},
    { question: 'Kaalu kisko acha lagta hai', answer: 'Kaalu sagar ko acha lagta hai'},
    { question: 'Kaalu kaha rehta hai', answer: 'kaalu Gughar me rehra hai...'},
    { question: 'Kaalu daily kya khata hai', answer: 'Kaalu daily chawal khata hai...'},
    { question: 'Kaalu ko kon jayda pasand hai', answer: 'Brownie...'},
    { question: 'Hi', answer: `Hello, Sir/Ma'm.`},
    { question: 'who is happy?', answer: `Happy is the biggest bondu in the world. 
      Happy is working in Muth-Maar Profession`},
    { question: 'Ajay', answer: `1. Ajay is Web Developer.
      2. His weight is 100KG.
      3. He is very talkative. 
      `},
    // Add more predefined pairs as needed
  ];

  // States for user input, chat messages, and typing status
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Function to handle user input and generate responses
  const handleInput = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Show typing animation if input is not empty
    if (inputValue.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: inputValue, isUser: true }]);
      setIsTyping(true); // Start typing animation
      // Find matching question-answer pair
      const foundQuestion = predefinedQuestions.find(q => q.question.toLowerCase() === inputValue.toLowerCase());
      // Simulate delay for response
      setTimeout(() => {
        // Prepare response
        let response;
        if (foundQuestion) {
          response = foundQuestion.answer;
        } else {
          response = "I'm sorry, I can't understand.";
        }
        // Add response to messages
        setMessages(prevMessages => [...prevMessages, { text: response, isBot: true }]);
        setIsTyping(false); // Turn off typing animation after response
      }, 2000); // Simulated delay for response
    }
    // Clear user input
    setInputValue('');
  };

  return (
    <div className="container2">
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className={message.isBot ? 'bot-message' : 'user-message'}>
            {message.text}
          </div>
        ))}
        {/* Show typing animation if bot is typing */}
        {isTyping && <div className="bot-message"><div class="typing-indicator">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div></div>}
      </div>
      {/* Input field for user interaction */}
      
    </div>
    <form onSubmit={handleInput} className="input-container"> {/* Wrap input and button inside form */}
        <input type="text" className='input-chat' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type your message..." />
        <button type="submit" className='submit-btn'>Send</button> {/* Change button type to submit */}
      </form>
    </div>
  );
};

export default Chatboot;
