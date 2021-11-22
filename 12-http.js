const http = require('http');
const port = 5000;

const server = http.createServer((req, res)=>{

    if( req.url === '/'){
        res.end(`
            <h1>Welcome to our Home Page</h1>
            <a href='/'>HOME</a>
            <a href='/about'>ABOUT</a>
        `);
    } else if ( req.url === '/about' ){
        res.end(`
            <h1>Here is a Short History</h1>
            <a href='/'>HOME</a>
            <a href='/about'>ABOUT</a>
        `);
    }
    else {
        res.end(`
            <h1>Ooops!!!</h1>
            <p>We Can't seem to find the page that you are looking for: "${req.url}"</p>
            <a href='/'>BACK TO HOME PAGE</a>
        `);
    }

    // REQUEST DETAILS
    console.log(req);
    console.log('***********************END OF REQUEST!!!!*********************');
    // res.write('Welcome to our home page!!');
    // res.end();
})

server.listen(port, () =>{
    console.log(`Server listening on Port ${port}`);
});
