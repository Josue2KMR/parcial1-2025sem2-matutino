/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const numero = Math.floor(Math.random() * 10);
  
  const segmentos = ['seg-a', 'seg-b', 'seg-c', 'seg-d', 'seg-e', 'seg-f', 'seg-g'];
    segmentos.forEach(id => {
    document.getElementById(id).style.display = 'block';
  });
  
  
  switch(numero){
    case 1:
      document.getElementById('seg-a').style.display = 'none';
      document.getElementById('seg-d').style.display = 'none';
      document.getElementById('seg-e').style.display = 'none';
      document.getElementById('seg-f').style.display = 'none';
      document.getElementById('seg-g').style.display = 'none';
      break;
    case 2:
      document.getElementById('seg-c').style.display = 'none';
      document.getElementById('seg-f').style.display = 'none';
      break;
    case 3:
      document.getElementById('seg-e').style.display = 'none';
      document.getElementById('seg-f').style.display = 'none';
      break;
    case 4:
      document.getElementById('seg-a').style.display = 'none';
      document.getElementById('seg-e').style.display = 'none';
      document.getElementById('seg-d').style.display = 'none';
      break;
    case 5:
      document.getElementById('seg-b').style.display = 'none';
      document.getElementById('seg-e').style.display = 'none';
      break;
    case 6:
      document.getElementById('seg-b').style.display = 'none';
      break;
    case 7:
      document.getElementById('seg-d').style.display = 'none';
      document.getElementById('seg-e').style.display = 'none';
      document.getElementById('seg-f').style.display = 'none';
      document.getElementById('seg-g').style.display = 'none';
      break;
    case 9:
      document.getElementById('seg-d').style.display = 'none';
      document.getElementById('seg-e').style.display = 'none';
      break;
    case 0:
      document.getElementById('seg-g').style.display = 'none';
      break;
    default:
      break;
  }
}
