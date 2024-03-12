const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString, {}).then((data) => {
    console.log(`drop card server connected to mongodb atlas`);
}).catch((err) => {
    console.log(`mongodb connection failed error:${err}`);
})