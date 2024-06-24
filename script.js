const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const handleFormSubmission = (e) => {
    e.preventDefault();

    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = parseInt(e.srcElement[1].value);

    const imgCardMarkup = Array.from({ length: userImgQuantity }, () =>
        `<div class="img-card loading">
            <img src="loader.svg" alt="image" class="img-box">
            <a href="#" class="download-btn"><img src="download.svg" alt="download-icon"></a>
        </div>`
    ).join("");

    imageGallery.innerHTML = imgCardMarkup;
};

generateForm.addEventListener("submit", handleFormSubmission);
