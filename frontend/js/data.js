var url = "https://www.takemetour.com/api/home";
var img = "https://d2ad32w75yf016.cloudfront.net/inspiration/original/";
$.get(url, function(data) {
  //console.log(data);
  var inspiration = data.inspiration_layouts;
  //console.log(inspiration);
  for(var i = 0; i < inspiration.length; i++) {
	var row = inspiration[i].columns;
	//console.log(row);
	for(var j = 0; j < row.length; j++) {
	  var col = row[j].inspiration_id;
	  console.log(col);
	  console.log("name: " + col.name);
	  console.log("image: " + col.thumbnail_media_id.file_name);
	}
  }
});

