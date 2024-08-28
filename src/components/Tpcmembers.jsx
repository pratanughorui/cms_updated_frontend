import React from 'react'
import { useNavigate } from 'react-router-dom';
import homeIcon from '../assets/home36.png';

function Tpcmembers() {
  const navigate = useNavigate(); // <-- Initialize navigate

  const redirectToHome = () => {
    navigate('/select-conference'); // <-- This will navigate to the select-conference page
  };

  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
      {/* Home Icon */}
      <div className="w-full text-left mb-4">
        <img
          src={homeIcon}
          alt="Home"
          className="cursor-pointer w-8 h-8"
          onClick={redirectToHome} // <-- Add this onClick handler
        />
      </div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mobile</th>

            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tpcmembers