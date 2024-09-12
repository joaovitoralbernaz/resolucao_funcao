function calcula() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = (b * b) * ( - 4 * a * c);
    let raiz_delta = Math.sqrt(delta);

    document.getElementById('delta').innerText = raiz_delta;
}