let links=document.querySelectorAll('a[href^="#"]');
for (link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}