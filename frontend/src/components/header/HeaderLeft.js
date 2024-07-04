import { MdMenu } from 'react-icons/md';
import HeaderIcon from './HeaderIcon';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'


export default function HeaderLeft({ SetWidth, width }) {
 const [showTooltip, setShowTolltip] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  if (!isDesktopOrLaptop) {
    SetWidth("60px");
  }
  const handleSideMenu = () => {
    if (width === "60px") {
      SetWidth("290px");
    } else {
      SetWidth("60px");
    }
  }

  return (
    <div className="leftPart md:w-2/12 w-6/12 flex">
      <div className="menuBtn" onClick={handleSideMenu}  >
        <HeaderIcon
          id={"menuBtn"}
          text={"Menu"}
          showTooltip={showTooltip}
          icon={<MdMenu
            onMouseOver={() => setShowTolltip(true)} onMouseOut={() => setShowTolltip(!showTooltip)} className='scale-150 text-[#576574]' />}
        />
      </div>
      <div className="logo flex items-center cursor-pointer">
        <img className='w-[45px] h-[45px]' src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
        <div className="logo_txt font-main text-xl font-semibold text-[#576574] ml-2">
          Keep
        </div>
      </div>
    </div>
  )
}
