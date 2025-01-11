import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { submitAnswer } from '../../api/studentApi/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Greating from './Greating';
import EDuration from './EDuration';

const ExamPortal = () => {
  const questions = useSelector(state => state.exmQstns.questions);
  const examId = useSelector(state => state.exmQstns.examId);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [showHead, setShowHead] = useState(true);

  const handleOptionChange = (questionId, optionKey) => {
    setAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(answer => answer._id === questionId);
      if (existingAnswerIndex > -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = { _id: questionId, rsAns: optionKey };
        return updatedAnswers;
      } else {
        return [...prevAnswers, { _id: questionId, rsAns: optionKey }];
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const rspns = await submitAnswer(examId, answers);
      toast.success('Answers submitted successfully!');
      console.log(rspns);
      setSubmitted(true);
      setShowTimer(false);
      setShowHead(false);
    } catch (error) {
      toast.error('Submission failed. Please try again.');
      console.error('Submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTimeUp = () => {
    if (!submitted) {
      handleSubmit(); // Auto-submit when time is up
    }
  };

  return (
    <div className="container mt-4 mb-4">
      {showHead && (
        <h1 className="text-center text-primary fw-bolder"><b>STUDENT FINALLY EXAMINATION</b></h1>
      )}
      {showTimer && <EDuration onTimeUp={handleTimeUp} />}

      {submitted ? (
        <Greating />  
      ) : !questions || questions.length === 0 ? (
        <p className="text-center">No questions available</p>
      ) : (
        <>
          {questions.map(q => (
            <div key={q._id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{q.question}</h5>
                <div className="form-group">
                  {Object.entries(q.options).map(([key, option]) => (
                    <div className="form-check" key={key}>
                      <input
                        type="radio"
                        className="form-check-input"
                        id={`${q._id}-${key}`}
                        name={q._id}
                        value={key}
                        checked={answers.find(answer => answer._id === q._id)?.rsAns === key}
                        onChange={() => handleOptionChange(q._id, key)}
                      />
                      <label className="form-check-label" htmlFor={`${q._id}-${key}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button
            className="btn btn-primary btn-lg w-100 mt-3"
            onClick={handleSubmit}
            disabled={loading || submitted} 
          >
            {loading ? 'Submitting...' : 'Submit Answers'}
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ExamPortal;
