import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const OTPVerify = () => {

    const [OTP, setOTP] = useState('')

    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
          <div className="bg-white p-8 rounded shadow-md w-1/3">
            <h2 className="text-2xl font-bold mb-6 text-center overflow-hidden">OTP Verification</h2>
            <p className="text-xs mb-9 opacity-60"><center>The OTP has been sent to the given Email address.</center></p>
            <form>
              <div className="flex flex-col space-y-4">
                <label className="font-semibold">ENTER OTP</label>
                <input className="border p-2 rounded" type='text' />
                <input className="bg-[#92E3A9] text-white p-2 rounded cursor-pointer" type='submit' value='Verify' />
              </div>
            </form>
          </div>
      </div>
    )
  }
  
  export default OTPVerify