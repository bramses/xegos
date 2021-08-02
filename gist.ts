const Gists = require('gists');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.GIT_USERNAME)

const gists = new Gists({
    username: process.env.GIT_USERNAME, 
    password: process.env.GIT_PASSWORD
});

interface LocalFile {
    content: string;
    filename: string;
}

const createGist = async (command:string, filenames:LocalFile[]):Promise<any> => {
    try {

        gists.get('b1b89f69754723aa0514d259e0bbc9f3')
        .then(res => console.log(res.body))
        .catch(console.error);

        // const gist = gists.create({
        //     description: command,
        //     public: true,
        //     files: filenames.map(file => ({
        //         content: file.content,
        //         filename: file.filename
        //     }))
        // })
        // console.log(`Created gist ${gist.id}`);
        return null
    } catch (err) {
        console.log(`Error creating gist: ${err}`);
    }   
}

createGist('make a function that does basic addition', [{ 
    content: `/* make a function that does basic addition */

    function add(a, b) {
       return a + b;
     }`,
     filename: 'add.js'
}]);