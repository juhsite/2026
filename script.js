const content = {
  en: {
    title: "English",
    when: "When:\nSaturday, 21 March\nAt 15:00",
    where: "Where:\nAt my house\nNiederniedstrasse 7\n3210 Kerzers",
    dresscode: "Dresscode:\nCasino / Poker"
  },
  de: {
    title: "Deutsch",
    when: "Wann:\nSamstag, 21. März\nUm 15:00 Uhr",
    where: "Wo:\nBei mir zu Hause\nNiederniedstrasse 7\n3210 Kerzers",
    dresscode: "Dresscode:\nCasino / Poker"
  }
};

function selectLang(lang) {
  document.getElementById("start").classList.remove("active");
  document.getElementById("invite").classList.add("active");

  document.getElementById("langTitle").innerText = content[lang].title;
  document.getElementById("when").innerText = content[lang].when;
  document.getElementById("where").innerText = content[lang].where;
  document.getElementById("dresscode").innerText = content[lang].dresscode;
}
