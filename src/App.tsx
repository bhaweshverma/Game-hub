import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`, //one column for mobiles
        lg: `"nav nav" "aside main"` //for devices larger than 1024px
      }}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above='lg'>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
