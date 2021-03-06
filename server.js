const express = require('express')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(PORT, () => (console.log(`App listening on: http://localhost:${PORT}`)));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);