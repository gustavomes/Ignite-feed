// JSX

import { Header } from "./compenents/Header/Header.jsx";
import { Post } from "./compenents/Post/Post";
import style from "./App.module.css"
import { Sidebar } from "./compenents/Sidebar/Sidebar.jsx";
import { Comment } from "./compenents/Coment/Comment.jsx";
import "./global.css";

export function App() {


  return (
    <div>
        <Header name="Ignite feed"/>

        <div className={ style.wrapper }>
      
             <Sidebar />
          
              <main>

                  <Post 
                  author="Gustavo"
                  prof="dev front-end"
                  content="Fala galeraa 👋

                  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                  
                   👉 jane.design/doctorcare
                  
                  #novoprojeto #nlw #rocketseat"
                />

        

           
                  <Post 
                    author="Gabriel"
                    prof="dev back-end"
                    content="kjshkjhdkhkhd dkhdkjhkjdhkjdhkjd khdjkhkjdhjkhjkhd kjhjkdhkjhkjhkjhjd kjhdkjhkjhdjkhdhjkhjkd njdhjhdjkhjdhjhdjhdjn jdjdhjhdjhdjhjdhdhjdhjh"
                  />
         


              </main>

             
        </div>
    </div>
  )
}

