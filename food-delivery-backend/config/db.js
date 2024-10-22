import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://glenalloy8:Glen077@cluster0.ch8y9.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}