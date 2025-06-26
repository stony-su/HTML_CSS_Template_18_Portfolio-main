// Preloader
const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
	setTimeout(() => {
		preloader.classList.add("hidden");
	}, 1000);
});

// Background Video (set to 3d-abstract-ball.mp4 by default)
const bgVideoPlayer = document.getElementById("bgVideoPlayer");
const bgVideoSource = document.getElementById("bgVideoSource");

const loadVideo = (videoSource, videoPlayer, src) => {
	videoSource.src = src;
	videoPlayer.load();
};

window.addEventListener("load", function () {
	const src = "assets/videos/3d-abstract-ball.mp4";
	loadVideo(bgVideoSource, bgVideoPlayer, src);
});

// Activate links on scroll
const mainContainer = document.querySelector("main");
const sections = document.querySelectorAll("section[id]");

mainContainer.addEventListener("scroll", () => {
	const scrollTop = mainContainer.scrollTop;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.id;

		scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
			? document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.add("active")
			: document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.remove("active");
	});
});

document.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.id;

		scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight
			? document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.add("active")
			: document
					.querySelector(`.navbar__link[href*=${sectionId}]`)
					.classList.remove("active");
	});
});
