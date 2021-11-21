import React from "react";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div class="cover-container d-flex w-100  p-3 mx-auto flex-column">
          <header class="mb-auto">
            <div>
              <h3 class="float-md-center mb-0">Random Advice Generator</h3>
            </div>
          </header>
          <hr />

          <main class="px-3 w-100">
            <p class="lead">
              <h1 className="heading">{advice}</h1>
            </p>
            <p class="lead">
              <a
                href="/"
                class="btn btn-lg btn-secondary fw-bold border-white bg-white"
                onClick={this.fetchAdvice}
              >
                GIVE ME AN ADVICE !
              </a>
            </p>
          </main>

          <footer class="mt-auto text-white-50 ">
            <p>
              by{" "}
              <a href="https://twitter.com/mdo" class="text-white">
                @alakh_0703
              </a>
              .
            </p>
          </footer>
        </div>

       
      </div>
    );
  }
}
