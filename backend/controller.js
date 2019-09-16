const axios = require('axios');
const qs = require('querystring');
const dialogForm  = require('./dialog-form');
const Offer = require('./model');

function sendMessageToSlack(res, messageText) {
    axios.post(response_url, 
        {
            token: process.env.SLACK_AUTH_TOKEN,
            channel: "#general",
            text: messageText
        }
    ).then((result) => {
        res.send('');
    }).catch((err) => {
        res.sendStatus(500);
    });
}

exports.index = (req, res) => {
    const dialogResult = {
        token: process.env.SLACK_AUTH_TOKEN,
        dialog: JSON.stringify(dialogForm),
        trigger_id: req.body.trigger_id
    };

    axios.post("https://slack.com/api/dialog.open",qs.stringify(dialogResult))
    .then((result) => {
        console.log('dialog.open: %o', result.data);
        res.send('');
    }).catch((err) => {
        console.log('dialog.open call failed: %o', err);
        res.sendStatus(500);
    });
}

exports.send = (req, res) => {
    const payload = JSON.parse(req.body.payload);
    const data = payload.submission;
    response_url = payload.response_url;
    console.log(response_url);

    const offer = new Offer({
        pizza_name: data.pizza_name,
        pizza_size: data.pizza_size,
        address: data.address,
        confirmed: false,
        declined: false,
        delivered: false
    });

    offer.save((err) => {
        if(err) console.log(err);
    });

    axios.post(response_url, 
        {
            token: process.env.SLACK_AUTH_TOKEN,
            channel: "#general",
            text: "Your offer in work"
        }
    ).then((result) => {
        res.send('');
    }).catch((err) => {
        res.sendStatus(500);
    });
}

exports.offers = (req, res) => {
    Offer.find({}, function(err, offers) {
        if(!err) {
            res.send(offers);
        } else {
            console.log(err);
        }
    });
}

exports.confirm = (req, res) => {
    Offer.findByIdAndUpdate(req.params.id, {
        confirmed: true
    }, (err) => {
        if(err) console.log(err);
    }).then(() => sendMessageToSlack(res, "Your offer is confirmed"));
}

exports.decline = (req, res) => {
    Offer.findByIdAndUpdate(req.params.id, {
        declined: true
    }, (err) => {
        if(err) console.log(err);
    }).then(() => sendMessageToSlack(res, "Your offer is declined"));
}

exports.deliver = (req, res) => {
    Offer.findByIdAndUpdate(req.params.id, {
        delivered: true
    }, (err) => {
        if(err) console.log(err);
    }).then(() => sendMessageToSlack(res, "Your offer is delivered"));
}