const mainPageUrl = "http://erp-evo.ml:1337/main-page";

// (async function YarikVodila () {
//     const data = await requestInfo(mainPageUrl)
//     .then((res) => res)
//     .catch((err) => console.log(err));
//     console.log('data', data)
// })()

requestInfo(mainPageUrl)
    .then((res) => console.log(res.gallery))
    .catch((err) => console.log(err))
