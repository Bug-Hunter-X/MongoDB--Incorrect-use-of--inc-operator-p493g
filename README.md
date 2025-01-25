# MongoDB $inc Operator Error
This repository demonstrates an uncommon error in MongoDB: incorrectly using the `$inc` operator with a string field.  The `$inc` operator is specifically for incrementing numeric values. Attempting to use it on a string field will lead to an error.

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected implementation.  Ensure you have a MongoDB instance running before testing.
