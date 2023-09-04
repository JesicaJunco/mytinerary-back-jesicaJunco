import express from "express";
import cityRouter from "./city.router.js";
import userRouter from "./user.router.js";
import itinerariesRouter from "./itineraries.router.js "
import activitiesRouter from "./activities.router.js"


const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
});
router.use('/cities', cityRouter);
router.use('/users', userRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/activities', activitiesRouter);


export default router