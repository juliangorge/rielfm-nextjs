import SectionComponent from '../../components/Section'
import { getSection } from '../../config/db'

export default function Section ({ items, itemsLength, section } : any ) {

	return (
		<SectionComponent params={{
			items,
			itemsLength,
			section
		}} />
  	)
}

export async function getStaticPaths () {
	return {
		paths: [
			{
				params: { action: 'ciudad' }
			},
			{
				params: { action: 'provincia' },
			},
			{
				params: { action: 'pais' },
			},
			{
				params: { action: 'mundo' },
			},
			{
				params: { action: 'deportes' },
			},
		],
		fallback: 'blocking'
	}
}

export async function getStaticProps ({ params } : any ) {
  try {

	const onlyLettersPattern = /^[0-9]+$/;
    if(params.action.match(onlyLettersPattern)){
		return {
			redirect: {
				destination: '/noticia/' + params.action,
				statusCode: 301
			}
		}
	}

	const results = await getSection(params.action)

	return {
		props: {
			items: results.items,
			itemsLength: results.length,
			section: results.section
		},
		revalidate: 14400, // 4 horas
	}
  } catch (error) {
	//console.log(error)
	return {
		redirect: {
			destination: '/',
			statusCode: 307
		}
	}
  }
}