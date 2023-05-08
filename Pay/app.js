// app.js
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Récupérer les données du formulaire
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;
    var cardholderName = document.getElementById('cardholder-name').value;
    
    // Valider les données et effectuer le paiement
    // (code de validation et de traitement du paiement ici)
    
    // Réinitialiser le formulaire après le paiement
    document.getElementById('payment-form').reset();
  });
  