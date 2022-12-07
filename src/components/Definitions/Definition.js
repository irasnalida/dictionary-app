import React from 'react'
import "./Definition.css"

const Definition = ({word, meanings}) => {
  return (
    <div className='meanings'>
      <div className='audio-container'>
        {
          meanings[0] && word && (
            <audio preload="auto" src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
              Your Brwoser doesn't support audio.
            </audio>
          )
        }
      </div>
        {
          word===""?(<div className='centersubTitle'><span className='subTitle'>Start by typing a word in search</span></div>):(
              meanings.map((mean) => mean.meanings.map((item) => (
                item.definitions.map((def) => (
                  <div className='singleMean'>
                    <b>{def.definition}</b>
                    <br/>
                    {def.example && (
                      <span>
                        Example : {def.example}
                      </span>)}
                  </div>
                ))
              )))
          )
        }
        {
          word===""?(<div></div>):(
            meanings.map((mean) =>mean.meanings.map((item) =>(
              Object.keys(item.synonyms).length === 0?(<></>):(<div className='singleMean'><span>Synonyms</span> [<i>{item.partOfSpeech}</i>] : {item.synonyms.map((s)=>`${s}, `)}</div>
            ))))
          )
        }
        {
          word===""?(<div></div>):(
            meanings.map((mean) =>mean.meanings.map((item) =>(
              Object.keys(item.antonyms).length === 0?(<></>):(<div className='singleMean'><span>Antonyms</span> [<i>{item.partOfSpeech}</i>] : {item.antonyms.map((s)=>`${s}, `)}</div>
            ))))
          )
        }
    </div>
  )
}

export default Definition