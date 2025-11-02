import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

// `"nav nav" "aside main"`;
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // >= 1024px
      }}
      templateColumns={{
        base: "1fr", //1 fraction
        lg: "200px 1fr", // first column 200px and second grid column takes all available space
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg" />
      <GridItem area="aside" paddingX={5}>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
