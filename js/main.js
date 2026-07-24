let bars = document.querySelector(".bars-links");
let barsClick = document.querySelector(".fa-bars");

barsClick.addEventListener("click", function () {
    bars.classList.toggle("show");
});

const testimonials = [
    {
        text: [
            "As a purpose-driven agency, we're constantly juggling strategy and design and have a big need to reliably execute what's planned.",
            "It's rare that we find a tech partner who appreciates that and does it - but that's what Hatchet's done for our team, time and time again.",
            "We've come to see them as an extension of the DrawHistory family, and that's probably the nicest thing we can say about anyone!"
        ],
        name: "Jeffrey Effendi - Founder & Head of Creativity",
        image: "imgs/Person Sec 5.webp"
    },
    {
        text: [
            "We always focus on delivering creative solutions that make a real difference.",
            "Working together has been smooth, professional, and enjoyable from start to finish.",
            "Their attention to detail and commitment to quality is outstanding."
        ],
        name: "Sarah Johnson - CEO & Creative Director",
        image: "imgs/person1.jpeg"
    },
    {
        text: [
            "Every project is handled with care and precision.",
            "The team communicates clearly and always delivers on time.",
            "I would happily recommend them to anyone looking for a reliable partner."
        ],
        name: "Michael Chen - Product Manager",
        image: "imgs/person2.jpeg"
    }
];

let radios = document.querySelectorAll('input[name="inlineRadioOptions"]');
let paragraphs = document.querySelectorAll(".text p");
let avatar = document.querySelector(".avatar img");
let person = document.querySelector(".speech p");

radios.forEach(function (radio, index) {
    radio.addEventListener("click", function () {
        paragraphs.forEach(function (p, i) {
            p.textContent = testimonials[index].text[i];
        });

        avatar.src = testimonials[index].image;
        person.textContent = testimonials[index].name;
    });
});