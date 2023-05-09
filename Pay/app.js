// app.js
document.getElementById('pay').addEventListener('submit', function(event) {
    event.preventDefault();
    // Récupérer les données du formulaire
    var numCarte = document.getElementById('numCarte').value;
    var date_expiration = document.getElementById('date_expiration').value;
    var cvv = document.getElementById('cvv').value;
    var nom_titulaire = document.getElementById('nom_titulaire').value;
    var Name = document.getElementById('Name').value;
   
    
    // Réinitialiser le formulaire après le paiement
    document.getElementById('pay').reset();
  });
  