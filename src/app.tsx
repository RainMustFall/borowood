import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./home_page";
import TopPanel from "./top_panel";
import Geograhpy from "./games/game_pages/geography";
import FirstDays from "./blog/posts/first_days_self_upgrade";
import OneYearPost from "./blog/posts/self_upgrade_year";
import MiniGamePost from "./blog/posts/minigame_edited";
import FirstUpdatePost from "./blog/posts/first_update";
import NewGamePost from "./blog/posts/new_game";
import GameList from "./games/game_list";
import Astronomy from "./games/game_pages/astronomy";
import YourVirtualBunny from "./games/game_pages/your_virtual_bunny";
import SelfUpgrade from "./games/game_pages/self_upgrade";
import GravityShawarma from "./games/game_pages/gravity_shawarma";

interface AppState {
  email: string | null
}

class AppProps {
}

class App extends React.Component<AppProps, AppState> {
  render(): JSX.Element {
    return (
    <BrowserRouter>
      <TopPanel/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/geography">
          <Geograhpy/>
        </Route>
        <Route exact path="/astronomy">
          <Astronomy/>
        </Route>
        <Route exact path="/your_virtual_bunny">
          <YourVirtualBunny/>
        </Route>
        <Route exact path="/self_upgrade">
          <SelfUpgrade/>
        </Route>
        <Route exact path="/gravity_shawarma">
          <GravityShawarma/>
        </Route>
        <Route exact path="/first_days_of_self_upgrade">
          <FirstDays/>
        </Route>
        <Route exact path="/self_upgrade_one_year">
          <OneYearPost/>
        </Route>
        <Route exact path="/minigame_update">
          <MiniGamePost/>
        </Route>
        <Route exact path="/first_update">
          <FirstUpdatePost/>
        </Route>
        <Route exact path="/new_game">
          <NewGamePost/>
        </Route>
        <Route exact path="/games">
          <GameList/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App
