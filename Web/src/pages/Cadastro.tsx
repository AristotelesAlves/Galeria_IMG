import cadastroimg from "../assets/cadastro.png";

function Cadastro(){
    return (
        <section className="w-screen h-screen flex bg-gradient-to-tl from-custumBlue">
            <div className="w-full flex flex-col justify-center items-center gap-2 h-screen">
                <h1>
                    Cadastro
                </h1>
                <form className="flex flex-col w-72">
                    <label>
                        Nome
                    </label>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      type="text" 
                      name="" 
                      id="" 
                    />

                    <label>
                        E-mail
                    </label>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      type="text" 
                      name="" 
                      id="" 
                    />

                    <label>
                        Senha
                    </label>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      type="password" 
                      name="" 
                      id="" 
                    />

                    <label>
                        Confirme a senha
                    </label>
                    <input 
                      className="bg-transparent border border-custumBlue rounded-md px-1"
                      type="password" 
                      name="" 
                      id="" 
                    />
                </form>
            </div>
            <div className="h-screen w-full bg-customCadastroImg bg- bg-no-repeat bg-cover bg-center">
            </div> 
        </section>
    )
}

export { Cadastro }