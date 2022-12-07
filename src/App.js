import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definition from './components/Definitions/Definition';
import Header from './components/header/Header';
import Particles from './components/particles/Particles';
import Search from './components/search/Search';

function App() {

  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      //console.log(data);
      setMeanings(data.data);
    } catch (error){
      console.log(error);
    }
  };

  //console.log(meanings)

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  return (
    <div className='App' style={{height:'100vh', color:'white'}}>
      <Particles />
      <div className='zindex'>
        <Container maxWidth="md" style={{ display:'flex', flexDirection:'column',height:'100vh'}}>
          <Header word={word} setWord={setWord}/>
          <Search word={word} setWord={setWord}/>
          {meanings && (<Definition word={word} meanings={meanings} />)}
        </Container>
      </div>
      
    </div>
    
  );
}

export default App;
