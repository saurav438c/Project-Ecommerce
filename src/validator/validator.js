const bcrypt = require("bcryptjs/dist/bcrypt")
const mongoose = require('mongoose')



const isValid = (value) => {

    if (typeof value === 'undefined' || typeof value === null)  return false 
    if (typeof value === 'string' && value.trim().length == 0)  return false

    return true
}

const isValidRequestBody = (body) => {
    return (Object.keys(body).length > 0)

}

const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

const isValidPincode = (pincode) => {
    return /^[1-9][0-9]{5}$/.test(pincode);
}

const isValidPhone = (phone) => {
    return (/^[6-9]\d{9}$/.test(phone))
}

const hashedPassword = async (password) => {
    let p1 = await bcrypt.hash(password, 10)
    return p1
}

const isValidImage = (image) => {
    if (/.*\.(jpeg|jpg|png)$/.test(image.originalname)) {
        return true
    }
    return false
}

const isvalidPass = (password) => {
    if (password.length > 15 || password.length < 8) { return false }
    return true

}
const isValidSize = (Arr) => {
    console.log(typeof Arr)
    let newArr = []
    if (!Arr.length > 0)
        return false

    for (let i = 0; i < Arr.length; i++) {
        if (!["S", "XS", "M", "X", "L", "XXL", "XL"].includes(Arr[i].toUpperCase())) {
            return false
        }
        newArr.push(Arr[i].toUpperCase())
    }
    return newArr
}
const isValidObjectId = (ObjectId) => {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}


const isValidCharacters = (value) => {
    return /^[A-Za-z]+$/.test(value)
}

const isValidNumber = function (value) {
    return (!isNaN(value) && value > 0)
}

const isValidBoolean = function (value) {
     if(value == "true" || value == "false") return true;
     return false;

}

const isValidSizes = function (arr) {
    if(!arr.length > 0) return false;

    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(!["S", "XS", "M", "X", "L", "XXL", "XL"].includes(arr[i].toUpperCase())) return false;
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

module.exports = {
    
    isValid,
    isValidEmail,
    isValidPincode,
    isValidRequestBody,
    isValidPhone,
    hashedPassword,
    isValidImage,
    isvalidPass,
    isValidCharacters,
    isValidSize,
    isValidNumber,
    isValidObjectId,
    isValidBoolean,
    isValidSizes
}