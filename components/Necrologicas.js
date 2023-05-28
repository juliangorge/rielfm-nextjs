import Link from 'next/link'
import SeoMetaTags from './SeoMetaTags'

import { setUrl, showImage, withoutInfo } from '../helpers'
import moment from 'moment'
import esLocale from 'moment/locale/es'
moment.updateLocale('es', [esLocale])

import SectionAside from './SectionAside'
import ReactPaginate from 'react-paginate'

import React, { useState } from 'react'

export default function Necrologicas({params}) {
    const [itemOffset, setItemOffset] = useState(0)
	const items = params.items,
		  itemsLength = params.itemsLength,
    	  path = 'https://rielfm.com.ar/necrologicas',
		  itemsPerPage = 10,
		  pageCount = Math.ceil(itemsLength / itemsPerPage)

    if(items == null) return withoutInfo()

	const endOffset = itemOffset + itemsPerPage
	const currentItems = items.slice(itemOffset, endOffset)
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		setItemOffset(newOffset)

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	};

	return (
        <>
			<SeoMetaTags params={{
				type: 'section',
				title: 'Necrológicas - FM Riel',
				section: 'Necrológicas',
				description: 'Toda la información sobre Necrológicas',
				path: path,
				image: 'https://rielfm.com.ar/img/og-images/necrologicas.png'
			}} />

			<div className="container mt-3">
				<div className='row'>
					<div className='col-lg-10 mx-auto'>
						<div className='row'>
							<div className='col-lg-8 column'>
								<h1 className='h2 mb-3'>Necrológicas</h1>
								<hr />
								{currentItems.map(function(post, post_id){
									return (
										<article className='article py-2 mb-2' key={post_id}>
											<h2 className='h5'>{post.title} <small>({moment(post.date).format('L')})</small></h2>
											<p dangerouslySetInnerHTML={{ __html: post.details }}></p>
										</article>
									)
								})}
								<hr />
								<ReactPaginate
									previousLabel='‹'
									nextLabel='›'
									onPageChange={handlePageClick}
									pageRangeDisplayed={5}
									pageCount={pageCount}
									renderOnZeroPageCount={null}
									containerClassName='pagination'
									breakClassName='page-item'
									breakLabel='...'
									breakLinkClassName='page-link'
									pageClassName='page-item'
									previousClassName='page-item'
									nextClassName='page-item'
									pageLinkClassName='page-link'
									previousLinkClassName='page-link'
									nextLinkClassName='page-link'
									activeClassName='active'
							
								/>
							</div>
							<div className='col-lg-4'>
								<SectionAside />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}
