$(document).ready(function () {
    $(window).scroll(function (e) {
        e.preventDefault();
        var aTop = $('.jumbotron').height();
        if ($(this).scrollTop() >= aTop) {
            $('.navbar').addClass('navbar-dark');
            $('.navbar').addClass('bg-dark');
        }
        else if ($(this).scrollTop() < aTop) {
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').removeClass('bg-dark');
        }
    })
    const texts = [
        "Saya adalah Programmer",
        "Saya adalah Data Analyst",
        "Saya adalah iqbal_agyan"
    ];
    let textIndex = 0;
    const textElement = $("#text");
    const typingText = $(".typing-text");
    let charIndex = 0;

    function type() {
        textElement.text(texts[textIndex].slice(0, charIndex++));
        textElement.css("visibility", "visible");
        if (charIndex <= texts[textIndex].length) {
            setTimeout(type, 100); // Waktu penundaan antara karakter
        } else {
            setTimeout(erase, 500); // Waktu penundaan sebelum menghapus teks
        }
    }

    function erase() {
        textElement.text(texts[textIndex].slice(0, charIndex--));
        if (charIndex >= 0) {
            setTimeout(erase, 100); // Waktu penundaan antara karakter
        } else {
            textIndex = (textIndex + 1) % texts.length;
            textElement.css("visibility", "hidden"); // Berganti teks
            setTimeout(type, 500); // Waktu penundaan sebelum mulai mengetik teks baru
        }
    }
    
    type(); // Memulai animasi
})