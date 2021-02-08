import React, {useEffect, useState} from 'react';

import { getRandom } from '../../utils/Utils';
import { URLS } from '../../constants/contants';

import './DailyQuote.scss';

const DailyQuote = () => {
    const [dailyQuote, setDaylyQuote] = useState('');

    useEffect(()=> {
        fetch(URLS.API_URL.QUOTES).then((response) => {
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
            <h1>{dailyQuote && (`"${dailyQuote?.text}"`)}</h1>
            <div className='dailyQuoteContainer_separatorText'></div>
            <p>- {dailyQuote?.author ? dailyQuote?.author : 'No Author'} -</p>
        </div>
    )
}

export default DailyQuote;