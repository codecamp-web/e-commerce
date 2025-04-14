
import { useState, type FormEvent } from "react";
import { multiStepForm } from "../components/multiStepForm";
import { UserInfo } from "../components/UserInfo";
import { AddressInfo } from "../components/AddressInfo";
import { useNavigate } from "react-router-dom";

const SignLogin = () => {

  const navigate = useNavigate()

    type FormData = {
        emailAddress: string
        firstName: string
        lastName: string
        displayName: string
        password: string
        age: string
        date: string
        street: string
        city: string
        state: string
        zip: string
    }

    const INITIAL_DATA: FormData ={
        emailAddress: "",
        firstName: "",
        lastName: "",
        displayName: "",
        password: "",
        age: "",
        date: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    }
    

    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>){
        setData(prev => {
            return {...prev, ...fields}
        })
    }

  const { steps, next, back, stepIndex, step, isNext2Pages,
     isFirstStep, isLastStep } =
      multiStepForm([  
      <UserInfo {...data} updateFields={updateFields} />,   
      <AddressInfo {...data} updateFields={updateFields} />
  ]);

  const [showSignup, setShowSignup] = useState(false); // state to toggle view

  function onSubmit(e:FormEvent){
    e.preventDefault()
    if (!isLastStep) return next() 
      alert("Account Created") != setShowSignup(false)
  }

  const [username, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username.trim() && password.trim()){
      navigate("/store")
    } else {
      alert("Invalid credentials")
    }
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="font-bold font-mono text-4xl text-gray-900">
            {showSignup ? "Sign up" : "Log in"}
          </h1>
        </div>

        {!showSignup ? (
          // Login Form
          <form onSubmit={handleLogin} 
            className="bg-white p-10 flex flex-col gap-y-5 rounded 
            shadow-md w-full max-w-md" >
            <div>
              <input
                type="text" required value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="p-3 rounded-md w-full "
                placeholder="Username or email address"
              />
            </div>
            <div className="flex gap-x-5">
              <input
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className=" p-3 rounded-md w-full"
                placeholder="Enter your password"
              />
              <button type="submit" 
              className="bg-neutral-900 text-white p-4 rounded-md">
                Enter
              </button>
            </div>
            <div className="flex justify-between mt-5">
              <button
                type="button"
                onClick={() => setShowSignup(true)}
                className="border rounded-lg bg-blue-700 text-white p-3"
              >
                Sign up
              </button>
              <button className="rounded-lg">Forgot your password</button>
            </div>
          </form>
        ) : (
          // Render multi-step form content (signup)
          <form onSubmit={onSubmit}>
           <span className="ml-36 -mb-0">
           {stepIndex + 1 } / {steps.length}
           </span>
            {step}
            <div className="flex justify-between mt-4 gap-x-4">
              {
                isFirstStep && 
                <button
                onClick={back}
                className="bg-gray-400 text-white px-4 py-2 rounded-md">
                Back
              </button>
              }
              <button  type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
               {isLastStep ? "Finish" : "Next"}
              </button>
              <button
                onClick={() => setShowSignup(false)}
                className={`${!isNext2Pages ? "flex" : "hidden"}
                bg-gray-400 text-white px-4 py-2 rounded-md
                 `}
              >
                Log in
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignLogin;
