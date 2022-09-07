const family = [
  'Carlo',
  'Diamante',
  'Carla',
  'Francesco',
  'Andrea',
  'Valerio Rossi',
  'Concetta',
  'Antonio',
  'Gianni',
  'Franca',
  'Regina',
  'Gioppe',
  'Pietro',
  'Brando',
  'Veronica',
  'Fabio',
  'Valerio',
  'Giordano'
]
console.log(family);

let un = []

const start_estr = document.getElementById('name').innerHTML="Estrai"

// Bottoni
const button = document.getElementById('button')
button.addEventListener('click',estrai)

const reset = document.getElementById('reset')
reset.addEventListener('click', function res(){
  for (let index = 0; index < un.length; index++) {
    family.push(un[index]) 
  }
  console.log(family, 'RESET FAMILY');
  un = []
  console.log(un, 'CONTROLLO SI SVUOTA');
  document.getElementById('name').innerHTML="Estrai"
})

// Funzione di estrazione
function estrai() {
  n = Math.round(Math.random() * (family.length));

  for (let index = 0; index < family.length; index++) {
    if (index === n) {
      // UNIVOCITA' 
      unvivoc(un, family[index], family)
      console.log(un, 'CONTROLLO SI RIEMPIE');
      console.log(family, 'FAMILY SI SVUOTA'); 
      emptyFamily(family) 
    }
  }
}

function unvivoc(un, estr, f) {
  if (!un.includes(estr)) {
    un.push(estr)
    document.getElementById('name').innerHTML = estr
    f.splice(n, 1)
  }
}

function emptyFamily(f) {
  if (f.length === 0) {
    document.getElementById('name').innerHTML = 'FINE ESTRAZIONE'
  }
}


 







