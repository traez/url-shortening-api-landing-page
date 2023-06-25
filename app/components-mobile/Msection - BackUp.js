import { useRef } from "react";

export default function Msection({
  onHandleChange,
  url,
  onHandleClick,
  inputError,
  errorMessage,
  copiedButton,
  setCopiedButton,
}) {
  const sectionRef = useRef(null);

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

  const urlArray = JSON.parse(localStorage.getItem("urlItems")) || [];

  return (
    <section className="mob-sec" ref={sectionRef}>
      <div className="mob-sec-inputdiv">
        <div className="mob-sec-inputbox">
          <input
            className={`mob-sec-input ${inputError ? "errorBorder" : ""}`}
            type="text"
            placeholder="Shorten a link here..."
            onChange={onHandleChange}
            name="url"
            value={url}
          />
          <em className={`mob-sec-em ${inputError ? "errorText" : ""}`}>
            {errorMessage}
          </em>
        </div>
        <button
          className="mob-sec-butshrt"
          onClick={onHandleClick}
          type="button"
        >
          Shorten It!
        </button>
      </div>
      {urlArray.map((item) => (
        <div className="mob-sec-outputdiv" key={item.random}>
          <b className="mob-sec-b">{item.url}</b>
          <hr className="mob-sec-hr" />
          <strong className="mob-sec-str">{item.shortened}</strong>
          <button
            className={`mob-sec-butcop ${
              copiedButton === item.random ? "copied" : ""
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
