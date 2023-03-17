

const pageIds = [
    'forst',
    'recept',
    'odling',
    'bokrekommendationer',
    'sy',
    'musik'
    
]

console.log(pageIds)

const pages = pageIds.map(id => document.getElementById(id));

console.log(pages);

function changePage(newPageId) {
    return ()=>{pages.forEach((page) => {
        page.style.display = page.id == newPageId ? "block" : "none";
    })};
}

function createListener(id, page) {
    document.querySelector(id).addEventListener('click', changePage(page));
}

createListener('#mainen', "forst");
document.querySelector('#mat').addEventListener('click', changePage("recept"));
document.querySelector('#vaxter').addEventListener('click', changePage("odling"));
document.querySelector('#bocker').addEventListener('click', changePage("bokrekommendationer"));
document.querySelector('#sys').addEventListener('click', changePage("sy"));
document.querySelector('#music').addEventListener('click', changePage("musik"));


console.log("hejsam")