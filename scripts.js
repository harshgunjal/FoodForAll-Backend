document.getElementById('donorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering your food! We will connect you with NGOs soon.');
});

document.getElementById('ngoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering your food request! We will connect you with local donors soon.');
});
