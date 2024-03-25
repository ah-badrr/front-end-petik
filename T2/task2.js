/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log(`File ${result} berhasil didownload.`);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            result = `window-10.exe`;
            resolve(`Download selesai`);
        }, 2000)
    })
}

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

const main = async () => {
    console.log(await download())
    showDownload(result);
};

main()