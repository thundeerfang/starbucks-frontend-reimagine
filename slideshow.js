document.addEventListener('DOMContentLoaded', function() {
    let summer = document.querySelectorAll('.slide-show-container');
    let currentIndexSummer = 0; 
    const delay = 3000; 

    function updateSlides1(newIndexSummmer, directionSummer) {
        summer.forEach((summer, idxx) => {
            summer.classList.remove('active', 'left', 'right');
            if (idxx === newIndexSummmer) {
                summer.classList.add('active');
            } else if (idxx === currentIndexSummer) {
                summer.classList.add(directionSummer);
            }
        });
        currentIndexSummer = newIndexSummmer;
    }

    function autoSlide() {
        let newIndexSummmer = (currentIndexSummer < summer.length - 1) ? currentIndexSummer + 1 : 0;
        updateSlides1(newIndexSummmer, 'left');
    }

    updateSlides1(currentIndexSummer, 'left');

    setInterval(autoSlide, delay);
});
