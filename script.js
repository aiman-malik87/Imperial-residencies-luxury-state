const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {

        if (count < target) {

            count++;
            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});


