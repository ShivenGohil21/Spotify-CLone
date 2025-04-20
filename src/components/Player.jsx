import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Player() {

  const {seekBar,seekBg,playStatus,play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
  <div className='hidden lg:flex flex-col items-start gap-1'>
    <img src={songsData[0].image} className='w-12' />
    <p className='text-sm font-semibold'>{songsData[0].name}</p>
    <p className='text-xs text-gray-400'>{songsData[0].desc.slice(0,12)}</p>
  </div>
    <div className='flex flex-col items-center gap-1 m-auto'>
      <div className="flex gap-4">
        <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
        <img onClick={previous} src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
        {
          playStatus ? <img onClick={pause} src={assets.pause_icon}  className="w-4 cursor-pointer" /> :
          <img onClick={play} src={assets.play_icon}  className="w-4 cursor-pointer" />
        }
        
        
        <img onClick={next} src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
      </div>
        <div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div  ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
            </div>
            <p>3:20</p>
        </div>

<div className="fixed bottom-4 right-4 z-50 bg-black px-4 py-2 rounded-lg">
  <div className="flex items-center gap-2 opacity-75">
    <img src={assets.play_icon} alt="" className="w-4" />
    <img src={assets.mic_icon} alt="" className="w-4" />
    <img src={assets.queue_icon} alt="" className="w-4" />
    <img src={assets.speaker_icon} alt="" className="w-4" />
    <img src={assets.volume_icon} alt="" className="w-4" />
    <div className="w-20 bg-slate-50 h-1 rounded"></div>
    <img src={assets.mini_player_icon} alt="" className="w-4" />
    <img src={assets.zoom_icon} alt="" className="w-4" />
  </div>
</div>

</div>
</div>






  )
}

export default Player
