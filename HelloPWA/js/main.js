window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    	.register('./sw.js')        
    	.then(function(registration) {
          // SUCESSO - ServiceWorker Registrado
          console.log(
            "ServiceWorker registrado com sucesso no escopo: ",
            registration.scope
          );
        })
        .catch(function(err) {
          // ERRO - Falha ao registrar o ServiceWorker
          console.log("Falha ao registrar o ServiceWorker: ", err);
        });;
  }
}
