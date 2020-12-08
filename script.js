// dark-light mode button //

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change' , () => {
    document.body.classList.toggle('dark');
});

// Contact Form //

function validation () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var text;

    alert("Form Submitted Successfully!")
    return false;
}