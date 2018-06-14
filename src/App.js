import React, { Component } from 'react';
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper"
import Column from "./Column";
import Container from "./Container";
import Row from "./Row";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import './App.css';

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore
      // rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    // else if (newScore === 12) {
    //   this.setState({ rightWrong: "You win!" });
    // }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      // rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Avengers Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
       /*   { rightWrong={this.state.rightWrong} } */
        />

        <Title>
          Click on an image to earn points, but don't click on any more than once!
        </Title>

        <Container>
          <Row>
            <Column size="lg-12">
            {this.state.characters.map(character => (
             /* <Column size="md-3 sm-6">*/
             <div>
                <CharacterCard
                  key={character.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={character.id}
                  image={character.image}
                />
             </div>
            /*  </Column> */
            ))}
             </Column> 
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
