(function () {
  const icondd = document.querySelector("#icondd");
  const dialog = document.querySelector("dialog");

  icondd.addEventListener("click", function () {
    dialog.showModal();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

})();

/*
import ReactModal from 'react-modal';
*/
