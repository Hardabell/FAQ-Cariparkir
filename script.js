const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const faqAnswer = question.nextElementSibling;
        faqAnswer.classList.toggle("show");
        question.classList.toggle("open");
    });
});