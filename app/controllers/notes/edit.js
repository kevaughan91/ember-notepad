import Controller from '@ember/controller';

export default Controller.extend({
  updatedText:"",
  actions: {
    save(id, text) {
      let data = JSON.stringify({
        test : 2, 
        text : text + "Asdfadsfasdfsdf"});
      $.post("/api/test/", data, function(data, status){
        
      });
      this.transitionToRoute('notes')
    },
    update(newValues){
      this.updatedText = newValues;
      console.log(this.updatedText);
    }
  }
});
