import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../assets/home36.png';

// Demo data for papers
const papers = [
    {
        id: 1,
        paperName: 'Understanding React',
        firstAuthor: 'Alice Smith',
        coAuthor: 'John Doe',
        pdf: 'react-paper.pdf',
        reviews: [
            { reviewerName: 'Reviewer 1', comment: 'Great insights on React.' },
            { reviewerName: 'Reviewer 2', comment: 'Well-structured and informative.' },
        ],
    },
    {
        id: 2,
        paperName: 'Advanced JavaScript',
        firstAuthor: 'Bob Johnson',
        coAuthor: 'Emma Davis',
        pdf: 'js-paper.pdf',
        reviews: [
            { reviewerName: 'Reviewer 1', comment: 'In-depth coverage of JS topics.' },
            { reviewerName: 'Reviewer 3', comment: 'Excellent examples provided.' },
        ],
    },
];

const PaperDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPaper, setSelectedPaper] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setSelectedPaper(null); // Clear selected paper when searching
    };

    const handlePaperClick = (paper) => {
        setSelectedPaper(paper);
    };

    const filteredPapers = papers.filter((paper) =>
        paper.paperName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate(); // <-- Initialize navigate

    const handleRedirect = () => {
        navigate('/select-conference');
    };

    function redirectToHome() {
        navigate('/select-conference'); //redirection by home icon 
    }

    return (
        <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
            {/* Home Icon */}
            <div className="w-full text-left mb-4">
                <img
                    src={homeIcon}
                    alt="Home"
                    className="cursor-pointer w-8 h-8"
                    onClick={redirectToHome}
                />
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-4">Conference ID Missing</h2>
                        <p className="mb-4">Please select a conference to proceed.</p>
                        <button
                            onClick={handleRedirect}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Go to Conference Selection
                        </button>
                    </div>
                </div>
            )}

            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }} className='text-xl md:text-2xl text font-semibold text-black'>Paper Dashboard</h1>

                <div style={{ margin: '20px 0' }}>
                    <input
                        type="text"
                        placeholder="Search for a paper..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ padding: '10px', width: '100%', fontSize: '16px' }}
                    />
                </div>

                {searchTerm && (
                    <div>
                        {filteredPapers.length > 0 ? (
                            filteredPapers.map((paper) => (
                                <div
                                    key={paper.id}
                                    onClick={() => handlePaperClick(paper)}
                                    style={{
                                        padding: '10px',
                                        margin: '10px 0',
                                        border: '1px solid #ddd',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {paper.paperName}
                                </div>
                            ))
                        ) : (
                            <p>No papers found with that name.</p>
                        )}
                    </div>
                )}

                {selectedPaper && (
                    <div style={{ marginTop: '30px' }}>
                        <h2>{selectedPaper.paperName}</h2>
                        <p><strong>First Author:</strong> {selectedPaper.firstAuthor}</p>
                        <p><strong>Co-Author:</strong> {selectedPaper.coAuthor}</p>
                        <p><strong>PDF:</strong> <a href={`/${selectedPaper.pdf}`} download>{selectedPaper.pdf}</a></p>
                        <div>
                            <h3>Reviews</h3>
                            {selectedPaper.reviews.map((review, index) => (
                                <div key={index} style={{ marginBottom: '10px' }}>
                                    <p><strong>Review {index + 1}:</strong></p>
                                    <p><strong>Reviewer Name:</strong> {review.reviewerName}</p>
                                    <p><strong>Comment:</strong> {review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaperDetails;
