function calcula() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    let x1;
    let x2;
    const delta = (b*b)-(4*a*c);
    const raiz_delta = Math.sqrt(delta);
    
    if (delta < 0) {
        alert("Não há raizes reais");
    }else if (delta > 0) {
        x1 = (-b + raiz_delta)/(2*a);
        x2 = (-b - raiz_delta)/(2*a);
        document.getElementById('x1').innerText = x1;
        document.getElementById('x2').innerText = x2;
        
    }
    document.getElementById('delta').innerText = raiz_delta;
}