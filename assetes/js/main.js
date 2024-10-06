const imageContainer = document.querySelector(".image-container img");
const imageList = document.querySelectorAll(".image-list img");

for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener("click", function (e) {
        const imageSrc = e.target.getAttribute("src");
        imageContainer.setAttribute("src", `${imageSrc}`);
        console.log(e.target.getAttribute("src"));
    });
}