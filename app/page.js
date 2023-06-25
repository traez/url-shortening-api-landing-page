"use client";
import { useState } from "react";

/* Importing mobile and desktop components */
import Mnav from "./components-mobile/Mnav";
import Dnav from "./components-desktop/Dnav";
import Mheader from "./components-mobile/Mheader";
import Dheader from "./components-desktop/Dheader";
import Msection from "./components-mobile/Msection";
import Dsection from "./components-desktop/Dsection";
import Marticle from "./components-mobile/Marticle";
import Darticle from "./components-desktop/Darticle";
import Maside from "./components-mobile/Maside";
import Daside from "./components-desktop/Daside";
import Mmenu from "./components-mobile/Mmenu";
import Dmenu from "./components-desktop/Dmenu";
import Mfooter from "./components-mobile/Mfooter";
import Dfooter from "./components-desktop/Dfooter";

/* Importing custom libraries */
import useMediaQuery from "./libraries/useMediaQuery";
import fetchShortUrl from "./libraries/fetchShortUrl";
import storeShortUrl from "./libraries/storeShortUrl";

/* State declarations */
export default function Home() {
  const isMobile = useMediaQuery("(max-width: 799px)");
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedButton, setCopiedButton] = useState(null);

  /* Determine which component to render based on the screen size */
  const Nav = isMobile ? Mnav : Dnav;
  const Header = isMobile ? Mheader : Dheader;
  const Section = isMobile ? Msection : Dsection;
  const Article = isMobile ? Marticle : Darticle;
  const Aside = isMobile ? Maside : Daside;
  const Menu = isMobile ? Mmenu : Dmenu;
  const Footer = isMobile ? Mfooter : Dfooter;

    /* Toggle the dialog open/close state */
  function toggleDialog() {
    setIsOpen((prevOpen) => !prevOpen);
  }

      /* Update the URL input value */
  function handleChange(event) {
    const { value } = event.target;
    setUrl(value);
  }

  /* 
  Set an error message if the URL input is empty 
  Remove the error classes after 4 seconds
  Fetch short URL data
  Store the short URL data
  Clear the URL input value
  */
  async function handleClick() {
    if (!url) {
      setInputError(true);
      setErrorMessage("Please add a link");

      setTimeout(() => {
        setInputError(false);
        setErrorMessage("");
      }, 4000);

      return;
    }

    try {
      const data = await fetchShortUrl(url);
      storeShortUrl(data);
      setUrl("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  /* Render components and pass on props */
  return (
    <main>
      <Nav isOpen={isOpen} onToggleDialog={toggleDialog} />
      <Header />
      <Section
        onHandleChange={handleChange}
        url={url}
        onHandleClick={handleClick}
        inputError={inputError}
        errorMessage={errorMessage}
        copiedButton={copiedButton}
        setCopiedButton={setCopiedButton}
      />
      <Article />
      <Aside />
      <Menu />
      <Footer />
    </main>
  );
}
