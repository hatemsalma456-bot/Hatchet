
let bars = document.querySelector(".bars-links");
let barsClick = document.querySelector(".fa-bars");


barsClick.addEventListener("click", function () {
    bars.classList.toggle("show");
});

const testimonials = [
    {
        textContent: '"I love turning ideas into digital experiences that feel thoughtful, clear, and memorable."',
        name: "Jeffrey Effendi",
        title: "Founder & Head of Creativity",
        image: "imgs/Person Sec 5.webp"
    },
    {
        textContent: '"I believe great design should feel natural, human, and easy to connect with from the first moment."',
        name: "Sarah Johnson",
        title: "CEO & Creative Director",
        image: "imgs/person1.jpeg"
    },
    {
        textContent: '"I focus on creating work that is practical, polished, and built around real people and real needs."',
        name: "Michael Chen",
        title: "Product Manager",
        image: "imgs/person2.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const textContainer = document.querySelector('.text');
    const avatarImg = document.querySelector('.avatar img');
    const speechP = document.querySelector('.speech p');
    const box = document.querySelector('.box');

    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                const testimonial = testimonials[index];
                const textParagraphs = textContainer ? textContainer.querySelectorAll('p') : [];

                if (textContainer) textContainer.classList.add('fade-out');
                if (avatarImg) avatarImg.classList.add('fade-out');
                if (speechP) speechP.classList.add('fade-out');

                setTimeout(() => {
                    if (textContainer) {
                        if (textParagraphs.length > 0) {
                            textParagraphs[0].textContent = testimonial.textContent;
                        } else {
                            textContainer.textContent = testimonial.textContent;
                        }
                        textContainer.classList.remove('fade-out');
                    }

                    if (avatarImg) {
                        avatarImg.src = testimonial.image;
                        avatarImg.alt = testimonial.name;
                        avatarImg.classList.remove('fade-out');
                    }

                    if (speechP) {
                        speechP.textContent = testimonial.name + ' - ' + testimonial.title;
                        speechP.classList.remove('fade-out');
                    }

                    if (box) {
                        box.classList.add('pulse');
                        setTimeout(() => box.classList.remove('pulse'), 600);
                    }
                }, 300);
            }
        });
    });
});