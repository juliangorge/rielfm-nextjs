import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next'
import { getLluvias } from '../../../config/db';

function isNumeric(str: any) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const ciudad_id = req.query.slug,
        start = req.query.start,
        end = req.query.end;

    if(!isNumeric(ciudad_id) || !moment(start).isValid() || !moment(end).isValid()){
        return res.status(403).json({ message: 'Forbidden' })
    }

    try {
        const data = await getLluvias({ciudad_id, start, end})
        return res.json(data)
    } catch (err) {
        return res.status(500).send('Error')
    }
}