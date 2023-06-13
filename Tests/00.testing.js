const pJSON = [
    {
        "id": 1,
        "title": "Currency Number to word converter",
        "description": "This python project works command line and converts user entered comma separated numbers to words.",
        "note": "",
        "io_images": [],
        "lang": "python",
        "htmlId": "",
        "github": ""
    },
    {
        "id": 1,
        "title": "Currency Number to word converter",
        "description": "This python project works command line and converts user entered comma separated numbers to words.",
        "note": "",
        "io_images": [],
        "lang": "python",
        "htmlId": "",
        "github": ""
    },
    {
        "id": 1,
        "title": "Currency Number to word converter",
        "description": "This python project works command line and converts user entered comma separated numbers to words.",
        "note": "",
        "io_images": [],
        "lang": "html",
        "htmlId": "",
        "github": ""
    }
]

function getProjectsByLang(lang) {
    let projects = pJSON;
    return projects.filter((p) => {
        return p.lang === lang;
    })
}

console.log(getProjectsByLang("html").map((p) => {console.log(...p);}))