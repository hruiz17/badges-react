import React from "react";

class HojaVida extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.confLogo} alt="Logo" />
        <h1>Hola Mundo</h1>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Default
          </a>
        </nav>
      </div>
    );
  }
}

export default HojaVida;
