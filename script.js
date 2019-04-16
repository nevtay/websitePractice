const navAbout = document.querySelector('#nav-about');
const navCompetencies = document.querySelector('#nav-competencies');
const navContact = document.querySelector('#nav-contact');

const about = document.querySelector('#about');
const logo = document.querySelector('#logo');
const skills = document.querySelector('#skills');

function smoothScroll(target, duration) {
    event.preventDefault();
    var target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}


navAbout.addEventListener('click', function () {
    smoothScroll('#about', 500);
});

navCompetencies.addEventListener('click', function () {
    smoothScroll('#skills', 500);
});

navContact.addEventListener('click', function () {
    smoothScroll('.footer--contact', 500);
});

