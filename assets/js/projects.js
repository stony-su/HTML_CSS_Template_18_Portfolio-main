const Projects = [
	{
		title: "Modern Home Addition – Sudbury, ON",
		image: "analys.png",
		tags: ["Home Addition", "Construction"],
		href: "#",
	},
	{
		title: "Downtown Office Renovation",
		image: "directone.png",
		tags: ["Commercial", "Renovation"],
		href: "#",
	},
	{
		title: "Custom Kitchen Remodel",
		image: "sugarcake.png",
		tags: ["Kitchen", "Remodel"],
		href: "#",
	},
	{
		title: "Basement Transformation",
		image: "memberbase.png",
		tags: ["Basement", "Renovation"],
		href: "#",
	},
	{
		title: "Retail Store Build-Out",
		image: "tixly.png",
		tags: ["Retail", "Construction"],
		href: "#",
	},
];

var imagesPath = "assets/images/projects/";

const projectsContainer = document.querySelector("#portfolio .projects");

const projectLayout = ({ title, image, tags, href }) => `
    <div class="project__content">
        <img class="project__image" src="${imagesPath}${image}" />
        <ul class="project__tags">
            ${tags
							.map((tag) => `<li class="project__tag">${tag}</li>`)
							.join("")}
        </ul>
    </div>
    <h4 class="project__title">${title}</h4>
`;

Projects.forEach((project) => {
	const projectElement = document.createElement("a");
	projectElement.href = project.href;
	projectElement.target = "_blank";
	projectElement.className = "project";
	projectElement.innerHTML = projectLayout(project);
	projectsContainer.appendChild(projectElement);
});
