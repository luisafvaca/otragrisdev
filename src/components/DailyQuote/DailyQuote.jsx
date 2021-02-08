import React, {useEffect, useState} from 'react';

import { getRandom } from '../../utils/Utils';

import './DailyQuote.scss';

const DailyQuote = () => {
    const [dailyQuote, setDaylyQuote] = useState('');

    useEffect(()=> {
        fetch("https://type.fit/api/quotes").then((response) => {
            return response.json()
        }).then((data)=>{
            const dailyQuote = getRandom(data);
            setDaylyQuote(dailyQuote)
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    
    return (
        <div className='dailyQuoteContainer'>
            <h1>"{dailyQuote?.text}"</h1>
            <div className='dailyQuoteContainer_separatorText'></div>
            <p>- {dailyQuote?.author ? dailyQuote?.author : 'No Author'} -</p>
        </div>
    )
}

export default DailyQuote;