// console.log("Successfully Imported JS File!!!");
//News Api Initialization... Enter your api key and the country code available at newsapi.org...

let apikey = "Enter api here";
let country = "Enter country code here";
//newssource = "http://newsapi.org/v2/top-headlines?country=${Enter the country code available at news api website}&apiKey=${Enter Your Key Here!}";

//Getting the News Container...
let newsAccordian = document.getElementById("newsAccordian");

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

//Creating an ajax GET request...
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`,
  true
);

setInterval(() => {
  window.location.reload();
}, 300000);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    //console.log(json)
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}"
                                aria-expanded="false"
                                aria-controls="collapse${index}"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                            </svg> &nbsp &nbsp
                                <div><b>${element["title"]}</b><div>
                            
                            </button>
                            </h2>
                            <div
                            id="collapse${index}"
                            class="accordion-collapse collapse"
                            aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordian"
                            >
                            <div class="accordion-body"> ${element["content"]}. <a href = "${element["url"]}" target = "_blank">Read mode here...</a></div>
                            </div>
                        </div>`;
      newsHtml += news;
    });

    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
