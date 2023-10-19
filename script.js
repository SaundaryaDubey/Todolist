let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnCleanup = $('#btnCleanup');
let btnSort = $('#btnSort');
let inpNewTask = $('#inpNewTask');

function addItem() {
    let listItem = $('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
      })
      listItem.click((event) => {
        // $(event.target).toggleClass('disabled')
         //or we can also write
         listItem.toggleClass('done')
      })
      ulTasks.append(listItem)
      inpNewTask.val('');
      toggleInputbtns()
}

function clearDone() {
   $('#ulTasks .done').remove();
   toggleInputbtns()
}

function Sort() {
  $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputbtns(){
    btnReset.prop('disabled',inpNewTask.val() == '')
    btnAdd.prop('disabled',inpNewTask.val() == '')
    btnSort.prop('disabled',ulTasks.children().length <1)
    btnCleanup.prop('disabled',ulTasks.children().length <1)
 }


inpNewTask.keypress((e) => {
    if(e.which == 13)addItem()
})

inpNewTask.on('input', toggleInputbtns)

btnAdd.click(addItem)
btnCleanup.click(clearDone)
btnReset.click(() => {
inpNewTask.val('')
toggleInputbtns()
})
btnSort.click(Sort)