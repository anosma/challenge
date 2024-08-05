
const  textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    console.log(textoEncriptado);
    
    }
    
    
    function encriptar(stringEncriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase()
    
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
               stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0], matrizCodigo[i][1])
           
    
            }
    
        }
      return stringEncriptada
    }
    
    
    function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
    }
    
    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase()
    
        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
               stringDesencriptada = stringDesencriptada.replace(matrizCodigo[i][1], matrizCodigo[i][0])
           
    
            }
    
        }
      return stringDesencriptada
    }


    function copiarTexto() {
        const mensaje = document.querySelector('.mensaje');
        mensaje.select();
        mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
    
        navigator.clipboard.writeText(mensaje.value).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    }
    
    // Añade el evento de click al botón de copiar
    document.querySelector('.boton_copiarTexto').addEventListener('click', copiarTexto);