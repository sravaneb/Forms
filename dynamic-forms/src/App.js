import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>New Employees</h1>
      <h3>BASIC INFO</h3>
      <div className="App-header">
        <h2>Employee Info</h2>
        <form className="form-container">
          <label for="fname">First Name:</label>
          <input type="text" id="fname"></input>

          <label for="lname">Last Name:</label>
          <input type="text" id="lname"></input>

          <label for="bdate">Birth date:</label>
          <input type="date" id="bdate"></input>
          <br />
          <br />

          <label for="email">Primary Email:</label>
          <input type="email" id="email"></input>

          <label for="color">Color:</label>
          <input type="color" id="color"></input>

          <label for="datetime-local">Datetime-local:</label>
          <input type="datetime-local" id="datetime-local"></input>

          <label for="file">Choose file:</label>
          <input type="file" id="file"></input>

          <div className="fileDiv">
            <label for="hide">Upload file</label>{" "}
          </div>
          <div className="inputdiv">
            <input type="file" id="hide"></input>
          </div>
        </form>
      </div>

      <div className="App-middle">
        <h2>Address Info</h2>
        <form className="form-container2">
          <label for="country">Country:</label>
          <input type="text" id="country"></input>
          <br />
          <label for="Address1">Address1:</label>
          <input type="text" id="Address1"></input> <br />
          <label for="Address2"> Address2:</label>
          <input type="text" id="Address2"></input> <br />
        </form>
      </div>
      <div className="App-middle2">
        <h2>Employment Info</h2>
        <form className="form-container3">
          <label for="Job Title">Job Title:</label>
          <input type="text" id="Job Title"></input>

          <label for="Phone Number">Phone Number:</label>
          <input type="number" id="Phone Number"></input>

          <label for="Hire Date"> Hire Date:</label>
          <input type="date" id="Hire Date"></input>

          <label for="Employee ID Card">Upload Employee ID Card:</label>
          <input type="image" alt="Id card" id="Employee ID Card"></input>
        </form>
      </div>

      <div className="App-footer">
        <h2>Other Info</h2>
        <form className="form-container3">
          <label for="Employee ID">Employee ID:</label>
          <input type="text" id="Employee ID"></input> <br />
          <br />

          <label for="Is Active">Is Active:</label>
          <input type="range" id="Is Active"></input><br />
          <br />

          <label for="Password"> Password:</label>
          <input type="password" id="Password"></input><br />
          <br />

          <label for="Website">Enter Website Address:</label>
          <input type="url" id="Website"></input><br />
          <br />

          <label for="week"> week:</label>
          <input type="week" id="week"></input><br />
          <br />

          <label for="month">Enter month:</label>
          <input type="month" id="month"></input><br />
        </form>
      </div>

      <div className="footer">
         <form>
          <input type="submit" value="SUBMIT"></input>

          <br />
          <input type="reset" value="RESET"></input>
          </form>
      </div>
    </div>
  );
}

export default App;
