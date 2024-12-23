// import axios from "axios";
// import React, { useEffect ,useState } from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function ApiData() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     console.log(post.title)
   
//     //   <h1>{post.title}</h1>
//     //   <p>{post.body}</p>
//     // </div>
//   );
// }


// const ApiData = () => {
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://api.quotable.io/random") // Replace with your valid API endpoint
//       .then(response => {
//         setApiData(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>API Data</h2>
//       {apiData && (
//         <pre>{JSON.stringify(apiData, null, 2)}</pre>
//       )}
//     </div>
//   );
// };






import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteDisplay = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch quote on initial component mount

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuoteData(response.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleButtonClick = () => {
    fetchQuote();
  };

  return (
    <div>
      <h1>Data</h1>
      {quoteData ? (
        <div>
          <p>"{quoteData.content}"</p>
          <p>- {quoteData.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleButtonClick}>Get New Data</button>
    </div>
  );
};

export default QuoteDisplay;



