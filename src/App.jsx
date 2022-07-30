// JSX

import { Header } from "./compenents/Header/Header.jsx";
import { Post } from "./compenents/Post/Post";
import { Sidebar } from "./compenents/Sidebar/Sidebar.jsx";
import style from "./App.module.css";
import "./global.css";



// Author {Avatar_url: "", name: "", role: "" }
//publishedAt: date
//content: String


const posts =  [
  {
    id: 1,
    author: {
      name: "Gustavo Souza",
      role: "dev front end",
      avatarUrl: "https://github.com/gustavomes.png",
    },
    content: [ 
      { type:'paragraph', content: 'Fala galeraa 👋', },
      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀', },
      { type:'link', content: ' 👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date ('2022-05-03 20:00:00')
    },

    {
      id: 2,
      author: {
        name: "Wirley Almeida",
        role: "dev front backend",
        avatarUrl: "https://github.com/WirleySAlmeida.png",
      },
      content: [ 
        { type:'paragraph', content: 'Fala pessoal 👋' },
        { type:'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui' },
        { type:'link', content: ' 👉 devonlane.design' },
        ],
        publishedAt: new Date ('2022-05-10 20:00:00')
      },
];


export function App() {


  return (
    <div>
        <Header name="Ignite feed"/>

        <div className={ style.wrapper }>
             <Sidebar />
              <main>
                  {posts.map(post => {
                    return (
                    <Post
                      author={post.author}
                      content1={post.content}
                      publishedAt={post.publishedAt}
                    />
                    )
                  })}
                  
              </main>
        </div>
    </div>
  )
}

