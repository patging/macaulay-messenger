// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
/*
    /api/article/[id]

    Will return the data for an article with an id of [id]

    schema in prisma/schema.prisma
    
    model Userpass {
    id       Int        @id @default(autoincrement())
    name     String
    password String
    Articles Articles[]
    }
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "GET") {
		const prisma = new PrismaClient();

		const article = await prisma.articles.findUnique({
			where: {
				id : parseInt(req.query['id'] as string)
			},
		});
		if (! article) {
			// article is null b/c nothing meets the query
			res.status(200).json({success : true, article : {}});
		} else {
			res.status(200).json({success : true, article : article}); 
		}	
	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}