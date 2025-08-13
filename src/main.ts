const challenges = [
  { id: 1, title: "Quote Cards & Bento Grid", difficulty: "Intermediate" },
  { id: 2, title: "Advanced Navigation Bar", difficulty: "Advanced" },
  { id: 3, title: "Pricing Cards with Animations", difficulty: "Beginner" },
  { id: 4, title: "Image Gallery with Lightbox", difficulty: "Intermediate" },
  { id: 5, title: "Dashboard with Sidebar", difficulty: "Advanced" },
  { id: 6, title: "Timeline Component", difficulty: "Intermediate" },
  { id: 7, title: "Multi-Step Form", difficulty: "Intermediate" },
  { id: 8, title: "Testimonial Carousel", difficulty: "Beginner" },
  { id: 9, title: "Feature Cards with Icons", difficulty: "Beginner" },
  { id: 10, title: "Blog Post Layout", difficulty: "Intermediate" },
  { id: 11, title: "Product Showcase", difficulty: "Intermediate" },
  { id: 12, title: "Team Members Grid", difficulty: "Beginner" },
  { id: 13, title: "FAQ Accordion", difficulty: "Beginner" },
  { id: 14, title: "Stats Counter Section", difficulty: "Intermediate" },
  { id: 15, title: "Contact Form with Validation", difficulty: "Intermediate" },
  { id: 16, title: "Newsletter Signup", difficulty: "Beginner" },
  { id: 17, title: "Social Media Cards", difficulty: "Beginner" },
  { id: 18, title: "Video Player Interface", difficulty: "Advanced" },
  { id: 19, title: "Shopping Cart", difficulty: "Advanced" },
  { id: 20, title: "Landing Page Hero Section", difficulty: "Intermediate" },
];

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function renderChallenges() {
  const grid = document.getElementById("challengeGrid");

  challenges.forEach((challenge) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105";
    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-2xl font-bold text-blue-600">#${challenge.id}</span>
          <span class="px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
            challenge.difficulty
          )}">
            ${challenge.difficulty}
          </span>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${
          challenge.title
        }</h3>
        <p class="text-gray-600 text-sm">Click to view challenge details</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.open(
        `./challenges/challenge-${challenge.id}/index.html`,
        "_blank"
      );
    });

    grid.appendChild(card);
  });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", renderChallenges);
