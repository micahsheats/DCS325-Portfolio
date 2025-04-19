import NavBar from "./NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body text-center">
                <h2>Bootstrap NavBar Example</h2>
                <p className="lead">
                  This page demonstrates a React Bootstrap NavBar component.
                </p>
                <p>
                  The navigation bar above is an example of Bootstrap's responsive navigation component implemented in React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
