import React from 'react'
import logo_dark from "../assets/logo-dark.svg"
import { Link } from 'react-router-dom'

const TermsOfUse = () => {
  return (
    <div>

        {/* Terms Of Use Header */}
        <div className='fixed w-full top-0 left-0 gradient-bg-light backdrop-blur-xl py-3 md:py-4 section-padding'>
            <Link to="/">
            <img className="w-14 sm:w-16 md:w-20 cursor-pointer" src={logo_dark} alt="edai" /></Link>
        </div>

        <div className='section-padding text-black mt-6 md:mt-20 py-14 terms-of-use'>
            <h2 className='text-xl md:text-2xl font-extrabold uppercase'>
            KÄYTTÖEHDOT - EDAI
            </h2>

            <p className='my-2 md:my-4 text-sm sm:text-base'>
            Viimeksi päivitetty: 05 / 03 / 2025 <br />
            <br />Nämä käyttöehdot muodostavat sitovan sopimuksen käyttäjän ja EDAI ("Palveluntarjoaja") välillä. Käyttämällä palvelua hyväksyt nämä ehdot ja sitoudut noudattamaan niitä. Jos et hyväksy ehtoja, älä käytä palvelua.
            </p>

            <h3>1. MÄÄRITELMÄT</h3>
            <ul>
              <li>Palvelu viittaa verkkosivustoon, sovellukseen ja kaikkeen oppimateriaaliin, jonka Palveluntarjoaja tarjoaa.</li>
              <li>Käyttäjä on kuka tahansa, joka käyttää Palvelua.</li>
              <li>Sopimus tarkoittaa näitä käyttöehtoja sekä mahdollisia erillisiä lisäsopimuksia tai -ehtoja.</li>
            </ul>

            <h3>2. PALVELUN KÄYTTÖ </h3>
            <ul>
              <li>Palvelu on tarkoitettu vain henkilökohtaiseen ja ei-kaupalliseen käyttöön.</li>
              <li>Käyttäjä sitoutuu käyttämään Palvelua lakien ja hyvien tapojen mukaisesti.</li>
              <li>Palvelun käyttöön voi liittyä maksullisia osia, joiden käyttö edellyttää maksun suorittamista.</li>
              <li>Palveluntarjoaja voi muuttaa Palvelun sisältöä, hinnoittelua ja toimintaa ilman ennakkoilmoitusta.</li>
            </ul>

            <h3>3. KÄYTTÄJÄN VELVOLLISUUDET</h3>
            <p>Käyttäjä sitoutuu:</p>
            <ul>
              <li>Olemaan jakamatta, kopioimatta tai levittämättä Palvelun materiaaleja ilman lupaa.</li>
              <li>Olemaan häiritsemättä palvelun toimintaa, hakkeroimatta sitä tai yrittämättä kiertää sen turvajärjestelmiä.</li>
              <li>Varmistamaan, että hänen antamansa tiedot ovat oikeita ja ajantasaisia.</li>
            </ul>

            <h3>4. IMMATERIAALIOIKEUDET</h3>
            <ul>
              <li>Kaikki Palvelun sisältö, mukaan lukien tekstit, kuvat, videot, ohjelmistot ja muut materiaalit, ovat Palveluntarjoajan tai sen lisenssinantajien omaisuutta.</li>
              <li>Käyttäjä ei saa kopioida, myydä, vuokrata, muokata tai käyttää Palvelun sisältöä ilman kirjallista lupaa.</li>
            </ul>

            <h3>5. VASTUUNRAJOITUS</h3>
            <ul>
              <li>Palvelu tarjotaan "sellaisena kuin se on", ilman takuuta toimivuudesta, tarkkuudesta tai keskeytyksettömästä käytöstä.</li>
              <li>
                Palveluntarjoaja ei ole vastuussa:
                <ul>
                  <li>Mahdollisista teknisistä häiriöistä, tietojen katoamisesta tai palvelukatkoista.</li>
                  <li>Käyttäjän oppimistuloksista tai päätöksistä, jotka perustuvat Palvelun sisältöön.</li>
                  <li>Vahingoista, jotka johtuvat Palvelun käytöstä tai käyttökyvyttömyydestä.</li>
                </ul>
              </li>
              <li>Palveluntarjoajan vastuu rajoittuu enintään siihen summaan, jonka käyttäjä on maksanut Palvelusta viimeisen 12 kuukauden aikana.</li>
            </ul>
            <span>Huomio: Vaikka pyrimme rajoittamaan vastuutamme näiden ehtojen mukaisesti, Suomen lainsäädäntö saattaa asettaa rajoituksia sille, kuinka paljon voimme rajoittaa vastuutamme. Mikäli jokin näistä vastuuvapauslausekkeista todetaan lainvastaiseksi tai pätemättömäksi, se ei vaikuta muiden ehtojen voimassaoloon.</span>
            
            <h3> 6. MAKSUT, PERUUTUS JA HYVITYKSET</h3>
            <ul>
              <li>Palvelun hinnat ilmoitetaan erikseen verkkosivustolla tai sovelluksessa.</li>
              <li>Maksettuja maksuja ei palauteta, ellei kyseessä ole pakottava lainsäädäntö (esim. kuluttajansuojalaki).</li>
              <li>Käyttäjällä on oikeus peruuttaa tilaus sovellettavan lainsäädännön mukaisesti.</li>
            </ul>

            <h3>7. TIETOSUOJA JA TIETOJEN KÄSITTELY</h3>
            <ul>
              <li>Käyttäjän henkilötietoja käsitellään tietosuojaselosteen mukaisesti.</li>
              <li>Palvelu ei kerää henkilökohtaisia tietoja ilman käyttäjän suostumusta.</li>
              <li>Käyttäjän tulee varmistaa, että hän ei jaa arkaluontoisia tietoja palvelussa.</li>
            </ul>

            <h3>8. SOPIMUKSEN PÄÄTTÄMINEN</h3>
            <ul>
              <li>Palveluntarjoaja voi estää käyttäjän pääsyn Palveluun, jos ehtoja rikotaan.</li>
              <li>Palveluntarjoaja voi lopettaa Palvelun tarjoamisen kokonaan tai osittain ilman erillistä ilmoitusta.</li>
            </ul>

            <h3>9. RIITA-ASIAT JA SOVELLETTAVA LAKI</h3>
            <ul>
              <li>Näihin käyttöehtoihin sovelletaan Suomen lakia.</li>
              <li>Riitatilanteet pyritään ensisijaisesti ratkaisemaan neuvottelemalla.</li>
              <li>Mikäli sopua ei synny, riita käsitellään käyttäjän kotipaikan yleisessä tuomioistuimessa.</li>
            </ul>

            <h3>10. MUUTOKSET KÄYTTÖEHTOIHIN</h3>
            <ul>
              <li>Palveluntarjoaja voi päivittää käyttöehtoja tarvittaessa.</li>
              <li>Muutokset tulevat voimaan heti niiden julkaisemisen jälkeen.</li>
            </ul>

            <h3>11. YHTEYSTIEDOT</h3>
            <p>Jos sinulla on kysyttävää, ota yhteyttä: Sähköposti: [sähköposti@example.com] Puhelin: [puhelinnumero]</p>

        </div>

            <div className='gradient-bg-light'>
              <div className='h-[20vh] md:h-[30vh] container section-padding py-5 sm:py-8 flex flex-col justify-between'>
                  <div>
                      <img className='w-14 sm:w-16' src={logo_dark} alt="EDAI" />
                  </div>
            </div>
            </div>


    </div>
  )
}

export default TermsOfUse