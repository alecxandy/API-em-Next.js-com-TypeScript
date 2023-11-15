// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    try {

        switch (method) {
            case 'GET':
                res.status(200).json([
                    { id: 1, name: 'alexandre', method },
                    { id: 2, name: 'Yasmim', method },
                    { id: 3, name: 'Amanda', method }
                ])
                break;
            case 'POST':
                res.status(200).json([
                    { id: 1, name: 'alexandre', method },
                    { id: 2, name: 'Yasmim', method },
                    { id: 3, name: 'Amanda', method }
                ])
                break;
            case 'PUT':
                res.status(200).json([
                    { id: 1, name: 'alexandre', method },
                    { id: 2, name: 'Yasmim', method },
                    { id: 3, name: 'Amanda', method }
                ])
                break;
            case 'DELETE':
                res.status(200).json([
                    { id: 1, name: 'alexandre', method },
                    { id: 2, name: 'Yasmim', method },
                    { id: 3, name: 'Amanda', method }
                ])
                break;
            default:
                res.status(405).end(`ERROR 405`)
        }

    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }

}


