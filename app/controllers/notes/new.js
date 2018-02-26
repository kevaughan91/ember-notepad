import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
        var title = this.get('title');
        var noteText = this.get('text');
        console.log(noteText.toString());
        noteText = noteText.replace("/n", "<br>");
        console.log(noteText);


      let data = JSON.stringify({
        title : title+"", 
        text : noteText+""});
      $.post("/api/newnote/", data, function(data, status){
      
      });
        this.transitionToRoute('notes');
    },
    cancel(){
        this.transitionToRoute('notes');
    }
  }
});
