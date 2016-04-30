var bookInf = {};
 function reflashBookInf (json) {
    // if not found this book
    if (json.msg && json.msg == 'book_not_found') {
	alert("error");
        return;
    } else {
        // reflash the inf on web
        var bookInfNode = document.getElementsByClassName('book-inf')[0];

       bookInfNode.getElementsByClassName('cover')[0].setAttribute("src", json.images.large);
        bookInfNode.getElementsByClassName('get-more')[0].setAttribute("href", json.alt);

        bookInfNode.getElementsByClassName('title')[0].innerText
            = json.title;
        bookInfNode.getElementsByClassName('author')[0].innerText
            = json.author[0];
        bookInfNode.getElementsByClassName('publisher')[0].innerText
            = json.publisher;
        bookInfNode.getElementsByClassName('publish-time')[0].innerText
            = json.pubdate;
        bookInfNode.getElementsByClassName('isbn')[0].innerText
            = json.isbn13 || json.isbn10;
        
        // store the book inf
  /*      bookInf.isbn      = json.isbn13;
        bookInf.title     = json.title;
        bookInf.alt       = json.alt;
        bookInf.author    = json.author;
        bookInf.publisher = json.publisher;
        bookInf.pubDate   = json.pubdate;
        bookInf.image     = json.images.large;
        bookInf.tags      = json.tags;*/

   //     bookInf.donor = SubCookieUtil.get("identify", "userId");
    }
    
}
 var isbnBox = document.getElementById('search-box');
        // lister to Enter when focus on search-box 
         function donateSubmit () {


        var isbnCode =document.getElementById('search-box').value;

            var url = 'https://api.douban.com/v2/book/isbn/' + isbnCode;

            // CROS
            $.ajax({
                url: url,
                type: 'GET',
                async: true,
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function (json) {
                    reflashBookInf(json)
                },
                error: function () {
                    alert('fail');
                }
            });
        }
    
	// click submit


   
	
