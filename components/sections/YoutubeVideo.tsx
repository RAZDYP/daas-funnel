import React from 'react';

function YoutubeVideo() {
    return (
        <section className="flex flex-col items-center gap-10 px-4 w-full sm:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[70%]">
            <div>
                <p className='text-[#215FF6] text-center text-[26px] sm:text-[36px] md:text-[48px]  font-semibold'>
                    Our Mission
                </p>
                <p className="text-center font-medium text-sm sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                    Help 10,000 Latinos Get Remote Careers in Business in the USA and Canada
                </p>
            </div>
            <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[50%] aspect-video">
                <iframe
                    className="w-full h-full rounded-md shadow-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    );
}

export default YoutubeVideo;
