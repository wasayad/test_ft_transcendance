import YouTube from 'react-youtube'

function Stream()
{
    const opts: any = {
        height: '600',
        width: '600',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div className="top-35% absolute ml-5% w-20% h-60  font-sans text-white float text-center text-3xl md:text-4xl">
            Stream
              <YouTube className="w-full h-60 " videoId="4KHwVzwwQyI" opts={opts} />
        </div>
    )
}

export default Stream