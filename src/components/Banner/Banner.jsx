import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero">
        <div className="hero-content grid lg:grid-cols-2 md:gap-10 items-center">
          
          <div className=' text-center md:text-start'>
            <p className="inline-flex items-center border rounded-full p-1 bg-red-400/30 text-red-500  text-xl font-medium">✨Frontier AI Models</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter  text-red-600">
            One Subscription.
            <br />
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              All the AIs You Need
            </span>
          </h1>
          <p className="text-lg text-zinc-700 max-w-lg">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-red-600 hover:bg-red-500 transition-all px-4 py-2 rounded-2xl cursor-pointer  font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white mx-auto md:mx-0">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8 text-sm text-zinc-600 pt-4 md:pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div>

          </div>
          <div>
          <img
            src={bannerImg}
            className=" md:max-w-sm rounded-lg drop-shadow-2xl animate-pulse"
          />

          </div>
        </div>
      </div>
    );
};

export default Banner;