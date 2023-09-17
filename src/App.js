import './App.css';
import logo from './assets/images/logo.png'
import { Loading } from './components/components/Loading';
import loading_gif from './assets/gifs/loading.gif'


function App() {
  return (
    <div className="App">
      <header className='border-bottom'>
        <img className='img-fluid p-3 mx-5' width="200px" src={logo} alt="logo" />
      </header>
      <main>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Star Wars</h1>
              <div className=''>
                <Loading loadingGif={loading_gif} fullScreen={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
