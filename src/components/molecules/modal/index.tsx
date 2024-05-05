import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from '@chakra-ui/react'
import React from 'react'

const ModalPopUp: React.FC<{
    id: number
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
}> = ({ isOpen, onClose, title, description }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
            <ModalContent
                backgroundColor="black"
                color="white"
                boxShadow="inner"
                pb={4}
            >
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{description}</ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalPopUp
