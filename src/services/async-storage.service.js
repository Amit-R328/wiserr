
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}



function query(entityType, delay = 600) {
    var entities = JSON.parse(localStorage.getItem(entityType))
    if(!entities){
        entities = _createGigs()
        _save(entityType, entities)
    }

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject('OOOOPs')
            resolve(entities)
        }, delay)   
    })
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
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
            newEntities = newEntities.map(entity => ({...entity, _id: _makeId()}))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _createGigs(){
    const gigs = [
        {
            "_id": "i101",
            "title": "I will create animated whiteboard explainer video ad",
            "price": 52.94,
            "owner": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg",
                "rate": 4.9
            },
            "level": "Level 2 Seller",
            "daysToMake": 3,
            "description": {
                "aboutThisGig":"Hello If you want to create a professional WHITEBOARD EXPLAINER VIDEO AD and engage your audience, then you are at the right place. It is recommended to contact through inbox first then place order.",
                    "whyUs": "",
                "whatDoYouGet": "CUSTOM DRAWINGS \nWill cost extra depending on drawing, so please make sure the price by coming in inbox to get quote.\n• ​COLORING \n Will cost extra depending on the project type and type of coloring. \n• ​Editing script  after placing the order will cost extra.\n IF YOU HAVE ANY QUESTION, FEEL FREE TO CONTACT ME.\n For Whiteboard Explainer Samples please follow the link:\nhttps://www.youtube.com/channel/UCm-0NlyD3Lb9IIj_UPIvCtQ/videos"
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/videos/so_44.79414,t_main1,q_auto,f_auto/mwkigsyj9hzzmphy3ijx/exclusive-whiteboard-animation-in-24-hours.png","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/102260755/original/064e14c412a2081407c2cc44459621357a3223e4/exclusive-whiteboard-animation-in-24-hours.png"],
            "category": "Graphics & Design",
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
            "owner": {
                "_id": "u107",
                "fullName": "graphexgalaxy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
                "rate": 4.8
            },
            "level": "Level 2 Seller",
            "daysToMake": 1,
            "description": {
                "aboutThisGig":"Hi there ! \nI am a Professional Graphic Designer with 6+ years of experience in Graphic Industry,\nexpertise as Logo Maker, You'll get creative & unique logo design for your business.",
                "whyUs": "",
                "whatDoYouGet": "Highly Professional, UNIQUE & High Quality designs\nUNLIMITED Revisions until you are 100% satisfied\n100% original & unique vector design from Adobe Illustrator\nVector Source Files (scalable without any quality loss) (AI, EPS,PSD, PDF) for the final design\nPROFESSIONAL Communication & Outstanding Customer Support\nGuaranteed High Quality work\nI am not Doing Cartoon, Caricature & Custom Character Logos.\nIf you have any question,\nFeel free to Contact Me I'll be happy to help.Place Your Order Without Any Hesitation. I am here to put your vision into life."
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/179341816/original/cf07484c9c4e49c027263b3bac8ed0e60c092b05/do-unique-and-beautiful-retro-vintage-design.jpg","https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/2cb51b6d6893894e3f61356cf4eb957e-1632477605/01/do-unique-and-beautiful-retro-vintage-design.jpg"],
            "category": "Graphics & Design",
            "likedByUsers": {
                "_id": "u102",
                "fullName": "richarddavis438",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg"
            }
        },
        {
            "_id": "i103",
            "title": "I will draw cute and unique nft mascot character",
            "price": 52.94,
            "owner": {
                "_id": "u109",
                "fullName": "dohyotriyono",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c89fc1c96e5888bc8260636b7de4b11-1602777446248/4bc07449-9725-41de-aefb-fb96f6f60a35.png",
                "rate": 5
            },
            "level": "Level 2 Seller",
            "daysToMake": 2,
            "description": {
                "aboutThisGig":"PLEASE MESSAGE ME BEFORE ORDERING\nI want understand exactly what you want to be designed before I receive your order. THANK YOU!",
                "whyUs": "",
                "whatDoYouGet": "unique and awesome illustration, high quality, JPG, PNG, AI, EPS, or SVG format files."
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/230928287/original/64b7c1a70bffac0b67a812826d718ac1b34f4456/draw-cute-and-unique-nft-mascot-character.jpg","https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/821ce8ff174652ff4a6c4c10c18d9a7d-1647483667/swim/draw-cute-and-unique-nft-mascot-character.jpg"],
            "category": "Graphics & Design",
            "likedByUsers": {
                "_id": "u110",
                "fullName": "flzzeth",
                "imgUrl": ""
            }
        },
        {
            "_id": "i104",
            "title": "I will do facebook advertising, marketing, fb ads,instagram ads campaign,fb advertising",
            "price": 70.59,
            "owner": {
                "_id": "u111",
                "fullName": "gad_by_miraz_pro",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7a85510d72ccc2941cbe87ac3dd3a9e4-1634745207853/f9896223-7a6d-42b6-8711-d60922c3b6ab.jpg",
                "rate": 4.9
            },
            "level": "Level 1 Seller",
            "daysToMake": 2,
            "description": {
                "aboutThisGig":"Welcome to my gigs\nHave you been wondering how you could set up a successful Facebook ad campaign?\nWell, you have come to the right place!\nAre You Running Facebook Ads For Your Shopify Dropshipping Business? Struggling To Get Link Clicks, Potential Leads Or Purchases? Then, You Came To The Right Person!\nWhich You Are Finding If That You Are Unable To Get It Then Get In Touch With Me.i Will Solve Your Issues Friendly. If You Have An Important Job I Will Deliver You Rapid Support.\nTrusted Seller - Satisfaction Guaranteed",
                "whyUs": "",
                "whatDoYouGet": "Create Fb ads campaign & Instagram Ads\nResearch, Plan & Strategy\nCreate & Setup FB Business page\nSetup FB Pixel and Event\nDomain Verify and Setup ISO14 Event\nAudience Research with Demographic, Interest & Behaviors\nCreate custom and Lookalike Audience\nResponsive Ad text with a description\nAds management based on Package\nIf you have any questions, you can message me when you will be free."      },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/219531995/original/50ec1615424683f6d83c3d59de06332f1b0cbdfa/do-facebook-advertising-marketing-fb-ads-instagram-ads-campaign-fb-advertising.jpg","https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/04fcc41f750b98d1e9097d6bec818197-1646886003/Screenshot_24/do-facebook-advertising-marketing-fb-ads-instagram-ads-campaign-fb-advertising.jpg"],        
            "category": "Graphics & Design",
            "likedByUsers": {
                "_id": "u112",
                "fullName": "jazzimanij",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f3d64bc7579f8530a0d79800076f5a51-1645752630962/0bfe5d3b-b3af-458c-8671-8d34cc456617.jpg"
            }
        },
        {
            "_id": "i105",
            "title": "I will be your pro social media content creator",
            "price": 352.94,
            "owner": {
                "_id": "u113",
                "fullName": "shirley_esid",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b4231d6752099ce2619003ed164b72e2-1646950968199/c6714639-3d34-4a5a-9739-3a72597ae4ec.JPG",
                "rate": 4.9
            },
            "level": "Level 2 Seller",
            "daysToMake": 10,
            "description": {
                "category": "Digital Marketing",
                "aboutThisGig":"About This Gig\nWelcome to the good side of Social Media Marketing where we prioritise performance, know our target audience like our best friend and go above and beyond to create scroll-stopping designs that tell fantastic stories! ",
                "whyUs": "I'm Shirley, a Marketing Director, Content Strategist & Creative Designer. I've been in this industry for over 5 years and have assisted over 150 brands with their social needs just this year! (Feel free to ask me for my portfolio!)",
                "whatDoYouGet": "Branded content (All industries: NFT's, Beauty, Tech, Ecommerce, Agencies... )\nStories\nlinkedIn & twitter posts\nCarousels\nInspirational & Educational posts\nMemes\nMuch more\nWether you need posts designed in a specific style or are in need of a complete overhaul, I've got you! Besides creating rocking content, I will also include a list of hashtags that I would benefit your brand with every order placed."
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/208249355/original/046f201b32253b46140785a31d34ed5474f25e4a/your-pro-social-media-content-creator.png","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/208249355/original/2b985f0b41e4d6d8cb6366d9e5f62234d28a9247/your-pro-social-media-content-creator.png"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u101",
                "fullName": "gul071",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"        
            }
        },
        {
            "_id": "i106",
            "title": "I will do organic spotify promotion by social media marketing",
            "price": 88.24,
            "owner": {
                "_id": "u116",
                "fullName": "roslyn_johnson",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b6f6830b0394f46092fc7ace020c511d-985758451632988163077/JPEG_20210930_134922_-1807988561.jpg",
                "rate": 4.9
            },
            "level": "Level 2 Seller",
            "daysToMake": 10,
            "description": {
                "category": "Digital Marketing",
                "aboutThisGig":"Hello There,\nPRO SPOTIFY MUSIC PROMO Service is here in very cheapest price!\nI will utilize my MANUAL ranking strategy and white-hat SEO tactics to boost your music daily rankings, ensuring your music ranks high for YOUR targeted keywords.",
                "whyUs": "24/7 Premium Support\nOrganic Results",
                "whatDoYouGet": "I will manually create high quality profile backlinks that will increase your website ranking. I always do backlinks to high DA, PA sites. I follow the SEO white hat rules when creating backlinks. So your site just starts to rank. I hope you are well. Thank you so much for your precious time."
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/224200641/original/0c155cff6030c145737d7d0026df65322a23d116/do-organic-spotify-promotion-by-social-media-marketing.jpg","https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a322d572e55e19d755fb6971fbaebbb1-1650875569/1650875460752_delivery%20report/do-organic-spotify-promotion-by-social-media-marketing.jpg"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u110",
                "fullName": "hp_spikefli",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8b1b16dcc738965d716b2c27345fcfe7-1642471394066/66171d9a-52b4-456b-a26f-c142ba33913a.jpg"
            }
        },
        {
            "_id": "i107",
            "title": "I will setup and optimize tiktok ads campaign, tik tok ads, tiktok advertising",
            "price": 141.18,
            "owner": {
                "_id": "u118",
                "fullName": "mahbuburrahm204",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8038e14b365769c5de4ab798e6346b7b-1629650732214/f75468a6-3514-47c0-b493-e021fe608344.png",
                "rate": 4.9
            },
            "level": "Level 2 Seller",
            "daysToMake": 3,
            "description": {
                "category": "Digital Marketing",
                "aboutThisGig":"Promote Your Dropshipping E-commerce Store At Your Fingertips.",
                "whyUs": "24/7 Premium Support",
                "whatDoYouGet": "Setup Tik Tok Pixel\nMake an Eye-catching Video with Trending Music for Each Campaign (Free)\nSetup Awareness, Consideration, and Conversions Tik Tok Ads Campaigns\nResearch Targeted Audience for your Business that will Generate Sales\nTargeted Multiple Ad set\nLow CPM, CPA, and High Conversion Rate\nOptimize Daily Ads Budget\nSend Daily Campaign Analytics Report"
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/228317272/original/2dd437957f3f29fbe89b9dd79705517cc801a4f7/setup-and-optimize-tiktok-ads-campaign-tik-tok-ads-tiktok-advertising.png","https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e84544f8b59defd0bb389efba28b397e-1650947237/Tiktok%20ads%20(1)/setup-and-optimize-tiktok-ads-campaign-tik-tok-ads-tiktok-advertising.png"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u103",
                "fullName": "courtney lasch",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/60317801/original/13051499_10153433741651123_6578396117746809005_n.jpg"
                }
        },
        {
            "_id": "i108",
            "title": "I will do off page diversified backlinks SEO service with high da link building",
            "price": 176.47,
            "owner": {
                "_id": "u120",
                "fullName": "jaylucy",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/48b6c449a1b46cb2c9db97fc7cd612cc-1644490352565/3299dcc8-8cb3-45d5-9e46-72c4d50b6830.jpg",
                "rate": 5
            },
            "level": "Top Rated Seller",
            "daysToMake": 7,
            "description": {
                "category": "Digital Marketing",
                "aboutThisGig":"We are JAY & LUCY, serving successfully as Google Certified SEO Consultants & Algorithm Experts since more than 10 years & we genuinely believe in Transparency, Quality & PRODUCING RESULTS!",
                "whyUs": "Because, we don’t settle for anything less than the First Place! ",
                "whatDoYouGet": "Diversified Backlinks from High DA Sites with Niche relevant content\nMixed in Natural Way: Dofollow & Nofollow\nEfficient Link building Strategy: Built in Multi-Tiered Structure-Tier 1 & Tier 2\nMaintained Anchor Diversity – Branded, Naked, Generic, LSI, Partial Match & Exact Match Anchors\nINDEXING: Indexed in Drip Feed for average of 10-30 Days through Multiple Indexers\nWE WILL TRACK THE RANKING KEEP YOU UPDATED CONSTANTLY"
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/171968234/original/3f1898cf2fe7015e66776b23f5a1cca405342dcc/do-alpha-gods-seo-package-to-explode-your-ranking.jpg","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/171968234/original/0a30487e402f737b92e2b917bedc6e2e11d65f40/do-alpha-gods-seo-package-to-explode-your-ranking.jpg"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u112",
                "fullName": "febzpena",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/892904e84bbdb477bd10dc8aefb8c40b-1639538948592/326b15fc-dcf7-4fc7-99a5-14f158251575.jpg"
                }
        },
        {
            "_id": "i109",
            "title": "I will write an SEO optimized travel blog post",
            "price": 352.94,
            "owner": {
                "_id": "u122",
                "fullName": "hayleyhutson",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6f43fcdade5ca0cf5dc2a19bd2c75122-1595186054929/372e22af-6325-4f4e-b947-7c7767e6cf0a.jpeg",
                "rate": 5
            },
            "level": "Level 2 Seller",
            "daysToMake": 5,
            "description": {
                "category": "Digital Marketing",
                "aboutThisGig":"Blogging is the key to optimizing your sales, identifying with your audience, and expanding your customer base. If it isn't already part of your brand's marketing strategy, the time to get on board is now",
                "whyUs": " ",
                "whatDoYouGet": "Your brand voice brought to life\nCopyscape passable language that targets your specific audience\nCatchy, algorithm-friendly titles\nExpertly crafted travel content that captivates your readers\nOptimized formatting\nOriginal work, no outsourcing ever"
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/166258129/original/bbe360071ee14bead92cccaca54858412fd689ef/write-a-post-for-your-travel-blog.jpg","https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/166258129/original/55c722144fd89d7dfc7bd6c2513e421aa0a26fe7/write-a-post-for-your-travel-blog.png"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u123",
                "fullName": "pjd2019",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ff59317470d8607a9c6e03cb5bcc87aa-784636891612079416.443886/A93FDA03-F831-489B-8A05-98623ADB39D2"
                }
        },
        {
            "_id": "i110",
            "title": "I will professionally translate into brazilian portuguese",
            "price": 352.94,
            "owner": {
                "_id": "u125",
                "fullName": "luizakipper",
                "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d0f1aa93510d94ecbbb75f189c5bc298-1553798809035/8558f3ac-ee2a-4e0f-b51e-e14984bc52f1.png",
                "rate": 5
            },
            "level": "Level 2 Seller",
            "daysToMake": 2,
            "description": {
                "category": "Writing & Translation",
                "aboutThisGig":"I will swiftly and flawlessly translate your text from English into Brazilian Portuguese. Just hand me what you need translated, and let the magic happen!",
                "whyUs": "I am fully bilingual and have been a full-time, professional translator and linguist since 2010. My expertise has enabled me to work in many exciting, highly technical projects across a wide range of subjects over the years, including, for example, translating the Cancer Atlas for the American Cancer Society. Likewise, I also have extensive experience translating luxury marketing content, a task commanding a highly sophisticated, meticulous use of the language.",
                "whatDoYouGet": ""
            },
            "imgUrl": ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/128166768/original/c4550494df54b72229a2e36ac268af544c7762ea/professionally-translate-into-brazilian-portuguese.png","https://fiverr-res.cloudinary.com/images/t_smartwm/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/87af27dafbe1caa894eed0574846841b-1615844760/img20210315_17510594/professionally-translate-into-brazilian-portuguese.pdf"],
            "category": "Digital Marketing",
            "likedByUsers": {
                "_id": "u126",
                "fullName": "jnismith2000",
                "imgUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1b09c5e9e6a2068b2e52982392410de9-1505051459868/a8ccb197-f0ee-4315-9f9b-c8ff5277b754.JPG"
                }
        }
    ]
       
    return gigs  
}