const VideoTitle=({title,overview})=>{
return (
<div className="w-full px-8 py-24 md:py-32 bg-linear-to-b from-black via-black/70 to-transparent absolute flex flex-col gap-4">
  <h1 className="text-3xl md:text-5xl font-bold text-white max-w-lg">{title}</h1>
  <p className="text-sm md:text-base text-zinc-300 max-w-md line-clamp-3">{overview}</p>

  <div className="flex gap-3">
    <button className="px-6 py-2 rounded bg-white text-black font-semibold hover:bg-white/80 transition-colors">
      Play Now
    </button>
    <button className="px-6 py-2 rounded bg-zinc-600/70 text-white font-semibold hover:bg-zinc-600/50 transition-colors">
      More Info
    </button>
  </div>
</div>

);
}

export default VideoTitle;