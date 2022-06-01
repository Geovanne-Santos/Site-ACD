window.addEventListener('DOMContentLoaded', function(e) {
    var speakBtn = document.querySelector('#speakBtn');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

      var recognition = new SpeechRecognition();

      recognition.lang = "pt-BR";

      speakBtn.addEventListener('click', function(e) {
        recognition.start();
      }, false);

      recognition.addEventListener('result', function(e) {
        console.log(e);
        var result = e.results[0][0].transcript;
        console.log(result);
        if (result.toLowerCase())
        window.location.href = 'http://' + result + '.com';

      }, false);
    } else{
      alert('Este navegador não suporta esta funcionalidade ainda!');
    }
  }, false);


  window.addEventListener('DOMContentLoaded', function(a) {
    var themeBtn = document.querySelector('#themeBtn');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

      var recognition = new SpeechRecognition();

      recognition.lang = "pt-BR";

      themeBtn.addEventListener('click', function(a) {
        recognition.start();
      }, false);

      recognition.addEventListener('result', function(a) {
        console.log(a);
        var result = a.results[0][0].transcript;
        console.log(result);
        if (result == 'luz') {
            document.body.classList.toggle('luz-apagada');
        }
      }, false);
    } else{
      alert('Este navegador não suporta esta funcionalidade ainda!');
    }
  }, false);

  window.addEventListener('DOMContentLoaded', function(b) {
    var contactBtn = document.querySelector('#contactBtn');

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

      var recognition = new SpeechRecognition();

      recognition.lang = "pt-BR";

      contactBtn.addEventListener('click', function(b) {
        recognition.start();
      }, false);

      recognition.addEventListener('result', function(b) {
        console.log(b);
        var result = b.results[0][0].transcript;
        console.log(result);
        if (result == 'contato') {
            document.location.href = 'contato.html';
        }

      }, false);
    } else{
      alert('Este navegador não suporta esta funcionalidade ainda!');
    }
  }, false);
