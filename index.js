const btn = document.querySelector("#btn-dark-mode");
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;
 
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode-settings', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('dark-mode-settings', 'light');
    }
});

btn.addEventListener("change", () => {
	if (btn.checked === true) {
		document.body.classList.remove('light-mode');
		document.body.classList.add('dark-mode');
		localStorage.setItem('dark-mode-settings', 'dark');
	}else {
		document.body.classList.remove('dark-mode');
		document.body.classList.add('light-mode');
		localStorage.setItem('dark-mode-settings', 'light');
	}
});

if(localStorage.getItem('dark-mode-settings')==='dark') {
	document.body.classList.add('dark-mode');
	btn.checked = true;
}else if (localStorage.getItem('dark-mode-settings')==='light') {
	document.body.classList.add('light-mode');
}

let mainColor = getComputedStyle(document.body).getPropertyValue("--main-color").trimStart()

const pickr = Pickr.create({
  el: ".picker",
  theme: "monolith",
  default: mainColor,
  components: {
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
    },
  },
})

pickr.on("change", (hsva) => {
  document.querySelector(":root").style.setProperty("--main-color", hsva.toRGBA().toString())
  pickr.applyColor()
});
