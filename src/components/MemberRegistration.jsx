import React,{useState} from 'react'

function MemberRegistration() {
  const [oldmembers, setOldmembers] = useState([
    { id: 1, name: 'Members 1', email:'Members1@gmail.com' },
    { id: 2, name: 'Members 2', email:'Members2@gmail.com'},
    { id: 3, name: 'Members 3', email:'Members3@gmail.com' },
    { id: 4, name: 'Members 4', email:'Members4@gmail.com' },
    { id: 5, name: 'Members 5', email:'Members5@gmail.com'},
    { id: 6, name: 'Members 6', email:'Members6@gmail.com' },
    // Add more committee items as needed
  ]);
  
  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded overflow-auto bg-slate-50'>
      <div className='md:flex justify-between'>
      <div className='m-2 md:m-4'>
            <h2 className='text-xl md:text-2xl text font-semibold text-indigo-800'>Conference Name : </h2>
        </div>
        <div>
              <label
                htmlFor="expectedSubmissions"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Select Committee</span>
                <select
  id="expectedSubmissions"
  name="expectedSubmissions"
  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  required
>
  <option value="" disabled>Select an option</option>
  <option value="<100">&lt;100</option>
  <option value="<500">&lt;500</option>
  <option value="<1000">&lt;1000</option>
  <option value="<2000">&lt;2000</option>
  <option value="<5000">&lt;5000</option>
  <option value="<10000">&lt;10000</option>
  <option value="<20000">&lt;20000</option>
</select>

              </label>
            </div>
      </div>
      <div>
        {/* row1 */}
        <div className='p-3 space-y-4 md:space-y-0 md:space-x-4 md:flex'>
  <div className='flex-1'>
    <label
      htmlFor="name"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Name<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  <div className='flex-1'>
    <label
      htmlFor="email"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Email<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
</div>

        {/* row2 */}
        <div className="p-3 space-y-4 md:space-y-0 md:space-x-4 md:flex">
  {/* Address Field */}
  <div className="flex-1">
    <label
      htmlFor="address"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Address<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="address"
        name="address"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  {/* Place Field */}
  <div className="flex-1">
    <label
      htmlFor="place"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Place<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="place"
        name="place"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  {/* State Field */}
  <div className="flex-1">
    <label
      htmlFor="state"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        State<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="state"
        name="state"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
</div>

        {/* row3 */}
        <div className="p-3 space-y-4 md:space-y-0 md:space-x-4 md:flex">
  {/* Country Field */}
  <div className="flex-1">
    <label
      htmlFor="country"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Country<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="country"
        name="country"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  {/* Mobile Field */}
  <div className="flex-1">
    <label
      htmlFor="mobile"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">
        Mobile<span style={{ color: 'red' }}>*</span>
      </span>
      <input
        type="text"
        id="mobile"
        name="mobile"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  {/* Role Field */}
  <div className="flex-1">
    <label
      htmlFor="role"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">Role</span>
      <input
        type="text"
        id="role"
        name="role"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
</div>

        {/* for button */}
        <div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
  >
    Save
  </button>
</div>

      </div>
      {/* ----------------- */}
      <div className='w-full h-auto md:flex'>
        <div className='mt-4 w-full h-96 border border-3 shadow-sm'>
        <div className='text-center text-xl font-semibold'>
        <h2>Old Members</h2>
      </div>
      {/* for old members table */}
       <div className='mt-2  w-full h-72 overflow-auto'>
       <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {oldmembers.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {member.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {member.email}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
       </div>
        {/* for button */}
        <div className='flex justify-center gap-3'>
        <div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
  >
    Old Members
  </button>
</div>
<div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
  >
    Add
  </button>
</div>
        </div>
        </div>
        <div className='mt-4 w-full h-96 border border-3 shadow-sm'>
        <div className='text-center text-xl font-semibold'>
        <h2>Members For </h2>
      </div>
     <div className='mt-2  w-full h-72 overflow-auto'>
     <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>

            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* {oldmembers.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {member.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {member.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  // onClick={() => removeCommittee(committee.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  ✖
                </button>
              </td>
              
            </tr>
          ))} */}
        </tbody>
      </table>
     </div>
     <div className='flex justify-center gap-3'>
        <div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
  >
    Save
  </button>
</div>
<div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
  >
    Close
  </button>
</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MemberRegistration