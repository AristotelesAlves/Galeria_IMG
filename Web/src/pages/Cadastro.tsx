import { useState } from "react";

function Cadastro(){

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [senhaTow, setSenhaTow] = useState<string>('');
    const [checkBox, setCheckBox] = useState<boolean>(false);
    const [errorNome, setErrorNome] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorSenha, setErrorSenha] = useState<string>('');
    const [errorCheckBox, setErrorCheckBox] = useState<boolean>(false);

    function submitform(){
        addEventListener('submit',(e) => {
            e.preventDefault();
        })

        if (nome.length <= 0 ){
            setErrorNome('Por favor Insira seu nome');
            return
        }
        setErrorNome('');
        if (email.length <= 0){
            setErrorEmail('Por favor Insira seu e-mail');
            return
        }
        setErrorEmail('');
        if (senha.length <= 0) {
            setErrorSenha('Por favor Insira sua senha');
            return
        }
        setErrorSenha('');
        if (senha != senhaTow){
            setErrorSenha('A senha não se coincidem')
            return
        }
        setErrorSenha('')
        if (senha.length < 9) {
            setErrorSenha('Deve ter no minimo 8 caracteres')
            return
        }
        setErrorSenha('')

        console.log(senha == senhaTow ? 'bateu':'não bateu')
        // if (checkBox == false){
        //     setErrorCheckBox(true);
        //     return
        // }
        // setErrorCheckBox(false);

        window.alert('eviado');
    }
    
    return (
        <section className="w-screen h-screen flex bg-gradient-to-tl from-custumBlue">
            <div className="w-full flex flex-col justify-center items-center gap-2 h-screen">
                <h1>
                    Cadastro
                </h1>
                <form className="flex flex-col w-72">
                    <div className="flex justify-between items-center">
                        <label>
                            Nome
                        </label>
                        {
                            errorNome.length > 0 ?
                            <label className="text-sm text-red-600">
                                {errorNome}
                            </label>:
                            ""
                        }
                    </div>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      onChange={(e) => setNome(e.target.value)}
                      value={nome}
                      type="text" 
                      name="nome" 
                      id="npme" 
                    />

                    <div className="flex justify-between items-center">
                        <label>
                            E-mail
                        </label>
                        {
                            errorEmail.length > 0 ?
                            <label className="text-sm text-red-600">
                                {errorEmail}
                            </label> :
                            ""
                        }
                    </div>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text" 
                      name="email" 
                      id="email" 
                    />

                    <div className="flex justify-between items-center">
                        <label>
                            Senha
                        </label>
                        {
                            errorSenha.length > 0 ? 
                            <label className="text-sm text-red-600">
                                {errorSenha}
                            </label> :
                            ""
                        }
                    </div>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      onChange={(e) => setSenha(e.target.value)}
                      value={senha}
                      type="password" 
                      name="senha" 
                      id="senha" 
                    />

                    <label>
                        Confirme a senha
                    </label>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      onChange={(e) => setSenhaTow(e.target.value)}
                      value={senhaTow}
                      type="password" 
                      name="senhaTwo" 
                      id="senhaTwo" 
                    />
                    <button 
                      className="w-full bg-custumBlue text-white rounded-md py-1 mt-2"
                      onClick={submitform}
                      type="submit">
                        Cadastrar
                    </button>

                    <a className="flex w-full justify-center text-sm opacity-75 mt-1">
                        Voltar a tela de login
                    </a>

                </form>
            </div>
            <div className="h-screen w-full bg-customCadastroImg bg-no-repeat bg-cover bg-center">
            </div> 
        </section>
    )
}

export { Cadastro }