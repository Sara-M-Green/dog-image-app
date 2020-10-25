function getDogImages() {
    let quantity = $('#quantity').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + quantity)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
 function displayResults(responseJson){
    console.log(responseJson);
    createImages(responseJson);
    //display the results section
    $('.results').removeClass('hidden');
  }

  function createImages(responseJson){
    for(let i = 0; i < responseJson.message.length; i ++){
      $('.images').append(
        `<img src="${responseJson.message[i]}" class="results-img">`)
    }
  }

  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      $('.images').html('');
      getDogImages();
    });
  }

  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });