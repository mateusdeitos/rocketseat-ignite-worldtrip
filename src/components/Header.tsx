import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

export const Header = () => {
	return (
		<Flex align="center" justifyContent="center" h="100">
			<Image src="/assets/Logo.svg" w="185" />
		</Flex>
	)
}