var coloreTasti = ["red","blue","green","yellow"];
var randomPattern = [];
var i=0;
var round=1;
var start = true;
var flood=0;

function sequenzaSuccessiva(){                                                  // funzione che aggiunge un pulsante alla sequenza, nel caso in cui la sequenza digitata sia corretta
  var numeroCasuale = Math.floor(Math.random()*4);
  var coloreScelto = coloreTasti[numeroCasuale];
  randomPattern.push(coloreScelto);
  $("#"+ coloreScelto).fadeOut(100).fadeIn(100);
  playAudio(coloreScelto);
}


function playAudio(colore){                                                     // funzione richiamata per riprodurre il file audio di ogni tasto
  var audio= new Audio("sounds/"+colore+".mp3");
  audio.play();
}


function confronto(colore){                                                     // funzione che controlla se l'utente ha premuto il tasto corretto della sequenza
 if(colore===randomPattern[i] )
  i++;
 else
  {
    i=0;
    randomPattern.length=0;
    round=1;
    $("h1").text("Hai perso! Premi un tasto per ricominciare");
    start=true;
    $("body").addClass("red");
  }

  if(i===randomPattern.length && randomPattern.length>0)
  {
    i=0;
    round++;
    $("h1").text("Round  "+round);
    setTimeout(sequenzaSuccessiva,1500);
  }
}


function rimuovi(colore)                                                        // funzione richiamata per gestire l' effetto grafico della pressione del mouse
{
  $(colore).removeClass("pressed"),3000;
}



// listeners in ascolto (pulsanti)
$("#green").on("click", function(){$("#green").addClass("pressed"); setTimeout(rimuovi,100,"#green"); playAudio("green");   confronto("green");});
$("#red").on("click",  function(){$("#red").addClass("pressed"); setTimeout(rimuovi,100,"#red");  playAudio("red");  confronto("red");});
$("#yellow").on("click", function(){$("#yellow").addClass("pressed"); setTimeout(rimuovi,100,"#yellow"); playAudio("yellow");  confronto("yellow");});
$("#blue").on("click", function(){$("#blue").addClass("pressed"); setTimeout(rimuovi,100,"#blue"); playAudio("blue");  confronto("blue");});


$(document).keydown(function(){if(start){ start = false; sequenzaSuccessiva();$("h1").text("Round  1");$("body").removeClass("red");}});

//$(document).keydown(function(){sequenzaSuccessiva(); $("h1").text("Round  1")});
