import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react"

function Profile(){
    return (
        <div className="flex justify-center py-5">
            <div className=""> 
                <img 
                  className="w-[800px] h-[230px] z-0 rounded-xl"
                  src="https://images3.alphacoders.com/132/1326193.png" 
                  alt=""
                />
                <div className="text-whit_custom1 flex items-center -mt-[50px] z-10 px-10">
                    <img 
                      className="h-[130px] w-[130px] border-1 border-whit_custom2 drop-shadow-md rounded-3xl"
                      src="https://i.pinimg.com/564x/78/70/8b/78708b5bbfd02ec2cd7c2516b62225bf.jpg" 
                      alt="" />
                    <div className="flex w-full mt-[30px]">
                        <div className="px-5">
                            <strong className="text-whit_custom1">
                                @aristoteles269
                            </strong>
                            <p className="text-whit_custom2">
                                Aristóteles Alves
                            </p>
                        </div>
                        <ul className="flex gap-1 justify-end w-full">
                            <li className="hover:bg-whit_custom2 hover:text-black_custom2 rounded-md h-fit p-1">
                                <a className=""
                                  href="">
                                    <InstagramLogo/>
                                </a>
                            </li>
                            <li className="hover:bg-whit_custom2 hover:text-black_custom2 rounded-md h-fit p-1">
                                <a href="">
                                    <GithubLogo/>
                                </a>
                            </li>
                            <li className="hover:bg-whit_custom2 hover:text-black_custom2 rounded-md h-fit p-1">
                                <a href="">
                                    <LinkedinLogo/>
                                </a>
                            </li>
                            <li className="hover:bg-whit_custom2 hover:text-black_custom2 rounded-md h-fit p-1">
                                <a href="">
                                    <WhatsappLogo/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Profile }