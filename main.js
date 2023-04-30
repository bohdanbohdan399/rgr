
const linksToBlocks = document.querySelectorAll('.link');
linksToBlocks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        scrollToBlock(target);
    });
});

const text = document.querySelectorAll("#text");

text.forEach(e => {
    e.addEventListener("mouseenter", () => {
        e.style.fontSize = "28px";

    });

    e.addEventListener("mouseleave", () => {
        e.style.fontSize = "24px";

    });
})

function scrollToBlock(target) {
    const element = document.querySelector(target);
    const position = element.offsetTop;
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}





