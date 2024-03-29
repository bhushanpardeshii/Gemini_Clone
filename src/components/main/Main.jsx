import React, { useContext } from 'react'
import './main.css'

import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
    const { onSent, recentprompt, showresult, loading, resultdata, setInput, input } = useContext(Context)
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSent();
        }
    };
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt='user' />
            </div>
            <div className="main-container">
                {!showresult ?
                    <><div className="greet">
                        <p><span></span></p>
                        <p><span>Hello,Dev!</span></p>
                        <p>How can i help you today?</p>
                    </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to visit in winter</p>
                                <img src={assets.compass_icon} />
                            </div><div className="card">
                                <p>Breifly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} />
                            </div><div className="card">
                                <p>Brainstorm team bonding activites for our work retreat</p>
                                <img src={assets.message_icon} />
                            </div><div className="card">
                                <p>Improve readabitity of the following code</p>
                                <img src={assets.code_icon} />
                            </div>
                        </div></> :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt='user' />
                            <p>{recentprompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} />
                            {loading ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />

                            </div> : <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>}

                        </div>

                    </div>
                }

                <div className="main-bottom">
                    <div className="searchbox">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" onKeyDown={handleKeyPress} placeholder='Enter Prompt Here...' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottominfo">
                        Gemini may display inaccurate info,including about people,so double check its responses.Your Privacy and Gemini Apps
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Main