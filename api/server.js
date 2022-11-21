const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/hotelBooking", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(() => console.log("connected to db"))
    .catch(console.error); 

const hotelBookingsSchema = new mongoose.Schema({

    hotel : {
        type : String,
    },
    arrival_date_year : {
        type : Number
    },
    arrival_date_month : {
        type : String,
    },
    arrival_date_day_of_month: {
        type : Number,
    },
    adults : {
        tyep : Number,
    },
    children : {
        type : Number,
    },
    babies : {
        type : Number,
    },
    country : {
        type : String,
    }

}, { collection : 'hotelbookings' });

// singular name by convention
const hotelBooking = mongoose.model("hotelBooking", hotelBookingsSchema);

app.get('/', async(req,res) => {
    console.log("connection successful");
});

// app.get('/bookings', function(req, res) {

//     hotelBooking.find(function(err, bookings){
//         if (bookings) {
//             const jsonBookings = JSON.stringify(bookings);
//             res.send(jsonBookings);
//         } else {
//             res.send("No articles currently in database");
//         }
//     });
// })

app.get('/bookings', async(req, res) => {
    const bookings = await hotelBooking.find();
    res.json(bookings);
});

app.get('/bookings/:startDay/:startMonth/:endDay/:endMonth', async (req, res) => {
    
    const startDay = req.params.startDay;
    const startMonth = req.params.startMonth;
    
    const endDay = req.params.endDay;
    const endMonth = req.params.endMonth;
    
    if (startMonth === endMonth){
        const x = await hotelBooking.find({arrival_date_month : startMonth, arrival_date_day_of_month : { $gte: startDay , $lte : endDay}});
        res.json(x);
    } else {
        const x = await hotelBooking.find( { $or:[
            {arrival_date_month : 'July', arrival_date_day_of_month : { $gte: startDay , $lte : 31}},
            {arrival_date_month : 'August', arrival_date_day_of_month : { $gte: 1 , $lte : endDay}}
        ]});
        res.json(x);
    }
})


// 3001 because frontend will run on port 3000
app.listen(3001, () => console.log("Server started on port 3001"));