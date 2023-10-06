let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

// Funcion que eligue dato random de array
//Math.random: devuelve un numero mayor o igual a 0 y menor que 1
//Math.floor: devuelve el numero redondea hacia abajo.
// Se multiplica para generar un numero random pero que este dentro del numero de los campos de la lista.
function generarExcusa() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excusa =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  return excusa;
}

//Codigo que muestra una excusa al cargar la página.
//document.getElementById("excusa"): Selecciona un elemento HTML en el documento usado su atributo id("excusa")
//.textCotent: modifica el contenido de texto dentro del elemento HTML
document.getElementById("excusa").textContent = generarExcusa();
