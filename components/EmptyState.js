import React from 'react';
import { Heading, Flex, Text } from '@chakra-ui/core';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    borderRadius="4px"
    m="10px auto"
    border="1px"
    justify="center"
    direction="column"
    align="center"
  >
    <Heading size="md" m="10px" color="gray.500">
      You haven't added any sites.
    </Heading>
    <Text m="10px" color="gray.500">
      Welcome, let's get started.
    </Text>
    <AddSiteModal />
  </Flex>
);

export default EmptyState;
