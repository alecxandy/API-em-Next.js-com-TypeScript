import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {

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
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allow`)
    }



  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
