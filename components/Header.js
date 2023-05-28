import Link from 'next/link'
import ActiveLink from './ActiveLink'

const Header = () => {
    return (
        <div className='navbar-expand-lg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto'>
                        <header className='py-3'>
                            <div className='row'>
                                <div className='col-8'>
                                    <Link href='/'>
                                        <img src='/img/logo.svg' className='logo' alt='FM Riel' draggable='false' />
                                    </Link>
                                </div>
                                <div className='col-4 d-flex justify-content-end align-items-center'>
                                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
                                        <i className='bi bi-list'></i>
                                    </button>
                                    <Link href='/vivo' className='btn btn-outline-danger btn-sm btn-vivo'>
                                        <i className='bi bi-record-fill'></i> Escuchanos en vivo
                                    </Link>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
            <div className='offcanvas offcanvas-end bg-black' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                <div className='header bg-black'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">FM Riel</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className='offcanvas-body'>
                                    <nav className='nav'>
                                        <ActiveLink activeClassName='active' href='/[action]' as='/ciudad'>
                                            <a className={'py-2 px-4'}>Ciudad</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/[action]' as='/provincia'>
                                            <a className={'py-2 px-4'}>Provincia</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/[action]' as='/pais'>
                                            <a className={'py-2 px-4'}>Pais</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/[action]' as='/mundo'>
                                            <a className={'py-2 px-4'}>Mundo</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/[action]' as='/deportes'>
                                            <a className={'py-2 px-4'}>Deportes</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/institucional'>
                                            <a className={'py-2 px-4'}>Institucional</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName='active' href='/contacto'>
                                            <a className={'py-2 px-4'}>Contacto</a>
                                        </ActiveLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header