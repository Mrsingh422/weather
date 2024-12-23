import React, { useState, useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); // Create a ref for the input element

  const predefinedQuestions = [
    { question: 'What is your name?', answer: 'My name is Mr. Singh..' },
    { question: 'Who are you?', answer: 'I am Sagar Singh ..........' },
    { question: 'Where are you from?', answer: 'I am from Kangra, Himachal Pradesh' },
    { question: 'What do you do ?', answer: 'I am learning Web development.'},
    { question: 'React', answer: 'React is a JavaScript-based UI development library.'},
    { question: 'Html', answer: 'HTML is the standard markup language for creating Web pages'},
    { question: 'css', answer: 'CSS is used to define styles for your web pages'},
    { question: 'Javascript', answer: 'JavaScript is very Tough programing language for mine.'},
    { question: 'Kaalu', answer: 'Kaalu is also called Kiran Mandyaal and she is from Gughar, Palampur , Himachal'},
    { question: 'Kaalu kitne saal ka hai', answer: 'Kaalu is 25 years old and her DOB: 6,march 1998 and also in document 11,December 1998.'},
    // Add more 
  ];

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      const message = { text: inputValue, isUser: true };
      setMessages([...messages, message]);
      const answer = findAnswer(inputValue);
      setMessages([...messages, { text: answer, isUser: false }]);
      setInputValue('');
  };

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    
  };

  const handleUpdate = (question) => {
    setInputValue(question);
    // this is remove output 
    let updatedMessages = [...messages];
    setMessages(prevMessages => prevMessages.slice(0, -1));
    setMessages(updatedMessages);
    inputRef.current.focus(); // Focus the input element when click on update button
    
  };


  const nullString = <span className='null-text'>Please Input Question</span>
  const coloredString = <span className="red-text">I'm sorry, I don't understand.</span>;
  
  const findAnswer = (question) => {
     const foundQuestion = predefinedQuestions.find(q => q.question.toLowerCase() === question.toLowerCase());

     if (foundQuestion) {
      return (
        <>
        <div className="output-main">
          <div className="output-main-1">
            <div className='Ques'><span className='Ques-color'>Q.</span> {inputValue.toUpperCase()} ?</div>
            <div><span className='Ques-color'>Ans.</span> {foundQuestion.answer}</div>
          </div>

          <div className="options">
            <button className='delete-btn' onClick={() => handleDelete(messages.length)}>X</button>
            <button className='update-btn' onClick={() => handleUpdate(foundQuestion.question)}>Update</button>
          </div>
        </div>
        </>
      );}


    // if (foundQuestion) {
    //   return foundQuestion.answer;
    // }
     if (!question) {
      return nullString;
    }
    else{
      return coloredString;
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={inputRef} className='input-field' value={inputValue} onChange={handleInputChange}  />
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default ChatBot;