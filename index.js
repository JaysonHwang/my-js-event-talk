function whileLoop(){
    const base = 10000;// 约4秒
    let count = base * 2; // 约8秒
    // let count = base * 4; // 约16秒
    // let count = base * 8; // 约32秒
    // let count = base * 15; // 约60秒
    while(true){
        console.log('while blocking...', count)
        if(--count<0){
            return;
        }
    }
}
function setTimeoutLoop(){
    console.time('setTimeout');
    setTimeout(() => {
        console.timeEnd('setTimeout');
        console.log('setTimeout blocking...')
        setTimeoutLoop();
    },0)
}
function promiseLoop(){
    console.time('promise');
    console.log('promise blocking...')
    new Promise((resolve) => {
        resolve();
    }).then(() => {
        console.timeEnd('promise');
        promiseLoop();
    })
}
function requestAnimation(){
    console.warn('requestAnimationFrame loop...')
    console.time('requestAnimation');
    requestAnimationFrame(() => {
        console.timeEnd('requestAnimation');
        requestAnimation();
    })
}