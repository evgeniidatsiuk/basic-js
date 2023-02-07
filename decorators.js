function f(x) {
    console.log(x);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

function throttle(func, ms) {
    let isTrottled = false,
        savedThis,
        savedArgs;

    function wrapper(args) {
        if (isTrottled) {
            savedThis = this;
            savedArgs = arguments;

            return;
        }

        isTrottled = true;

        func.apply(this, arguments);

        setTimeout(() => {
            isTrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = savedArgs = null;
            }
        }, ms);
    }

    return wrapper;
}
