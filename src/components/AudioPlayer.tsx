import React from 'react'
import { useAudio } from '../hooks/useAudio';

const AudioPlayer = ({url}: {url: string}) => {
    const [playing, toggle] = useAudio({url: url})

    return (
      <div>
        <button onClick={() => toggle}>{playing ? "Pause" : "Play"}</button>
      </div>
    );
}

export default AudioPlayer