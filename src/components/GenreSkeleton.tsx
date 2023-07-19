import { SkeletonText, Box } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonText
        mt="4"
        noOfLines={1}
        spacing="4"
        skeletonHeight="2"
      ></SkeletonText>
    </Box>
  );
};

export default GenreSkeleton;
