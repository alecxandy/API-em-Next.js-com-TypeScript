// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    try {

        switch (method) {

            case 'GET':
                const allUser = await prisma.user.findMany();
                res.status(200).json({ data: allUser })
                break;

            case 'POST':
                const user = await prisma.user.create({
                    data: req.body,
                })
                res.status(201).json({user})
                break;
                
            default:
                res.status(405).end(`ERROR 405`)
        }

    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }

}


