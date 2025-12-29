$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(".ratings_stars").click(function() {
        
        console.log('Star clicked!'); // Debug

        var checkLogin = "{{ Auth::check() }}"
        var rate = $(this).find("input").val();
        var blogId = $(".rating-area").data("blog-id");
        var url = $(".rating-area").data("url");

        console.log('Login check:', checkLogin); // Debug
        console.log('Rate:', rate); // Debug
        console.log('Blog ID:', blogId); // Debug
        console.log('URL:', url); // Debug
        
        if(checkLogin){
            $.ajax({
                url: url,
                type: "POST",
                data: {
                    rate: rate,
                    blog_id: blogId,
                },
                success: function(data){
                    console.log(data);
                    $(".rate-np").text(data.average);   // cập nhật điểm trung bình
                    $(".rate-count").text(data.count);  // cập nhật số lượt vote
                }
            });
                        
            // hiệu ứng chọn sao
            $('.ratings_stars').removeClass('ratings_over');
            $(this).prevAll().addBack().addClass('ratings_over');

        } else {
            alert("Vui lòng login để đánh giá");
        }
    });
});
