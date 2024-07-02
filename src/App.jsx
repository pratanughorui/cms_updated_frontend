import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import CreateConference from './components/ConferenceCreation';
import SelectConference from './components/ConferenceSelection';
import ReviewerInvitation from './components/ReviewInvitetion';
import AllotPaper from './components/AllotPaper';
import ReviewFormat from './components/ReviewFormat';
import Report from './components/Report';
import Committee from './components/Committee';
import MemberRegistration from './components/MemberRegistration';
import TrackRegistration from './components/TrackRegistration';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1 p-7">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-conference" element={<CreateConference />} />
            <Route path="/select-conference" element={<SelectConference />}/>

             <Route path="/committee" element={<Committee />} />
             <Route path="/Members" element={<MemberRegistration />} />
             <Route path="/Tracks" element={<TrackRegistration />} />
                
            <Route path="/reviewer-invitation" element={<ReviewerInvitation />} />
            <Route path="/allot-paper" element={<AllotPaper />} />
            <Route path="/review-format" element={<ReviewFormat />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
