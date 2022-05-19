const control = document.querySelectorAll(".controle")

for (const elemento of control) {
    const partes = elemento.children; 
    const contador = partes[1]
    partes[0].addEventListener('click', () => {
        const valor = Number(contador.value)
        if (valor > 0) contador.value = valor - 1
    }) 
    partes[2].addEventListener('click', () => {
        const valor = Number(contador.value)
        if(valor < 10) contador.value = valor + 1
    })
}
