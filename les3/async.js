const { setTimeout } = require("timers");

///////////////////////////////////////////////////CALLBACK////////////////
const timeout = 500
let el_callback = []


function diffTime(start) {
    return new Date() - start
}

function addValues_cb(){
    //save start date
    const start = new Date()

    el_callback.push(1)
        console.log('(cb)(1): ', el_callback, 'time:', diffTime(start))

        //wait 500 ms
        setTimeout(()=> {
            el_callback.push(2)
                console.log('(cb)(2): ', el_callback, 'time:', diffTime(start))

                //wait
                setTimeout(() => {
                    el_callback.push(3)
                    console.log('(cb)(3): ', el_callback, 'time:', diffTime(start))

                }, timeout);

        },timeout); //ждёт указанное время, затем заускает процесс в теле
}

addValues_cb()

///////////////////////////////////////////////////PROMISE////////////////
let el_promise = [1,2,3]
/**
 * delay ждет указанное время до того как двигаться дальше
 * @param {number} ms - время ожидания
 */
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

function addValues_pr(){
    const start = new Date()
    el_promise.push(1)
    console.log('(pr)(1): ', el_promise, 'time:', diffTime(start))

    delay(timeout)
    .then(()=> {
        el_promise.push(2)
        console.log('(pr)(2): ', el_promise, 'time:', diffTime(start))
    }).then(()=> {
        delay(timeout).then(()=>{
            el_promise.push(3)
            console.log('(pr)(3): ', el_promise, 'time:', diffTime(start))
        })
    })
}

///////////////////////////////////////////////////ASYNC_AWAIT////////////////
// let el_async_await = [1,2,3]