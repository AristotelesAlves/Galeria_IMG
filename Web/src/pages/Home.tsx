import { useState } from "react"
import { Post } from "../components/Post"
import { ModalPostPublicacao } from "../components/ModalPostPublicacao"

function Home(){

  const [open,setOpen] = useState<boolean>(false)
    console.log(open)
    return(
        <section className="flex justify-center items-center mt-5 flex-col gap-6 pb-10">

            <ModalPostPublicacao open={open}/>

            <div className="bg-black_custom2 w-[600px] p-3 rounded-xl flex gap-2 drop-shadow-xl">
                <img className="h-[50px] w-[50px] rounded-lg"
                  src="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg" 
                  alt=""
                />
                <div className="w-full flex bg-black_custom3 rounded-xl text-whit_custom1 hover:text-whit_custom2">
                    <button className="w-full h-full text-start px-2 py-1"
                      onClick={() => setOpen(!open)}
                    >
                        Publique seu projeto
                    </button>
                </div>
            </div>




            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/564x/b0/cf/3b/b0cf3b04914df89156c87c3131fce153.jpg"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />


            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/564x/60/11/79/60117955c262384dfc81702d21642473.jpg"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />


            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/564x/52/87/95/528795ee50ce6c1ebc533ebe7aa2b92f.jpg"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />
        </section>
    )
}

export { Home }