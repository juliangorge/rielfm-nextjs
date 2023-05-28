import Image from 'next/image'

export function setUrl (item) {
    var result = replaceForDash(item.title)
    return ('/' + item.section.replaceAll(' ', '-') + '/' + encodeURIComponent(result) + '_' + item.id).toLowerCase()
}

export function showImage (image, priority=false) {
    if(image == null || image == '') return
    return (
        <figure>

            <img src={'https://rielfm.com.ar/files/images/' + image} alt='' className='img-fluid no-draggable' 
                width='0'
                height='0'
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
             />
        </figure>
    )
}

export function showFarmacia (farmacia) {
    if(farmacia == null) return (
        <p className='list-group-item'>Sin información</p>
    )

    if(farmacia.name == 'Patagonia'){
        return (
            <div className='list-group-item text-center py-3'>
                <p className='m-0'>
                    <b className='h5'>Farmacia {farmacia.name}</b>
                    <br />
                    <span>{farmacia.address} {farmacia.phone}</span>
                </p>
            </div>
        );
    }

    return (
        <div className='list-group-item text-center py-3'>
            <Image src={'/img/farmacias/' + (farmacia.name).toLowerCase() + '.png'} alt='' className='no-draggable mb-2'
                width='0'
                height='0'
                sizes='100vw'
                style={{ width: 'auto', height: '75px' }}
            />
            <p className='m-0'>
                <b className='h5'>Farmacia {farmacia.name}</b>
                <br />
                <span>{farmacia.address} {farmacia.phone}</span>
            </p>
        </div>
    );
}

export function withoutInfo () {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center my-5'>
                    <p>Información no disponible.</p>
                </div>
            </div>
        </div>
    )
}

export function replaceForDash (string) {
    return string.replace(/[^a-zA-ZÀ-ÿ0-9 \._-]/g, '').replaceAll(' ', '-')
}

export function showAd (image, url = '') {
    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <Image src={image} alt='' className='img-fluid no-draggable mb-3' 
            width='0'
            height='0'
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            />
        </a>
    )
}