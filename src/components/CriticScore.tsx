import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <div>
      <Badge fontSize="14px" paddingX={2} borderRadius="4px" color={color}>
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
