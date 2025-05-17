const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Deployed via CLI Actions to AWS Elastic Beanstalk');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

