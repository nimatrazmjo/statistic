"use strict";
const request = require("supertest");
const { app } = require('../app');
const url = '/api/statistics';

describe(url, () => {

  it("Should return 422 if there is not any payload data", async () => {
    let response = await request(app)
      .post(url)
      .send({});
    expect(response.status).toBe(422);
  });

  it("Should return 200 if the payload data passed from validation middleware", async () => {
    let response = await request(app)
      .post(url)
      .send(data);
    expect(response.status).toBe(200);
  });

  it("Should return 422 if the endDate is less than startDate", async () => {
    data.endDate = "2015-01-01";
    let response = await request(app)
      .post(url)
      .send(data);
    expect(response.status).toBe(422);
  });


  it("Should return 422 if the maxCount is less than minCount", async () => {
    data.maxCount = 200;
    let response = await request(app)
      .post(url)
      .send(data);
    expect(response.status).toBe(422);
  });

  it("Should return 404 if the route is not found", async () => {
    let response = await request(app)
      .get("/");
    expect(response.status).toBe(404);
  });
});

const data = {
  "startDate": "2016-01-01",
  "endDate": "2017-01-02",
  "minCount": 2700,
  "maxCount": 3000
} 
