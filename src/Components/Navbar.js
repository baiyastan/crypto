import '../Styles/components/Navbar.scss'
import Group from '../assets/MaskGroup.png'
import GroupPhone from '../assets/MaskPhone.png'
import React, { useEffect, useState } from 'react'
import logo from '../assets/imageLogo.png'
import MaskMobileLogo from '../assets/MaskMobileLogo.png'

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      let width = window?.outerWidth
      
      return {
        width,
      }
    }
  }

function Navbar() {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
      )
        
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions())
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])
    
      if (active && windowDimensions.width > 600) {
        setActive(false)
      }
      const openMenu = () => {
        setOpen(true)
      }
      const closeMenu = () => {
        setOpen(false)
      }
    return (
      <>
        <div className="navbar">
            <div className="navbar__bg">
                <div className="navbar__bg__logo">
                    <img src={logo} />
                </div>
                <div className="navbar__bg__right">                
                    <ul className="navbar__bg__right__menu">
                        <li className="navbar__bg__right__menu__li">home</li>
                        <li className="navbar__bg__right__menu__li">resources</li>
                        <li className="navbar__bg__right__menu__li">team</li>
                        <li className="navbar__bg__right__menu__li">features</li>
                        <li className="navbar__bg__right__menu__li">community</li>
                    </ul>
                    <div className="navbar__bg__right__btn">contuct us</div>
                    {open ? null : 
                    <div onClick={openMenu} className="buger-menu">
                      <div className="menu-item linear"> </div>
                      <div className="menu-item linear-tall"> </div>
                      <div className="menu-item linear"> </div>
                    </div> }
                    
                </div>
                <div className="left">
                  <h1 className="left-title">Secure and Anonymous Cryptocurrency </h1>
                  <div className="line"></div>
                  <p className="left-des">Lymcoin is a decentralized, hybrid blockhain that is fully open-source. </p>
                  <div className="left-bottoms">
                    <div className="left-btn-y">contuct us</div>
                    <div className="left-btn-w">contuct us</div>
                  </div>
                </div>
                {open &&<div className="top-mobile">

                   <div className="mobile">
                    <div className="MaskMobileLogo">

                      <img  src={MaskMobileLogo} />
                      <div onClick={closeMenu} className="right-x">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-gray"
                      >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                      </svg>
                      </div>
                      <ul className="mobile-ul"> 
                        <li className="mobile-item">home</li>
                        <li className="mobile-item">resources</li>
                        <li className="mobile-item">team</li>
                        <li className="mobile-item">features</li>
                        <li className="mobile-item">community</li>
                        <li className="mobile-item">downloads</li>
                      </ul>
                      <div className="mobile-btn">contuct us</div>
                      <ul className="mobile-logos">
                        <li className="">
                          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.5" filter="url(#filter0_d_637_5)">
                          <rect x="2.44" y="1" width="33.12" height="33.12" rx="16.56" fill="black"/>
                          </g>
                          <g clip-path="url(#clip0_637_5)">
                          <path d="M27.1386 14.4334C27.0465 13.3311 26.3892 11.941 25.0385 11.8913C21.2667 11.6377 16.7984 11.5684 12.9583 11.8913C11.767 12.0248 10.9503 13.476 10.8613 14.5783C10.673 16.8937 10.673 18.2113 10.8613 20.5268C10.9514 21.6291 11.7473 23.0885 12.9604 23.2417C16.846 23.4953 21.2926 23.5315 25.0406 23.2417C26.2164 23.0378 27.0496 21.6291 27.1397 20.5268C27.327 18.2103 27.327 16.7488 27.1386 14.4334ZM16.9288 20.4895V14.5534L22.1041 17.522L16.9288 20.4895Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_637_5" x="0.440002" y="0" width="37.12" height="37.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_5"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_5" result="shape"/>
                          </filter>
                          <clipPath id="clip0_637_5">
                          <rect width="16.56" height="16.56" fill="white" transform="translate(10.72 9.28)"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </li>
                        <li><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.5" filter="url(#filter0_d_637_9)">
                          <rect x="2.15999" y="1" width="33.12" height="33.12" rx="16.56" fill="black"/>
                          </g>
                          <g clip-path="url(#clip0_637_9)">
                          <path d="M26.2124 18.6266C26.259 18.2903 26.2848 17.9477 26.2848 17.5999C26.2848 13.4227 22.8786 10.0351 18.6786 10.0351C18.2615 10.0351 17.8517 10.0693 17.4542 10.1345C16.74 9.66871 15.8903 9.39858 14.9764 9.39858C12.4696 9.39862 10.44 11.4313 10.44 13.9371C10.44 14.8489 10.7081 15.6966 11.1707 16.4076C11.1086 16.7968 11.0765 17.1942 11.0765 17.5999C11.0765 21.7782 14.4796 25.1647 18.6797 25.1647C19.1537 25.1647 19.6153 25.1182 20.0635 25.0374C20.76 25.4701 21.5828 25.7216 22.4616 25.7216C24.9694 25.7216 27.0001 23.6899 27.0001 21.1831C27.001 20.2361 26.7123 19.3543 26.2124 18.6266ZM19.3917 23.1745C16.975 23.3007 15.8448 22.7646 14.8087 21.7938C13.6516 20.708 14.1163 19.4702 15.0592 19.4071C16.0011 19.3439 16.5662 20.4741 17.0692 20.7888C17.5712 21.1024 19.4818 21.8165 20.4909 20.6625C21.5901 19.407 19.7602 18.7571 18.4188 18.5604C16.5041 18.2779 14.0863 17.2418 14.2747 15.1998C14.4631 13.1608 16.0073 12.1134 17.6333 11.9664C19.7054 11.7781 21.055 12.28 22.1221 13.1909C23.3558 14.2434 22.6882 15.4192 21.9026 15.5134C21.1181 15.6076 20.2404 13.7829 18.513 13.756C16.7328 13.728 15.5302 15.6086 17.7275 16.1427C19.9258 16.6767 22.2783 16.8962 23.1281 18.9051C23.9768 20.914 21.8095 23.0482 19.3917 23.1745Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_637_9" x="0.159988" y="0" width="37.12" height="37.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_9"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_9" result="shape"/>
                          </filter>
                          <clipPath id="clip0_637_9">
                          <rect width="16.56" height="16.56" fill="white" transform="translate(10.44 9.28)"/>
                          </clipPath>
                          </defs>
                          </svg></li>
                        <li>
                          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.5" filter="url(#filter0_d_637_29)">
                          <rect x="2.87999" y="1" width="33.12" height="33.12" rx="16.56" fill="black"/>
                          </g>
                          <g clip-path="url(#clip0_637_29)">
                          <path d="M25.8051 13.8846C25.3528 10.612 22.0915 8.94564 18.6119 9.33582C15.8608 9.64425 13.1181 11.8685 13.0042 15.049C12.9349 16.9907 13.4855 18.4469 15.333 18.8568C16.133 17.4409 15.0753 17.1314 14.9097 16.1057C14.2317 11.914 19.7452 9.05119 22.6328 11.9803C24.6325 14.0089 23.3149 20.2457 20.094 19.5968C17.0086 18.9779 21.6051 14.013 19.1428 13.0391C17.1411 12.2463 16.0782 15.461 17.0273 17.059C16.4704 19.807 15.2719 22.3944 15.7573 25.8399C17.3305 24.6973 17.8615 22.5124 18.2962 20.2323C19.0869 20.7136 19.5102 21.2114 20.5183 21.2891C24.2361 21.5778 26.3153 17.5775 25.8051 13.8846Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_637_29" x="0.87999" y="0" width="37.12" height="37.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_29"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_29" result="shape"/>
                          </filter>
                          <clipPath id="clip0_637_29">
                          <rect width="16.56" height="16.56" fill="white" transform="translate(11.16 9.28)"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </li>
                        <li>
                          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.5" filter="url(#filter0_d_637_22)">
                          <rect x="2.72" y="1" width="33.12" height="33.12" rx="16.56" fill="black"/>
                          </g>
                          <g clip-path="url(#clip0_637_22)">
                          <path d="M20.3098 14.7055L20.314 13.2772C20.314 12.533 20.3657 12.1345 21.4318 12.1345H23.4045V9.28H20.5779C17.8351 9.28 17.2038 10.6969 17.2038 13.0246L17.2069 14.7055L15.1255 14.7065V17.56H17.2069V25.84H20.3109L20.3129 17.56L23.1312 17.5589L23.4345 14.7055H20.3098Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_637_22" x="0.720001" y="0" width="37.12" height="37.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_22"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_22" result="shape"/>
                          </filter>
                          <clipPath id="clip0_637_22">
                          <rect width="16.56" height="16.56" fill="white" transform="translate(11 9.28)"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </li>
                        <li>
                          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.5" filter="url(#filter0_d_637_16)">
                          <rect x="2" y="1" width="33.12" height="33.12" rx="16.56" fill="black"/>
                          </g>
                          <g clip-path="url(#clip0_637_16)">
                          <path d="M26.84 12.4256C26.2305 12.6957 25.5765 12.8788 24.8894 12.9606C25.591 12.5404 26.1281 11.874 26.3826 11.0824C25.7245 11.4715 24.998 11.754 24.224 11.9072C23.6041 11.2459 22.7225 10.8341 21.7446 10.8341C19.8685 10.8341 18.3473 12.3552 18.3473 14.2303C18.3473 14.4962 18.3773 14.756 18.4353 15.0043C15.6123 14.8626 13.1092 13.5101 11.4338 11.4549C11.141 11.9558 10.9744 12.5394 10.9744 13.1624C10.9744 14.341 11.5746 15.381 12.4852 15.9894C11.9285 15.9708 11.4048 15.8177 10.9464 15.5631V15.6055C10.9464 17.2509 12.1178 18.6241 13.6711 18.9366C13.3865 19.0132 13.0864 19.0556 12.776 19.0556C12.5566 19.0556 12.3445 19.0339 12.1365 18.9925C12.569 20.3429 13.8232 21.3249 15.3092 21.3518C14.1471 22.2625 12.6818 22.8037 11.0903 22.8037C10.8161 22.8037 10.546 22.7871 10.28 22.7571C11.7836 23.7226 13.5686 24.2855 15.4872 24.2855C21.7364 24.2855 25.1523 19.1094 25.1523 14.6204L25.1409 14.1806C25.8083 13.7046 26.3857 13.1065 26.84 12.4256Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_d_637_16" x="0" y="0" width="37.12" height="37.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_637_16"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_637_16" result="shape"/>
                          </filter>
                          <clipPath id="clip0_637_16">
                          <rect width="16.56" height="16.56" fill="white" transform="translate(10.28 9.28)"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>}
                <img className="navbar__bg__img" src={Group}/>
                <img className="navbar__bg__phone" src={GroupPhone} />
            </div>
        </div>
        </>
    );
}

export default Navbar;