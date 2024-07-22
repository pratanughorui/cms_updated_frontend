import React, { useEffect, useState } from 'react';
import { createAuthorWork } from '../services/ConferenceServices';
import { useLoaderData } from 'react-router-dom';
import { getAllConference } from '../services/ConferenceServices';

const AuthorRegistration = () => {
  const [conferenceList, setConferenceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conference, setConference] = useState('');
  const [tracks, setTracks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [name, setName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [country, setCountry] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [googlescId, setGooglescId] = useState('');
  const [orchidId, setOrchidId] = useState('');
  const [title, setTitle] = useState('');
  const [track, setTrack] = useState('');
  const [keywords, setKeywords] = useState('');
  const [abstract, setAbstract] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [completionMessage, setCompletionMessage] = useState('');
  const [topicid, setTopicid] = useState('');
  const [CoAuthors, setCoAuthors] = useState([]);
  const [selectedTrackId, setSelectedTrackId] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    affiliation: '',
    country: '',
    contactNumber: '',
    email: '',
    title: '',
    track: '',
    topicid: '',
    keywords: '',
    abstract: '',
    pdfFile: '',
  });

  useEffect(()=>{
   getAllConference().then((res)=>{
    console.log(res.data);
     setConferenceList(res.data); 
     //setTracks(res.data.tracks);               
   }).catch(()=>{

   })
  },[]);

  const handleTrackChange = (e) => {
    const ind = e.target.selectedIndex - 1;
    setSelectedTrackId(e.target.value);
    if (ind !== -1) {
      setTopics(tracks[ind].topics);
      setTrack(tracks[ind].track_name);
    } else {
      setTopics([]);
    }
  };

  const clearData=()=>{
       setName();
       setEmail();
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('gggggg');
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required.';
    if (!affiliation) newErrors.affiliation = 'Affiliation is required.';
    if (!country) newErrors.country = 'Country is required.';
    if (!contactNumber) newErrors.contactNumber = 'Contact number is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!title) newErrors.title = 'Title is required.';
    if (!track) newErrors.track = 'Track is required.';
    if (!keywords) newErrors.keywords = 'Keywords are required.';
    if (!abstract) newErrors.abstract = 'Abstract is required.';
    if (!pdfFile) newErrors.pdfFile = 'PDF file is required.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.log('ddd');
      return;
    }
    const coAuthorsData = CoAuthors.map(coAuthor => ({
      name: coAuthor.name,
      affiliation: coAuthor.affiliation,
      country: coAuthor.country,
      contact_no: coAuthor.mobile,
      email: coAuthor.email
    }));

    const authorWorkData = {
      name,
      affiliation,
      country,
      contact_no: contactNumber,
      email,
      google_sh_id: googlescId,
      orcid_id: orchidId,
      title,
      keywords,
      abstract,
      co_authors: coAuthorsData
    };

    setLoading(true);
    createAuthorWork(authorWorkData, selectedTrackId, conference._id, pdfFile)
      .then((Response) => {
        setCompletionMessage(Response.data.message);
        clearData();
      })
      .catch(err => {
        alert(err.response.data.error);
        console.log(err);
      });
    setLoading(false);
  };

  const handleAddCoAuthor = () => {
    const newCoAuthor = { name: '', email: '', mobile: '', affiliation: '', country: '', googleScholarId: '', orchidId: '' };
    setCoAuthors([...CoAuthors, newCoAuthor]);
  };

  const handleCoAuthorChange = (index, field, value) => {
    const updatedCoAuthors = [...CoAuthors];
    updatedCoAuthors[index][field] = value;
    setCoAuthors(updatedCoAuthors);
  };

  const handleDeleteCoAuthor = (index) => {
    const updatedCoAuthors = [...CoAuthors];
    updatedCoAuthors.splice(index, 1);
    setCoAuthors(updatedCoAuthors);
  };

  const handleConferenceChange = (event) => {
    const selectedConferenceId = event.target.value;
    const selectedConferenceData = conferenceList.find(
      (conference) => conference._id == selectedConferenceId
    );
    setConference(selectedConferenceData);
    setTracks(selectedConferenceData.tracks);
    console.log(selectedConferenceData.tracks)
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-center mb-4">Submit Paper</h3>
            {completionMessage && (
              <div className="alert alert-success mb-4">
                {completionMessage}
              </div>
            )}
            <form onSubmit={handleFormSubmit}>
              {/* Conference */}
              <div className="mb-4">
                <label className="block text-gray-700">Conference:</label>
                <select
                  className={`form-select mt-1 block w-full ${errors.track ? 'border-red-500' : ''}`}
                  onChange={handleConferenceChange}
                >
                  <option value="">Select Conference</option>
                  {conferenceList.map((conferenceItem) => (
                    <option key={conferenceItem._id} value={conferenceItem._id}>
                      {conferenceItem.conference_title}
                    </option>
                  ))}
                </select>
                {errors.track && <p className="text-red-500 text-xs italic">{errors.track}</p>}
              </div>
              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  className={`form-input mt-1 block w-full ${errors.name ? 'border-red-500' : ''}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
              </div>
              {/* Affiliation */}
              <div className="mb-4">
                <label className="block text-gray-700">Affiliation:</label>
                <textarea
                  className={`form-textarea mt-1 block w-full ${errors.affiliation ? 'border-red-500' : ''}`}
                  value={affiliation}
                  onChange={(e) => setAffiliation(e.target.value)}
                ></textarea>
                {errors.affiliation && <p className="text-red-500 text-xs italic">{errors.affiliation}</p>}
              </div>
              {/* Country */}
              <div className="mb-4">
                <label className="block text-gray-700">Country:</label>
                <input
                  type="text"
                  className={`form-input mt-1 block w-full ${errors.country ? 'border-red-500' : ''}`}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                {errors.country && <p className="text-red-500 text-xs italic">{errors.country}</p>}
              </div>
              {/* Contact Number */}
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number:</label>
                <input
                  type="text"
                  className={`form-input mt-1 block w-full ${errors.contactNumber ? 'border-red-500' : ''}`}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                {errors.contactNumber && <p className="text-red-500 text-xs italic">{errors.contactNumber}</p>}
              </div>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  className={`form-input mt-1 block w-full ${errors.email ? 'border-red-500' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>
              {/* Google Scholar ID */}
              <div className="mb-4">
                <label className="block text-gray-700">Google Scholar ID (Optional):</label>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  value={googlescId}
                  onChange={(e) => setGooglescId(e.target.value)}
                />
              </div>
              {/* ORCID ID */}
              <div className="mb-4">
                <label className="block text-gray-700">ORCID ID (Optional):</label>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  value={orchidId}
                  onChange={(e) => setOrchidId(e.target.value)}
                />
              </div>
              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700">Title:</label>
                <textarea
                  className={`form-textarea mt-1 block w-full ${errors.title ? 'border-red-500' : ''}`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></textarea>
                {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
              </div>
              {/* Track */}
              <div className="mb-4">
                <label className="block text-gray-700">Track:</label>
                <select
                  className={`form-select mt-1 block w-full ${errors.track ? 'border-red-500' : ''}`}
                  value={selectedTrackId}
                  onChange={handleTrackChange}
                >
                  <option value="">Select Track</option>
                  {tracks.map((trackItem) => (
                    <option key={trackItem._id} value={trackItem._id}>
                      {trackItem.track_name}
                    </option>
                  ))}
                </select>
                {errors.track && <p className="text-red-500 text-xs italic">{errors.track}</p>}
              </div>
              {/* Topic */}
              {/* <div className="mb-4">
                <label className="block text-gray-700">Topic:</label>
                <select
                  className={`form-select mt-1 block w-full ${errors.topicid ? 'border-red-500' : ''}`}
                  value={topicid}
                  onChange={(e) => setTopicid(e.target.value)}
                >
                  <option value="">Select Topic</option>
                  {topics.map((topicItem) => (
                    <option key={topicItem.topic_id} value={topicItem.topic_id}>
                      {topicItem.topic_name}
                    </option>
                  ))}
                </select>
                {errors.topicid && <p className="text-red-500 text-xs italic">{errors.topicid}</p>}
              </div> */}
              {/* Keywords */}
              <div className="mb-4">
                <label className="block text-gray-700">Keywords:</label>
                <textarea
                  className={`form-textarea mt-1 block w-full ${errors.keywords ? 'border-red-500' : ''}`}
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                ></textarea>
                {errors.keywords && <p className="text-red-500 text-xs italic">{errors.keywords}</p>}
              </div>
              {/* Abstract */}
              <div className="mb-4">
                <label className="block text-gray-700">Abstract:</label>
                <textarea
                  className={`form-textarea mt-1 block w-full ${errors.abstract ? 'border-red-500' : ''}`}
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                ></textarea>
                {errors.abstract && <p className="text-red-500 text-xs italic">{errors.abstract}</p>}
              </div>
              {/* PDF File */}
              <div className="mb-4">
                <label className="block text-gray-700">PDF File:</label>
                <input
                  type="file"
                  className={`form-input mt-1 block w-full ${errors.pdfFile ? 'border-red-500' : ''}`}
                  onChange={(e) => setPdfFile(e.target.files[0])}
                />
                {errors.pdfFile && <p className="text-red-500 text-xs italic">{errors.pdfFile}</p>}
              </div>
              {/* Co-Authors */}
              <div className="mb-4">
                <label className="block text-gray-700">Co-Authors:</label>
                {CoAuthors.map((coAuthor, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="form-input mt-1 block w-full mr-2"
                        placeholder="Name"
                        value={coAuthor.name}
                        onChange={(e) => handleCoAuthorChange(index, 'name', e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-input mt-1 block w-full mr-2"
                        placeholder="Email"
                        value={coAuthor.email}
                        onChange={(e) => handleCoAuthorChange(index, 'email', e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-input mt-1 block w-full mr-2"
                        placeholder="Mobile"
                        value={coAuthor.mobile}
                        onChange={(e) => handleCoAuthorChange(index, 'mobile', e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-input mt-1 block w-full mr-2"
                        placeholder="Affiliation"
                        value={coAuthor.affiliation}
                        onChange={(e) => handleCoAuthorChange(index, 'affiliation', e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-input mt-1 block w-full mr-2"
                        placeholder="Country"
                        value={coAuthor.country}
                        onChange={(e) => handleCoAuthorChange(index, 'country', e.target.value)}
                      />
                      <button
                        type="button"
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleDeleteCoAuthor(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleAddCoAuthor}
                >
                  Add Co-Author
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorRegistration;
