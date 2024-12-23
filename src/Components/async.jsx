// Simulating fetching marks from an API




function fetchMarks() {
  const randomNumber = Math.floor(Math.random() * (95 - 60)) + 60; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        'Maths': Math.floor(Math.random() * (35)) + 60,
        'Physics': Math.floor(Math.random() * (30)) + 60,
        'Chemistry': Math.floor(Math.random() * (30)) + 60,
        'English':Math.floor(Math.random() * (30)) + 60,
        'Computer': randomNumber,
      }); // Marks for subjects
    }, 2000); // Simulating delay person wise
  });
}

// Function to calculate total marks
async function calculateTotalMarks(person) {
  const marks = await fetchMarks();

  const totalMarks = Object.values(marks).reduce((total, mark) => total + mark, 0);
  console.log(`${person}'s Total Marks = ${totalMarks}`);
  console.log(`${person}'s Subject Marks :`, marks);
}

// Function to handle marksheets for 5 persons
async function handleMarksheets() {
  const persons = ['Sagar', 'Ritik', 'Pritam', 'Manoj', 'Aman'];

  for (const person of persons) {
    console.log(`Processing Marksheet's ${person}...`);
    await calculateTotalMarks(person);
  }
}

// Call the function to handle marksheets
handleMarksheets();
