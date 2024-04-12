import express from 'express'
const app = express()
const port = 5000;
app.use(express.static('static'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})
app.get('/sum', (req, res) => {
    let {num1,num2} = req.query;
    if(isNaN(num1) || isNaN(num2) ){
        res.status(400).send("Invalid numbers");
        return;
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let sum = num1 + num2;
    res.json({sum});

})

app.listen(port, () => {
  console.log("Sum server listening on port 3000!")
})