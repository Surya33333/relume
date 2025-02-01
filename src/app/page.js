'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>

      <div className="transition-transform duration-500 group">
        <div className="relative font-sans font-medium flex justify-center items-center bg-black text-white h-[36px] text-[.865rem] pl-[12px] pr-[12px] pb-[1px] z-10">
          <div className="w-7 p-1">
            <div className="icon-embed-xxsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
              <path d="M7.99991 9.34224C8.74119 9.34224 9.34211 8.74131 9.34211 8.00004C9.34211 7.25876 8.74119 6.65784 7.99991 6.65784C7.25864 6.65784 6.65771 7.25876 6.65771 8.00004C6.65771 8.74131 7.25864 9.34224 7.99991 9.34224Z" fill="currentColor"></path>
              <path d="M7.9999 10.7499C11.9775 10.7499 15.2019 9.51871 15.2019 7.99999C15.2019 6.48128 11.9775 5.25012 7.9999 5.25012C4.02232 5.25012 0.797852 6.48128 0.797852 7.99999C0.797852 9.51871 4.02232 10.7499 7.9999 10.7499Z" stroke="currentColor" strokeWidth="0.8"></path>
              <path d="M5.61838 9.37497C7.60717 12.8197 10.2856 14.9965 11.6009 14.2372C12.9161 13.4778 12.3701 10.0698 10.3813 6.62509C8.39251 3.18041 5.71406 1.00352 4.39881 1.76288C3.08357 2.52223 3.62959 5.93028 5.61838 9.37497Z" stroke="currentColor" strokeWidth="0.8"></path>
              <path d="M5.61848 6.6251C3.62969 10.0698 3.08367 13.4778 4.39892 14.2372C5.71416 14.9965 8.39261 12.8197 10.3814 9.37497C12.3702 5.93029 12.9162 2.52224 11.601 1.76288C10.2857 1.00353 7.60727 3.18041 5.61848 6.6251Z" stroke="currentColor" strokeWidth="0.8"></path>
            </svg>
            </div>
          </div>
          <div className="p-1 [text-shadow:2px_2px_2px_rgba(0,0,0,0.3)]">Export your site to React</div>
          <div className="p-1"><a className="underline  cursor-pointer">Try it now</a></div>
        </div>

        <div className='absolute cursor-custom inset-[36px] w-[97.5vw] h-[69.5vh] border-l border-r border-b border-[#6248ff] bottom-[900px] left-[10px] hover:border-l-2 hover:border-r-2 hover:border-b-2 hover:bg-purple-100 transition-transform duration-500 group z-99'>

          {/*Navbar Starts*/}
          <div className="relative cursor-pointer grid grid-cols-[0.5fr_1fr_0.5fr] pl-6 pr-8 w-full h-[5rem]">
            <div className="flex justify-start items-center">
              <div className="w-[48px] h-[48px] items-center p-[5px] hover:bg-gray-200 rounded-full transition">
                <img
                  className="relative max-w-[37px] h-auto my-[2px] mx-[1px] z-20"
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65ab316a98b1254dc17f79f1_relume%20logo%20symbol%20with%20shadow.png"
                  alt="Logo Symbol"
                />
              </div>
              <p className="font-sans-senrif font-bold text-[20px] pb-[2px]">Relume</p>
            </div>
            <div className="menu flex justify-center items-center w-[100%] z-20">
              <div className="menu test">Products</div>
              <div className="menu test">Community</div>
              <div className="menu test">Pricing</div>
              <div className="menu test">Learn</div>
              <div className="menu test">Contact Sales</div>
            </div>
            <div className="flex justify-end gap-2 items-center">
              <div className="w-[full] hover:bg-gray-200 px-3 py-3 rounded-[8px]"><a href="#" className='font-bold text-shadow-sm'>Log in</a></div>
              <div className="w-[full] bg-black text-white px-4 py-3 rounded-[8px]"><a href="#">Start for free</a></div>
            </div>
          </div>
          {/*Navbar Ends*/}

          <div className="mb-10 cursor-none">
            <div className="relative flex justify-between pl-12 mr-[20px] pr-6 ">

              <div className="relative main-left flex flex-col w-[200px] gap-y-4 transition-transform duration-500 group-hover:translate-x-8">
                <img className="limg w-full" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65af4a6a6baf2d1aa79d942d_Image%203%20(3)-p-500.webp" />
                <img className="limg relative right-14" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1a04a8ab6b5868d6f_Image%2011.png" />
                <img className="limg" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e82332d3f45a22e364d75_Image%201.webp" />
                <img className="absolute w-[80px] left-[177px] top-[260px] z-50 transition-transform duration-500 group-hover:translate-y-8 group-hover:translate-x-16" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65949937d9baec1f85575645_cursor-jessica-yellow_3x.png" />
              </div>

              <div className="main-right flex flex-col  w-[200px] gap-y-4 transition-transform duration-500 group-hover:-translate-x-8">
                <img className="rimg" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/66d6c3c1d03db2b8ae8b2926_Image%207.png" />
                <img className="rimg relative left-14" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e839495208ba1f0d1329b_Image%204.webp" />
                <img className="rimg" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/658e823332cb3de9f06c7e10_Image%205.webp" />
                <img className="absolute w-[70px] right-[250px] top-[70px] transition-transform duration-500 group-hover:translate-y-[-30px] group-hover:translate-x-[-20px] z-50" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/659499374a9e7199f028b4f0_cursor-blue-mario_3x.png" />
              </div>
            </div>
          </div>

          <div className="relative main-mid relative bottom-[480px] flex flex-col items-center px-[100px]">
            <div className='flex gap-2 mt-[60px] font-sans rounded-full border-[2px] pl-3 py-1'>
              <div className='relative font-medium p-[1px]'>
                <span>
                  <a className='font-senrif bg-text-gradient bg-clip-text text-transparent'>400k+ </a>
                  <a className='text-[.9rem]'>Designers & Devs build with Relume</a>
                </span>
              </div>
              <div className='relative flex flex-row pr-1 items-center'>
                <img className="w-[18px] h-[18px] object-cover rounded-full" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/64d21513a72598ed2a076211_OxFgbD5t_400x400.webp" />
                <img className="w-[18px] h-[18px] object-cover rounded-full" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/64d214a36708475bee4c71f4_a-aaIkTH_400x400.webp" />
                <img className="w-[18px] h-[18px] object-cover rounded-full" src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/62dfcc4457f10095eb5fd9e9_felix-p-500.webp" />
              </div>
            </div>
            <div className='spc inline block relative px-[100px] text-center mt-9 text-[100px] leading-[7rem] whitespace-no-wrap spFont'>Websites designed & built faster with AI</div>
            <div className='relative max-w-[40rem] text-center mt-4 mb-2 text-[20px] leading-[2rem] whitespace-normal'>Use AI as your design ally, not as a replacement. Effortlessly generate sitemaps and wireframes for marketing websites in minutes.</div>
          </div>

          <div className='absolute bottom-[-6px] right-[-6px] bg-[#6248ff] w-3 h-3'></div>
          <div className='absolute bottom-[-6px] left-[-6px] bg-[#6248ff] w-3 h-3'></div>

          <div className='flex absolute bottom-[-16px] left-[2rem] gap-4'>
            <div className='flex justify-between items-center text-center rounded-lg bg-purple-200 h-[2rem] text-[#6248ff] w-[120px] p-4 text-sm hover:bg-[#6248ff] hover:text-white'>
              <div className=''>
                <svg role="img" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] object-cover'>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.6 2.80005C5.72169 2.80007 5.84006 2.83973 5.9372 2.91302C6.03434 2.98631 6.10496 3.08925 6.13838 3.20625L6.74547 5.33134C6.87618 5.789 7.1214 6.20579 7.45797 6.54235C7.79454 6.8789 8.66902 7.25482 8.66902 7.25482L10.7942 7.86189C10.9111 7.89538 11.014 7.96603 11.0872 8.06316C11.1604 8.16029 11.2 8.27862 11.2 8.40025C11.2 8.52188 11.1604 8.64021 11.0872 8.73734C11.014 8.83447 10.9111 8.90512 10.7942 8.93862L8.66902 9.54568C8.21134 9.67639 7.79454 9.9216 7.45797 10.2582C7.1214 10.5947 6.87618 11.0115 6.74547 11.4692L6.13838 13.5942C6.10489 13.7112 6.03423 13.814 5.9371 13.8872C5.83996 13.9604 5.72164 14 5.6 14C5.47836 14 5.36003 13.9604 5.2629 13.8872C5.16577 13.814 5.09511 13.7112 5.06161 13.5942L4.45453 11.4692C4.32382 11.0115 4.0786 10.5947 3.74203 10.2582C3.40546 9.9216 2.98866 9.67639 2.53098 9.54568L0.405812 8.93862C0.288879 8.90512 0.186031 8.83447 0.112816 8.73734C0.0396011 8.64021 0 8.52188 0 8.40025C0 8.27862 0.0396011 8.16029 0.112816 8.06316C0.186031 7.96603 0.288879 7.89538 0.405812 7.86189L2.53098 7.25482C2.98866 7.12411 3.40546 6.8789 3.74203 6.54235C4.0786 6.20579 4.32382 5.789 4.45453 5.33134L5.06161 3.20625C5.09504 3.08925 5.16566 2.98631 5.2628 2.91302C5.35994 2.83973 5.47831 2.80007 5.6 2.80005Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.2001 0C11.261 1.25443e-05 11.3202 0.0198416 11.3687 0.0564867C11.4173 0.0931318 11.4526 0.144599 11.4693 0.203101L11.7729 1.26565C11.8382 1.49448 11.9608 1.70287 12.1291 1.87115C12.2974 2.03943 12.7347 2.22739 12.7347 2.22739L13.7972 2.53092C13.8557 2.54767 13.9071 2.58299 13.9437 2.63156C13.9803 2.68012 14.0001 2.73928 14.0001 2.8001C14.0001 2.86092 13.9803 2.92008 13.9437 2.96864C13.9071 3.01721 13.8557 3.05254 13.7972 3.06928L12.7347 3.37282C12.5058 3.43817 12.2974 3.56077 12.1291 3.72905C11.9608 3.89733 11.8382 4.10573 11.7729 4.33456L11.4693 5.3971C11.4526 5.45556 11.4173 5.50699 11.3687 5.54359C11.3201 5.5802 11.261 5.6 11.2001 5.6C11.1393 5.6 11.0802 5.5802 11.0316 5.54359C10.983 5.50699 10.9477 5.45556 10.931 5.3971L10.6274 4.33456C10.5621 4.10573 10.4394 3.89733 10.2712 3.72905C10.1029 3.56077 9.89448 3.43817 9.66564 3.37282L8.60305 3.06928C8.54459 3.05254 8.49316 3.01721 8.45655 2.96864C8.41995 2.92008 8.40015 2.86092 8.40015 2.8001C8.40015 2.73928 8.41995 2.68012 8.45655 2.63156C8.49316 2.58299 8.54459 2.54767 8.60305 2.53092L9.66564 2.22739C9.89448 2.16203 10.1029 2.03943 10.2712 1.87115C10.4394 1.70287 10.5621 1.49448 10.6274 1.26565L10.931 0.203101C10.9477 0.144599 10.983 0.0931318 11.0315 0.0564867C11.0801 0.0198416 11.1393 1.25443e-05 11.2001 0Z" fill="currentColor"></path>
                </svg>
              </div>
              <div>
                Shuffle
              </div>
            </div>

            <div className='flex justify-between items-center text-center rounded-full bg-[#f1f0ee] h-[2rem] w-full pr-3 border-[2px] text-[#686868] text-sm hover:bg-white'>
              <div className='flex justify-between items-center text-center mx-auto pt-1'>
                <div>
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] object-cover'>
                    <path d="M11.8664 5.59946C12.3141 5.26369 12.6448 4.79557 12.8117 4.26141C12.9785 3.72724 12.9731 3.15412 12.7961 2.62322C12.6191 2.09232 12.2796 1.63056 11.8256 1.30334C11.3716 0.976127 10.8262 0.800049 10.2666 0.800049H5.46718C4.90756 0.800049 4.36213 0.976127 3.90814 1.30334C3.45415 1.63056 3.11463 2.09232 2.93766 2.62322C2.7607 3.15412 2.75526 3.72724 2.92212 4.26141C3.08898 4.79557 3.41968 5.26369 3.86737 5.59946C3.5284 5.8535 3.25483 6.18464 3.06933 6.56546C2.88382 6.94627 2.79171 7.36581 2.80064 7.78931C2.80957 8.21282 2.91927 8.6281 3.12065 9.00076C3.32204 9.37342 3.60932 9.69274 3.95869 9.93227C3.5613 10.2344 3.2476 10.633 3.04729 11.0902C2.84699 11.5475 2.76671 12.0483 2.81406 12.5453C2.86141 13.0422 3.03481 13.5189 3.31786 13.9301C3.60091 14.3413 3.98423 14.6734 4.43153 14.8951C4.87883 15.1167 5.3753 15.2205 5.87394 15.1967C6.37257 15.1728 6.85687 15.0221 7.28097 14.7588C7.70507 14.4955 8.05494 14.1282 8.29745 13.6919C8.53996 13.2555 8.66709 12.7645 8.66679 12.2653V9.86561C8.94691 10.0757 9.26566 10.2286 9.60486 10.3155C9.94405 10.4024 10.297 10.4216 10.6437 10.3721C10.9903 10.3226 11.3238 10.2053 11.6251 10.0269C11.9264 9.84846 12.1896 9.61246 12.3997 9.33234C12.6098 9.05222 12.7626 8.73347 12.8495 8.39427C12.9364 8.05508 12.9557 7.70209 12.9061 7.35546C12.8566 7.00883 12.7393 6.67535 12.5609 6.37405C12.3825 6.07276 12.1465 5.80955 11.8664 5.59946ZM11.8664 3.46639C11.8664 3.89069 11.6978 4.2976 11.3978 4.59762C11.0978 4.89765 10.6909 5.0662 10.2666 5.0662H8.66679V1.86659H10.2666C10.6909 1.86659 11.0978 2.03514 11.3978 2.33516C11.6978 2.63518 11.8664 3.0421 11.8664 3.46639ZM3.86737 3.46639C3.86737 3.0421 4.03592 2.63518 4.33594 2.33516C4.63597 2.03514 5.04288 1.86659 5.46718 1.86659H7.60025V5.0662H5.46718C5.04288 5.0662 4.63597 4.89765 4.33594 4.59762C4.03592 4.2976 3.86737 3.89069 3.86737 3.46639ZM5.46718 9.33234C5.04288 9.33234 4.63597 9.16379 4.33594 8.86377C4.03592 8.56375 3.86737 8.15683 3.86737 7.73254C3.86737 7.30824 4.03592 6.90133 4.33594 6.6013C4.63597 6.30128 5.04288 6.13273 5.46718 6.13273H7.60025V9.33234H5.46718ZM7.60025 12.2653C7.60025 12.6345 7.49079 12.9953 7.2857 13.3023C7.08061 13.6092 6.78911 13.8484 6.44807 13.9897C6.10702 14.1309 5.73174 14.1679 5.36969 14.0959C5.00763 14.0239 4.67507 13.8461 4.41404 13.5851C4.15301 13.3241 3.97525 12.9915 3.90323 12.6294C3.83122 12.2674 3.86818 11.8921 4.00945 11.5511C4.15071 11.21 4.38994 10.9185 4.69687 10.7134C5.00381 10.5083 5.36466 10.3989 5.73381 10.3989H7.60025V12.2653ZM10.2666 9.33234C9.95018 9.33234 9.64088 9.23852 9.37779 9.06273C9.1147 8.88694 8.90965 8.63708 8.78857 8.34476C8.66748 8.05243 8.6358 7.73076 8.69753 7.42043C8.75926 7.1101 8.91162 6.82504 9.13536 6.6013C9.3591 6.37757 9.64415 6.2252 9.95449 6.16347C10.2648 6.10174 10.5865 6.13342 10.8788 6.25451C11.1711 6.3756 11.421 6.58065 11.5968 6.84373C11.7726 7.10682 11.8664 7.41613 11.8664 7.73254C11.8664 8.15683 11.6978 8.56375 11.3978 8.86377C11.0978 9.16379 10.6909 9.33234 10.2666 9.33234Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div>
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] object-cover'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3L10.8946 12.8415H6.0992L8.23579 8.76279H8.13993C6.37724 11.0191 3.74729 12.5045 0 12.8415V8.81922C0 8.81922 2.39723 8.67961 3.8065 7.21859H0V3.00008H4.27809V6.46975L4.37412 6.46937L6.1223 3.00008H9.3577V6.44775L9.45372 6.4476L11.2675 3H16Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              <div>
                1000+ Components
              </div>
            </div>

          </div>


        </div>
      </div>

    </>
  );
}


