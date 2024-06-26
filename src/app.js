import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) // this line through we are getting cookie from response



// routes import

import userRouter from "./routes/user.routes.js";
import userVideo from "./routes/video.routes.js"
import userComment from "./routes/comment.routes.js"
import userLike from "./routes/like.routes.js"
import userPlaylist from "./routes/playlist.routes.js"
import userTweet from "./routes/tweet.routes.js"
import userSubscribe from "./routes/subscription.routes.js"
import userDashboard from "./routes/dashboard.routes.js"
import userHealthCheck from "./routes/healthCheck.routes.js"

// routes declaration
app.use("/api/v1/users" , userRouter) // http:localhost:8000/api/v1/users/register
app.use("/api/v1/video" , userVideo)
app.use("/api/v1/comment" , userComment)
app.use("/api/v1/like" , userLike)
app.use("/api/v1/playlist" , userPlaylist)
app.use("/api/v1/tweet" , userTweet)
app.use("/api/v1/subscribe" , userSubscribe)
app.use("/api/v1/dashboard" , userDashboard)
app.use("/api/v1/healthCheck" , userHealthCheck)

export {app}