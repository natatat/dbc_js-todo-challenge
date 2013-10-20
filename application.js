$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $(".toolbox .add").on("click", function(){
      addTodo()
    })

    $(".delete").on("click", function(e){
      e.preventDefault()
      console.log("wut")
      removeTodo()
    })

    $(".complete").on("click", function(e){
      e.preventDefault()
      completeTodo()
    })
  }

  //Create functions to add, remove and complete todos

  function addTodo() {
    var $todoName = $(".toolbox .todo").val()
    $(".todo_list ul").append("<li>" + $todoName + "</li>")
    var $todo = buildTodo($todoName)
    $("#todo_template").html($todo.html()).show()
  }

  function removeTodo() {
    var $todo = $("#todo_template h2").text()
    $("li").remove(":contains("+$todo+")")
  }

  function completeTodo() {
    var $todo = $("#todo_template h2").text()
    $("li").filter(":contains("+$todo+")").append(" completed!")
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
