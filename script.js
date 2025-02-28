// Array of Review Objects
const reviews = [
    {
        name: "M'Umer",
        job: "Web Developer",
        review: "This service is amazing! Highly recommended.",
        img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Akhlaq ahmeed",
        job: "Tailer",
        review: "I love how easy and convenient it is to use.",
        img: "https://w7.pngwing.com/pngs/332/865/png-transparent-tailor-clothing-suit-illustration-tailor-suit-custom-public-relations-cloth-recruiter.png"
    },
    {
        name: "Huma Naz",
        job: "Teacher",
        review: "Great value for money. Will definitely use again.",
        img: "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-pen-smiling-white_140725-18658.jpg"
    }
];

// Select Elements
const avatar = document.getElementById("avatar");
const nameText = document.getElementById("name");
const jobText = document.getElementById("job");
const reviewText = document.getElementById("review");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Set Initial Review Index
let currentIndex = 0;

// Function to Load Review
function loadReview(index) {
    const review = reviews[index];
    avatar.src = review.img;
    nameText.textContent = review.name;
    jobText.textContent = review.job;
    reviewText.textContent = `"${review.review}"`;
}

// Load First Review When Page Loads
document.addEventListener("DOMContentLoaded", () => {
    loadReview(currentIndex);
});

// Next Review Button
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= reviews.length) {
        currentIndex = 0; // Loop back to first review
    }
    loadReview(currentIndex);
});

// Previous Review Button
prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1; // Loop to last review
    }
    loadReview(currentIndex);
});
