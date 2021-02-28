"use strict";
const { responseFormat } = require("../../helpers/response");
const { handleError } = require('../../helpers/error');
const mongoClient = require("mongodb").MongoClient;

module.exports.find = async (req, res) => {
  try {
    const url = `mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`;
    const option = { useUnifiedTopology: true, useNewUrlParser: true };
    const dbName = 'getir-case-study';
    const client = await mongoClient.connect(url, option);
    const db = client.db(dbName);

    const records = await db.collection('records').aggregate(filters(req)).toArray();
    responseFormat(records, res);
    if (client) {
      client.close();
    }
  } catch (error) {
    handleError(error, res)
    process.exit(1);
  }
};

const filters = req => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  return [
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: { $sum: "$counts" }
      }
    },
    {
      $match: {
        $and: [{
          createdAt: { $gte: new Date(startDate), $lt: new Date(endDate) }
        },
        {
          totalCount: { $gte: minCount, $lt: maxCount }
        }
        ]
      },
    },
  ];
}