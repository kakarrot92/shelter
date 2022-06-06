fetch("./data.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // data.forEach(() => {
  
      let main = document.querySelector('.container');
    const seeProject = document.querySelectorAll(".card-btn");
    [...seeProject].forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const myData = data.find(
          (elem) => elem.id === e.currentTarget.dataset.btnId
        );
        const {
          name,
          img,
          type,
          breed,
          description,
          age,
          inoculations,
          diseases,
          parasites,
        } = myData;

        const section = document.createElement("div");
        section.className = "popup-modal";
        main.append(section);
        section.innerHTML = `
        <div class="modal">
            <div class="popup">
              <div class="show-container">
                <div class="show-img">
                  <img src="${img}" alt="">
                </div>
                <div class="show-content">
                  <h2 class="pet-name">${name}</h2>
                  <h4 class="pet-type">${type} - ${breed}</h4>
                  <p class="pet-description">${description}</p>
                  <ul>
                    <li class="age"><b>Age:</b> ${age}</li>
                    <li class="inoculations"><b>Inoculations:</b> ${inoculations}</li>
                    <li class="diseases"><b>Diseases:</b> ${diseases}</li>
                    <li class="parasites"><b>Parasites:</b> ${parasites}</li>
                  </ul>
                </div>
              </div>
              <span onclick="removeModal(this)" class="close">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
            <div class="overlay"></div>
          </div>
      `;
      let popup = document.querySelector(".popup");
      popup.style.display = "block";
      let overlay = document.querySelector(".overlay");
        overlay.style.display = "block";
      });
    });

// });
    
  
  });
  function removeModal(e) {
    let popup = document.querySelector(".popup-modal");
    popup.remove();
}