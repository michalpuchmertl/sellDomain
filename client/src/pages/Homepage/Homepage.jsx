import './homepage.scss'
import TweetDisplayer from '../../components/TweetDisplayer/TweetDisplayer';

function App() {
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <p className="text-white font-bold">Domain <a href={`https://${document.location.hostname}`} className="text-warning">{document.location.hostname}</a> is for sale!</p>
        <a href="mailto:puchmertl.michal12@gmail.com?subject=Domain%20inquiry%20-%20pandora-papers.eu">
          <button className="btn btn-warning">Send inquiry</button>
        </a>
        <TweetDisplayer />
      </div>
    </div>
  );
}

export default App;
