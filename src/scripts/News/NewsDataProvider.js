const eventHub = document.querySelector(".container")
let news = []

export const useNews = () =>{
    return news.slice()
}



export const getNews = () =>{
    return fetch(" http://localhost:8088/news")
    .then(res => res.json())
    .then(parseRes =>{
        news = parseRes
    })
}

export const saveNews = (article)=>{
    return fetch(" http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}

export const deleteNews = (articleId) =>{
    return fetch(` http://localhost:8088/news/${articleId}`, {
    method: "DELETE"
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}