export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */


  this.namespace = '/api';
  var notes = [
    {
      type: 'notes',
      id: 'note1',
      attributes: {
        title: "groceries",
        content: "milk bread eggs soap"
      }
    },
    {
      type: 'notes',
      id: 'note2',
      attributes: {
        title: "note2",
        content: "adkjfa wefja sldkfj aef ajsflawkjf lgjkalfdkahja lkj "
      }
    },
    {
      type: 'notes',
      id: 'note3',
      attributes: {
        title: "stuff",
        content: "lorem ipsum alkgjaw ahjd alkjdfh alrekj a afhseaoiub absudogabsg"
      }
    }
  ];

  this.get('/notes', function(db, request) {
    if (request.queryParams.searchparam !== undefined) {
      let filteredRentals = notes.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.searchparam.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: notes };
    }
  });

  this.get('/notes/:id', function (db, request) {
    return { data: notes.find((note) => request.params.id === note.id) };
  });

  this.post('/newnote', function (db, request) {
      var params = JSON.parse(request.requestBody);
      notes.push({type: 'notes',
      id: notes.length+1,
      attributes: {
        title: params.title,
        content: params.text
      }})
      return "Successfully saved new note.";
  });

  this.post('/delete', function (db, request) {
  
      var params = JSON.parse(request.requestBody);
      console.log("id param: " + params.id);
      let noteindex = notes.findIndex((note) => params.id === note.id);
      console.log("rental index found: " + noteindex);
      console.log("rentals length before delete: " + notes.length);
      notes.splice(noteindex, 1);
      console.log("after delete " + notes.length);
      return "Successfully deleted note.";
  });





  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
