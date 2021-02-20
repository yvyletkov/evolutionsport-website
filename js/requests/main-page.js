const mainPageUrl = "http://erp-evo.ml:1337/main-page";

const {data} = await requestInfo(mainPageUrl)
    .then((res) => res)
    .catch((err) => console.log(err));

console.log(data)
