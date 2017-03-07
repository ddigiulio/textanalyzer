$(function(){


$('form').submit(function(event){

	event.preventDefault();
	var text = $('textarea').val().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();

   	var uniqueWords = [];
  	var totalChar = 0;
   	var totalUnique = 0;

   	for(var i = 0; i < text.length; i++){
   		totalChar += text[i].length;
   		if(jQuery.inArray(text[i],uniqueWords) == -1){
   			uniqueWords.push(text[i]);
   			totalUnique += 1;
   		}

   	}

   	var averageWord = totalChar / text.length;
   	console.log("Average word length is: " + averageWord);
   	console.log("Total number of unique words is: " + totalUnique);
   	



   	$('dl').html('<dt>Word count</dt>' + 
   				 '<dd>' + text.length + '</dd>' +

                '<dt>Unique word count</dt>' +
                '<dd>' + totalUnique + '</dd>' + 
                '<dt>Average word length</dt>' + 
                '<dd>' + averageWord + ' characters' + '</dd>');

   	 $('dl').removeClass('hidden');
	});

  });







