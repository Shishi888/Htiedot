function Taydenna() {
    const tämäPäivä = new Date();
    var tämäVuosi = tämäPäivä.getFullYear();
    var spvm = document.getElementById("spvm").value;
    syntymäPäivä = new Date(spvm);
    var syntymäVuosi = syntymäPäivä.getFullYear();
    var ikä = tämäVuosi - syntymäVuosi;

    const enimi = document.getElementById("enimi").value;
    const snimi = document.getElementById("snimi").value;
    var nimi = enimi + " " + snimi;

    var tulos = "Hei " + nimi + "! Olet " + ikä + " vuotias!"

    document.getElementById("tulos").innerHTML = tulos;
}
