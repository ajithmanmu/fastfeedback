import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" borderRadius="4px" m="10px auto" border="1px">
      <Heading size="md" m="10px" color="gray.500">
        Get feedback on your site instantly
      </Heading>
      <Text m="10px" color="gray.500">
        Start today, then grow with us
      </Text>
      <Button color="white" m="10px" backgroundColor="whatsapp.500">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
