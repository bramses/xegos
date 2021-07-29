/*create a endpoint that fetches youtube videos*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// how to use JSON for string and parse but file for users to see and edit?
app.