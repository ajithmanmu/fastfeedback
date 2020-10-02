import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code, Icon, Flex } from '@chakra-ui/core';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Heading>Fast Feedback</Heading>
        <Icon name="logo" color="black" size="32px" m="10px" />
        {auth?.user ? (
          <div>
            <Text>
              Current User - <Code>{auth?.user?.email}</Code>
            </Text>
            <Button
              onClick={(e) => {
                auth.signout();
              }}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            onClick={(e) => {
              auth.signinWithGithub();
            }}
          >
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default Home;
