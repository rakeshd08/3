    function showPopup(id) {
      document.getElementById("popupBody").innerHTML = document.getElementById(id).innerHTML;
      document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
