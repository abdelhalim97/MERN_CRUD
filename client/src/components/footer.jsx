import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
    <>
        <div className='flex justify-between bg-base items-center' style={{ height:'6vh' }}>
            <div className="text-center ml-3">
                <a className="rounded-full no-underline hover:bg-third" href="https://www.facebook.com/EcolePolytechniqueSousse">
                    <FontAwesomeIcon icon={faFacebook} className="bg-base text-third hover:bg-third hover:text-base text-xl rounded-full px-1"/>
                </a>
                <a className="rounded-full no-underline hover:bg-third" href="https://www.youtube.com/channel/UCJTvyonYu0jhxk2Knr1CYIg/videos">
                    <FontAwesomeIcon icon={faYoutube} className="bg-base text-third hover:bg-third hover:text-base text-xl rounded-full px-1"/>
                </a>
                <a className="rounded-full no-underline hover:bg-third" href="https://twitter.com/PolytecSousse">
                    <FontAwesomeIcon icon={faTwitter} className="bg-base text-third hover:bg-third hover:text-base text-xl rounded-full px-1"/>
                </a>
            </div>
            <div className="text-third text-md text-center font-bold">Made by Sportify Team</div>
            <a href="/"><img className="w-14 mr-4" resize="cover" alt='polytechniqueLogo' src="https://www.polytecsousse.tn/wp-content/uploads/2020/09/logo-polytechnique-blanc.png"/></a>
        </div>
    </>
  )
}
