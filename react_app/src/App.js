// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Articles from './components/Articles';
const LIST_URL = 'http://localhost/decoupledrupalReact/jsonapi/node/article';

function App() {
  const [article, setarticle] = useState([])
//testing
    
const BASE_URL = "http://localhost/decoupledrupalReact/jsonapi/node/article";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
      "Content-Type": "application/json",
      "format": "api_json"
     
  },
  mode:"cors",
});
      const apiCall = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await instance.get();
                const a = response.data;
                console.log(a.data)
                setarticle(a.data)
                
                resolve(response);  // response.data.list
                
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };
     
     useEffect(() => {
      const a = apiCall();
    //   fetch(LIST_URL,{mode:'cors',
    //   headers: {
    //     "Content-Type": "application/json",
       
       
    // },})
    //   .then(res => {
    //       const article = res.data;

    //       setarticle(article)
    //       console.log(article)
    //   })
    //   .catch((error) => {
    //       console.log(error);
    //   })

     }, [])
      
      return (
    <div className="App">
      <Articles article={article}/>
    </div>
  );
}

export default App;


