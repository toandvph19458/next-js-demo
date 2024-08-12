import React from 'react'

type Props = {}

const Card = (props: Props) => {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
                <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
                    <div className='max-w-md mx-auto space-y-6'>
                        <img src='https://tailwindcomponents.com/svg/logo-color.svg' className='h-8' />

                        <p className='text-gray-600'>Open source Tailwind UI components and templates to bootstrap your new apps, projects or landing sites!</p>

                        <div className='text-base leading-7'>
                            <p className='font-medium text-gray-700'>Looking For Free premium components?</p>

                            <p>
                                <a target='_blank' href='https://tailwindcomponents.com/awesome' className='text-teal-400 hover:underline'>Check out our awesome components →</a>
                            </p>
                        </div>

                        <div className='text-base leading-7'>
                            <p className='font-medium text-gray-700'>Looking for premium themes and landing pages?</p>

                            <p>
                                <a target='_blank' href='https://tailwindcomponents.com/promotes' className='text-teal-400 hover:underline'>Check out our premium page →</a>
                            </p>
                        </div>

                        <div className='text-base leading-7'>
                            <p className='font-medium text-gray-700'>Looking for Awesome cheatsheet for Tailwind CSS?</p>

                            <p>
                                <a target='_blank' href='https://tailwindcomponents.com/cheatsheet' className='text-teal-400 hover:underline'>Check out our cheatsheet →</a>
                            </p>
                        </div>

                        <div className='text-base leading-7'>
                            <p className='font-medium text-gray-700'>Want to dig deeper into Tailwind CSS?</p>
                            <p>
                                <a target='_blank' href='https://tailwindcss.com/docs' className='text-teal-400 hover:underline'>Read the docs →</a>
                            </p>
                        </div>

                        <a target='_blank' href='https://tailwindcomponents.com' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                            Go Back to Tailwind Components
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card