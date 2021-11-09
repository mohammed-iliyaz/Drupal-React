// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import Articles from './components/Articles';
const LIST_URL = 'http://localhost/decoupledrupalReact/jsonapi/node/article';

function App() {
  const [article, setarticle] = useState([])
//testing
    useEffect(() => {
     
      fetch(LIST_URL,{mode:"cors"})
                .then(res => {
                    const article = res.data;
    
                    setarticle(article)
                    console.log(article)
                })
                .catch((error) => {
                    console.log(error);
                })
      }, []);

  return (
    <div className="App">
      <Articles article={article}/>
    </div>
  );
}

export default App;


