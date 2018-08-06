$(document).ready(() => {

  $("form").on("submit", e => {
    e.preventDefault();
    var value = $("form input").val();
    fetch("/todo", {
      method: 'POST',
      headers: {
        "Accept": 'application/json, text/plain',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ item: value })
    }).then(res => res.json()).then(data => {
      var li = '<li>' + data.item + '</li>';
      $('ul').append(li);
    })
  });

  $("ul").on("click", "li", function () {
    var item = '/' + $(this).text().trim().replace(/ /g, "-");
    fetch("/todo" + item, {
      method: 'DELETE'
    }).then((res) => $(this).remove());
  });

});
