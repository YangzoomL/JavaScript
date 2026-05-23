const featuresList = document.querySelector("#features-list");
const sponsorsContainer = document.querySelector("#sponsors");
const teamSection = document.querySelector("#team-list");
const postsContainer = document.querySelector("#posts");
const statusText = document.querySelector("#status");


//button
const learnMoreButton = document.querySelector("#learn-more-btn");
const aboutText = document.querySelector("#about-text");
const themeToggle = document.querySelector("#theme-btn");

// Form
const waitListForm = document.querySelector("#waitlist-form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const waitListMessage = document.querySelector("#form-message");

const sponsors = [
  {
    name: "TechFlow",
    description: "Cloud tools for modern teams"
  },
  {
    name: "CloudBase",
    description: "Infrastructure support for startups"
  },
  {
    name: "DevLaunch",
    description: "Developer tools for product teams"
  }, 

  //ex1
  {
    name: "OpenAI",
    description: "AI models and APIs for text, image, and automation"
  },

  {
    name: "DataStream",
    description: "Real-time data analytics and visualization"
  }


  

];

const features = [
  "AI-powered dashboard",
  "Team collaboration",
  "Advanced analytics",

  //ex 2

    "Customizable workflows",
    "Integrations with popular tools"


];

//ex 3
const team = [
  { name: "Alex", role: "Founder" },
  { name: "Maya", role: "Designer" },
  { name: "Sam", role: "Developer" }
];


//render functions

const renderTeam = () => {
    teamSection.innerHTML = "";

    team.forEach((member) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;

        teamSection.appendChild(card);
    });
};


const renderSponsors = () => {
  sponsorsContainer.innerHTML = "";

  sponsors.forEach((sponsor) => {
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
      <h3>${sponsor.name}</h3>
      <p>${sponsor.description}</p>
    `;

    sponsorsContainer.appendChild(card);
  });
};



const renderFeatures = () => {
  featuresList.innerHTML = "";

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;

    featuresList.appendChild(li);
  });
};


//fetch posts from API 
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};




const renderPosts = (posts) => {
  postsContainer.innerHTML = "";

 
  posts.slice(0, 6).forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    postsContainer.appendChild(card);
  });
};


const loadPosts = async () => {
  statusText.textContent = "Loading posts...";

  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    statusText.textContent = "";
  } catch (error) {
    statusText.textContent = "Failed to load posts.";
  }
};

// form submission handler

const handleWaitlistSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name) {
    waitListMessage.textContent = "Name is required.";
    return;
  }

  if (!email.includes("@")|| !email.includes(".")) {
    waitListMessage.textContent = "Please enter a valid email.";
    return;
  }

  waitListMessage.textContent = `Thanks for joining, ${name}!`;

  nameInput.value = "";
  emailInput.value = "";
};



// learnMoreButton.addEventListener("click", () => {
//     aboutText.textContent = 
//     "Our mission is to empower teams with innovative tools that enhance productivity and collaboration";
// });

// //theme toggle

// themeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//     element.classList.toggle("hidden");
// });

// //wait list form

// waitListForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     //trim the input values to remove extra spaces
//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();

//     if (!name) {
//         waitListMessage.textContent = "Please enter your name.";
//         return;
//     } 
//     if (!email.includes("@") || !email.includes(".")) {
//         waitListMessage.textContent = "Please enter a valid email.";
//         return;
//     }

//     waitListMessage.textContent = `Thank you for joining the waitlist, ${name}!`;

//     //clear the form inputs after submission
//     nameInput.value = "";
//     emailInput.value = "";

// });




const setupEvents = () => {
  learnMoreButton.addEventListener("click", () => {
    aboutText.textContent =
      "Our mission is to empower teams with innovative tools that enhance productivity and collaboration.";
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  
  waitListForm.addEventListener("submit", handleWaitlistSubmit);
};





const init = () => {
  
  renderSponsors();
  renderFeatures();
  renderTeam();

  
  setupEvents();

  
  loadPosts();
};

init();