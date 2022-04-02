$(".resume-hidden-content ul").each(function () {
    var liCount = $(this).children("li").length;
    if (liCount > 2) {
      $(this).next(".more").addClass("showMe");
    }
  });
  
  $(".more").click(function () {
    $(this).prev("ul").find("li").toggleClass("showList");
    $(this).text(this.innerHTML.includes("more") ? "Read Less" : "Read More");
  });