import React from "react";

class Prueba extends React.Component {
  sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10);
    const v2 = parseInt(event.target.valor2.value, 10);
    const suma = v1 + v2;
    alert(suma);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sumar}>
          <p>
            Ingrese primer valor:
            <input type="text" name="valor1" />
          </p>
          <p>
            Ingrese segundo valor:
            <input type="text" name="valor2" />
          </p>
          <input type="submit" value="Sumar" />
        </form>
      </div>
    );
  }
}

export default Prueba;
