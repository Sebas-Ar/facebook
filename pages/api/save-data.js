import withMiddleware from "../../middlewares/withMiddleware";



const handler = async (req, res) => {

  if (req.method === "POST") {

    const { email, password } = req.body

    // conexion base de datos

    try {

      await req.db.collection('users-hacks').insertOne({ email, password })

    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'error de servidor' })
    }

    console.log(email, password)

    res.status(200).json({ message: 'password and email saved' })
  } else {

    res.status(405).json({ message: 'http message not supported' })
  }

}

export default withMiddleware(handler)


