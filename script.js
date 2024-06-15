// Função para abrir e fechar o menu
function menuShow() {
    let mobileiconmenu = document.querySelector('.mobilemenu');
    if (mobileiconmenu.classList.contains('open')){
        mobileiconmenu.classList.remove('open');
        document.querySelector('.icon').src="img/menu_white_36dp.svg";
    }else{
        mobileiconmenu.classList.add('open')
        document.querySelector('.icon').src="img/close_white_36dp.svg";
    }

} 
// Fim função abrir menu

// Função mostrar projetos escondidos
var btn = document.querySelector('#mostrar button');
var containers = document.querySelectorAll('.escondido');

btn.addEventListener('click', function(){
    containers.forEach(function(container) {
        if(container.style.display === 'flex') {
            container.style.display = 'none';
            btn.textContent = 'Ver mais';
            btn.classList.remove('vermenos-button');
            btn.classList.add('vermais-button');
        } else {
            container.style.display = 'flex';
            btn.textContent = 'Ver menos';
            btn.classList.remove('vermais-button');
            btn.classList.add('vermenos-button');
        }
    });
});
// Fim função abrir projetos

// Função para mandar email
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email_form');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('nome_input').value;
        const emailInput = document.getElementById('email_input').value;
        const messageInput = document.getElementById('input_mensagem').value;

        const subject = 'Email para contato';
        const body = `${messageInput}`;

        const mailToLink = `mailto:yves2006122@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailToLink;
    });
});

// FIM função para mandar email