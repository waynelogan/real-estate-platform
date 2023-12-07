import Image from 'next/image'

export default function HeroSection() {

    return (
        <div className = {`
            flex flex-col lg:flex-row w-[100%] mb-20
        `}>
            <div className='w-full lg:w-[50%] py-4 px-20'>
                <h1 className='font-bold text-3xl lg:text-4xl mb-4'>Find Your Dream House By Us</h1>
                <p className='text-gray-600 border-l-2 border-l-gray-600 pl-4'>Let us help you find a home for you and your family.</p>
                <button className = {`
                    bg-[#ff5a3d] text-white
                    p-4 m-8 ml-0
                `}>Make An Inquiry</button>
            </div>
            <div className='w-full lg:w-[50%] px-4'>
                <Image 
                src='/hero-banner.png' 
                className='ml-auto'
                width={400} height={400} 
                />
            </div>
        </div>
    )
}