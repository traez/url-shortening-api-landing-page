/* Stores the short URL data in the local storage */
export default function storeShortUrl(data) {
  let urlArray = localStorage.getItem("urlItems")
    ? JSON.parse(localStorage.getItem("urlItems"))
    : [];

  const random = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  const url = data.result.original_link;
  const shortened = data.result.short_link;

  const urlObj = {
    random: random,
    url: url,
    shortened: shortened,
  };

  urlArray.push(urlObj);
  localStorage.setItem("urlItems", JSON.stringify(urlArray));
}
