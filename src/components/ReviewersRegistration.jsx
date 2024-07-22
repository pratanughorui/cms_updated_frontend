import React,{useState,useEffect} from 'react'
import { getalltracks } from '../services/ConferenceServices';
import { createReviewers } from '../services/ConferenceServices';
function ReviewersRegistration() {
  const [oldmembers, setOldmembers] = useState([]);
  const [tracks,setTracks]=useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [country, setCountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [googleScholarId, setGoogleScholarId] = useState('');
  const [orcidId, setOrcidId] = useState('');
  const [reviewers, setReviewers] = useState([]);
  const [selectedTrack,setSelectedTrack]=useState('');
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      affiliation,
      country,
      mobile,
      googleScholarId,
      orcidId,
    };
    const isEmailExist = reviewers.some(reviewers => reviewers.email === formData.email);

  if (isEmailExist) {
    alert('Email already exists! Please use a different email.');
    return; // Exit function if email already exists
  }
    setReviewers([...reviewers,formData]);
    console.log('Form Data:', formData);
  };

  useEffect(()=>{
    const conference_id=sessionStorage.getItem('con');
    if(conference_id){
      getalltracks(conference_id).then((res)=>{
        setTracks(res.data);
      }).catch((err)=>{
   
      })
    }
 
  },[]);
  const finalsave=()=>{
    if(!selectedTrack){
      alert("select track first");
      return;
    }
    const transformedData = {
      "reviewers": reviewers.map(item => ({
          "name": item.name,
          "affiliation": item.affiliation,
          "country": item.country,
          // "password": item.password,
          "mobile": item.mobile,
          "email": item.email
      }))
  };
  createReviewers(transformedData,selectedTrack).then((Response)=>{
    setSuccess(true);
    setReviewers([]);
    
    
  }).catch((err)=>{
      console.log(err);
  })

  }
  
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
                <span className="text-xs font-medium text-gray-700">Select Track</span>
                <select
  id="expectedSubmissions"
  name="expectedSubmissions"
  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  value={selectedTrack}
  onChange={(event) => setSelectedTrack(event.target.value)}
  required
>
  <option value="" disabled>Select an option</option>
  {tracks.map((track) => (
        <option key={track._id} value={track._id}>
          {track.track_name}
        </option>
      ))}
</select>

              </label>
            </div>
      </div>
      <div>
        {/* row1 */}
        <form onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      {/* row2 */}
      <div className="p-3 space-y-4 md:space-y-0 md:space-x-4 md:flex">
        <div className="flex-1">
          <label
            htmlFor="affiliation"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Affiliation<span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="text"
              id="affiliation"
              name="affiliation"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={affiliation}
              onChange={(e) => setAffiliation(e.target.value)}
              required
            />
          </label>
        </div>
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>
        </div>
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
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      {/* row3 */}
      <div className="p-3 space-y-4 md:space-y-0 md:space-x-4 md:flex">
        <div className="flex-1">
          <label
            htmlFor="googleScholarId"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Google Scholar ID<span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="text"
              id="googleScholarId"
              name="googleScholarId"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={googleScholarId}
              onChange={(e) => setGoogleScholarId(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex-1">
          <label
            htmlFor="orcidId"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              ORCID ID<span style={{ color: 'red' }}>*</span>
            </span>
            <input
              type="text"
              id="orcidId"
              name="orcidId"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={orcidId}
              onChange={(e) => setOrcidId(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <div className='flex items-center justify-center mt-3'>
        <button
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          type="submit"
      
        >
          Save
        </button>
      </div>
    </form>
        
      </div>
      {/* ----------------- */}
      <div className='w-full h-auto md:flex'>
        <div className='mt-4 w-full h-96 border border-3 shadow-sm'>
        <div className='text-center text-xl font-semibold'>
        <h2>Old Reviewers</h2>
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
    Old Reviewers
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
        <h2>Reviewers For </h2>
      </div>
      {success && (
  <div
    className="flex items-center justify-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      className="w-5 h-5 mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-4.293-3.707a1 1 0 00-1.414 0L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="font-medium">Success!</span> Reviewers Added successfully!
  </div>
)}
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
          {reviewers.map((reviewer) => (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {reviewer.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {reviewer.email}
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
          ))}
        </tbody>
      </table>
     </div>
     <div className='flex justify-center gap-3'>
        <div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
    onClick={()=>finalsave()}
  >
    Save
  </button>
</div>
<div className='flex items-center justify-center mt-3'>
  <button
    className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    type="submit"
    onClick={()=>{
      setReviewers([]);
    }}
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

export default ReviewersRegistration