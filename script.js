const navAbout = document.querySelector('#nav-about');
const navCompetencies = document.querySelector('#nav-competencies');
const navContact = document.querySelector('#nav-contact');

const about = document.querySelector('#about');
const logo = document.querySelector('#logo');
const skills = document.querySelector('#skills');

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);

}


navAbout.addEventListener('click', function() {
    smoothScroll('#about', 1000);
});

navCompetencies.addEventListener('click', function() {
    smoothScroll('#skills', 1000);
});

navContact.addEventListener('click', function() {
    smoothScroll('.footer--contact', 1000);
});

