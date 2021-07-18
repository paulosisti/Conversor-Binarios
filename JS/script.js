function convert() {
    const binary = document.getElementById('input1').value;
    if (binary === '') return Swal.fire({
        icon: 'warning',
        text: 'Insira um número binário (0,1)',
        width: 400,
    });
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return Swal.fire({
            icon: 'error',
            text: 'Somente números binários (0,1)',
            height: 100,
            width: 400,
        });
            return ("0")
    });

    var d = parseInt(binary,2);
    const decimal = d.toString(10);
    document.getElementById('output1').value = decimal;

    var o = parseInt(binary,2);
    const octal = o.toString(8);
    document.getElementById('output2').value = octal;

    var h = parseInt(binary,2);
    const hexadecimal = h.toString(16).toUpperCase();
    document.getElementById('output3').value = hexadecimal;
    
}
