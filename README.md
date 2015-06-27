# Flickr image diplay using Bootstrap and Interaction with the other Server
The Node server interacts with the Frontend and the other web server which is responsible for interacting with the database and with the flickr api.

On hitting the URL of this web server, it gets the json response from the other server which sends values in this format :
[
    {
        "Link": "https://farm1.staticflickr.com/447/19123029306_5ce9177df3.jpg",
        "Upvote": 0,
        "Downvote": 0
    },
    {
        "Link": "https://farm1.staticflickr.com/545/18961068910_f1edd023ed.jpg",
        "Upvote": 0,
        "Downvote": 0
    },
    {
        "Link": "https://farm1.staticflickr.com/283/19152681626_30a776692f.jpg",
        "Upvote": 0,
        "Downvote": 0
    },
    {
        "Link": "https://farm1.staticflickr.com/439/19182361001_e18fd3b92a.jpg",
        "Upvote": 0,
        "Downvote": 0
    }
]

On receiving the response it is stored in a variable and using the scriptlets its being displayed in thumbnails using Bootstrap.

If user clicks the upvote then http://127.0.0.1:8080/UpVote?imagelink=---link---- is triggered which informs the other server to increase the upvote of the specific image by 1.

If user clicks the downvote then http://127.0.0.1:8080/DownVote?imagelink=---link---- is triggered which informs the other server to increase the downvote of the specific image by 1.

Then again the updated response is received from the other server and displayed
