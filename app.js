var app = require("express")();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// const url =
//     "mongodb+srv://user:password@cluster0.yourserver.mongodb.net/mydb?retryWrites=true&w=majority";
// var url =
//     "mongodb+srv://manpham:admin1234@lab-test.l0rxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(url);

// const UserSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "User must have a name"],
//         },
//         email: {
//             type: String,
//             required: [true, "User must have an email"],
//             validate: {
//                 validator(input) {
//                     return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
//                         input
//                     );
//                 },
//                 message: "Invalid email input. Please try again !!!",
//             },
//             unique: true,
//         },

//         password: {
//             type: String,
//             required: [true, "User must have a password"],
//             minlength: [8, "Password must at least have 6 characters"],
//             select: false,
//         },
//         passwordConfirm: {
//             type: String,
//             required: [true, "Please confirm your password"],
//             validate: {
//                 validator(input) {
//                     return input === this.password;
//                 },
//                 message:
//                     "Confirm password does not match with a given password",
//             },
//         },
//         gender: {
//             type: String,
//         },
//         address: String,
//         mobilePhone: String,
//         zaloPhone: String,
//     },
//     {
//         toJSON: { virtuals: true },
//         toObject: { virtuals: true },
//     }
// );

// var User = mongoose.model("Student", UserSchema);

// const extractUserData = (user) => {
//     const data = {
//         name: user.name,
//         email: user.email,
//     };
//     if (user.role === "expert") data.description = user.description;
//     return data;
// };

// app.post("/register", function (req, res) {
//     const user = await User.create(req.body);
//     const userData = extractUserData(user);
//     res.status(201).json({
//         status: "success",
//         data: {
//             user: userData,
//             token,
//         },
//     });
// });

app.get("/add", function (req, res) {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let result = a + b;
    res.status(200).json({
        result: result,
    });
});

app.listen(9000);
