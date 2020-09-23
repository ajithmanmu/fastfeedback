import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code } from '@chakra-ui/core';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>

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
      </main>
    </div>
  );
};

export default Home;
