import React, {useRef, useEffect, useState} from "react";
import { Background } from './styles';
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [emailNovo, setEmailNovo] = useState(null);

    const handleClickHome = () => {
        navigate('/home')
    }

    
    useEffect(() => {

        if (formRef.current) {

        formRef.current.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o comportamento padrão de recarregar a página
        
            let dadosDoFormulario = new FormData(this); // Cria um objeto FormData com os dados do formulário
        
            fetch('http://localhost:8080/registrar', {
                method: 'POST',
                body: dadosDoFormulario
            })
            .then(response => response.json())
            .then(data => {
                // Manipule os dados recebidos aqui
                setEmailNovo(data.emailnovo);
                console.log(data.emailnovo);
            })
            .catch(error => {
                // Manipule qualquer erro aqui
                console.error('Erro:', error);
            });
        });
    }}, []);

    console.log(emailNovo)


    return (
        <Background>
            <header>
                <h1>Ágora</h1>
                
                <form>
                    <label>Email: </label>
                    <input type='text'></input>
            
                    <label>Senha: </label>
                    <input type='text'></input> 
                    
                    <button onClick={handleClickHome}>Entrar</button>
                </form>
        
            </header>
        
            <div id='cadastro'>
                <h3>Ainda não tem uma conta? Cadastre-se.</h3>
        
                <form id='formulario_cadastro' ref={formRef} action="http://localhost:8080/registrar" method="POST">
            
                    <div>
                        {emailNovo === false ? (
                            <p id="mensagem_erro">email já cadastrado</p>
                        ) : null}
                        <label>Email: </label>
                        <input type='text' id="email" name="email" placeholder="meuamail@gmail.com"></input>
                    </div>
            
                    <div>
                        {emailNovo === false ? (
                            <p id="mensagem_erro">email já cadastrado</p>
                        ) : null}
                        <label>Usuario: </label>
                        <input type='text' id="usuario" name="usuario"></input>
                    </div>

                    <div>
                    {emailNovo === false ? (
                            <p id="mensagem_erro">email já cadastrado</p>
                        ) : null}
                        <label>Hashtag: </label>
                        <input type='text' id="hashtag" name="hashtag" placeholder="Maria56"></input>
                    </div>
            
                    <div>
                        <label>Senha: </label>
                        <input type='password' id="senha" name="senha"></input>
                    </div>
            
                    <div>
                        <label>Repita sua senha: </label>
                        <input type='password' id="confirmar_senha" name="confirmar_senha"></input>
                    </div>
                    
                    <button type="submit" value="Enviar">Fazer Cadastro</button>
                </form>
            </div>
        
            <p>Ágora é uma rede social comprometida com o debate e a criação de novas ideais visando uma sociedade 
                mais justa para todos.</p>*/
        </Background>
    )
}

export { Login }
