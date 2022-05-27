import './intro.scss'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>John Doe</h1>
          <h3>Freelance Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro