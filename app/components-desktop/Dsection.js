/* Desktop section component for handling URL input, shortening, and displaying shortened URLs. */
import { useRef, useState, useEffect } from "react";

export default function Dsection({
  onHandleChange,
  url,
  onHandleClick,
  inputError,
  errorMessage,
  copiedButton,
  setCopiedButton,
}) {
  /* creates a reference to the `section` DOM element. */
  const sectionRef = useRef(null);
  /* creates a state variable to store the list of shortened URLs */
  const [urlArray, setUrlArray] = useState([]);

  /* copies the shortened URL to the clipboard */
  const handleCopy = async (e) => {
    try {
      const shortened = e.target.previousElementSibling;
      const text = shortened.textContent;
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  /* gets the list of shortened URLs from localStorage when the component mounts */
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUrlItems = localStorage.getItem("urlItems");
      const parsedUrlItems = storedUrlItems ? JSON.parse(storedUrlItems) : [];
      setUrlArray(parsedUrlItems);
    }
  }, [
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("urlItems")
      : null,
  ]);

  /* 
return value of the `Dsection` component
input field allows the user to enter a URL
error message is displayed if the user enters an invalid URL
`map` function renders a list of shortened URLs
*/
  return (
    <section className="desk-sec" ref={sectionRef}>
      <div className="desk-sec-inputdiv">
        <div className="desk-sec-inputbox">
          <input
            className={`desk-sec-input ${inputError ? "errorBorder" : ""}`}
            type="text"
            placeholder="Shorten a link here..."
            onChange={onHandleChange}
            name="url"
            value={url}
          />
          <em className={`desk-sec-em ${inputError ? "errorText" : ""}`}>
            {errorMessage}
          </em>
        </div>
        <button
          className="desk-sec-butshrt"
          onClick={onHandleClick}
          type="button"
        >
          Shorten It!
        </button>
      </div>
      {urlArray.map((item) => (
        <div className="desk-sec-outputdiv" key={item.random}>
          <b className="desk-sec-b">{item.url}</b>
          <hr className="desk-sec-hr" />
          <strong className="desk-sec-str">{item.shortened}</strong>
          <button
            className={`desk-sec-butcop ${
              copiedButton === item.random ? "copiedd" : ""
            }`}
            type="button"
            onClick={(e) => {
              handleCopy(e);
              setCopiedButton(item.random);
            }}
          >
            {copiedButton === item.random ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
    </section>
  );
}
