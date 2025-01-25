```javascript
// Correct use of $inc operator with a numeric field
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { 'myNumber': 1 } });

// Alternative for string concatenation
db.collection('myCollection').updateOne({ _id: 1 }, { $set: { 'myString': db.collection('myCollection').findOne({_id:1}).myString + "1" } });
```