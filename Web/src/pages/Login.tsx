import { useState } from "react";
import alilcacl from "../assets/alilcacl.jpg"

function Login(){

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorSenha, setErrorSenha] = useState<string>('');
    const [checkBox, setCheckBox] = useState<boolean>(false);

    function handleLogin(){

        addEventListener('submit', (e) => {
            e.preventDefault();
        })

        if(email.length <= 0){
            setErrorEmail("Por favor insira seu email!")
            return;
        }
        setErrorEmail("")

        if(senha.length == 0){
            setErrorSenha("Por favor insira sua senha!")
            return;
        }
        setErrorSenha("")


        window.alert(`enviado com sucesso ${checkBox}`)
    }

    return (
        <section className="flex w-sreen justify bg-gradient-to-tr from-custumBlue">
            <div className="flex w-[50%]">
                <img className=" h-screen" src={alilcacl} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center h-screen w-full">
                <h1 className="text-2xl font-bold">
                    LOGIN
                </h1>
                <form className="">
                    <div className="flex flex-col w-72 ">
                        <div className="flex gap-2 items-center">

                            <label className="font-semibold">
                                E-mail
                            </label>

                            {errorEmail.length > 0 ? 
                                <label className="text-red-500 text-xs">
                                    {errorEmail}
                                </label> : "" 
                            }

                        </div>
                        <input 
                          className="bg-transparent border border-custumBlue rounded-md px-1"
                          placeholder="Seu E-mail"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text" 
                          name="text" 
                          id="text" 
                        />

                        <div className="flex gap-2 items-center">
                            <label>
                                Senha
                            </label>

                            {errorSenha.length > 0 ? 
                                <label className="text-red-500 text-xs">
                                    {errorSenha}
                                </label> : "" 
                            }
                        </div>
                        

                        <input 
                          className="bg-transparent border border-custumBlue rounded-md px-1"
                          placeholder="Sua senha"
                          onChange={(e) => setSenha(e.target.value)}
                          value={senha}
                          type="password"
                          name="password" 
                          id="password" 
                        />
                    </div>

                    <div className="flex justify-between items-center h-fit py-2 text-sm">

                        <div className="flex gap-1 items-center">
                            <input  className="bg-none" 
                              onClick={() => setCheckBox(!checkBox)}
                              type="checkbox" 
                              name="checkbox" 
                              id="checkbox"
                            />
                            <label className="opacity-75">
                                Lembre-me
                            </label>
                        </div>

                        <a href="#" className="underline decoration-auto opacity-75">
                            Esqueceu a senha ?
                        </a>

                    </div>

                    <button className="w-full bg-custumBlue text-white rounded-md py-1 "
                    type="submit"
                    onClick={handleLogin}
                    >
                        Entrar
                    </button>
                    <a className="flex w-full justify-center text-sm opacity-75 mt-1">
                        Ainda não tem cadastro ?
                    </a>
                </form>
            </div>
        </section>
    )
}

export { Login }