const Clients = [
	{
		name: "Mr. Li",
		image: "john-doe.jpg",
		job: "Home Renovation Client",
		company: "",
		quote:
			"From early planning to final delivery, BuildBot was reliable throughout. The quality of work exceeded expectations.",
	},
	{
		name: "Ms. Wang",
		image: "christina-morillo.jpg",
		job: "Commercial Client",
		company: "",
		quote:
			"The office renovation turned out great—practical and stylish. Both clients and staff love it.",
	},
];

var imagesPath = "assets/images/clients/";

const clientsContainer = document.querySelector("#testimonial .slider-wrapper");

const clientLayout = ({ name, image, job, company, quote }) => `
    <div class="client__header">
        <img class="client__image" src="${imagesPath}${image}" />
        <div class="client__info">
            <h6 class="client__name">${name}</h6>
            <p class="client__job">
                ${job}
            </p>
        </div>
	</div>
	<q class="client__quote">${quote}</q>

`;

Clients.forEach((client) => {
	const clientElement = document.createElement("div");
	clientElement.classList.add("client", "slider-slide");
	clientElement.innerHTML = clientLayout(client);
	clientsContainer.appendChild(clientElement);
});

// Slider
const slider = document.getElementById("clientsSlider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const slides = sliderWrapper.getElementsByClassName("slider-slide");
const prevBtn = slider.querySelector(".slider-button-prev");
const nextBtn = slider.querySelector(".slider-button-next");

let currentSlide = 0;

function showSlide() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}

	slides[currentSlide].classList.add("active");
}

function moveToNextSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	slides[currentSlide].classList.add("active");
}

function moveToPrevSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	slides[currentSlide].classList.add("active");
}

prevBtn.addEventListener("click", function () {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	showSlide();
});

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);

showSlide();
