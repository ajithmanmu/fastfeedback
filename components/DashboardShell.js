import React from 'react';
import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
return (
  <Flex flexDirection="column">
    <Flex
      backgroundColor="whiteAlpha.500"
      justifyContent="space-between"
      alignItems="center"
      pt={4}
      pb={4}
      color="gray.500"
      pl={4}
      pr={4}
    >
      <Stack isInline spacing={4} isReversed>
        <Link>Sites</Link>
        <Link>Feedback</Link>
        <Icon name="logo" color="black" />
      </Stack>
      <Flex alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" src={auth?.user?.photoUrl} />
      </Flex>
    </Flex>
    <Flex
      flexDirection="column"
      backgroundColor="lightcyan"
      color="whiteAlpha.500"
    >
      <Flex
        // justifyContent="center"
        // alignItems="center"
        // pl="auto"
        // pr="auto"
        pt={10}
        pb={10}
        direction="column"
        ml="auto"
        mr="auto"
        maxWidth="800px"
        w="100%"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color="black">Sites</Heading>
        {children}
      </Flex>
    </Flex>
  </Flex>
)
}

export default DashboardShell;
