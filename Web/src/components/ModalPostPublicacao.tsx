import { ArrowDown } from "phosphor-react"
import { useState } from "react"
import ReactModal from "react-modal"


interface propsModalPublic {
    open: boolean
}


function ModalPostPublicacao(props : propsModalPublic){

    const [openModal, setOpenModal] = useState<boolean>(props.open) 

    console.log(openModal)
    
    const styleModal = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#242526"
        }
    }

    // function closeModal() {
    //     setOpenModal(false)
    // }

    return (
        <ReactModal
          isOpen={openModal}
          style={styleModal}
        >   
            <img 
              className="h-[70px] w-[50px] rounded-lg"
              src="https://i.pinimg.com/564x/bc/9c/d2/bc9cd273cc9bcb2caafec4a82b7006df.jpg" 
              alt="" 
            />
            <strong>Nome</strong>
            <p>Privacidade</p>
            <ArrowDown/>
            <button className="text-whit_custom1"
              onClick={() => setOpenModal(!openModal)} 
              type="button"
            >
                Close
            </button>


        </ReactModal>
    )
}

export { ModalPostPublicacao }