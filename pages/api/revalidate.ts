import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.query.secret == undefined) {
        return res.status(403).json({ message: 'Forbidden' })
    }

    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    try {
        if(req.query.path == undefined){
            await res.revalidate('/')
        }else{

            switch(req.query.path){
                case 'noticia':
                    await res.revalidate('/' + req.query.action + '/' + req.query.slug)
                    await res.revalidate('/noticia/' + req.query.id)
                    break
                case 'action':
                    await res.revalidate('/' + req.query.action)
                    break
                default:
                    await res.revalidate('/' + req.query.path)
            }

            await res.revalidate('/' + req.query.path)
        }
        return res.json({ revalidated: true })
    } catch (err) {
        return res.status(500).send('Error revalidating')
    }

}