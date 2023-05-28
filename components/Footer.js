import Link from 'next/link'

const Footer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 mx-auto'>
                    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                        <div className='col-md-4 d-flex align-items-center'>
                            <Link href='/' className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
                                <svg className='bi' width='30' height='24'></svg>
                            </Link>
                            <span className='mb-3 mb-md-0 text-muted'>&copy; {new Date().getFullYear()}</span>
                        </div>

                        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                            <li className='ms-3'>
                                <a className='text-muted' href='//facebook.com/FMRiel' target='_blank' rel='noreferrer'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                            </li>
                            <li className='ms-3'>
                                <a className='text-muted' href='//twitter.com/rielfm' target='_blank' rel='noreferrer'>
                                    <i className='bi bi-twitter'></i>
                                </a>
                            </li>
                            <li className='ms-3'>
                                <a className='text-muted' href='//instagram.com/fmriel' target='_blank' rel='noreferrer'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                            </li>
                            <li className='ms-3'>
                                <a className='text-muted' href='//youtube.com/rielfm' target='_blank' rel='noreferrer'>
                                    <i className='bi bi-youtube'></i>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer