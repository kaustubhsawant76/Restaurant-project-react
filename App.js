import React from "react";
import ReactDOM from "react-dom/client";
import myImage from "./download (19).png";



const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src={myImage} height="100px" width="100px"/>    {/*img can also uploaded by <img src=""/>  src=link of the image */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const RestaurantCard=(props)=>{
    const{resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h5>{avgRating} stars</h5>
         <h5>{deliveryTime} minutes</h5>
        </div>
    );
}
const resList=[{
    "info": {
      "id": "898222",
      "name": "Iyer Idly",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
      "locality": "Adugodi",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "247814",
      "avgRatingString": "4.7",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 11:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/iyer-idly-adugodi-koramangala-bangalore-898222",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "201224",
      "name": "Asha Tiffins",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "locality": "HSR Layout",
      "areaName": "HSR Layout",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "236243",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 15:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/asha-tiffins-hsr-layout-bangalore-201224",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "273752",
      "name": "Brahmins Tiffin Centre",
      "cloudinaryImageId": "qmwj1vbbjljfp2saegsk",
      "locality": "New Thipasandra",
      "areaName": "Indiranagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "20078",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 11:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/brahmins-tiffin-centre-new-thipasandra-indiranagar-bangalore-273752",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "269402",
      "name": "The Tea Brewery",
      "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Beverages",
        "Snacks",
        "Bakery",
        "Desserts",
        "Fast Food",
        "Chaat",
        "Healthy Food"
      ],
      "avgRating": 4.6,
      "parentId": "21147",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-05 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹95"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-tea-brewery-1st-block-koramangala-bangalore-269402",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "325",
      "name": "Sree Krishna Kafe",
      "cloudinaryImageId": "us72sjlfo9opsmi8fi6u",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹137 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.6,
      "parentId": "898",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sree-krishna-kafe-koramangala-bangalore-325",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "209207",
      "name": "Prezzed Juicery",
      "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Juices",
        "Healthy Food"
      ],
      "avgRating": 4.6,
      "parentId": "21231",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/prezzed-juicery-1st-block-koramangala-bangalore-209207",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "64285",
      "name": "Cafe Here & Now",
      "cloudinaryImageId": "w4r7cglplcqklr10etek",
      "locality": "HSR Layout",
      "areaName": "HSR Layout",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Continental",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "11526",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-here-and-now-hsr-layout-bangalore-64285",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "788408",
      "name": "Iyengar'S Delicacies",
      "cloudinaryImageId": "f1bc9ddf53de574cdc35ab2f717df234",
      "locality": "Old Race Course Rd",
      "areaName": "Central Bangalore",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "468605",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-04 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-978086f6-64d5-4279-bc5c-1c71bf234b2a"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/iyengars-delicacies-old-race-course-rd-central-bangalore-bangalore-788408",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }]

const Body=()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="restaurant-container">
             {resList.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
             
            </div>
        </div>

    );
}



const AppLayout=()=>{
    return (
    <div className="app">
     <Header/>
     <Body/>
    </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


//css can also be passed inline like eg <div style={}></div>  where {} sould be js object and it that you write css
//passing an argument to a function is called as a prop
//when you want to pass dynamically data to component yoy pass it as a prop
//config driven UI=the ui is driven by data ie config and the config comes from backend that is why we see different data in differrent locations
//whenever we use map function it is very necessary to use keys
//index should be not used as keys
//in worst case if there is no id then you can use index as keys as last option