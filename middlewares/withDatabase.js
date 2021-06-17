import { MongoClient } from "mongodb";
/* import dotenv from "dotenv";
dotenv.config() */

/* const { RED_BUCAL_MONGODB_HOTS, RED_BUCAL_MONGODB_DATABASE } = process.env
//  const MONGODB_URI = `mongodb://${RED_BUCAL_MONGODB_HOTS}/${RED_BUCAL_MONGODB_DATABASE}`*/

const client = new MongoClient('mongodb+srv://sebas:1234@cluster0.z513b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const withDatabase = handler => (req, res) => {
    try {
        if (!client.isConnected()) {
            return client.connect().then(() => {
                req.db = client.db('facebook')
                return handler(req, res)
            })
        }
        req.db = client.db('facebook')
        return handler(req, res)
    } catch (error) {
        console.error(error)
    }
}

export default withDatabase