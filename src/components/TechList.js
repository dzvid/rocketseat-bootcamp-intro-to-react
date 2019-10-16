import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: ['Node.js', 'ReactJS', 'React Native'],
    newTech: '',
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = tech => {
    // TODO: Necessary to improve the method since it is not efficient[O(n)], a key value approach would be better.
    this.setState({
      techs: this.state.techs.filter(techInArray => techInArray !== tech),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => this.handleDelete(tech)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
