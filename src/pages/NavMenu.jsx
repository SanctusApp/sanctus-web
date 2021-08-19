import React, {useState, useEffect, useRef} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import cookies from 'js-cookie'

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'pt',
        name: 'Português',
        country_code: 'br'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es'
    }
]

export default function NavMenu() {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(language => language.code === currentLanguageCode)
    const { t } = useTranslation()
    const navDropdownTitle = <span className={`flag-icon flag-icon-${currentLanguage.country_code} mx-2`}></span>
    
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'transparent'}}>
                <Container>
                    <Navbar.Brand href="#home"> <img src="https://res.cloudinary.com/dplgnsjzm/image/upload/v1628852171/sanctus/ico_v2sghi.svg" width="32px" alt="brand-icon"/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* mx-auto (instead of me-auto) centralize these items */}
                        <Nav className="mx-auto"> 
                            <Nav.Link href="#home" className="bold black padding-side">{t('nav_item_home')} </Nav.Link>
                            <Nav.Link href="#about" className="bold black padding-side">{t('nav_item_about')}</Nav.Link>
                            <Nav.Link href="#features" className="bold black padding-side">{t('nav_item_features')}</Nav.Link>
                            <Nav.Link href="#contact" className="bold black padding-side">{t('nav_item_contact')}</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown.Divider/>
                            <div className="d-flex flex-row align-items-center">                       
                                <NavDropdown title={navDropdownTitle} className="black" id="collasible-nav-dropdown" >                        
                                    {
                                        languages.map(({code, name, country_code}) => {
                                           return <NavDropdown.Item key={country_code} onClick ={() => i18n.changeLanguage (code)}><span className={`flag-icon flag-icon-${country_code} mx-2`}></span>{name}</NavDropdown.Item>
                                        })
                                    }
                                </NavDropdown>
                            </div>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
