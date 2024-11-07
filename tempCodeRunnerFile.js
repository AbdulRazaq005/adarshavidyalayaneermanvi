
//   DataBlock.find(req.params, (err, data) => {
//     if (err) {
//       res.status(400).send(400);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.post("/api/:catagory", (req, res) => {
//   const maindata = new DataBlock(req.body);
//   maindata.save((err, data) => {
//     if (err) {
//       res.status(400).send(400);
//     } else {
//       res.status(200).send();
//     }
//   });
// });

// app.delete("/api/:id", (req, res) => {
//   DataBlock.findById(req.params.id, function (error, data) {
//     data.remove(function (error) {
//       if (error) {
//         res.status(400).send();
//       } else {
//         res.status(200).send();
//       }
//     });
//   });
// });

// app.put("/api/:id", (req, res) => {
//   DataBlock.replaceOne(
//     { _id: req.params.id },
//     req.body,
//     function (error, data) {
//       if (error) {
//         res.status(400).send();
//       } else {
//         res.status(200).send();
//       }
//     }
//   );
// });

// app.get("/menu", (req, res) => {
//   Menu.findOne({}, (err, data) => {
//     if (err) {
//     } else {
//       res.json(data);
//     }
//   });
// });