import type { Request, Response } from "express";

export const sayHi = (req: Request,res:Response)=>{
  console.log("say hi worked amal")
}

export const userData = (req:Request,res:Response)=>{
  console.log("user controller user data is worked")
  console.log(req.body)
  res.status(200).json({
    message: "user data successfully worked amal",
    data: req.body
  })
}