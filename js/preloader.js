const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {

	setTimeout(() => {
		if (!preloader.classList.contains("hidePreload")) {
			preloader.classList.add("hidePreload");
		}
	}, 1000)

})