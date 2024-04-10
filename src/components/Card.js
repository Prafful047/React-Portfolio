import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc , link}) => {
  
  return (
    <VStack
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      spacing={4}
      maxW="sm"
      w="full"
    >
      <Image src={imageSrc} alt={title} />
      <VStack spacing={2} align="start">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack alignSelf="flex-end">
        <a href={link}>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;