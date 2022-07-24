let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];
let photos = [];
$(".liked-photo").append("<img src=" + mostPopularPhotos[0] + ">");

$(".submit").click(function() {
    let photo = $(".textbox").val();
    console.log(photos);
    $(".posts").empty();
    photos.push(photo);
    console.log(photos);
    for (let posts of photos) {
        $(".posts").append("<img src=" + posts + ">");
    }
    let num = photos.length;
    if (num > 3) {
        $(".message").append("<p>" + "Congrats, you are a Silver Level user!" + "</p>");
    } else if (num < 5) {
        $(".message").append("<p>" + "Congrats, you are a Gold Level user!" + "</p>");
    } else if (num > 5) {
        $(".message").append("<p>" + "Congrats, you are a Platinum Level user!" + "</p>");
    }

});

$(".commentbutton").click(function() {
           
   let comment= $(".commentSection").val();
    console.log(comment);
    $(".commentDisplay").append("<p>"+comment+"</p>");
});