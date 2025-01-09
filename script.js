function validacao(){
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#mail').value;
    const mensagem = document.querySelector('#mensagem').value;
    const telefone = document.querySelector('#telefone').value;
    const senha = document.querySelector('#senha').value;

    * if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return false;
        }

    if (nome.length <3 || nome.length > 50){
        alert('O nome deve ter entre 3 e 50 caracteres.');
        return false;  
    }
    if (email.length <5 || email.length > 50){
        alert('O e-mail deve ter entre 5 e 50 caracteres.');
        return false;
    }

    const emailPadrao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if(!emailPadrao.test(email)){
        alert('E-mail inválido.');
        return false;
    }

    const senhaPadrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!senhaPadrao.test(senha)){
        alert("A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
        return false;
        }
    
    const telefonePadrao = /^(?:\(\d{2}\)\s?\d{5}-\d{4}|\d{2}\s?\d{5}-\d{4}|\d{11})$/;
    if(!telefonePadrao.test(telefone)){
        alert('Telefone inválido. Formato esperado: (XX) XXXXX-XXXX');
        return false;
        }

    return true;
    } 

    document.getElementById('cct').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validacao()) {
            const nome = document.querySelector('#nome').value;
            const email = document.querySelector('#mail').value;
            const mensagem = document.querySelector('#mensagem').value;
            const telefone = document.querySelector('#telefone').value;
            const senha = document.querySelector('#senha').value;
            const storangeOption = document.querySelector('input[name="storange"]:checked').value;
            if (storangeOption === "local"){
                localStorage.setItem('nome', nome);
                localStorage.setItem('email', email);
                localStorage.setItem('mensagem', mensagem);
                localStorage.setItem('telefone', telefone);
                localStorage.setItem('senha', senha);
                alert('Dados salvos com sucesso no Local Storange!');
                
            }else if (storangeOption === "session"){
                sessionStorage.setItem('nome', nome);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('mensagem', mensagem);
                sessionStorage.setItem('telefone', telefone);
                sessionStorage.setItem('senha', senha);
                alert('Dados salvos com sucesso no Session Storange!');

            }
        
        }
});

document.getElementById('showLocalStorange').addEventListener('click', function(){
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const mensagem = localStorage.getItem('mensagem');
    const telefone = localStorage.getItem('telefone');
    const senha = localStorage.getItem('senha');
    if (nome || email || mensagem || telefone || senha) {
        document.getElementById('localStorangeData').innerHTML= `
        <h2>Session Storange</h2>
        <p><storng><p>Nome: </storng>${nome}</p>
        <p><storng><p>Email: </storng>${email}</p>
        <p><storng><p>Mensagem: </storng>${mensagem}</p>
        <p><storng><p>Telefone: </storng>${telefone}</p>
        <p><storng><p>Senha: </storng>${senha}</p>
        <button id="clearLocalStorange">Clear Local Storange</button>
        `;
        document.getElementById('localStorangeData').style.display='block';

        document.getElementById('clearLocalStorange').addEventListener('click', function (){
            localStorage.clear();
            alert('dados limpos com sucesso');
            document.getElementById('localStorangeData').style.display='none';
        })
});

document.getElementById('showSessionStorange').addEventListener('click', function(){
    const nome = sessionStorage.getItem('nome');
    const email = sessionStorage.getItem('email');
    const mensagem = sessionStorage.getItem('mensagem');
    const telefone = sessionStorage.getItem('telefone');
    const senha = sessionStorage.getItem('senha');
    if (nome || email || mensagem || telefone || senha) {
        document.getElementById('sessionStorangeData').innerHTML= `
        <h2>Session Storange</h2>
        <p><storng><p>Nome: </storng>${nome}</p>
        <p><storng><p>Email: </storng>${email}</p>
        <p><storng><p>Mensagem: </storng>${mensagem}</p>
        <p><storng><p>Telefone: </storng>${telefone}</p>
        <p><storng><p>Senha: </storng>${senha}</p>
        <button id="clearSessionStorange">Clear Session Storange</button>
        `;
        document.getElementById('sessionStorangeData').style.display='block';

        document.getElementById('clearSessionStorange').addEventListener('click', function(){
            sessionStorage.clear();
            alert('dados limpos com sucesso');
            document.getElementById('sessionStorangeData').style.display='block';
        })
});

document.getElementById('clearSession').addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();

    alert('todos dados limpos com sucesso');
    document.getElementById('sessionStorangeData').style.display='block';;
    document.getElementById('localStorangeData').style.display='none';
})
