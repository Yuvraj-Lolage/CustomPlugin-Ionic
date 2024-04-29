const { RequestModel } = require('../models/ewaste-request-model')
const handleCreateRequest = async (req, res) => {
    try {
        const { name, email, phoneNo, organization, typeOfWaste, quantity,address, date, collectionAddress, userId, status} = req.body;
        const { filename } = req.file;

        await RequestModel.create({
            name:name,
            email:email,
            phoneNo:phoneNo, 
            organizationName:organization, 
            typeOfEwaste:typeOfWaste, 
            quantity:quantity, 
            address:address, 
            imageUrl:filename,
            collectionDate:date, 
            collectionAddress:collectionAddress,
            generatedBy:userId,
            currentOwener:userId,
            status:status

        })
        return res.sendStatus(201);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}



module.exports = {
    handleCreateRequest
 }