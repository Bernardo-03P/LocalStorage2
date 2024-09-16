function enviarLS() {

    const marca = document.getElementById('Marca').value
    const model = document.getElementById('model').value
    if (marca && model) {

        const obj = {
            marca: marca,
            model: model,
        };
        localStorage.setItem('login', JSON.stringify(obj));
        
        document.getElementById('Marca').value = '';
        document.getElementById('model').value = '';
        console.log(obj)
    }else{
        console.log(obj)
    }
}