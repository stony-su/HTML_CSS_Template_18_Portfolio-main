const Services = [
	{
		name: "Residential Construction",
		description: "From building new homes to interior upgrades, we offer customized one-on-one services to create a comfortable and functional living space.",
		projectsCount: 40,
		icon: '<i class="fa-solid fa-house-chimney fa-fw icon"></i>',
	},
	{
		name: "Commercial Renovation",
		description: "We provide design and construction services tailored for offices, retail stores, restaurants, and other commercial spaces—efficient, stylish, and on-brand.",
		projectsCount: 18,
		icon: '<i class="fa-solid fa-building fa-fw icon"></i>',
	},
	{
		name: "Renovation & Remodeling",
		description: "We focus on transforming kitchens, bathrooms, and basements—revitalizing old spaces to improve your quality of life and property value.",
		projectsCount: 27,
		icon: '<i class="fa-solid fa-hammer fa-fw icon"></i>',
	},
	{
		name: "Structural & Foundation Work",
		description: "Our experienced team ensures structural integrity and compliance with all codes and regulations—forming the solid foundation of every project.",
		projectsCount: 15,
		icon: '<i class="fa-solid fa-mountain fa-fw icon"></i>',
	},
	{
		name: "Smart Project Management",
		description: "With our smart system, clients can monitor real-time progress and cost tracking—ensuring a transparent and manageable construction process.",
		projectsCount: 50,
		icon: '<i class="fa-solid fa-chart-line fa-fw icon"></i>',
	},
];

const servicesContainer = document.querySelector(
	"#services .services__wrapper"
);

const serviceLayout = ({ name, description, projectsCount, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	<span class="service__projects">${projectsCount} Project${
	projectsCount > 1 ? "s" : ""
}</span>
	${icon}
`;

Services.forEach((service) => {
	const serviceElement = document.createElement("div");
	serviceElement.className = "service";
	serviceElement.innerHTML = serviceLayout(service);
	servicesContainer.appendChild(serviceElement);
});
