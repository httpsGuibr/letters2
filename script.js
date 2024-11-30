document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const pdfPage = document.getElementById('pdfPage');
    const heartPage = document.getElementById('heartPage');
    const nextButton = document.getElementById('nextButton');
    const nextToHeart = document.getElementById('nextToHeart');
    const canvas = document.getElementById('heartCanvas');

    // Navegar do pop-up para o PDF
    nextButton.addEventListener('click', () => {
        popup.classList.add('hidden');
        pdfPage.classList.remove('hidden');
    });

    // Navegar do PDF para a tela do coração
    nextToHeart.addEventListener('click', () => {
        pdfPage.classList.add('hidden');
        heartPage.classList.remove('hidden');
        drawHeart();
    });

    // Desenha um coração na tela preta
    function drawHeart() {
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 3;
        const scale = Math.min(canvas.width, canvas.height) / 20;

        ctx.fillStyle = 'red';
        ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2; t += 0.01) {
            const x = scale * (16 * Math.sin(t) ** 3) + centerX;
            const y = -scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) + centerY;
            t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const imagePage = document.getElementById('imagePage');
    const heartPage = document.getElementById('heartPage');
    const nextButton = document.getElementById('nextButton');
    const nextToHeart = document.getElementById('nextToHeart');
    const canvas = document.getElementById('heartCanvas');

    // Navegar do pop-up para a página da imagem
    nextButton.addEventListener('click', () => {
        popup.classList.add('hidden');
        imagePage.classList.remove('hidden');
    });

    // Navegar da imagem para a tela do coração
    nextToHeart.addEventListener('click', () => {
        window.location.href = 'pedidodesculpas.html';
    });

});
