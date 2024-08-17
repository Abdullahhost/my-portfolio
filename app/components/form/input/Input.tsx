"use client"


import { InputType } from "@/app/type"


const Input: React.FC<InputType> = ({
    type,
    name,
    number,
    heading,
    placeholder,
    textArea,
    userValue,
    onChange
}) => {


    return (
        <div className="py-2 lg:py-6 bg-neutral-700 mb-8 lg:mb-4 ">
            <div className={`ml-0 lg:ml-16 text-nowrap p-2 lg:p-4 text-[1rem] lg:text-[1.5rem] text-neutral-300}`}>
                {heading}
            </div>
            <div className="flex items-start relative flex-col lg:flex-row">

                <div className="text-neutral-400 p-4 hidden lg:block ">
                    {`0${number}`}
                </div>


                {textArea ? <>

                    <textarea style={{ background: "linear-gradient(to right, #555 70%, #000)" }}
                        required placeholder={placeholder} title={`${name} is required`}
                        name={name} onChange={onChange} rows={6} value={userValue}
                        className="inputChecked text-white  focus:placeholder:text-[transparent] 
                        outline-none text-[1.5rem] h-full  placeholder:text-[1.2rem] placeholder:lg:text-[1.4rem] 
                      px-2 lg:px-6 pt-4 pb-8 w-full" ></textarea>
                </> : <>
                    <input required type={type}
                        style={{ background: "linear-gradient(to right, #555 70%, #000)" }}
                        value={userValue}
                            className="inputChecked text-white focus:placeholder:text-[transparent] 
                        outline-none text-[1.5rem] h-full placeholder:text-[1.2rem] placeholder:lg:text-[1.4rem] 
                         px-2 lg:px-6 pt-4 pb-8 w-full"

                        placeholder={placeholder} title={`${name} is required`} name={name} onChange={onChange} />
                </>}

                <div className="w-full text-nowrap h-12 ml-0 lg:ml-16 text-[1rem] lg:text-[1.5rem] p-2 lg:p-4  text-neutral-100 headingDiv absolute top-[-43px] lg:top-[-72px] left-0">
                    {heading}
                </div>

            </div>
        </div>
    )
}

export default Input
