function email(){
    let parms ={
        name : document.getElementById('name').value,
        subject : document.getElementById('inputEmail').value,
        email: document.getElementById('subject').value,
        message: document.getElementById('inputMessage').value,
        
    }
    emailjs.send("service_wt7kpzo","template_rcbffcj",parms).then(alert("email send succuss"))
}


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
})