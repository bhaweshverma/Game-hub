import {Heading } from '@chakra-ui/react';
import { GameQuery } from "../App";

interface GameHeadingProps{
    gameQuery: GameQuery;
}
const GameHeading = ({gameQuery}:GameHeadingProps) =>{
    //Games
    //Genre Platform Games
    return <Heading as='h1' marginY={5} fontSize='5xl'>
        {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
        </Heading>

}

export default GameHeading;