import "./App.css";
import image from "./images/bg-main-desktop.png";
import card from "./images/bg-card-front.png";
import card2 from "./images/bg-card-back.png";
import trick from "./images/icon-complete.svg";
import { useState } from "react";
function App() {
  const [error, seterror] = useState({});
  const [nameerr, setnameerr] = useState(false);
  const [name, setname] = useState("");
  const [debit, setdebit] = useState("");
  const [mm, setmm] = useState("");
  const [mmerror, setmmerror] = useState(false);
  const [yy, setyy] = useState("");
  const [yyerror, setyyerror] = useState(false);
  const [debiterror, setdebiterror] = useState(false);
  const [debitblank, setdebitblank] = useState(false);
  const [cvv, setcvv] = useState("");
  const [cvverror, setcvverror] = useState(false);
  const [comp, setcomp] = useState(false);
  

  
  const handle = (e) => {
    e.preventDefault();

    if (name.length == 0) {
      setnameerr(true);
    } else {
      setnameerr(false);
    }
    const pattern = /^[0-9]{2,16}( [0-9]{2,16})+$/;
    if (pattern.test(debit)) {
      setdebiterror(false);
    } else if (debit === "") {
      setdebitblank(true);
    } else {
      setdebiterror(true);
    }
    const pattern1 = /^[0-9]{1,3}( [0-9]{1,3})+$/;
    if (pattern1.test(cvv)) {
      setcvverror(false);
    } else if (cvv === "") {
      setcvverror(true);
    }

    if (mm === "") {
      setmmerror(true);
    }
  };

  return (
    <div
      className="container-fluid con "
      style={{
        marginTop: "10px",
        height: "100%",
        float: "left",
        padding: "0",
        margin: "0 auto",
      }}
    >
      <div
        className="row main"
        style={{
          height: "890px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-3 leftSide"
          style={{ backgroundImage: `url(${image})`, float: "left" }}
        ></div>
        <div
          className="col-md-4 rightSide"
          style={{ marginTop: "240px", marginLeft: "430px" }}
        >
          {!comp && (
            <form className="form">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Card Holder
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. shubham sarkar"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                {nameerr ? (
                  <p style={{ color: "red" }}>Please given value </p>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="e.g. 12345668798016632"
                  maxLength={16}
                  value={debit
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setdebit(e.target.value)}
                />
                {debiterror ? (
                  <p style={{ color: "red" }}>Only Given Number </p>
                ) : null}
                {debitblank ? (
                  <p style={{ color: "red" }}>Only Given value </p>
                ) : null}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Exp.Date(MM/YY)
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="MM"
                        value={mm}
                        onChange={(e) => setmm(e.target.value)}
                        style={{ padding: "6px" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="YY"
                        value={yy}
                        onChange={(e) => setyy(e.target.value)}
                        style={{ padding: "6px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. 123"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={cvv}
                      maxLength={3}
                      onChange={(e) => setcvv(e.target.value)}
                    />
                    {cvverror ? (
                      <p style={{ color: "red" }}>Only value Number </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={{ width: "100%", backgroundColor: "#00008B" }}
                  onClick={handle}
                >
                  Confirm
                </button>
              </div>
            </form>
          )}

          {comp && <Thankyou setcomp={setcomp} />}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "10%",
          backgroundRepeat: "no-repeat",
        }}
        className="tablename"
      >
        <img src={card} alt="card" className="front" />
        <table
          style={{ marginTop: "-105px", marginLeft: "30px" }}
          width="80%"
          className="tableview"
        >
          <tr>
            {debit.length > 1 ? (
              <td
                style={{
                  marginLeft: "-400px",
                  color: "white",
                  fontSize: "25px",
                }}
                className="deb"
              >
                {debit}
              </td>
            ) : (
              <td
                style={{
                  marginLeft: "-200px",
                  color: "white",
                  fontSize: "25px",
                }}
                className="deb"
              >
                0000 0000 0000 0000
              </td>
            )}
          </tr>
          <tr>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {name.length > 1 ? (
                  <span style={{ color: "white", fontSize: "15px" }}>
                    {name}
                  </span>
                ) : (
                  <span
                    style={{
                      marginRight: "-200px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Shubham Sarkar
                  </span>
                )}
                {mm.length > 1 ? (
                  <span
                    style={{
                      marginLeft: "-200px",
                      color: "white",
                      fontSize: "15px",
                    }}
                    className="cvv"
                  >
                    {mm}/{yy}
                  </span>
                ) : (
                  <span
                    style={{
                      marginLeft: "-200px",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    9/11
                  </span>
                )}
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "50%",
          backgroundRepeat: "no-repeat",
        }}
        className="back"
      >
        <img src={card2} alt="card" />
        <table
          style={{ marginTop: "-140px", paddingLeft: "-120px" }}
          width="80%"
        >
          <tr>
            {cvv.length > 0 ? (
              <span
                style={{
                  marginLeft: "350px",
                  marginTop: "-30px",
                  color: "red",
                  fontSize: "18px",
                }}
                className="cvv"
              >
                {cvv}
              </span>
            ) : (
              <span
                style={{
                  marginLeft: "350px",
                  marginTop: "-30px",
                  color: "red",
                  fontSize: "18px",
                }}
                className="cvv"
              >
                123
              </span>
            )}
          </tr>
        </table>
      </div>
    </div>
  );
}

function Thankyou({ setcomp }) {
  return (
    <>
      <img
        src={trick}
        alt=""
        className="mx-auto"
        style={{ display: "block" }}
      />
      <h1 style={{ textAlign: "center" }}>Thank You</h1>
      <p style={{ textAlign: "center" }}>We've add You Card details </p>
      <button
        class="btn btn-primary"
        style={{ width: "100%", backgroundColor: "#00008B" }}
        onClick={() => setcomp(false)}
      >
        Continue
      </button>
    </>
  );
}

export default App;
