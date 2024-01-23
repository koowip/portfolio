import '../styles/Main.css'

export default function Main () {

  return (
    <>
      <p className='intro'>
        Hi there, I'm <b>Patrick</b> a 30yr old software developer.
        I enjoy <b>building tools</b> and <b>solving problems</b>.
        I'm interested in <b>web development</b> and <b>backend architecture</b>. 
        Outside of work you can find me on the tennis courts or in hammock
        with a book. 
      </p>
      <p>Currently I'm sharpening my skills for future employment opportunities.</p>
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
      </div>
    </>
  )
}