export default function CardSettings() {
  return (
    <>
      <form action="#" method="post">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
          <div className="flex-auto md:p-7 lg:px-10 lg:py-7 ">
            <h6 className="text-gray-500 text-base mt-2 mb-2 font-bold uppercase">
              Personal Information
            </h6>
            {/* firstName, middleName, lastName */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="firstName"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="First Name"
                    required
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="middleName"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Middle Name"
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                    disabled={false}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="lastName"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Last Name"
                    required
                    pattern="^[aA-zZ]+$"
                    title="Cannot contain numeric, symbols, spaces"
                  />
                </div>
              </div>
            </div>

            {/* username, Emailid */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    name="username"
                    disabled
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="email"
                    name="email"
                    disabled
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="E-Mail ID"
                  />
                </div>
              </div>
            </div>

            {/* DOB, Mobile numbae */}
            <div className="flex flex-wrap py-1.5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="date"
                    name="dob"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="D.O.B."
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="tel"
                    name="mobileNumber"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Mobile Number"
                    pattern="^[0-9]+$"
                    minLength="10"
                    maxLength="11"
                    title="Must Contain only Numbers (xxxxxxxxxx)"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-3 border-b-1 border-gray-300" />

            <h6 className="text-gray-500 text-base mt-4 mb-2 font-bold uppercase">
              College Information
            </h6>

            {/* Batch, Degree, Field, RollNo */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative w-full mb-3">
                  <input
                    type="number"
                    name="rollNo"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Roll No."
                    required
                    pattern="[0-9]"
                    title="Cannot contain alphabets, symbols, spaces"
                    min="1"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-3">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    for="degree"
                  >
                    Degree
                  </label>
                  <select
                    name="degree"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="*" disabled>
                      Select Degree
                    </option>
                    <optgroup label="Institute of Engineernig and Technology">
                      <option value="btech">B. Tech.</option>
                      <option value="bca">BCA</option>
                      <option value="mtech">M. Tech.</option>
                      <option value="mca">MCA</option>
                      <option value="phd">PhD</option>
                    </optgroup>
                    <optgroup label="Institute of Management">
                      <option value="bba">BBA</option>
                      <option value="mba">MBA</option>
                      <option value="phd">PhD</option>
                    </optgroup>
                    <optgroup label="Institute of Design">
                      <option value="bdes">B. Des.</option>
                      <option value="mdes">M. Des.</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-3">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    for="field"
                  >
                    Field
                  </label>
                  <select
                    name="field"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <optgroup label="B. Tech.">
                      <option value="bcse">Computer Science Engineernig</option>
                      <option value="me">Mechanical Engineering</option>
                      <option value="ce">Civil Engineering</option>
                      <option value="ee">Electrical Engineering</option>
                      <option value="ece">
                        Electronics and Communication Engineering
                      </option>
                      <option value="eee">
                        Electrical and Electronics Engineering
                      </option>
                    </optgroup>
                    <optgroup label="B. Des.">
                      <option value="pd">Product Design</option>
                      <option value="id">Interaction Design</option>
                      <option value="idd">Interdisciplinary Design</option>
                      <option value="icd">
                        Integrated and Communication Design
                      </option>
                    </optgroup>
                    <optgroup label="M. Tech.">
                      <option value="ds">Data Science</option>
                      <option value="esiot">Embedded Systems and IoT</option>
                      <option value="ar">Automation and Robotics</option>
                      <option value="hsee">
                        Health, Safety and Environment
                      </option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6 py-1.5">
                <div className="relative flex flex-row w-full mb-3 items-center space-x-4">
                  <label
                    className="uppercase text-gray-500 text-xs font-bold mb-2"
                    for="batch"
                  >
                    Batch
                  </label>
                  <select
                    name="batch"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="*" disabled>
                      Year of Graduation
                    </option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-3 border-b-1 border-gray-300" />

            <h6 className="text-gray-500 text-base mt-4 mb-2 font-bold uppercase">
              About Me
            </h6>
            {/* Biography */}
            <div className="flex flex-wrap pt-2">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <textarea
                    type="text"
                    name="bio"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="5"
                    placeholder="Something about Me......."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Edit / Update Profile */}
            <button
              className="relative flex w-2/5 flex-col mt-5 mb-3  rounded-lg items-center m-auto focus:outline-none bg-gray-200 text-gray-700 border-gray-700 border-2 hover:bg-gray-700 hover:text-gray-50 hover:font-bold transititon duration-200 ease-in-out transform hover:scale-105"
              type="submit"
            >
              <div className="p-4 font-semibold uppercase text-lg break-words">
                Update Profile
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
