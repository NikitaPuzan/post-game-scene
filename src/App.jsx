import React from 'react';
import './app.css';
import Header from "./components/Header/Header";
import PostGameScene from "./components/PostGameScene/PostGameScene";
import Scoreboard from "./components/Scoreboard/Scoreboard";


const App = () => {
    return (
        <div className="app">
            <Scoreboard/>
            <Header/>
            <PostGameScene/>
        </div>
    );
};

export default App;