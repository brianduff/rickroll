import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
const port = 3000;

type HandlerMethod = "get" | "post";

type Handlers = {
  [method in HandlerMethod]?: (req: Request, res: Response) => Promise<void>
}

const root: Handlers = {
  get: async (_, res) => {
    res.send("HELO")
  }
}

const students: Handlers = {
  get: async (_, res) => {
    res.send([{
      name: "Caitlin",
      imageUrl: "https://storage.googleapis.com/discobubble-quiz/IMG_2071.jpg",
    },
    {
      name: "Michael",
      imageUrl: "https://storage.googleapis.com/discobubble-quiz/IMG_2071.jpg",
    }
    ])
  }
}

app.get("/", root.get!);
app.get("/students", students.get!);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})