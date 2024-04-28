

const handleCreateRequest = (req, res) => {
    console.log(req.file);
    console.log("File Name = "+req.body.filename);
    res.send("File Upload Working...")
}



module.exports = {
    handleCreateRequest
 }