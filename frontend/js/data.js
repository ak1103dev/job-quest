var url = "https://www.takemetour.com/api/home";
var img_url = "https://d2ad32w75yf016.cloudfront.net/inspiration/original/";
$.get(url, function(data) {
  //console.log(data);
  var inspiration = data.inspiration_layouts;
  //console.log(inspiration);
  for(var i = 0; i < inspiration.length; i++) {
	var row = inspiration[i].columns;
	//console.log(row);
	for(var j = 0; j < row.length; j++) {
	  var col = row[j].inspiration_id;
	  var name = col.name;
	  var image = col.thumbnail_media_id.file_name
	  //console.log(col);
	  console.log("name: " + name);
	  console.log("image: " + image);
	  var tag_img = '<a href="#"><img class="img-responsive" src="' + img_url + image + '"/></a>';
	  var tag_text = `<div class="text">
         				<h2>` + name + `</h2>
      				  </div>`
	  $("#"+ i + j).html(tag_img + tag_text);
	}
  }
});

