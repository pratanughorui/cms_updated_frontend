import React from 'react';

function ConferenceSelection() {
  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
      <div className="flex space-x-4">
        {/* Column 1 */}
        <div className="w-1/4 bg-white p-4  h-full overflow-auto">
         
          {/* Content for Column 1 */}
          <div>
              <label
                htmlFor="expectedSubmissions"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Select Conference</span>
                <select
  id="expectedSubmissions"
  name="expectedSubmissions"

  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"

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

        {/* Column 2 */}
        <div className="w-3/4 bg-white p-4 border border-zinc-700 rounded h-full">
        <div className='flex items-center justify-center text-4xl'>Selected Conference</div>
          {/* Content for Column 2 */}
          <form className="space-y-6 m-3 p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="conferenceTitle"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Conference Title<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="conferenceTitle"
                  name="conferenceTitle"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="shortName"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Short Name</span>
                <input
                  type="text"
                  id="shortName"
                  name="shortName"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="website"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Website</span>
                <input
                  type="text"
                  id="website"
                  name="website"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="venue"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Venue<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Address<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="place"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Place<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="place"
                  name="place"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">State<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="state"
                  name="state"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Country<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="text"
                  id="country"
                  name="country"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="fromDate"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">From Date<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="toDate"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">To Date<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="dateOfCallForPaper"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Date Of Call For Paper<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="date"
                  id="dateOfCallForPaper"
                  name="dateOfCallForPaper"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="lastDateForSubmission"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Last Date For Submission Paper<span style={{ color: 'red' }}>*</span></span>
                <input
                  type="date"
                  id="lastDateForSubmission"
                  name="lastDateForSubmission"
                  
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="expectedSubmissions"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">How Many Submissions Do You Expect<span style={{ color: 'red' }}>*</span></span>
                <select
  id="expectedSubmissions"
  name="expectedSubmissions"
  
  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  disabled
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
        
        </form>
        </div>
      </div>
    </div>
  );
}

export default ConferenceSelection;
