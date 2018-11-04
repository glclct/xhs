/**
 * Created by SWF on 2016/11/5.
 */

$(function () {
   var name = location.search.split('?')[1].split('=')[1];
    $('#username').text(name);
    $('#setPaw').click(()=>{
        location.href = `setPaw.html?name=${$('#username').text()}`
    });
});