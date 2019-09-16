module.exports = {
    "callback_id": "ryde-46e2b0",
    "title": "Order a pizza",
    "submit_label": "Order!",
    "elements": [
        {
        "type": "select",
        "label": "Pizza name",
        "name": "pizza_name",
        "options": [
            {
            "label": "Margherita",
            "value": "margherita"
            },
            {
            "label": "Marinara",
            "value": "marinara"
            },
            {
            "label": "Carbonara",
            "value": "carbonara"
            },
            {
            "label": "Americana",
            "value": "americana"
            },
            {
            "label": "Sarda",
            "value": "Sarda"
            },
            {
            "label": "Campagnola",
            "value": "campagnola"
            }
        ]
        },
        {
        "type": "select",
        "label": "Size",
        "name": "pizza_size",
        "options": [
            {
            "label": "20 sm",
            "value": 20
            },
            {
            "label": "25 sm",
            "value": 25
            },
            {
            "label": "30 sm",
            "value": 30
            },
        ]
        },
        {
        "type": "text",
        "label": "Address",
        "name": "address"
        }
    ]
};