import { Avatar, AvatarBadge, AvatarGroup, Flex, Text } from "@chakra-ui/react";

export default function Circle() {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={8}>
      <Text m={2} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
        Starter NextJS + Chakra UI
      </Text>
      <AvatarGroup size="md" max={4}>
        <Avatar
          name="RakaTrust"
          src="https://avatars.githubusercontent.com/u/83684256?v=4"
        >
          <AvatarBadge
            borderColor="papayawhip"
            boxSize="1.25em"
            bg="green.500"
          />
        </Avatar>
        <Avatar
          name="Dependa bot"
          src="https://avatars.githubusercontent.com/in/29110?s=64&v=4"
        >
          <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
        </Avatar>
      </AvatarGroup>
    </Flex>
  );
}
