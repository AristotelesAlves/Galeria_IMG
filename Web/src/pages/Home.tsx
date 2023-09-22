import { Post } from "../components/Post"

function Home(){
    return(
        <section className="flex justify-center items-center mt-5 flex-col gap-6 pb-10">

            <div className="bg-black_custom2 w-[600px] p-3 rounded-xl flex gap-2 drop-shadow-xl">
                <img className="h-[50px] w-[50px] rounded-lg"
                  src="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg" 
                  alt=""
                />
                <div className="w-full flex bg-black_custom3 rounded-xl text-whit_custom1 hover:text-whit_custom2">
                    <button className="w-full h-full text-start px-2 py-1">
                        Publique seu projeto
                    </button>
                </div>
            </div>




            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/564x/a0/dd/73/a0dd7339bce7a2c58f7700c6ca372033.jpg"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />


            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/originals/b3/ac/10/b3ac109e101448f996a3b64c9750a8a8.gif"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />


            <Post
              imgPerfil="https://i.pinimg.com/564x/a2/cd/b1/a2cdb17288528e7e5e1402ea65e1cac3.jpg"
              nickName="@Aristoteles269"
              nome="Aristoteles Alves"
              data="27/09/2002"
              post="https://i.pinimg.com/originals/5e/14/e6/5e14e64d989065c52b103944046d39ba.gif"
              descricao="Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos Uma descrição do projeto falando como que vai ser desenvolvido e requisitos para desenvolver juntos. "
            />
        </section>
    )
}

export { Home }