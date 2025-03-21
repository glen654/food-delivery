import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item

const addFood = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// Get all foods
const getFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// Delete Foods
const deleteFood = async (req,res) => {
    try {
        const foodItem = await foodModel.findById(req.body.id);// find the food model using the id
        fs.unlink(`uploads/${foodItem.image}`,()=>{})// delete the image in the uploads folder

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Deleted"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,getFood,deleteFood}