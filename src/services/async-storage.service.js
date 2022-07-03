
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 600) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

// function query(entityType, entityId, delay = 600) {
//     var entities = JSON.parse(localStorage.getItem(entityType))
//     if (entityType === 'user' && entityId) {
//         const entity = entities.find(entity => entity._id === entityId)
//         return entity
//     } else  if (entityType === 'order' && !entities) {
//         entities = _createOrders()
//         _save(entityType, entities)
//     } else if (entityType === 'user' && !entities) {
//         entities = _createUsers()
//         _save(entityType, entities)
//     }
//     else if (!entities) {
//         entities = _createGigs()
//         _save(entityType, entities)
//     }
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject('OOOOPs')
//             resolve(entities)
//         }, delay)
//     })
//     // return Promise.resolve(entities)
// }


// function get(entityType, entityId) {
//     const entity = query(entityType, entityId)
//     return entity
//     // .then(entities => entities.find(entity => entity._id === entityId))
// }

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    console.log('entities', entities)
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _createOrders() {
    
    let orders = [
        {
            "_id": "o101",
            "createdAt": 1636410641000,
            "deliveryDate": 1636669841000,
            "buyer": {
                "_id": "u103",
                "fullName": "courtney lasch",
                "ImgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg"
            },
            "seller": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
            },
            "gig": {
                "_id": "i101",
                "description": "I will create animated whiteboard explainer video ad",
                "price": 52.94,
                "category": "Graphics & Design"
            },
            "status": "approved"
        },
        {
            "_id": "o102",
            "createdAt": 1638187841000,
            "deliveryDate": 1638360641000,
            "buyer": {
                "_id": "u130",
                "fullName": "lordenzoj",
                "ImgUrl": "https://this-person-does-not-exist.com/img/avatar-2a36023bc9228ca8560780f17c91e37d.jpg"
            },
            "seller": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
            },
            "gig": {
                "_id": "i101",
                "description": "I will create animated whiteboard explainer video ad",
                "price": 52.94,
                "category": "Graphics & Design"
            },
            "status": "approved"
        },
        {
            "_id": "o103",
            "createdAt": 1641643841000,
            "deliveryDate": 1641903041000,
            "buyer": {
                "_id": "u131",
                "fullName": "joshuamcclur187",
                "ImgUrl": "https://this-person-does-not-exist.com/img/avatar-d54c3fe5330ff4a422c91fa5f2839066.jpg"
            },
            "seller": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
            },
            "gig": {
                "_id": "i101",
                "description": "I will create animated whiteboard explainer video ad",
                "price": 52.94,
                "category": "Graphics & Design"
            },
            "status": "approved"
        },
        {
            "_id": "o104",
            "createdAt": 1643544641000,
            "deliveryDate": null,
            "buyer": {
                "_id": "u126",
                "fullName": "anamaldonado007",
                "ImgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/224195ab8b322ca807e44e5c7a7a3d3d-1611265990754/55d79661-3260-43d6-8c35-559502e8147a.jpg"
            },
            "seller": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
            },
            "gig": {
                "_id": "i101",
                "description": "I will create animated whiteboard explainer video ad",
                "price": 52.94,
                "category": "Graphics & Design"
            },
            "status": "rejected"
        },
        {
            "_id": "o105",
            "createdAt": 1653912641000,
            "deliveryDate": null,
            "buyer": {
                "_id": "u118",
                "fullName": "mahbuburrahm204",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8038e14b365769c5de4ab798e6346b7b-1629650732214/f75468a6-3514-47c0-b493-e021fe608344.png"
            },
            "seller": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
            },
            "gig": {
                "_id": "i101",
                "description": "I will create animated whiteboard explainer video ad",
                "price": 52.94,
                "category": "Graphics & Design"
            },
            "status": "pending"
        }

    ]
    console.log('orderis async-srorage', orders)
    return orders
}

function _createUsers() {
    let users = [
        {
            "_id": "u101",
            "fullName": "gul071",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg",
            "userName": "gul071",
            "password": "gul071",
            "level": "Level 2 Seller",
            "email": "gul071@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u102",
            "fullName": "richarddavis438",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg",
            "userName": "richarddavis438",
            "password": "richarddavis438",
            "level": "",
            "email": "richarddavis438@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u103",
            "fullName": "courtneylasch",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg",
            "userName": "courtney lasch",
            "password": "courtneylasch",
            "level": "",
            "email": "courtneylasch@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u104",
            "fullName": "yogi_isnanda",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2aaa44044e3584127b6b3e7034ee61a1-439775891516423682866/53cc7063-4bd1-4e31-8c08-f8d01b3acaec.jpg",
            "userName": "yogi_isnanda",
            "password": "yogi_isnanda",
            "level": "Level 2 Seller",
            "email": "yogi_isnanda@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": false,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u105",
            "fullName": "buddhanthebeard",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3724f3ac1592a5aaed95573604688a6d-1647642710426/828de129-0515-4fe4-9019-2081863e5471.JPG",
            "userName": "buddhanthebeard",
            "password": "buddhanthebeard",
            "level": "",
            "email": "buddhanthebeard@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u106",
            "fullName": "ivanrivera",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/7807154/original/391706_2352809414474_250266607_n.jpg",
            "userName": "ivanrivera",
            "password": "ivanrivera",
            "level": "",
            "email": "ivanrivera@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u107",
            "fullName": "graphexgalaxy",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
            "userName": "graphexgalaxy",
            "password": "graphexgalaxy",
            "level": "Level 2 Seller",
            "email": "graphexgalaxy@gmail.com",
            "avgOrdersRate": 4.8,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u108",
            "fullName": "hp_spikefli",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8b1b16dcc738965d716b2c27345fcfe7-1642471394066/66171d9a-52b4-456b-a26f-c142ba33913a.jpg",
            "userName": "hp_spikefli",
            "password": "hp_spikefli",
            "level": "",
            "email": "hp_spikefli@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u109",
            "fullName": "dohyotriyono",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
            "userName": "dohyotriyono",
            "password": "dohyotriyono",
            "level": "Level 2 Seller",
            "email": "dohyotriyono@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u110",
            "fullName": "hp_spikefli",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8b1b16dcc738965d716b2c27345fcfe7-1642471394066/66171d9a-52b4-456b-a26f-c142ba33913a.jpg",
            "userName": "hp_spikefli",
            "password": "hp_spikefli",
            "level": "",
            "email": "hp_spikefli@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u111",
            "fullName": "gad_by_miraz_pro",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg",
            "userName": "gad_by_miraz_pro",
            "password": "gad_by_miraz_pro",
            "level": "Level 2 Seller",
            "email": "gad_by_miraz_pro@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u112",
            "fullName": "febzpena",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg",
            "userName": "febzpena",
            "password": "febzpena",
            "level": "",
            "email": "febzpena@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u113",
            "fullName": "shirley_esid",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b4231d6752099ce2619003ed164b72e2-1646950968199/c6714639-3d34-4a5a-9739-3a72597ae4ec.JPG",
            "userName": "shirley_esid",
            "password": "shirley_esid",
            "level": "Level 2 Seller",
            "email": "shirley_esid@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u114",
            "fullName": "strongathome",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9df26f4a8f567cd3661cb0999b5ed874-1647184084798/de4ec514-64fb-48c3-85a5-e02a5a5238da.png",
            "userName": "strongathome",
            "password": "strongathome",
            "level": "",
            "email": "strongathome@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u115",
            "fullName": "burnanaconcept",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/2924473/original/200.jpg",
            "userName": "burnanaconcept",
            "password": "burnanaconcept",
            "level": "",
            "email": "burnanaconcept@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u116",
            "fullName": "roslyn_johnson",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b6f6830b0394f46092fc7ace020c511d-985758451632988163077/JPEG_20210930_134922_-1807988561.jpg",
            "userName": "roslyn_johnson",
            "password": "roslyn_johnson",
            "level": "Level 2 Seller",
            "email": "roslyn_johnson@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": false,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u117",
            "fullName": "erichflaboss",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a72835f8b520694643de15352f1d627f-1574606114998/d1a785aa-a99d-4fc4-a34b-d29435064144.jpg",
            "userName": "erichflaboss",
            "password": "erichflaboss",
            "level": "",
            "email": "erichflaboss@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u118",
            "fullName": "mahbuburrahm204",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8038e14b365769c5de4ab798e6346b7b-1629650732214/f75468a6-3514-47c0-b493-e021fe608344.png",
            "userName": "mahbuburrahm204",
            "password": "mahbuburrahm204",
            "level": "Level 2 Seller",
            "email": "mahbuburrahm204@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u119",
            "fullName": "anxietybathbomb",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4be538b53e19e57970f54e7350bdcfd7-1646673177494/bf0643c2-0534-4b21-bfde-a0bedf85a66f.png",
            "userName": "anxietybathbomb",
            "password": "anxietybathbomb",
            "level": "",
            "email": "anxietybathbomb@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u120",
            "fullName": "jaylucy",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/48b6c449a1b46cb2c9db97fc7cd612cc-1644490352565/3299dcc8-8cb3-45d5-9e46-72c4d50b6830.jpg",
            "userName": "jaylucy",
            "password": "jaylucy",
            "level": "Top Rated Seller",
            "email": "jaylucy@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": false,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u121",
            "fullName": "pinkblack785",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bbf3bf121f1eac947ee71a3d1ea11954-1020470111639329903672/JPEG_20211212_222502_3148070451161052897.jpg",
            "userName": "pinkblack785",
            "password": "pinkblack785",
            "level": "",
            "email": "pinkblack785@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u122",
            "fullName": "hayleyhutson",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6f43fcdade5ca0cf5dc2a19bd2c75122-1595186054929/372e22af-6325-4f4e-b947-7c7767e6cf0a.jpeg",
            "userName": "hayleyhutson",
            "password": "hayleyhutson",
            "level": "Level 2 Seller",
            "email": "hayleyhutson@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u123",
            "fullName": "pjd2019",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ff59317470d8607a9c6e03cb5bcc87aa-784636891612079416.443886/A93FDA03-F831-489B-8A05-98623ADB39D2",
            "userName": "pjd2019",
            "password": "pjd2019",
            "level": "",
            "email": "pjd2019@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u124",
            "fullName": "professorrose",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c6de97063c2fa24741745b9049d51924-1651783073166/24c906d4-7ad8-4870-ae39-960a6c64b97e.png",
            "userName": "professorrose",
            "password": "professorrose",
            "level": "",
            "email": "professorrose@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u125",
            "fullName": "luizakipper",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d0f1aa93510d94ecbbb75f189c5bc298-1553798809035/8558f3ac-ee2a-4e0f-b51e-e14984bc52f1.png",
            "userName": "luizakipper",
            "password": "luizakipper",
            "level": "Level 2 Seller",
            "email": "luizakipper@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": true,
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u126",
            "fullName": "anamaldonado007",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/224195ab8b322ca807e44e5c7a7a3d3d-1611265990754/55d79661-3260-43d6-8c35-559502e8147a.jpg",
            "userName": "anamaldonado007",
            "password": "anamaldonado007",
            "level": "",
            "email": "anamaldonado007@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u127",
            "fullName": "truckparkermusi",
            "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a72835f8b520694643de15352f1d627f-1574606114998/d1a785aa-a99d-4fc4-a34b-d29435064144.jpg",
            "userName": "truckparkermusi",
            "password": "truckparkermusi",
            "level": "",
            "email": "truckparkermusi@gmail.com",
            "avgOrdersRate": 0,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u128",
            "fullName": "laraib_zafar",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/307f4b58efd7ba93de772c80f47cc029-1641283020750/178eedb2-e5ea-452b-8c3e-e65f011650d8.jpeg",
            "userName": "laraib_zafar",
            "password": "laraib_zafar",
            "level": "",
            "email": "laraib_zafar@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u129",
            "fullName": "markdarwin18",
            "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ca79ba59ec325ff629d7e27136b39aef-1620263082130/dfd2c226-8e5f-42f9-bbe9-01e211846a8e.jpg",
            "userName": "markdarwin18",
            "password": "markdarwin18",
            "level": "",
            "email": "markdarwin18@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": true,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""

        },
        {
            "_id": "u130",
            "fullName": "lordenzoj",
            "imgUrl": "https://this-person-does-not-exist.com/img/avatar-2a36023bc9228ca8560780f17c91e37d.jpg",
            "userName": "lordenzoj",
            "password": "lordenzoj",
            "level": "",
            "email": "lordenzoj@gmail.com",
            "avgOrdersRate": 4.9,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        },
        {
            "_id": "u131",
            "fullName": "joshuamcclur187",
            "imgUrl": "https://this-person-does-not-exist.com/img/avatar-d54c3fe5330ff4a422c91fa5f2839066.jpg",
            "userName": "joshuamcclur187",
            "password": "joshuamcclur187",
            "level": "",
            "email": "joshuamcclur187@gmail.com",
            "avgOrdersRate": 5,
            "isSeller": false,
            "reviews": [{}],
            "google_account": "",
            "facebook_account": "",
            "twitter_account": ""
        }
    ]

    return users
}

function _createGigs() {
    const gigs = [
        {
            "_id": "i101",
            "title": "I will create animated whiteboard explainer video ad",
            "price": 52.94,
            "avgGigRating": [],
            "owner": {
                "_id": "u101",
                "fullName": "Ahmed Aka",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg",
                "from": "Pakistan",
                "memberSince": "Sept 2017",
                "avgResponseTime": "1 hour",
                "lastDelivery": "about 1 hour"
            },
            "level": "Level 2 Seller",
            "daysToMake": 3,
            "description": {
                "aboutThisGig": "Hello If you want to create a professional WHITEBOARD EXPLAINER VIDEO AD and engage your audience, then you are at the right place. It is recommended to contact through inbox first then place order.",
                "whyUs": "",
                "whatDoYouGet": "CUSTOM DRAWINGS\nWill cost extra depending on drawing, so please make sure the price by coming in inbox to get quote.\n ​COLORING - Will cost extra depending on the project type and type of coloring. \n ​Editing script  after placing the order will cost extra.\n IF YOU HAVE ANY QUESTION, FEEL FREE TO CONTACT ME.\n For Whiteboard Explainer Samples please follow the link:\nhttps://www.youtube.com/channel/UCm-0NlyD3Lb9IIj_UPIvCtQ/videos",
                "littleDetails": ["Up to 30 Seconds Running Time", "Full Color", "Voice Over Recording", "Scriptwriting", "Music/Sound Design included"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/videos/so_44.79414,t_main1,q_auto,f_auto/mwkigsyj9hzzmphy3ijx/exclusive-whiteboard-animation-in-24-hours.png", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/102260755/original/064e14c412a2081407c2cc44459621357a3223e4/exclusive-whiteboard-animation-in-24-hours.png"],
            "category": "Graphics & Design",
            "reviews": [
                {
                    "_id": "r101",
                    "userName": "courtneylasch",
                    "content": "I would highly recommend this Wiser artist. He is very kind, quick to respond, and really wants your project to succeed! I would highly recommend getting a gig from him!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/10451008/original/cheadshot_03_cropped.jpg",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "_id": "r102",
                    "userName": "lordenzoj",
                    "content": "Communication was poor. Project was super late with no communication from seller until I reached out. The work overall was pretty good after a few edits",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d48669eac8ec3b563a685e8bd949a701-1650869312636/0465790c-8906-40e7-9b61-d1ecc95b55d7.jpg",
                    "stars": [4],
                    "userCountry": "United States"
                },
                {
                    "_id": "r103",
                    "userName": "joshuamcclur187",
                    "content": "Gul071 is amazing. He is very talented and follows up amazingly. I will certainly refer and use his services again. Thank you for doing such an incredible job. I am beyond pleased and excited.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/29461d7f25eb73f0594a8bfb5c8a9d51-947790731647479073.389776/E41D379E-ABFD-4597-A516-4AF55CD1DD7E",
                    "stars": [5],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u102",
                "fullName": "richarddavis438",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg"
            }
        },
        {
            "_id": "i102",
            "title": "I will do unique and beautiful retro vintage logo",
            "price": 35.29,
            "avgGigRating": [],
            "owner": {
                "_id": "u107",
                "fullName": "graphexgalaxy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
                "from": "United Kingdom",
                "memberSince": "Oct 2020",
                "avgResponseTime": "1 hour",
                "lastDelivery": "about 19 hours"
            },
            "level": "Level 2 Seller",
            "daysToMake": 1,
            "description": {
                "aboutThisGig": "Hi there ! \nI am a Professional Graphic Designer with 6+ years of experience in Graphic Industry,\nexpertise as Logo Maker, You'll get creative & unique logo design for your business.",
                "whyUs": "",
                "whatDoYouGet": "Highly Professional, UNIQUE & High Quality designs\nUNLIMITED Revisions until you are 100% satisfied\n100% original & unique vector design from Adobe Illustrator\nVector Source Files (scalable without any quality loss) (AI, EPS,PSD, PDF) for the final design\nPROFESSIONAL Communication & Outstanding Customer Support\nGuaranteed High Quality work\nI am not Doing Cartoon, Caricature & Custom Character Logos.\nIf you have any question,\nFeel free to Contact Me I'll be happy to help.Place Your Order Without Any Hesitation. I am here to put your vision into life.",
                "littleDetails": ["1 concept included", "Logo transparency", "Vector file", "Printable file", "3D mockup", "Source file"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/179341816/original/cf07484c9c4e49c027263b3bac8ed0e60c092b05/do-unique-and-beautiful-retro-vintage-design.jpg", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/2cb51b6d6893894e3f61356cf4eb957e-1632477605/01/do-unique-and-beautiful-retro-vintage-design.jpg"],
            "category": "Graphics & Design",
            "reviews": [
                {
                    "_id": "r104",
                    "userName": "anamaldonado007",
                    "content": "Excellent work, ALWAYS!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/224195ab8b322ca807e44e5c7a7a3d3d-1611265990754/55d79661-3260-43d6-8c35-559502e8147a.jpg",
                    "stars": 5,
                    "userCountry": "United States"
                },
                {
                    "_id": "r105",
                    "userName": "shaipeer534",
                    "content": "Seller didn't follow my instruction and had me have another revision.",
                    "userImage": "",
                    "stars": 1.7,
                    "userCountry": "Israel"
                }
            ],
            "likedByUsers": {
                "_id": "u105",
                "fullName": "buddhanthebeard",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3724f3ac1592a5aaed95573604688a6d-1647642710426/828de129-0515-4fe4-9019-2081863e5471.JPG"
            }
        },
        {
            "_id": "i103",
            "title": "I will draw cute and unique nft mascot character",
            "price": 52.94,
            "avgGigRating": [],
            "owner": {
                "_id": "u109",
                "fullName": "dohyotriyono",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
                "from": "Indonesia",
                "memberSince": "Jun 2020",
                "avgResponseTime": "1 hour",
                "lastDelivery": "about 10 hours"
            },
            "level": "Level 2 Seller",
            "daysToMake": 2,
            "description": {
                "aboutThisGig": "PLEASE MESSAGE ME BEFORE ORDERING\nI want understand exactly what you want to be designed before I receive your order. THANK YOU!",
                "whyUs": "",
                "whatDoYouGet": "unique and awesome illustration, high quality, JPG, PNG, AI, EPS, or SVG format files.",
                "littleDetails": ["Source File"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/230928287/original/64b7c1a70bffac0b67a812826d718ac1b34f4456/draw-cute-and-unique-nft-mascot-character.jpg", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/821ce8ff174652ff4a6c4c10c18d9a7d-1647483667/swim/draw-cute-and-unique-nft-mascot-character.jpg"],
            "category": "Graphics & Design",
            "reviews": [
                {
                    "_id": "r106",
                    "userName": "djs352",
                    "content": "It was an absolute pleasure working with him. He was responsive, took feedback, worked quickly and provided a product that we are very excited about. 10/10 experience. Thank you!!!",
                    "userImage": "",
                    "stars": 5,
                    "userCountry": "United States"
                },
                {
                    "_id": "r107",
                    "userName": "fizzeth",
                    "content": "Amazing to work with, quickly understood what I needed, and was able to make quick revisions. Extremely satisfied with the art, would order again!",
                    "userImage": "",
                    "stars": 5,
                    "userCountry": "United Kingdom"
                },
                {
                    "_id": "r108",
                    "userName": "mirnac",
                    "content": "Amazing to work with! Very nice and also took my changes into consideration. Very patient and talented. Will recommend a hundred times over! One of the best artists I've worked with.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/29461d7f25eb73f0594a8bfb5c8a9d51-947790731647479073.389776/E41D379E-ABFD-4597-A516-4AF55CD1DD7E",
                    "stars": 5,
                    "userCountry": "Croatia"
                }
            ],
            "likedByUsers": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg"
            }
        },
        {
            "_id": "i104",
            "title": "I will do facebook advertising, marketing, fb ads,instagram ads campaign,fb advertising",
            "price": 70.59,
            "avgGigRating": [],
            "owner": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg",
                "from": "Israel",
                "memberSince": "2 month ago",
                "avgResponseTime": "3 hours",
                "lastDelivery": "about 2 hours"
            },
            "level": "Level 1 Seller",
            "daysToMake": 2,
            "description": {
                "aboutThisGig": "Welcome to my gigs\nHave you been wondering how you could set up a successful Facebook ad campaign?\nWell, you have come to the right place!\nAre You Running Facebook Ads For Your Shopify Dropshipping Business? Struggling To Get Link Clicks, Potential Leads Or Purchases? Then, You Came To The Right Person!\nWhich You Are Finding If That You Are Unable To Get It Then Get In Touch With Me.i Will Solve Your Issues Friendly. If You Have An Important Job I Will Deliver You Rapid Support.\nTrusted Seller - Satisfaction Guaranteed",
                "whyUs": "I am a professional digital marketer. I am highly skilled in ✅Facebook, ✅Instagram and ✅Google PPC ads campaigns. I have been completed my professional course on Digital marketing.\nI have 6 years of experience on Facebook, Instagram and Google ads. I ran many ads successfully for my client. I have the experience to work with the client on other platforms.\nI try my best to do benefited my client with my work. I always believe that client satisfaction is my success.",
                "whatDoYouGet": "Create Fb ads campaign & Instagram Ads\nResearch, Plan & Strategy\nCreate & Setup FB Business page\nSetup FB Pixel and Event\nDomain Verify and Setup ISO14 Event\nAudience Research with Demographic, Interest & Behaviors\nCreate custom and Lookalike Audience\nResponsive Ad text with a description\nAds management based on Package\nIf you have any questions, you can message me when you will be free.",
                "littleDetails": ["Target Audience Research", "Keyword Research", "Automated Feed Ads (DPA)", "Ad Content Creation", "Ads Analytical Report", "2 Days"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/219531995/original/50ec1615424683f6d83c3d59de06332f1b0cbdfa/do-facebook-advertising-marketing-fb-ads-instagram-ads-campaign-fb-advertising.jpg", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/04fcc41f750b98d1e9097d6bec818197-1646886003/Screenshot_24/do-facebook-advertising-marketing-fb-ads-instagram-ads-campaign-fb-advertising.jpg"],
            "category": "Graphics & Design",
            "reviews": [
                {
                    "id": "r104",
                    "content": "By far the best services I have received on fiverr yet! I am really happy with the outcomes and they are extremely professional as well as requiring very little input in order to create amazing posts for my channels.",
                    "userName": "camerongiliomee",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/505659e775c93c597906183904af624a-1636100364921/5d9c8a64-93d1-4b67-8a7f-915f96ef2aab.png",
                    "stars": [5],
                    "userCountry": "Canada"
                },
                {
                    "id": "r105",
                    "content": "Some blogs are being revoked by Google Ads due to violations. We have to be careful now because they are going to begin charging and suspending people for continuous violations.",
                    "userName": "willdavis527",
                    "userImage": "https://this-person-does-not-exist.com/img/avatar-e1673e19fe49349307f13a3f9c01cb7b.jpg",
                    "stars": [4.7],
                    "userCountry": "United States"
                },
                {
                    "id": "r106",
                    "content": "I have worked with them many times before. This last time there was a few communication gaps, but overall I will hire them again",
                    "userName": "davis18232",
                    "userImage": "",
                    "stars": [4],
                },
                {
                    "id": "r109",
                    "content": "The ads are live and i already had alot of link clicks. I am Happy with the set up and i will continue working with them in the future. Very good communication. I would recommend!",
                    "userName": "cassidyfi",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/117b9f10526d01fb6968c6aa85e7852b-662078411649434372.518796/3D3A09BD-DB57-449B-8E8B-66082C17403F",
                    "stars": [5],
                    "userCountry": "Norway"
                },
                {
                    "id": "r110",
                    "content": "Very helpful and great job helping me solving my issues in a timely manner, fast delivery and very knowledgeable, highly recommended.",
                    "userName": "babakka",
                    "userImage": "https://this-person-does-not-exist.com/img/avatar-fd9f87ac08cbc1c4023be1586908a29d.jpg",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r111",
                    "content": "He was quick with the order.",
                    "userName": "jazzimanij",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u104",
                "fullName": "yogi_isnanda",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2aaa44044e3584127b6b3e7034ee61a1-439775891516423682866/53cc7063-4bd1-4e31-8c08-f8d01b3acaec.jpg"
            }
        },
        {
            "_id": "i105",
            "title": "I will be your pro social media content creator",
            "price": 352.94,
            "avgGigRating": [],
            "owner": {
                "_id": "u113",
                "fullName": "shirley_esid",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b4231d6752099ce2619003ed164b72e2-1646950968199/c6714639-3d34-4a5a-9739-3a72597ae4ec.JPG",
                "from": "Belgium",
                "memberSince": "Mar 2020",
                "avgResponseTime": "1 hour",
                "lastDelivery": "about 3 hours"
            },
            "level": "Level 2 Seller",
            "daysToMake": 10,
            "description": {
                "aboutThisGig": "About This Gig\nWelcome to the good side of Social Media Marketing where we prioritise performance, know our target audience like our best friend and go above and beyond to create scroll-stopping designs that tell fantastic stories! ",
                "whyUs": "I'm Shirley, a Marketing Director, Content Strategist & Creative Designer. I've been in this industry for over 5 years and have assisted over 150 brands with their social needs just this year! (Feel free to ask me for my portfolio!)",
                "whatDoYouGet": "Branded content (All industries: NFT's, Beauty, Tech, Ecommerce, Agencies... )\nStories\nlinkedIn & twitter posts\nCarousels\nInspirational & Educational posts\nMemes\nMuch more\nWether you need posts designed in a specific style or are in need of a complete overhaul, I've got you! Besides creating rocking content, I will also include a list of hashtags that I would benefit your brand with every order placed.",
                "littleDetails": ["10 Social Posts Created"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/208249355/original/046f201b32253b46140785a31d34ed5474f25e4a/your-pro-social-media-content-creator.png", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/208249355/original/2b985f0b41e4d6d8cb6366d9e5f62234d28a9247/your-pro-social-media-content-creator.png"],
            "category": "Digital Marketing",
            "reviews": [
                {
                    "id": "r112",
                    "userName": "strongathome",
                    "content": "Shirley is a masterful designer with a good knowledge of marketing. Her professionalism, sense of design, and the way she understands her clients' needs are likely why she became one of the site's few PRO sellers. I'm not sure how she does it, but Shirley is the real deal. She doesn't do anything halfway. No cutting corners. No complaining. But don't take my word for it. Hire her while you still have a chance!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9df26f4a8f567cd3661cb0999b5ed874-1647184084798/de4ec514-64fb-48c3-85a5-e02a5a5238da.png",
                    "stars": [5],
                    "userCountry": "Bosnia and Herzegovina"
                },
                {
                    "id": "r113",
                    "userName": "dcutsforth",
                    "content": "The seller provided us with good looking social media content on a tight time frame for substantially less than almost anyone else pro certified that offers this service. Not only that, they provided us with more pests and hashtags than we paid for. They really went above and beyond for a freelancer",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r114",
                    "userName": "marcbovenzi",
                    "content": "Shirley is great to work with and is a very talented social media post designer. The design concepts of my posts are perfect for my audience. I recommend her services. You'll have to be patient because she has a lot of customers, but the overall work when received is worth the wait.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/90d50edd374c205e1a17216a3757b436-1646661005772/e7a6e76c-a6fc-49f7-9f35-0202617b8af5.png",
                    "stars": [5],
                    "userCountry": "Japan"
                }
            ],
            "likedByUsers": {
                "_id": "u105",
                "fullName": "buddhanthebeard",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3724f3ac1592a5aaed95573604688a6d-1647642710426/828de129-0515-4fe4-9019-2081863e5471.JPG"
            }
        },
        {
            "_id": "i106",
            "title": "I will do organic spotify promotion by social media marketing",
            "price": 88.24,
            "avgGigRating": [],
            "owner": {
                "_id": "u116",
                "fullName": "roslyn_johnson",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b6f6830b0394f46092fc7ace020c511d-985758451632988163077/JPEG_20210930_134922_-1807988561.jpg",
                "from": "Bangladesh",
                "memberSince": "Dec 2020",
                "avgResponseTime": "2 hour",
                "lastDelivery": "about 12 hour"

            },
            "level": "Level 2 Seller",
            "daysToMake": 10,
            "description": {
                "aboutThisGig": "Hello There,\nPRO SPOTIFY MUSIC PROMO Service is here in very cheapest price!\nI will utilize my MANUAL ranking strategy and white-hat SEO tactics to boost your music daily rankings, ensuring your music ranks high for YOUR targeted keywords.",
                "whyUs": "24/7 Premium Support\nOrganic Results",
                "whatDoYouGet": "I will manually create high quality profile backlinks that will increase your website ranking. I always do backlinks to high DA, PA sites. I follow the SEO white hat rules when creating backlinks. So your site just starts to rank. I hope you are well. Thank you so much for your precious time.",
                "littleDetails": [""]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/224200641/original/0c155cff6030c145737d7d0026df65322a23d116/do-organic-spotify-promotion-by-social-media-marketing.jpg", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a322d572e55e19d755fb6971fbaebbb1-1650875569/1650875460752_delivery%20report/do-organic-spotify-promotion-by-social-media-marketing.jpg"],
            "category": "Digital Marketing",
            "reviews": [
                {
                    "id": "r115",
                    "userName": "dream_legacy",
                    "content": "We ordered the small gig for one song. We got in 10 days 10 K streams for my song. It is a real good result. Also 40 followers I gained. We are not a specialist in music advertisement so we can’t judge about. The result is really great.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d7a9922e638ce755fda55c7a4b49bf5f-963926901618890247.533545/383FD913-3E1D-4287-AC42-6C7335469DD1",
                    "stars": [5],
                    "userCountry": "Germany"
                },
                {
                    "id": "r116",
                    "userName": "erichflaboss",
                    "content": "Communicates well and gets lots of numbers but the listener to stream ratio was very low on what happened, so I'm unsure how streams were achieved.",
                    "userImage": "",
                    "stars": [3.3],
                    "userCountry": "United States"
                },
                {
                    "id": "r117",
                    "userName": "erictom",
                    "content": "Fast and efficent but unsure if bots were involved in getting the numbers because the listener to stream ratio was really low with this service compared to others.",
                    "userImage": "",
                    "stars": [3.7],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u106",
                "fullName": "ivanrivera",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/7807154/original/391706_2352809414474_250266607_n.jpg"
            }
        },
        {
            "_id": "i107",
            "title": "I will setup and optimize tiktok ads campaign, tik tok ads, tiktok advertising",
            "price": 141.18,
            "avgGigRating": [],
            "owner": {
                "_id": "u118",
                "fullName": "mahbuburrahm204",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8038e14b365769c5de4ab798e6346b7b-1629650732214/f75468a6-3514-47c0-b493-e021fe608344.png",
                "from": "Bangladesh",
                "memberSince": "Mar 2021",
                "avgResponseTime": "1 hour",
                "lastDelivery": "about 4 hour"
            },
            "level": "Level 2 Seller",
            "daysToMake": 3,
            "description": {
                "aboutThisGig": "Promote Your Dropshipping E-commerce Store At Your Fingertips.",
                "whyUs": "24/7 Premium Support",
                "whatDoYouGet": "Setup Tik Tok Pixel\nMake an Eye-catching Video with Trending Music for Each Campaign (Free)\nSetup Awareness, Consideration, and Conversions Tik Tok Ads Campaigns\nResearch Targeted Audience for your Business that will Generate Sales\nTargeted Multiple Ad set\nLow CPM, CPA, and High Conversion Rate\nOptimize Daily Ads Budget\nSend Daily Campaign Analytics Report",
                "littleDetails": ["Target Audience Research", "Keyword Research", "Automated Feed Ads (DPA)", "Seasonality Ad Calendar", "Ad Content Creation", "Ads Analytical Report", "3 Days"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/228317272/original/2dd437957f3f29fbe89b9dd79705517cc801a4f7/setup-and-optimize-tiktok-ads-campaign-tik-tok-ads-tiktok-advertising.png", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e84544f8b59defd0bb389efba28b397e-1650947237/Tiktok%20ads%20(1)/setup-and-optimize-tiktok-ads-campaign-tik-tok-ads-tiktok-advertising.png"],
            "category": "Digital Marketing",
            "reviews": [
                {
                    "id": "r118",
                    "userName": "jralston1911",
                    "content": "Wow, what can I say?? This seller has fantastic work! I’m very impressed with everything he’s done to assist my business! He knows exactly what he’s doing! He manages ads so well and I will definitely use him again in the future! 5 Stars for sure!",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r119",
                    "userName": "febzpena",
                    "content": "It was a pleasure to work with him. He works very well and very efficient. He has a lot of patience with teaching me and showing ms things and he is also communicates very well. 10/10 recommend.",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r120",
                    "userName": "anxietybathbomb",
                    "content": "Amazing work. Great communication. Above and beyond with all the questions I had. Stop reading reviews and just hire him.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4be538b53e19e57970f54e7350bdcfd7-1646673177494/bf0643c2-0534-4b21-bfde-a0bedf85a66f.png",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r121",
                    "userName": "mrbb1085",
                    "content": "Thank you for your service and assistance. Be well",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/234d5687b80b0a554a727a9026dc454b-1618086564424/b11ff367-3ef1-4aaa-ac44-2f30d03b6e02.jpg",
                    "stars": [5],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u107",
                "fullName": "graphexgalaxy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png"
            }
        },
        {
            "_id": "i108",
            "title": "I will provide monthly SEO service, on and off page optimization for google ranking",
            "price": 122.88,
            "avgGigRating": [],
            "owner": {
                "_id": "u120",
                "fullName": "jaylucy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/48b6c449a1b46cb2c9db97fc7cd612cc-1644490352565/3299dcc8-8cb3-45d5-9e46-72c4d50b6830.jpg",
            },
            "level": "Level 2 Seller",
            "daysToMake": 30,
            "description": {
                "aboutThisGig": "Complete Package for SEO, hands-off monthly SEO service with on-page and technical fixes and ongoing off-page optimization.\nAll the packages are monthly subscription-based, for less Low Competition Keywords, it may take about 2-3 months for the site to see measurable rank increase and 5-6 months or even longer for more competitive keywords.",
                "whyUs": "5-year Experience\nExpertise in Local Business SEO\nBack-links Building\nYoast SEO Special",
                "whatDoYouGet": "",
                "littleDetails": ["Off-Page Strategy", "Backlink Analysis", "3 Forums Engaged", "Competitor Backlink Analysis"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/169044896/original/345cf86dd1a4bd7d800cc0da8817cdcfc7e2a165/provide-monthly-seo-service-on-and-off-page-optimization-for-google-ranking.png", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/6c4de41f83b71f0fb3bd2a03811e10b2-1653532731/11111/provide-monthly-seo-service-on-and-off-page-optimization-for-google-ranking.JPG"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u108",
                "fullName": "hp_spikefli",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8b1b16dcc738965d716b2c27345fcfe7-1642471394066/66171d9a-52b4-456b-a26f-c142ba33913a.jpg"
            }
        },
        {
            "_id": "i109",
            "title": "I will write an SEO optimized travel blog post",
            "price": 352.94,
            "avgGigRating": [],
            "owner": {
                "_id": "u122",
                "fullName": "hayleyhutson",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6f43fcdade5ca0cf5dc2a19bd2c75122-1595186054929/372e22af-6325-4f4e-b947-7c7767e6cf0a.jpeg",
                "from": "United States",
                "memberSince": "Jul 2020",
                "avgResponseTime": "3 hour",
                "lastDelivery": "about 3 hour"
            },
            "level": "Level 2 Seller",
            "daysToMake": 5,
            "description": {
                "aboutThisGig": "Blogging is the key to optimizing your sales, identifying with your audience, and expanding your customer base. If it isn't already part of your brand's marketing strategy, the time to get on board is now",
                "whyUs": "I am a professional writer with a wealth of experience in the travel industry. My clients in this niche range from travel bloggers and travel agencies to travel accommodation platforms. As a writer who can adapt to your brand's style and target audience with ease, I am comfortable writing on any topic.",
                "whatDoYouGet": "Your brand voice brought to life\nCopyscape passable language that targets your specific audience\nCatchy, algorithm-friendly titles\nExpertly crafted travel content that captivates your readers\nOptimized formatting\nOriginal work, no outsourcing ever",
                "littleDetails": ["Topic Research", "References & Citations"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/166258129/original/bbe360071ee14bead92cccaca54858412fd689ef/write-a-post-for-your-travel-blog.jpg", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/166258129/original/55c722144fd89d7dfc7bd6c2513e421aa0a26fe7/write-a-post-for-your-travel-blog.png"],
            "category": "Digital Marketing",
            "reviews": [
                {
                    "id": "r121",
                    "userName": "pjd2019",
                    "content": "Hayley is a marketer's dream. She produced a fantastic blog that is both SEO and user friendly. Well worth the money, will use her services again 100%, thank you, Hayley!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ff59317470d8607a9c6e03cb5bcc87aa-784636891612079416.443886/A93FDA03-F831-489B-8A05-98623ADB39D2",
                    "stars": [5],
                    "userCountry": "United Kingdom"
                },
                {
                    "id": "r122",
                    "userName": "professorrose",
                    "content": "Hayley was professional from beginning to end. She asked for anything I wanted to incorporate, wrote an excellent blog post, and delivered on time. I can recommend her 100%!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c6de97063c2fa24741745b9049d51924-1651783073166/24c906d4-7ad8-4870-ae39-960a6c64b97e.png",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r123",
                    "userName": "nathaniellackey",
                    "content": "Haley did an excellent job producing high-quality content in a short period of time. Very pleased with the work she produced and would absolutely buy from her again.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/15510d4269b1a190dac5c774e634329e-1653510125638/7e2a4162-70dc-48a3-9b88-b897392d0138.JPG",
                    "stars": [5],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u109",
                "fullName": "dohyotriyono",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png"
            }
        },
        {
            "_id": "i110",
            "title": "I will professionally translate into brazilian portuguese",
            "price": 352.94,
            "avgGigRating": [],
            "owner": {
                "_id": "u125",
                "fullName": "luizakipper",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d0f1aa93510d94ecbbb75f189c5bc298-1553798809035/8558f3ac-ee2a-4e0f-b51e-e14984bc52f1.png",
                "from": "Brazil",
                "memberSince": "Mar 2019",
                "avgResponseTime": "4 hour",
                "lastDelivery": "2 weeks"
            },
            "level": "Level 2 Seller",
            "daysToMake": 2,
            "description": {
                "aboutThisGig": "I will swiftly and flawlessly translate your text from English into Brazilian Portuguese. Just hand me what you need translated, and let the magic happen!",
                "whyUs": "I am fully bilingual and have been a full-time, professional translator and linguist since 2010. My expertise has enabled me to work in many exciting, highly technical projects across a wide range of subjects over the years, including, for example, translating the Cancer Atlas for the American Cancer Society. Likewise, I also have extensive experience translating luxury marketing content, a task commanding a highly sophisticated, meticulous use of the language.",
                "whatDoYouGet": "",
                "littleDetails": ["Proofreading"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128166768/original/c4550494df54b72229a2e36ac268af544c7762ea/professionally-translate-into-brazilian-portuguese.png", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/87af27dafbe1caa894eed0574846841b-1615844760/img20210315_17510594/professionally-translate-into-brazilian-portuguese.pdf"],
            "category": "Digital Marketing",
            "reviews": [
                {
                    "id": "r124",
                    "userName": "andykattle",
                    "content": "Luiza is the best translator you can find at an affordable price. He work was flawless and we are happy we picked her from the sea of translators on Wiser. Her reviews clearly speak for her - she has no 1 star, 2 star or 3 star reviews at all.",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "Australia"
                },
                {
                    "id": "r125",
                    "userName": "jnismith2000",
                    "content": "Luzia is very professional. I needed her to translate a highly technical paragraph and she delivered in amazing time. I highly recommend you send her project details and hire her!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d48669eac8ec3b563a685e8bd949a701-1650869312636/0465790c-8906-40e7-9b61-d1ecc95b55d7.jpg",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r126",
                    "userName": "anamaldonado007",
                    "content": "Excellent work, ALWAYS!",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                }
            ],
            "likedByUsers": {
                "_id": "u110",
                "fullName": "hp_spikefli",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8b1b16dcc738965d716b2c27345fcfe7-1642471394066/66171d9a-52b4-456b-a26f-c142ba33913a.jpg"
            }

        },
        {
            "_id": "i111",
            "title": "I will manually translate english into russian or ukrainian",
            "price": 351.09,
            "avgGigRating": [],
            "owner": {
                "_id": "u129",
                "fullName": "petrolviv17",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8e13af06edee199ac904fecdd9006295-1625901852731/4f96c2be-b384-416b-aeec-baea8820c59b.jpg",
                "from": "Ukraine",
                "memberSince": "May 2016",
                "avgResponseTime": "1 hour",
                "lastDelivery": "1 day"
            },
            "level": "Top Rated Seller",
            "daysToMake": [3],
            "description": {
                "aboutThisGig": "***CUSTOM OFFERS AVAILABLE***\nPLEASE CONTACT ME FOR SMALLER OR LARGER ORDERS\nHello and welcome to my PRO translation gig!",
                "whyUs": "I'm Petro, I was born and grew up in Lviv, Ukraine. I'd be glad to translate any content from English to Russian or Ukrainian and vice versa!/nMy native languages are Ukrainian and Russian.\nI'm specializing in translation & localization of software, games, web-sites, legal, technical, creative content and marketing materials. I also have vast experience in translating cryprocurrency materials, business documents, manuals and religious literature.",
                "whatDoYouGet": "",
                "littleDetails": ["Proofreading", "Document Formatting", "Language Style Guide"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/41561210/original/6652a9caa2b92c0fbb3abff8856e22438fb435cb/translation-and-proofreading-of-texts.jpg", "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7ee632950f829480518152a76dacc72f-1565266510/Screenshot_225/translation-and-proofreading-of-texts.png"],
            "category": "Writing & Translation",
            "reviews": [
                {
                    "id": "r127",
                    "userName": "elkmtn121858",
                    "content": "He translated my book in two weeks! I was happy with how well he translated from English into Ukrainian. He was prompt in his responses as I described my project. I would certainly use his services again!",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a952786352f1048c93f01380f4b0a903-1198385981644011028261/JPEG_20220204_224347_645995772993095182.jpg",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r128",
                    "userName": "wenswj",
                    "content": "Great service! We haven't got the time to verify the details of the translation but the speed and quality so far are extraordinary. I guess we'll just have to trust the talent of this amazing translator :) Thank you so much, Petro! Take care!!",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United States"
                },
                {
                    "id": "r129",
                    "userName": "bonolingo",
                    "content": "Petrolviv17 did an amazing job with translating into Ukrainian and proofreading Russian! He is obviously skilled, and also have a great attention to detail. Will happily work with Petrolviv17 again! Recommended! AAA+",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "Norway"
                }
            ],
            "likedByUsers": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg"
            }

        },
        {
            "_id": "i112",
            "title": "I will animate your logo beautifully",
            "price": 1264,
            "avgGigRating": [],
            "owner": {
                "_id": "u132",
                "fullName": "cabalastudio711",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/cb40bd3fe35db5275ab38dddb4c004ef-1637462553618/b8c4a04a-29f9-4090-bdf9-565987edc235.jpg",
                "from": "United States",
                "memberSince": "Mar 2015",
                "avgResponseTime": "1 hour",
                "lastDelivery": "1 day"
            },
            "level": "Level 1 Seller",
            "daysToMake": 10,
            "description": {
                "aboutThisGig": "I will create amazing custom animation of your Logos that will make your company or your brand really stand out! I can add music (library or original), sound FX, Visual FX, and high quality animation characters.\nPlease contact me before placing order.",
                "whyUs": "Drawing has always been my passion. I have over 30 years of experience in illustration, 2D animation, graphic design and animation direction.",
                "whatDoYouGet": "",
                "littleDetails": ["Logo Transparency", "Background Musi", "Custom Colors"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/104290777/original/a5dd0694b448e3568a97c181d2711064b10d0894/create-an-amazing-animated-logo-for-you.jpg", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/104290777/original/6abe077f3645bbae9d600b0a10357c727384f2e0/create-an-amazing-animated-logo-for-you.jpg"],
            "category": "Video & Animation",
            "reviews": [
                {
                    "id": "r130",
                    "userName": "zacaz123",
                    "content": "Awesome guy.",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "Australia"
                },
                {
                    "id": "r131",
                    "userName": "resolutemedia",
                    "content": "Instructions taken, good turnaround, and very good responsiveness to feedback. Exemplary!",
                    "userImage": "",
                    "stars": 5,
                    "userCountry": "United States"
                },
                {
                    "id": "r132",
                    "userName": "jlnyc2121",
                    "content": "Fast communication, received feedback well and delivered a beautiful product. Highly recommended.",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "Norway"
                }
            ],
            "likedByUsers": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg"
            }

        },
        {
            "_id": "i113",
            "title": "I will produce a professional edm ghost track for a dj",
            "price": 684,
            "avgGigRating": [],
            "owner": {
                "_id": "u133",
                "fullName": "charlieatom",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0d274dc3deccc996379dc8f5db465b7a-1596651738065/08b56b6c-a858-4439-baa6-fec24751f086.jpg",
                "from": "Mexico",
                "memberSince": "Aug 2020",
                "avgResponseTime": "1 hour",
                "lastDelivery": "1 day"
            },
            "level": "Level 2 Seller",
            "daysToMake": 4,
            "description": {
                "aboutThisGig": "PERSONALIZED TRACKS\nFor today's records to be successful you need a loud mix, but also a very catchy clever melody that sticks to your mind. That's what I do!",
                "whyUs": "I have more than 20 years of experience and more than 2,500,000 plays on Spotify, also been featured in Beatport and Apple Music top charts; and played in big events like the EDC.\nI can make a personalized ghost track of the genre you want. You will keep 100% of the rights and it will be completely confidential/anonymous.",
                "whatDoYouGet": "",
                "littleDetails": ["4 Instruments", "Commercial Use", "Separated Tracks / Stems"]
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220227/Presskit%20EN-1%20copia_zmtnxo.jpg"],
            "category": "Music & Audio",
            "reviews": [
                {
                    "id": "r134",
                    "userName": "mikeglyphix",
                    "content": "First time customer and already looking forward to the next song project. Charlie is very quick and responsive. His service in providing what you need is worth every penny. Thank you Charlie. I look forward to the next one.",
                    "userImage": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/12d7f0b7f2cbcfe2da2dfcbbf466fb66-757326941611900172.336843/E69164A7-515B-4A8B-891D-080307D58977",
                    "stars": [5],
                    "userCountry": "Australia"
                },
                {
                    "id": "r135",
                    "userName": "davidcunning926",
                    "content": "Charlie is outstanding! Such a professional. Works quickly and take ideas very well. This is my 2nd project with Charlie and I can't wait to work with him again.",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "United Kingdom"
                },
                {
                    "id": "r136",
                    "userName": "psybird",
                    "content": "Awesome delivery and production. No matter the style you 'challenge' Charlie with, he will always deliver great results. Very happy!",
                    "userImage": "",
                    "stars": [5],
                    "userCountry": "Germany"
                }
            ],
            "likedByUsers": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg"
            }

        }
    ]

    return gigs
}