function download(callbackVerify) {
    // console.log("Download")
    setTimeout(() => {
        console.log("Download selama 3 detik");
        callbackVerify();
    }, 2000)

}

function verify(callbackNotify) {
    setTimeout(() => {
        console.log("Verify selama 2 detik");
        callbackNotify();
    }, 2000)
}

function notify() {
    // setTimeout(() => {
    console.log("Dwonload Selesai")
    // }, 1000);
}

function main() {
    // download(verify(notify()));
    // verify();
    // notify();
    // solusinya: callback
    download(() => {
        verify(() => {
            notify()
        })
    })
}

main();