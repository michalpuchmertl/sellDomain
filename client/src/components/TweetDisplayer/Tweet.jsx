import React from 'react'

function Tweet(props) {
    const { id, username, text } = props

    const wrapToElement = () => {
        let splittedText = text.split(/(\b#PandoraPapers+\b)/gi);
        
        for (var i = 1; i < splittedText.length; i += 2) {
            splittedText[i] = <strong key={i}>{splittedText[i]}</strong>;
        }

        return <p>{splittedText}</p>;
    }

    return (
        <div className="tweet">
            <a href={`https://twitter.com/${username}/status/${id}`}>
                <div>
                    {wrapToElement()}
                    <span>{username}</span>
                </div>
            </a>
        </div>
    )
}

export default Tweet

