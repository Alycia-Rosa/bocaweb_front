import './App.css';
import {Component} from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Lista } from './components/Lista';
import { RodaPe } from './components/RodaPe/rodaPe';

class App extends Component{
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log([busca])
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {busca, odas} = this.state;
  return (
    <section>
      <Header />
      <Search
      busca = {this.state.busca}
      buscaODA = {this.buscaODA}
      />
      
      <Lista
        lista = {odas}
      />

      <RodaPe />
    </section>
    )
  }
}

export default App;
