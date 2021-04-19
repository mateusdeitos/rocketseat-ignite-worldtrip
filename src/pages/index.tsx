import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import { Header } from "../components/Header";
import { AspectRatio, Divider, Heading, Icon, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
	return (
		<>
			<Header />
			<AspectRatio maxW="100%" maxH="335">
				<>
					<Image src="/assets/Background.svg" />
					<Flex overflow="inherit" direction="row" maxW={1440} m="0 auto" alignItems="center" justifyContent="space-between" px="140" py="80px">
						<VStack justifyContent="center" maxW="33rem" direction="column" alignItems="flex-start">
							<Text as="h1" color="gray.50" fontWeight="500" fontSize="2.25rem">5 Continentes,</Text>
							<Text as="h1" color="gray.50" fontWeight="500" fontSize="2.25rem">Infinitas Possibilidades</Text>
							<Text as="h3" color="gray.50" fontWeight="400" fontSize="1.25rem">Chegou a hora de tirar do papel a viagem que você sempre sonhou</Text>
						</VStack>
						<Spacer w="5rem" />
						<Image maxW="25rem" src="/assets/Airplane.svg" mb="-10rem" />
					</Flex>
				</>
			</AspectRatio>
			<Flex maxW={1160} m="0 auto" mt="7rem" justifyContent="space-between">
				<VStack spacing="1.5rem">
					<Image src="/assets/cocktail.svg" w={85} h={85} />
					<Text as="span" color="gray.400" fontSize="1.5rem" fontWeight="500">vida noturna</Text>
				</VStack>
				<VStack spacing="1.5rem">
					<Image src="/assets/surf.svg" w={85} h={85} />
					<Text as="span" color="gray.400" fontSize="1.5rem" fontWeight="500">praia</Text>
				</VStack>
				<VStack spacing="1.5rem">
					<Image src="/assets/building.svg" w={85} h={85} />
					<Text as="span" color="gray.400" fontSize="1.5rem" fontWeight="500">moderno</Text>
				</VStack>
				<VStack spacing="1.5rem">
					<Image src="/assets/museum.svg" w={85} h={85} />
					<Text as="span" color="gray.400" fontSize="1.5rem" fontWeight="500">clássico</Text>
				</VStack>
				<VStack spacing="1.5rem">
					<Image src="/assets/earth.svg" w={85} h={85} />
					<Text as="span" color="gray.400" fontSize="1.5rem" fontWeight="500">e mais...</Text>
				</VStack>
			</Flex>

			<Flex direction="row" justifyContent="center" alignItems="center">
				<Divider ml={45} mt="5rem" mb="3.25rem" w={90} border="2px solid" borderColor="gray.500" bg="gray.500" />
			</Flex>
			<Flex direction="column" justifyContent="center" alignItems="center">
				<Text color="gray.400" fontSize="2.25rem" fontWeight="500" lineHeight="3.375rem">Vamos nessa?</Text>
				<Text color="gray.400" fontSize="2.25rem" fontWeight="500" lineHeight="3.375rem">Então escolha seu continente</Text>
			</Flex>

			<Flex maxW={1240} h={["250px","450px"]} mx="auto" mt="3.25rem" mb="2.5rem">
				<Swiper
					slidesPerView={1}
					style={{ width: '100%', flex: '1', height: '100%' }}
				>
					<SwiperSlide style={{ position: 'relative', textAlign: 'center' }}>
						<Flex
							w="100%"
							h="100%"
							align="center"
							justify="center"
							direction="column"
							bgImage={`url('/assets/continents/Europe.svg')`}
							bgPosition="100% 30%"
							bgRepeat="no-repeat"
							bgSize="cover"
							textAlign="center"
						>
							<Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="700">Europa</Heading>
							<Text fontWeight="700" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo</Text>

						</Flex>
					</SwiperSlide>
				</Swiper>
			</Flex>
		</>
	)
}
