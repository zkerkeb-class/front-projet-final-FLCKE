import React from 'react'
import LandingNav from '../../components/LandingNav'
import HeroSection from '../../components/HeroSection'
import FeaturesSection from '../../components/FeaturesSection'
import MockupSection from '../../components/MockupSection'
import Footer from '../../components/Footer'
import PopOver from '../../components/popover'
import BtnSecondary from '../../components/ButtonSecondary'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t, i18n }=useTranslation('common')
  return (
    <>
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <MockupSection />
      <PopOver
        btnText={(<i class="fa-solid fa-language"></i>)}
        content={<div className='popover-content'>
          <BtnSecondary text={t("french")} type="button" onClick={() => i18n.changeLanguage('fr')} />
          <BtnSecondary text={t("english")} type="button" onClick={() => i18n.changeLanguage('en')} />

        </div>}

      />
      <Footer />

    </>
  )
}

export default Home