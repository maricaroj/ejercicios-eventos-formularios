                                            // EJERCICIO 1
// kilometros a millas formularios
// Kilómetros a Millas
// Crear una página que:

// Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
// Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que ki´lómetro es 0.62 millas, y una milla es 1.61 kilómetros.

// km = 0.62 millas
// milla = 1.61km

// const km = document.getElementById('km');
// const millas = document.getElementById('millas');

// km.addEventListener('keyup', (e)=>{
//     const kilo = ((e.target.value) * 0.62).toFixed(2);
//     millas.value = kilo;

// });
// millas.addEventListener('keyup', (e)=>{
//     const mill = ((e.target.value) * 1.609).toFixed(2);
//     km.value = mill;
// });

                                            // EJERCICIO 2 

// const colorRed = document.getElementById('color-red');
// const colorGreen = document.getElementById('color-green');
// const colorBlue = document.getElementById('color-blue');

// let rojo = colorRed.value;
// let verde = colorGreen.value;
// let azul = colorBlue.value;

// colorRed.addEventListener('change', (e)=>{
//     rojo = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });
// colorGreen.addEventListener('change', (e)=>{
//     verde = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });
// colorBlue.addEventListener('change', (e)=>{
//     azul = e.target.value;
//     document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
// });

                                            // EJERCICIO 3

const texto = document.getElementById('texto');
const crear = document.getElementById('crear');
const lista = document.getElementById('lista');

crear.addEventListener('click', ()=>{
    if(texto.value !== ''){
        const li = document.createElement('li');
        li.innerHTML = texto.value;
        lista.appendChild(li);
        texto.value = '';
    };
});


                                            // EJERCICIO 4 

// const imagen = document.getElementById('imagen');
// const agregar = document.getElementById('agregar');
// const contenedorFlex = document.getElementById('contenedor-flexible');

// agregar.addEventListener('click', ()=>{
//     if(imagen.value !== ''){
//         const img = document.createElement('img');
//         const src = imagen.value;
//         img.setAttribute('src', src);
//         img.classList.add('nuevo');
//         contenedorFlex.appendChild(img);
//         imagen.value = '';
//     };
// });

// window.addEventListener('click', (e)=>{
//     // if(e.target.classList.contains('nuevo'))
//     // e.target.style.display = 'none';
// })

// window.addEventListener('click', (e)=>{
//     e.target.classList.contains('nuevo') ? e.target.style.display = 'none' : null;
// });

                                            // EJERCICIO 5

// const texto = document.getElementById('texto');
// const caracteres = document.getElementById('caracteres');
// const enviar = document.getElementById('enviar');

// let contador = 0;

// texto.addEventListener('keyup', ()=>{
//     contador = texto.value.length;
//     caracteres.innerHTML = `${contador}/240 caracteres`;
//     if(contador > 0 && contador <= 240){
//         texto.style.border = '3px solid green';
//     } else {
//         texto.style.border = '3px solid red';
//     };
// });

// enviar.addEventListener('click', ()=>{
//     if(contador > 0 && contador <= 240){
//         texto.value = '';
//         texto.style.border = 'none';
//         caracteres.innerHTML = `Comentario Enviado`;
//     }else{
//         caracteres.innerHTML = `Comentario muy extenso`;
//     };
// });
                                            // EJERCICIO 6
// const valorIngresado = document.getElementById('valor-ingresado');                                            
// const unidadIngresada = document.getElementById('unidad-ingresada');                                            
// const unidadConvertir = document.getElementById('unidad-convertir');
// const intercambiar = document.getElementById('intercambiar');
// const resultado = document.getElementById('resultado');

// let valor1 = 1;
// let valor2 = 1;
// let valor3 = 1;

// valorIngresado.addEventListener('change', ()=>{
//     valor1 = valorIngresado.value;
//     let valor = (valor1 * unidadIngresada.value) / unidadConvertir.value;
//     resultado.innerHTML = valor
// })
// unidadIngresada.addEventListener('change', ()=>{
//     valor2 = unidadIngresada.value;
//     let valor = (valor1 * valor2) / unidadConvertir.value;
//     resultado.innerHTML = valor
// })
// unidadConvertir.addEventListener('change', (e)=>{
//     console.log(e.target);
//     valor3 = unidadConvertir.value;
//     console.log(valor3);
//     let valor = (valor1 * valor2) / valor3;
//     resultado.innerHTML = valor
// })
 
// intercambiar.addEventListener('click',()=>{
//     let cambio = unidadConvertir.value;
//     unidadConvertir.value = unidadIngresada.value;
//     unidadIngresada.value = cambio;
//     let valor = (valorIngresado.value * cambio) / unidadConvertir.value;
//     resultado.innerHTML = valor;
// });

                                            // EJERCICIO 7

// const urlImagen = document.getElementById('url-imagen');
// const tituloImagen = document.getElementById('titulo-imagen');
// const descripcion = document.getElementById('descripcion');
// const urlExterna = document.getElementById('url-externa');
// const checkBox = document.getElementById('checkbox');

// const img = document.getElementById('img');
// const tituloCard = document.getElementById('titulo-card');
// const texto = document.getElementById('texto');
// const linkCheck = document.getElementById('link-check');


// urlImagen.addEventListener('change', ()=>{
//     const src = urlImagen.value;
//     img.setAttribute('src', src);
// });

// tituloImagen.addEventListener('keyup', ()=>{
//     const titulo = tituloImagen.value;
//     tituloCard.innerHTML = titulo;
// });

// descripcion.addEventListener('keyup', ()=>{
//     const textoDescripcion = descripcion.value;
//     texto.innerHTML = textoDescripcion;
// });

// checkBox.addEventListener('click', (e)=>{
//     if(checkBox.checked){
//         urlExterna.removeAttribute('disabled');
//         linkCheck.style.display = 'block';
//     }else{
//         const disabled = 'disabled';
//         urlExterna.setAttribute('disabled', disabled);
//         linkCheck.style.display = 'none';
//     }
// });

// urlExterna.addEventListener('change', ()=>{
//     const href = urlExterna.value;
//     linkCheck.setAttribute('href', href);
// });

                                            // EJERCICIO 8
                                            
// const categoriaImagen = document.getElementById('categoria-imagen');
// const img = document.getElementsByTagName('img');

// categoriaImagen.addEventListener('change', () => {
//     let categoria = categoriaImagen.value;
//     for (let i = 0; i < img.length; i++) {
//         let data = img[i].getAttribute('data-categoria');
//         if (categoria !== data) {
//             img[i].style.display = 'none'
//         } else if (categoria === data) {
//             img[i].style.display = 'block'
//         } 
//         if (categoria === 'todas'){
//             img[i].style.display = 'flex'
//         };
//     };
// });

                                            // EJERCICIO 9

// const buscador = document.getElementById('buscador');
// const img = document.getElementsByTagName('img');
// let resultado = document.getElementById('resultado');


// buscador.addEventListener('keyup', () => {
//     let palabra = (buscador.value).toLowerCase();    
//     let contador = 0;
//     for (let i = 0; i < img.length; i++) {
//         let imgVer = img[i];
//         let alt = img[i].getAttribute('alt');
//         if (alt.includes(palabra.toLowerCase())) {
//             imgVer.classList.add('destacar');
//             contador = contador + 1;
//         } else {
//             imgVer.classList.add('none')
//         };
//         if (palabra == '') {
//             imgVer.classList.remove('none');
//             imgVer.classList.remove('destacar');
//             contador = 9;
//         }
//     };
//     resultado.innerHTML = `${contador} resultados encontrados`;
// });

                                            // EJERCICIO 10   RESPUESTA PARCIAL

// const img = document.getElementsByTagName('img');
// const checkBox = document.getElementsByTagName('input');

// Array.from(checkBox).forEach(input=>{
//     input.addEventListener('change', ()=>{
//         if(input.checked){
//             for(let i = 0; i < img.length; i++){
//                 const inputSeleccionado = input.value;
//                 let categoriaImg = img[i].getAttribute('data-categoria')
//                 if(img[i].getAttribute('data-categoria') == inputSeleccionado) {
//                     img[i].style.display = 'inline';
//                 }
//                 if(categoriaImg !== inputSeleccionado){
//                     img[i].style.display = 'none'
//                 }
//             }
//         }else{
//             img.style.display = 'inline'
//         }
//     })
// })



// for(let index = 0; index < checkBox.length; index ++){
//     checkBox[index].addEventListener('change', ()=>{
//         console.log(checkBox[index].checked);
//         for(let i = 0; i < img.length; i++) {
//             if(checkBox[index].checked){
//                 if(img[i].getAttribute('data-categoria') == checkBox[index].value){
//                     img[i].style.display = 'inline';
//                 } else{
//                     img[i].style.display = 'none'
//                 } 
//             } else{
//                 img[i].style.display = 'inline'
//             }
//         }    
//     })
// }

                                            // EJERCICIO 11

// const opcion = document.getElementsByTagName('input');

// let valuePregunta1;
// let valuePregunta2;
// let valuePregunta3;
// let valuePregunta4;
// let valueTotal;

// const sumaValores = (valueTotal) => {
//     if(valueTotal === 4){
//         return alert('Sumamente insatisfecho');
//     } else if(valueTotal >= 5 && valueTotal <= 6){
//         return alert('Insatisfecho');
//     } else if(valueTotal > 6 && valueTotal <= 8){
//         return alert('Conforme');
//     } else if(valueTotal > 8 && valueTotal <= 10){
//         return alert('Satisfecho');
//     } else if(valueTotal > 10 && valueTotal <= 12){
//         return alert('Muy satisfecho');
//     }
// };

// Array.from(opcion).forEach(input=>{
//     input.addEventListener('change', (e)=>{
//         const atributo = input.getAttribute('name')
//         if (atributo === 'pregunta1'){
//             valuePregunta1 = parseInt(input.value);
//             valueTotal = valuePregunta1;
//             console.log(valuePregunta1);
//         }
//         if (atributo === 'pregunta2'){
//             valuePregunta2 = parseInt(input.value);
//             valueTotal += valuePregunta2;
//             console.log(valuePregunta2);
//         }
//         if (atributo === 'pregunta3'){
//             valuePregunta3 = parseInt(input.value);
//             valueTotal += valuePregunta3;
//             console.log(valuePregunta3);
//         }
//         if (atributo === 'pregunta4'){
//             valuePregunta4 = parseInt(input.value);
//             valueTotal += valuePregunta4;
//             setTimeout(()=>{
//                 sumaValores(valueTotal);
//             },200)
//             console.log(valueTotal)
//         } 
//     })
// })

// const pregunta1 = document.getElementsByClassName('pregunta1');
// const pregunta2 = document.getElementsByClassName('pregunta2');
// const pregunta3 = document.getElementsByClassName('pregunta3');
// const pregunta4 = document.getElementsByClassName('pregunta4');
// for(let i = 0; i < pregunta1.length; i ++){
    //     pregunta1[i].addEventListener('change', ()=>{
        //         console.log('cambio', pregunta1[i].value);
        //         valuePregunta1 = parseInt(pregunta1[i].value);
//         valueTotal = valuePregunta1;
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta2.length; i ++){
//     pregunta2[i].addEventListener('change', ()=>{
//         valuePregunta2 = parseInt(pregunta2[i].value);
//         valueTotal += valuePregunta2; 
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta3.length; i ++){
//     pregunta3[i].addEventListener('change', ()=>{
//         valuePregunta3 = parseInt(pregunta3[i].value);
//         valueTotal += valuePregunta3
//         console.log(valueTotal);
//     })
// }
// for(let i = 0; i < pregunta4.length; i ++){
//     pregunta4[i].addEventListener('change', ()=>{
//         valuePregunta4 = parseInt(pregunta4[i].value);
//         valueTotal += valuePregunta4
//         console.log(valueTotal);
//         setTimeout(()=>{
//             sumaValores(valueTotal);
//         },200)
//     })
// }




                                            // EJERCICIO 12

// const errorTarjeta = document.getElementById('error-tarjeta');
// const errorNumero = document.getElementById('error-numero');


// const numeroTarjeta = document.getElementById('numero-tarjeta');
// const tipoTarjeta = document.getElementById('tipo');
// const nombre = document.getElementById('nombre');
// const ccv = document.getElementById('ccv');

// const regExNombre = /^([A-Z a-z]+[\s]*)+$/;
// const regExNumero = /^([0-9]*)+$/;


// numeroTarjeta.addEventListener('blur', ()=>{
//     if(numeroTarjeta.value.length < 16){
//         numeroTarjeta.style.border = '1px solid red';
//         errorTarjeta.innerHTML = `El número debe contener 16 caracteres`
//         numeroTarjeta.value = '';
//     } else{
//         numeroTarjeta.style.border = '1px solid green';
//         errorTarjeta.innerHTML = '';
//     }
// });

// numeroTarjeta.addEventListener('change', ()=>{
//     let valor = numeroTarjeta.value;
//     if(valor.length === 16){
//         valor = valor.slice(0,1);
//         console.log(valor);
//         if(valor === '5'){
//             tipoTarjeta.value = '2';
//             ccv.setAttribute('minlength', '4');
//             ccv.setAttribute('maxlength', '4');
//         } else if(valor === '3' || valor === '4'){
//             tipoTarjeta.value = '1';
//             ccv.setAttribute('minlength', '3');
//             ccv.setAttribute('maxlength', '3');
//         }else{
//             errorNumero.innerHTML = `Numero de tarjeta invalido`;
//         }
//     }
// })

// nombre.addEventListener('keyup', ()=>{
//     const valorNombre = nombre.value;
//     const comprobarNombre = regExNombre.test(valorNombre);
//     if(comprobarNombre === true){
//         nombre.style.border = '1px solid green'
//     } else{
//         nombre.style.border = '1px solid red'
//     }
// })

// ccv.addEventListener('keyup', ()=>{
//     const ccvValue = ccv.value;
//     const comprobarCcv = regExNumero.test(ccvValue);
//     console.log(comprobarCcv);
//     if(comprobarCcv === true){
//         ccv.style.border = '1px solid green'
//     }else{
//         ccv.style.border = '1px solid red'
//     }
// })


                                            // EJERCICIO 13

// const nombre = document.getElementById('nombre');
// const apellido = document.getElementById('apellido');
// const dni = document.getElementById('dni');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('repetir');
// const boton = document.getElementById('boton');

// const small = document.getElementsByTagName('small');
// const check = document.getElementById('checkbox');
// let valorPassword;



// // Expresiones regulares
// const validarTexto = (texto) => {
//     const regExNombre = /^([A-Z a-z]+[\s]*)+$/;
//     return regExNombre.test(texto);
// };
// const validarNumero = (numero) => {
//     const regExNumero = /^([0-9]*)+$/;
//     return regExNumero.test(numero);
// };
// const validarEmail = (email) => {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return regex.test(email.toLowerCase())
// };
// const validarPassword = (password) => {
//     const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
//     return regex.test(password)
// };


// nombre.addEventListener('keyup', ()=>{
//         const valorNombre = nombre.value;
//         const validacionNombre = validarTexto(valorNombre);
//         if(valorNombre.length > 0){
//             if(validacionNombre === true){
//                 nombre.style.border = '1px solid green';
//                 small[0].innerHTML = ' ';
//             } else{
//                 nombre.style.border = '1px solid red';
//                 small[0].innerHTML = `Solo puede contener texto`;
//             }
//         }else {
//             nombre.style.border = '1px solid black';
//             small[0].innerHTML = ' ';
//         }
// });

// apellido.addEventListener('keyup', ()=>{
//     const valorApellido = apellido.value;
//     const validacionNombre = validarTexto(valorApellido);
//     if(valorApellido.length > 0){
//         if(validacionNombre === true){
//             apellido.style.border = '1px solid green';
//             small[1].innerHTML = ' ';
//         } else{
//             apellido.style.border = '1px solid red';
//             small[1].innerHTML = `Solo puede contener texto`;
//         }
//     }else {
//         apellido.style.border = '1px solid black';
//         small[1].innerHTML = ' ';
//     }
// });

// dni.addEventListener('keyup', ()=>{
//     const valorDni = dni.value;
//     const validacionDni = validarNumero(valorDni);
//     if(valorDni.length > 0){
//         if(validacionDni === true && valorDni.length == 8){
//             dni.style.border = '1px solid green';
//             small[2].innerHTML = ' ';
//         } else{
//             dni.style.border = '1px solid red';
//             small[2].innerHTML = `Debe contener 8 números`;
//         }
//     }else {
//         dni.style.border = '1px solid black';
//         small[2].innerHTML = ' ';
//     }
// });

// email.addEventListener('keyup', ()=>{
//     const valorEmail = email.value;
//     const validacionEmail = validarEmail(valorEmail);
//     if(valorEmail.length > 0){
//         if(validacionEmail === true){
//             email.style.border = '1px solid green';
//             small[3].innerHTML = '';
//         }else{
//             email.style.border = '1px solid red';
//             small[3].innerHTML = `El formato del email no es válido`;
//         }
//     }else {
//         email.style.border = '1px solid black';
//         small[3].innerHTML = '';
//     }
// })


// password.addEventListener('change', ()=>{
//     valorPassword = password.value;
//     const validacionPassword = validarPassword(valorPassword);
//     if(valorPassword.length > 0){
//         if(validacionPassword === true){
//             password.style.border = '1px solid green';
//             small[4].innerHTML = '';
//         } else{
//             password.style.border = '1px solid red';
//             small[4].innerHTML = `Minimimo 8 = 1 núnero, 1 minúscula, 1 mayúscula y 1 caracter especial`;
//         }
//     }else {
//         password.style.border = '1px solid black';
//         small[4].innerHTML = '';
//     }
// });

// password2.addEventListener('change', ()=>{
//     const valorPassword2 = password2.value;
//     if(valorPassword2 == valorPassword){
//         password2.style.border = '1px solid green';
//         small[5].innerHTML = '';
//     } else{
//         password2.style.border = '1px solid red';
//         small[5].innerHTML = `Las contraseñas no son iguales`;
//     }
// });

// boton.addEventListener('click', ()=>{
//     if(check.checked === false){
//         small[7].innerHTML = 'Debe aceptar los términos y condiciones';
//     } else{
//         small[7].innerHTML = '';
//     }
// });

// check.addEventListener('click', ()=>{
//     small[7].innerHTML = '';
// })