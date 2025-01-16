import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const SignUp = ({ isOpenedSignUp, setIsOpenedSignUp }) => {
    const signUpMethods = [
        { logo: <FaGoogle />, name: 'Sign Up with Google' },
        { logo: <FaFacebookF />, name: 'Sign Up with Facebook' },
        { logo: <FaApple />, name: 'Sign Up with Apple' },
    ]

    return (
        <>
            <div div className={`container flex rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#121212] z-30 !p-0 ${isOpenedSignUp ? 'scale-100' : 'scale-0'} transition-all duration-300`} >

                <div className='w-[40%] bg-[url("/SignUp-bg.png")] bg-cover bg-center text-white p-10 rounded-l-xl hidden md:block'>
                    <h2 className='text-5xl font-bold'>Sign Up</h2>

                    <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse. </p>
                </div>

                <div className='flex flex-col space-y-3 md:w-[60%] p-10 mx-auto'>
                    <img src="/logo.png" alt="" className='mx-auto' />
                    <p className='text-[32px] font-bold'>Sign up and get exploring!</p>

                    <p className='font-medium'>Already have an account? <span class="text-primary">Sign In</span></p>

                    {
                        signUpMethods.map(method => (
                            <div className='border border-primary rounded-lg flex justify-center cursor-pointer'>
                                <div className='flex space-x-2 justify-start items-center  py-2  w-[220px]'>
                                    <div className='bg-primary p-2 text-white rounded-full'>
                                        {method.logo}
                                    </div>
                                    <p className='text-[15px] font-bold'>{method.name}</p>
                                </div>
                            </div>
                        ))
                    }

                    <div class="flex items-center justify-center my-6">
                        <div class="border-t border-gray-300 flex-grow"></div>
                        <small class="mx-4">or continue with</small>
                        <div class="border-t border-gray-300 flex-grow"></div>
                    </div>


                    <div className='flex flex-col space-y-2'>
                        <small>Email:</small>
                        <input type="email" className='bg-[#F5FAFF] dark:bg-black border-none focus:outline-none py-3 pl-7 rounded-md text-xs' placeholder='Example@gmail.com' />
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <small>Email:</small>
                        <input type="password" className='bg-[#F5FAFF] dark:bg-black border-none focus:outline-none py-3 pl-7 rounded-md text-xs' placeholder='Enter Password' />
                    </div>

                    <button class="primary-button">Sign Up</button>
                    <small>By creating an account, you agree to our <span class="text-primary">Terms & Conditions</span> and <span class="text-primary">Privacy Policy.</span></small>
                </div>

                <RxCross2 className='absolute top-5 right-5 text-xl cursor-pointer' onClick={() => setIsOpenedSignUp(false)} />

            </div >

            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/70 z-[29] ${isOpenedSignUp ? 'block' : 'hidden'}`}>

            </div>

        </>
    );
};

export default SignUp;