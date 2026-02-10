import React from 'react'
import { BiArrowBack, BiPhone, BiSearch } from "react-icons/bi";

const App_Header = () => {
    return (
        <div>
            <header className="w-full  ">
                {/* border-b */}
                <div className="flex items-center justify-between h-14 px-9">

                    <div className="flex items-center gap-3">
                        <BiArrowBack size={22} />
                        <h1 className="font-semibold text-base">
                            Virginia M. Patterson
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <a href=""><BiPhone size={22} /></a>
                        <a href=""><BiSearch size={22} /></a>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default App_Header;