import React, { useState } from 'react';

function ConferenceCreation() {
  // Define state variables for each field
  const [conferenceTitle, setConferenceTitle] = useState('');
  const [shortName, setShortName] = useState('');
  const [website, setWebsite] = useState('');
  const [venue, setVenue] = useState('');
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [dateOfCallForPaper, setDateOfCallForPaper] = useState('');
  const [lastDateForSubmission, setLastDateForSubmission] = useState('');
  const [expectedSubmissions, setExpectedSubmissions] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      conferenceTitle,
      shortName,
      website,
      venue,
      address,
      place,
      state,
      country,
      fromDate,
      toDate,
      dateOfCallForPaper,
      lastDateForSubmission,
      expectedSubmissions,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
      <div className='flex items-center justify-center text-5xl m-5'>Create Conference</div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6 m-6 p-5">
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
                  value={conferenceTitle}
                  onChange={(e) => setConferenceTitle(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={shortName}
                  onChange={(e) => setShortName(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={dateOfCallForPaper}
                  onChange={(e) => setDateOfCallForPaper(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
                  value={lastDateForSubmission}
                  onChange={(e) => setLastDateForSubmission(e.target.value)}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
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
  value={expectedSubmissions}
  onChange={(e) => setExpectedSubmissions(e.target.value)}
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
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConferenceCreation;
