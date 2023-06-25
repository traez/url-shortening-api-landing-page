/* Fetches short URL data from the API */
export default async function fetchShortUrl(url) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    console.log(data);
    return data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


