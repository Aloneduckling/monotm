import express, { Request, Response } from "express";

const app = express();

app.post('/hdfcbankwebhook', async (req: Request, res: Response) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    res.json(paymentInformation);
});