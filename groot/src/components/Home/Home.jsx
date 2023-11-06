import './HomeStyle.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Home() {  

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const url = "http://127.0.0.1:5000/messages";
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(123);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const redirectToTable = (message) => {
   navigate(`/about/${message}`);
  };
  
    function ChatCreation(){
      const messages = (
      <div>
        {error ? (<p>Error: {error}</p>) : (
          <div>
            {data.map((dataObj) => (
                            <div key={dataObj.key} className={dataObj.createdBy === 'python' ? 'pythontxt-container' : 'usertxt-container'}>
                <div key={dataObj.key} className={dataObj.createdBy === 'python' ? 'python-Text chat-message' : 'user-Text chat-message'}>
                  <p>{dataObj.message}</p>
                {
                  dataObj.createdBy === 'python' ? (
                    <div className="python-button">
                      <button 
                      className='btn btn-warning' 
                      onClick={() => redirectToTable(dataObj.message)}
                      >execute</button>
                    </div>
                  ):(
                    <div>

                    </div>
                  )
                }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
    return <div>{messages}</div>;
    }

 

  const addValue = async () => {
    try {
      if (message) {
        await axios.post('http://127.0.0.1:5000/add_message', { message });
        fetchInfo();
        setMessage("");
      }
    } catch (error) {
      setError(error.message+" in posting data");
    }    
  };
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      addValue();
    }
  };
  return (
    <div className="Chat-container">
      {error ? (<p>error: {error}</p>) : (
        <div className="chat">  
          {ChatCreation()}
          <div className="input-combinations">
            <input 
              type="text" 
              name="userInput"
              id="Input" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleEnterKey}
              className='inputField'/>
            <button onClick={addValue} className='btn btn-warning'>
              <FontAwesomeIcon icon={faPaperPlane} />  
            </button>
          </div>
        </div>
      )}
    </div>
  );
}