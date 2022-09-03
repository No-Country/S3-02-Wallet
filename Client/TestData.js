const Usuario = {
    balance:45500.00,
    cards:[
        { provider: "visa", level: "base", number: 8888777766665555},
        { provider: "mc", level: "black", number: 8888777766668555 },
        { provider: "mc", level: "platinum", number: 8888777766664555 }
    ],
    transactions: [{
        "title": "Hoyts Cinema",
        "category": "Entertainment",
        "amount": -15,
        "date": new Date('2022-8-1'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 1
    },
    {
        "title": "Amazon",
        "category": "Shopping",
        "amount": -100,
        "date": new Date('2022-8-10'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense",
        "id": 2
    },
    {
        "title": "Uber",
        "category": "Movility",
        "amount": -22,
        "date": new Date('2022-8-9'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense"
        ,
        "id": 3
    },
    {
        "title": "Airplane to spain",
        "category": "Travel",
        "amount": -850,
        "date": new Date('2022-7-15'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 4
    },
    {
        "title": "CODER SCHOOL",
        "category": "Academic",
        "amount": -100,
        "date": new Date('2022-6-17'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 5
    },
    {
        "title": "Salary",
        "category": "Income",
        "amount": 500,
        "date": new Date('2022-8-17'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "income",
        "id": 6
    },
    {
        "title": "Cerveceria",
        "category": "Food",
        "amount": -35,
        "date": new Date('2022-7-10'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 7
    },
    {
        "title": "Gym",
        "category": "fitness",
        "amount": -50,
        "date": new Date('2022-8-10'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense",
        "id": 8
    },
    {
        "title": "Transference from Braian",
        "category": "Income",
        "amount": 150,
        "date": new Date('2022-6-12'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "income",
        "id": 9
    },
    {
        "title": "Shell station",
        "category": "Gasoline",
        "amount": -22,
        "date": new Date('2022-6-9'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense"
        ,
        "id": 10
    },
    {
        "title": "Madrid Hotel",
        "category": "Travel",
        "amount": -125,
        "date": new Date('2022-6-1'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 11
    },
    {
        "title": "Airplane to London",
        "category": "Travel",
        "amount": -850,
        "date": new Date('2022-5-15'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 12
    },
    {
        "title": "Domino's Pizza",
        "category": "Food",
        "amount": -15,
        "date": new Date('2022-4-10'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 13
    },
    {
        "title": "Pedidos Ya",
        "category": "Food",
        "amount": -32,
        "date": new Date('2022-4-18'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 14
    },
    {
        "title": "Salary",
        "category": "Income",
        "amount": 1500,
        "date": new Date('2022-3-10'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "income",
        "id": 15
    },
    {
        "title": "Hotel Mendoza",
        "category": "Travel",
        "amount": -120,
        "date": new Date('2022-2-18'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 16
    }, 
    {
        "title": "Shell station",
        "category": "Gasoline",
        "amount": -50,
        "date": new Date('2022-8-29'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 17
    },
    {
        "title": "Amazon",
        "category": "Shopping",
        "amount": -180,
        "date": new Date('2022-8-25'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense",
        "id": 18
    },
    {
        "title": "Pedidos Ya",
        "category": "Food",
        "amount": -35,
        "date": new Date('2022-8-23'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense"
        ,
        "id": 19
    },
    {
        "title": "Shell station",
        "category": "Gasoline",
        "amount": -22,
        "date": new Date('2022-9-3'.replace(/-/g, '\/')),
        "payment": {
            "provider": "mc", "number": 8888777766665555
        },
        "type": "expense"
        ,
        "id": 20
    },
    {
        "title": "Madrid Hotel",
        "category": "Travel",
        "amount": -125,
        "date": new Date('2022-9-2'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 21
    },
    {
        "title": "Airplane to London",
        "category": "Travel",
        "amount": -850,
        "date": new Date('2022-9-3'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 22
    },
    {
        "title": "Domino's Pizza",
        "category": "Food",
        "amount": -10,
        "date": new Date('2022-9-3'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "expense",
        "id": 23
    },
    {
        "title": "Transference from Bill Gates",
        "category": "Income",
        "amount": 600,
        "date": new Date('2022-9-2'.replace(/-/g, '\/')),
        "payment": {
            "provider": "visa", "number": 8888777766665555
        },
        "type": "income",
        "id": 24
    }

    ]
}

export default Usuario