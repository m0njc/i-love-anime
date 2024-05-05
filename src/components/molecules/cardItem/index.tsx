import { Media } from '@/app/model/ContentResponse'
import PrimaryButton from '@/components/atoms/primaryButton'
import {
    Image,
    Card,
    Box,
    Text,
    CardBody,
    Stack,
    Heading,
    Divider,
    CardFooter,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import ModalPopUp from '../modal'

const CardItem: React.FC<Media> = ({ coverImage, title, description }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <ModalPopUp
                id={0}
                title={title.english}
                description={description}
                isOpen={isOpen}
                onClose={onClose}
            />
            <Card
                maxW="sm"
                variant="outline"
                borderColor="gray.600"
                bg="black"
                color="white"
            >
                <CardBody>
                    <Image
                        src={coverImage.extraLarge}
                        alt={title.english}
                        borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{title.english}</Heading>
                        <Text noOfLines={3}>{description}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter alignItems="end">
                    <PrimaryButton onClick={onOpen} btnText="Read more" />
                </CardFooter>
            </Card>
        </Box>
    )
}

export default CardItem
