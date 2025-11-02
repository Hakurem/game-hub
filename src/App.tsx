import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

// `"nav nav" "aside main"`;
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
