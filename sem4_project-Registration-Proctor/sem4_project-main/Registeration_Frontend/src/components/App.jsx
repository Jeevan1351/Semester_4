import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const [toggleState, setToggleState] = React.useState(1);

  let c = 1;

  const [state, setState] = React.useState({
    name: "",
    email: "",
    usn: "",
    DOB: "",
    Proctor: "",
    phoneno: "",
    Sem: "",
    Section: "",
    Batch: "",
    Accomodation: "",
    bloodgroup: "",
    fname: "",
    Mname: "",
    foccupation: "",
    Moccupation: "",
    Address: "",
    femail: "",
    Memail: "",
    fphoneno: "",
    Mphoneno: "",
    Gname: "",
    Goccupation: "",
    Gphoneno: "",
    Gemail: "",
    LAddress: "",
    Scholarship: "",
    Cocurricular: "",
    Extracurricular: ""
  });

  const { register, handleSubmit, errors } = useForm();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  function handleError() {
    if (c === 1) {
      document.getElementById("epara").innerHTML =
        "Error occured in previous pages!, please check";
      document.getElementById("epara").style.color = "red";
      c = 0;
    }
  }

  return (
    <div id="login-box">
      <h1 className="heading" align="center">
        Registration-form
      </h1>
      <br />

      <div className="tab navbar navbar-dark bg-dark">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          General
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Personal
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Extra-curriculam
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <br />
              <label for="name">
                Name
                <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                placeholder="name"
                value={state.name}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.name &&
                errors.name.type === "required" &&
                ((c = 1), (<p className="errorMsg">Name is required.</p>))}
            </div>
            <div>
              <label for="Email">
                Email<b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleInputChange}
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9+_.-]+@bmsce.ac.in+$/
                })}
              />
              {errors.email &&
                errors.email.type === "required" &&
                ((c = 1), (<p className="errorMsg">Email is required.</p>))}
              {errors.email &&
                errors.email.type === "pattern" &&
                ((c = 1), (<p className="errorMsg">Email is not valid.</p>))}
            </div>
            <div>
              <label for="usn">
                USN <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="usn"
                placeholder="usn"
                value={state.usn}
                onChange={handleInputChange}
                ref={register({ required: true })}
                // style={{ width: "53.5rem" }}
              />
              {errors.usn &&
                errors.usn.type === "required" &&
                ((c = 1), (<p className="errorMsg">USN is required.</p>))}
            </div>
            <div>
              <label for="DOB">
                DATE of BIRTH <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="DOB"
                placeholder="DD/MM/YYYY"
                value={state.DOB}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.DOB &&
                errors.DOB.type === "required" &&
                ((c = 1),
                (<p className="errorMsg">Date if Birth is required.</p>))}
            </div>

            <div>
              <label htmlFor="Proctor">
                Proctor <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Proctor"
                placeholder="Proctor Name"
                value={state.Proctor}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Proctor &&
                errors.Proctor.type === "required" &&
                ((c = 1),
                (<p className="errorMsg">Proctor name is required.</p>))}
            </div>

            <div>
              <label for="phoneno">
                Phone Number <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="phoneno"
                placeholder="ph.no"
                value={state.phoneno}
                onChange={handleInputChange}
                ref={register({ required: true, minLength: 10, maxLength: 10 })}
              />
              {errors.phoneno &&
                errors.phoneno.type === "required" &&
                ((c = 1),
                (<p className="errorMsg">Phone number is required.</p>))}
              {errors.phoneno && errors.phoneno.type === "minLength" && (
                <p className="errorMsg">
                  PhoneNumber should contain 10 numbers.
                </p>
              )}
              {errors.phoneno && errors.phoneno.type === "maxLength" && (
                <p className="errorMsg">
                  PhoneNumber should contain 10 numbers.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="Sem">
                Sem <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Sem"
                placeholder="Sem"
                value={state.Sem}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Sem &&
                errors.Sem.type === "required" &&
                ((c = 1), (<p className="errorMsg">Sem is required.</p>))}
            </div>

            <div>
              <label htmlFor="Section">
                Section <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Section"
                placeholder="Section"
                value={state.Section}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Section &&
                errors.Section.type === "required" &&
                ((c = 1), (<p className="errorMsg">Section is required.</p>))}
            </div>

            <div>
              <label htmlFor="Batch">
                Batch <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Batch"
                placeholder="Batch"
                value={state.Batch}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Batch &&
                errors.Batch.type === "required" &&
                ((c = 1), (<p className="errorMsg">Batch is required.</p>))}
            </div>

            <div>
              <h4 className="h4" style={{ marginTop: "30px" }}>
                Accomodations <b style={{ color: "red" }}>*</b>
              </h4>
              <input
                type="radio"
                value="Day_scholar"
                id="Day_scholar"
                onChange={handleInputChange}
                name="Accomodation"
                className="select"
              />
              <label for="Day_scholar" className="selectlab ">
                Day scholar
              </label>
              <br />
              <input
                type="radio"
                value="Hostel"
                id="Hostel"
                onChange={handleInputChange}
                name="Accomodation"
                className="select"
              />
              <label className="selectlab" for="Hostel">
                Hostel
              </label>
            </div>
            <a className="link" href="#personal" onClick={() => toggleTab(2)}>
              Next
            </a>

            <br />
            <br />
          </form>
        </div>

        <div
          id="personal"
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <br />
            <div>
              <label for="bloodgroup">Blood Group</label> <br />
              <input
                type="text"
                name="bloodgroup"
                placeholder="Blood Group"
                value={state.bloodgroup}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label for="fname">
                Father Name <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="fname"
                placeholder="Father name"
                value={state.fname}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.fname &&
                errors.fname.type === "required" &&
                ((c = 1),
                (<p className="errorMsg">Father name is required.</p>))}
            </div>
            <div>
              <br />
              <label for="Mname">
                Mother Name <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Mname"
                placeholder="Mother name"
                value={state.Mname}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Mname &&
                errors.Mname.type === "required" &&
                ((c = 1),
                (<p className="errorMsg">Mother name is required.</p>))}
            </div>

            <div>
              <br />
              <label for="foccupation">Father's Occupation</label> <br />
              <input
                type="text"
                name="foccupation"
                placeholder="Father's occupation"
                value={state.foccupation}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label for="Moccupation">Mother's Occupation</label> <br />
              <input
                type="text"
                name="Moccupation"
                placeholder="Mother's occupation"
                value={state.Moccupation}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="Address">
                Permanent Address <b style={{ color: "red" }}>*</b>
              </label>{" "}
              <br />
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={state.Address}
                style={{ height: "100px", textAlign: "top" }}
                onChange={handleInputChange}
                ref={register({ required: true })}
              />
              {errors.Address &&
                errors.Address.type === "required" &&
                ((c = 1), (<p className="errorMsg">Address is required.</p>))}
            </div>
            <div>
              <label for="femail">Father's Email</label> <br />
              <input
                type="text"
                name="femail"
                placeholder="Father's Email"
                value={state.femail}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="Memail">Mother's Email</label> <br />
              <input
                type="text"
                name="Memail"
                placeholder="Mother's Email"
                value={state.Memail}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="phoneno">Father's PhoneNumber</label> <br />
              <input
                type="text"
                name="fphoneno"
                placeholder="ph.no"
                value={state.fphoneno}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="phoneno">Mother's PhoneNumber</label> <br />
              <input
                type="text"
                name="Mphoneno"
                placeholder="ph.no"
                value={state.Mphoneno}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label for="Gname">Local Guardian Name</label> <br />
              <input
                type="text"
                name="Gname"
                placeholder="Guardian name"
                value={state.Gname}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label for="Goccupation">Guardian's Occupation</label> <br />
              <input
                type="text"
                name="Goccupation"
                placeholder="Guardian's occupation"
                value={state.Goccupation}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="phoneno">Guardian's PhoneNumber</label> <br />
              <input
                type="text"
                name="Gphoneno"
                placeholder="ph.no"
                value={state.Gphoneno}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="Gemail">Guardian's Email</label> <br />
              <input
                type="text"
                name="Gemail"
                placeholder="Guardian's Email"
                value={state.Gemail}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <label for="LAddress">
                Local Address<b style={{ color: "red" }}>*</b>
              </label>
              <br />
              <input
                type="text"
                name="LAddress"
                placeholder="Address"
                value={state.LAddress}
                onChange={handleInputChange}
                ref={register({ required: true })}
                style={{ height: "100px", textAlign: "top" }}
              />
              {errors.LAddress &&
                errors.LAddress.type === "required" &&
                ((c = 1), (<p className="errorMsg">Address is required.</p>))}
            </div>
            <a
              className="link"
              href="#extra-curicular"
              onClick={() => toggleTab(3)}
            >
              Next
            </a>

            <br />
            <br />
          </form>
        </div>

        <div
          id="extra-curicular"
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <br />
              <label htmlFor="Scholarship">
                Scholarship Received(If any)
              </label>{" "}
              <br />
              <input
                type="text"
                name="Scholarship"
                placeholder="Scholarship Received"
                value={state.Scholarship}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label htmlFor="Co-curricular">
                Co-curricular Achievements(State Level and above)
              </label>{" "}
              <br />
              <input
                type="text"
                name="Cocurricular"
                placeholder="Co-curricular Achievements"
                value={state.Cocurricular}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <div>
              <br />
              <label htmlFor="Extra-curricular">
                Extra-curricular Achievements(State Level and above)
              </label>{" "}
              <br />
              <input
                type="text"
                name="Extracurricular"
                placeholder="Extra-curricular Achievements"
                value={state.Extracurricular}
                onChange={handleInputChange}
                ref={register}
              />
            </div>
            <button className="final" type="submit" onClick={handleError}>
              Submit
            </button>
            <p id="epara"></p>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

// Version 6.X.X:

// <input ref={register({ required: true })} name="test" />
// Version 7.0.X:

// <input {...register('test', { required: true })} />
