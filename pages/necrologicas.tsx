import NecrologicasComponent from '../components/Necrologicas'
import { getNecrologicas } from '../config/db'

export default function Section ({ items, itemsLength } : any ) {

	return (
		<NecrologicasComponent params={{
			items,
			itemsLength
		}} />
  	)
}

export async function getStaticProps () {
  try {

    const results = await getNecrologicas()

    return {
      props: {
        items: results.items,
        itemsLength: results.length
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