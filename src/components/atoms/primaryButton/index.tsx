import { Button } from '@chakra-ui/react'
import React from 'react'

const PrimaryButton: React.FC<{
    btnText: string
    onClick: () => void
}> = ({ btnText, onClick }) => {
    return (
        <Button
            onClick={onClick}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            colorScheme="white"
        >
            {btnText}
        </Button>
    )
}

export default PrimaryButton
