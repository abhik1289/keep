import React, { useState, useRef } from 'react';
import { MdSearch, MdClose, MdRefresh, MdOutlineViewAgenda } from 'react-icons/md';
import { FiGrid } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';


import HeaderIcon from './HeaderIcon';
import SettingPopup from './SettingPopup';
import useClickOutside from './../../helpers/ClickOutside';
import ResponsiveSearch from './ResponsiveSearch';

export default function HeaderMiddle() {
    const settingPoupRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showGridView, setShowGridView] = useState(false);
    const [showShadow, SetshowShadow] = useState(false);
    const [showSearch, SetShowSearch] = useState(false);
    const [searchTxt, SetSearchTxt] = useState("")


    useClickOutside(settingPoupRef, () => {
        setShowPopup(false)
    });
    useClickOutside(settingPoupRef, () => {
        SetshowShadow(false)
    });
    const [showTooltip, setShowTolltip] = useState(false);

    return (
        <div className="middlePart md:w-9/12 w-3/12 md:flex md:justify-between justify-end " ref={settingPoupRef}>
            <div onClick={() => SetshowShadow(true)} className="searchBx md:w-8/12 md:rounded-lg md:flex md:items-center  middle_left_part hidden" style={showShadow ? { boxShadow: "rgb(0 0 0 / 20%) -1px 3px 4px 0px" } : { boxShadow: "none" }} >
                <HeaderIcon
                    icon={<MdSearch className='scale-150 text-[#576574]' />}
                />
                <div className="searhTxtBX w-full">
                    <input value={searchTxt} onChange={(e) => SetSearchTxt(e.target.value)} type="text" className='w-full relative outline-none font-main' placeholder='Search' />
                </div>
                <HeaderIcon
                    icon={<MdClose onClick={() => SetSearchTxt("")} className='scale-150 text-[#576574]' />}
                />
            </div>

            <div className="middle_right_part flex">

                <HeaderIcon

                    hidden
                    icon={<MdSearch onClick={() => SetShowSearch(true)} className='scale-150 text-[#576574]' />}
                    bottom={<ResponsiveSearch showSearch={showSearch} SetShowSearch={SetShowSearch} />}
                />

                <HeaderIcon
                    icon={<MdRefresh className='scale-150 text-[#576574]' />}
                />
                <div className="viewContrller md:block hidden" onClick={() => setShowGridView(!showGridView)}>
                    <HeaderIcon

                        icon={showGridView ? <FiGrid className='scale-150 text-[#576574]' /> : <MdOutlineViewAgenda className='scale-150 text-[#576574]' />}
                    />
                </div>
                <div className="settingContrllerBtn" onClick={() => setShowPopup(!showPopup)}>
                    <HeaderIcon
                        text={"Settings"}
        showTooltip={showTooltip}

                        icon={<IoSettingsOutline onMouseOver={() => setShowTolltip(true)} onMouseOut={() => setShowTolltip(!showTooltip)} className='scale-150 text-[#576574]' />}
                        bottom={<SettingPopup showPopup={showPopup} />}
                    />
                </div>
            </div>
        </div>
    )
}
