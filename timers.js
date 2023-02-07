function printNumbers(from, to) {
    let current = from;

    const intervalId = setInterval(() => {
        console.log({ current });

        if (current === to) {
            clearInterval(intervalId);
        }

        current++;
    }, 1000);
}

// printNumbers(10, 20);

function immediatelyPrintNumbers(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }

    go();
    let timerId = setInterval(go, 1000);
}

// immediatelyPrintNumbers(5, 7);
