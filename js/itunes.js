var iTunesContent = {
    "feed": {
        "author": {
            "name": {
                "label": "iTunes Store"
            }
            ,
            "uri": {
                "label": "http://www.apple.com/itunes/"
            }
        }
        ,
        "entry": {
            "im:name": {
                "label": "Harry Styles"
            }
            ,
            "im:image":[ {
                "label":"http://is3.mzstatic.com/image/thumb/Music122/v4/f8/e3/d4/f8e3d40b-aee6-808d-7554-15879617581f/886446451978.jpg/55x55bb-85.jpg",
                "attributes": {
                    "height": "55"
                }
            }
            ,
            {
                "label":"http://is4.mzstatic.com/image/thumb/Music122/v4/f8/e3/d4/f8e3d40b-aee6-808d-7554-15879617581f/886446451978.jpg/60x60bb-85.jpg",
                "attributes": {
                    "height": "60"
                }
            }
            ,
            {
                "label":"http://is4.mzstatic.com/image/thumb/Music122/v4/f8/e3/d4/f8e3d40b-aee6-808d-7554-15879617581f/886446451978.jpg/170x170bb-85.jpg",
                "attributes": {
                    "height": "170"
                }
            }
            ],
            "im:itemCount": {
                "label": "10"
            }
            ,
            "im:price": {
                "label":"$9.99",
                "attributes": {
                    "amount": "9.99000", "currency": "USD"
                }
            }
            ,
            "im:contentType": {
                "im:contentType": {
                    "attributes": {
                        "term": "Album", "label": "Album"
                    }
                }
                ,
                "attributes": {
                    "term": "Music", "label": "Music"
                }
            }
            ,
            "rights": {
                "label": "℗ 2017 Erskine Records Limited, under exclusive license to Columbia Records, a Division of Sony Music Entertainment"
            }
            ,
            "title": {
                "label": "Harry Styles - Harry Styles"
            }
            ,
            "link": {
                "attributes": {
                    "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/us/album/harry-styles/id1226034336?uo=2"
                }
            }
            ,
            "id": {
                "label":"https://itunes.apple.com/us/album/harry-styles/id1226034336?uo=2",
                "attributes": {
                    "im:id": "1226034336"
                }
            }
            ,
            "im:artist": {
                "label":"Harry Styles",
                "attributes": {
                    "href": "https://itunes.apple.com/us/artist/harry-styles/id471260289?uo=2"
                }
            }
            ,
            "category": {
                "attributes": {
                    "im:id": "14", "term": "Pop", "scheme": "https://itunes.apple.com/us/genre/music-pop/id14?uo=2", "label": "Pop"
                }
            }
            ,
            "im:releaseDate": {
                "label":"2017-05-12T00:00:00-07:00",
                "attributes": {
                    "label": "May 12, 2017"
                }
            }
        }
        ,
        "updated": {
            "label": "2017-05-23T18:10:34-07:00"
        }
        ,
        "rights": {
            "label": "Copyright 2008 Apple Inc."
        }
        ,
        "title": {
            "label": "iTunes Store: Top Albums"
        }
        ,
        "icon": {
            "label": "http://itunes.apple.com/favicon.ico"
        }
        ,
        "link":[ {
            "attributes": {
                "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11"
            }
        }
        ,
        {
            "attributes": {
                "rel": "self", "href": "https://itunes.apple.com/us/rss/topalbums/limit=1/json"
            }
        }
        ],
        "id": {
            "label": "https://itunes.apple.com/us/rss/topalbums/limit=1/json"
        }
    }
}
document.getElementById("pageTitle").innerHTML += iTunesContent.feed.author.name.label ; 
document.getElementById("uriTitle").innerHTML += iTunesContent.feed.author.uri.label ; 





document.getElementById("lastUpdated").innerHTML += iTunesContent.feed.updated.label ; 
document.getElementById("copyright").innerHTML += iTunesContent.feed.rights.label ; 

document.getElementById("titleTitle").innerHTML += iTunesContent.feed.title.label ; 
document.getElementById("icon").innerHTML += iTunesContent.feed.icon.label ; 

document.getElementById("link").innerHTML += iTunesContent.feed.link.attributes ; 
document.getElementById("theid").innerHTML += iTunesContent.feed.id.label ; 

//document.getElementById).innerHTML += myJSON.cars["car3"];