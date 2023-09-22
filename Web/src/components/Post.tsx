import { ShareNetwork,UserCirclePlus,Heart, DotsThree } from "phosphor-react";

interface propsPost{
    nickName: string;
    nome: string;
    imgPerfil: string;
    descricao: string;
    post: string;
    data: string;
}


function Post(props: propsPost){

    return (
        <div className="bg-black_custom2 w-[600px] p-3 rounded-xl flex flex-col gap-2 drop-shadow-xl">
            <div className="flex justify-between items items-center">
                <div className="flex items-center gap-2">
                    <img className="w-[40px] h-[40px] rounded-lg drop-shadow-xl"
                      src={props.imgPerfil} 
                      alt=""
                    />
                    <div className="flex flex-col">
                        <div className="flex gap-1 text-whit_custom1 items-center">
                            <p>
                                {props.nickName}
                            </p>
                            <p className="text-whit_custom2 text-xs">
                                • {props.data}
                            </p>
                        </div>
                        <p className="text-whit_custom2">
                            {props.nome}
                        </p>
                    </div>
                </div>

                <div className="hover:bg-black_custom3 rounded-full p-2">
                    <DotsThree size={25} color="#EDEDED"/>
                </div>
            </div>
            <p className="text-whit_custom1">
                {props.descricao}
                <label className="text-green-800 ml-2">
                    Ler mais
                </label>
            </p>
            <div>
                <img className="w-full h-[400px]"
                  src={props.post} 
                  alt="" />
            </div>

            <div>
                <ul className="text-whit_custom1 flex gap-5 font-normal mt-2">
                    <li className="flex gap-1 items-center hover:bg-black_custom3 px-2 py-2 rounded-lg">
                        <Heart/>
                        Gostei
                    </li>
                    <li className="flex gap-1 items-center hover:bg-black_custom3 px-2 py-2 rounded-lg">
                        <UserCirclePlus/>
                        Pedir para participar
                    </li>
                    <li className="flex gap-1 items-center hover:bg-black_custom3 px-2 py-2 rounded-lg">
                        <ShareNetwork/>
                        Compartilhar
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Post }