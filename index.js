const names = ["Alice", "Bob", "Carol", "Dave", "Eve", "Corey", "Tom", "Even", "Homelander"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist", "Superhero", "Game Design"];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return (total / freelancers.length).toFixed(2);
}

function renderFreelancers() {
  const freelancerList = document.getElementById("freelancerList");
  freelancerList.innerHTML = ""; 

  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
    freelancerList.appendChild(row);
  });

  const averagePrice = calculateAveragePrice();
  document.getElementById(
    "averagePrice"
  ).textContent = `Average Starting Price: $${averagePrice}`;
}

function getRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 100) + 20;

  return { name, occupation, price };
}

setInterval(() => {
  const newFreelancer = getRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
}, 5000); 

