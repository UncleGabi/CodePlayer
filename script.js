
$("button").click(function(){

  let id = $(this).attr("id")+"Box";                       
  let count = $("#code-area .codeBox:visible").length -1;   // No. of visible boxes
  let sectionLen = $("#code-area").width() / count + "px";  // equalizes the boxes' width

  // Changes the colors of the buttons depending on the visibility of their boxes
  if ($(`#${id}`).is(":hidden")) {

    $(this).css("background", "white");

  } else {

    $(this).css("background", "#DDD");

  }

  if ($("#outputBox").is(":visible")) {

    $("#output").css("background", "lightcyan");

  }

  // don't let all the sections to be hidden
  if ($("#code-area .codeBox:visible").length > 1) {

    $("#code-area .codeBox").each(function(index, item) {

      $(this).css("width", sectionLen);

    })

    $(`#${id}`).toggle();

  } else {

    $("#code-area .codeBox").each(function(index, item) {

      $(id).css("width", sectionLen);

    })

    $(`#${id}`).show();

  }
});


$(".codeSection").keyup(function() {

  let htmlCode = $("#htmlSection").val();
  let cssCode = $("#cssSection").val();
  let jsCode = $("#javascriptSection").val();

  $("iframe").contents().find("body").html('<style>' + cssCode + '</style>' + htmlCode);
  let script = `<script type="text/javascript">${jsCode}</script>`;
  $('body').contents().find('iframe').append(script);
  
})

