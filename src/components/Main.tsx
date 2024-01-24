import '../styles/Main.css'

export default function Main () {

  return (
    <>
      <p className='intro'>
        Hi there, I'm <b>Patrick</b> a 30yr old software developer.
        I enjoy <b>building tools</b> and <b>solving problems</b>.
        Outside of work you can find me on the tennis courts or in my hammock
        with a book. 
      </p>
      <p className='work'>Currently I'm sharpening my skills for future employment opportunities.</p>
      <h2>Projects</h2>
      <div className='projGrid'>
        <div className='gridItem'>
          <a href='https://github.com/koowip/airbnbclone' target='_blank'>
            Airbnb-clone
          </a>
          <span>Airbnb clone made with NextJs and MongoDB</span>
        </div>
        <div className='gridItem'>
          <a href='https://github.com/koowip/portfolio' target='_blank'>
            Patrick.dev
          </a>
          <span>Personal site made with Reactjs and Vite</span>
        </div>
        <div className='gridItem'>
          <a href='https://github.com/Hopeland-Systems-Capstone/Hopeland-Systems-API' target='_blank'>
            Hopeland Systems API
          </a>
          <span>Remote sensor API for local climate and geospactial data</span>
        </div>
        <div className='gridItem'>
          <a href='https://github.com/koowip/Dijkstra-Algo-implementation' target='_blank'>
            Dijkstra's Algo Implementation
          </a>
          <span>Algo implemented in C++, all data structs from scratch</span>
        </div>
      </div>
      <h2>Blog</h2>
        <p className='filler'>Coming soon . . .</p>
    </>
  )
}