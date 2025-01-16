import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

const FindPlace = () => {
    return (
        <div class="container flex items-center h-full py-10">
            <div className='flex flex-col space-y-10 bg-white rounded-lg md:bg-transparent p-5 md:p-0'>
                <h2 className='text-[28px] font-bold '>Find the best places to eat and drink for any occasion</h2>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-6 md:bg-white w-full md:w-fit font-normal rounded-lg md:p-0'>

                    <div className='flex flex-col space-y-1'>
                        <p className='text-xs'>Location</p>
                        <select className='text-[15px] text-[#656B89] border rounded-lg border-gray-300 focus:outline-none p-2.5  w-full md:max-w-44'>
                            <option>Oshodi</option>
                            <option>Chottogram</option>
                            <option>Dhaka</option>
                        </select>
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <p className='text-xs'>Date</p>

                        <input type="date" className='text-[15px] text-[#656B89] border rounded-lg border-gray-300 focus:outline-none p-2.5  w-full md:max-w-44' />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <small>Time</small>
                        <TimeInput
                            className="text-[15px] text-[#656B89] border rounded-lg border-gray-300 focus:outline-none   w-full md:max-w-440"
                            defaultValue={new Time(11, 45)}
                            labelPlacement="inside"
                            endContent={
                                <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <p className='text-xs'>Cuisine</p>
                        <select className='text-[15px] text-[#656B89] w-full md:max-w-44 border rounded-lg border-gray-300 focus:outline-none p-2.5'>
                            <option>Chinese</option>
                            <option>Chottogram</option>
                            <option>Dhaka</option>
                        </select>
                    </div>

                    <div className='flex flex-col space-y-1'>
                        <p className='text-xs'>People</p>
                        <select className='text-[15px] text-[#656B89] w-full md:max-w-44 border rounded-lg border-gray-300 focus:outline-none p-2.5'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>


                    <button className='primary-button !font-normal text-base !px-10 w-full md:w-fit'>Search</button>

                </div>


            </div>
        </div>
    );
};

export const ClockCircleLinearIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
};

export default FindPlace;